//!optimize 2

import { OnInit, OnStart, Service } from "@flamework/core";
import type { LogClass } from "@rbxts/rbxts-sleitnick-log";
import { Players, RunService } from "@rbxts/services";
import { serverProducer } from "server/store";

@Service({})
export class HeightService implements OnInit, OnStart {
	public constructor(private readonly log: LogClass) {}

	public onInit() {}

	public onStart() {
		this.heightCycle();
	}

	public heightCycle() {
		task.defer(() => {
			let Interval = 0;
			const MaxInterval = 5;

			let Accumulator = 0;

			RunService.Heartbeat.Connect((dt) => {
				Accumulator += dt;
				if (Accumulator >= 1) {
					Interval += 1;

					if (Interval >= MaxInterval) {
						Interval = 0;

						for (const player of Players.GetPlayers()) {
							this.updateHeight(player);
						}
					}

					Accumulator = 0;
				}
			});
		});
	}

	private updateHeight(player: Player) {
		const Character = player.Character;
		if (Character) {
			const Root = Character.FindFirstChild("HumanoidRootPart") as BasePart | undefined;
			if (Root) {
				const Height = Root.Position.Y;
				let HeightMeter = math.ceil(Height / 4);
				HeightMeter = HeightMeter >= 0 ? math.abs(HeightMeter) : 0;

				const CoinsPerMin = math.clamp(HeightMeter / 10, 1, math.huge);
				serverProducer.changeBalance(tostring(player.UserId), "Coins", CoinsPerMin);
				serverProducer.setHeight(tostring(player.UserId), HeightMeter);
			}
		}
	}
}
