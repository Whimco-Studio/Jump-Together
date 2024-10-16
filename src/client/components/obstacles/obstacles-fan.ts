//!optimize 2

import { BaseComponent, Component } from "@flamework/components";
import { OnRender, OnStart } from "@flamework/core";
import type { LogClass } from "@rbxts/rbxts-sleitnick-log";

interface Attributes {}

@Component({
	tag: "Obstacles_Fan",
})
export class ObstaclesFan extends BaseComponent<Attributes, Part> implements OnStart, OnRender {
	private SpinRate = 2;
	public constructor(private readonly log: LogClass) {
		super();
	}

	public onStart() {}

	onRender(dt: number): void {
		this.instance.PivotTo(
			this.instance
				.GetPivot()
				.mul(
					CFrame.fromEulerAnglesXYZ(
						0,
						(this.instance.GetAttribute("Reversing") === true ? -this.SpinRate : this.SpinRate) * dt,
						0,
					),
				),
		);
	}
}
