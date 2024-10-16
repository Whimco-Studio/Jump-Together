import React from "@rbxts/react";
import { ReflexProvider } from "@rbxts/react-reflex";
import ReactRoblox from "@rbxts/react-roblox";
import { CreateReactStory } from "@rbxts/ui-labs";
import { CharacterSelection } from "client/app/components/CharacterSelection";
import { clientProducer } from "client/store";

const story = CreateReactStory(
	{
		controls: {},
		react: React,
		reactRoblox: ReactRoblox,
	},
	(properties) => {
		clientProducer.setPage("CharacterSelection");

		const component = (
			<ReflexProvider producer={clientProducer}>
				<CharacterSelection />
			</ReflexProvider>
		);

		return component;
	},
);

export = story;
