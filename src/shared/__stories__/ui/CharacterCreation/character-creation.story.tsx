import React from "@rbxts/react";
import { ReflexProvider } from "@rbxts/react-reflex";
import ReactRoblox from "@rbxts/react-roblox";
import { CreateReactStory } from "@rbxts/ui-labs";
import { CharacterCreation } from "shared/app/components/CharacterCreation";
import { store } from "shared/app/stores";

const story = CreateReactStory(
	{
		controls: {},
		react: React,
		reactRoblox: ReactRoblox,
	},
	(properties) => {
		store.setPage("CharacterCreation");
		const component = (
			<ReflexProvider producer={store}>
				<CharacterCreation />
			</ReflexProvider>
		);

		return component;
	},
);

export = story;
