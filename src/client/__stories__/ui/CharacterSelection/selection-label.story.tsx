import React from "@rbxts/react";
import { ReflexProvider } from "@rbxts/react-reflex";
import ReactRoblox from "@rbxts/react-roblox";
import { CreateReactStory } from "@rbxts/ui-labs";
import { SelectionLabel } from "client/app/components/CharacterSelection/selection-label";
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
