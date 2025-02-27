import Checkpoints from "./components/Checkpoints";
import DailyRewards from "./components/DailyRewards";
import HeadUserDisplay from "./components/HeadUserDisplay";
import Inventory from "./components/Inventory";
import Shop from "./components/Shop";
import TopBar from "./components/TopBar";
import { useRootSelector } from "./hooks";
import React, { useEffect } from "@rbxts/react";
import { StarterGui } from "@rbxts/services";
import { getCurrentPage } from "client/store/slices/Interface";
// import { CharacterCreation } from "./components/CharacterCreation";
// import { CharacterSelection } from "./components/CharacterSelection";
// import { ConfirmationPopUp } from "./components/ConfirmationPopUp";

export function App() {
	const currentPage = useRootSelector(getCurrentPage);

	useEffect(() => {
		StarterGui.SetCoreGuiEnabled(Enum.CoreGuiType.PlayerList, currentPage === "Home");
	}, [currentPage]);

	return (
		<frame BackgroundTransparency={1} Size={UDim2.fromScale(1, 1)} key={"App"}>
			<TopBar />
			<HeadUserDisplay />
			<Shop />
			<Inventory />
			<DailyRewards />
			<Checkpoints />
		</frame>
	);
}
