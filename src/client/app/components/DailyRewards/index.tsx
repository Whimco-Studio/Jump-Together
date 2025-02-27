//!optimize 2

import AnimatedImageButton from "../base/animated-image-button";
import DayItem from "./day-item";
import { useMotion } from "@rbxts/pretty-react-hooks";
import React, { useEffect, useState } from "@rbxts/react";
import { Players } from "@rbxts/services";
import { useRootSelector } from "client/app/hooks/root-hook";
import { useRootProducer } from "client/app/hooks/root-hook";
import { FredokaOne } from "client/app/modules/fonts";
import UIStroke from "client/app/modules/scale-ui-stroke";
import { getCurrentPage } from "client/store/slices/Interface/interface-selectors";
import { selectPlayerDailyRewards } from "shared/store/players/players-selector";

const DEFAULT_SIZE = new UDim2(0.65, 0, 0.65, 0);

const DAILY_REWARDS_STATE_POSITIONS = {
	ACTIVE: new UDim2(0.5, 0, 0.5, 0),
	DEFAULT: new UDim2(0.5, 0, 0.4, 0),
};

const TWEEN_SETTINGS: {
	readonly delayTime?: number;
	readonly direction?: Enum.EasingDirection;
	readonly repeatCount?: number;
	readonly reverses?: boolean;
	readonly style?: Enum.EasingStyle;
	readonly time?: number;
} = {
	direction: Enum.EasingDirection.InOut,
	style: Enum.EasingStyle.Elastic,
	time: 2,
};

const TRANSITION_TIME = 0.5;

