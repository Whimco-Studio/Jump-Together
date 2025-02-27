import { Currency } from "shared/configs/currency";
import { Quirkymal, Skin } from "shared/configs/quirkymals";
import { Setting } from "shared/configs/settings";

export interface PlayerData {
	balance: PlayerBalance;
	checkpoints: PlayerCheckpoints;
	dailyRewards: PlayerDailyRewards[];
	equipped: {
		quirkymal: Quirkymal;
		skin: Skin;
	};
	height: number;
	quirkymals: PlayerQuirkymals;
	settings: PlayerSettings;
	skins: PlayerSkins;
}

export type PlayerEquipped = {
	quirkymal: Quirkymal;
	skin: Skin;
};

export type PlayerBalance = Record<Currency, number>;
export type PlayerSettings = Record<Setting, boolean>;
export type PlayerQuirkymals = Partial<Record<Quirkymal, true | undefined>>;
export type PlayerSkins = Partial<Record<Skin, true | undefined>>;
export type PlayerCheckpoints = Partial<Record<Checkpoint, true | undefined>>;

export type PlayerDailyRewards = {
	day: 1 | 2 | 3 | 4 | 5 | 6 | 7;
	reward: DailyReward;
	timeToClaim: string;
};

type DailyReward = {
	claimed: boolean;
	quantity: number;
	quirkymal?: Quirkymal;
	type: "Banana" | "Coins" | "Quirkymal" | "Skin";
};
