import { observeCharacterForPlayer } from "./character-observers";
import RopeSystem from "shared/modules/Ropey/rope-lobby";
import { slices } from "shared/store";

export function observeLobby(Lobby: Lobby, observer: (Lobby: Lobby) => (() => void) | undefined) {
	const unsubscribeCallbacks: (() => void)[] = [];

	const RopeLobby = new RopeSystem(Lobby.Players);

	print("Observing Lobby:", Lobby.ID);

	const unsubscribe = slices.lobbies.subscribe((state) => {
		observer(Lobby);
	});

	const observeLobbyPlayersUnsubscribe = observeLobbyPlayers(Lobby, RopeLobby, (Players) => {
		print("Observing Players in Lobby:", Lobby.ID, Players);
		return () => {}; // Ensure the function returns undefined
	});

	unsubscribeCallbacks.push(observeLobbyPlayersUnsubscribe);

	return () => {
		warn("Unsubscribing from lobby", Lobby.ID);

		for (const subLevelUnsubscribe of unsubscribeCallbacks) {
			subLevelUnsubscribe();
		}

		RopeLobby.Destroy();

		unsubscribe();
	};
}

export function observeLobbyPlayers(
	Lobby: Lobby,
	RopeLobby: RopeSystem,
	observer: (Players: Lobby["Players"]) => (() => void) | undefined,
) {
	const unsubscribeCallbacks: (() => void)[] = [];
	const unsubscribe = slices.lobbies.subscribe((state) => {
		observer(Lobby.Players);
	});

	print("Observing Players in Lobby:", Lobby.ID);
	RopeLobby.setPlayers(Lobby.Players);

	for (const Player of Lobby.Players) {
		const characterObserver = observeCharacterForPlayer(Player, (Character) => {
			return () => {
				const Proximity = Character.FindFirstChildOfClass("ProximityPrompt");
				if (Proximity) {
					Proximity.Destroy();
				}
			};
		});

		unsubscribeCallbacks.push(characterObserver);
	}

	return () => {
		warn("Unsubscribing from lobby players in", Lobby.ID);

		for (const subLevelUnsubscribe of unsubscribeCallbacks) {
			subLevelUnsubscribe();
		}

		unsubscribe();
	};
}
