import Spring from "./Spring";

/**
 * Represents a rope connecting two players in the game
 */
interface Rope {
	/**
	 * Adds directional forces to a player's root part
	 * @param Player The player to add forces to
	 * @param RootPart The root part of the player's character
	 */
	AddDirectionalForces(Player: Player, RootPart: BasePart): void;
	/**
	 * Adds a spring to the rope
	 */
	AddSpring(): void;

	/**
	 * Applies spring forces to the local player
	 */
	ApplySpring(): void;
	/**
	 * Updates the positions of the rope bases to match the players' positions
	 * @param deltaTime The time elapsed since the last update
	 */
	CFrameBasesToRoots(deltaTime: number): void;

	/**
	 * Checks for the local player and sets the bases accordingly
	 */
	CheckForLocalPlayer(): void;
	Connections: { [key: string]: RBXScriptConnection };

	/**
	 * Destroys the rope and cleans up resources
	 */
	Destroy(): void;

	Directional?: VectorForce;
	/**
	 * Disconnects all connections
	 */
	Disconnect(): void;

	/**
	 * Gets the root parts of both connected players
	 */
	GetRootParts(): void;
	/**
	 * Initializes the rope
	 */
	Init(): void;

	LocalBase: [Part, Attachment] | false;
	LocalPlayer?: Player;

	OtherBase: [Part, Attachment] | false;

	PlayerOne: Player;

	PlayerOneTorso?: BasePart;

	PlayerTwo: Player;

	PlayerTwoTorso?: BasePart;

	RopeBase1: [Part, Attachment];

	RopeBase2: [Part, Attachment];

	RopeVisual: RopeConstraint;

	/**
	 * Updates the rope's position and applies forces
	 * @param deltaTime The time elapsed since the last update
	 */
	Update(deltaTime: number): void;

	spring?: Spring<number>;
}

/**
 * Creates a new Rope instance
 * @param PlayerOne The first player connected by the rope
 * @param PlayerTwo The second player connected by the rope
 */
declare const Rope: {
	new (PlayerOne: Player, PlayerTwo: Player): Rope;
};

export = Rope;
