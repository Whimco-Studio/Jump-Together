import React from "@rbxts/react";
import ReactRoblox from "@rbxts/react-roblox";
import { ReflexProvider } from "@rbxts/react-reflex";
import { CreateReactStory } from "@rbxts/ui-labs";

import { store } from "client/app/stores";
import { SelectionLabel } from "client/app/components/CharacterSelection/SelectionLabel";

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
				<SelectionLabel
					anchorPoint={new Vector2(0.5, 0.5)}
					position={UDim2.fromScale(0.417, 0.0703)}
					springPosition={UDim2.fromScale(0, 0)}
				/>
			</ReflexProvider>
		);

		return component;
	},
);

export = story;
