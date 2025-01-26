import { PlayerData, PlayerSettings } from "./types";
import { SETTINGS } from "shared/configs/settings";

const settings = {} as PlayerSettings;
for (const setting of SETTINGS) {
	settings[setting] = false;
}

export const defaultPlayerData: PlayerData = {
	balance: {
		Coins: 0,
		Gems: 0,
	},
	checkpoints: {
		Mountains: true,
	},
	height: 1,
	quirkymal: "Dove",
	quirkymals: {
		Dove: true,
	},
	settings,
	skin: "Dove",
	skins: {
		Dove: true,
	},
};
