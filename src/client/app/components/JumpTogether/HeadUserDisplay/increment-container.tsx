//!optimize 2

import React from "@rbxts/react";
import { Images } from "client/app/images";

export default function IncrementContainer({ children }: React.PropsWithChildren): React.Element {
	return (
		<frame
			AnchorPoint={new Vector2(0, 0.5)}
			BackgroundTransparency={1}
			Position={new UDim2(1.2, 0, 0.55, 0)}
			Size={new UDim2(1.216, 0, 1, 0)}
			key="IncrementContainer"
		>
			<imagelabel
				AnchorPoint={new Vector2(0.5, 0.5)}
				BackgroundTransparency={1}
				Image={Images.Icons.Global.ArrowUp}
				Position={new UDim2(0.5, 0, 0.5, 0)}
				Size={new UDim2(0.76, 0, 0.76, 0)}
				ZIndex={2}
			/>
			<imagelabel
				AnchorPoint={new Vector2(0.5, 0.5)}
				BackgroundTransparency={1}
				Image={Images.Icons.Global.IncrementBackground}
				Position={new UDim2(0.5, 0, 0.5, 0)}
				Size={new UDim2(1, 0, 1, 0)}
			/>
			<imagelabel
				AnchorPoint={new Vector2(0.5, 0.5)}
				BackgroundTransparency={1}
				Image={Images.Icons.Global.DecrementBackground}
				ImageTransparency={1}
				Position={new UDim2(0.5, 0, 0.5, 0)}
				Size={new UDim2(1, 0, 1, 0)}
			/>
			<uiaspectratioconstraint />
		</frame>
	);
}
