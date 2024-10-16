import { AddNewCharacterButton } from "./add-new-character-button";
import { ScrollLeftButton } from "./scroll-left-button";
import { ScrollRightButton } from "./scroll-right-button";
import { SelectionLabel } from "./selection-label";
import React, { useEffect, useState } from "@rbxts/react";
import { useRootProducer, useRootSelector } from "client/app/hooks/root-hook";

const PADDING = 0.05;

export function CharacterSelection() {
	const producer = useRootProducer();
	const currentPage = useRootSelector((state) => state.interface.Page);

	const [frameVisible, setFrameVisible] = useState(currentPage === "CharacterSelection");

	useEffect(() => {
		if (currentPage === "CharacterSelection") {
			setFrameVisible(true);
		} else {
			task.delay(0.5, () => {
				setFrameVisible(false);
			});
		}
	}, [currentPage]);

	return (
		<frame BackgroundTransparency={1} Size={UDim2.fromScale(1, 1)} Visible={frameVisible}>
			<AddNewCharacterButton
				anchorPoint={new Vector2(0.5, 1)}
				onClick={() => {
					producer.setPage("CharacterCreation");
				}}
				position={UDim2.fromScale(0.5, 1 - PADDING)}
				springPosition={UDim2.fromScale(0.5, 1.5)}
			/>
			<ScrollLeftButton
				anchorPoint={new Vector2(0, 0.5)}
				position={UDim2.fromScale(PADDING, 0.5)}
				springPosition={UDim2.fromScale(-0.5, 0.5)}
			/>
			<ScrollRightButton
				anchorPoint={new Vector2(1, 0.5)}
				position={UDim2.fromScale(1 - PADDING, 0.5)}
				springPosition={UDim2.fromScale(1.5, 0.5)}
			/>
			<SelectionLabel
				anchorPoint={new Vector2(0.5, 0)}
				position={UDim2.fromScale(0.5, PADDING)}
				springPosition={UDim2.fromScale(0.5, -0.5)}
			/>
		</frame>
	);
}
