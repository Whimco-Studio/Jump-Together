import React from "@rbxts/react";
import { ReflexProvider } from "@rbxts/react-reflex";
import ReactRoblox from "@rbxts/react-roblox";
import { CreateReactStory } from "@rbxts/ui-labs";
import Shop from "client/app/components/JumpTogether/Inventory";
import { clientProducer } from "client/store";

const story = CreateReactStory(
	{
		controls: {},
		react: React,
		reactRoblox: ReactRoblox,
	},
	(properties) => {
		clientProducer.setPage("Shop");

		const component = (
			<ReflexProvider producer={clientProducer}>
				<Shop />
			</ReflexProvider>
		);

		return component;
	},
);

export = story;
