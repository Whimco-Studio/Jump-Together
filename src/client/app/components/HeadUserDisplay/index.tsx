//!optimize 2

import ButtonsContainer from "./ButtonsConatiner/buttons-container";
import StatsContainer from "./StatsContainer/stats-container";
import React from "@rbxts/react";

export default function HeadUserDisplay({ children }: React.PropsWithChildren): React.Element {
	return (
		<frame BackgroundTransparency={1} Size={UDim2.fromScale(1, 1)} key={"HeadUserDisplay"}>
			<StatsContainer />
			<ButtonsContainer />
		</frame>
	);
}
