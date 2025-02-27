//!optimize 2

import React from "@rbxts/react";
import QuirkymalIcons from "client/app/images/quirkymal-icons";
import GetQuirkymalGradient from "client/modules/quirkymal-gradients";

export interface PaintbrushIconProperties extends React.PropsWithChildren {
	Quirkymal: keyof typeof QuirkymalIcons;
	Transparency?: React.Binding<number>;
}

export default function PaintbrushIcon(properties: PaintbrushIconProperties): React.Element {
	return (
		<imagelabel
			AnchorPoint={new Vector2(0.5, 0.5)}
			BackgroundTransparency={1}
			Image="rbxassetid://125775622812536"
			ImageTransparency={properties.Transparency ?? 0}
			Position={new UDim2(0.5, 0, 0.5, 0)}
			Size={new UDim2(0.9, 0, 0.9, 0)}
			key="Paintbrush"
		>
			<uiaspectratioconstraint AspectRatio={1.008} />
			<imagelabel
				BackgroundTransparency={1}
				Image="rbxassetid://106731555709199"
				ImageTransparency={properties.Transparency ?? 0}
				Position={new UDim2(0.356, 0, 0.041, 0)}
				Size={new UDim2(0.617, 0, 0.594, 0)}
				key="Color"
			>
				<uigradient Color={GetQuirkymalGradient(properties.Quirkymal)} Rotation={45} />

				<uiaspectratioconstraint AspectRatio={1.029} />
			</imagelabel>
		</imagelabel>
	);
}
