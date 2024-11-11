//!optimize 2

import HubPanelButton from "./hub-panel-button";
import { useMotion } from "@rbxts/pretty-react-hooks";
import React, { useEffect } from "@rbxts/react";
import { Animation } from "client/app/animation";
import { useRootProducer, useRootSelector } from "client/app/hooks";

const BUTTONS = ["Map", "Quirkymals", "Inventory", "Quests"];

const SPRING_SETTINGS = Animation.BUTTON_SPRING_SETTINGS;

const BUTTON_STATE_SIZES = {
	DEFAULT: UDim2.fromScale(0.2, 0.131),
	HIDDEN: UDim2.fromScale(0.2, 0),
};

export default function HubPanel({ children }: React.PropsWithChildren): React.Element {
	const [size, sizeMotion] = useMotion(BUTTON_STATE_SIZES.DEFAULT);

	const producer = useRootProducer();
	const currentPage = useRootSelector((state) => state.interface.Page); // Add this line

	useEffect(() => {
		if (currentPage === "Home") {
			sizeMotion.spring(BUTTON_STATE_SIZES.DEFAULT, SPRING_SETTINGS);
		} else {
			sizeMotion.spring(BUTTON_STATE_SIZES.HIDDEN, SPRING_SETTINGS);
		}
	}, [currentPage]);
	return (
		<imagelabel
			AnchorPoint={new Vector2(0.5, 1)}
			BackgroundTransparency={1}
			Image="rbxassetid://15409735005"
			Position={new UDim2(0.5, 0, 0.99, 0)}
			Size={size}
			key="ButtonsPanel"
		>
			<uiaspectratioconstraint AspectRatio={3} />
			<uicorner />
			<frame
				AnchorPoint={new Vector2(0.5, 0.5)}
				BackgroundTransparency={1}
				Position={new UDim2(0.5, 0, 0.45, 0)}
				Size={new UDim2(1, 0, 1, 0)}
				key="Buttons"
			>
				<uilistlayout
					FillDirection={Enum.FillDirection.Horizontal}
					HorizontalAlignment={Enum.HorizontalAlignment.Center}
					Padding={new UDim(0.05, 0)}
					SortOrder={Enum.SortOrder.LayoutOrder}
					VerticalAlignment={Enum.VerticalAlignment.Center}
				>
					<uiaspectratioconstraint />
				</uilistlayout>
				{BUTTONS.map((button, index) => (
					<HubPanelButton
						icon={button}
						key={button}
						layoutOrder={index + 1}
						onClick={() => {
							producer.setPage(button);
						}}
					/>
				))}
			</frame>
		</imagelabel>
	);
}
