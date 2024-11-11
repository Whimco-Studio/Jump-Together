//!optimize 2

import React from "@rbxts/react";

export default function PetProgressBarUnderlay({ children }: React.PropsWithChildren): React.Element {
	return (
		<frame
			BackgroundColor3={Color3.fromRGB(255, 255, 255)}
			BorderSizePixel={0}
			ClipsDescendants={true}
			Position={new UDim2(0.17200000000000001, 0, 0.18, 0)}
			Size={new UDim2(0.27, 0, 0.047, 0)}
			ZIndex={-1}
			key="ProgressBarUnderlay"
		>
			<imagelabel
				AnchorPoint={new Vector2(1, 0)}
				BackgroundColor3={Color3.fromRGB(255, 255, 255)}
				BorderSizePixel={0}
				Image="rbxassetid://16287938313"
				Position={new UDim2(1, 0, 0, 0)}
				Size={new UDim2(1, 0, 1, 0)}
				key="ProgressFill"
			/>
		</frame>
	);
}
