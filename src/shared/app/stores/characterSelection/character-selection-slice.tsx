import { createProducer } from "@rbxts/reflex";

interface State {
	CurrentlySelectedCharacter?: PlayerRig;
}

const initialState: State = {
	CurrentlySelectedCharacter: undefined,
};

export const characterSelectionSlice = createProducer(initialState, {
	setCurrentlySelectedCharacter: (state, character: PlayerRig) => {
		return { ...state, CurrentlySelectedCharacter: character };
	},
});
