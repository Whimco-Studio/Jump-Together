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

export const selectPlayerData = (playerId: string) => {
	print("selectPlayerData");
	return createSelector(
		selectPlayerBalances(playerId),
		selectPlayerSettings(playerId),
		selectPlayerInventory(playerId),
		(balances, settings, inventory) => {
			return {
				balance: balances || defaultPlayerData.balance,
				quirkymal: inventory?.quirkymal || defaultPlayerData.quirkymal,
				quirkymals: inventory?.quirkymals || defaultPlayerData.quirkymals,
				settings: settings || defaultPlayerData.settings,
				skin: inventory?.skin || defaultPlayerData.skin,
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

export const selectPlayerCheckpoints = (playerId: string) => {
	return createSelector(selectPlayerData(playerId), (data) => {
		return data.checkpoints;
	});
};
