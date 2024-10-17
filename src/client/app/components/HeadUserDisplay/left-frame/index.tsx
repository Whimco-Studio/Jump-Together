//!optimize 2

import LeftPanelButtons from "./buttons";
import React from "@rbxts/react";

export default function LeftFrame({ children }: React.PropsWithChildren): React.Element {
	return (
		<frame
			AnchorPoint={new Vector2(0, 0.5)}
			BackgroundTransparency={1}
			Position={new UDim2(0.01, 0, 0.5, 0)}
			Size={new UDim2(0.10200000000000001, 0, 0.4, 0)}
			key="LeftFrame"
		>
			<uilistlayout
				HorizontalAlignment={Enum.HorizontalAlignment.Center}
				Padding={new UDim(0, 20)}
				SortOrder={Enum.SortOrder.LayoutOrder}
				VerticalAlignment={Enum.VerticalAlignment.Center}
				Wraps={true}
			/>
			<LeftPanelButtons />
		</frame>
	);
}
