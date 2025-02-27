//!optimize 2

import React from "@rbxts/react";
import { ReflexProvider } from "@rbxts/react-reflex";
import ReactRoblox from "@rbxts/react-roblox";
import { CreateReactStory } from "@rbxts/ui-labs";
import HeadUserDisplay from "client/app/components/HeadUserDisplay";
import { clientProducer } from "client/store";

function HeadUserDisplayStory(): React.Element {
	return <HeadUserDisplay />;
}

export = CreateReactStory(
	{
		name: "ShopSlotStory.story",
		react: React,
		reactRoblox: ReactRoblox,
		summary: "ShopSlotStory story.",
	},
	() => (
		<ReflexProvider producer={clientProducer}>
			<HeadUserDisplayStory />
		</ReflexProvider>
	),
);
