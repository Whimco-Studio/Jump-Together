//!optimize 2

import { Controller, OnInit, OnStart } from "@flamework/core";
import type { LogClass } from "@rbxts/rbxts-sleitnick-log";
import React from "@rbxts/react";
import { StrictMode } from "@rbxts/react";
import { ReflexProvider } from "@rbxts/react-reflex";
import { createPortal, createRoot } from "@rbxts/react-roblox";
import { Players, RunService, StarterGui } from "@rbxts/services";
import { App } from "client/app";
import { useStore } from "client/app/hooks/use-store";
import { CameraShots } from "client/enums/cameraShots";
import { Events } from "client/network";
import { clientProducer } from "client/store";
import { getCurrentPage } from "client/store/slices/Interface";

@Controller({})
export class InterfaceController implements OnInit, OnStart {
	public constructor(private readonly log: LogClass) {}

	public onInit() {}

	public onStart() {
		this.mountGui();
		this.handleReset();
		this.listenToPageChange();
	}

	private listenToPageChange() {
		clientProducer.subscribe(getCurrentPage, (Page) => {
			useStore().setCameraShot(CameraShots[Page as keyof typeof CameraShots] || CameraShots.Default);
		});
	}

	private mountGui() {
		const PlayerGui = Players.LocalPlayer.WaitForChild("PlayerGui") as PlayerGui;
		const ScreenGui = new Instance("ScreenGui");
		ScreenGui.Name = "Quirkymal";
		ScreenGui.Parent = PlayerGui;
		ScreenGui.IgnoreGuiInset = true;
		ScreenGui.ResetOnSpawn = false;

		const root = createRoot(ScreenGui);
		root.render(
			<StrictMode>
				{createPortal(
					<ReflexProvider producer={clientProducer}>
						<App />
					</ReflexProvider>,
					ScreenGui,
				)}
			</StrictMode>,
		);
	}

	private handleReset() {
		const ResetEvent = new Instance("BindableEvent");
		ResetEvent.Event.Connect(() => {
			Events.Respawn.fire("Reset");
		});

		const MAX_RETRIES = 8;

		const coreCall = () => {
			for (let retries = 1; retries <= MAX_RETRIES; retries++) {
				const success = pcall(() => {
					StarterGui.SetCore("ResetButtonCallback", ResetEvent);
				});
				if (success[0]) {
					break;
				}
				RunService.Stepped.Wait();
				task.wait(0.1);
			}
		};

		coreCall();
	}
}
