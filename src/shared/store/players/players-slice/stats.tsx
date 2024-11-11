import { createProducer } from "@rbxts/reflex";

export interface StatsState {
	readonly [player: string]:
		| {
				height: number;
		  }
		| undefined;
}

const initialState: StatsState = {};

export const statsSlice = createProducer(initialState, {
	setHeight: (state, playerId: string, height: number) => ({
		...state,
		[playerId]: {
			...state[playerId],
			height: height,
		},
	}),
});
