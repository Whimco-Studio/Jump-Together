import { RootState } from "..";

export const getCharacterCreationTab = (state: RootState) => {
	return state.characterCreation.Tab;
};

export const getCharacterCreationModelPose = (state: RootState) => {
	return state.characterCreation.ModelPose;
};

export const getAccessoriesTab = (state: RootState) => {
	return state.characterCreation.AccessoriesTab;
};

export const getCharacterCreationPanelItem = (state: RootState) => {
	return state.characterCreation.SelectedItemIndex;
};

export const getCurrentQuirkymal = (state: RootState) => {
	return state.characterCreation.CurrentQuirkymal;
};

export const getCurrentSkin = (state: RootState) => {
	return state.characterCreation.CurrentSkin;
};

export const getCurrentAccessory = (state: RootState) => {
	return state.characterCreation.CurrentAccessory;
};

export const getItemSlots = (state: RootState) => {
	return state.characterCreation.ItemSlots;
};
