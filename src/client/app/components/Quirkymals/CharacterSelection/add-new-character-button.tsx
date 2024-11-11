import { useMotion } from "@rbxts/pretty-react-hooks";
import React, { useEffect } from "@rbxts/react";
import { Animation } from "client/app/animation";
import { useRootSelector } from "client/app/hooks/root-hook";
import { Images } from "client/app/images"; // Add this import

interface AddNewCharacterButtonProperties {
	anchorPoint?: Vector2;
	aspectRatio?: number;
	image?: string;
	onClick?: () => void;
	position: UDim2;

	springPosition: UDim2;
}

const SPRING_SETTINGS = Animation.BUTTON_SPRING_SETTINGS;

const BUTTON_STATE_SIZES = {
	CLICKED: UDim2.fromScale(0.75, 0.75),
	DEFAULT: UDim2.fromScale(1, 1),
	HOVERED: UDim2.fromScale(1.1, 1.1),
};

export function AddNewCharacterButton({
	anchorPoint,
	aspectRatio,
	image,
	onClick,
	position,
	springPosition,
}: AddNewCharacterButtonProperties) {
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
			Size={UDim2.fromScale(0.2, 0.15)}
		>
			<uiaspectratioconstraint />
			<imagebutton
				AnchorPoint={new Vector2(0.5, 0.5)}
				BackgroundTransparency={1}
				BorderColor3={Color3.fromRGB(27, 42, 53)}
				BorderSizePixel={0}
				Event={{
					MouseButton1Click: () => {
						if (currentPage === "CharacterSelection") {
							sizeMotion.spring(BUTTON_STATE_SIZES.CLICKED, SPRING_SETTINGS);

							if (onClick) {
								onClick();
							}

							task.defer(() => {
								task.wait(0.2);
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
			>
				<imagelabel
					AnchorPoint={new Vector2(0.5, 0.5)}
					BackgroundTransparency={1}
					BorderColor3={Color3.fromRGB(27, 42, 53)}
					BorderSizePixel={0}
					Image={Images.CharacterSelection.NewCharacter}
					Position={UDim2.fromScale(0.5, 0.5)}
					Size={UDim2.fromScale(1, 1)}
				/>

				{aspectRatio !== undefined && <uiaspectratioconstraint AspectRatio={aspectRatio} />}
			</imagebutton>
		</frame>
	);
}
