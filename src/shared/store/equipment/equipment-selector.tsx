import { Object } from "@rbxts/luau-polyfill";
import { SharedState } from "shared/store";

export const getPlayerEquipment = (state: SharedState, player: Player) => {
	for (const [_, Equipment] of Object.entries(state.equipment)) {
		if (Equipment.Player === player) {
			return Equipment;
		}
	}

	return undefined;
};
