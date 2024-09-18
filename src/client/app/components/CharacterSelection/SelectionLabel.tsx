import React, { useState, useEffect } from "@rbxts/react";
import { Animation } from "client/app/animation";
import { useRootSelector } from "client/app/hooks";
import { useMotion } from "@rbxts/pretty-react-hooks";

interface SelectionLabelProps {
	anchorPoint?: Vector2;
	position: UDim2;
	springPosition: UDim2;
}

const SPRING_SETTINGS = Animation.BUTTON_SPRING_SETTINGS;
const FRAME_SIZES = {
	DEFAULT: UDim2.fromScale(0, 0),
	EXPANDED: UDim2.fromScale(0.165, 0.13),
};

export function SelectionLabel({ anchorPoint, position, springPosition }: SelectionLabelProps) {
	const [size, sizeMotion] = useMotion(FRAME_SIZES.EXPANDED);
	const [positionSpring, positionSpringMotion] = useMotion(position);
	const currentPage = useRootSelector((state) => state.interface.Page); // Add this line

	useEffect(() => {
		if (currentPage === "CharacterSelection") {
			positionSpringMotion.spring(position, SPRING_SETTINGS);
		} else {
			positionSpringMotion.spring(springPosition, SPRING_SETTINGS); // Change to shrink to 0,0
		}
	}, [currentPage]); // Modify this line

	return (
		<frame
			BackgroundColor3={Color3.fromRGB(255, 255, 255)}
			BackgroundTransparency={1}
			BorderColor3={Color3.fromRGB(0, 0, 0)}
			BorderSizePixel={0}
			AnchorPoint={anchorPoint ?? new Vector2(0.5, 0.5)}
			Position={positionSpring}
			Size={size}
		>
			<uiaspectratioconstraint AspectRatio={2.256} />
			<imagelabel
				Image="rbxassetid://14962576335"
				AnchorPoint={new Vector2(0.5, 0.5)}
				BackgroundColor3={Color3.fromRGB(255, 255, 255)}
				BackgroundTransparency={1}
				BorderColor3={Color3.fromRGB(0, 0, 0)}
				BorderSizePixel={0}
				Position={UDim2.fromScale(0.5, 0.5)}
				Size={UDim2.fromScale(1, 1)}
			>
				<uiaspectratioconstraint AspectRatio={2.26} />
				<textlabel
					FontFace={new Font("rbxasset://fonts/families/FredokaOne.json")}
					Text="Slot Name"
					TextColor3={Color3.fromRGB(0, 0, 0)}
					TextScaled={true}
					TextSize={14}
					TextWrapped={true}
					BackgroundColor3={Color3.fromRGB(255, 255, 255)}
					BackgroundTransparency={1}
					BorderColor3={Color3.fromRGB(0, 0, 0)}
					BorderSizePixel={0}
					Position={UDim2.fromScale(0.115, 0.24)}
					Size={UDim2.fromScale(0.779, 0.38)}
				/>
			</imagelabel>
		</frame>
	);
}
