import { PlayerDataService } from "./player-data-service";
import { OnInit, OnStart, Service } from "@flamework/core";
import { Profile } from "@rbxts/profileservice/globals";
import { Players, ReplicatedStorage, ServerStorage, Workspace } from "@rbxts/services";
import { Events } from "server/network";
import { serverProducer } from "server/store";
import { Quirkymal } from "shared/configs/quirkymals";
import { GetLocalPlayerLobby } from "shared/store/lobbies/lobbies-selector";
import { PlayerData } from "shared/store/players/players-slice/types";

const Biome = {
	"Dark Depths": true,
	"Deadly Desert": true,
	"Jumpin' Jungle": true,
};

@Service({})
export class QuirkymalService implements OnStart, OnInit {
	private Characters: { [key: number]: Model } = {};
	private SaveSpawns: { [key: number]: BasePart } = {};
	private Spawn = Workspace.Spawns.SpawnLocation;
	private CharactersGroup: Instance =
		Workspace.FindFirstChild("Players", true) || (new Instance("Model", Workspace) as Instance);

	constructor(private readonly playerDataService: PlayerDataService) {}

	onInit() {
		Players.PlayerAdded.Connect((player) => {
			while (!this.playerDataService.getProfile(player)) {
				wait(1);
			}

			const PlayerData = this.playerDataService.getProfile(player) as Profile<PlayerData, unknown>;

			this.registerAttributes(player, PlayerData.Data);

			player.CharacterAdded.Connect((character: Model) => {
				this.SpawnPlayer(player, character);
			});

			this.playerAttributeEvents(player);
			this.addCharacter(player);
		});
		this.CharactersGroup.Name = "Players";
	}

	onStart() {
		Events.Respawn.connect((player: Player, from: string) => {
			if (from === "DeathZone") {
				const LobbyFromPlayer = GetLocalPlayerLobby(serverProducer.getState(), player);
				if (LobbyFromPlayer) {
					for (const player of LobbyFromPlayer.Players) {
						this.addCharacter(player);
					}
				} else {
					this.addCharacter(player);
				}
			} else {
				this.addCharacter(player);
			}
		});

		Events.CheckpointReached.connect((player: Player, checkpoint: BasePart) => {
			this.SaveSpawns[player.UserId] = checkpoint;

			const biome = checkpoint.GetAttribute("Biome") as Checkpoint | undefined;

			if (biome && Biome[biome as keyof typeof Biome]) {
				player.SetAttribute("Biome", biome);

				serverProducer.unlockCheckpoint(tostring(player.UserId), biome);

				print("Unlocked Biome", serverProducer.getState().players.checkpoints[tostring(player.UserId)]);
				print(this.playerDataService.getProfile(player));
			}
		});

		Events.EquipQuirkymal.connect((player: Player, quirkymalName) => {
			player.SetAttribute("Quirkymal", quirkymalName);
			print(quirkymalName);
			serverProducer.equipQuirkymal(tostring(player.UserId), quirkymalName);
		});

		Events.EquipSkin.connect((player: Player, quirkymalName) => {
			player.SetAttribute("Skin", quirkymalName);
			player.Character?.SetAttribute("Skin", quirkymalName);
			serverProducer.equipSkin(tostring(player.UserId), quirkymalName);
		});
	}

	private registerAttributes(player: Player, playerData: PlayerData) {
		print(playerData.equipped, playerData.equipped.quirkymal, playerData.equipped.skin);
		player.SetAttribute("Quirkymal", playerData.equipped.quirkymal);
		player.SetAttribute("Skin", playerData.equipped.skin);
	}

	private playerAttributeEvents(player: Player) {
		player.GetAttributeChangedSignal("Quirkymal").Connect((value: string) => {
			player.SetAttribute("Skin", value);
			this.addCharacter(player);
		});

		player.GetAttributeChangedSignal("Skin").Connect((value: string) => {
			if (player.Character) {
				player.Character.SetAttribute("Skin", value);
			}
		});

		this.chatCommand(player);
	}

	private addCharacter(player: Player) {
		const PreviousCharacter = this.Characters[player.UserId] || player.Character;

		if (PreviousCharacter) {
			PreviousCharacter.Destroy();
		}

		const playerQuirkymal = player.GetAttribute("Quirkymal") as string;
		const StarterCharacterRig = ServerStorage.FindFirstChild("StarterCharacter")?.Clone() as {
			Humanoid: Humanoid;
			HumanoidRootPart: BasePart;
		} & Model;

		if (StarterCharacterRig) {
			StarterCharacterRig.HumanoidRootPart.Transparency = 0.5;
			StarterCharacterRig.SetAttribute("Quirkymal", playerQuirkymal === undefined ? "Dove" : playerQuirkymal);
			StarterCharacterRig.SetAttribute("Skin", player.GetAttribute("Skin") as Quirkymal);
			StarterCharacterRig.SetAttribute("HeadWear", "None");
			StarterCharacterRig.Name = player.DisplayName;
		}

		StarterCharacterRig.Humanoid.JumpPower = 22.5;

		this.Characters[player.UserId] = StarterCharacterRig;
		player.Character = StarterCharacterRig;
	}

	private SpawnPlayer(player: Player, character: Model) {
		const SaveSpawn = this.SaveSpawns[player.UserId];

		if (ReplicatedStorage.GameSettings.TestSpawn.Value === true) {
			character.PivotTo(Workspace.TestSpawn.CFrame.mul(new CFrame(0, 5.5, 0)));
			character.Parent = this.CharactersGroup;
			Events.spawn.broadcast(player, character);
			return;
		}

		if (SaveSpawn) {
			character.PivotTo(SaveSpawn.CFrame.mul(new CFrame(0, 5.5, 0)));
		} else {
			character.PivotTo(this.Spawn.CFrame.mul(new CFrame(0, 5.5, 0)));
		}

		character.Parent = this.CharactersGroup;

		Events.spawn.broadcast(player, character);
	}

	private chatCommand(player: Player) {
		player.Chatted.Connect((message: string, recipient?: Player) => {
			if (!recipient) {
				try {
					const [quirkymalName, number] = message.gsub("^%l", string.upper);

					print(ReplicatedStorage.Assets.Quirkymals.FindFirstChild(quirkymalName));

					if (ReplicatedStorage.Assets.Quirkymals.FindFirstChild(quirkymalName)) {
						player.SetAttribute("Quirkymal", message);
					}
				} catch (error) {
					warn(`Error setting Quirkymal attribute: ${error}`);
				}
			}
		});
	}
}
