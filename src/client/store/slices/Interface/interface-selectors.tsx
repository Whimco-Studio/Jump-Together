import { RootState } from "client/store";

export const getCurrentPage = (state: RootState) => {
	return state.interface.Page;
};

export const getCurrentTab = (state: RootState) => {
	return state.interface.Tab;
};

export const getItemPreview = (state: RootState) => {
	return state.interface.ItemPreview;
};
