//!optimize 2

import React from "@rbxts/react";
import { InferProps } from "@rbxts/react/src/prop-types";
import { ReflexProvider } from "@rbxts/react-reflex";
import ReactRoblox from "@rbxts/react-roblox";
import { ReplicatedStorage } from "@rbxts/services";
import { CreateReactStory } from "@rbxts/ui-labs";
import Gradient from "client/app/components/base/gradient";
import QuirkymalIcons from "client/app/images/quirkymal-icons";
import GetQuirkymalGradient from "client/modules/quirkymal-gradients";
import { clientProducer } from "client/store";

const StarterQuirkymal = "Dove";

const GetQuirkymalNames = () => {
	const quirkymalNames: string[] = [];
	const finalQuirkymalNames: string[] = [];
	for (const quirkymal of ReplicatedStorage.Assets.Quirkymals.GetChildren()) {
		quirkymalNames.push(quirkymal.Name);
	}

	while (finalQuirkymalNames.size() < 20 && quirkymalNames.size() > 0) {
		const randomIndex = math.random(0, quirkymalNames.size() - 1);
		const randomName = quirkymalNames[randomIndex];
		finalQuirkymalNames.push(randomName as string);
		quirkymalNames.remove(randomIndex);
	}

	finalQuirkymalNames.insert(0, StarterQuirkymal);

	return finalQuirkymalNames;
};

interface GradientTestStoryProperties extends React.PropsWithChildren {
	Quirkymal?: keyof typeof QuirkymalIcons;
	Visible?: boolean;
}

function GradientTestStory(properties: GradientTestStoryProperties): React.Element {
	const QuirkymalNames = GetQuirkymalNames();
	const quirkymal = QuirkymalNames[math.random(0, QuirkymalNames.size() - 1)] as keyof typeof QuirkymalIcons;

	return <Gradient ColorSequence={GetQuirkymalGradient(quirkymal)} />;
}

const controls = {
	Quirkymal: GetQuirkymalNames(),
	Visible: true,
};

export = CreateReactStory(
	{
		controls: controls,
		name: "GradientExample.story",
		react: React,
		reactRoblox: ReactRoblox,
		summary: "GradientExample story.",
	},
	(properties: InferProps<typeof controls>) => {
		return (
			<ReflexProvider producer={clientProducer}>
				<GradientTestStory />
			</ReflexProvider>
		);
	},
);
