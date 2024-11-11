/* eslint-disable roblox-ts/no-private-identifier */
import { HeightService } from "./height-service";
import { OnInit, Service } from "@flamework/core";
import ProfileService from "@rbxts/profileservice";
import { Profile } from "@rbxts/profileservice/globals";
import { Players, RunService } from "@rbxts/services";
import { serverProducer } from "server/store";
import { selectPlayerBalances, selectPlayerData, selectPlayerHeight } from "shared/store/players/players-selector";
import { PlayerData } from "shared/store/players/players-slice/types";
import { defaultPlayerData } from "shared/store/players/players-slice/utils";
import { forEveryPlayer } from "shared/utils/for-every-player";

let DataStoreName = "Production";
const KEY_TEMPLATE = "%d_Data.Version.1";

if (RunService.IsStudio()) DataStoreName = "Testing";

@Service()
export class PlayerDataService implements OnInit {
	private profileStore = ProfileService.GetProfileStore(DataStoreName, defaultPlayerData);
	private profiles = new Map<Player, Profile<PlayerData>>();

	constructor(private readonly heightService: HeightService) {
		this.heightService = heightService;
	}

	onInit() {
		forEveryPlayer(
			(player) => this.createProfile(player),
			(player) => this.removeProfile(player),
		);
	}

	onStart() {}

	private createProfile(player: Player) {
		const userId = player.UserId;
		const profileKey = KEY_TEMPLATE.format(userId);
		const profile = this.profileStore.LoadProfileAsync(profileKey);

		if (!profile) return player.Kick();

		profile.ListenToRelease(() => {
			this.profiles.delete(player);
			serverProducer.closePlayerData(tostring(player.UserId));
			player.Kick();
		});

		profile.AddUserId(userId);
		profile.Reconcile();

		this.profiles.set(player, profile);
		serverProducer.loadPlayerData(tostring(player.UserId), profile.Data);
		this.createLeaderstats(player);

		const unsubscribe = serverProducer.subscribe(selectPlayerData(tostring(player.UserId)), (save) => {
			if (save) profile.Data = save;
		});
		Players.PlayerRemoving.Connect((player) => {
			// biome-ignore lint/suspicious/noSelfCompare: <explanation>
			if (player === player) unsubscribe();
		});
	}

	private createLeaderstats(player: Player) {
		const leaderstats = new Instance("Folder", player);
		leaderstats.Name = "leaderstats";

		const height = new Instance("NumberValue", leaderstats);
		height.Name = "Height";

		const coins = new Instance("NumberValue", leaderstats);
		coins.Name = "Coins";

		const unsubscribeFromBalance = serverProducer.subscribe(
			selectPlayerBalances(tostring(player.UserId)),
			(save) => {
				coins.Value = save?.Coins ?? 0;
			},
		);

		const unsubscribeFromHeight = serverProducer.subscribe(selectPlayerHeight(tostring(player.UserId)), (save) => {
			height.Value = save?.height ?? 0;
		});

		Players.PlayerRemoving.Connect((player) => {
			// biome-ignore lint/suspicious/noSelfCompare: <explanation>
			if (player === player) {
				unsubscribeFromBalance();
				unsubscribeFromHeight();
			}
		});
	}

	private removeProfile(player: Player) {
		const profile = this.profiles.get(player);
		profile?.Release();
	}

	public getProfile(player: Player) {
		return this.profiles.get(player);
	}
}
