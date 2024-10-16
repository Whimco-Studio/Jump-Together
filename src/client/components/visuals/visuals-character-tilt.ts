//!optimize 2

import { BaseComponent, Component } from "@flamework/components";
import { OnRender, OnStart } from "@flamework/core";
import type { LogClass } from "@rbxts/rbxts-sleitnick-log";
import { Players, ReplicatedStorage, Workspace } from "@rbxts/services";

interface Attributes {}

// Game Settings
const GameSettings = ReplicatedStorage.GameSettings;
const MaxTiltAngle = GameSettings.Tilt.Value;
const MaxTiltRate = GameSettings.TiltRate.Value;

// RaycastParams
const RaycastParameters = new RaycastParams();
RaycastParameters.IgnoreWater = true;
RaycastParameters.FilterType = Enum.RaycastFilterType.Exclude;

@Component({
	tag: "Visuals_TiltCharacter",
})
export class VisualsCharacterTilt extends BaseComponent<Attributes, Attachment> implements OnStart, OnRender {
	public constructor(private readonly log: LogClass) {
		super();
	}

	public onStart() {}

	onRender(dt: number): void {
		RaycastParameters.FilterDescendantsInstances = [
			Workspace.WaitForChild("Players"),
			Workspace.WaitForChild("Debris"),
		];
		const Root = this.instance.Parent as MeshPart;
		const Character = Root.Parent as PlayerRig;
		const Humanoid = Character.Parent?.FindFirstChildOfClass("Humanoid") as Humanoid | undefined;
		const HumanoidRootPart = Character.Parent?.FindFirstChild("HumanoidRootPart") as BasePart | undefined;

		if (!Humanoid || !HumanoidRootPart) return;

		const MoveDirection = HumanoidRootPart.CFrame.VectorToObjectSpace(Humanoid.MoveDirection);
		this.instance.CFrame = this.instance.CFrame.Lerp(
			new CFrame(0, -Root.Size.Y / 2, 0).mul(
				CFrame.Angles(math.rad(-MoveDirection.Z) * MaxTiltAngle, math.rad(-MoveDirection.X) * MaxTiltAngle, 0),
			),
			dt * MaxTiltRate,
		);
	}
}
