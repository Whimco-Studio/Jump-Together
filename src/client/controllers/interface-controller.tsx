//!optimize 2

import { Controller, OnInit, OnStart } from "@flamework/core";
import type { LogClass } from "@rbxts/rbxts-sleitnick-log";
import React from "@rbxts/react";
import { StrictMode } from "@rbxts/react";
import { ReflexProvider } from "@rbxts/react-reflex";
import { createPortal, createRoot } from "@rbxts/react-roblox";
import { Players } from "@rbxts/services";
import { CameraShots } from "client/enums/cameraShots";
import { App } from "shared/app";
import { useStore } from "shared/app/hooks/use-store";
import { store } from "shared/app/stores";
import { getCurrentPage } from "shared/app/stores/Interface";

@Controller({})
export class InterfaceController implements OnInit, OnStart {
	public constructor(private readonly log: LogClass) {}

	public onInit() {}

	public onStart() {
		this.mountGui();
		this.listenToPageChange();
	}

	private listenToPageChange() {
		store.subscribe(getCurrentPage, (Page) => {
			useStore().setCameraShot(CameraShots[Page as keyof typeof CameraShots] || CameraShots.Default);
		});
	}

	private mountGui() {
		const PlayerGui = Players.LocalPlayer.WaitForChild("PlayerGui") as PlayerGui;
		const ScreenGui = new Instance("ScreenGui");
		ScreenGui.Name = "Quirkymal";
		ScreenGui.Parent = PlayerGui;

		const root = createRoot(ScreenGui);
		root.render(
			<StrictMode>
				{createPortal(
					<ReflexProvider producer={store}>
						<App />
					</ReflexProvider>,
					ScreenGui,
				)}
			</StrictMode>,
		);
	}
}
