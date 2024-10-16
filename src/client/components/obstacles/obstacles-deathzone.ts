//!optimize 2

import { BaseComponent, Component } from "@flamework/components";
import { OnStart } from "@flamework/core";
import type { LogClass } from "@rbxts/rbxts-sleitnick-log";
import { Players } from "@rbxts/services";
import { Events } from "client/network";

interface Attributes {}

@Component({
	tag: "Obstacles_DeathZone",
})
export class ObstaclesDeathzone extends BaseComponent<Attributes, BasePart> implements OnStart {
	public constructor(private readonly log: LogClass) {
		super();
	}

	public onStart() {
		this.instance.Touched.Connect((otherPart) => {
			const Player = Players.LocalPlayer;
			const Character = Player.Character;

			if (!Character || otherPart.Parent !== Character) {
				return;
			}

			const Humanoid = Character.WaitForChild("Humanoid") as Humanoid;
			const HumanoidRootPart = Character.WaitForChild("HumanoidRootPart") as MeshPart;
			Events.Respawn.fire("DeathZone");
		});
	}
}
