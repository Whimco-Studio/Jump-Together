import { PlayerBalance, PlayerData } from "./types";
import { createProducer } from "@rbxts/reflex";
import { Currency } from "shared/configs/currency";

export interface BalanceState {
	readonly [player: string]: PlayerBalance | undefined;
}

const initialState: BalanceState = {};

export const balanceSlice = createProducer(initialState, {
	changeBalance: (state, playerId: string, currency: Currency, amount: number) => {
		const balance = state[playerId];

		return {
			...state,
			[playerId]:
				balance !== undefined && balance !== undefined
					? {
							...balance,
							[currency]: math.floor(balance[currency] + amount + 0.5),
						}
					: balance,
		};
	},

	closeBalancePlayerData: (state, playerId: string) => ({
		...state,
		[playerId]: undefined,
	}),

	loadBalancePlayerData: (state, playerId: string, data: PlayerData) => {
		return {
			...state,
			[playerId]: data.balance,
		};
	},
});
