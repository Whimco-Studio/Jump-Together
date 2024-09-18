import React from "@rbxts/react";
import ReactRoblox from "@rbxts/react-roblox";
import { ReflexProvider } from "@rbxts/react-reflex";
import { CreateReactStory } from "@rbxts/ui-labs";

import { store } from "client/app/stores";
import { ScrollLeftButton } from "client/app/components/CharacterSelection/ScrollLeftButton";

const story = CreateReactStory(
	{
		react: React,
		reactRoblox: ReactRoblox,
		controls: {},
	},
	(props) => {
		store.setPage("CharacterSelection");

		const component = (
			<ReflexProvider producer={store}>
				<ScrollLeftButton position={UDim2.fromScale(0.5, 0.5)} springPosition={UDim2.fromScale(0.5, 1.5)} />
			</ReflexProvider>
		);

		return component;
	},
);

export = story;
