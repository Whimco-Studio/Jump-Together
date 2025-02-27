interface ReplicatedNode {
	next: ReplicatedNode | undefined;
	value: Player;
}

interface ReplicatedLobby {
	head: ReplicatedNode;
	length: number;
	tail: ReplicatedNode;
	updateEvent: RemoteEvent;
}
