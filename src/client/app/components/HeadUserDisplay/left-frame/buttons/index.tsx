//!optimize 2

import ButtonTemplate from "./button-template";
import React from "@rbxts/react";

export default function LeftPanelButtons({ children }: React.PropsWithChildren): React.Element {
	return (
		<frame
			AnchorPoint={new Vector2(0, 0.5)}
			BackgroundTransparency={1}
			LayoutOrder={10}
			Position={new UDim2(0.01, 0, 0.5, 0)}
			Size={new UDim2(1.005, 0, 0.404, 0)}
			key="Buttons"
		>
			<uiaspectratioconstraint AspectRatio={1.129} />

			<uilistlayout
				FillDirection={Enum.FillDirection.Horizontal}
				HorizontalAlignment={Enum.HorizontalAlignment.Center}
				Padding={new UDim(0.2, 0)}
				SortOrder={Enum.SortOrder.LayoutOrder}
				VerticalAlignment={Enum.VerticalAlignment.Center}
				Wraps={true}
			/>
			<ButtonTemplate index={0} title="Shop" />
			<ButtonTemplate index={1} title="Inventory" />
			<ButtonTemplate index={2} title="Gamepasses" />
			<ButtonTemplate index={3} title="Checkpoints" />
		</frame>
	);
}
