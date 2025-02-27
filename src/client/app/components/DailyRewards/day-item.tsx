//!optimize 2

import React from "@rbxts/react";
import { FredokaOne } from "client/app/modules/fonts";
import UIStroke from "client/app/modules/scale-ui-stroke";

export interface DayItemProperties extends React.PropsWithChildren {
	Amount: number;
	Day: number;
	Item: string;
	Transparency: React.Binding<number>;
}

export default function DayItem(properties: DayItemProperties): React.Element {
	return (
		<frame
			BackgroundTransparency={1}
			LayoutOrder={properties.Day}
			Size={new UDim2(0.217, 0, 0.439, 0)}
			key="DayItem"
		>
			<imagelabel
				AnchorPoint={new Vector2(0.5, 1)}
				BackgroundTransparency={1}
				Image="rbxassetid://136737008850471"
				ImageTransparency={properties.Transparency}
				Position={new UDim2(0.5, 0, 1, 0)}
				Size={new UDim2(1, 0, 1, 0)}
				key="RarityBackground"
			>
				<uiaspectratioconstraint AspectRatio={1} />
			</imagelabel>
			<uiaspectratioconstraint AspectRatio={0.795} />
			<textlabel
				BackgroundTransparency={1}
				Font={Enum.Font.FredokaOne}
				FontFace={FredokaOne}
				RichText={true}
				Size={new UDim2(1, 0, 0.171, 0)}
				Text={`Day ${properties.Day}`}
				TextColor3={Color3.fromRGB(255, 255, 255)}
				TextScaled={true}
				TextSize={14}
				TextTransparency={properties.Transparency}
				TextWrapped={true}
				ZIndex={2}
				key="DayLabel"
			>
				<uistroke Thickness={UIStroke(2)} Transparency={properties.Transparency} />
			</textlabel>
			<textlabel
				AnchorPoint={new Vector2(0.5, 0)}
				BackgroundTransparency={1}
				Font={Enum.Font.FredokaOne}
				FontFace={FredokaOne}
				Position={new UDim2(0.5, 0, 0.263, 0)}
				RichText={true}
				Size={new UDim2(0.8, 0, 0.171, 0)}
				Text={`${properties.Amount}x ${properties.Item}`}
				TextColor3={Color3.fromRGB(255, 255, 255)}
				TextScaled={true}
				TextSize={14}
				TextTransparency={properties.Transparency}
				TextWrapped={true}
				ZIndex={2}
				key="Amount"
			/>
			<imagelabel
				BackgroundTransparency={1}
				Image="rbxassetid://120639004360995"
				ImageTransparency={properties.Transparency}
				Position={new UDim2(0.219, 0, 0.46900000000000003, 0)}
				Size={new UDim2(0.562, 0, 0.446, 0)}
			>
				<uiaspectratioconstraint />
			</imagelabel>
		</frame>
	);
}
