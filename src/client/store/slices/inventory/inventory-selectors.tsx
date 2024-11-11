import { RootState } from "../..";

export const getShopItems = (state: RootState) => {
	return state.shop.ShopItems;
};
