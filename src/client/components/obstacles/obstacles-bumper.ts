//!optimize 2

import { BaseComponent, Component } from "@flamework/components";
import { OnStart } from "@flamework/core";
import type { LogClass } from "@rbxts/rbxts-sleitnick-log";
import { Players } from "@rbxts/services";
import Lerp from "shared/modules/Feel/Lerp";

interface Attributes {}

@Component({
	tag: "Obstacles_Bumper",
})
export class ObstaclesBumper extends BaseComponent<Attributes, BasePart> implements OnStart {
	public constructor(private readonly log: LogClass) {
		super();
	}

	public onStart() {
		this.instance.Touched.Connect((otherPart) => {
			this.OnTouch(this.instance, otherPart as BasePart);
		});
	}

	private OnTouch(Origin: BasePart, Hit: BasePart) {
		const Player = Players.LocalPlayer;
		const Character = Player.Character;

		if (!Character) {
			return;
		}

		if (!Hit.HasTag("Visuals_CosmeticRoot") || !Hit.IsDescendantOf(Character)) {
			return;
		}

		const AntiGravity = Character.FindFirstChild("AntiGravity", true) as VectorForce | undefined;

		if (!AntiGravity) {
			return;
		}

		const OldHighlight = Character.FindFirstChild("Highlight", true);
		if (OldHighlight) {
			OldHighlight.Destroy();
		}

		const highlight = new Instance("Highlight");
		highlight.Name = "Highlight";
		highlight.OutlineTransparency = 1;
		highlight.FillColor = Color3.fromHex("f15bb5");
		highlight.OutlineColor = Color3.fromRGB(255, 0, 0);
		highlight.Parent = Character;
		highlight.FillTransparency = 0;

		task.defer(() => {
			Lerp.KeyValue(highlight, "FillTransparency", 1, 3);
			highlight.Destroy();
		});

		const Humanoid = Character.WaitForChild("Humanoid") as Humanoid;
		const HumanoidRootPart = Character.WaitForChild("HumanoidRootPart") as MeshPart;

		const Direction = new CFrame(Origin.Position, Hit.Position).LookVector;
		Humanoid.PlatformStand = true;

		const bodyVelocity = new Instance("BodyVelocity");
		bodyVelocity.Velocity = Direction.mul(25);
		bodyVelocity.MaxForce = Vector3.one.mul(math.huge);
		bodyVelocity.P = math.huge;
		bodyVelocity.Parent = HumanoidRootPart;

		task.delay(0.25, () => {
			bodyVelocity.Destroy();
			task.delay(0.75, () => {
				Humanoid.PlatformStand = false;
				Humanoid.Jump = true;

				while (Humanoid.GetState() !== Enum.HumanoidStateType.Landed && Character) {
					task.wait();
				}

				// AntiGravity.Enabled = true
			});
		});
	}
}
