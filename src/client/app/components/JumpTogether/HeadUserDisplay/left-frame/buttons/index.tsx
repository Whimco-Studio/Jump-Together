//!optimize 2

import ButtonTemplate from "./button-template";
import React from "@rbxts/react";
import { useRootSelector } from "client/app/hooks";
import { clientProducer } from "client/store";

export default function LeftPanelButtons({ children }: React.PropsWithChildren): React.Element {
	const currentPage = useRootSelector((state) => state.interface.Page);
	return (
		<frame
			AnchorPoint={new Vector2(0, 0.5)}
			BackgroundTransparency={1}
			LayoutOrder={10}
			Position={new UDim2(0.01, 0, 0.5, 0)}
			Size={new UDim2(0.8, 0, 0.404, 0)}
			key="Buttons"
		>
			<uiaspectratioconstraint AspectRatio={1.129} />

			<uilistlayout
				FillDirection={Enum.FillDirection.Horizontal}
				HorizontalAlignment={Enum.HorizontalAlignment.Center}
				Padding={new UDim(0.05, 0)}
				SortOrder={Enum.SortOrder.LayoutOrder}
				VerticalAlignment={Enum.VerticalAlignment.Center}
				Wraps={true}
			/>

			{["Shop", "Inventory", "Gamepasses", "Checkpoints"].map((title, index) => (
				<ButtonTemplate
					index={index}
					key={title}
					onClick={() => {
						if (currentPage === title) {
							clientProducer.setPage("Home");
						} else {
							clientProducer.setPage(title);
						}
					}}
					title={title}
				/>
			))}
		</frame>
	);
}
