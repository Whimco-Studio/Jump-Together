//!optimize 2

import { BaseComponent, Component } from "@flamework/components";
import { OnStart } from "@flamework/core";
import type { LogClass } from "@rbxts/rbxts-sleitnick-log";

interface Attributes {}

@Component({
	tag: "Obstacles_Ground",
})
export class ObstaclesGround extends BaseComponent<Attributes, BasePart> implements OnStart {
	public constructor(private readonly log: LogClass) {
		super();
	}

	public onStart() {
		const PhsyicalProperties = new PhysicalProperties(0.699999988, 0, 0.5, 10, 1);
		this.instance.CustomPhysicalProperties = PhsyicalProperties;
	}
}
