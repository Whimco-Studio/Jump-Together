//!optimize 2

import { OnInit, OnStart, Service } from "@flamework/core";
import { Object } from "@rbxts/luau-polyfill";
import type { LogClass } from "@rbxts/rbxts-sleitnick-log";
import { HttpService, Players, Workspace } from "@rbxts/services";
import { Events } from "server/network";
import { serverProducer } from "server/store";
import { GetLobbyByID, GetLocalPlayerLobby, getPlayerFromLobby } from "shared/store/lobbies/lobbies-selector";

@Service({})
export class RopeService implements OnInit, OnStart {
	Lobbies: { [key: string]: Lobby | undefined };
	LobbiesFolder: Folder;
	public constructor(private readonly log: LogClass) {
		this.Lobbies = {};
		this.LobbiesFolder = Workspace.FindFirstChild("RopeLobbies") as Folder;
	}

	public onInit() {}

	public onStart() {
		this.handleEvents();
	}

	public handleEvents() {
		Events.CreateLobby.connect((Player) => {
			// this.log.Info(`${Player.Name} creating a lobby`);
			const NewLobbyID = this.CreateLobby(Player);
			// this.log.Info(`Lobby ${NewLobbyID} created`);
		});

		Events.LeaveLobby.connect((Player: Player) => {
			// this.log.Info(`${Player.Name} leaving a lobby`);
			this.LeaveLobby(Player);
		});

		Events.JoinLobby.connect((Player: Player, ID: string) => {
			this.JoinLobby(Player, ID);
		});

		Events.ServerLogLobbies.connect(() => {
			this.log.Info("Lobbies:", serverProducer.getState().lobbies);
		});

		Players.PlayerRemoving.Connect((Player) => {
			const CurrentLobby = this.GetLobbyFromPlayer(Player);
			if (CurrentLobby) {
				this.LeaveLobby(Player);
			}
		});
	}

	public GetLobbyFromPlayer(Player: Player) {
		for (const [ID, CurrentLobby] of Object.entries(this.Lobbies)) {
			if (CurrentLobby.Players.includes(Player) || CurrentLobby.Host === Player) {
				return CurrentLobby;
			}
		}

		return false;
	}

	public CreateLobby(Player: Player) {
		const LobbyID = HttpService.GenerateGUID(false);
		const PreExistingLobby = GetLocalPlayerLobby(serverProducer.getState(), Player);

		if (PreExistingLobby) {
			warn(`Player ${Player.Name} already in lobby ${PreExistingLobby}`);
			return PreExistingLobby.ID;
		}

		serverProducer.createLobby({
			payload: {
				Host: Player,
				ID: LobbyID,
				Players: [Player],
			},
		});

		return LobbyID;
	}

	public JoinLobby(Player: Player, ID: string) {
		// Check if the lobby exists
		const PreExistingLobby = GetLocalPlayerLobby(serverProducer.getState(), Player);

		if (PreExistingLobby) {
			warn(`Player ${Player.Name} already in lobby ${PreExistingLobby.ID}`);
			this.log.Info("Lobby:", PreExistingLobby);
			return;
		}

		const LobbyFromID = GetLobbyByID(serverProducer.getState(), ID);
		if (!LobbyFromID) {
			return;
		}

		serverProducer.joinLobby({
			payload: {
				Lobby: LobbyFromID,
				Player,
			},
		});
	}

	public LeaveLobby(Player: Player) {
		// Check if the lobby exists
		const state = serverProducer.getState();
		const CurrentLobby = getPlayerFromLobby(state, Player);
		if (!CurrentLobby) {
			return;
		}

		serverProducer.leaveLobby({
			payload: {
				Lobby: CurrentLobby,
				Player,
			},
		});
	}
}
