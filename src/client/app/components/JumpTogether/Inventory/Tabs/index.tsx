//!optimize 2

import InventoryTabButton from "./inventory-tab-button";
import React from "@rbxts/react";
import { useRootProducer } from "client/app/hooks";

export default function InventoryTabs({ children }: React.PropsWithChildren): React.Element {
	const producer = useRootProducer();

	return (
		<imagelabel
			AnchorPoint={new Vector2(0.5, 0)}
			BackgroundColor3={Color3.fromRGB(255, 255, 255)}
			BackgroundTransparency={1}
			BorderColor3={Color3.fromRGB(0, 0, 0)}
			BorderSizePixel={0}
			Image="rbxassetid://136807646127981"
			Position={new UDim2(0.5, 0, 0.186, 0)}
			Size={new UDim2(0.944, 0, 0.119, 0)}
			key="TabsBackground"
		>
			<uiaspectratioconstraint AspectRatio={10.27} />
			<frame
				AnchorPoint={new Vector2(0.5, 0.5)}
				BackgroundColor3={Color3.fromRGB(255, 255, 255)}
				BackgroundTransparency={1}
				BorderColor3={Color3.fromRGB(0, 0, 0)}
				BorderSizePixel={0}
				Position={new UDim2(0.5, 0, 0.5, 0)}
				Size={new UDim2(0.975, 0, 0.8, 0)}
				key="TabsContainer"
			>
				<uilistlayout
					FillDirection={Enum.FillDirection.Horizontal}
					Padding={new UDim(0.0175, 0)}
					SortOrder={Enum.SortOrder.LayoutOrder}
					VerticalAlignment={Enum.VerticalAlignment.Center}
					key="UIListLayout"
				/>

				{["Quirkymals", "Skins", "Effects", "Coming Soon"].map((tab, index) => (
					<InventoryTabButton
						active={index !== 3}
						index={index}
						key={tab}
						label={tab}
						onClick={() => {
							producer.setTab(tab);
						}}
					/>
				))}
			</frame>
		</imagelabel>
	);
}
