//!optimize 2

import React from "@rbxts/react";
import { ReflexProvider } from "@rbxts/react-reflex";
import ReactRoblox from "@rbxts/react-roblox";
import { CreateReactStory } from "@rbxts/ui-labs";
import PetLog from "client/app/components/Quirkymals/PetLog";
import { clientProducer } from "client/store";

function PetLogStory(): React.Element {
	return (
		<ReflexProvider producer={clientProducer}>
			<frame
				AnchorPoint={new Vector2(0.5, 0.5)}
				BackgroundTransparency={1}
				Position={new UDim2(0.5, 0, 0.5, 0)}
				Size={new UDim2(1, 0, 1, 0)}
			>
				<PetLog />
			</frame>
		</ReflexProvider>
	);
}

export = CreateReactStory(
	{
		name: "PetLogStory.story",
		react: React,
		reactRoblox: ReactRoblox,
		summary: `PetLogStory ${"story"}.`,
	},
	() => <PetLogStory />,
);
