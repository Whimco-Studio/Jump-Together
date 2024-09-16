import { RootState } from "../../stores";

export const getCurrentPage = (state: RootState) => {
	return state.interface.Page;
};

export const getCharacterCreationPanelTab = (state: RootState) => {
	return state.interface.Page;
};
