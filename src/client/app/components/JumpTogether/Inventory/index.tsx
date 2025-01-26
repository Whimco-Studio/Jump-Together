//!optimize 2

import { CloseButton } from "../../close-button";
import InventorySlotsContainer from "./InventorySlotsContainer";
import ItemPreview from "./ItemPreview";
import InventoryTabs from "./Tabs";
import { useUnmountEffect } from "@rbxts/pretty-react-hooks";
import React from "@rbxts/react";
import { useRootProducer } from "client/app/hooks";
import { Images } from "client/app/images";

export default function Inventory({ children }: React.PropsWithChildren): React.Element {
	const producer = useRootProducer();

	useUnmountEffect(() => {
		producer.setInventoryItemPreview(undefined);
	});

	return (
		<frame
			AnchorPoint={new Vector2(0.5, 0.5)}
			BackgroundTransparency={1}
			Position={new UDim2(0.5, 0, 0.5, 0)}
			Size={new UDim2(0.628, 0, 0.861, 0)}
			key="InventoryContainer"
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
				Image={Images.Inventory.Background}
				Size={new UDim2(1, 0, 1, 0)}
				ZIndex={-2}
			/>
			<ItemPreview />
			<InventoryTabs />
			<InventorySlotsContainer />
		</frame>
	);
}
