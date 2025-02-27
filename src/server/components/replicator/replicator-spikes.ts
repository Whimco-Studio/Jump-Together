//!optimize 2

import { BaseComponent, Component } from "@flamework/components";
import { OnStart, OnTick } from "@flamework/core";
import type { LogClass } from "@rbxts/rbxts-sleitnick-log";

interface Attributes {
	Delay: number;
	Offset: number;
	Retract: boolean;
}

@Component({
	defaults: {
		Delay: 3,
		Offset: 0,
		Retract: false,
	},
	tag: "Replicator_Spikes",
})
export class ReplicatorSpikes extends BaseComponent<Attributes, Folder> implements OnStart, OnTick {
	private accumulator: number;
	private spikes: Spike[];
	public constructor(private readonly log: LogClass) {
		super();
		this.accumulator = 0;
		this.spikes = [];
	}

	public onStart() {
		this.spikes = this.instance.GetChildren() as Spike[];
		for (const spike of this.spikes) {
			spike.SetAttribute("Retract", this.attributes.Retract);
			spike.AddTag("Visuals_Spike");
		}
	}

	public onTick(deltaTime: number) {
		this.accumulator += deltaTime;
		if (this.accumulator > this.attributes.Delay + this.attributes.Offset) {
			this.accumulator = 0;
			this.attributes.Retract = !this.attributes.Retract;
			for (const spike of this.spikes) {
				spike.SetAttribute("Retract", this.attributes.Retract);
			}
		}
	}
}
