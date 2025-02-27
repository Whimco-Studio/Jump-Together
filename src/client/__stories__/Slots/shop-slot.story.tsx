//!optimize 2

import React from "@rbxts/react";
import { ReflexProvider } from "@rbxts/react-reflex";
import ReactRoblox from "@rbxts/react-roblox";
import { CreateReactStory } from "@rbxts/ui-labs";
import ShopSlot from "client/app/components/Slots/shop-slot";
import { clientProducer } from "client/store";

function ShopSlotStory(): React.Element {
	return <ShopSlot Price={2500} Quirkymal="Dove" Rarity="Common" Title="Dove" />;
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
			<ShopSlotStory />
		</ReflexProvider>
	),
);
