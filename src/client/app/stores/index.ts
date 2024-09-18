import { combineProducers, InferState } from "@rbxts/reflex";
import { interfaceSlice } from "./Interface";
import { cameraSlice } from "./camera";
import { characterSelectionSlice } from "./characterSelection";
import { confirmationPopUpSlice } from "./confirmationPopUp";
import { characterCreationSlice } from "./characterCreation";
export type RootStore = typeof store;

export type RootState = InferState<RootStore>;

export function createStore() {
	const store = combineProducers({
		camera: cameraSlice,
		interface: interfaceSlice,
		confirmationPopUp: confirmationPopUpSlice,
		characterCreation: characterCreationSlice,
		characterSelection: characterSelectionSlice,
	});

	// store.applyMiddleware(profilerMiddleware, receiverMiddleware());

	return store;
}

export const store = createStore();
