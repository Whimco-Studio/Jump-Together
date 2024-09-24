//!optimize 2

import { BaseComponent, Component } from "@flamework/components";
import { OnRender, OnStart } from "@flamework/core";
import type { LogClass } from "@rbxts/rbxts-sleitnick-log";
import { Players, Workspace } from "@rbxts/services";
import Quirkify from "shared/modules/Quirkify";

interface Attributes {}

function setCameraSubject(character: PlayerRig) {
	const Camera = Workspace.CurrentCamera as Camera;
	Camera.CameraSubject = character.HumanoidRootPart;
}

@Component({
	tag: "Visuals-Quirkymal",
})
export class QuirkymalComponent extends BaseComponent<Attributes, PlayerRig> implements OnStart, OnRender {
	private rootAttachment: Attachment | undefined;

	public constructor(private readonly log: LogClass) {
		super();

		this.instance.HumanoidRootPart.Transparency = 1;
	}

	public onStart() {
		// print(this.instance.HumanoidRootPart);

		const quirkymal = this.instance.GetAttribute("Quirkymal") as string;
		const visualInformation = Quirkify.addQuirkymal(this.instance, quirkymal === undefined ? "Dove" : quirkymal);
		const addedAnimations = new Quirkify.AddAnimations(
			visualInformation.appearanceRig,
			visualInformation.animator,
			quirkymal === undefined ? "Dove" : quirkymal,
		);

		this.rootAttachment = visualInformation.playerAttachment;

		const Player = Players.GetPlayerFromCharacter(this.instance);
		if (Player && Player === Players.LocalPlayer) {
			setCameraSubject(this.instance);
		}
	}

	onRender(dt: number): void {
		if (!this.rootAttachment) return;

		Quirkify.addRotations(this.rootAttachment, dt);
	}
}
