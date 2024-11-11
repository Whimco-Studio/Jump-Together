//!optimize 2

import { BaseComponent, Component } from "@flamework/components";
import { OnStart } from "@flamework/core";
import type { LogClass } from "@rbxts/rbxts-sleitnick-log";
import { ServerStorage } from "@rbxts/services";

interface Attributes {}

@Component({
	tag: "Replicator_Button",
})
export class ReplicatorButton extends BaseComponent<Attributes, BasePart> implements OnStart {
	public constructor(private readonly log: LogClass) {
		super();
	}

	public onStart() {
		const ObjectValue = this.instance.FindFirstChildOfClass("ObjectValue") as ObjectValue | undefined;
		if (!ObjectValue) {
			this.log.Warning(`No ObjectValue found in ${this.instance}`);
			return;
		}
		const Value = ObjectValue.Value;
		if (Value) {
			Value.Parent = ServerStorage.ButtonPathways;
			this.instance.AddTag("Visuals_Button");
		} else {
			this.log.Warning(`ObjectValue is nil in ${this.instance}`);
			return;
		}
	}
}
