import { composeBindings, useMotion } from "@rbxts/pretty-react-hooks";
import React, { useEffect, useMemo } from "@rbxts/react";
import { useRootProducer, useRootSelector } from "client/app/hooks";
import { Images } from "client/app/images";
import { Theme } from "client/app/theme";

interface PanelButtonProps {
	tabName: string;
	size: UDim2;
	image: string;
}

const SPRING_SETTINGS = {
	tension: 180,
	friction: 12,
};
const INDICATOR_SIZE = 5;

export function PanelButton({ tabName, image, size }: PanelButtonProps) {
	const [position, positionMotion] = useMotion(UDim2.fromScale(0, 0));
	const [selectionCircle, selectionCircleMotion] = useMotion(UDim2.fromOffset(0, 0));
	const [selectionOutline, selectionOutlineMotion] = useMotion(0);

	const producer = useRootProducer();
	const selectCharacterCreationPanelTab = useRootSelector((state) => state.interface.CharacterCreationPanelTab);

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
			key={tabName}
			BackgroundColor3={Color3.fromRGB(255, 255, 255)}
			BorderColor3={Color3.fromRGB(0, 0, 0)}
			BorderSizePixel={0}
			Size={size}
			LayoutOrder={0}
		>
			<imagebutton
				Image={image}
				BackgroundTransparency={1}
				BorderColor3={Color3.fromRGB(27, 42, 53)}
				BorderSizePixel={0}
				Size={UDim2.fromScale(1, 1)}
				Position={position}
				Event={{
					MouseButton1Click: () => {
						producer.setCharacterCreationPanelTab(tabName);
					},
				}}
			>
				<frame
					Size={selectionCircle}
					AnchorPoint={new Vector2(0.5, 0)}
					Position={UDim2.fromScale(0.5, 1.01)}
					BackgroundColor3={Theme.Colors.Primary}
				>
					<uicorner CornerRadius={new UDim(1, 0)} />
				</frame>
				<imagelabel
					key={"Selected"}
					Image={Images.Icons[`${tabName}Selected` as keyof typeof Images.Icons]}
					AnchorPoint={new Vector2(0.5, 0.5)}
					Position={UDim2.fromScale(0.5, 0.5)}
					BackgroundTransparency={1}
					BorderSizePixel={0}
					LayoutOrder={0}
					Size={UDim2.fromScale(1, 1)}
					ImageTransparency={selectionOutline}
				/>
			</imagebutton>
			<uiaspectratioconstraint AspectRatio={0.944} />
		</frame>
	);
}
