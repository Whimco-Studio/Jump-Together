//!optimize 2

import { Controller, OnInit, OnStart } from "@flamework/core";
import type { LogClass } from "@rbxts/rbxts-sleitnick-log";
import { clientProducer } from "client/store";

@Controller({})
export class VisualsController implements OnInit, OnStart {
	public constructor(private readonly log: LogClass) {}

	public onInit() {}

	public onStart() {
		this.ListenForEquipmentChanges();
	}

	private ListenForEquipmentChanges() {
		clientProducer.subscribe(
			(state) => state.equipment,
			(equipment) => {
				print(equipment);
			},
		);
	}
}
