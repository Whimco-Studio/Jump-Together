//!optimize 2

import { Controller, OnInit, OnRender, OnStart } from "@flamework/core";
import type { LogClass } from "@rbxts/rbxts-sleitnick-log";
import { Players } from "@rbxts/services";
import { clientProducer } from "client/store";
import { getLastMaxDistance } from "client/store/slices/distance";

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
		if (!Character) return;

		const Humanoid = Character.FindFirstChild("Humanoid") as Humanoid | undefined;
		const Root = Character.FindFirstChild("HumanoidRootPart") as BasePart | undefined;
		if (!Root || !Humanoid) return;

		const Height = Root.Position.Y;
		let HeightMeter = math.ceil(Height / 4);
		HeightMeter = HeightMeter >= 0 ? math.abs(HeightMeter) : 0;

		const CoinsPerMin = math.clamp(HeightMeter / 10, 1, math.huge);

		clientProducer.setDistance(HeightMeter);
		clientProducer.setCoinsPerMin(CoinsPerMin);

		if (
			HeightMeter > getLastMaxDistance(clientProducer.getState()) &&
			(Humanoid.GetState() === Enum.HumanoidStateType.Landed ||
				Humanoid.GetState() === Enum.HumanoidStateType.Running ||
				Humanoid.GetState() === Enum.HumanoidStateType.RunningNoPhysics)
		) {
			clientProducer.setLastMaxDistance(HeightMeter);
		}
	}

	onRender(dt: number) {
		this.updateHeight(Players.LocalPlayer);

		// this.accumulator += dt;
		// if (this.accumulator >= 1) {
		// 	this.interval += 1;

		// 	if (this.interval >= this.maxInterval) {
		// 		this.interval = 0;

		// 		this.updateHeight(Players.LocalPlayer);
		// 	}

		// 	this.accumulator = 0;
		// }
	}
}
