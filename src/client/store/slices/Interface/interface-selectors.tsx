import { RootState } from "client/store";

export const getCurrentPage = (state: RootState) => {
	return state.interface.Page;
};

export const getCurrentTab = (state: RootState) => {
	return state.interface.Tab;
};

export const getShopItemPreview = (state: RootState) => {
	return state.interface.ShopItemPreview;
};

export const getInventoryItemPreview = (state: RootState) => {
	return state.interface.InventoryItemPreview;
};

export const getIsMobile = (state: RootState) => {
	return state.interface.IsMobile;
};
