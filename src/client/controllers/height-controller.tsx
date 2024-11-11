//!optimize 2

import { Controller, OnInit, OnRender, OnStart } from "@flamework/core";
import type { LogClass } from "@rbxts/rbxts-sleitnick-log";
import { Players } from "@rbxts/services";
import { clientProducer } from "client/store";

@Controller({})
export class HeightController implements OnInit, OnStart, OnRender {
	private interval: number;
	private maxInterval: number;
	private accumulator: number;
	public constructor(private readonly log: LogClass) {
		this.interval = 0;
		this.maxInterval = 1;
		this.accumulator = 0;
	}

	public onInit() {}

	public onStart() {}

	private updateHeight(player: Player) {
		const Character = player.Character;
		if (Character) {
			const Root = Character.FindFirstChild("HumanoidRootPart") as BasePart | undefined;
			if (Root) {
				const Height = Root.Position.Y;
				let HeightMeter = math.ceil(Height / 4);
				HeightMeter = HeightMeter >= 0 ? math.abs(HeightMeter) : 0;

				const CoinsPerMin = math.clamp(HeightMeter / 10, 1, math.huge);

				clientProducer.setDistance(HeightMeter);
				clientProducer.setCoinsPerMin(CoinsPerMin);
			}
		}
	}

	onRender(dt: number) {
		this.accumulator += dt;
		if (this.accumulator >= 1) {
			this.interval += 1;

			if (this.interval >= this.maxInterval) {
				this.interval = 0;

				this.updateHeight(Players.LocalPlayer);
			}

			this.accumulator = 0;
		}
	}
}
