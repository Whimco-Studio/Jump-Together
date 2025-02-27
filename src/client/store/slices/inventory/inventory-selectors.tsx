import { RootState } from "../..";

export const getShopItems = (state: RootState) => {
	return state.shop.ShopItems;
};

export const getInventoryDisplayItem = (state: RootState) => {
	return state.inventory.DisplayItem;
};
