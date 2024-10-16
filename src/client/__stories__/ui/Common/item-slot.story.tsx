import React from "@rbxts/react";
import { ReflexProvider } from "@rbxts/react-reflex";
import ReactRoblox from "@rbxts/react-roblox";
import { CreateReactStory } from "@rbxts/ui-labs";
import { ItemSlot } from "client/app/components/item-slot";
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
				<ItemSlot aspectRatio={0.909} index={0} />
			</ReflexProvider>
		);

		return component;
	},
);

export = story;
