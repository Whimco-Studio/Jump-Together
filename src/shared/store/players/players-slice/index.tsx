import { balanceSlice } from "./balance";
import { inventorySlice } from "./inventory";
import { settingsSlice } from "./settings";
import { statsSlice } from "./stats";
import { combineProducers } from "@rbxts/reflex";

export const playersSlice = combineProducers({
	balance: balanceSlice,
	inventory: inventorySlice,
	settings: settingsSlice,
	stats: statsSlice,
});
