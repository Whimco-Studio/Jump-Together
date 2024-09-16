import React, { useState } from "@rbxts/react";
import { PanelRibbon } from "./PanelRibbon";

interface LeftPanelProps {}

export function LeftPanel() {
	return (
		<frame
			BackgroundTransparency={1}
			BorderColor3={Color3.fromRGB(27, 42, 53)}
			BorderSizePixel={0}
			Position={UDim2.fromScale(0.0125, 0.1)}
			Size={UDim2.fromScale(0.35, 0.858)}
		>
			<PanelRibbon />
			<imagelabel
				Image="rbxassetid://15089134895"
				BackgroundTransparency={1}
				BorderColor3={Color3.fromRGB(27, 42, 53)}
				BorderSizePixel={0}
				Size={UDim2.fromScale(1, 1)}
			/>
			<uiaspectratioconstraint AspectRatio={0.726} />
		</frame>
	);
}
