//!optimize 2

import { useUnmountEffect } from "@rbxts/pretty-react-hooks";
import React from "@rbxts/react";
import ObjectViewport from "client/app/components/base/object-viewport";
import { useRootProducer, useRootSelector } from "client/app/hooks";
import { Images } from "client/app/images";
import UIStroke from "client/app/modules/scale-ui-stroke";
import { Theme } from "client/app/theme";
import { getInventoryItemPreview } from "client/store/slices/Interface";

export interface ItemSlotProperties extends React.PropsWithChildren {
	AssetPreview: Instance;
	AssetPrice: number;
	Assetkey: string;
	FunFact: string;
	Name: string;
	OnClick: () => void;
	Rarity: "Common" | "Quirky" | "Rare" | "Special" | "Uncommon";
}

export default function InventoryItemSlot(properties: ItemSlotProperties): React.Element {
	const producer = useRootProducer();
	const inventoryItemPreview = useRootSelector(getInventoryItemPreview) as QuirkymalAppearance | undefined;

	useUnmountEffect(() => {
		// properties.AssetPreview.Destroy();
	});

	if (properties.AssetPreview === undefined) {
		print(properties.Assetkey);
	}
	return (
		<imagebutton
			BackgroundColor3={Color3.fromRGB(255, 255, 255)}
			BackgroundTransparency={1}
			BorderColor3={Color3.fromRGB(0, 0, 0)}
			BorderSizePixel={0}
			Event={{
				MouseButton1Click: () => {
					producer.setInventoryItemPreview(undefined);
					inventoryItemPreview?.Destroy();
					producer.setShopRarity(properties.Rarity);
					producer.setShopFunFact(properties.FunFact);
					producer.setShopItemPrice(properties.AssetPrice);
					producer.setShopItemName(properties.Name);

					task.defer(() => {
						task.wait(0.01);
						producer.setInventoryItemPreview(properties.AssetPreview.Clone() as Model);
					});

					properties.OnClick();
				},
			}}
			Image={
				Images.Inventory.SlotRarities[properties.Rarity as keyof typeof Images.Inventory.SlotRarities] ===
				undefined
					? Images.Inventory.SlotRarities.Common
					: Images.Inventory.SlotRarities[properties.Rarity as keyof typeof Images.Inventory.SlotRarities]
			}
			LayoutOrder={properties.AssetPrice}
			Position={UDim2.fromScale(0.186, 0.401)}
			Size={UDim2.fromOffset(150, 150)}
			key="ImageLabel"
		>
			<uiaspectratioconstraint AspectRatio={0.724} />
			<textlabel
				AnchorPoint={new Vector2(0.5, 0)}
				BackgroundColor3={Color3.fromRGB(255, 255, 255)}
				BackgroundTransparency={1}
				BorderColor3={Color3.fromRGB(0, 0, 0)}
				BorderSizePixel={0}
				FontFace={
					new Font("rbxasset://fonts/families/FredokaOne.json", Enum.FontWeight.Bold, Enum.FontStyle.Normal)
				}
				Position={UDim2.fromScale(0.5, 0.055)}
				Size={UDim2.fromScale(0.7, 0.143)}
				Text={properties.Assetkey}
				TextColor3={Color3.fromRGB(255, 255, 255)}
				TextScaled={true}
				TextSize={7}
				TextWrapped={true}
				TextXAlignment={Enum.TextXAlignment.Center}
				key="key"
			>
				<uitextsizeconstraint MaxTextSize={20} />
				<uistroke
					Color={
						Theme.Colors.RarityStrokes[properties.Rarity as keyof typeof Theme.Colors.RarityStrokes]
							?.TextColor || Theme.Colors.RarityStrokes.Common.TextColor
					}
					LineJoinMode={Enum.LineJoinMode.Bevel}
					Thickness={UIStroke(2)}
					key="UIStroke"
				/>
			</textlabel>

			<ObjectViewport
				Native={{
					AnchorPoint: new Vector2(0.5, 0.5),
					BackgroundTransparency: 1,
					Position: UDim2.fromScale(0.5, 0.5),
					Size: UDim2.fromScale(1.1, 0.7),
				}}
				Object={properties.AssetPreview as Model}
			/>

			<textlabel
				AnchorPoint={new Vector2(0.5, 1)}
				BackgroundColor3={Color3.fromRGB(255, 255, 255)}
				BackgroundTransparency={1}
				BorderColor3={Color3.fromRGB(0, 0, 0)}
				BorderSizePixel={0}
				FontFace={
					new Font("rbxasset://fonts/families/FredokaOne.json", Enum.FontWeight.Bold, Enum.FontStyle.Normal)
				}
				Position={UDim2.fromScale(0.5, 0.975)}
				Size={UDim2.fromScale(0.7, 0.2)}
				Text={`${properties.Rarity.upper()}`}
				TextColor3={Color3.fromRGB(0, 0, 0)}
				TextScaled={true}
				TextSize={7}
				TextWrapped={true}
				TextXAlignment={Enum.TextXAlignment.Center}
				key="Rarity"
			>
				<uitextsizeconstraint MaxTextSize={14} />
			</textlabel>
		</imagebutton>
	);
}
