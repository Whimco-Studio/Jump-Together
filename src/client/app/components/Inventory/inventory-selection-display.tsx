//!optimize 2

import PaintbrushIcon from "../Slots/paintbrush-icon";
import AnimatedImageButton from "../base/animated-image-button";
import { useMotion } from "@rbxts/pretty-react-hooks";
import React, { useEffect } from "@rbxts/react";
import { useRootProducer, useRootSelector } from "client/app/hooks";
import { Images } from "client/app/images";
import QuirkymalIcons from "client/app/images/quirkymal-icons";
import { FredokaOne } from "client/app/modules/fonts";
import { Events } from "client/network";
import { getCurrentTab } from "client/store/slices/Interface";
import { getInventoryDisplayItem } from "client/store/slices/inventory";

const STATE_POSITIONS = {
	DEFAULT: new UDim2(0.5, 0, 0.5, 0),
	QUIRKYMAL_INACTIVE: new UDim2(-4, 0, 0.5, 0),
	SKINS_INACTIVE: new UDim2(4, 0, 0.5, 0),
};

const SPRING_SETTINGS = {
	friction: 15,
	tension: 500,
};

const BUTTON_SIZE = new UDim2(1, 0, 1, 0);

const TRANSITION_SPEED = 25;

const DISPLAY_SLOT_STATES = {
	DEFAULT: new UDim2(0.5, 0, 0.5, 0),
	INACTIVE: new UDim2(0.5, 0, 2.5, 0),
	INACTIVE_BANNER: new UDim2(-2, 0, 0.5, 0),
	INACTIVE_TO_DEFAULT: new UDim2(-1.5, 0, 0.5, 0),
};

export interface InventorySelectionDisplayProperties extends React.PropsWithChildren {
	Transparency: React.Binding<number>;
}

