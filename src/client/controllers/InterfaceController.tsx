import React, { StrictMode } from "@rbxts/react";
import { createPortal, createRoot } from "@rbxts/react-roblox";
import { Controller, OnStart, OnInit } from "@flamework/core";
import { App } from "client/app";
import { Players } from "@rbxts/services";

@Controller({})
export class InterfaceController implements OnStart, OnInit {
	onInit() {}

	onStart() {}

	mountGui() {
		const PlayerGui = Players.LocalPlayer.WaitForChild("PlayerGui") as Folder;

		const root = createRoot(new Instance("ScreenGui"));
		root.render(<StrictMode>{createPortal(<App />, PlayerGui)}</StrictMode>);
	}
}
