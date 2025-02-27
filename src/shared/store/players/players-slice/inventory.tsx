import { PlayerData, PlayerQuirkymals, PlayerSkins } from "./types";
import { createProducer } from "@rbxts/reflex";
import { Quirkymal, Skin } from "shared/configs/quirkymals";

export interface InventoryState {
	readonly [player: string]:
		| {
				quirkymals: PlayerQuirkymals;
				skins: PlayerSkins;
		  }
		| undefined;
}

const initialState: InventoryState = {};

export const inventorySlice = createProducer(initialState, {
	closeInventoryPlayerData: (state, playerId: string) => {
		return {
			...state,
			[playerId]: undefined,
		};
	},

	loadInventoryPlayerData: (state, playerId: string, data: PlayerData) => {
		return {
			...state,
			[playerId]: {
				quirkymals: data.quirkymals,
				skins: data.skins,
			},
		};
	},

	unlockQuirkymal: (state, playerId: string, quirkymal: Quirkymal) => {
		print("Unlocking Quirkymal");
		// Ensure the player data exists in the state
		const playerData = state[playerId];
		if (!playerData) {
			// If no player data is found, return the state unchanged
			return state;
		}

		return {
			...state,
			[playerId]: {
				...playerData,
				quirkymals: {
					...playerData.quirkymals,
					[quirkymal]: true, // Mark the quirkymal as unlocked
				} as PlayerQuirkymals,
			},
		};
	},

	unlockSkin: (state, playerId: string, skin: Skin) => {
		print("Unlocking Skin");
		// Ensure the player data exists in the state
		const playerData = state[playerId];
		if (!playerData) {
			// If no player data is found, return the state unchanged
			return state;
		}

		return {
			...state,
			[playerId]: {
				...playerData,
				skins: {
					...playerData.skins,
					[skin]: true, // Mark the skin as unlocked
				} as PlayerSkins,
			},
		};
	},
});
