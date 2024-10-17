// Sounds.d.ts

declare namespace Sounds {
	interface SoundDictionary {
		Bubbles: "rbxassetid://17184316404";
		ButtonPress: "rbxassetid://4925151540";
		CheckpointReached: "rbxassetid://17184316187";
		WaterDeath: "rbxassetid://104076683365642";
	}

	/**
	 * Plays the specified sound with the given volume, and optionally assigns it to a parent.
	 * @param SoundName - The name of the sound to play.
	 * @param Volume - The volume to play the sound at (from 0 to 1).
	 * @param Parent - (Optional) The parent instance to assign the sound to. Defaults to SoundService.
	 */
	function Play(SoundName: string, Volume: number, Parent?: Instance): void;

	/**
	 * Disconnects all RBXScriptConnections associated with the Sounds instance.
	 */
	function Disconnect(): void;

	/**
	 * Destroys the Sounds instance, disconnecting any active connections and clearing all sounds.
	 */
	function Destroy(): void;
}

export = Sounds;
