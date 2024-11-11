//!optimize 2

import { useMotion } from "@rbxts/pretty-react-hooks";
import React, { useEffect } from "@rbxts/react";
import { useSelector } from "@rbxts/react-reflex";
import { FredokaOne } from "client/app/modules/fonts";
import UIStroke from "client/app/modules/scale-ui-stroke";
import UITextSize from "client/app/modules/scale-ui-textsize";
import { Theme } from "client/app/theme";
import { getCurrentTab } from "client/store/slices/Interface/interface-selectors";

export interface InventoryTabButtonProperties extends React.PropsWithChildren {
	active: boolean;
	index: number;
	label: string;
	onClick: () => void;
}

const BUTTON_STATE_SIZES = {
	CLICKED: UDim2.fromScale(0.75, 0.75),
	DEFAULT: UDim2.fromScale(1, 1),
	HOVERED: UDim2.fromScale(1.1, 1.1),
};

const BUTTON_STATE_COLORS = {
	ACTIVE: Color3.fromRGB(255, 255, 255),
	INACTIVE: Color3.fromRGB(180, 180, 180),
};

const SPRING_SETTINGS = {
	friction: 20,
	tension: 250,
};

export default function InventoryTabButton(properties: InventoryTabButtonProperties): React.Element {
	const currentTab = useSelector(getCurrentTab);

	const [size, sizeMotion] = useMotion(UDim2.fromScale(0, 0));
	const [color, colorMotion] = useMotion(
		currentTab === properties.label ? BUTTON_STATE_COLORS.ACTIVE : BUTTON_STATE_COLORS.INACTIVE,
	);

	useEffect(() => {
		sizeMotion.spring(BUTTON_STATE_SIZES.DEFAULT, SPRING_SETTINGS);
		colorMotion.spring(currentTab === properties.label ? BUTTON_STATE_COLORS.ACTIVE : BUTTON_STATE_COLORS.INACTIVE);
	}, [sizeMotion, colorMotion, currentTab]);

	return (
		<frame
			BackgroundColor3={Color3.fromRGB(255, 255, 255)}
			BackgroundTransparency={1}
			BorderColor3={Color3.fromRGB(0, 0, 0)}
			BorderSizePixel={0}
			Size={new UDim2(0.237, 0, 0.912, 0)}
			key={`InventoryTabButton-${properties.index}`}
		>
			<imagebutton
				AnchorPoint={new Vector2(0.5, 0.5)}
				BackgroundColor3={Color3.fromRGB(255, 255, 255)}
				BackgroundTransparency={1}
				BorderColor3={Color3.fromRGB(0, 0, 0)}
				BorderSizePixel={0}
				Event={{
					MouseButton1Click: () => {
						sizeMotion.spring(BUTTON_STATE_SIZES.CLICKED, SPRING_SETTINGS);

						if (properties.active) {
							properties.onClick();
						}

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
				Image="rbxassetid://78584967397354"
				ImageColor3={color}
				Position={UDim2.fromScale(0.5, 0.5)}
				Size={size}
				key={`InventoryTabButton-${properties.index}-ImageButton`}
			>
				<textlabel
					AnchorPoint={new Vector2(0.5, 0.5)}
					BackgroundColor3={Color3.fromRGB(255, 255, 255)}
					BackgroundTransparency={1}
					BorderColor3={Color3.fromRGB(0, 0, 0)}
					BorderSizePixel={0}
					FontFace={FredokaOne}
					Position={new UDim2(0.5, 0, 0.5, 0)}
					Size={new UDim2(1, 0, 1, 0)}
					Text={properties.label}
					TextColor3={Color3.fromRGB(255, 255, 255)}
					// TextScaled={true}
					TextSize={UITextSize(24)}
					TextWrapped={true}
					key="TextLabel"
				>
					<uistroke Color={Theme.Colors.Primary} Thickness={UIStroke(4)} key="UIStroke" />
				</textlabel>
			</imagebutton>
		</frame>
	);
}
