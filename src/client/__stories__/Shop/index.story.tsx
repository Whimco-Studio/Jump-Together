//!optimize 2

import React from "@rbxts/react";
import { ReflexProvider } from "@rbxts/react-reflex";
import ReactRoblox from "@rbxts/react-roblox";
import { CreateReactStory } from "@rbxts/ui-labs";
import Shop from "client/app/components/Shop";
import { clientProducer } from "client/store";

function ShopStoryContainer(): React.Element {
	task.delay(3, () => {});
	clientProducer.setPage("Shop");
	return <Shop />;
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
			<ShopStoryContainer />
		</ReflexProvider>
	),
);
