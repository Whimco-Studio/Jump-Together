//!optimize 2

import React from "@rbxts/react";
import { ReflexProvider } from "@rbxts/react-reflex";
import ReactRoblox from "@rbxts/react-roblox";
import { CreateReactStory } from "@rbxts/ui-labs";
import DailyRewards from "client/app/components/DailyRewards";
import { clientProducer } from "client/store";

function DailyRewardsStoryContainer(): React.Element {
	task.delay(3, () => {});
	clientProducer.setPage("DailyRewards");
	return <DailyRewards />;
}

export = CreateReactStory(
	{
		name: "DailyRewardsSlotStory.story",
		react: React,
		reactRoblox: ReactRoblox,
		summary: "DailyRewardsSlotStory story.",
	},
	() => (
		<ReflexProvider producer={clientProducer}>
			<DailyRewardsStoryContainer />
		</ReflexProvider>
	),
);
