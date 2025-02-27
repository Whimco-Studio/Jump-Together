//!optimize 2

import AnimatedImageButton from "../base/animated-image-button";
import React from "@rbxts/react";
import { FredokaOne } from "client/app/modules/fonts";
import UIStroke from "client/app/modules/scale-ui-stroke";
import { Events } from "client/network";

export interface DayItemProperties extends React.PropsWithChildren {
	Location: string;
	Transparency: React.Binding<number>;
}

export default function DayItem(properties: DayItemProperties): React.Element {
	return (
		<frame BackgroundTransparency={1} Size={new UDim2(1, 0, 1, 0)} Visible={true} key="MapLocationContainer">
			<imagelabel
				BackgroundTransparency={1}
				Image="rbxassetid://75615698460034"
				ImageTransparency={properties.Transparency}
				Position={new UDim2(-0.004, 0, 0.019, 0)}
				Size={new UDim2(0.684, 0, 0.962, 0)}
				key="LocationNameContainer"
			>
				<uiaspectratioconstraint AspectRatio={5.029} />
				<textlabel
					AnchorPoint={new Vector2(0.5, 0.5)}
					BackgroundTransparency={1}
					Font={Enum.Font.FredokaOne}
					FontFace={FredokaOne}
					Position={new UDim2(0.5, 0, 0.5, 0)}
					Size={new UDim2(0.9460000000000001, 0, 0.712, 0)}
					Text={properties.Location}
					TextColor3={Color3.fromRGB(255, 255, 255)}
					TextScaled={true}
					TextSize={14}
					TextTransparency={properties.Transparency}
					TextWrapped={true}
				>
					<uistroke Thickness={UIStroke(2)} Transparency={properties.Transparency} />
				</textlabel>
			</imagelabel>
			<frame
				BackgroundTransparency={1}
				LayoutOrder={1}
				Position={new UDim2(0.711, 0, 0, 0)}
				Size={new UDim2(0.297, 0, 1, 0)}
				key="GoButton"
			>
				<AnimatedImageButton
					AnchorPoint={new Vector2(0.5, 0.5)}
					BackgroundTransparency={1}
					Event={{
						MouseButton1Click: () => {
							Events.TeleportToCheckpoint(properties.Location);
						},
					}}
					Image="rbxassetid://77047041405939"
					ImageTransparency={properties.Transparency}
					LayoutOrder={1}
					Position={new UDim2(0.5, 0, 0.5, 0)}
					Size={new UDim2(1, 0, 1, 0)}
					key="GoButton"
				/>
			</frame>
			<uilistlayout
				FillDirection={Enum.FillDirection.Horizontal}
				HorizontalAlignment={Enum.HorizontalAlignment.Center}
				HorizontalFlex={Enum.UIFlexAlignment.SpaceBetween}
				SortOrder={Enum.SortOrder.LayoutOrder}
				VerticalAlignment={Enum.VerticalAlignment.Center}
			/>
			<uiaspectratioconstraint AspectRatio={7.0680000000000005} />
		</frame>
	);
}
