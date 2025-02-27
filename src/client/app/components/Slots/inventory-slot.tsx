//!optimize 2

import AnimatedImageButton from "../base/animated-image-button";
import PaintbrushIcon from "./paintbrush-icon";
import { useMotion } from "@rbxts/pretty-react-hooks";
import React, { useEffect, useState } from "@rbxts/react";
import { useRootProducer, useRootSelector } from "client/app/hooks";
import { Images } from "client/app/images";
import QuirkymalIcons from "client/app/images/quirkymal-icons";
import UIStroke from "client/app/modules/scale-ui-stroke";
import { Theme } from "client/app/theme";
import { getCurrentTab } from "client/store/slices/Interface";
import { Quirkymal, Skin } from "shared/configs/quirkymals";
import { PlayerQuirkymals, PlayerSkins } from "shared/store/players/players-slice/types";

type IconInfo = {
	BlackOutline: number;
	BlackOutlineAspectRatio: number;
	NoOutline: number;
	NoOutlineAspectRatio: number;
	OutlineOnly: number;
	OutlineOnlyAspectRatio: number;
	WhiteOutline: number;
	WhiteOutlineAspectRatio: number;
};

const STATE_POSITIONS = {
	DEFAULT: new UDim2(0.5, 0, 0.5, 0),
	QUIRKYMAL_INACTIVE: new UDim2(-4, 0, 0.5, 0),
	SKINS_INACTIVE: new UDim2(4, 0, 0.5, 0),
};

const SPRING_SETTINGS = {
	friction: 15,
	tension: 500,
};

const TWEEN_SETTINGS: {
	readonly delayTime?: number;
	readonly direction?: Enum.EasingDirection;
	readonly repeatCount?: number;
	readonly reverses?: boolean;
	readonly style?: Enum.EasingStyle;
	readonly time?: number;
} = {
	direction: Enum.EasingDirection.Out,
	// style: Enum.EasingStyle.Elastic,
	// time: 2,
	// ...TWEEN_SETTINGS,
	style: Enum.EasingStyle.Back,
	time: 0.5,
};

const BUTTON_SIZE = new UDim2(1, 0, 1, 0);

const TRANSITION_SPEED = 25;
const TRANSITION_DILATION = 0.025;
const DELAY_BOUNDS = {
	MAX: 10,
	MIN: 1,
};

export interface InventorySlotProperties extends React.PropsWithChildren {
	IsActive?: boolean;
	IsSkin?: boolean;
	LayoutOrder?: number;
	Price: number;
	Quirkymal: keyof typeof QuirkymalIcons;
	Rarity: keyof typeof Images.Inventory.Slots;
	Title?: keyof typeof QuirkymalIcons;
	Transparency?: React.Binding<number>;
	onClick?: () => void;
	playerInventory?: {
		quirkymals: PlayerQuirkymals;
		skins: PlayerSkins;
	};

	size?: UDim2;
}

