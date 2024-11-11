import React from "@rbxts/react";
import { ReflexProvider } from "@rbxts/react-reflex";
import ReactRoblox from "@rbxts/react-roblox";
import { CreateReactStory } from "@rbxts/ui-labs";
import { PanelRibbon } from "client/app/components/Quirkymals/CharacterCreation/CharacterCreationPanel/panel-ribbon";
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
				<PanelRibbon />
			</ReflexProvider>
		);

		return component;
	},
);

export = story;
