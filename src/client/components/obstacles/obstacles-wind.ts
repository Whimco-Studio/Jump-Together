//!optimize 2

import { BaseComponent, Component } from "@flamework/components";
import { OnRender, OnStart } from "@flamework/core";
import { LogClass } from "@rbxts/rbxts-sleitnick-log";
import { CollectionService, Players, Workspace } from "@rbxts/services";

interface Attributes {}

const RAYCAST_DISTANCE = 25;
const DEFAULT_FORCE_STRENGTH = 3000;

@Component({
	tag: "Obstacles_Wind",
})
export class ObstaclesWind extends BaseComponent<Attributes, BasePart> implements OnStart, OnRender {
	private shapecastParameters: RaycastParams;
	private groundCheckParameters: RaycastParams;

	public constructor(private readonly log: LogClass) {
		super();
		this.shapecastParameters = new RaycastParams();
		this.shapecastParameters.FilterType = Enum.RaycastFilterType.Include;

		this.groundCheckParameters = new RaycastParams();
		this.groundCheckParameters.FilterType = Enum.RaycastFilterType.Include;
	}

	public onStart() {}

	onRender(dt: number): void {
		const Character = Players.LocalPlayer.Character;
		if (!Character) {
			return;
		}
		const HumanoidRootPart = Character.FindFirstChild("HumanoidRootPart") as BasePart | undefined;
		const Humanoid = Character.FindFirstChild("Humanoid") as Humanoid | undefined;
		if (!HumanoidRootPart || !Humanoid) {
			return;
		}

		const Distance = this.instance.Position.sub(HumanoidRootPart.Position).Magnitude;

		if (Distance > RAYCAST_DISTANCE) {
			return;
		}

		this.shapecastParameters.AddToFilter([HumanoidRootPart]);
		this.groundCheckParameters.AddToFilter(CollectionService.GetTagged("Obstacles_Ground"));
		const shapecastResult = Workspace.Shapecast(
			this.instance,
			this.instance.CFrame.UpVector.mul(RAYCAST_DISTANCE),
			this.shapecastParameters,
		);
		if (shapecastResult) {
			const Distance = shapecastResult.Distance;
			const groundRaycastResult = Workspace.Raycast(
				HumanoidRootPart.Position,
				new Vector3(0, -5, 0),
				this.groundCheckParameters,
			);
			let forceStrength = this.instance.Parent?.GetAttribute("FanSpeed") as number | undefined;
			if (forceStrength === undefined) {
				forceStrength = DEFAULT_FORCE_STRENGTH;
			}
			if (groundRaycastResult) {
				forceStrength = forceStrength / 10;
			}
			if (
				Humanoid.GetState() === Enum.HumanoidStateType.Jumping ||
				Humanoid.GetState() === Enum.HumanoidStateType.Freefall
			) {
				forceStrength = forceStrength / 2.6;
			}
			const distanceDilution = 1 - Distance / RAYCAST_DISTANCE;
			forceStrength *= math.clamp(distanceDilution, 0, 1);
			forceStrength *= dt;
			const forceDirection = this.instance.CFrame.UpVector.mul(forceStrength);
			HumanoidRootPart.ApplyImpulse(forceDirection);
		}
	}
}
