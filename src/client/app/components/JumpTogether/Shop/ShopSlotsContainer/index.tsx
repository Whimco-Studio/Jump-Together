//!optimize 2

import { Object } from "@rbxts/luau-polyfill";
import React from "@rbxts/react";
import { Players } from "@rbxts/services";
import { useRootSelector } from "client/app/hooks";
import { getQuirkymals, getSkins } from "client/modules/shop-utilities";
import { selectPlayerInventory } from "shared/store/players/players-selector";

export default function ShopSlotsContainer({ children }: React.PropsWithChildren): React.Element {
	const currentTab = useRootSelector((state) => state.interface.Tab);

	const playerData = useRootSelector(selectPlayerInventory(tostring(Players.LocalPlayer.UserId)));

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
				{currentTab === "Quirkymals" ? getQuirkymals(Object.keys(playerData?.quirkymals ?? {})) : {}}
				{currentTab === "Skins"
					? getSkins(playerData?.quirkymal ?? "Dove", Object.keys(playerData?.skins ?? {}))
					: {}}
			</scrollingframe>
		</frame>
	);
}
