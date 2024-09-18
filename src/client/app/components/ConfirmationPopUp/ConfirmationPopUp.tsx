import React, { useEffect } from "@rbxts/react";
import { useMotion } from "@rbxts/pretty-react-hooks";
import { ConfirmationText } from "./ConfirmationText";
import { BackgroundImage } from "./BackgroundImage";
import { AcceptButton } from "./AcceptButton";
import { CancelButton } from "./CancelButton";
import { useRootSelector } from "client/app/hooks";
import { Animation } from "client/app/animation";

const SPRING_SETTINGS = Animation.BUTTON_SPRING_SETTINGS;
const ACTIVE_ROTATION = 0;
const INACTIVE_ROTATION = -180;
const ACTIVE_POSITION = UDim2.fromScale(0.5, 0.5);
const INACTIVE_POSITION = UDim2.fromScale(0.5, 1.25);

export function ConfirmationPopUp() {
	const ConfirmationActive = useRootSelector((state) => state.confirmationPopUp.Active);

	const [positionSpring, positionSpringMotion] = useMotion(ConfirmationActive ? ACTIVE_POSITION : INACTIVE_POSITION);
	const [rotationSpring, rotationSpringMotion] = useMotion(ConfirmationActive ? ACTIVE_ROTATION : INACTIVE_ROTATION);

	useEffect(() => {
		if (ConfirmationActive) {
			positionSpringMotion.spring(ACTIVE_POSITION, SPRING_SETTINGS);
			rotationSpringMotion.spring(ACTIVE_ROTATION, SPRING_SETTINGS);
		} else {
			positionSpringMotion.spring(INACTIVE_POSITION, SPRING_SETTINGS);
			rotationSpringMotion.spring(INACTIVE_ROTATION, SPRING_SETTINGS);
		}
	}, [ConfirmationActive]);

	return (
		<frame
			AnchorPoint={new Vector2(0.5, 0.5)}
			BackgroundColor3={Color3.fromRGB(255, 255, 255)}
			BackgroundTransparency={1}
			BorderColor3={Color3.fromRGB(0, 0, 0)}
			BorderSizePixel={0}
			Position={positionSpring}
			Size={UDim2.fromScale(0.337, 0.329)}
			Rotation={rotationSpring}
		>
			<uiaspectratioconstraint AspectRatio={1.821} />
			<ConfirmationText />
			<BackgroundImage />
			<AcceptButton />
			<CancelButton />
		</frame>
	);
}
