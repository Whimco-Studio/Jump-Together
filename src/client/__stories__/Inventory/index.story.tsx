//!optimize 2

import React from "@rbxts/react";
import { ReflexProvider } from "@rbxts/react-reflex";
import ReactRoblox from "@rbxts/react-roblox";
import { CreateReactStory } from "@rbxts/ui-labs";
import Inventory from "client/app/components/Inventory";
import { clientProducer } from "client/store";

function InventoryStoryContainer(): React.Element {
	task.delay(3, () => {});
	clientProducer.setPage("Inventory");
	return <Inventory />;
}

export = CreateReactStory(
	{
		name: "InventorySlotStory.story",
		react: React,
		reactRoblox: ReactRoblox,
		summary: "InventorySlotStory story.",
	},
	() => (
		<ReflexProvider producer={clientProducer}>
			<InventoryStoryContainer />
		</ReflexProvider>
	),
);
