import { OnPhysics, OnRender, OnStart } from "@flamework/core";
import { Component, BaseComponent } from "@flamework/components";
import { Players, Workspace } from "@rbxts/services";
import Quirkify from "client/util/modules/Quirkify";

interface Attributes {}

function setCameraSubject(character: PlayerRig) {
	const Camera = Workspace.CurrentCamera as Camera;
	Camera.CameraSubject = character.HumanoidRootPart;
}

@Component({
	tag: "Visuals-Quirkymal",
})
export class MyComponent extends BaseComponent<Attributes, PlayerRig> implements OnStart, OnRender {
	private rootAttachment: Attachment | undefined;

	constructor() {
		super();

		this.instance.HumanoidRootPart.Transparency = 1;
	}

	onStart() {
		// print(this.instance.HumanoidRootPart);

		const quirkymal = this.instance.GetAttribute("Quirkymal") as string;
		const visualInformation = Quirkify.addQuirkymal(this.instance, quirkymal !== undefined ? quirkymal : "Dove");
		const addedAnimations = new Quirkify.AddAnimations(
			visualInformation.appearanceRig,
			visualInformation.animator,
			quirkymal !== undefined ? quirkymal : "Dove",
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
