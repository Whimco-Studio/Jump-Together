import { PanelRibbon } from "./panel-ribbon";
import { SlotContainer } from "./slot-container";
import { useMotion } from "@rbxts/pretty-react-hooks";
import React, { useEffect } from "@rbxts/react";
import { Animation } from "client/app/animation";
import { useRootSelector } from "client/app/hooks/root-hook";

interface CharacterCreationPanelProperties {
	anchorPoint?: Vector2;
	position: UDim2;
	springPosition: UDim2;
}

const SPRING_SETTINGS = Animation.BUTTON_SPRING_SETTINGS;

export function CharacterCreationPanel({ anchorPoint, position, springPosition }: CharacterCreationPanelProperties) {
	const [positionSpring, positionSpringMotion] = useMotion(UDim2.fromScale(0.0125, 0.1));
	const currentPage = useRootSelector((state) => state.interface.Page);

	useEffect(() => {
		if (currentPage === "CharacterCreation") {
			positionSpringMotion.spring(UDim2.fromScale(0.0125, 0.1), SPRING_SETTINGS);
		} else {
			positionSpringMotion.spring(UDim2.fromScale(0.0125, 1.5), SPRING_SETTINGS);
		}
	}, [currentPage]);

	return (
		<frame
			BackgroundTransparency={1}
			BorderColor3={Color3.fromRGB(27, 42, 53)}
			BorderSizePixel={0}
			Position={positionSpring}
			Size={UDim2.fromScale(0.35, 0.858)}
		>
			<PanelRibbon />
			<imagelabel
				BackgroundTransparency={1}
				BorderColor3={Color3.fromRGB(27, 42, 53)}
				BorderSizePixel={0}
				Image="rbxassetid://15089134895"
				Size={UDim2.fromScale(1, 1)}
			/>
			<uiaspectratioconstraint AspectRatio={0.726} />
			<SlotContainer />
		</frame>
	);
}
