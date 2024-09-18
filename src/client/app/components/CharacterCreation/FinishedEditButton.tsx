import { useMotion } from "@rbxts/pretty-react-hooks";
import React, { useState, useEffect } from "@rbxts/react";
import { Animation } from "client/app/animation";
import { Images } from "client/app/images";
import { useRootSelector } from "client/app/hooks"; // Add this import

interface FinishedEditProps {
	image?: string;
	aspectRatio?: number;
	anchorPoint?: Vector2;
	position: UDim2;
	springPosition: UDim2;

	onClick?: () => void;
}

const SPRING_SETTINGS = Animation.BUTTON_SPRING_SETTINGS;

const BUTTON_STATE_SIZES = {
	DEFAULT: UDim2.fromScale(1, 1),
	HOVERED: UDim2.fromScale(1.1, 1.1),
	CLICKED: UDim2.fromScale(0.75, 0.75),
};

export function FinishedEditButton({
	image,
	aspectRatio,
	anchorPoint,
	position,
	springPosition,
	onClick,
}: FinishedEditProps) {
	const [size, sizeMotion] = useMotion(BUTTON_STATE_SIZES.DEFAULT);
	const [positionSpring, positionSpringMotion] = useMotion(position);
	const currentPage = useRootSelector((state) => state.interface.Page); // Add this line

	useEffect(() => {
		if (currentPage === "CharacterCreation") {
			positionSpringMotion.spring(position, SPRING_SETTINGS);
		} else {
			positionSpringMotion.spring(springPosition, SPRING_SETTINGS); // Change to shrink to 0,0
		}
	}, [currentPage]); // Modify this line

	return (
		<frame
			BackgroundTransparency={1}
			BorderColor3={Color3.fromRGB(27, 42, 53)}
			BorderSizePixel={0}
			Size={UDim2.fromScale(0.2, 0.15)}
			AnchorPoint={anchorPoint ?? new Vector2(0.5, 0.5)}
			Position={positionSpring}
		>
			<uiaspectratioconstraint />
			<imagebutton
				BackgroundTransparency={1}
				BorderColor3={Color3.fromRGB(27, 42, 53)}
				BorderSizePixel={0}
				Size={size}
				AnchorPoint={new Vector2(0.5, 0.5)}
				Position={UDim2.fromScale(0.5, 0.5)}
				Event={{
					MouseEnter: () => {
						if (currentPage === "CharacterCreation") {
							sizeMotion.spring(BUTTON_STATE_SIZES.HOVERED, SPRING_SETTINGS);
						}
					},
					MouseLeave: () => {
						if (currentPage === "CharacterCreation") {
							sizeMotion.spring(BUTTON_STATE_SIZES.DEFAULT, SPRING_SETTINGS);
						}
					},

					MouseButton1Click: () => {
						if (currentPage === "CharacterCreation") {
							sizeMotion.spring(BUTTON_STATE_SIZES.CLICKED, SPRING_SETTINGS);

							if (onClick) {
								onClick();
							}

							task.delay(0.2, () => {
								sizeMotion.spring(BUTTON_STATE_SIZES.DEFAULT, SPRING_SETTINGS);
							});
						}
					},
				}}
			>
				<imagelabel
					Image={Images.CharacterCreation.FinishedButton}
					AnchorPoint={new Vector2(0.5, 0.5)}
					BackgroundTransparency={1}
					BorderColor3={Color3.fromRGB(27, 42, 53)}
					BorderSizePixel={0}
					Position={UDim2.fromScale(0.5, 0.5)}
					Size={UDim2.fromScale(1, 1)}
				/>

				{aspectRatio !== undefined && <uiaspectratioconstraint AspectRatio={aspectRatio} />}
			</imagebutton>
		</frame>
	);
}
