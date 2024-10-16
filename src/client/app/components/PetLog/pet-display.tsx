//!optimize 2

import React from "@rbxts/react";
import UIStroke from "client/app/modules/scale-ui-stroke";
import { Theme } from "client/app/theme";

export default function PetDisplay({ children }: React.PropsWithChildren): React.Element {
	return (
		<frame
			BackgroundTransparency={1}
			Position={new UDim2(0.15, 0, 0.082, 0)}
			Size={new UDim2(0.312, 0, 0.802, 0)}
			key="PetDisplay"
		>
			<imagelabel
				AnchorPoint={new Vector2(0.5, 0.5)}
				BackgroundTransparency={1}
				Image="rbxassetid://16176502285"
				Position={new UDim2(0.504, 0, 0.45, 0)}
				Size={new UDim2(0.591, 0, 0.40900000000000003, 0)}
				key="PetIcon"
			>
				<uiaspectratioconstraint />
			</imagelabel>
			<frame
				AnchorPoint={new Vector2(0.5, 0.5)}
				BackgroundTransparency={1}
				Position={new UDim2(0.502, 0, 0.15, 0)}
				Size={new UDim2(0.855, 0, 0.05, 0)}
				key="ProgressBarOverlay"
			>
				<uicorner CornerRadius={new UDim(1, 0)} />
				<uistroke Color={Color3.fromRGB(204, 232, 255)} Thickness={UIStroke(2.5)} />
			</frame>
			<textlabel
				BackgroundTransparency={1}
				Font={Enum.Font.FredokaOne}
				FontFace={Theme.FontFaces.FredokaOne}
				// FontFace={Font { Family = rbxasset://fonts/families/FredokaOne.json, Weight = Regular, Style = Normal }}
				Position={new UDim2(0.069, 0, 0.037, 0)}
				Size={new UDim2(0.47600000000000003, 0, 0.073, 0)}
				Text="TropPop"
				TextColor3={Color3.fromRGB(255, 255, 255)}
				TextScaled={true}
				TextSize={14}
				TextWrapped={true}
				TextXAlignment={Enum.TextXAlignment.Left}
				key="PetName"
			>
				<uistroke
					Color={Color3.fromRGB(149, 207, 254)}
					LineJoinMode={Enum.LineJoinMode.Miter}
					Thickness={UIStroke(2.5)}
				/>
				<uitextsizeconstraint MaxTextSize={32} />
			</textlabel>
			<textlabel
				AnchorPoint={new Vector2(1, 0)}
				BackgroundTransparency={1}
				Font={Enum.Font.FredokaOne}
				FontFace={Theme.FontFaces.FredokaOne}
				Position={new UDim2(0.936, 0, 0.037, 0)}
				Size={new UDim2(0.391, 0, 0.073, 0)}
				Text="Level 35"
				TextColor3={Color3.fromRGB(255, 255, 255)}
				TextScaled={true}
				TextSize={14}
				TextWrapped={true}
				TextXAlignment={Enum.TextXAlignment.Right}
				key="PetLevel"
			>
				<uistroke
					Color={Color3.fromRGB(149, 207, 254)}
					LineJoinMode={Enum.LineJoinMode.Miter}
					Thickness={UIStroke(2.5)}
				/>
				<uitextsizeconstraint MaxTextSize={32} />
			</textlabel>
		</frame>
	);
}
