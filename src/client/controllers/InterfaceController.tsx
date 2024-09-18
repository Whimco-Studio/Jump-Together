import React, { StrictMode } from "@rbxts/react";
import { ReflexProvider, useProducer, useSelector } from "@rbxts/react-reflex";
import { createPortal, createRoot } from "@rbxts/react-roblox";
import { Controller, OnStart, OnInit } from "@flamework/core";
import { App } from "client/app";

import { Players } from "@rbxts/services";
import { getCameraShot } from "client/app/stores/camera";
import { getCurrentPage } from "client/app/stores/Interface";
import { CameraShots } from "client/util/enums/cameraShots";
import { useStore } from "client/app/hooks/useStore";

@Controller({})
export class InterfaceController implements OnStart, OnInit {
	onInit() {}

	onStart() {
		this.mountGui();
		this.listenToPageChange();
	}

	listenToPageChange() {
		useStore().subscribe(getCurrentPage, (Page) => {
			useStore().setCameraShot(CameraShots[Page as keyof typeof CameraShots] || CameraShots.Default);
		});
	}

	mountGui() {
		const PlayerGui = Players.LocalPlayer.WaitForChild("PlayerGui") as PlayerGui;
		const ScreenGui = new Instance("ScreenGui");
		ScreenGui.Name = "Quirkymal";
		ScreenGui.Parent = PlayerGui;

		const root = createRoot(ScreenGui);
		root.render(
			<StrictMode>
				{createPortal(
					<ReflexProvider producer={useStore()}>
						<App />
					</ReflexProvider>,
					ScreenGui,
				)}
			</StrictMode>,
		);
	}
}
