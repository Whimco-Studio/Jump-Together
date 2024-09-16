import { useMotion } from "@rbxts/pretty-react-hooks";
import React, { useState, useEffect } from "@rbxts/react";

interface ItemSlotProps {
	image?: string;
	aspectRatio?: number;
	anchorPoint?: Vector2;
	position?: UDim2;
}

const SPRING_SETTINGS = {
	tension: 180,
	friction: 12,
};

const BUTTON_STATE_SIZES = {
	DEFAULT: UDim2.fromScale(1, 1),
	HOVERED: UDim2.fromScale(1.1, 1.1),
	CLICKED: UDim2.fromScale(0.75, 0.75),
};

export function ItemSlot({ image, aspectRatio, anchorPoint, position }: ItemSlotProps) {
	const [size, sizeMotion] = useMotion(BUTTON_STATE_SIZES.DEFAULT);
	const [state, setState] = useState();

	useEffect(() => {
		sizeMotion.spring(BUTTON_STATE_SIZES.DEFAULT, SPRING_SETTINGS);
	}, []);

	return (
		<frame
			BackgroundTransparency={1}
			BorderColor3={Color3.fromRGB(27, 42, 53)}
			BorderSizePixel={0}
			Size={UDim2.fromScale(0.227, 0.2)}
			AnchorPoint={anchorPoint ?? new Vector2(0.5, 0.5)}
			Position={position ?? UDim2.fromScale(0.5, 0.5)}
		>
			<imagebutton
				BackgroundTransparency={1}
				BorderColor3={Color3.fromRGB(27, 42, 53)}
				BorderSizePixel={0}
				Size={size}
				AnchorPoint={new Vector2(0.5, 0.5)}
				Position={UDim2.fromScale(0.5, 0.5)}
				Event={{
					MouseEnter: () => {
						sizeMotion.spring(BUTTON_STATE_SIZES.HOVERED, SPRING_SETTINGS);
					},
					MouseLeave: () => {
						sizeMotion.spring(BUTTON_STATE_SIZES.DEFAULT, SPRING_SETTINGS);
					},

					MouseButton1Click: () => {
						sizeMotion.spring(BUTTON_STATE_SIZES.CLICKED, SPRING_SETTINGS);

						task.delay(0.2, () => {
							sizeMotion.spring(BUTTON_STATE_SIZES.DEFAULT, SPRING_SETTINGS);
						});
					},
				}}
			>
				<imagelabel
					Image="rbxassetid://15089220589"
					AnchorPoint={new Vector2(0.5, 0.5)}
					BackgroundTransparency={1}
					BorderColor3={Color3.fromRGB(27, 42, 53)}
					BorderSizePixel={0}
					Position={UDim2.fromScale(0.5, 0.5)}
					Size={UDim2.fromScale(1, 1)}
				/>
				<frame
					AnchorPoint={new Vector2(0.5, 0.5)}
					BackgroundColor3={Color3.fromRGB(17, 255, 0)}
					BorderColor3={Color3.fromRGB(27, 42, 53)}
					BorderSizePixel={0}
					Position={UDim2.fromScale(0.5, 0.45)}
					Size={UDim2.fromScale(0.65, 0.6)}
				/>

				{aspectRatio !== undefined && <uiaspectratioconstraint AspectRatio={aspectRatio} />}
			</imagebutton>
		</frame>
	);
}
