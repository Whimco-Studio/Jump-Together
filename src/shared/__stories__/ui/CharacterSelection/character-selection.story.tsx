import React from "@rbxts/react";
import { ReflexProvider } from "@rbxts/react-reflex";
import ReactRoblox from "@rbxts/react-roblox";
import { CreateReactStory } from "@rbxts/ui-labs";
import { CharacterSelection } from "shared/app/components/CharacterSelection";
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
				<CharacterSelection />
			</ReflexProvider>
		);

		return component;
	},
);

export = story;
