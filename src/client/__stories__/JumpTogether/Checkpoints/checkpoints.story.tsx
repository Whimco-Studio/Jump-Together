import React from "@rbxts/react";
import { ReflexProvider } from "@rbxts/react-reflex";
import ReactRoblox from "@rbxts/react-roblox";
import { CreateReactStory } from "@rbxts/ui-labs";
import Checkpoints from "client/app/components/JumpTogether/Checkpoints";
import { clientProducer } from "client/store";

const story = CreateReactStory(
	{
		controls: {},
		react: React,
		reactRoblox: ReactRoblox,
	},
	(properties) => {
		const component = (
			<ReflexProvider producer={clientProducer}>
				<Checkpoints />
			</ReflexProvider>
		);

		return component;
	},
);

export = story;
