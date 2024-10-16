import { createProducer } from "@rbxts/reflex";

interface State {
	[key: string]: {
		Pets: string[];
		Player: Player;
	};
}

const initialState: State = {};

export const equipmentSlice = createProducer(initialState, {});
