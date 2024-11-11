import { createProducer } from "@rbxts/reflex";
import { QuirkymalTuning } from "shared/modules/tuning/quirkymals-tuning";

type ShopItem = (typeof QuirkymalTuning)[keyof typeof QuirkymalTuning];

interface State {
	FunFact: string | undefined;
	ItemName: string;
	ItemPrice: number;
	Rarity: "Common" | "Quirky" | "Rare" | "Special" | "Uncommon";
	ShopItems: ShopItem[];
}

const initialState: State = {
	FunFact: "A Quirky fella",
	ItemName: "",
	ItemPrice: 0,
	Rarity: "Common",
	ShopItems: [],
};

export const shopSlice = createProducer(initialState, {
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
