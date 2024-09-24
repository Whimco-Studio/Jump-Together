//!optimize 2

import { useMotion } from "@rbxts/pretty-react-hooks";
import React from "@rbxts/react";
import { Animation } from "shared/app/animation";
import { useRootSelector } from "shared/app/hooks";
import { Images } from "shared/app/images";

interface HubPanelButtonProperties extends React.PropsWithChildren {
	icon: string;
	layoutOrder: number;
	onClick?: () => void;
}

const SPRING_SETTINGS = Animation.BUTTON_SPRING_SETTINGS;

const BUTTON_STATE_SIZES = {
	CLICKED: UDim2.fromScale(0.75, 0.75),
	DEFAULT: UDim2.fromScale(1, 1),
	HOVERED: UDim2.fromScale(1.1, 1.1),
};

export default function HubPanelButton({
	children,
	icon,
	layoutOrder,
	onClick,
}: HubPanelButtonProperties): React.Element {
	const [size, sizeMotion] = useMotion(BUTTON_STATE_SIZES.DEFAULT);
	const currentPage = useRootSelector((state) => state.interface.Page); // Add this line

	return (
		<frame
			AnchorPoint={new Vector2(0.5, 0.5)}
			BackgroundTransparency={1}
			BorderColor3={Color3.fromRGB(27, 42, 53)}
			BorderSizePixel={0}
			LayoutOrder={layoutOrder}
			Position={UDim2.fromScale(0.5, 0.5)}
			Size={UDim2.fromScale(0.5, 0.5)}
			key={icon}
		>
			<uiaspectratioconstraint />
			<imagebutton
				AnchorPoint={new Vector2(0.5, 0.5)}
				BackgroundTransparency={1}
				BorderColor3={Color3.fromRGB(27, 42, 53)}
				BorderSizePixel={0}
				Event={{
					MouseButton1Click: () => {
						// if (currentPage === "CharacterCreation") {
						sizeMotion.spring(BUTTON_STATE_SIZES.CLICKED, SPRING_SETTINGS);
						if (onClick) {
							onClick();
						}
						task.delay(0.2, () => {
							sizeMotion.spring(BUTTON_STATE_SIZES.DEFAULT, SPRING_SETTINGS);
						});
						// }
					},
					MouseEnter: () => {
						sizeMotion.spring(BUTTON_STATE_SIZES.HOVERED, SPRING_SETTINGS);
					},

					MouseLeave: () => {
						sizeMotion.spring(BUTTON_STATE_SIZES.DEFAULT, SPRING_SETTINGS);
					},
				}}
				Position={UDim2.fromScale(0.5, 0.5)}
				Size={size}
			>
				<imagelabel
					AnchorPoint={new Vector2(0.5, 0.5)}
					BackgroundTransparency={1}
					BorderColor3={Color3.fromRGB(27, 42, 53)}
					BorderSizePixel={0}
					Image={Images.Icons.HubPanelButtons[icon as keyof typeof Images.Icons.HubPanelButtons]}
					Position={UDim2.fromScale(0.5, 0.5)}
					Size={UDim2.fromScale(1, 1)}
				/>
			</imagebutton>
		</frame>
	);
}
