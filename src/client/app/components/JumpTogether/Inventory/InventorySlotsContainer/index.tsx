//!optimize 2

import { Object } from "@rbxts/luau-polyfill";
import React, { useEffect, useState } from "@rbxts/react";
import { Players } from "@rbxts/services";
import { useRootSelector } from "client/app/hooks";
import { getQuirkymals, getSkins } from "client/modules/inventory-utilities";
import { getCurrentTab } from "client/store/slices/Interface";
import { QuirkymalTuning } from "shared/modules/tuning/quirkymals-tuning";
import { selectPlayerInventory } from "shared/store/players/players-selector";

export default function InventorySlotsContainer({ children }: React.PropsWithChildren): React.Element {
	const currentTab = useRootSelector(getCurrentTab);

	const playerData = useRootSelector(selectPlayerInventory(tostring(Players.LocalPlayer.UserId)));
	const [filteredQuirkymals, setFilteredQuirkymals] = useState<string[]>([]);
	const [filteredSkins, setFilteredSkins] = useState<string[]>([]);

	useEffect(() => {
		setFilteredQuirkymals(Object.keys(QuirkymalTuning).filter((quirkymal) => !playerData?.quirkymals[quirkymal]));
		setFilteredSkins(Object.keys(QuirkymalTuning).filter((quirkymal) => !playerData?.skins[quirkymal]));
	}, [playerData]);

	useEffect(() => {
		print(currentTab);
	}, [currentTab]);
	return (
		<frame
			BackgroundTransparency={1}
			Position={new UDim2(0.028, 0, 0.333, 0)}
			Size={new UDim2(0.636, 0, 0.618, 0)}
			key="InventorySlots"
		>
			<scrollingframe
				Active={true}
				AutomaticCanvasSize={Enum.AutomaticSize.Y}
				BackgroundTransparency={1}
				ScrollBarImageColor3={Color3.fromRGB(0, 0, 0)}
				ScrollBarThickness={5}
				Size={new UDim2(1, 0, 1, 0)}
			>
				<uilistlayout
					FillDirection={Enum.FillDirection.Horizontal}
					HorizontalAlignment={Enum.HorizontalAlignment.Center}
					Padding={new UDim(0, 10)}
					SortOrder={Enum.SortOrder.LayoutOrder}
					Wraps={true}
				/>
				{currentTab === "Quirkymals" ? getQuirkymals(filteredQuirkymals) : {}}
				{currentTab === "Skins" ? getSkins(playerData?.quirkymal ?? "Dove", filteredSkins) : {}}
			</scrollingframe>
		</frame>
	);
}
