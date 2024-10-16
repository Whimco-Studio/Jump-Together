import { RootState } from "client/store";

export const getCurrentPage = (state: RootState) => {
	return state.interface.Page;
};

export const getCharacterCreationPanelTab = (state: RootState) => {
	return state.interface.Page;
};
