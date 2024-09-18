import React from "@rbxts/react";
import ReactRoblox from "@rbxts/react-roblox";
import { ReflexProvider } from "@rbxts/react-reflex";
import { CreateReactStory } from "@rbxts/ui-labs";

import { store } from "client/app/stores";
import { ItemSlot } from "client/app/components/ItemSlot";

const story = CreateReactStory(
	{
		react: React,
		reactRoblox: ReactRoblox,
		controls: {},
	},
	(props) => {
		const component = (
			<ReflexProvider producer={store}>
				<ItemSlot aspectRatio={0.909} index={0} />
			</ReflexProvider>
		);

		return component;
	},
);

export = story;
