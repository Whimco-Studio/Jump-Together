import { Object } from "@rbxts/luau-polyfill";
import { SharedState } from "shared/store";

export const getPlayerFromLobby = (state: SharedState, Player: Player) => {
	for (const [_, Lobby] of Object.entries(state.lobbies.Lobby)) {
		if (Lobby.Players.includes(Player) || Lobby.Host === Player) {
			return Lobby;
		}
	}

	return false;
};

export const getCharacterFromPlayer = (state: SharedState, Player: Player) => {
	return Player.Character;
};

export const GetHosts = (state: SharedState) => state.lobbies.Hosts;
export const GetLobbies = (state: SharedState) => state.lobbies.Lobby;

export const GetPlayersFromLobby = (ID: string) => {
	return (state: SharedState) => {
		return state.lobbies.Lobby[ID]?.Players;
	};
};

export const GetLobbyByID = (state: SharedState, ID: string) => state.lobbies.Lobby[ID];
export const GetLobbiesState = (state: SharedState) => state.lobbies;
export const GetLocalPlayerLobby = (state: SharedState, Player: Player) => {
	for (const [_, Lobby] of Object.entries(state.lobbies.Lobby)) {
		if (Lobby.Players.includes(Player) || Lobby.Host === Player) {
			return Lobby;
		}
	}

	return false;
};
