import { Players } from "@rbxts/services";

type PlayerReceivingFunction = (player: Player) => unknown;

export function forEveryPlayer(
	joinFunction: PlayerReceivingFunction,
	leaveFunction?: PlayerReceivingFunction,
): Array<RBXScriptConnection> {
	const events: Array<RBXScriptConnection> = [];

	Players.GetPlayers().forEach(joinFunction);
	events.push(Players.PlayerAdded.Connect(joinFunction));
	if (leaveFunction) events.push(Players.PlayerRemoving.Connect(leaveFunction));

	return events;
}
