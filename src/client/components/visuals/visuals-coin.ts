//!optimize 2

import { BaseComponent, Component } from "@flamework/components";
import { OnRender, OnStart } from "@flamework/core";
import type { LogClass } from "@rbxts/rbxts-sleitnick-log";
import { Players, ReplicatedStorage, Workspace } from "@rbxts/services";
import Tween from "shared/modules/Feel/Tween";

// const components = Dependency<Components>();

// components.onComponentAdded<VisualsCoin>((value) => print("Visuals Coin component was added!"));

interface Attributes {
	Collected: boolean;
	ServerCollected: boolean;
}

// Settings
const amplitude = 2.5; // offset on both sides
const magnitude = 1.5; // time
const shrinkDuration = 0.1;
const expandDuration = 0.5;

// Particles
const CoinCollect = ReplicatedStorage.Assets.FindFirstChild("CoinCollect", true) as {
	Attachment: Attachment & ParticleEmitter[];
} & BasePart;

@Component({
	defaults: {
		Collected: false,
		ServerCollected: false,
	},
	tag: "Visuals_Coin",
})
export class VisualsCoin extends BaseComponent<Attributes, BasePart> implements OnStart, OnRender {
	private StartCF: CFrame;
	private StartTime: number;
	private player: Player = Players.LocalPlayer;

	public constructor(private readonly log: LogClass) {
		super();

		this.StartCF = this.instance.CFrame.mul(new CFrame(0, 2, 0));
		this.StartTime = tick();
	}

	public onStart() {
		this.instance.Touched.Connect((Hit) => {
			const Player = Players.LocalPlayer;
			const Character = Player.Character;

			if (!Character || Hit.Parent !== Character) return;

			if (this.instance.GetAttribute("Collected")) return;

			this.instance.SetAttribute("Collected", true);

			// const CoinBrick = CoinCollect.Clone();
			// CoinBrick.Anchored = false;
			// CoinBrick.CFrame = this.instance.CFrame;
			// CoinBrick.Parent = this.instance;

			const CoinClone = this.instance.Clone();
			CoinClone.Material = Enum.Material.Neon;
			CoinClone.Transparency = 0;
			CoinClone.RemoveTag("Visuals_Coin");
			this.instance.Transparency = 1;

			CoinClone.Parent = Workspace;

			const shrink = Tween.create(CoinClone, { Size: this.instance.Size.mul(0.5) }, shrinkDuration, {
				EasingDirection: Enum.EasingDirection.InOut,
				EasingStyle: Enum.EasingStyle.Sine,
			});

			const expand = Tween.create(
				CoinClone,
				{ Size: this.instance.Size.mul(2), Transparency: 1 },
				expandDuration,
				{
					EasingDirection: Enum.EasingDirection.Out,
					EasingStyle: Enum.EasingStyle.Exponential,
				},
			);

			shrink.Completed.Once(() => {
				expand.Play();
			});

			expand.Completed.Once(() => {
				// CoinClone.Destroy();
				shrink.Destroy();
				expand.Destroy();
			});

			shrink.Play();
			// this.ToggleVFX(CoinBrick, true, 0.05, () => {
			// 	CoinBrick.Destroy();
			// });
		});

		this.onAttributeChanged("ServerCollected", (value) => {
			this.instance.SetAttribute("Collected", value);
			if (value) return;

			this.instance.Transparency = 0;
		});
	}

	onRender(dt: number): void {
		const camera = Workspace.CurrentCamera!;
		if (camera.CFrame.Position.sub(this.instance.Position).Magnitude > 100 || this.instance.Transparency === 1) {
			return;
		}

		const TargetHeight = amplitude * math.sin(((this.StartTime + tick()) * math.pi) / magnitude);
		const DesiredCF = this.StartCF.mul(new CFrame(0, TargetHeight, 0));
		this.instance.CFrame = this.instance.CFrame.Lerp(
			DesiredCF.mul(CFrame.fromEulerAnglesXYZ(TargetHeight, 0, TargetHeight)),
			dt,
		);
	}

	ToggleVFX(
		ParticleBrick: { GetDescendants: () => Instance[] } & BasePart,
		Enabled: boolean,
		Duration: number,
		CleanUp: () => void,
	) {
		for (const v of ParticleBrick.GetDescendants()) {
			if (v.IsA("Trail") || v.IsA("ParticleEmitter")) {
				v.Enabled = Enabled;

				task.delay(Duration, () => {
					v.Enabled = !Enabled;
				});
			}

			task.delay(Duration + 1, () => {
				CleanUp();
			});
		}
	}
}
