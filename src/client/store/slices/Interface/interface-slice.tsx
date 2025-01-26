import { createProducer } from "@rbxts/reflex";

interface State {
	InventoryItemPreview: Model | undefined;
	Page: string;
	ShopItemPreview: Model | undefined;
	Tab: string;
}

const initialState: State = {
	InventoryItemPreview: undefined,
	Page: "Home",
	ShopItemPreview: undefined,
	Tab: "Quirkymals",
};

export const interfaceSlice = createProducer(initialState, {
	setInventoryItemPreview: (state, itemPreview: Model | undefined) => {
		return { ...state, InventoryItemPreview: itemPreview };
	},
	setPage: (state, page: string) => {
		return { ...state, Page: page };
	},
	setShopItemPreview: (state, itemPreview: Model | undefined) => {
		return { ...state, ShopItemPreview: itemPreview };
	},
	setTab: (state, tab: string) => {
		return { ...state, Tab: tab };
	},
});
