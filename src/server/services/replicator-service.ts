//!optimize 2

import { OnInit, OnStart, Service } from "@flamework/core";
import type { LogClass } from "@rbxts/rbxts-sleitnick-log";
import { ServerStorage, Workspace } from "@rbxts/services";
import { Events } from "server/network";

@Service({})
export class ReplicatorService implements OnInit, OnStart {
	public constructor(private readonly log: LogClass) {}

	public onInit() {}

	public onStart() {
		Events.ButtonPressed.connect((Player: Player, Button: BasePart, PressedAt: number) => {
			const CooldownTime = Button.GetAttribute("CooldownTime") as number | undefined;
			const ObjectValue = Button.FindFirstChildOfClass("ObjectValue") as ObjectValue | undefined;

			if (!ObjectValue) {
				this.log.Warning(`No ObjectValue found in ${Button}`);
				return;
			}
			if (CooldownTime === undefined) {
				this.log.Warning(`No CooldownTime found in ${Button}`);
				return;
			}

			if (!ObjectValue.Value) {
				this.log.Warning(`ObjectValue is nil in ${Button}, child of ${Button.Parent}`);
				return;
			}

			const Value = ObjectValue.Value;
			Value.Parent = Workspace;

			// Task Delay for CooldownTime including PressedAt
			task.defer(() => {
				task.wait(CooldownTime - (tick() - PressedAt));
				Value.Parent = ServerStorage.ButtonPathways;
			});
		});
	}
}
