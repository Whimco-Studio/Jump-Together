import { combineProducers, InferState } from "@rbxts/reflex";
import { interfaceSlice } from "./Interface";
export type RootStore = typeof store;

export type RootState = InferState<RootStore>;

export function createStore() {
	const store = combineProducers({
		interface: interfaceSlice,
	});

	// store.applyMiddleware(profilerMiddleware, receiverMiddleware());

	return store;
}

export const store = createStore();
