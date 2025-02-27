import { Players } from "@rbxts/services";

export function playerFromId(id: number) {
	return Players.GetPlayerByUserId(id);
}
