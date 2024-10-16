import React, { useState } from "@rbxts/react";
import { CharacterCreation } from "./components/CharacterCreation";
import { CharacterSelection } from "./components/CharacterSelection";
import { ConfirmationPopUp } from "./components/ConfirmationPopUp";

export function App() {
	return (
		<frame key={"App"} Size={UDim2.fromScale(1, 1)} BackgroundTransparency={1}>
			<ConfirmationPopUp />
			<CharacterSelection />
			<CharacterCreation />
		</frame>
	);
}
