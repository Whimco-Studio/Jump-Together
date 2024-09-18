import React from "@rbxts/react";
import ReactRoblox from "@rbxts/react-roblox";
import { ReflexProvider } from "@rbxts/react-reflex";
import { CreateReactStory } from "@rbxts/ui-labs";

import { store } from "client/app/stores";
import { CharacterCreationExit } from "client/app/components/CharacterCreation/CharacterCreationExit";

const story = CreateReactStory(
	{
		react: React,
		reactRoblox: ReactRoblox,
		controls: {},
	},
	(props) => {
		store.setPage("CharacterCreation");

		const component = (
			<ReflexProvider producer={store}>
				<CharacterCreationExit
					onClick={() => print("clicked")}
					// position={UDim2.fromScale(0.5, 0.5)}
					// anchorPoint={new Vector2(0.5, 0.5)}
					// springPosition={UDim2.fromScale(0.5, 1.5)}
				/>
			</ReflexProvider>
		);

		return component;
	},
);

export = story;