export default function InventorySlot(properties: InventorySlotProperties): React.Element {
	const IconInfo = QuirkymalIcons[properties.Quirkymal] as IconInfo;
	const tab = useRootSelector(getCurrentTab);

	const producer = useRootProducer();

	const [quirkymalIconPosition, quirkymalIconPositionMotion] = useMotion(STATE_POSITIONS.DEFAULT);
	const [skinsIconPosition, skinsIconPositionMotion] = useMotion(STATE_POSITIONS.SKINS_INACTIVE);

	const [showSlot, setShowSlot] = useState(false);

	const [unlocked, setUnlocked] = useState<boolean>(false);

	useEffect(() => {
		if (!properties.playerInventory) return;
		if (tab === "Skins") {
			setUnlocked(properties.playerInventory.skins[properties.Quirkymal as Skin] ?? false);
		} else if (tab === "Quirkymals") {
			setUnlocked(properties.playerInventory.quirkymals[properties.Quirkymal as Quirkymal] ?? false);
		}
	}, [properties.playerInventory, tab]);

	useEffect(() => {
		if (tab === "Skins") {
			quirkymalIconPositionMotion.tween(STATE_POSITIONS.QUIRKYMAL_INACTIVE, TWEEN_SETTINGS);
			skinsIconPositionMotion.tween(STATE_POSITIONS.DEFAULT, {
				...TWEEN_SETTINGS,
				delayTime: math.random(DELAY_BOUNDS.MIN, DELAY_BOUNDS.MAX) * TRANSITION_DILATION,
			});
		} else if (tab === "Quirkymals") {
			quirkymalIconPositionMotion.tween(STATE_POSITIONS.DEFAULT, {
				...TWEEN_SETTINGS,
				delayTime: math.random(DELAY_BOUNDS.MIN, DELAY_BOUNDS.MAX) * TRANSITION_DILATION,
			});
			skinsIconPositionMotion.tween(STATE_POSITIONS.SKINS_INACTIVE, TWEEN_SETTINGS);
		} else {
			quirkymalIconPositionMotion.tween(STATE_POSITIONS.QUIRKYMAL_INACTIVE, TWEEN_SETTINGS);
			skinsIconPositionMotion.tween(STATE_POSITIONS.SKINS_INACTIVE, TWEEN_SETTINGS);
		}
	}, [tab]);

	useEffect(() => {
		if (tab !== "Skins" && tab !== "Quirkymals") {
			const disconnection = skinsIconPositionMotion.onComplete(() => {
				const currentTab = getCurrentTab(producer.getState());
				if (currentTab !== "Skins" && currentTab !== "Quirkymals") {
					setShowSlot(false);
				}
				disconnection();
			});
		} else {
			setShowSlot(true);
		}
	}, []);

	return (
		<frame
			BackgroundTransparency={1}
			LayoutOrder={properties.LayoutOrder ?? 1}
			Position={new UDim2(0.346, 0, 0, 0)}
			Size={properties.size ?? new UDim2(0.307, 0, 0.484, 0)}
			Visible={unlocked}
			key={properties.Quirkymal}
		>
			<uiaspectratioconstraint AspectRatio={0.744} />

			<AnimatedImageButton
				AnchorPoint={new Vector2(0.5, 0.5)}
				BackgroundTransparency={1}
				Event={{
					MouseButton1Click: () => {
						properties.onClick?.();
					},
				}}
				Image={Images.Inventory.Slots[properties.Rarity]}
				ImageTransparency={properties.Transparency ?? 0}
				LayoutOrder={properties.LayoutOrder ?? 1}
				Position={quirkymalIconPosition}
				Size={BUTTON_SIZE}
				Visible={showSlot}
				key={properties.Quirkymal}
			>
				<textlabel
					AnchorPoint={new Vector2(0.5, 0)}
					BackgroundTransparency={1}
					Font={Enum.Font.FredokaOne}
					FontFace={Theme.FontFaces.FredokaOne}
					Position={new UDim2(0.5, 0, 0.775, 0)}
					Size={new UDim2(0.567, 0, 0.127, 0)}
					Text={`${properties.Rarity}`}
					TextColor3={Color3.fromRGB(255, 255, 255)}
					TextScaled={true}
					TextSize={30}
					TextTransparency={properties.Transparency ?? 0}
					TextWrapped={true}
					key="Price"
				/>
				{/* RICHTTEXT STROKE CANT BE ANIMATED? */}
				{/* <textlabel
					BackgroundTransparency={1}
					Font={Enum.Font.FredokaOne}
					FontFace={Theme.FontFaces.FredokaOne}
					Position={new UDim2(0.099, 0, 0.081, 0)}
					RichText={true}
					Size={new UDim2(0.805, 0, 0.127, 0)}
					// Text={properties.Title ?? properties.Quirkymal}
					Text={`<stroke color="#${Theme.Colors.RarityStrokes[properties.Rarity].ToHex()}" joins="round" thickness="${UIStroke(2)}" transparency="${properties.Transparency ? 1 : 0}">${properties.Title ?? properties.Quirkymal}</stroke>`}
					TextColor3={Color3.fromRGB(255, 255, 255)}
					TextScaled={true}
					TextSize={30}
					TextTransparency={properties.Transparency ?? 0}
					TextWrapped={true}
					key="Title"
				/> */}

				<textlabel
					BackgroundTransparency={1}
					Font={Enum.Font.FredokaOne}
					FontFace={Theme.FontFaces.FredokaOne}
					Position={new UDim2(0.099, 0, 0.081, 0)}
					Size={new UDim2(0.805, 0, 0.127, 0)}
					Text={properties.Title ?? properties.Quirkymal}
					TextColor3={Color3.fromRGB(255, 255, 255)}
					TextScaled={true}
					TextSize={30}
					TextTransparency={properties.Transparency ?? 0}
					TextWrapped={true}
					key="Title"
				>
					<uistroke
						Color={Theme.Colors.RarityStrokes[properties.Rarity]}
						LineJoinMode={Enum.LineJoinMode.Bevel}
						Thickness={UIStroke(5)}
						Transparency={properties.Transparency ?? 0}
					/>
				</textlabel>

				<frame
					BackgroundTransparency={1}
					Position={new UDim2(0.097, 0, 0.225, 0)}
					Size={new UDim2(0.806, 0, 0.476, 0)}
					key="Container"
				>
					<uiaspectratioconstraint AspectRatio={1.261} />
					<imagelabel
						AnchorPoint={new Vector2(0.5, 0.5)}
						BackgroundTransparency={1}
						Image={`rbxassetid://${IconInfo.WhiteOutline}`}
						ImageColor3={Color3.fromRGB(255, 255, 255)}
						ImageTransparency={properties.Transparency ?? 0}
						Position={new UDim2(0.5, 0, 0.5, 0)}
						Size={UDim2.fromScale(1, 1)}
						key={"Container"}
					>
						<uiaspectratioconstraint AspectRatio={IconInfo.WhiteOutlineAspectRatio} />
					</imagelabel>
				</frame>
			</AnimatedImageButton>

			<AnimatedImageButton
				AnchorPoint={new Vector2(0.5, 0.5)}
				BackgroundTransparency={1}
				Event={{
					MouseButton1Click: () => {
						properties.onClick?.();
					},
				}}
				Image={Images.Inventory.Slots[properties.Rarity]}
				ImageTransparency={properties.Transparency ?? 0}
				LayoutOrder={properties.LayoutOrder ?? 1}
				Position={skinsIconPosition}
				Size={BUTTON_SIZE}
				Visible={showSlot}
				key={properties.Quirkymal}
			>
				<textlabel
					AnchorPoint={new Vector2(0.5, 0)}
					BackgroundTransparency={1}
					Font={Enum.Font.FredokaOne}
					FontFace={Theme.FontFaces.FredokaOne}
					Position={new UDim2(0.5, 0, 0.775, 0)}
					Size={new UDim2(0.567, 0, 0.127, 0)}
					Text={`${properties.Rarity}`}
					TextColor3={Color3.fromRGB(255, 255, 255)}
					TextScaled={true}
					TextSize={30}
					TextTransparency={properties.Transparency ?? 0}
					TextWrapped={true}
					key="Price"
				/>
				<textlabel
					BackgroundTransparency={1}
					Font={Enum.Font.FredokaOne}
					FontFace={Theme.FontFaces.FredokaOne}
					Position={new UDim2(0.099, 0, 0.081, 0)}
					Size={new UDim2(0.805, 0, 0.127, 0)}
					Text={properties.Title ?? properties.Quirkymal}
					TextColor3={Color3.fromRGB(255, 255, 255)}
					TextScaled={true}
					TextSize={30}
					TextTransparency={properties.Transparency ?? 0}
					TextWrapped={true}
					key="Title"
				>
					<uistroke
						Color={Theme.Colors.RarityStrokes[properties.Rarity]}
						LineJoinMode={Enum.LineJoinMode.Bevel}
						Thickness={UIStroke(5)}
						Transparency={properties.Transparency ?? 0}
					/>
				</textlabel>
				<frame
					BackgroundTransparency={1}
					Position={new UDim2(0.097, 0, 0.225, 0)}
					Size={new UDim2(0.806, 0, 0.476, 0)}
					key="Container"
				>
					<uiaspectratioconstraint AspectRatio={1.261} />
					<PaintbrushIcon Quirkymal={properties.Quirkymal} Transparency={properties.Transparency} />
				</frame>
			</AnimatedImageButton>
		</frame>
	);
}
