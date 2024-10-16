import Rope from "./Rope";
import { RunService } from "@rbxts/services";

class RopeSystem {
	private Players: readonly Player[];
	private Ropes: Rope[];
	private updateConnection: RBXScriptConnection;

	constructor(Players: readonly Player[]) {
		this.Players = Players;
		this.Ropes = [];
		this.Init();
		this.updateConnection = RunService.RenderStepped.Connect((dt) => this.Update(dt));
	}

	private Init(): void {
		this.CreateRopes();
	}

	public Update(deltaTime: number): void {
		for (const rope of this.Ropes) {
			rope.Update(deltaTime);
		}
	}

	public setPlayers(players: readonly Player[]): void {
		this.Players = players;
		this.CreateRopes();
	}

	private CreateRopes(): void {
		this.CleanRopes();


		for (let index = 0; index < this.Players.size() - 1; index++) {
			const player = this.Players[index];
			const nextPlayer = this.Players[index + 1];
			if (nextPlayer) {
				const newRope = new Rope(player as Player, nextPlayer);
				this.Ropes.push(newRope);
			}
		}
	}

	private CleanRopes(): void {
		for (const rope of this.Ropes) {
			rope.Destroy();
		}
		this.Ropes = [];
	}

	/**
	 * Properly disconnect and clean up the class
	 */
	public Disconnect(): void {
		this.CleanRopes();
		// Add any other necessary cleanup here (e.g., disconnect events, clear arrays, etc.)
	}

	/**
	 * Completely destroys the instance and cleans up all resources
	 */
	public Destroy(): void {
		this.Disconnect(); // Clean up existing ropes
		// Nullify the references to ensure no memory leaks
		(this.Players as unknown) = undefined;
		this.Ropes = [];
	}
}

export default RopeSystem;
