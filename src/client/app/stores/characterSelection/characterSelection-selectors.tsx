import { RootState } from "..";

export const getCurrentlySelectedCharacter = (state: RootState) => {
	return state.characterSelection.CurrentlySelectedCharacter;
};
