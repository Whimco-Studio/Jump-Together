import { useMotion } from "@rbxts/pretty-react-hooks";
import React, { useEffect } from "@rbxts/react";
import { Animation } from "shared/app/animation";
import { useRootSelector } from "shared/app/hooks/root-hook";
import { Images } from "shared/app/images"; // Add this import

const SPRING_SETTINGS = Animation.BUTTON_SPRING_SETTINGS;

const BUTTON_STATE_SIZES = {
	CLICKED: UDim2.fromScale(0.75, 0.75),
	DEFAULT: UDim2.fromScale(1, 1),
	HOVERED: UDim2.fromScale(1.1, 1.1),
};

interface ScrollLeftButtonProperties {
	anchorPoint?: Vector2;
	onClick?: () => void;
	position: UDim2;
	springPosition: UDim2;
}

export function ScrollLeftButton({ anchorPoint, onClick, position, springPosition }: ScrollLeftButtonProperties) {
	const [size, sizeMotion] = useMotion(BUTTON_STATE_SIZES.DEFAULT);
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
			AnchorPoint={anchorPoint ?? new Vector2(0.5, 0.5)}
			BackgroundTransparency={1}
			BorderColor3={Color3.fromRGB(27, 42, 53)}
			BorderSizePixel={0}
			Position={positionSpring}
			Size={UDim2.fromScale(0.227, 0.2)}
		>
			<imagebutton
				AnchorPoint={new Vector2(0.5, 0.5)}
				BackgroundTransparency={1}
				BorderColor3={Color3.fromRGB(27, 42, 53)}
				BorderSizePixel={0}
				Event={{
					MouseButton1Up: () => {
						if (currentPage === "CharacterSelection") {
							sizeMotion.spring(BUTTON_STATE_SIZES.CLICKED, SPRING_SETTINGS);

							if (onClick) {
								onClick();
							}

							task.delay(0.2, () => {
								sizeMotion.spring(BUTTON_STATE_SIZES.DEFAULT, SPRING_SETTINGS);
							});
						}
					},
					MouseEnter: () => {
						if (currentPage === "CharacterSelection") {
							sizeMotion.spring(BUTTON_STATE_SIZES.HOVERED, SPRING_SETTINGS);
						}
					},

					MouseLeave: () => {
						if (currentPage === "CharacterSelection") {
							sizeMotion.spring(BUTTON_STATE_SIZES.DEFAULT, SPRING_SETTINGS);
						}
					},
				}}
				Position={UDim2.fromScale(0.5, 0.5)}
				Size={size}
				ZIndex={2}
			>
				<imagelabel
					AnchorPoint={new Vector2(0.5, 0.5)}
					BackgroundColor3={Color3.fromRGB(255, 255, 255)}
					BackgroundTransparency={1}
					BorderColor3={Color3.fromRGB(0, 0, 0)}
					BorderSizePixel={0}
					Image={Images.CharacterSelection.LeftButton}
					Position={UDim2.fromScale(0.5, 0.5)}
					Size={UDim2.fromScale(1, 1)}
				>
					<uiaspectratioconstraint AspectRatio={0.717} />
				</imagelabel>
			</imagebutton>
		</frame>
	);
}
