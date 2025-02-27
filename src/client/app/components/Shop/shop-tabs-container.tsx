//!optimize 2

import AnimatedImageButton from "../base/animated-image-button";
import { Object } from "@rbxts/luau-polyfill";
import React from "@rbxts/react";
import { useRootProducer } from "client/app/hooks";
import { Images } from "client/app/images";

const Icons: ShopTab[] = ["Quirkymals", "Skins", "Coins"];

export interface ShopTabsContainerProperties extends React.PropsWithChildren {
	Transparency: React.Binding<number>;
}

export default function ShopTabsContainer({ Transparency, children }: ShopTabsContainerProperties): React.Element {
	const producer = useRootProducer();
	return (
		<frame
			BackgroundTransparency={1}
			Position={new UDim2(0.885, 0, 0.029, 0)}
			Size={new UDim2(0.089, 0, 0.952, 0)}
			key={"TabContainer"}
		>
			<uilistlayout Padding={new UDim(0, 15)} SortOrder={Enum.SortOrder.LayoutOrder} />
			<frame
				BackgroundTransparency={1}
				Position={new UDim2(0.888, 0, 0.029, 0)}
				Size={new UDim2(1, 0, 0.834, 0)}
				key={"Tabs"}
			>
				<uilistlayout Padding={new UDim(0, 15)} SortOrder={Enum.SortOrder.LayoutOrder} />
				<uiflexitem FlexMode={Enum.UIFlexMode.Fill} />
				{Object.values(Icons).map((tab, index) => {
					const iconInfo = Images.Shop.Tabs[tab];

					return (
						<frame
							BackgroundTransparency={1}
							LayoutOrder={index}
							Size={new UDim2(1, 0, 0.156, 0)}
							key={tab}
						>
							<uiaspectratioconstraint AspectRatio={iconInfo.AspectRatio} />
							<AnimatedImageButton
								AnchorPoint={new Vector2(0.5, 0.5)}
								BackgroundTransparency={1}
								Event={{
									MouseButton1Click: () => {
										producer.setTab(tab as "Accessories" | "Gamepasses" | "Quirkymals" | "Skins");
									},
								}}
								Image={iconInfo.Icon}
								ImageTransparency={Transparency ?? 0}
								LayoutOrder={2}
								Position={new UDim2(0.5, 0, 0.5, 0)}
								Size={new UDim2(1, 0, 1, 0)}
								key={tab}
							/>
						</frame>
					);
				})}
			</frame>
			<frame
				AnchorPoint={new Vector2(0.5, 0)}
				BackgroundTransparency={1}
				LayoutOrder={1}
				Size={new UDim2(1, 0, 0.137, 0)}
				key={"Close"}
			>
				<uiaspectratioconstraint AspectRatio={0.919} />
				<uiflexitem ItemLineAlignment={Enum.ItemLineAlignment.End} />

				<AnimatedImageButton
					AnchorPoint={new Vector2(0.5, 0.5)}
					BackgroundTransparency={1}
					Event={{
						MouseButton1Click: () => {
							if (Transparency?.getValue() === 0) {
								producer.setPage("Home");
							}
						},
					}}
					Image="rbxassetid://112279239843417"
					ImageTransparency={Transparency ?? 0}
					LayoutOrder={1}
					Position={new UDim2(0.5, 0, 0.5, 0)}
					Size={new UDim2(1, 0, 1, 0)}
					key={"Close"}
				/>
			</frame>
		</frame>
	);
}
