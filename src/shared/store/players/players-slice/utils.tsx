import { PlayerData, PlayerSettings } from "./types";
import { SETTINGS } from "shared/configs/settings";

const settings = {} as PlayerSettings;
for (const setting of SETTINGS) {
	settings[setting] = false;
}

export const defaultPlayerData: PlayerData = {
	balance: {
		Coins: 20000,
		Gems: 0,
	},
	checkpoints: {},
	dailyRewards: [1, 2, 3, 4, 5, 6, 7].map((day) => ({
		day: day as 1 | 2 | 3 | 4 | 5 | 6 | 7,
		reward: {
			claimed: false,
			quantity: 200,
			quirkymal: undefined,
			type: "Coins",
		},
		timeToClaim: DateTime.fromUnixTimestamp(DateTime.now().UnixTimestamp + 86400 * (day - 1)).ToIsoDate(),
	})),

	equipped: {
		quirkymal: "Dove",
		skin: "Dove",
	},
	height: 1,
	quirkymals: {
		Dove: true,
	},
	settings,
	skins: {
		Dove: true,
	},
};
