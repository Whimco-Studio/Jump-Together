//!optimize 2

import React from "@rbxts/react";
import { useRootProducer } from "client/app/hooks";
import { FredokaOne } from "client/app/modules/fonts";
import UIStroke from "client/app/modules/scale-ui-stroke";
import { Events } from "client/network";

export interface OptionFrameProperties extends React.PropsWithChildren {
	name: string;
}

export default function OptionFrame(properties: OptionFrameProperties): React.Element {
	const producer = useRootProducer();

	return (
		<imagelabel
			BackgroundTransparency={1}
			Image="rbxassetid://78136827789513"
			Position={new UDim2(0, 14, 0, 0)}
			Size={new UDim2(1, 0, 1, 0)}
			key="OptionFrame"
		>
			<uiaspectratioconstraint AspectRatio={5.79} />
			<textlabel
				AnchorPoint={new Vector2(0, 0.5)}
				BackgroundTransparency={1}
				Font={Enum.Font.FredokaOne}
				FontFace={FredokaOne}
				Position={new UDim2(0.075, 0, 0.5, 0)}
				Size={new UDim2(0.52, 0, 0.537, 0)}
				Text={properties.name}
				TextColor3={Color3.fromRGB(255, 255, 255)}
				TextScaled={true}
				TextSize={14}
				TextWrapped={true}
				TextXAlignment={Enum.TextXAlignment.Left}
			>
				<uistroke
					Color={Color3.fromRGB(52, 97, 154)}
					LineJoinMode={Enum.LineJoinMode.Bevel}
					Thickness={UIStroke(4)}
				/>
			</textlabel>
			<imagebutton
				AnchorPoint={new Vector2(1, 0.5)}
				BackgroundTransparency={1}
				Event={{
					MouseButton1Click: () => {
						producer.setPage("Main");
						Events.TeleportToCheckpoint.fire(properties.name);
					},
				}}
				Image="rbxassetid://119744078946316"
				Position={new UDim2(0.925, 0, 0.5, 0)}
				Size={new UDim2(0.336, 0, 0.709, 0)}
				key="On"
			>
				<textlabel
					AnchorPoint={new Vector2(0.5, 0.5)}
					BackgroundTransparency={1}
					Font={Enum.Font.FredokaOne}
					FontFace={FredokaOne}
					Position={new UDim2(0.5, 0, 0.5, 0)}
					Size={new UDim2(0.7000000000000001, 0, 0.7000000000000001, 0)}
					Text="Go"
					TextColor3={Color3.fromRGB(255, 255, 255)}
					TextScaled={true}
					TextSize={14}
					TextWrapped={true}
				>
					<uistroke
						Color={Color3.fromRGB(29, 127, 27)}
						LineJoinMode={Enum.LineJoinMode.Bevel}
						Thickness={UIStroke(4)}
					/>
				</textlabel>
			</imagebutton>
		</imagelabel>
	);
}
