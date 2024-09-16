import React from "@rbxts/react";
import ReactRoblox from "@rbxts/react-roblox";
import { ReflexProvider } from "@rbxts/react-reflex";
import { CreateReactStory } from "@rbxts/ui-labs";

import { App } from "..";
import { store } from "../stores";

const story = CreateReactStory(
	{
		react: React,
		reactRoblox: ReactRoblox,
		controls: {},
	},
	(props) => {
		const component = (
			<ReflexProvider producer={store}>
				<App />
			</ReflexProvider>
		);

		return component;
	},
);

export = story;
