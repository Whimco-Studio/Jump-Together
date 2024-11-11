import { receiverMiddleware } from "./middleware/reciever";
import { interfaceSlice } from "./slices/Interface";
import { cameraSlice } from "./slices/camera";
import { characterCreationSlice } from "./slices/characterCreation/character-creation-slice";
import { characterSelectionSlice } from "./slices/characterSelection/character-selection-slice";
import { checkpointSlice } from "./slices/checkpoint";
import { confirmationPopUpSlice } from "./slices/confirmationPopUp/confirmation-pop-up-slice";
import { distanceSlice } from "./slices/distance";
import { inventorySlice } from "./slices/inventory";
import { shopSlice } from "./slices/shop/shop-slice";
import { InferState, combineProducers } from "@rbxts/reflex";
import { slices } from "shared/store";
export type RootStore = typeof clientProducer;

export type RootState = InferState<RootStore>;

export function createStore() {
	const store = combineProducers({
		...slices,

		camera: cameraSlice,
		characterCreation: characterCreationSlice,
		characterSelection: characterSelectionSlice,
		checkpoint: checkpointSlice,
		confirmationPopUp: confirmationPopUpSlice,
		distance: distanceSlice,
		interface: interfaceSlice,
		inventory: inventorySlice,
		shop: shopSlice,
	});

	// store.applyMiddleware(profilerMiddleware, receiverMiddleware());
	store.applyMiddleware(receiverMiddleware());

	return store;
}

export const clientProducer = createStore();
