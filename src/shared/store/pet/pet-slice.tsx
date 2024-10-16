import { createProducer } from "@rbxts/reflex";

interface State {
	[key: string]: {
		Host: Player;
		Level: number;
		Pet: MeshPart;
		State: string;
		Stats: {
			Joy: number;
		};
	};
}

const initialState: State = {};

export const petSlice = createProducer(initialState, {});
