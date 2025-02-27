import { createProducer } from "@rbxts/reflex";

type Page = "Checkpoints" | "DailyRewards" | "Home" | "Inventory" | "Rewards" | "Shop";

interface State {
	InventoryItemPreview: Model | undefined;
	IsMobile: boolean;
	Page: Page;
	ShopItemPreview: Model | undefined;
	Tab: "Accessories" | "Gamepasses" | "Quirkymals" | "Skins";
}

const initialState: State = {
	InventoryItemPreview: undefined,
	IsMobile: false,
	Page: "Home",
	ShopItemPreview: undefined,
	Tab: "Quirkymals",
};

export const interfaceSlice = createProducer(initialState, {
	setInventoryItemPreview: (state, itemPreview: Model | undefined) => {
		return { ...state, InventoryItemPreview: itemPreview };
	},
	setIsMobile: (state, isMobile: boolean) => {
		return { ...state, IsMobile: isMobile };
	},
	setPage: (state, page: Page) => {
		return { ...state, Page: page };
	},
	setShopItemPreview: (state, itemPreview: Model | undefined) => {
		return { ...state, ShopItemPreview: itemPreview };
	},

	setTab: (state, tab: State["Tab"]) => {
		return { ...state, Tab: tab };
	},
});
