//!optimize 2

import React from "@rbxts/react";
import { ReflexProvider } from "@rbxts/react-reflex";
import ReactRoblox from "@rbxts/react-roblox";
import { CreateReactStory } from "@rbxts/ui-labs";
import { App } from "client/app";
import { clientProducer } from "client/store";

function JumpTogetherInterface(): React.Element {
	return <App />;
}

export = CreateReactStory(
	{
		name: "JumpTogetherInterface.story",
		react: React,
		reactRoblox: ReactRoblox,
		summary: "JumpTogetherInterface story.",
	},
	() => (
		<ReflexProvider producer={clientProducer}>
			<JumpTogetherInterface />
		</ReflexProvider>
	),
);
