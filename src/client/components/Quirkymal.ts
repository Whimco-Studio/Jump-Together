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
	tag: "Visuals_Quirkymal",
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

		this.AddBillboardGui(Player, visualInformation.appearanceRig.HumanoidRootPart);
	}

	onRender(dt: number): void {
		if (!this.rootAttachment) return;

		// Quirkify.addRotations(this.rootAttachment, dt);
	}

	private AddBillboardGui(Player: Player | undefined, CosmeticRig: BasePart) {
		const billboardGui = new Instance("BillboardGui");
		billboardGui.Name = "BillboardGui";
		billboardGui.Active = true;
		billboardGui.ClipsDescendants = true;
		billboardGui.ExtentsOffsetWorldSpace = new Vector3(0, 1.5, 0);
		billboardGui.LightInfluence = 1;
		billboardGui.Size = UDim2.fromOffset(200, 50);
		billboardGui.ZIndexBehavior = Enum.ZIndexBehavior.Sibling;

		const frame = new Instance("Frame");
		frame.Name = "Frame";
		frame.BackgroundColor3 = Color3.fromRGB(255, 255, 255);
		frame.BackgroundTransparency = 1;
		frame.BorderColor3 = Color3.fromRGB(0, 0, 0);
		frame.BorderSizePixel = 0;
		frame.Size = UDim2.fromScale(1, 1);

		const textLabel = new Instance("TextLabel");
		textLabel.Name = "TextLabel";
		textLabel.FontFace = new Font("rbxasset://fonts/families/FredokaOne.json");
		textLabel.Text = this.instance.Name as string;
		textLabel.TextColor3 = Color3.fromRGB(255, 255, 255);
		textLabel.TextScaled = true;
		textLabel.TextSize = 14;
		textLabel.TextWrapped = true;
		textLabel.AnchorPoint = new Vector2(0.5, 0.5);
		textLabel.BackgroundColor3 = Color3.fromRGB(255, 255, 255);
		textLabel.BackgroundTransparency = 1;
		textLabel.BorderColor3 = Color3.fromRGB(0, 0, 0);
		textLabel.BorderSizePixel = 0;
		textLabel.Position = UDim2.fromScale(0.5, 0.5);
		textLabel.Size = UDim2.fromScale(0.6, 0.6);

		const uIStroke = new Instance("UIStroke");
		uIStroke.Name = "UIStroke";
		uIStroke.Color = Color3.fromRGB(58, 59, 59);
		uIStroke.LineJoinMode = Enum.LineJoinMode.Miter;
		uIStroke.Thickness = 5;
		uIStroke.Parent = textLabel;
		uIStroke.Transparency = 0.5;

		textLabel.Parent = frame;

		frame.Parent = billboardGui;

		billboardGui.Parent = CosmeticRig;
	}
}
