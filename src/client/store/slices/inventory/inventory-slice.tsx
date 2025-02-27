import { createProducer } from "@rbxts/reflex";
import QuirkymalIcons from "client/app/images/quirkymal-icons";
import { QuirkymalTuning } from "shared/modules/tuning/quirkymals-tuning";

type InventoryItem = (typeof QuirkymalTuning)[keyof typeof QuirkymalTuning];

interface State {
	DisplayItem: {
		quirkymal: keyof typeof QuirkymalIcons;
		rarity: "Common" | "Legendary" | "Rare" | "Uncommon";
	};
	InventoryItems: InventoryItem[];
}

const initialState: State = {
	DisplayItem: {
		quirkymal: "Alligator",
		rarity: "Common",
	},
	InventoryItems: [],
};

export const inventorySlice = createProducer(initialState, {
	setInventoryDisplayItem: (state, displayItem: State["DisplayItem"]) => {
		return { ...state, DisplayItem: displayItem };
	},
	setInventoryItems: (state, inventoryItems: InventoryItem[]) => {
		return { ...state, InventoryItems: inventoryItems };
	},
});
