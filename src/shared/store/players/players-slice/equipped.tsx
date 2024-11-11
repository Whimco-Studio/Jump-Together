import { PlayerData } from "./types";
import { createProducer } from "@rbxts/reflex";
import { Quirkymal, Skin } from "shared/configs/quirkymals";

export interface EquippedState {
	readonly [player: string]:
		| {
				quirkymal: Quirkymal;
				skin: Skin;
		  }
		| undefined;
}

const initialState: EquippedState = {};

export const equippedSlice = createProducer(initialState, {
	closePlayerData: (state, playerId: string) => ({
		...state,
		[playerId]: undefined,
	}),

	equipQuirkymal: (state, playerId: string, quirkymal: Quirkymal) => ({
		...state,
		[playerId]: {
			...state[playerId],
			quirkymal: quirkymal, // Correctly assign quirkymal
			skin: quirkymal, // Correctly assign skin
		},
	}),

	equipSkin: (state, playerId: string, skin: Skin) => ({
		...state,
		[playerId]: {
			...state[playerId],
			quirkymal: state[playerId]?.quirkymal || "Dove", // Correctly assign quirkymal
			skin: skin, // Correctly assign skin
		},
	}),

	loadEquippedPlayerData: (state, playerId: string, data: PlayerData) => ({
		...state,
		[playerId]: {
			quirkymal: data.quirkymal, // Correctly assign quirkymals
			skin: data.skin, // Correctly assign skins
		},
	}),
});
