import { broadcasterMiddleware } from "./middleware/broadcaster";
import type { InferState } from "@rbxts/reflex";
import { combineProducers } from "@rbxts/reflex";
import { slices } from "shared/store";

export type RootStore = typeof serverProducer;
export type RootState = InferState<RootStore>;

export function createStore(): typeof store {
	const store = combineProducers({
		...slices,
	});

	store.applyMiddleware(broadcasterMiddleware());

	return store;
}

/**
 * The Reflex store for the application.
 *
 * @see https://littensy.github.io/reflex/
 */
export const serverProducer = createStore();
