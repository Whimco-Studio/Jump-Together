import { createProducer } from "@rbxts/reflex";

interface State {
	CoinsPerMin: number;
	Distance: number;
}

const initialState: State = {
	CoinsPerMin: 0,
	Distance: 0,
};

export const distanceSlice = createProducer(initialState, {
	setCoinsPerMin: (state, coinsPerMin: number) => {
		return { ...state, CoinsPerMin: coinsPerMin };
	},
	setDistance: (state, distance: number) => {
		return { ...state, Distance: distance };
	},
});
