import React, { useState, useEffect } from "@rbxts/react";
import { useMotion } from "@rbxts/pretty-react-hooks";
import { PanelRibbon } from "./PanelRibbon";
import { useRootSelector } from "client/app/hooks";
import { Animation } from "client/app/animation";
import { SlotContainer } from "./SlotContianer";

interface CharacterCreationPanelProps {
	anchorPoint?: Vector2;
	position: UDim2;
	springPosition: UDim2;
}

const SPRING_SETTINGS = Animation.BUTTON_SPRING_SETTINGS;

export function CharacterCreationPanel({ anchorPoint, position, springPosition }: CharacterCreationPanelProps) {
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
				Image="rbxassetid://15089134895"
				BackgroundTransparency={1}
				BorderColor3={Color3.fromRGB(27, 42, 53)}
				BorderSizePixel={0}
				Size={UDim2.fromScale(1, 1)}
			/>
			<uiaspectratioconstraint AspectRatio={0.726} />
			<SlotContainer />
		</frame>
	);
}
