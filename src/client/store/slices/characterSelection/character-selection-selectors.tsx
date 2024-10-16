import { RootState } from "client/store";

export const getCurrentlySelectedCharacter = (state: RootState) => {
	return state.characterSelection.CurrentlySelectedCharacter;
};
