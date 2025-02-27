//!optimize 2

import ShopSlot from "../Slots/shop-slot";
import ShopSelectionDisplay from "./shop-selection-display";
import ShopTabsContainer from "./shop-tabs-container";
import { Object } from "@rbxts/luau-polyfill";
import { useMotion } from "@rbxts/pretty-react-hooks";
import React, { useEffect, useState } from "@rbxts/react";
import { Players } from "@rbxts/services";
import { useRootProducer, useRootSelector } from "client/app/hooks";
import QuirkymalIcons from "client/app/images/quirkymal-icons";
import { PriceToRarity } from "client/modules/shop-utilities";
import { clientProducer } from "client/store";
import { getCurrentPage, getCurrentTab } from "client/store/slices/Interface";
import { QuirkymalTuning } from "shared/modules/tuning/quirkymals-tuning";
import { selectPlayerInventory } from "shared/store/players/players-selector";
export interface IndexProperties extends React.PropsWithChildren {}

const DEFAULT_SIZE = new UDim2(0.65, 0, 0.65, 0);

const SHOP_STATE_POSITIONS = {
	ACTIVE: new UDim2(0.65, 0, 0.5, 0),
	DEFAULT: new UDim2(0.65, 0, 0.7, 0),
};

const TWEEN_SETTINGS: {
	readonly delayTime?: number;
	readonly direction?: Enum.EasingDirection;
	readonly repeatCount?: number;
	readonly reverses?: boolean;
	readonly style?: Enum.EasingStyle;
	readonly time?: number;
} = {
	direction: Enum.EasingDirection.InOut,
	style: Enum.EasingStyle.Elastic,
	time: 2,
};

const TRANSITION_TIME = 0.5;

export default function Shop(properties: IndexProperties): React.Element {
	const producer = useRootProducer();
	const currentPage = useRootSelector(getCurrentPage);

	const CurrentTab = useRootSelector(getCurrentTab);

	const [position, positionMotion] = useMotion(SHOP_STATE_POSITIONS.DEFAULT);
	const [isActive, setIsActive] = useState(false);
	const [transparency, transparencyMotion] = useMotion(1);
	const [visible, setVisible] = useState(currentPage === "Shop");

	const playerInventory = useRootSelector(selectPlayerInventory(tostring(Players.LocalPlayer.UserId)));

	useEffect(() => {
		const disconnection = positionMotion.onComplete(() => {
			const page = getCurrentPage(clientProducer.getState());
			if (page === "Shop") {
				setIsActive(true);
			} else {
				setIsActive(false);
			}
			disconnection();
		});
	}, []);

	useEffect(() => {
		if (currentPage === "Shop") {
			setVisible(true);
			positionMotion.tween(SHOP_STATE_POSITIONS.ACTIVE, {
				...TWEEN_SETTINGS,
				style: Enum.EasingStyle.Back,
				time: TRANSITION_TIME,
			});
			transparencyMotion.tween(0, {
				...TWEEN_SETTINGS,
				style: Enum.EasingStyle.Linear,
				time: TRANSITION_TIME,
			});

			print("Test");
		} else {
			positionMotion.tween(SHOP_STATE_POSITIONS.DEFAULT, {
				...TWEEN_SETTINGS,
				style: Enum.EasingStyle.Back,
				time: TRANSITION_TIME,
			});
			transparencyMotion.tween(1, {
				...TWEEN_SETTINGS,
				style: Enum.EasingStyle.Linear,
				time: TRANSITION_TIME,
			});
		}
	}, [currentPage]);

	useEffect(() => {
		const disconnection = transparencyMotion.onComplete(() => {
			if (math.floor(transparency.getValue() + 0.5) === 0) {
				setVisible(true);
			} else {
				setVisible(false);
			}
			disconnection();
		});
	}, [currentPage]);

	return (
		<frame
			AnchorPoint={new Vector2(0.5, 0.5)}
			BackgroundTransparency={1}
			Position={position}
			Size={DEFAULT_SIZE}
			Visible={visible}
			key={"Shop"}
		>
			<imagelabel
				BackgroundTransparency={1}
				Image="rbxassetid://117418996500581"
				ImageTransparency={transparency}
				Position={new UDim2(-0.005, 0, 0, 0)}
				Size={new UDim2(1, 0, 1, 0)}
				ZIndex={-2}
				key={"Background"}
			/>
			<uiaspectratioconstraint AspectRatio={1.352} />
			<ShopTabsContainer Transparency={transparency} />
			<scrollingframe
				Active={true}
				AutomaticCanvasSize={Enum.AutomaticSize.Y}
				BackgroundTransparency={1}
				CanvasSize={new UDim2(0, 0, 0, 0)}
				Position={new UDim2(0.015, 0, 0.028, 0)}
				ScrollBarThickness={0}
				Size={new UDim2(0.827, 0, 0.952, 0)}
				key={"ItemsContainer"}
			>
				<uilistlayout
					FillDirection={Enum.FillDirection.Horizontal}
					HorizontalAlignment={Enum.HorizontalAlignment.Center}
					Padding={new UDim(0, 10)}
					SortOrder={Enum.SortOrder.LayoutOrder}
					Wraps={true}
				/>
				{/* <uiaspectratioconstraint AspectRatio={1.174} /> */}
				{Object.entries(QuirkymalIcons).map(([key, value]) => {
					const rarities = ["Common", "Uncommon", "Rare", "Legendary"];
					const price = QuirkymalTuning[key].Conditions[0]!.RequiredAmount as number;
					const rarity = PriceToRarity(price);

					return (
						<ShopSlot
							IsActive={isActive}
							IsSkin={CurrentTab === "Skins"}
							LayoutOrder={price}
							Price={price}
							Quirkymal={key}
							Rarity={rarity}
							Title={key}
							Transparency={transparency}
							key={key}
							onClick={() => {
								producer.setShopDisplayItem({
									price: price,
									quirkymal: key,
									rarity: rarity,
								});
							}}
							playerInventory={playerInventory}
						/>
					);
				})}
			</scrollingframe>
			<ShopSelectionDisplay Transparency={transparency} />
		</frame>
	);
}
