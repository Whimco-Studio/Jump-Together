import React from "@rbxts/react";
import { useRootSelector } from "shared/app/hooks/root-hook";

export function ConfirmationText() {
	const confirmationPopUpSelector = useRootSelector((state) => state.confirmationPopUp);

	return (
		<textlabel
			BackgroundColor3={Color3.fromRGB(255, 255, 255)}
			BackgroundTransparency={1}
			BorderColor3={Color3.fromRGB(0, 0, 0)}
			BorderSizePixel={0}
			FontFace={new Font("rbxasset://fonts/families/FredokaOne.json")}
			Position={UDim2.fromScale(0.11, 0.196)}
			Size={UDim2.fromScale(0.798, 0.29)}
			Text={confirmationPopUpSelector.Question}
			TextColor3={Color3.fromRGB(0, 0, 0)}
			TextScaled={true}
			TextSize={14}
			TextWrapped={true}
		/>
	);
}
