import React from "@rbxts/react";
import { ReflexProvider } from "@rbxts/react-reflex";
import ReactRoblox from "@rbxts/react-roblox";
import { CreateReactStory } from "@rbxts/ui-labs";
import { SelectionLabel } from "shared/app/components/CharacterSelection/selection-label";
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
