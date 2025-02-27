//!optimize 2

import React from "@rbxts/react";
import { ReflexProvider } from "@rbxts/react-reflex";
import ReactRoblox from "@rbxts/react-roblox";
import { CreateReactStory } from "@rbxts/ui-labs";
import ShopSlot from "client/app/components/Slots/shop-slot";
import { clientProducer } from "client/store";

function SkinSlotStory(): React.Element {
	return <ShopSlot IsSkin={true} Price={2500} Quirkymal="Dragon" Rarity="Common" />;
}

export = CreateReactStory(
	{
		name: "SkinSlotStory.story",
		react: React,
		reactRoblox: ReactRoblox,
		summary: "SkinSlotStory story.",
	},
	() => (
		<ReflexProvider producer={clientProducer}>
			<SkinSlotStory />
		</ReflexProvider>
	),
);
