import { useMotion } from "@rbxts/pretty-react-hooks";
import React, { useEffect } from "@rbxts/react";
import { useRootProducer, useRootSelector } from "shared/app/hooks/root-hook";
import { Images } from "shared/app/images";
import { Theme } from "shared/app/theme";

interface PanelButtonProperties {
	image: string;
	size: UDim2;
	tabName: "Accessories" | "Quirkymals" | "Skins";
}

const SPRING_SETTINGS = {
	friction: 12,
	tension: 180,
};
const INDICATOR_SIZE = 5;

export function PanelButton({ image, size, tabName }: PanelButtonProperties) {
	const [position, positionMotion] = useMotion(UDim2.fromScale(0, 0));
	const [selectionCircle, selectionCircleMotion] = useMotion(UDim2.fromOffset(0, 0));
	const [selectionOutline, selectionOutlineMotion] = useMotion(0);

	const producer = useRootProducer();
	const selectCharacterCreationPanelTab = useRootSelector((state) => state.characterCreation.Tab);

	useEffect(() => {
		if (selectCharacterCreationPanelTab === tabName) {
			positionMotion.spring(UDim2.fromScale(0, -0.15), SPRING_SETTINGS);
			selectionCircleMotion.spring(UDim2.fromOffset(INDICATOR_SIZE, INDICATOR_SIZE), SPRING_SETTINGS);
			selectionOutlineMotion.spring(0, SPRING_SETTINGS);
		} else {
			positionMotion.spring(UDim2.fromScale(0, 0), SPRING_SETTINGS);
			selectionCircleMotion.spring(UDim2.fromOffset(0, 0), SPRING_SETTINGS);
			selectionOutlineMotion.spring(1, SPRING_SETTINGS);
		}
	}, [selectCharacterCreationPanelTab]);

	return (
		<frame
			BackgroundColor3={Color3.fromRGB(255, 255, 255)}
			BorderColor3={Color3.fromRGB(0, 0, 0)}
			BorderSizePixel={0}
			LayoutOrder={0}
			Size={size}
			key={tabName}
		>
			<imagebutton
				BackgroundTransparency={1}
				BorderColor3={Color3.fromRGB(27, 42, 53)}
				BorderSizePixel={0}
				Event={{
					MouseButton1Click: () => {
						producer.setCharacterCreationPanelTab(tabName);
					},
				}}
				Image={image}
				Position={position}
				Size={UDim2.fromScale(1, 1)}
			>
				<frame
					AnchorPoint={new Vector2(0.5, 0)}
					BackgroundColor3={Theme.Colors.Primary}
					Position={UDim2.fromScale(0.5, 1.01)}
					Size={selectionCircle}
				>
					<uicorner CornerRadius={new UDim(1, 0)} />
				</frame>
				<imagelabel
					AnchorPoint={new Vector2(0.5, 0.5)}
					BackgroundTransparency={1}
					BorderSizePixel={0}
					Image={
						Images.Icons.CharacterCreation[
							`${tabName}Selected` as keyof typeof Images.Icons.CharacterCreation
						]
					}
					ImageTransparency={selectionOutline}
					LayoutOrder={0}
					Position={UDim2.fromScale(0.5, 0.5)}
					Size={UDim2.fromScale(1, 1)}
					key={"Selected"}
				/>
			</imagebutton>
			<uiaspectratioconstraint AspectRatio={0.944} />
		</frame>
	);
}
