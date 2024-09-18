import React, { useState, useEffect } from "@rbxts/react";
import { useMotion } from "@rbxts/pretty-react-hooks";
import { Animation } from "client/app/animation";
import { Images } from "client/app/images";
import { useRootProducer, useRootSelector } from "client/app/hooks";

const SPRING_SETTINGS = Animation.BUTTON_SPRING_SETTINGS;

const DEFAULT_SIZE = 0.4;

const BUTTON_STATE_SIZES = {
	DEFAULT: UDim2.fromScale(DEFAULT_SIZE, DEFAULT_SIZE),
	HOVERED: UDim2.fromScale(DEFAULT_SIZE + 0.05, DEFAULT_SIZE + 0.05),
	CLICKED: UDim2.fromScale(DEFAULT_SIZE - 0.1, DEFAULT_SIZE - 0.1),
};

export function CancelButton() {
	const [hovered, setHovered] = useState(false);
	const [size, sizeMotion] = useMotion(BUTTON_STATE_SIZES.DEFAULT);
	const [backgroundColor, backgroundColorMotion] = useMotion(Color3.fromRGB(255, 255, 255));

	const producer = useRootProducer();

	const ConfirmationActive = useRootSelector((state) => state.confirmationPopUp.Active);
	const ConfirmationCancelText = useRootSelector((state) => state.confirmationPopUp.CancelText);
	const confirmationPopUpSelector = useRootSelector((state) => state.confirmationPopUp);

	useEffect(() => {
		backgroundColorMotion.spring(
			hovered ? Color3.fromRGB(200, 200, 200) : Color3.fromRGB(255, 255, 255),
			SPRING_SETTINGS,
		);
	}, [hovered]);

	return (
		<imagebutton
			Image={Images.ConfirmationPopUp.CancelButton}
			AutoButtonColor={false}
			AnchorPoint={new Vector2(0.5, 0.5)}
			BackgroundColor3={backgroundColor}
			BackgroundTransparency={1}
			BorderColor3={Color3.fromRGB(0, 0, 0)}
			BorderSizePixel={0}
			Position={UDim2.fromScale(0.725, 0.7)}
			Size={size}
			Event={{
				MouseEnter: () => {
					setHovered(true);
					sizeMotion.spring(BUTTON_STATE_SIZES.HOVERED, SPRING_SETTINGS);
				},
				MouseLeave: () => {
					setHovered(false);
					sizeMotion.spring(BUTTON_STATE_SIZES.DEFAULT, SPRING_SETTINGS);
				},
				MouseButton1Click: () => {
					if (!ConfirmationActive) return;

					sizeMotion.spring(BUTTON_STATE_SIZES.CLICKED, SPRING_SETTINGS);
					confirmationPopUpSelector.CancelCallback();
					producer.setConfirmationActive(false);
					task.delay(0.2, () => {
						sizeMotion.spring(BUTTON_STATE_SIZES.DEFAULT, SPRING_SETTINGS);
					});
				},
			}}
		>
			<textlabel
				FontFace={new Font("rbxasset://fonts/families/FredokaOne.json")}
				Text={ConfirmationCancelText}
				TextColor3={Color3.fromRGB(255, 255, 255)}
				TextScaled={true}
				TextSize={14}
				TextWrapped={true}
				AnchorPoint={new Vector2(0.5, 0.5)}
				BackgroundColor3={Color3.fromRGB(255, 255, 255)}
				BackgroundTransparency={1}
				BorderColor3={Color3.fromRGB(0, 0, 0)}
				BorderSizePixel={0}
				Position={UDim2.fromScale(0.501, 0.42)}
				Size={UDim2.fromScale(0.713, 0.6)}
			/>
			<uiaspectratioconstraint AspectRatio={2.26} />
		</imagebutton>
	);
}
