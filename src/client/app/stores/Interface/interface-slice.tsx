import { createProducer } from "@rbxts/reflex";

interface State {
	Page: string;
	CharacterCreationPanelTab: string;
}

const initialState: State = {
	Page: "Home",
	CharacterCreationPanelTab: "Quirkymals",
};

export const interfaceSlice = createProducer(initialState, {
	setPage: (state, page: string) => ({ ...state, Page: page }),
	setCharacterCreationPanelTab: (state, tab: string) => {
		return { ...state, CharacterCreationPanelTab: tab };
	},
});
