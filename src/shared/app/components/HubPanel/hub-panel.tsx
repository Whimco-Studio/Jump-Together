//!optimize 2

import HubPanelButton from "./hub-panel-button";
import React from "@rbxts/react";
import { useRootProducer } from "shared/app/hooks";

const BUTTONS = ["Map", "Quirkymals", "Inventory", "Quests"];

export default function HubPanel({ children }: React.PropsWithChildren): React.Element {
	const producer = useRootProducer();
	return (
		<imagelabel
			AnchorPoint={new Vector2(0.5, 1)}
			BackgroundTransparency={1}
			Image="rbxassetid://15409735005"
			Position={new UDim2(0.5, 0, 0.99, 0)}
			Size={new UDim2(0.20600000000000002, 0, 0.131, 0)}
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
