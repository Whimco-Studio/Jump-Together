import { Currency } from "shared/configs/currency";
import { Quirkymal, Skin } from "shared/configs/quirkymals";
import { Setting } from "shared/configs/settings";

export interface PlayerData {
	balance: PlayerBalance;
	checkpoints: PlayerCheckpoints;
	height: number;
	quirkymal: Quirkymal;
	quirkymals: PlayerQuirkymals;
	settings: PlayerSettings;
	skin: Skin;
	skins: PlayerSkins;
}

export type PlayerBalance = Record<Currency, number>;
export type PlayerSettings = Record<Setting, boolean>;
// export type PlayerQuirkymals = Set<Quirkymal>;
// export type PlayerSkins = Set<Skin>;
export type PlayerQuirkymals = Partial<Record<Quirkymal, true | undefined>>;
export type PlayerSkins = Partial<Record<Skin, true | undefined>>;
export type PlayerCheckpoints = Partial<Record<Checkpoint, true | undefined>>;
