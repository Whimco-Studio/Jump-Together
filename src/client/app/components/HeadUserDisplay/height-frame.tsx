//!optimize 2

import IncrementContainer from "./increment-container";
import React from "@rbxts/react";
import { FredokaOne } from "client/app/modules/fonts";
import UIStroke from "client/app/modules/scale-ui-stroke";

export default function HeightFrame({ children }: React.PropsWithChildren): React.Element {
	return (
		<frame
			AnchorPoint={new Vector2(0.5, 0)}
			BackgroundColor3={Color3.fromRGB(255, 255, 255)}
			BorderSizePixel={0}
			Position={new UDim2(0.51, 0, 0.03, 0)}
			Size={new UDim2(0.083, 0, 0, 40)}
			key="HeightFrame"
		>
			<uiaspectratioconstraint AspectRatio={3.483} />
			<uicorner CornerRadius={new UDim(1, 0)} />
			<uistroke Color={Color3.fromRGB(52, 97, 154)} Thickness={UIStroke(3)} />
			<textlabel
				AnchorPoint={new Vector2(0.5, 1)}
				BackgroundTransparency={1}
				Font={Enum.Font.FredokaOne}
				FontFace={FredokaOne}
				Position={new UDim2(0.5, 0, 1, 0)}
				Size={new UDim2(0.75, 0, 1, 0)}
				Text="10000M"
				TextColor3={Color3.fromRGB(255, 255, 255)}
				TextSize={24}
				TextWrapped={true}
				key="Height"
			>
				<uistroke Color={Color3.fromRGB(52, 97, 154)} Thickness={UIStroke(3)} />
			</textlabel>

			<IncrementContainer />
		</frame>
	);
}
