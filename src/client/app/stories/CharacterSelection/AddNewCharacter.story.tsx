import React from "@rbxts/react";
import ReactRoblox from "@rbxts/react-roblox";
import { ReflexProvider } from "@rbxts/react-reflex";
import { CreateReactStory } from "@rbxts/ui-labs";

import { store } from "client/app/stores";
import { ItemSlot } from "client/app/components/ItemSlot";
import { AddNewCharacterButton } from "client/app/components/CharacterSelection/AddNewCharacterButton";

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
				<AddNewCharacterButton
					aspectRatio={1}
					onClick={() => print("clicked")}
					position={UDim2.fromScale(0.5, 0.5)}
					anchorPoint={new Vector2(0.5, 0.5)}
					springPosition={UDim2.fromScale(0.5, 1.5)}
				/>
			</ReflexProvider>
		);

		return component;
	},
);

export = story;
