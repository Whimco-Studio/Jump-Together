//!optimize 2

import IncrementContainer from "./increment-container";
import React from "@rbxts/react";
import { useRootSelector } from "client/app/hooks";
import { Images } from "client/app/images";
import { FredokaOne } from "client/app/modules/fonts";
import UIStroke from "client/app/modules/scale-ui-stroke";
import UITextSize from "client/app/modules/scale-ui-textsize";
import { getScreenSize } from "client/app/modules/screen";
import { Theme } from "client/app/theme";
import { getDistance } from "client/store/slices/distance";

const Scale = 1.5;
const ContainerScale = 0.75;

export default function HeightFrame({ children }: React.PropsWithChildren): React.Element {
	const screenSize = getScreenSize();

	const distance = useRootSelector(getDistance);

	return (
		<frame
			AnchorPoint={new Vector2(0.5, 0)}
			BackgroundColor3={Color3.fromRGB(255, 0, 255)}
			BackgroundTransparency={0.5}
			BorderSizePixel={0}
			Position={new UDim2(0.51, 0, 0.03, 0)}
			Size={new UDim2(0.083, 0, 0, 40)}
			key="HeightFrame"
		>
			<imagelabel
				AnchorPoint={new Vector2(0.5, 0.5)}
				BackgroundTransparency={1}
				Image={Images.HeadUserDisplay.Label}
				Position={new UDim2(0.5, 0, 0.6, 0)}
				Size={new UDim2(Scale, 0, Scale, 0)}
			>
				<frame
					AnchorPoint={new Vector2(0.5, 0.5)}
					BackgroundTransparency={1}
					Position={UDim2.fromScale(0.5, 0.45)}
					Size={new UDim2(ContainerScale, 0, ContainerScale, 0)}
				>
					<textlabel
						AnchorPoint={new Vector2(0.5, 0.5)}
						BackgroundTransparency={1}
						Font={Enum.Font.FredokaOne}
						FontFace={FredokaOne}
						Position={new UDim2(0.5, 0, 0.5, 0)}
						Size={new UDim2(0.75, 0, 0.9, 0)}
						Text={`${distance}M`}
						TextColor3={Color3.fromRGB(255, 255, 255)}
						TextScaled={true}
						TextSize={screenSize.width < 1000 ? UITextSize(24) : UITextSize(20)}
						TextWrapped={true}
						key="Height"
					>
						<uistroke Color={Theme.Colors.Primary} Thickness={UIStroke(2)} />
					</textlabel>

					<IncrementContainer />
				</frame>
			</imagelabel>
			<uiaspectratioconstraint AspectRatio={3.483} />
		</frame>
	);
}
