//!optimize 2

import { CloseButton } from "../../close-button";
import ItemPreview from "./ItemPreview";
import ShopSlotsContainer from "./ShopSlotsContainer";
import ShopTabs from "./Tabs";
import React from "@rbxts/react";
import { useRootProducer } from "client/app/hooks";
import { Images } from "client/app/images";

export default function Shop({ children }: React.PropsWithChildren): React.Element {
	const producer = useRootProducer();

	return (
		<frame
			AnchorPoint={new Vector2(0.5, 0.5)}
			BackgroundTransparency={1}
			Position={new UDim2(0.5, 0, 0.5, 0)}
			Size={new UDim2(0.628, 0, 0.861, 0)}
			key="ShopContainer"
		>
			<uiaspectratioconstraint AspectRatio={1.299} />
			<CloseButton
				aspectRatio={1.019}
				frameSize={UDim2.fromScale(0.097, 0.123)}
				index={0}
				onClick={() => {
					producer.setPage("Home");
				}}
				position={UDim2.fromScale(0.927, 0.082)}
			/>
			<imagelabel
				BackgroundTransparency={1}
				Image={Images.Shop.Background}
				Size={new UDim2(1, 0, 1, 0)}
				ZIndex={-2}
			/>
			<ShopTabs />
			<ShopSlotsContainer />
			<ItemPreview />
		</frame>
	);
}
