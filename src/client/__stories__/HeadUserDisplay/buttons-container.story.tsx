//!optimize 2

import React from "@rbxts/react";
import { ReflexProvider } from "@rbxts/react-reflex";
import ReactRoblox from "@rbxts/react-roblox";
import { CreateReactStory } from "@rbxts/ui-labs";
import ButtonsContainer from "client/app/components/HeadUserDisplay/ButtonsConatiner/buttons-container";
import { clientProducer } from "client/store";

function ButtonsContainerStory(): React.Element {
	return <ButtonsContainer />;
}

export = CreateReactStory(
	{
		name: "ShopSlotStory.story",
		react: React,
		reactRoblox: ReactRoblox,
		summary: "ShopSlotStory story.",
	},
	() => (
		<ReflexProvider producer={clientProducer}>
			<ButtonsContainerStory />
		</ReflexProvider>
	),
);