export default function InventorySelectionDisplay({
	Transparency,
	children,
}: InventorySelectionDisplayProperties): React.Element {
	const producer = useRootProducer();

	const displayItem = useRootSelector(getInventoryDisplayItem);

	const IconInfo = QuirkymalIcons[displayItem.quirkymal as keyof typeof QuirkymalIcons];

	const CurrentTab = useRootSelector(getCurrentTab);

	const [displaySlotPosition, displaySlotPositionMotion] = useMotion(STATE_POSITIONS.DEFAULT);
	const [displayBannerPosition, displayBannerPositionMotion] = useMotion(STATE_POSITIONS.DEFAULT);
	const [displaySlotRotation, displaySlotRotationMotion] = useMotion(0);

	useEffect(() => {
		const disconnection = displaySlotPositionMotion.onComplete(() => {
			const tab = getCurrentTab(producer.getState());
			if (tab !== "Skins" && tab !== "Quirkymals") {
				displaySlotPositionMotion.immediate(DISPLAY_SLOT_STATES.INACTIVE_TO_DEFAULT);
				displayBannerPositionMotion.immediate(DISPLAY_SLOT_STATES.INACTIVE_TO_DEFAULT);
				displaySlotRotationMotion.immediate(-45);
			}
			disconnection();
		});
	}, [CurrentTab]);

	return (
		<frame
			BackgroundTransparency={1}
			Position={new UDim2(1.015, 0, 0, 0)}
			Size={new UDim2(0.4, 0, 1, 0)}
			key={"ItemDisplay"}
		>
			<frame
				BackgroundTransparency={1}
				Position={new UDim2(-0.002, 0, 0, 0)}
				Size={new UDim2(1, 0, 0.727, 0)}
				key={"ItemDisplay"}
			>
				<uiaspectratioconstraint AspectRatio={0.744} />
				<imagelabel
					AnchorPoint={new Vector2(0.5, 0.5)}
					BackgroundTransparency={1}
					Image={Images.Inventory.DisplayContainers[displayItem.rarity]}
					ImageTransparency={Transparency ?? 0}
					Position={displaySlotPosition}
					Rotation={displaySlotRotation}
					Size={new UDim2(1, 0, 1, 0)}
					key={"ItemDisplay"}
				>
					<uiaspectratioconstraint AspectRatio={0.744} />
					<textlabel
						BackgroundTransparency={1}
						Font={Enum.Font.FredokaOne}
						FontFace={FredokaOne}
						Position={new UDim2(0.099, 0, 0.081, 0)}
						Size={new UDim2(0.805, 0, 0.127, 0)}
						Text={displayItem.quirkymal}
						TextColor3={Color3.fromRGB(255, 255, 255)}
						TextScaled={true}
						TextSize={50}
						TextTransparency={Transparency ?? 0}
						TextWrapped={true}
						key={"Title"}
					/>
					{/* <textlabel
						BackgroundTransparency={1}
						Font={Enum.Font.FredokaOne}
						FontFace={FredokaOne}
						Position={new UDim2(0.338, 0, 0.79, 0)}
						Size={new UDim2(0.567, 0, 0.127, 0)}
						Text={`$${shopItemPrice}`}
						TextColor3={Color3.fromRGB(255, 255, 255)}
						TextScaled={true}
						TextSize={50}
						TextTransparency={Transparency ?? 0}
						TextWrapped={true}
						key={"Price"}
					/> */}
					<frame
						BackgroundTransparency={1}
						Position={new UDim2(0.097, 0, 0.325, 0)}
						Size={new UDim2(0.806, 0, 0.476, 0)}
						key="Container"
					>
						<uiaspectratioconstraint AspectRatio={1.261} />
						{CurrentTab === "Skins" ? (
							<PaintbrushIcon Quirkymal={displayItem.quirkymal} Transparency={Transparency} />
						) : (
							<imagelabel
								AnchorPoint={new Vector2(0.5, 0.5)}
								BackgroundTransparency={1}
								Image={IconInfo ? `rbxassetid://${IconInfo.WhiteOutline}` : undefined}
								ImageColor3={Color3.fromRGB(255, 255, 255)}
								ImageTransparency={Transparency ?? 0}
								Position={new UDim2(0.5, 0, 0.5, 0)}
								Size={UDim2.fromScale(1, 1)}
								key={"Container"}
							>
								<uiaspectratioconstraint
									AspectRatio={IconInfo ? IconInfo.WhiteOutlineAspectRatio : 1}
								/>
							</imagelabel>
						)}
					</frame>
				</imagelabel>
			</frame>
			<uilistlayout
				FillDirection={Enum.FillDirection.Horizontal}
				Padding={new UDim(0.0182, 0)}
				SortOrder={Enum.SortOrder.LayoutOrder}
				Wraps={true}
			/>
			<frame BackgroundTransparency={1} Size={new UDim2(1.007, 0, 0.107, 0)} key={"BannerContainer"}>
				<imagelabel
					AnchorPoint={new Vector2(0.5, 0.5)}
					BackgroundTransparency={1}
					Image={Images.Shop.Banners[displayItem.rarity]}
					ImageTransparency={Transparency ?? 0}
					LayoutOrder={1}
					Position={displayBannerPosition}
					Rotation={displaySlotRotation}
					Size={new UDim2(1, 0, 1, 0)}
					ZIndex={2}
					key={"Banner"}
				/>
				<imagelabel
					BackgroundTransparency={1}
					Image={Images.Shop.Banners.Legendary}
					LayoutOrder={1}
					Size={new UDim2(1, 0, 1, 0)}
					Visible={false}
					key={"LegendaryBanner"}
				/>
				<imagelabel
					BackgroundTransparency={1}
					Image="rbxassetid://106738452436406"
					LayoutOrder={1}
					Size={new UDim2(1, 0, 1, 0)}
					Visible={false}
					key={"CommonBanner"}
				/>
				<imagelabel
					BackgroundTransparency={1}
					Image="rbxassetid://96084820245398"
					LayoutOrder={1}
					Size={new UDim2(1, 0, 1, 0)}
					Visible={false}
					key={"UncommonBanner"}
				/>
				<imagelabel
					BackgroundTransparency={1}
					Image="rbxassetid://87007499391905"
					LayoutOrder={1}
					Size={new UDim2(1, 0, 1, 0)}
					Visible={false}
					key={"RareBanner"}
				/>
				<uiaspectratioconstraint AspectRatio={5.086} />
			</frame>
			<frame
				BackgroundTransparency={1}
				Position={new UDim2(0, 0, 0.877, 0)}
				Size={new UDim2(0.996, 0, 0.131, 0)}
				key={"EquipButtonContainer"}
			>
				<AnimatedImageButton
					AnchorPoint={new Vector2(0.5, 0.5)}
					BackgroundTransparency={1}
					Event={{
						MouseButton1Click: () => {
							print(CurrentTab, displayItem.quirkymal);
							if (CurrentTab === "Quirkymals") {
								Events.EquipQuirkymal.fire(displayItem.quirkymal);
							} else if (CurrentTab === "Skins") {
								print("EquipSkin", displayItem.quirkymal);
								Events.EquipSkin.fire(displayItem.quirkymal);
							}
						},
					}}
					Image={Images.Inventory.EquipButton}
					ImageTransparency={Transparency ?? 0}
					LayoutOrder={1}
					Position={displayBannerPosition}
					Size={new UDim2(1, 0, 1, 0)}
					key={"EquipButton"}
				/>
				<uiaspectratioconstraint AspectRatio={4.11} />
			</frame>
		</frame>
	);
}
