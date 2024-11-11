//!optimize 2

import React from "@rbxts/react";
import { Images } from "client/app/images";

const Scale = 0.5;

export default function CoinsIncrementContainer({ children }: React.PropsWithChildren): React.Element {
	return (
		<frame
			AnchorPoint={new Vector2(0, 0.5)}
			BackgroundColor3={Color3.fromRGB(255, 255, 255)}
			BorderSizePixel={0}
			Position={new UDim2(0.096, 0, 0.5, 0)}
			Size={new UDim2(0.222, 0, 0.5, 0)}
			key="CoinsIncrementContainer"
		>
			<imagelabel
				AnchorPoint={new Vector2(0.5, 0.5)}
				BackgroundTransparency={1}
				Image={Images.Icons.Global.ArrowUp}
				Position={new UDim2(0.5, 0, 0.5, 0)}
				Size={new UDim2(0.76, 0, 0.76, 0)}
				ZIndex={2}
			>
				<uiaspectratioconstraint AspectRatio={1} />
			</imagelabel>
			<imagelabel
				AnchorPoint={new Vector2(0.5, 0.5)}
				BackgroundTransparency={1}
				Image={Images.Icons.Global.IncrementBackground}
				Position={new UDim2(0.5, 0, 0.5, 0)}
				Size={new UDim2(1, 0, 1, 0)}
			>
				<uiaspectratioconstraint AspectRatio={1} />
			</imagelabel>
			<imagelabel
				AnchorPoint={new Vector2(0.5, 0.5)}
				BackgroundTransparency={1}
				Image={Images.Icons.Global.DecrementBackground}
				ImageTransparency={1}
				Position={new UDim2(0.5, 0, 0.5, 0)}
				Size={new UDim2(1, 0, 1, 0)}
			>
				<uiaspectratioconstraint AspectRatio={1} />
			</imagelabel>
			<uiaspectratioconstraint />
		</frame>
	);
}
