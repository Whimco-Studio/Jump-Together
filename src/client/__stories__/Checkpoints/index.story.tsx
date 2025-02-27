//!optimize 2

import React from "@rbxts/react";
import { ReflexProvider } from "@rbxts/react-reflex";
import ReactRoblox from "@rbxts/react-roblox";
import { CreateReactStory } from "@rbxts/ui-labs";
import Checkpoints from "client/app/components/Checkpoints";
import { clientProducer } from "client/store";

function CheckpointsStoryContainer(): React.Element {
	task.delay(3, () => {});
	clientProducer.setPage("Checkpoints");
	return <Checkpoints />;
}

export = CreateReactStory(
	{
		name: "CheckpointsSlotStory.story",
		react: React,
		reactRoblox: ReactRoblox,
		summary: "CheckpointsSlotStory story.",
	},
	() => (
		<ReflexProvider producer={clientProducer}>
			<CheckpointsStoryContainer />
		</ReflexProvider>
	),
);
