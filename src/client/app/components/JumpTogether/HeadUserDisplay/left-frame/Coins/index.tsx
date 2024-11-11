//!optimize 2

import CoinsIcon from "./coins-icon";
import React from "@rbxts/react";
import { Players } from "@rbxts/services";
import { useRootSelector } from "client/app/hooks";
import { Images } from "client/app/images";
import { FredokaOne } from "client/app/modules/fonts";
import UIStroke from "client/app/modules/scale-ui-stroke";
import UITextSize from "client/app/modules/scale-ui-textsize";
import { getScreenSize } from "client/app/modules/screen";
import { Theme } from "client/app/theme";
import { selectPlayerBalance } from "shared/store/players/players-selector";

export default function Coins({ children }: React.PropsWithChildren): React.Element {
	const screenSize = getScreenSize();
	const playerBalance = useRootSelector(selectPlayerBalance(tostring(Players.LocalPlayer.UserId), "Coins"));

	return (
		<frame
			BackgroundColor3={Color3.fromRGB(255, 255, 255)}
			BackgroundTransparency={1}
			BorderSizePixel={0}
			LayoutOrder={1}
			Position={new UDim2(0.14100000000000001, 0, 0.296, 0)}
			Size={new UDim2(2, 0, 0.1, 0)}
			key="Coins"
		>
			<imagelabel BackgroundTransparency={1} Image={Images.HeadUserDisplay.Label} Size={new UDim2(1, 0, 1, 0)} />
			<uiaspectratioconstraint AspectRatio={3.483} />
			<CoinsIcon />
			<textlabel
				AnchorPoint={new Vector2(0.5, 0.5)}
				BackgroundColor3={Color3.fromRGB(255, 0, 255)}
				BackgroundTransparency={1}
				Font={Enum.Font.FredokaOne}
				FontFace={FredokaOne}
				Position={new UDim2(0.65, 0, 0.5, 0)}
				Size={new UDim2(0.55, 0, 0.5, 0)}
				Text={tostring(playerBalance)}
				TextColor3={Color3.fromRGB(255, 255, 255)}
				TextScaled={false}
				TextSize={screenSize.width < 1000 ? UITextSize(30) : UITextSize(25)}
				TextWrapped={true}
				TextXAlignment={Enum.TextXAlignment.Left}
				key="CoinsPerMin"
			>
				<uistroke Color={Theme.Colors.Primary} Thickness={UIStroke(2)} />
			</textlabel>
			{/* <uicorner CornerRadius={new UDim(1, 0)} /> */}
			{/* <uistroke Color={Theme.Colors.Stokes.HeadUserDisplay} Thickness={UIStroke(3)} /> */}
		</frame>
	);
}