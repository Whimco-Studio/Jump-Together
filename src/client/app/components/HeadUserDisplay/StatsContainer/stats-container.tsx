//!optimize 2

import { useMotion } from "@rbxts/pretty-react-hooks";
import React, { useEffect, useState } from "@rbxts/react";
import { Players } from "@rbxts/services";
import { useRootSelector } from "client/app/hooks";
import { FredokaOne } from "client/app/modules/fonts";
import UIStroke from "client/app/modules/scale-ui-stroke";
import { getIsMobile } from "client/store/slices/Interface";
import { getDistance, getLastMaxDistance } from "client/store/slices/distance";
import { selectPlayerBalance } from "shared/store/players/players-selector";

const SPRING_SETTINGS = {
	friction: 12,
	tension: 180,
};

const ROTATION_STATES = {
	DECREASING: 180,
	INCREASING: 0,
};

const formatBalance = (balance: number) => {
	const length = tostring(balance).size();
	const defaultString = "00000";

	const formattedString = `<font transparency="0.2">${defaultString.sub(0, 5 - length)}</font><stroke color="#000000" joins="round" thickness="${UIStroke(2)}" transparency="0">${balance}</stroke>`;

	return formattedString;
};

export default function StatsContainer({ children }: React.PropsWithChildren): React.Element {
	const distance = useRootSelector(getDistance);
	const lastMaxDistance = useRootSelector(getLastMaxDistance);
	// const coins = useRootSelector(getCoins);

	const [increasing, setIncreasing] = useState(true);
	const [positiveRotation, positiveRotationMotion] = useMotion(ROTATION_STATES.INCREASING);
	const [negativeRotation, negativeRotationMotion] = useMotion(ROTATION_STATES.DECREASING);
	const [positiveTransparency, positiveTransparencyMotion] = useMotion(0);
	const [negativeTransparency, negativeTransparencyMotion] = useMotion(1);

	const playerBalance = useRootSelector(selectPlayerBalance(tostring(Players.LocalPlayer.UserId), "Coins"));
	const [formattedBalance, setFormattedBalance] = useState(formatBalance(playerBalance ?? 0));

	const isMobile = useRootSelector(getIsMobile);

	useEffect(() => {
		setFormattedBalance(formatBalance(playerBalance ?? 0));
	}, [playerBalance]);

	useEffect(() => {
		if (distance >= lastMaxDistance) {
			setIncreasing(true);
		} else {
			setIncreasing(false);
		}
	}, [distance]);

	useEffect(() => {
		if (increasing) {
			// Rotation
			positiveRotationMotion.spring(ROTATION_STATES.INCREASING, SPRING_SETTINGS);
			negativeRotationMotion.spring(ROTATION_STATES.DECREASING, SPRING_SETTINGS);

			// Transparency
			positiveTransparencyMotion.spring(0, SPRING_SETTINGS);
			negativeTransparencyMotion.spring(1, SPRING_SETTINGS);

			//
		} else {
			// Rotation
			positiveRotationMotion.spring(ROTATION_STATES.DECREASING, SPRING_SETTINGS);
			negativeRotationMotion.spring(ROTATION_STATES.INCREASING, SPRING_SETTINGS);

			// Transparency
			positiveTransparencyMotion.spring(1, SPRING_SETTINGS);
			negativeTransparencyMotion.spring(0, SPRING_SETTINGS);
		}
	}, [increasing]);

	return (
		<frame
			AnchorPoint={new Vector2(isMobile ? 1 : 0.5, 0)}
			BackgroundTransparency={1}
			Position={isMobile ? new UDim2(1, 0, 0.03, 0) : new UDim2(0.5, 0, 0.05, 0)}
			// Size={UDim2.fromOffset(175, 57)}
			Size={UDim2.fromOffset(130, 130)}
			// Size={isMobile ? UDim2.fromOffset(30, 30) : UDim2.fromScale(0.127, 0.074)}
			key="Stats"
		>
			<uilistlayout
				FillDirection={Enum.FillDirection.Horizontal}
				HorizontalAlignment={isMobile ? Enum.HorizontalAlignment.Right : Enum.HorizontalAlignment.Center}
				Padding={new UDim(0, 10)}
				SortOrder={Enum.SortOrder.LayoutOrder}
			/>
			<uiaspectratioconstraint AspectRatio={3.043} />
			<imagelabel
				BackgroundTransparency={1}
				Image="rbxassetid://127348282329691"
				// Image="rbxassetid://119175113181660"
				LayoutOrder={1}
				Size={new UDim2(1, 0, 1, 0)}
				key="NumbersContainer"
			>
				<textlabel
					AnchorPoint={new Vector2(0.5, 0.5)}
					BackgroundTransparency={1}
					Font={Enum.Font.FredokaOne}
					FontFace={FredokaOne}
					LayoutOrder={1}
					Position={new UDim2(0.5, 0, 0.5, 0)}
					RichText={true}
					Size={new UDim2(0.675, 0, 0.6, 0)}
					Text={`<stroke color="#000000" joins="round" thickness="${UIStroke(2)}" transparency="0">${distance} M</stroke>`}
					TextColor3={Color3.fromRGB(255, 255, 255)}
					TextScaled={true}
					TextSize={14}
					TextWrapped={true}
				/>
			</imagelabel>
			<imagelabel
				BackgroundTransparency={1}
				Image="rbxassetid://127348282329691"
				LayoutOrder={2}
				Size={new UDim2(1, 0, 1, 0)}
				key="CoinsContainer"
			>
				<textlabel
					AnchorPoint={new Vector2(0.5, 0.5)}
					BackgroundTransparency={1}
					Font={Enum.Font.FredokaOne}
					FontFace={FredokaOne}
					LayoutOrder={1}
					Position={new UDim2(0.556, 0, 0.5, 0)}
					RichText={true}
					Size={new UDim2(0.612, 0, 0.6, 0)}
					Text={formattedBalance}
					TextColor3={Color3.fromRGB(255, 255, 255)}
					TextScaled={true}
					TextSize={14}
					TextWrapped={true}
				/>
				<imagelabel
					BackgroundTransparency={1}
					Image="rbxassetid://90745408566933"
					Size={new UDim2(0.5, 0, 0.5, 0)}
				>
					<uiaspectratioconstraint AspectRatio={0.871} />
				</imagelabel>
				<uilistlayout
					FillDirection={Enum.FillDirection.Horizontal}
					HorizontalAlignment={Enum.HorizontalAlignment.Center}
					SortOrder={Enum.SortOrder.LayoutOrder}
					VerticalAlignment={Enum.VerticalAlignment.Center}
				/>
			</imagelabel>

			<frame BackgroundTransparency={1} Size={new UDim2(1, 0, 1, 0)} key="Direction">
				<uiaspectratioconstraint />
				<imagelabel
					BackgroundTransparency={1}
					Image="rbxassetid://129008648463138"
					ImageTransparency={positiveTransparency}
					Rotation={positiveRotation}
					Size={new UDim2(1, 0, 1, 0)}
					key="Positive"
				/>
				<imagelabel
					BackgroundTransparency={1}
					Image="rbxassetid://134329979561314"
					ImageTransparency={negativeTransparency}
					Rotation={negativeRotation}
					Size={new UDim2(1, 0, 1, 0)}
					ZIndex={0}
					key="Negative"
				/>
				<imagelabel
					AnchorPoint={new Vector2(0.5, 0.5)}
					BackgroundTransparency={1}
					Image="rbxassetid://101708384147366"
					Position={new UDim2(0.5, 0, 0.5, 0)}
					Rotation={positiveRotation}
					Size={new UDim2(0.5, 0, 0.5, 0)}
					ZIndex={2}
					key="Arrow"
				>
					<uiaspectratioconstraint AspectRatio={0.861} />
				</imagelabel>
			</frame>
		</frame>
	);
}
