import { PanelButton } from "./panel-button";
import { useMotion } from "@rbxts/pretty-react-hooks";
import React from "@rbxts/react";
import { useRootProducer } from "client/app/hooks/root-hook";

export function PanelRibbon() {
	const [transition, transitionMotion] = useMotion(1);

	const producer = useRootProducer();

	return (
		<frame
			BackgroundTransparency={1}
			BorderColor3={Color3.fromRGB(27, 42, 53)}
			BorderSizePixel={0}
			Position={UDim2.fromScale(0.247, 0.0547)}
			Size={UDim2.fromScale(0.508, 0.0819)}
			ZIndex={2}
		>
			<uilistlayout
				FillDirection={Enum.FillDirection.Horizontal}
				HorizontalAlignment={Enum.HorizontalAlignment.Center}
				Padding={new UDim(0.2, 0)}
				SortOrder={Enum.SortOrder.LayoutOrder}
				VerticalAlignment={Enum.VerticalAlignment.Bottom}
			/>
			<PanelButton image="rbxassetid://15089139335" size={UDim2.fromScale(0.21, 1)} tabName={"Quirkymals"} />
			<PanelButton image="rbxassetid://15089138091" size={UDim2.fromScale(0.21, 0.741)} tabName={"Accessories"} />
			<PanelButton image="rbxassetid://15089140552" size={UDim2.fromScale(0.214, 0.926)} tabName={"Skins"} />
		</frame>
	);
}
