//!optimize 2

//!optimize 2

import { useMotion } from "@rbxts/pretty-react-hooks";
import React, { useEffect } from "@rbxts/react";
import { Images } from "client/app/images";
import { FredokaOne } from "client/app/modules/fonts";
import UIStroke from "client/app/modules/scale-ui-stroke";
import UITextSize from "client/app/modules/scale-ui-textsize";
import { getScreenSize } from "client/app/modules/screen";
import { Theme } from "client/app/theme";

export interface ButtonTemplateProperties extends React.PropsWithChildren {
	index: number;
	onClick: () => void;
	title: string;
}

const BUTTON_STATE_SIZES = {
	CLICKED: UDim2.fromScale(0.75, 0.75),
	DEFAULT: UDim2.fromScale(1, 1),
	HOVERED: UDim2.fromScale(1.1, 1.1),
};

const SPRING_SETTINGS = {
	friction: 12,
	tension: 180,
};

const BUTTON_SIZE = 0.5;
const ICON_SIZE = 0.6;

export default function ButtonTemplate(properties: ButtonTemplateProperties): React.Element {
	const [size, sizeMotion] = useMotion(UDim2.fromScale(0, 0));
	const screenSize = getScreenSize();

	useEffect(() => {
		sizeMotion.spring(BUTTON_STATE_SIZES.DEFAULT, SPRING_SETTINGS);
	}, [sizeMotion]);
	return (
		<frame
			BackgroundColor3={Color3.fromRGB(255, 255, 255)}
			BackgroundTransparency={1}
			LayoutOrder={properties.index}
			Size={new UDim2(BUTTON_SIZE, 0, BUTTON_SIZE, 0)}
		>
			<uiaspectratioconstraint />

			<imagebutton
				AnchorPoint={new Vector2(0.5, 0.5)}
				BackgroundColor3={Color3.fromRGB(255, 255, 255)}
				BackgroundTransparency={1}
				Event={{
					MouseButton1Click: () => {
						sizeMotion.spring(BUTTON_STATE_SIZES.CLICKED, SPRING_SETTINGS);

						properties.onClick();

						task.defer(() => {
							task.wait(0.2);
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
				Image={Images.HeadUserDisplay.Button}
				Position={new UDim2(0.5, 0, 0.5, 0)}
				Size={size}
			>
				{/* <uicorner CornerRadius={new UDim(1, 0)} /> */}
				{/* <uistroke Color={Theme.Colors.Secondary} Thickness={UIStroke(5)} /> */}

				<imagelabel
					AnchorPoint={new Vector2(0.5, 0.5)}
					BackgroundTransparency={1}
					Image={
						Images.Icons.LeftPanelButtons[properties.title as keyof typeof Images.Icons.LeftPanelButtons]
					}
					Position={new UDim2(0.5, 0, 0.475, 0)}
					Size={new UDim2(ICON_SIZE, 0, ICON_SIZE, 0)}
				>
					<uiaspectratioconstraint />
				</imagelabel>
				<textlabel
					AnchorPoint={new Vector2(0.5, 1)}
					BackgroundTransparency={1}
					Font={Enum.Font.FredokaOne}
					FontFace={FredokaOne}
					Position={new UDim2(0.5, 0, 1.1, 0)}
					Size={new UDim2(1.5, 0, 0.35000000000000003, 0)}
					Text={properties.title}
					TextColor3={Color3.fromRGB(255, 255, 255)}
					TextSize={screenSize.width < 1000 ? UITextSize(20) : UITextSize(20)}
					TextWrapped={true}
					ZIndex={2}
					key="ButtonTitle"
				>
					<uistroke
						Color={Theme.Colors.Primary}
						LineJoinMode={Enum.LineJoinMode.Bevel}
						Thickness={UIStroke(3)}
					/>
				</textlabel>
			</imagebutton>
		</frame>
	);
}
