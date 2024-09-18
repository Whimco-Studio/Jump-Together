import React from "@rbxts/react";
import ReactRoblox from "@rbxts/react-roblox";
import { ReflexProvider } from "@rbxts/react-reflex";
import { CreateReactStory } from "@rbxts/ui-labs";

import { store } from "client/app/stores";
import { ScrollRightButton } from "client/app/components/CharacterSelection/ScrollRightButton";

const story = CreateReactStory(
	{
		react: React,
		reactRoblox: ReactRoblox,
		controls: {},
	},
	(props) => {
		const component = (
			<ReflexProvider producer={store}>
				<ScrollRightButton position={UDim2.fromScale(0.5, 0.5)} springPosition={UDim2.fromScale(0.5, 1.5)} />
			</ReflexProvider>
		);

		return component;
	},
);

export = story;
