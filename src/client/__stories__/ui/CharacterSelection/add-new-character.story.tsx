import React from "@rbxts/react";
import { ReflexProvider } from "@rbxts/react-reflex";
import ReactRoblox from "@rbxts/react-roblox";
import { CreateReactStory } from "@rbxts/ui-labs";
import { AddNewCharacterButton } from "client/app/components/CharacterSelection/add-new-character-button";
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
