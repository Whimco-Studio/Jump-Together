//!optimize 2

import React from "@rbxts/react";
import { Images } from "client/app/images";

export default function CoinsIcon({ children }: React.PropsWithChildren): React.Element {
	return (
		<frame
			AnchorPoint={new Vector2(0, 0.5)}
			BackgroundColor3={Color3.fromRGB(255, 0, 255)}
			BackgroundTransparency={1}
			BorderSizePixel={0}
			Position={new UDim2(0.096, 0, 0.5, 0)}
			Size={new UDim2(0.222, 0, 0.5, 0)}
			key="CoinsIncrementContainer"
		>
			<uiaspectratioconstraint AspectRatio={1} />
			<imagelabel
				AnchorPoint={new Vector2(0.5, 0.5)}
				BackgroundTransparency={1}
				Image={Images.Icons.Global.Coin}
				Position={new UDim2(0.5, 0, 0.5, 0)}
				Size={new UDim2(1, 0, 1, 0)}
				ZIndex={2}
			/>
		</frame>
	);
}
