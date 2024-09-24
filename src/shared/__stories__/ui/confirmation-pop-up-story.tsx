import React from "@rbxts/react";
import { ReflexProvider } from "@rbxts/react-reflex";
import ReactRoblox from "@rbxts/react-roblox";
import { CreateReactStory } from "@rbxts/ui-labs";
import { ConfirmationPopUp } from "shared/app/components/ConfirmationPopUp";
import { store } from "shared/app/stores";

const story = CreateReactStory(
	{
		controls: {},
		react: React,
		reactRoblox: ReactRoblox,
	},
	(properties) => {
		const component = (
			<ReflexProvider producer={store}>
				<ConfirmationPopUp />
			</ReflexProvider>
		);

		return component;
	},
);

export = story;
