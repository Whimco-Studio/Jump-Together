//!optimize 2

import { Controller, OnInit, OnStart } from "@flamework/core";
import { Object } from "@rbxts/luau-polyfill";
import type { LogClass } from "@rbxts/rbxts-sleitnick-log";
import { CollectionService, ContextActionService, Players } from "@rbxts/services";
import { Events } from "client/network";
import { clientProducer } from "client/store";
import { GetLobbiesAndHosts, GetLocalPlayerLobby } from "shared/store/lobbies/lobbies-selector";

@Controller({})
export class LobbyController implements OnInit, OnStart {
	private activationDistance = 10;
	private hostPrompts: { [key: string]: ProximityPrompt | undefined } = {}; // Store references to ProximityPrompts
	private hostConnections: { [key: string]: RBXScriptConnection | undefined };

	public constructor(private readonly log: LogClass) {
		this.hostConnections = {};
	}

	public onInit() {}

	public onStart() {
		// Rope System
		this.listenForLobbies();
		this.proximityPrompts();

		const handleAction = (actionName: string, inputState: Enum.UserInputState, inputObject: InputObject) => {
			if (actionName === "CreateLobby") {
				if (inputState === Enum.UserInputState.Begin) {
					Events.CreateLobby.fire();
					// this.log.Info("Creating lobby");
				}
			} else if (actionName === "LeaveLobby" && inputState === Enum.UserInputState.Begin) {
				Events.LeaveLobby.fire();
				// this.log.Info("Leaving lobby");
			} else if (actionName === "LogLobbies" && inputState === Enum.UserInputState.Begin) {
				this.log.Info("Logging Lobbies", clientProducer.getState().lobbies);
				Events.ServerLogLobbies.fire();
			}
		};

		// When the player sits in the vehicle:
		ContextActionService.BindAction("CreateLobby", handleAction, true, Enum.KeyCode.M);
		ContextActionService.BindAction("LogLobbies", handleAction, true, Enum.KeyCode.R);
		ContextActionService.BindAction("LeaveLobby", handleAction, true, Enum.KeyCode.L);
	}

	private listenForLobbies() {}

	private proximityPrompts() {
		clientProducer.subscribe(GetLobbiesAndHosts, (lobbies) => {
			// Check for hosts that have left or lobbies that are destroyed
			for (const [LobbyID, Connection] of Object.entries(this.hostConnections)) {
				let lobbyStillExists = false;
				for (const [_, Lobby] of Object.entries(lobbies.hosts)) {
					if (LobbyID === tostring(Lobby.UserId)) {
						lobbyStillExists = true;
						break;
					}
				}

				if (!lobbyStillExists) {
					// this.log.Info(`Removing host connection and ProximityPrompt for ${LobbyID}`);

					// Disconnect and remove ProximityPrompt
					if (this.hostPrompts[LobbyID]) {
						this.hostPrompts[LobbyID]?.Destroy();
						this.hostPrompts[LobbyID] = undefined;
					}

					Connection?.Disconnect();
					this.hostConnections[LobbyID] = undefined;
				}
			}

			// Add new hosts that don't have a monitor signal
			for (const [LobbyID, Host] of Object.entries(lobbies.hosts)) {
				const HostPlayerID = tostring(Host.UserId);
				if (!this.hostConnections[HostPlayerID]) {
					// this.log.Info(`Adding new host connection for ${HostPlayerID}`);
					this.monitorHost(Host, LobbyID as string);
				}
			}
		});
	}
	private monitorHost(Host: Player, LobbyID: string) {
		const CurrentCharacter = Host.Character || Host.CharacterAdded.Wait()[0];

		this.hostConnections[Host.UserId] = Host.CharacterAdded.Connect((Character) => {
			this.createProximityPrompt(Host, Character as PlayerRig, LobbyID);
		});

		this.createProximityPrompt(Host, CurrentCharacter as PlayerRig, LobbyID);

		// store.once()
	}

	private createProximityPrompt(Player: Player, Character: PlayerRig, LobbyID: string) {
		const PreExistingLobby = GetLocalPlayerLobby(clientProducer.getState(), Player);

		if (PreExistingLobby) {
			print(PreExistingLobby);
		} else {
			warn(`Player ${Player.Name} is not in a lobby`);
			return;
		}

		const ProximityPrompt = new Instance("ProximityPrompt") as ProximityPrompt;
		ProximityPrompt.Parent = Character;
		ProximityPrompt.RequiresLineOfSight = false;
		ProximityPrompt.ActionText = "Join Lobby";
		ProximityPrompt.MaxActivationDistance = 10;
		ProximityPrompt.Parent = Character;
		ProximityPrompt.Enabled = !this.localPlayerIsInLobby();
		ProximityPrompt.AddTag("LobbyPrompt");

		this.hostPrompts[LobbyID] = ProximityPrompt; // Store the ProximityPrompt reference

		let Connection: RBXScriptConnection | undefined = undefined;

		Connection = ProximityPrompt.Triggered.Connect(() => {
			Events.JoinLobby.fire(LobbyID);
		});

		ProximityPrompt.Destroying.Once(() => {
			if (Connection) {
				Connection.Disconnect();
			}
		});
	}

	private localPlayerIsInLobby() {
		const InLobby = GetLocalPlayerLobby(clientProducer.getState(), Players.LocalPlayer);
		if (InLobby) {
			return true;
		}
		return false;
	}

	private monitorLobbyPrompts() {
		CollectionService.GetInstanceAddedSignal("LobbyPrompt").Connect((Part) => {
			const Prompt = Part as ProximityPrompt;
			Prompt.Enabled = !this.localPlayerIsInLobby();
		});
	}
}
