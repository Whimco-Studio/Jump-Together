import { useMotion } from "@rbxts/pretty-react-hooks";
import React, { useState } from "@rbxts/react";
import { useSelector } from "@rbxts/react-reflex";
import { useRootProducer, useRootSelector } from "client/app/hooks";
import { PanelButton } from "./PanelButton";

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
				Padding={new UDim(0.2, 0)}
				FillDirection={Enum.FillDirection.Horizontal}
				HorizontalAlignment={Enum.HorizontalAlignment.Center}
				VerticalAlignment={Enum.VerticalAlignment.Bottom}
				SortOrder={Enum.SortOrder.LayoutOrder}
			/>
			<PanelButton tabName={"Quirkymals"} image="rbxassetid://15089139335" size={UDim2.fromScale(0.21, 1)} />
			<PanelButton tabName={"Accessories"} image="rbxassetid://15089138091" size={UDim2.fromScale(0.21, 0.741)} />
			<PanelButton tabName={"Skins"} image="rbxassetid://15089140552" size={UDim2.fromScale(0.214, 0.926)} />
		</frame>
	);
}
