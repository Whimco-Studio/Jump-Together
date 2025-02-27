import { PlayerData, PlayerSettings } from "./types";
import { createProducer } from "@rbxts/reflex";

export interface SettingsState {
	readonly [player: string]: PlayerSettings | undefined;
}

const initialState: SettingsState = {};

export const settingsSlice = createProducer(initialState, {
	closeSettingsPlayerData: (state, player: string) => ({
		...state,
		[player]: undefined,
	}),

	loadSettingsPlayerData: (state, player: string, data: PlayerData) => ({
		...state,
		[player]: data.settings,
	}),

	toggleSetting: (state, player: string, setting: keyof PlayerSettings) => ({
		...state,
		[player]: {
			...state[player]!,
			[setting]: !state[player]![setting],
		},
	}),
});
