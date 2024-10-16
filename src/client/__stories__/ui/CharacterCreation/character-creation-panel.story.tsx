import React from "@rbxts/react";
import { ReflexProvider } from "@rbxts/react-reflex";
import ReactRoblox from "@rbxts/react-roblox";
import { CreateReactStory } from "@rbxts/ui-labs";
import { CharacterCreationPanel } from "client/app/components/CharacterCreation/CharacterCreationPanel";
import { clientProducer } from "client/store";

const story = CreateReactStory(
	{
		react: React,
		reactRoblox: ReactRoblox,
		// controls: {},
	},
	(properties) => {
		clientProducer.setPage("CharacterCreation");
		const component = (
			<ReflexProvider producer={clientProducer}>
				<CharacterCreationPanel
					anchorPoint={new Vector2(0.5, 0.5)}
					position={UDim2.fromScale(0.5, 0.5)}
					springPosition={UDim2.fromScale(-0.5, 0.5)}
				/>
			</ReflexProvider>
		);

		return component;
	},
);

export = story;
