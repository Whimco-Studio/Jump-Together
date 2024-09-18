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
