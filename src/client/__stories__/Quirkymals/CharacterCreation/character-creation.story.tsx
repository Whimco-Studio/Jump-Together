import React from "@rbxts/react";
import { ReflexProvider } from "@rbxts/react-reflex";
import ReactRoblox from "@rbxts/react-roblox";
import { CreateReactStory } from "@rbxts/ui-labs";
import { CharacterCreation } from "client/app/components/Quirkymals/CharacterCreation";
import { clientProducer } from "client/store";

const story = CreateReactStory(
	{
		controls: {},
		react: React,
		reactRoblox: ReactRoblox,
	},
	(properties) => {
		clientProducer.setPage("CharacterCreation");
		const component = (
			<ReflexProvider producer={clientProducer}>
				<CharacterCreation />
			</ReflexProvider>
		);

		return component;
	},
);

export = story;
