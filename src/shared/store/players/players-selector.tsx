import { SharedState } from "..";
import { PlayerData } from "./players-slice/types";
import { defaultPlayerData } from "./players-slice/utils";
import { createSelector } from "@rbxts/reflex";
import { Currency } from "shared/configs/currency";
import { Setting } from "shared/configs/settings";

export const selectPlayerBalances = (playerId: string) => {
	return (state: SharedState) => {
		return state.players.balance[playerId];
	};
};

export const selectPlayerBalance = (playerId: string, currency: Currency) => {
	return createSelector(selectPlayerBalances(playerId), (balances) => {
		return balances?.[currency];
	});
};

export const selectPlayerSettings = (playerId: string) => {
	return (state: SharedState) => {
		return state.players.settings[playerId];
	};
};

export const selectPlayerSetting = (playerId: string, setting: Setting) => {
	return createSelector(selectPlayerSettings(playerId), (settings) => {
		return settings?.[setting];
	});
};

export const selectPlayerInventory = (playerId: string) => {
	return (state: SharedState) => {
		return state.players.inventory[playerId];
	};
};

export const selectPlayersInventory = () => {
	return (state: SharedState) => {
		return state.players.inventory;
	};
};

export const selectPlayersEquipped = () => {
	return (state: SharedState) => {
		return state.players.equipped;
	};
};

export const selectPlayerEquipped = (playerId: string) => {
	return (state: SharedState) => {
		return state.players.equipped[playerId];
	};
};

export const selectPlayerCheckpoints = (playerId: string) => {
	return (state: SharedState) => {
		return state.players.checkpoints[playerId];
	};
};

export const selectPlayerDailyRewards = (playerId: string) => {
	return (state: SharedState) => {
		return state.players.dailyRewards[playerId];
	};
};

export const selectPlayerData = (playerId: string) => {
	return createSelector(
		selectPlayerBalances(playerId),
		selectPlayerSettings(playerId),
		selectPlayerInventory(playerId),
		selectPlayerEquipped(playerId),
		selectPlayerCheckpoints(playerId),
		selectPlayerDailyRewards(playerId),
		(balances, settings, inventory, equipped, checkpoints, dailyRewards) => {
			return {
				balance: balances || defaultPlayerData.balance,
				checkpoints: checkpoints || defaultPlayerData.checkpoints,
				dailyRewards: dailyRewards || defaultPlayerData.dailyRewards,
				equipped: equipped || defaultPlayerData.equipped,
				quirkymals: inventory?.quirkymals || defaultPlayerData.quirkymals,
				settings: settings || defaultPlayerData.settings,
				skins: inventory?.skins || defaultPlayerData.skins,
			} as PlayerData;
		},
	);
};

export const selectPlayerHeight = (playerId: string) => {
	return (state: SharedState) => {
		return state.players.stats[playerId];
	};
};
