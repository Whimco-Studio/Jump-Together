//!optimize 2

import Coins from "./Coins";
import CoinsPerMin from "./CoinsPerMin";
import LeftPanelButtons from "./buttons";
import React from "@rbxts/react";
import { getScreenSize } from "client/app/modules/screen";

export default function LeftFrame({ children }: React.PropsWithChildren): React.Element {
	const screenSize = getScreenSize();

	return (
		<frame
			AnchorPoint={new Vector2(0, 0.5)}
			BackgroundTransparency={1}
			Position={new UDim2(0, 0, 0.5, 0)}
			Size={new UDim2(screenSize.width < 1000 ? 0.2 : 0.3, 0, 0.7, 0)}
			key="LeftFrame"
		>
			<uiaspectratioconstraint AspectRatio={0.5} />
			<uilistlayout
				HorizontalAlignment={Enum.HorizontalAlignment.Center}
				Padding={new UDim(0, 20)}
				SortOrder={Enum.SortOrder.LayoutOrder}
				VerticalAlignment={Enum.VerticalAlignment.Center}
				Wraps={true}
			/>
			<LeftPanelButtons />
			<CoinsPerMin />
			<Coins />
		</frame>
	);
}
