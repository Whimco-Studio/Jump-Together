//!optimize 2

import { BaseComponent, Component } from "@flamework/components";
import { OnStart } from "@flamework/core";
import type { LogClass } from "@rbxts/rbxts-sleitnick-log";
import { Players } from "@rbxts/services";
import { Events } from "client/network";
import { clientProducer } from "client/store";
import { getCheckpoint } from "client/store/slices/checkpoint";
import Particle from "shared/modules/Feel/Particle";
import Sounds from "shared/modules/Feel/Sounds";
import Tween from "shared/modules/Feel/Tween";

interface Attributes {}

let Current: BasePart | undefined;
const TransitionTime = 1;

const ACTIVE_COLOR = Color3.fromRGB(102, 141, 105);
const INACTIVE_COLOR = Color3.fromRGB(141, 102, 103);

@Component({
	tag: "Obstacles_Checkpoint",
})
export class ObstaclesCheckpoint extends BaseComponent<Attributes, BasePart> implements OnStart {
	public constructor(private readonly log: LogClass) {
		super();
	}

	public onStart() {
		clientProducer.subscribe(getCheckpoint, (Checkpoint: BasePart | undefined) => {
			let Changed = false;
			let DesiredColor = INACTIVE_COLOR;
			if (Checkpoint && Checkpoint === this.instance) {
				if (this.instance.Color !== ACTIVE_COLOR) {
					Changed = true;
				}

				DesiredColor = ACTIVE_COLOR;
			} else if (Checkpoint) {
				if (this.instance.Color !== INACTIVE_COLOR) {
					Changed = true;
				}

				DesiredColor = INACTIVE_COLOR;
			}

			if (Changed) {
				const colorTween = Tween.create(this.instance, { Color: DesiredColor }, TransitionTime, {
					EasingStyle: Enum.EasingStyle.Quad,
				});

				colorTween.Completed.Once((PlaybackState) => {
					colorTween.Destroy();
				});

				colorTween.Play();

				if (DesiredColor === ACTIVE_COLOR) {
					Particle.Create("Checkpoint", this.instance);
					Sounds.Play("CheckpointReached", 0.75, this.instance);
				}
			}
		});

		this.instance.Touched.Connect((Hit) => this.ApplyEffect(Hit));
	}

	ApplyEffect(Hit: BasePart) {
		if (clientProducer.getState(getCheckpoint) === this.instance) {
			return;
		}

		const Origin = this.instance;
		const Player = Players.LocalPlayer;
		const Character = Player.Character;

		if (!Character || Hit.Parent !== Character) {
			return;
		}

		clientProducer.setCheckpoint(Origin);

		Events.CheckpointReached.fire(Origin);
	}
}
