import React from "@rbxts/react";
import { ReflexProvider } from "@rbxts/react-reflex";
import ReactRoblox from "@rbxts/react-roblox";
import { CreateReactStory } from "@rbxts/ui-labs";
import { CharacterCreationPanel } from "shared/app/components/CharacterCreation/CharacterCreationPanel";
import { store } from "shared/app/stores";

const story = CreateReactStory(
	{
		react: React,
		reactRoblox: ReactRoblox,
		// controls: {},
	},
	(properties) => {
		store.setPage("CharacterCreation");
		const component = (
			<ReflexProvider producer={store}>
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
