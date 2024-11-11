import { createProducer } from "@rbxts/reflex";
import { QuirkymalTuning } from "shared/modules/tuning/quirkymals-tuning";

type InventoryItem = (typeof QuirkymalTuning)[keyof typeof QuirkymalTuning];

interface State {
	InventoryItems: InventoryItem[];
}

const initialState: State = {
	InventoryItems: [],
};

export const inventorySlice = createProducer(initialState, {
	setInventoryItems: (state, inventoryItems: InventoryItem[]) => {
		return { ...state, InventoryItems: inventoryItems };
	},
});
