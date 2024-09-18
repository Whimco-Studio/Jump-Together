import React from "@rbxts/react";
import ReactRoblox from "@rbxts/react-roblox";
import { ReflexProvider } from "@rbxts/react-reflex";
import { CreateReactStory } from "@rbxts/ui-labs";

import { store } from "client/app/stores";
import { PanelRibbon } from "client/app/components/CharacterCreation/CharacterCreationPanel/PanelRibbon";
import { useRootProducer } from "client/app/hooks";

const story = CreateReactStory(
	{
		react: React,
		reactRoblox: ReactRoblox,
		controls: {},
	},
	(props) => {
		const component = (
			<ReflexProvider producer={store}>
				<PanelRibbon />
			</ReflexProvider>
		);

		return component;
	},
);

export = story;
