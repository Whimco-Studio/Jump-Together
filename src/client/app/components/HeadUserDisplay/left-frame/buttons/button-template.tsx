//!optimize 2

//!optimize 2

import { useMotion } from "@rbxts/pretty-react-hooks";
import React, { useEffect } from "@rbxts/react";
import { Images } from "client/app/images";
import { FredokaOne } from "client/app/modules/fonts";
import UIStroke from "client/app/modules/scale-ui-stroke";

export interface ButtonTemplateProperties extends React.PropsWithChildren {
	index: number;
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

export default function ButtonTemplate(properties: ButtonTemplateProperties): React.Element {
	const [size, sizeMotion] = useMotion(UDim2.fromScale(0, 0));

	useEffect(() => {
		sizeMotion.spring(BUTTON_STATE_SIZES.DEFAULT, SPRING_SETTINGS);
	}, [sizeMotion]);
	return (
		<frame
			BackgroundColor3={Color3.fromRGB(255, 255, 255)}
			BackgroundTransparency={1}
			LayoutOrder={properties.index}
			Size={new UDim2(0.475, 0, 0.45, 0)}
		>
			<uiaspectratioconstraint />

			<imagebutton
				AnchorPoint={new Vector2(0.5, 0.5)}
				BackgroundColor3={Color3.fromRGB(255, 255, 255)}
				BackgroundTransparency={0}
				Event={{
					MouseButton1Click: () => {
						sizeMotion.spring(BUTTON_STATE_SIZES.CLICKED, SPRING_SETTINGS);

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
				Position={new UDim2(0.5, 0, 0.5, 0)}
				Size={size}
			>
				<uicorner CornerRadius={new UDim(1, 0)} />
				<uistroke Color={Color3.fromRGB(52, 97, 154)} Thickness={UIStroke(3)} />

				<imagelabel
					AnchorPoint={new Vector2(0.5, 0.5)}
					BackgroundTransparency={1}
					Image={
						Images.Icons.LeftPanelButtons[properties.title as keyof typeof Images.Icons.LeftPanelButtons]
					}
					Position={new UDim2(0.5, 0, 0.5, 0)}
					Size={new UDim2(0.76, 0, 0.76, 0)}
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
					TextSize={14}
					TextWrapped={true}
					ZIndex={2}
					key="ButtonTitle"
				>
					<uistroke Color={Color3.fromRGB(52, 97, 154)} Thickness={UIStroke(3)} />
				</textlabel>
			</imagebutton>
		</frame>
	);
}
