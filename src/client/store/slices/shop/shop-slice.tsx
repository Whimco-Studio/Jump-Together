import { createProducer } from "@rbxts/reflex";
import QuirkymalIcons from "client/app/images/quirkymal-icons";
import { QuirkymalTuning } from "shared/modules/tuning/quirkymals-tuning";

type ShopItem = (typeof QuirkymalTuning)[keyof typeof QuirkymalTuning];

interface State {
	DisplayItem: {
		price: number;
		quirkymal: keyof typeof QuirkymalIcons;
		rarity: "Common" | "Legendary" | "Rare" | "Uncommon";
	};
	FunFact: string | undefined;
	ItemName: string;
	ItemPrice: number;
	Rarity: "Common" | "Legendary" | "Rare" | "Uncommon";
	ShopItems: ShopItem[];
}

const initialState: State = {
	DisplayItem: {
		price: 0,
		quirkymal: "Alligator",
		rarity: "Common",
	},
	FunFact: "A Quirky fella",
	ItemName: "",
	ItemPrice: 0,
	Rarity: "Common",
	ShopItems: [],
};

export const shopSlice = createProducer(initialState, {
	setShopDisplayItem: (state, displayItem: State["DisplayItem"]) => {
		return { ...state, DisplayItem: displayItem };
	},

	setShopFunFact: (state, funFact: State["FunFact"]) => {
		return { ...state, FunFact: funFact };
	},

	setShopItemName: (state, name: State["ItemName"]) => {
		return { ...state, ItemName: name };
	},

	setShopItemPrice: (state, price: State["ItemPrice"]) => {
		return { ...state, ItemPrice: price };
	},

	setShopItems: (state, shopItems: ShopItem[]) => {
		return { ...state, ShopItems: shopItems };
	},

	setShopRarity: (state, rarity: State["Rarity"]) => {
		return { ...state, Rarity: rarity };
	},
});
