//!optimize 2

import React from "@rbxts/react";
import { ReflexProvider } from "@rbxts/react-reflex";
import ReactRoblox from "@rbxts/react-roblox";
import { CreateReactStory } from "@rbxts/ui-labs";
import HubPanel from "shared/app/components/HubPanel/hub-panel";
import { store } from "shared/app/stores";

function HubPanelButtonStory(): React.Element {
	return (
		<ReflexProvider producer={store}>
			<frame
				AnchorPoint={new Vector2(0.5, 0.5)}
				BackgroundTransparency={1}
				Position={new UDim2(0.5, 0, 0.5, 0)}
				Size={new UDim2(1, 0, 1, 0)}
			>
				<HubPanel />
			</frame>
		</ReflexProvider>
	);
}

export = CreateReactStory(
	{
		name: "HubPanelButtonStory.story",
		react: React,
		reactRoblox: ReactRoblox,
		summary: "HubPanelButtonStory story.",
	},
	() => <HubPanelButtonStory />,
);
