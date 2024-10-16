import { createProducer } from "@rbxts/reflex";

interface State {
	Active: boolean;
}

const initialState: State = {
	Active: true,
};

export const templateSlice = createProducer(initialState, {
	setActive: (state, active: boolean) => {
		state.Active = active;
		return state;
	},
});
