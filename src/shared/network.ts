import { SerializedSharedState } from "./store";
import { Networking } from "@flamework/networking";
import { BroadcastAction } from "@rbxts/reflex";

interface ClientToServerEvents {
	ButtonPressed: (Button: BasePart, PressedAt: number) => undefined;

	CheckpointReached: (Origin: BasePart) => undefined;
	// Ropey
	CreateLobby: () => undefined;
	JoinLobby: (ID: string) => undefined;
	LeaveLobby: () => undefined;
	RefreshLobbies: () => undefined;
	Respawn: (from: string) => undefined;
	ServerLogLobbies: () => undefined;

	UpdateLobby: () => undefined;

	// Reflex
	store: {
		/**
		 * Called by the client when they are ready to receive data from the
		 * server.
		 */
		start: () => void;
	};
}

interface ServerToClientEvents {
	//
	CreateLobby: (Player: Player) => undefined;

	JoinLobby: (Player: Player, ID: string) => undefined;

	LeaveLobby: (Player: Player, ID: string) => undefined;
	RefreshLobbies: () => undefined;
	UpdateLobby: (LobbyID: string) => undefined;

	// Spawning
	spawn: (player: Player, character: Model) => void;

	// Reflex
	store: {
		/**
		 * Sends state updates to the client.
		 *
		 * @param actions - The actions to send to the client.
		 */
		dispatch: (actions: Array<BroadcastAction>) => void;
		hydrate: (state: SerializedSharedState) => void;
	};
}

interface ClientToServerFunctions {}

interface ServerToClientFunctions {}

export const GlobalEvents = Networking.createEvent<ClientToServerEvents, ServerToClientEvents>();
export const GlobalFunctions = Networking.createFunction<ClientToServerFunctions, ServerToClientFunctions>();
