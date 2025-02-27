//!optimize 2

import React from "@rbxts/react";

export interface GradientProperties extends React.PropsWithChildren {
	ColorSequence: ColorSequence;
}

export default function Gradient(properties: GradientProperties): React.Element {
	return (
		<imagelabel
			BackgroundTransparency={1}
			Image="rbxassetid://125775622812536"
			Position={new UDim2(0.20400000000000001, 0, 0.299, 0)}
			Size={new UDim2(0.449, 0, 0.404, 0)}
			key="Paintbrush"
		>
			<uiaspectratioconstraint AspectRatio={1.008} />
			<imagelabel
				BackgroundTransparency={1}
				Image="rbxassetid://106731555709199"
				Position={new UDim2(0.356, 0, 0.041, 0)}
				Size={new UDim2(0.617, 0, 0.594, 0)}
				key="Color"
			>
				<uigradient Color={properties.ColorSequence} Rotation={45} />

				<uiaspectratioconstraint AspectRatio={1.029} />
			</imagelabel>
		</imagelabel>
	);
}
