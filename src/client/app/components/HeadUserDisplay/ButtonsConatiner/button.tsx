//!optimize 2

import { useMotion } from "@rbxts/pretty-react-hooks";
import React from "@rbxts/react";
import { useRootProducer } from "client/app/hooks";
import { Images } from "client/app/images";
import { FredokaOne } from "client/app/modules/fonts";
import { getCurrentPage } from "client/store/slices/Interface";

export interface ButtonProperties extends React.PropsWithChildren {
	Title: keyof typeof Images.HeadUserDisplay.Tabs;
}

const SPRING_SETTINGS = {
	friction: 12,
	tension: 180,
};

const SHRINK_FACTOR = 0.9;
const DILATE_FACTOR = 1.2;

const Size = new UDim2(0, 69, 0, 69);

const BUTTON_STATE_SIZES = {
	CLICKED: UDim2.fromOffset(Size.X.Offset * SHRINK_FACTOR, Size.Y.Offset * SHRINK_FACTOR),
	DEFAULT: Size,
	HOVERED: UDim2.fromOffset(Size.X.Offset * DILATE_FACTOR, Size.Y.Offset * DILATE_FACTOR),
};

export default function Button(properties: ButtonProperties): React.Element {
	const { Title } = properties;
	const [size, sizeMotion] = useMotion(Size);

	const TabInfo = Images.HeadUserDisplay.Tabs[Title];

	const producer = useRootProducer();

	return (
		<imagebutton
			BackgroundTransparency={1}
			Event={{
				MouseButton1Down: () => {
					sizeMotion.spring(BUTTON_STATE_SIZES.CLICKED, SPRING_SETTINGS);

					if (getCurrentPage(producer.getState()) === Title) {
						producer.setPage("Home");
					} else {
						producer.setPage(properties.Title);
					}
					task.delay(0.2, () => {
						sizeMotion.spring(BUTTON_STATE_SIZES.DEFAULT, SPRING_SETTINGS);
					});
				},
				MouseEnter: () => {
					sizeMotion.spring(BUTTON_STATE_SIZES.HOVERED, SPRING_SETTINGS);
				},

				MouseLeave: () => {
					sizeMotion.spring(BUTTON_STATE_SIZES.DEFAULT, SPRING_SETTINGS);
				},
			}}
			Image="rbxassetid://109315263430670"
			Position={new UDim2(0.105, 0, 0.23700000000000002, 0)}
			Size={size}
		>
			<textlabel
				AnchorPoint={new Vector2(0, 1)}
				BackgroundTransparency={1}
				Font={Enum.Font.FredokaOne}
				FontFace={FredokaOne}
				Position={new UDim2(0, 0, 1.25, 0)}
				Size={new UDim2(1, 0, 0, 10)}
				Text={Title}
				TextColor3={Color3.fromRGB(255, 255, 255)}
				TextSize={18}
				key="Title"
			>
				<uistroke Thickness={2} />
			</textlabel>
			<imagelabel
				AnchorPoint={new Vector2(0.5, 0.5)}
				BackgroundTransparency={1}
				Image={TabInfo.Icon}
				Position={new UDim2(0.5, 0, 0.5, 0)}
				Size={new UDim2(0.8, 0, 0.8, 0)}
			>
				<uiaspectratioconstraint AspectRatio={TabInfo.AspectRatio} />
			</imagelabel>
		</imagebutton>
	);
}
