import { RootState } from "../..";

export const getShopItems = (state: RootState) => {
	return state.shop.ShopItems;
};

export const getShopRarity = (state: RootState) => {
	return state.shop.Rarity;
};

export const getShopItemPrice = (state: RootState) => {
	return state.shop.ItemPrice;
};

export const getShopItemName = (state: RootState) => {
	return state.shop.ItemName;
};

export const getShopFunFact = (state: RootState) => {
	return state.shop.FunFact;
};
