//!optimize 2

import { BaseComponent, Component } from "@flamework/components";
import { OnStart } from "@flamework/core";
import type { LogClass } from "@rbxts/rbxts-sleitnick-log";
import { Players } from "@rbxts/services";

interface Attributes {}

@Component({
	tag: "Physics_PlatformStand",
})
export class PhysicsPlatformstand extends BaseComponent<Attributes, Humanoid> implements OnStart {
	private RagDollDuration: number;
	public constructor(private readonly log: LogClass) {
		super();
		this.RagDollDuration = 2.5;
	}

	public onStart() {
		const Player = Players.LocalPlayer as Player;
		const Character = Player.Character as PlayerRig;

		const AttemptCharacter = this.instance.Parent as PlayerRig;

		if (Character && AttemptCharacter.Name === Player.DisplayName) {
			const AngularVelocity = this.CreatRagDollForce(AttemptCharacter.HumanoidRootPart) as AngularVelocity;

			this.instance.SetStateEnabled(Enum.HumanoidStateType.PlatformStanding, false);
			this.instance.GetPropertyChangedSignal("PlatformStand").Connect(() => {
				this.CutForces();
				this.ToggleRagdoll(AngularVelocity);
			});
		}
	}

	private CreatRagDollForce(Root: BasePart) {
		const Ragdoll = new Instance("Attachment");
		Ragdoll.Name = "Ragdoll";
		Ragdoll.Parent = Root;

		const AngularVelocity = new Instance("AngularVelocity");
		AngularVelocity.AngularVelocity = Vector3.one.mul(5);
		AngularVelocity.MaxTorque = 100; //100000000
		AngularVelocity.Attachment0 = Ragdoll;
		AngularVelocity.Enabled = false;
		AngularVelocity.RelativeTo = Enum.ActuatorRelativeTo.Attachment0;
		AngularVelocity.Parent = Root;

		return AngularVelocity;
	}

	private CutForces() {
		const Character = this.instance.Parent as PlayerRig;
		const AntiGravity = Character.FindFirstChild("AntiGravity", true) as VectorForce;
		const Attachment = AntiGravity.Attachment0 as Attachment;

		let Upvector = Attachment.WorldCFrame.UpVector.Y;

		AntiGravity.Enabled = false;

		while (
			this.instance.GetState() !== Enum.HumanoidStateType.Running &&
			(this.instance.GetState() !== Enum.HumanoidStateType.Landed || Upvector <= 0.98 || Upvector >= 1.01)
		) {
			task.wait();
			Upvector = Attachment.WorldCFrame.UpVector.Y;
		}

		AntiGravity.Enabled = true;
	}

	private ToggleRagdoll(AngularVelocity: AngularVelocity) {
		const Humanoid = this.instance;
		if (!Humanoid.PlatformStand) {
			// Humanoid:ChangeState(Enum.HumanoidStateType.Jumping)
			return;
		}

		AngularVelocity.Enabled = true;
		const PlatformElapse = tick();

		Humanoid.ChangeState(Enum.HumanoidStateType.Physics);

		task.delay(this.RagDollDuration, () => {
			if (math.abs(tick() - PlatformElapse) > this.RagDollDuration) {
				AngularVelocity.Enabled = false;
				Humanoid.ChangeState(Enum.HumanoidStateType.Jumping);
			}
		});
	}
}
