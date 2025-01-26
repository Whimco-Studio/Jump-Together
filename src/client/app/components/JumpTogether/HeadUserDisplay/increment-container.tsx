//!optimize 2

import { useMotion } from "@rbxts/pretty-react-hooks";
import React, { useEffect } from "@rbxts/react";
import { useRootProducer, useRootSelector } from "client/app/hooks";
import { Images } from "client/app/images";
import { getDistance, getLastMaxDistance } from "client/store/slices/distance";

const SPRING_SETTINGS = {
	friction: 12,
	tension: 180,
};

const ICON_STATE_VALUES = {
	DECREASING: {
		ROTATION: 180,
		TRANSPARENCY: 1,
	},
	INCREASING: {
		ROTATION: 0,
		TRANSPARENCY: 0,
	},
};

export default function IncrementContainer({ children }: React.PropsWithChildren): React.Element {
	const [rotation, rotationMotion] = useMotion(0);
	const [incrementTransparency, incrementTransparencyMotion] = useMotion(0);
	const [decrementTransparency, decrementTransparencyMotion] = useMotion(0);

	const producer = useRootProducer();
	const currentDistance = useRootSelector(getDistance);
	const lastMaxDistance = useRootSelector(getLastMaxDistance);

	useEffect(() => {
		if (currentDistance >= lastMaxDistance) {
			rotationMotion.spring(ICON_STATE_VALUES.INCREASING.ROTATION, SPRING_SETTINGS);
			incrementTransparencyMotion.spring(ICON_STATE_VALUES.INCREASING.TRANSPARENCY, SPRING_SETTINGS);
			decrementTransparencyMotion.spring(1, SPRING_SETTINGS);
		} else {
			rotationMotion.spring(ICON_STATE_VALUES.DECREASING.ROTATION, SPRING_SETTINGS);
			incrementTransparencyMotion.spring(ICON_STATE_VALUES.DECREASING.TRANSPARENCY, SPRING_SETTINGS);
			decrementTransparencyMotion.spring(0, SPRING_SETTINGS);
		}
	}, [currentDistance, lastMaxDistance]);

	return (
		<frame
			AnchorPoint={new Vector2(0, 0.5)}
			BackgroundTransparency={1}
			Position={new UDim2(1.2, 0, 0.55, 0)}
			Size={new UDim2(1.216, 0, 1, 0)}
			key="IncrementContainer"
		>
			<imagelabel
				AnchorPoint={new Vector2(0.5, 0.5)}
				BackgroundTransparency={1}
				Image={Images.Icons.Global.ArrowUp}
				Position={new UDim2(0.5, 0, 0.5, 0)}
				Rotation={rotation}
				Size={new UDim2(0.76, 0, 0.76, 0)}
				ZIndex={2}
			/>
			<imagelabel
				AnchorPoint={new Vector2(0.5, 0.5)}
				BackgroundTransparency={1}
				Image={Images.Icons.Global.IncrementBackground}
				ImageTransparency={incrementTransparency}
				Position={new UDim2(0.5, 0, 0.5, 0)}
				Size={new UDim2(1, 0, 1, 0)}
			/>
			<imagelabel
				AnchorPoint={new Vector2(0.5, 0.5)}
				BackgroundTransparency={1}
				Image={Images.Icons.Global.DecrementBackground}
				ImageTransparency={decrementTransparency}
				Position={new UDim2(0.5, 0, 0.5, 0)}
				Size={new UDim2(1, 0, 1, 0)}
			/>
			<uiaspectratioconstraint />
		</frame>
	);
}