export default function DailyRewards({ children }: React.PropsWithChildren): React.Element {
	const producer = useRootProducer();
	const currentPage = useRootSelector(getCurrentPage);

	const [position, positionMotion] = useMotion(DAILY_REWARDS_STATE_POSITIONS.DEFAULT);
	const [isActive, setIsActive] = useState(false);
	const [transparency, transparencyMotion] = useMotion(1);
	const [visible, setVisible] = useState(currentPage === "Rewards");

	const dailyRewards = useRootSelector(selectPlayerDailyRewards(tostring(Players.LocalPlayer.UserId)));

	useEffect(() => {
		const disconnection = positionMotion.onComplete(() => {
			const page = getCurrentPage(producer.getState());
			if (page === "Rewards") {
				setIsActive(true);
			} else {
				setIsActive(false);
			}
			disconnection();
		});
	}, []);

	useEffect(() => {
		if (currentPage === "Rewards") {
			setVisible(true);
			positionMotion.tween(DAILY_REWARDS_STATE_POSITIONS.ACTIVE, {
				...TWEEN_SETTINGS,
				style: Enum.EasingStyle.Back,
				time: TRANSITION_TIME,
			});
			transparencyMotion.tween(0, {
				...TWEEN_SETTINGS,
				style: Enum.EasingStyle.Linear,
				time: TRANSITION_TIME,
			});

			print("Test");
		} else {
			positionMotion.tween(DAILY_REWARDS_STATE_POSITIONS.DEFAULT, {
				...TWEEN_SETTINGS,
				style: Enum.EasingStyle.Back,
				time: TRANSITION_TIME,
			});
			transparencyMotion.tween(1, {
				...TWEEN_SETTINGS,
				style: Enum.EasingStyle.Linear,
				time: TRANSITION_TIME,
			});
		}
	}, [currentPage]);

	useEffect(() => {
		const disconnection = transparencyMotion.onComplete(() => {
			if (math.floor(transparency.getValue() + 0.5) === 0) {
				setVisible(true);
			} else {
				setVisible(false);
			}
			disconnection();
		});
	}, [currentPage]);
	return (
		<frame
			AnchorPoint={new Vector2(0.5, 0.5)}
			BackgroundTransparency={1}
			Position={position}
			Size={new UDim2(0.63, 0, 0.855, 0)}
			Visible={visible}
			key="DailyRewards"
		>
			<uiaspectratioconstraint AspectRatio={1.312} />
			<imagelabel
				BackgroundTransparency={1}
				Image="rbxassetid://88597113128511"
				ImageTransparency={transparency}
				Size={new UDim2(1, 0, 1, 0)}
				key="BackgroundContainer"
			/>
			<frame
				BackgroundTransparency={1}
				LayoutOrder={1}
				Position={new UDim2(0.884, 0, 0.02, 0)}
				Size={new UDim2(0.096, 0, 0.137, 0)}
				key="Close"
			>
				<uiaspectratioconstraint AspectRatio={0.919} />
				<AnimatedImageButton
					AnchorPoint={new Vector2(0.5, 0.5)}
					BackgroundTransparency={1}
					Event={{
						MouseButton1Click: () => {
							if (transparency.getValue() === 0) {
								producer.setPage("Home");
							}
						},
					}}
					Image="rbxassetid://130599319866947"
					ImageTransparency={transparency}
					LayoutOrder={1}
					Position={new UDim2(0.5, 0, 0.5, 0)}
					Size={new UDim2(1, 0, 1, 0)}
					key="Close"
				/>

				<uiflexitem ItemLineAlignment={Enum.ItemLineAlignment.End} />
			</frame>
			<imagelabel
				AnchorPoint={new Vector2(1, 1)}
				BackgroundTransparency={1}
				Image="rbxassetid://111705152707660"
				ImageTransparency={transparency}
				Position={new UDim2(0.979, 0, 0.9450000000000001, 0)}
				Size={new UDim2(0.213, 0, 0.131, 0)}
				key="TimeContainer"
			>
				<uiaspectratioconstraint AspectRatio={2.128} />
				<frame
					BackgroundTransparency={1}
					Position={new UDim2(0.077, 0, 0.17400000000000002, 0)}
					Size={new UDim2(0.842, 0, 0.64, 0)}
				>
					<uiaspectratioconstraint AspectRatio={2.8000000000000003} />
					<AnimatedImageButton
						AnchorPoint={new Vector2(0.5, 0.5)}
						BackgroundTransparency={1}
						Image="rbxassetid://71526416922588"
						ImageTransparency={transparency}
						Position={new UDim2(0.5, 0, 0.5, 0)}
						Size={new UDim2(1, 0, 1, 0)}
					>
						<uiaspectratioconstraint AspectRatio={2.8000000000000003} />
					</AnimatedImageButton>
				</frame>
				<textlabel
					BackgroundTransparency={1}
					Font={Enum.Font.FredokaOne}
					FontFace={FredokaOne}
					Position={new UDim2(0.005, 0, -1.07, 0)}
					RichText={true}
					Size={new UDim2(1, 0, 0.998, 0)}
					Text={`Time:<br />${"00:52:13"}`}
					TextColor3={Color3.fromRGB(255, 255, 255)}
					TextScaled={true}
					TextSize={14}
					TextTransparency={transparency}
					TextWrapped={true}
					ZIndex={2}
					key="DayLabel"
				>
					<uistroke Thickness={UIStroke(2)} Transparency={transparency} />
				</textlabel>
			</imagelabel>
			<frame
				BackgroundTransparency={1}
				Position={new UDim2(0.023, 0, 0.17500000000000002, 0)}
				Size={new UDim2(0.955, 0, 0.777, 0)}
				key="DaysContainer"
			>
				<uilistlayout
					FillDirection={Enum.FillDirection.Horizontal}
					HorizontalFlex={Enum.UIFlexAlignment.Fill}
					Padding={new UDim(0, 30)}
					SortOrder={Enum.SortOrder.LayoutOrder}
					VerticalAlignment={Enum.VerticalAlignment.Bottom}
					Wraps={true}
				/>

				{dailyRewards?.map((day) => (
					<DayItem
						Amount={day.reward.quantity}
						Day={day.day}
						Item={day.reward.type}
						Transparency={transparency}
						key={day.day}
					/>
				))}
			</frame>
		</frame>
	);
}
