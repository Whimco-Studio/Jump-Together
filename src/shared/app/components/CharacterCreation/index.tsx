import { CharacterCreationPanel } from "./CharacterCreationPanel";
import { CharacterCreationExit } from "./character-creation-exit";
import { FinishedEditButton } from "./finished-edit-button";
import React, { useEffect, useState } from "@rbxts/react";
import { useRootProducer, useRootSelector } from "shared/app/hooks/root-hook";

const PADDING = 0.05;

export function CharacterCreation() {
	const producer = useRootProducer();
	const currentPage = useRootSelector((state) => state.interface.Page);

	const [frameVisible, setFrameVisible] = useState(currentPage === "CharacterCreation");

	useEffect(() => {
		if (currentPage === "CharacterCreation") {
			setFrameVisible(true);
		} else {
			task.delay(0.5, () => {
				setFrameVisible(false);
			});
		}
	}, [currentPage]);

	return (
		<frame BackgroundTransparency={1} Size={UDim2.fromScale(1, 1)} Visible={frameVisible}>
			<FinishedEditButton
				anchorPoint={new Vector2(0.5, 1)}
				onClick={() => {
					producer.setPage("HeadUserDisplay");
					producer.setConfirmationCancelCallback(() => {
						producer.setPage("CharacterCreation");
					});

					producer.setConfirmationActive(true);
				}}
				position={UDim2.fromScale(0.5, 1 - PADDING)}
				springPosition={UDim2.fromScale(0.5, 1.5)}
			/>
			<CharacterCreationPanel
				anchorPoint={new Vector2(0, 0.5)}
				position={UDim2.fromScale(PADDING, 0.5)}
				springPosition={UDim2.fromScale(-0.5, 0.5)}
			/>

			<CharacterCreationExit
				onClick={() => {
					producer.setPage("CharacterSelection");
				}}
			/>
		</frame>
	);
}
