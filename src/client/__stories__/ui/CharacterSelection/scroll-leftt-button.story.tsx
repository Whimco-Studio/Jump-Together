import React from "@rbxts/react";
import { ReflexProvider } from "@rbxts/react-reflex";
import ReactRoblox from "@rbxts/react-roblox";
import { CreateReactStory } from "@rbxts/ui-labs";
import { ScrollLeftButton } from "client/app/components/CharacterSelection/scroll-left-button";
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
				<ScrollLeftButton position={UDim2.fromScale(0.5, 0.5)} springPosition={UDim2.fromScale(0.5, 1.5)} />
			</ReflexProvider>
		);

		return component;
	},
);

export = story;
