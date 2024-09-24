import React from "@rbxts/react";
import { ReflexProvider } from "@rbxts/react-reflex";
import ReactRoblox from "@rbxts/react-roblox";
import { CreateReactStory } from "@rbxts/ui-labs";
import { AddNewCharacterButton } from "shared/app/components/CharacterSelection/add-new-character-button";
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
				<AddNewCharacterButton
					anchorPoint={new Vector2(0.5, 0.5)}
					aspectRatio={1}
					onClick={() => print("clicked")}
					position={UDim2.fromScale(0.5, 0.5)}
					springPosition={UDim2.fromScale(0.5, 1.5)}
				/>
			</ReflexProvider>
		);

		return component;
	},
);

export = story;
