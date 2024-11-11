import HeadUserDisplay from "./components/JumpTogether/HeadUserDisplay";
import Inventory from "./components/JumpTogether/Inventory";
import Shop from "./components/JumpTogether/Shop";
import { useRootSelector } from "./hooks";
import React from "@rbxts/react";
import { getCurrentPage } from "client/store/slices/Interface";
// import { CharacterCreation } from "./components/CharacterCreation";
// import { CharacterSelection } from "./components/CharacterSelection";
// import { ConfirmationPopUp } from "./components/ConfirmationPopUp";

export function App() {
	const currentPage = useRootSelector(getCurrentPage);

	return (
		<frame BackgroundTransparency={1} Size={UDim2.fromScale(1, 1)} key={"App"}>
			<HeadUserDisplay />
			{currentPage === "Shop" && <Shop />}
			{currentPage === "Inventory" && <Inventory />}
		</frame>
	);
}
