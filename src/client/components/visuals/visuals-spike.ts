//!optimize 2

import { BaseComponent, Component } from "@flamework/components";
import { OnRender, OnStart } from "@flamework/core";
import type { LogClass } from "@rbxts/rbxts-sleitnick-log";
import { Workspace } from "@rbxts/services";

interface Attributes {
	Retract: boolean;
}

@Component({
	defaults: {
		Retract: false,
	},
	tag: "Visuals_Spike",
})
export class VisualsSpike extends BaseComponent<Attributes, Instance> implements OnStart, OnRender {
	private main: BasePart;
	private startPivot: CFrame;
	private lerpedPivot: CFrame;
	public constructor(private readonly log: LogClass) {
		super();
		this.main = this.instance.FindFirstChild("Main") as BasePart;
		this.startPivot = this.main.CFrame;
		this.lerpedPivot = this.startPivot;
	}

	public onStart() {
		// this.onAttributeChanged("Retract", (value) => {
		// 	print(this.instance);
		// });
	}

	public onRender(dt: number): void {
		const camera = Workspace.CurrentCamera!;

		if (camera.CFrame.Position.sub(this.main.Position).Magnitude > 100) return;

		const model = this.instance as Model;
		this.lerpedPivot = this.lerpedPivot.Lerp(
			this.attributes.Retract ? this.startPivot.mul(new CFrame(0, -this.main.Size.Y, 0)) : this.startPivot,
			this.attributes.Retract ? dt * 5 : dt * 20,
		);
		model.PivotTo(this.lerpedPivot);
	}
}
