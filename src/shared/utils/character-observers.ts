import { Players } from "@rbxts/services";

export function observeCharacter(observer: (player: Player, character: Model) => (() => void) | undefined) {
	observePlayer((player) => {
		return observeCharacterForPlayer(player, (character) => {
			return observer(player, character);
		});
	});
}

export function observeCharacterForPlayer(player: Player, observer: (character: Model) => (() => void) | undefined) {
	let cleanup: (() => void) | undefined;

	const onCharacterAdded = async (character: Model) => {
		cleanup?.();
		cleanup = observer(character);
	};

	const characterAdded = player.CharacterAdded.Connect(onCharacterAdded);

	const characterRemoving = player.CharacterRemoving.Connect(() => {
		cleanup?.();
		cleanup = undefined;
	});

	if (player.Character) {
		onCharacterAdded(player.Character);
	}

	return () => {
		characterAdded.Disconnect();
		characterRemoving.Disconnect();
		cleanup?.();
	};
}

export function observePlayer(observer: (player: Player) => () => void) {
	const onPlayerAdded = async (player: Player) => {
		const cleanup = observer(player);

		return Promise.fromEvent(Players.PlayerRemoving, (playerLeft) => playerLeft === player).then(() => {
			cleanup();
		});
	};

	for (const player of Players.GetPlayers()) {
		onPlayerAdded(player);
	}

	Players.PlayerAdded.Connect(onPlayerAdded);
}
