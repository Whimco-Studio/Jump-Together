//!optimize 2

import PetDisplay from "./pet-display";
import PetLogBooklet from "./pet-log-booklet";
import PetProgressBarUnderlay from "./pet-progress-bar-underlay";
import React from "@rbxts/react";

export default function PetLog({ children }: React.PropsWithChildren): React.Element {
	return (
		<frame
			AnchorPoint={new Vector2(0.5, 0.5)}
			BackgroundTransparency={1}
			Position={new UDim2(0.5, 0, 0.5, 0)}
			Size={new UDim2(0.975, 0, 1, 0)}
			key="PetLog"
		>
			<uiaspectratioconstraint AspectRatio={1.78} />
			<PetDisplay />
			<PetLogBooklet />
			<PetProgressBarUnderlay />
		</frame>
	);
}
