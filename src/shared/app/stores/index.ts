import { interfaceSlice } from "./Interface";
import { cameraSlice } from "./camera";
import { characterCreationSlice } from "./characterCreation/character-creation-slice";
import { characterSelectionSlice } from "./characterSelection/character-selection-slice";
import { confirmationPopUpSlice } from "./confirmationPopUp/confirmation-pop-up-slice";
import { InferState, combineProducers } from "@rbxts/reflex";
export type RootStore = typeof store;

export type RootState = InferState<RootStore>;

export function createStore() {
	const store = combineProducers({
		camera: cameraSlice,
		characterCreation: characterCreationSlice,
		characterSelection: characterSelectionSlice,
		confirmationPopUp: confirmationPopUpSlice,
		interface: interfaceSlice,
	});

	// store.applyMiddleware(profilerMiddleware, receiverMiddleware());

	return store;
}

export const store = createStore();
