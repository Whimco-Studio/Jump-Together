//!optimize 2

import { BaseComponent, Component } from "@flamework/components";
import { OnRender, OnStart } from "@flamework/core";
import type { LogClass } from "@rbxts/rbxts-sleitnick-log";
import { Players, Workspace } from "@rbxts/services";
import { Events } from "client/network";

interface Attributes {}

@Component({
	tag: "Visuals_Button",
})
export class VisualsButton extends BaseComponent<Attributes, BasePart> implements OnStart, OnRender {
	private shapecastParameters: RaycastParams;
	private OriginalPosition: Vector3;
	private OnCooldown: number | undefined;
	private Pressed: boolean | undefined;
	private CooldownTime: number;

	public constructor(private readonly log: LogClass) {
		super();

		this.shapecastParameters = new RaycastParams();
		this.shapecastParameters.FilterType = Enum.RaycastFilterType.Include;

		this.OriginalPosition = this.instance.Position;
		this.OnCooldown = undefined;
		this.Pressed = false;
		this.CooldownTime = this.instance.GetAttribute("CooldownTime") as number;

		if (this.CooldownTime === undefined) {
			this.log.Warning(`No CooldownTime found in ${this.instance}`);
			return;
		}
	}

	public onStart() {}

	private UpdateButtonPosition() {
		const Button = this.instance;
		const pressedPosition = this.OriginalPosition.sub(this.instance.CFrame.UpVector.mul(Button.Size.Y / 2));

		const targetPosition = this.OnCooldown === undefined ? this.OriginalPosition : pressedPosition;
		Button.Position = Button.Position.Lerp(targetPosition, 0.1);

		// if (Button.Position - pressedPosition).Magnitude < 0.001 then
		// 	print("Pressed")
		// end
	}

	private HandleLogic() {
		const Button = this.instance;

		const PlayersFolder = Workspace.FindFirstChild("Players") as Model | undefined;

		if (PlayersFolder) {
			this.shapecastParameters.AddToFilter(PlayersFolder.GetChildren());
		}

		const shapecastResult = Workspace.Shapecast(
			Button,
			Button.CFrame.UpVector.mul(Button.Size.Y * 1.5),
			this.shapecastParameters,
		);

		const Player = shapecastResult && Players.GetPlayerFromCharacter(shapecastResult.Instance.Parent);

		if (Player && this.OnCooldown === undefined) {
			this.OnCooldown = this.CooldownTime;

			// Only fire the event if the button wasn't already pressed

			if (!this.Pressed) {
				this.Pressed = true;
				Events.ButtonPressed.fire(this.instance, tick());
				// ToggleParticles(Button)
			}
		}

		this.UpdateButtonPosition();
	}

	onRender(dt: number): void {
		task.delay(0, () => {
			this.HandleLogic();
		});

		// Update cooldowns
		if (this.OnCooldown !== undefined) {
			this.OnCooldown = math.max(0, this.OnCooldown - dt);

			if (this.OnCooldown === 0) {
				this.Pressed = undefined;
				this.OnCooldown = undefined;
			}
		}
	}
}
