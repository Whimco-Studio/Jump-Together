//!optimize 2

import { OnInit, OnStart, Service } from "@flamework/core";
import type { LogClass } from "@rbxts/rbxts-sleitnick-log";
import { CollectionService } from "@rbxts/services";
import { Events } from "server/network";

@Service({})
export class CheckpointService implements OnInit, OnStart {
	public constructor(private readonly log: LogClass) {}

	public onInit() {}

	public onStart() {
		Events.TeleportToCheckpoint.connect((player, checkpoint) => {
			const Character = player.Character;
			const checkpoints = this.getCheckpoints();
			const target = checkpoints.find(
				(c) => c.Parent?.Name === checkpoint || c.GetAttribute("Biome") === checkpoint,
			) as BasePart | undefined;

			if (!target || !Character) return;

			Character.PivotTo(target.CFrame.mul(new CFrame(0, 5, 0)));
		});
	}

	private getCheckpoints() {
		return CollectionService.GetTagged("Replicator_Checkpoint");
	}
}
