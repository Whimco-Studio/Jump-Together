import React from "@rbxts/react";
import ReactRoblox from "@rbxts/react-roblox";
import { ReflexProvider } from "@rbxts/react-reflex";
import { CreateReactStory } from "@rbxts/ui-labs";

import { store } from "client/app/stores";
import { ItemSlot } from "client/app/components/ItemSlot";
import { CharacterSelection } from "client/app/components/CharacterSelection";

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
				<CharacterSelection />
			</ReflexProvider>
		);

		return component;
	},
);

export = story;
