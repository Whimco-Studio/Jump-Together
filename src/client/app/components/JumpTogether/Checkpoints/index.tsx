//!optimize 2

import OptionFrame from "./option-frame";
import React from "@rbxts/react";
import { Players } from "@rbxts/services";
import { useRootProducer, useRootSelector } from "client/app/hooks";
import { selectPlayerCheckpoints } from "shared/store/players/players-selector";

export default function Checkpoints({ children }: React.PropsWithChildren): React.Element {
	const producer = useRootProducer();
	const checkpoints = useRootSelector(selectPlayerCheckpoints(tostring(Players.LocalPlayer.UserId)));

	return (
		<frame
			AnchorPoint={new Vector2(0.5, 0.5)}
			BackgroundTransparency={1}
			Position={new UDim2(0.5, 0, 0.5, 0)}
			Size={new UDim2(0.339, 0, 0.792, 0)}
			key="CheckpointsContainer"
		>
			<imagelabel
				BackgroundTransparency={1}
				Image="rbxassetid://125896903473565"
				Size={new UDim2(1, 0, 1, 0)}
				ZIndex={0}
				key="Background"
			/>
			<uiaspectratioconstraint AspectRatio={0.76} />
			<imagebutton
				AnchorPoint={new Vector2(0.5, 0.5)}
				BackgroundTransparency={1}
				Event={{
					MouseButton1Click: () => {
						producer.setPage("Main");
					},
				}}
				Image="rbxassetid://97481008098089"
				Position={new UDim2(0.876, 0, 0.092, 0)}
				Size={new UDim2(0.182, 0, 0.123, 0)}
				key="CloseButton"
			>
				<uiaspectratioconstraint AspectRatio={1.0190000000000001} />
			</imagebutton>
			<frame
				AnchorPoint={new Vector2(0.5, 0.5)}
				BackgroundColor3={Color3.fromRGB(255, 255, 255)}
				BorderSizePixel={0}
				Position={new UDim2(0.5, 0, 0.59, 0)}
				Size={new UDim2(0.872, 0, 0.789, 0)}
				key="Options"
			>
				<scrollingframe
					Active={true}
					AutomaticCanvasSize={Enum.AutomaticSize.Y}
					BackgroundColor3={Color3.fromRGB(255, 255, 255)}
					BorderSizePixel={0}
					ScrollBarImageColor3={Color3.fromRGB(0, 0, 0)}
					ScrollBarThickness={1}
					Size={new UDim2(1, 0, 1, 0)}
				>
					<uilistlayout
						HorizontalAlignment={Enum.HorizontalAlignment.Center}
						Padding={new UDim(0, 10)}
						SortOrder={Enum.SortOrder.LayoutOrder}
					/>
					<uipadding PaddingRight={new UDim(0.05, 0)} />
					<OptionFrame key="Mountains" name="Mountains" />

					{/* {checkpoints &&
						Object.entries(checkpoints).map(([key, value]) => {
							// return <OptionFrame key={key} name={key} value={value} />;
							return <OptionFrame key={key} />;
						})} */}
				</scrollingframe>
			</frame>
		</frame>
	);
}
