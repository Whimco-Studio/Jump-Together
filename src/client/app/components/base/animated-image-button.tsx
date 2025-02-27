//!optimize 2

import { useMotion } from "@rbxts/pretty-react-hooks";
import React from "@rbxts/react";

const SPRING_SETTINGS = {
	friction: 15,
	tension: 500,
};

const SHRINK_FACTOR = 0.9;
const DILATE_FACTOR = 1.1;

export interface AnimatedImageButtonProperties
	extends React.PropsWithChildren,
		Partial<React.InstanceProps<ImageButton>> {
	Size: UDim2;
}

export default function AnimatedImageButton(properties: AnimatedImageButtonProperties): React.Element {
	const BUTTON_STATE_SIZES = {
		CLICKED: UDim2.fromScale(properties.Size.X.Scale * SHRINK_FACTOR, properties.Size.Y.Scale * SHRINK_FACTOR),
		DEFAULT: properties.Size,
		HOVERED: UDim2.fromScale(properties.Size.X.Scale * DILATE_FACTOR, properties.Size.Y.Scale * DILATE_FACTOR),
	};

	const [size, sizeMotion] = useMotion(properties.Size);

	const clickFunction = (properties.Event?.MouseButton1Click as () => void) || undefined;

	return (
		<imagebutton
			{...properties}
			Event={{
				MouseButton1Down: () => {
					sizeMotion.spring(BUTTON_STATE_SIZES.CLICKED, SPRING_SETTINGS);

					clickFunction?.();
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
			Size={size}
		>
			{properties.children}
		</imagebutton>
	);
}
