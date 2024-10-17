//!optimize 2

import { BaseComponent, Component } from "@flamework/components";
import { OnRender, OnStart } from "@flamework/core";
import type { LogClass } from "@rbxts/rbxts-sleitnick-log";

interface Attributes {}

@Component({
	tag: "Obstacles_Hammer",
})
export class ObstaclesHammer extends BaseComponent<Attributes, BasePart> implements OnStart, OnRender {
	public constructor(private readonly log: LogClass) {
		super();
	}

	public onStart() {}

	onRender(dt: number): void {
		this.instance.PivotTo(this.instance.GetPivot().mul(CFrame.fromEulerAnglesXYZ(2 * dt, 0, 0)));
	}
}
