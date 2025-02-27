import { PlayerDailyRewards, PlayerData } from "./types";
import { createProducer } from "@rbxts/reflex";

export interface DailyRewardsState {
	readonly [player: string]: PlayerDailyRewards[] | undefined;
}

const initialState: DailyRewardsState = {};

export const dailyRewardsSlice = createProducer(initialState, {
	claimDailyReward: (state, playerId: string, day: 1 | 2 | 3 | 4 | 5 | 6 | 7) => {
		const data = state[playerId];

		if (!data) {
			return state; // If no data exists for the player, return the state unchanged
		}

		const updatedRewards = data.map((reward, index) => {
			if (index === day - 1) {
				return {
					...reward,
					reward: {
						...reward.reward,
						claimed: true,
					},
				};
			}
			return reward;
		});

		return {
			...state,
			[playerId]: updatedRewards,
		};
	},

	closeDailyRewardsPlayerData: (state, playerId: string) => {
		const newState = { ...state };
		delete newState[playerId]; // Properly remove key
		return newState;
	},

	loadDailyRewardsPlayerData: (state, playerId: string, data: PlayerData) => {
		return {
			...state,
			[playerId]: data.dailyRewards,
		};
	},
});
