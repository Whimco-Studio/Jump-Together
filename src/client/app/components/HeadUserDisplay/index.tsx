//!optimize 2

import HeightFrame from "./height-frame";
import LeftFrame from "./left-frame";
import React from "@rbxts/react";

export default function HeadUserDisplay({ children }: React.PropsWithChildren): React.Element {
	return (
		<frame
			AnchorPoint={new Vector2(0.5, 0.5)}
			BackgroundTransparency={1}
			Position={new UDim2(0.5, 0, 0.5, 0)}
			Size={new UDim2(1, 0, 1, 0)}
			key="HeadUserDisplay"
		>
			<LeftFrame />
			<HeightFrame />
		</frame>
	);
}
