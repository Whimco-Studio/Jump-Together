import React from "@rbxts/react";
import { ReflexProvider } from "@rbxts/react-reflex";
import ReactRoblox from "@rbxts/react-roblox";
import { CreateReactStory } from "@rbxts/ui-labs";
import ShopTabs from "client/app/components/JumpTogether/Shop/Tabs";
import { clientProducer } from "client/store";

const story = CreateReactStory(
	{
		controls: {},
		react: React,
		reactRoblox: ReactRoblox,
	},
	(properties) => {
		const component = (
			<ReflexProvider producer={clientProducer}>
				<ShopTabs />
			</ReflexProvider>
		);

		return component;
	},
);

export = story;
