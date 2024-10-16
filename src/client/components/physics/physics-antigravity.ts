//!optimize 2

import { BaseComponent, Component } from "@flamework/components";
import { OnStart } from "@flamework/core";
import type { LogClass } from "@rbxts/rbxts-sleitnick-log";
import { Players, RunService, Workspace } from "@rbxts/services";

interface Attributes {}

@Component({
	tag: "Physics_AntiGravity",
})
export class PhysicsAntigravity extends BaseComponent<Attributes, VectorForce> implements OnStart {
	private RaycastParameters: RaycastParams;
	private JumpingConnection: RBXScriptConnection | undefined;
	private DefaultAntiGravity: number;

	public constructor(private readonly log: LogClass) {
		super();
		this.DefaultAntiGravity = 1250;

		this.RaycastParameters = new RaycastParams();
		this.RaycastParameters.FilterType = Enum.RaycastFilterType.Exclude;
	}

	public onStart() {
		let Character: PlayerRig | undefined;

		while (!Character || !Character.IsDescendantOf(Workspace)) {
			Character =
				(Players.LocalPlayer.Character as PlayerRig | undefined) ??
				(Players.LocalPlayer.CharacterAdded.Wait()[0] as PlayerRig | undefined);
			task.wait();
		}

		if (!Character || !this.instance.IsDescendantOf(Character)) {
			return;
		}

		const Root = Character.WaitForChild("HumanoidRootPart") as BasePart;
		const Humanoid = Character.WaitForChild("Humanoid") as Humanoid;

		let Connection: RBXScriptConnection | undefined = undefined;
		let StartPosition = new Vector3();

		Humanoid.Destroying.Once(() => {
			if (Connection) {
				Connection.Disconnect();
			}
		});

		this.RaycastParameters.AddToFilter(Character);

		Connection = Humanoid.StateChanged.Connect((Old, State: Enum.HumanoidStateType) => {
			if (State !== Enum.HumanoidStateType.Jumping && State !== Enum.HumanoidStateType.Freefall) {
				return;
			}

			if (this.JumpingConnection !== undefined) {
				return;
			}

			StartPosition = Root.Position.sub(new Vector3(0, Root.Size.Y / 2, 0));

			//// Start Tracking Player Height
			this.JumpingConnection = RunService.RenderStepped.Connect((dt: number) => {
				//// Kill Forces
				if (StartPosition.Y > Root.Position.Y) {
					this.instance.Force = new Vector3(0, 0, 0);

					//// Raycast Down
					const RaycastResults = Workspace.Raycast(
						Root.Position,
						new Vector3(0, -1, 0).mul(100),
						this.RaycastParameters,
					);

					//// Check if we should ragdoll the player
					if (
						RaycastResults &&
						RaycastResults.Distance < 5 &&
						math.abs(StartPosition.Y - Root.Position.Y) > 5 &&
						Humanoid.GetState() !== Enum.HumanoidStateType.Physics
					) {
						Humanoid.ChangeState(Enum.HumanoidStateType.Physics);
						// Root:ApplyAngularImpulse(Vector3.one * 1000)

						task.spawn(() => {
							const RagStart = tick();

							while (tick() - RagStart <= 5 || Root.AssemblyLinearVelocity.Y >= 1) {
								RunService.RenderStepped.Wait();
							}

							Humanoid.ChangeState(Enum.HumanoidStateType.Jumping);

							while (Humanoid.GetState() !== Enum.HumanoidStateType.Landed) {
								RunService.RenderStepped.Wait();
							}

							this.instance.Force = new Vector3(0, this.DefaultAntiGravity, 0);
						});

						if (this.JumpingConnection) {
							this.JumpingConnection.Disconnect();
						}
						this.JumpingConnection = undefined;
					}
				}

				const State = Humanoid.GetState();

				// print(State)

				//// Check to see if landed
				if (
					(State === Enum.HumanoidStateType.Landed || State === Enum.HumanoidStateType.Running) &&
					this.JumpingConnection !== undefined
				) {
					this.instance.Force = new Vector3(0, this.DefaultAntiGravity, 0);
					this.JumpingConnection.Disconnect();
					this.JumpingConnection = undefined;

					// print("Resetting Forces")
				}
			});
		});
	}
}
