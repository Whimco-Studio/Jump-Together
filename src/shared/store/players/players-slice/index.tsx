import { balanceSlice } from "./balance";
import { checkpointsSlice } from "./checkpoints";
import { dailyRewardsSlice } from "./daily-rewards";
import { equippedSlice } from "./equipped";
import { inventorySlice } from "./inventory";
import { settingsSlice } from "./settings";
import { statsSlice } from "./stats";
import { combineProducers } from "@rbxts/reflex";
export const playersSlice = combineProducers({
	balance: balanceSlice,
	checkpoints: checkpointsSlice,
	dailyRewards: dailyRewardsSlice,
	equipped: equippedSlice,
	inventory: inventorySlice,
	settings: settingsSlice,
	stats: statsSlice,
});
