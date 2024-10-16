//!optimize 2

import { RopeService } from "./rope-service";
import { OnInit, OnStart, Service } from "@flamework/core";
import type { LogClass } from "@rbxts/rbxts-sleitnick-log";

@Service({})
export class TestService implements OnInit, OnStart {
	public constructor(
		private readonly log: LogClass,
		private readonly ropeService: RopeService,
	) {
		this.ropeService = ropeService;
	}

	public onInit() {}

	public onStart() {}
}
