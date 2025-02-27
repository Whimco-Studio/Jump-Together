import { PlayerData, PlayerEquipped } from "./types";
import { createProducer } from "@rbxts/reflex";
import { Quirkymal, Skin } from "shared/configs/quirkymals";

export interface EquippedState {
	readonly [player: string]: PlayerEquipped | undefined;
}

const initialState: EquippedState = {};

export const equippedSlice = createProducer(initialState, {
	closeEquippedPlayerData: (state, playerId: string) => ({
		...state,
		[playerId]: undefined,
	}),

	equipQuirkymal: (state, playerId: string, quirkymal: Quirkymal) => ({
		...state,
		[playerId]: {
			...state[playerId], // Preserve existing data
			quirkymal: quirkymal,
			skin: quirkymal,
		},
	}),

	equipSkin: (state, playerId: string, skin: Skin) => ({
		...state,
		[playerId]: {
			...state[playerId],
			quirkymal: state[playerId]?.quirkymal || "Dove",
			skin: skin,
		},
	}),

	loadEquippedPlayerData: (state, playerId: string, data: PlayerData) => ({
		...state,
		[playerId]: data.equipped,
	}),
});
