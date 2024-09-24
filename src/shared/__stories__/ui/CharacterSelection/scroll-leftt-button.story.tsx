import React from "@rbxts/react";
import { ReflexProvider } from "@rbxts/react-reflex";
import ReactRoblox from "@rbxts/react-roblox";
import { CreateReactStory } from "@rbxts/ui-labs";
import { ScrollLeftButton } from "shared/app/components/CharacterSelection/scroll-left-button";
import { store } from "shared/app/stores";

const story = CreateReactStory(
	{
		controls: {},
		react: React,
		reactRoblox: ReactRoblox,
	},
	(properties) => {
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
