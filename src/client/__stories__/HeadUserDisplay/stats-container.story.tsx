//!optimize 2

import React from "@rbxts/react";
import { ReflexProvider } from "@rbxts/react-reflex";
import ReactRoblox from "@rbxts/react-roblox";
import { CreateReactStory } from "@rbxts/ui-labs";
import StatsContainer from "client/app/components/HeadUserDisplay/StatsContainer/stats-container";
import { clientProducer } from "client/store";

function StatsContainerStory(): React.Element {
	return <StatsContainer />;
}

export = CreateReactStory(
	{
		name: "ShopSlotStory.story",
		react: React,
		reactRoblox: ReactRoblox,
		summary: "StatsContainerStory story.",
	},
	() => (
		<ReflexProvider producer={clientProducer}>
			<StatsContainerStory />
		</ReflexProvider>
	),
);
