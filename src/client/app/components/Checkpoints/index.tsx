//!optimize 2

import AnimatedImageButton from "../base/animated-image-button";
import DayItem from "./day-item";
import { Object } from "@rbxts/luau-polyfill";
import { useMotion } from "@rbxts/pretty-react-hooks";
import React, { useEffect, useState } from "@rbxts/react";
import { Players } from "@rbxts/services";
import { useRootSelector } from "client/app/hooks/root-hook";
import { useRootProducer } from "client/app/hooks/root-hook";
import { getCurrentPage } from "client/store/slices/Interface/interface-selectors";
import { selectPlayerCheckpoints } from "shared/store/players/players-selector";

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

export default function Checkpoints({ children }: React.PropsWithChildren): React.Element {
	const producer = useRootProducer();
	const currentPage = useRootSelector(getCurrentPage);

	const [position, positionMotion] = useMotion(DAILY_REWARDS_STATE_POSITIONS.DEFAULT);
	const [isActive, setIsActive] = useState(false);
	const [transparency, transparencyMotion] = useMotion(1);
	const [visible, setVisible] = useState(currentPage === "Checkpoints");

	const checkpoints = useRootSelector(selectPlayerCheckpoints(tostring(Players.LocalPlayer.UserId)));

	useEffect(() => {
		const disconnection = positionMotion.onComplete(() => {
			const page = getCurrentPage(producer.getState());
			if (page === "Checkpoints") {
				setIsActive(true);
			} else {
				setIsActive(false);
			}
			disconnection();
		});
	}, []);

	useEffect(() => {
		if (currentPage === "Checkpoints") {
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
			print(checkpoints);
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
			Size={new UDim2(0.404, 0, 0.71, 0)}
			Visible={visible}
			key="Checkpoints"
		>
			<imagelabel
				BackgroundTransparency={1}
				Image="rbxassetid://72439826473115"
				ImageTransparency={transparency}
				Size={new UDim2(1, 0, 1, 0)}
				key="Background"
			/>
			<frame
				BackgroundTransparency={1}
				LayoutOrder={1}
				Position={new UDim2(0.8150000000000001, 0, 0.02, 0)}
				Size={new UDim2(0.152, 0, 0.168, 0)}
				key="Close"
			>
				<uiaspectratioconstraint AspectRatio={0.919} />
				<uiflexitem ItemLineAlignment={Enum.ItemLineAlignment.End} />
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
			</frame>
			<frame
				BackgroundTransparency={1}
				Position={new UDim2(0.031, 0, 0.23800000000000002, 0)}
				Size={new UDim2(0.935, 0, 0.742, 0)}
			>
				<scrollingframe
					Active={true}
					AutomaticCanvasSize={Enum.AutomaticSize.Y}
					BackgroundTransparency={1}
					CanvasSize={new UDim2(0, 0, 0, 0)}
					ClipsDescendants={true}
					ScrollBarThickness={1}
					Size={new UDim2(1, 0, 1, 0)}
				>
					<uipadding PaddingRight={new UDim(0, 10)} PaddingTop={new UDim(0, 10)} />
					<uilistlayout Padding={new UDim(0, 10)} SortOrder={Enum.SortOrder.LayoutOrder} />
					{checkpoints &&
						Object.entries(checkpoints).map(([checkpoint, isUnlocked]) => {
							print(checkpoint, isUnlocked);
							return <DayItem Location={checkpoint} Transparency={transparency} key={checkpoint} />;
						})}
				</scrollingframe>
			</frame>
			<uiaspectratioconstraint AspectRatio={1.018} />
		</frame>
	);
}
