//!optimize 2

import Button from "./button";
import React from "@rbxts/react";
import { useRootSelector } from "client/app/hooks";
import { Images } from "client/app/images";
import { getIsMobile } from "client/store/slices/Interface";

const TabsOrder = ["Shop", "Inventory", "Rewards", "Checkpoints"];

export default function ButtonsContainer({ children }: React.PropsWithChildren): React.Element {
	const isMobile = useRootSelector(getIsMobile);

	return (
		<frame
			AnchorPoint={new Vector2(0, 0.5)}
			BackgroundTransparency={1}
			Position={new UDim2(0, 0, 0.5, 0)}
			Size={new UDim2(0, 190, 0, 190)}
			Visible={!isMobile}
			key="Buttons"
		>
			{TabsOrder.map((tab) => (
				<Button Title={tab as keyof typeof Images.HeadUserDisplay.Tabs} key={tab} />
			))}
			<uilistlayout
				FillDirection={Enum.FillDirection.Horizontal}
				HorizontalAlignment={Enum.HorizontalAlignment.Center}
				Padding={new UDim(0, 25)}
				SortOrder={Enum.SortOrder.LayoutOrder}
				VerticalAlignment={Enum.VerticalAlignment.Center}
				Wraps={true}
			/>
		</frame>
	);
}
