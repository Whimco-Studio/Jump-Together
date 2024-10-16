import { createProducer } from "@rbxts/reflex";

interface LobbiesSlice {
	readonly Hosts: {
		readonly [key: string]: Player | undefined;
	};

	readonly Lobby: {
		readonly [key: string]: Lobby | undefined;
	};
}

const initialState: LobbiesSlice = {
	Hosts: {},
	Lobby: {},
};

export const lobbiesSlice = createProducer(initialState, {
	createLobby: (state, { payload }: { payload: { Host: Player; ID: string; Players: Player[] } }) => {
		return {
			Hosts: {
				...state.Hosts,
				[payload.ID]: payload.Host,
			},
			Lobby: {
				...state.Lobby,
				[payload.ID]: {
					Host: payload.Host,
					ID: payload.ID,
					Players: [...payload.Players],
				},
			},
		};
	},

	joinLobby: (state, { payload }: { payload: { Lobby: Lobby; Player: Player } }) => {
		const { Lobby, Player } = payload;
		if (!Lobby.Players.includes(Player)) {
			return {
				Hosts: {
					...state.Hosts,
				},
				Lobby: {
					...state.Lobby,
					[Lobby.ID]: {
						...Lobby,
						Players: [...Lobby.Players, Player],
					},
				},
			};
		}

		return state;
	},

	leaveLobby: (state, { payload }: { payload: { Lobby: Lobby; Player: Player } }) => {
		const { Lobby, Player } = payload;
		let currentState = state;

		if (Lobby.Players.includes(Player)) {
			const index = Lobby.Players.indexOf(Player);
			if (index !== -1) {
				currentState = {
					Hosts: {
						...currentState.Hosts,
					},
					Lobby: {
						...currentState.Lobby,
						[Lobby.ID]: {
							...Lobby,
							Players: Lobby.Players.filter((t) => t !== Player),
						},
					},
				};
			}
		}
		if (Lobby.Host === Player) {
			currentState = {
				Hosts: {
					...currentState.Hosts,
					[Lobby.ID]: undefined,
				},
				Lobby: {
					...currentState.Lobby,
					[Lobby.ID]: undefined,
				},
			};
		}
		return currentState;
	},
});
