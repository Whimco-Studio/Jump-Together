//!optimize 2

import React from "@rbxts/react";

export default function PetLogBooklet({ children }: React.PropsWithChildren): React.Element {
	return (
		<frame
			AnchorPoint={new Vector2(0.5, 0.5)}
			BackgroundTransparency={1}
			Position={new UDim2(0.494, 0, 0.5, 0)}
			Size={new UDim2(0.761, 0, 0.936, 0)}
			ZIndex={0}
			key="Booklet"
		>
			<imagelabel
				AnchorPoint={new Vector2(0.5, 0.5)}
				BackgroundTransparency={1}
				Image="rbxassetid://16287852008"
				Position={new UDim2(0.5, 0, 0.5, 0)}
				Size={new UDim2(1, 0, 1, 0)}
				ZIndex={-1}
				key="Background"
			/>
			<frame
				BackgroundTransparency={1}
				Position={new UDim2(0.908, 0, 0.085, 0)}
				Size={new UDim2(0.19, 0, 0.782, 0)}
				ZIndex={-2}
				key="Tabs"
			>
				<uilistlayout Padding={new UDim(0.01, 0)} SortOrder={Enum.SortOrder.LayoutOrder} />
			</frame>
		</frame>
	);
}
