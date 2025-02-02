//!optimize 2

import { useUnmountEffect } from "@rbxts/pretty-react-hooks";
import React, { useEffect } from "@rbxts/react";
import { RunService } from "@rbxts/services";
import ObjectViewport from "client/app/components/base/object-viewport";
import { useRootProducer, useRootSelector } from "client/app/hooks";
import { Images } from "client/app/images";
import { FredokaOne } from "client/app/modules/fonts";
import { getShopItemPreview } from "client/store/slices/Interface";
import { getShopFunFact, getShopItemName, getShopItemPrice, getShopRarity } from "client/store/slices/shop";

export default function ItemPreview({ children }: React.PropsWithChildren): React.Element {
	const shopItemPreview = useRootSelector(getShopItemPreview) as QuirkymalAppearance | undefined;
	const rarity = useRootSelector(getShopRarity);
	const price = useRootSelector(getShopItemPrice);
	const name = useRootSelector(getShopItemName);
	const funFact = useRootSelector(getShopFunFact);

	const producer = useRootProducer();

	useEffect(() => {
		if (!shopItemPreview) {
			RunService.UnbindFromRenderStep("ItemPreview");
			return;
		}

		RunService.BindToRenderStep("ItemPreview", 0, () => {
			if (!shopItemPreview.FindFirstChild("HumanoidRootPart")) {
				RunService.UnbindFromRenderStep("ItemPreview");
				return;
			}
		});
	}, [shopItemPreview]);

	useUnmountEffect(() => {
		producer.setShopItemPreview(undefined);
		shopItemPreview?.Destroy();
		RunService.UnbindFromRenderStep("ItemPreview");
	});

	return (
		<imagelabel
			AnchorPoint={new Vector2(0.5, 0.5)}
			BackgroundTransparency={1}
			Image="rbxassetid://129384876202225"
			// ImageContent={Images.Shop.ItemPreview.Background}
			Position={new UDim2(0.8250000000000001, 0, 0.642, 0)}
			Size={new UDim2(0.294, 0, 0.618, 0)}
			key="ItemPreview"
		>
			{(shopItemPreview && (
				<ObjectViewport
					Native={{
						AnchorPoint: new Vector2(0.5, 0.5),
						BackgroundTransparency: 1,
						Position: UDim2.fromScale(0.5, 0.3),
						Size: UDim2.fromScale(1, 0.4),
					}}
					Object={shopItemPreview}
					PivotOffset={CFrame.fromEulerAnglesXYZ(0, math.pi / 1.25, 0).mul(
						CFrame.fromEulerAnglesXYZ(math.pi / 6.5, 0, 0),
					)}
				/>
			)) ??
				undefined}
			<frame
				AnchorPoint={new Vector2(0.5, 0)}
				BackgroundTransparency={1}
				LayoutOrder={1}
				Position={new UDim2(0.5, 0, 0.857, 0)}
				Size={new UDim2(0.483, 0, 0.10300000000000001, 0)}
				key="BuyFrame"
			>
				<imagebutton
					AnchorPoint={new Vector2(0.5, 0.5)}
					AutoButtonColor={false}
					BackgroundTransparency={1}
					Image="rbxassetid://105270703909903"
					// ImageContent={Images.Shop.ItemPreview.Buy}
					Position={new UDim2(0.5, 0, 0.5, 0)}
					Size={new UDim2(1, 0, 1, 0)}
					key="BuyButton"
				>
					<uiaspectratioconstraint AspectRatio={2.89} />
				</imagebutton>
			</frame>
			<textlabel
				AnchorPoint={new Vector2(0.5, 0.5)}
				BackgroundTransparency={1}
				FontFace={FredokaOne}
				Position={new UDim2(0.5, 0, 0.07, 0)}
				Size={new UDim2(0.9, 0, 0.088, 0)}
				Text={name}
				TextColor3={Color3.fromRGB(255, 255, 255)}
				TextScaled={true}
				TextSize={14}
				TextWrapped={true}
				key="Title"
			>
				<uistroke Color={Color3.fromRGB(52, 97, 154)} LineJoinMode={Enum.LineJoinMode.Bevel} Thickness={4} />
			</textlabel>
			<textlabel
				BackgroundTransparency={1}
				FontFace={FredokaOne}
				Position={new UDim2(0.448, 0, 0.752, 0)}
				Size={new UDim2(0.233, 0, 0.06, 0)}
				Text={`$${price}`}
				TextColor3={Color3.fromRGB(52, 97, 154)}
				TextScaled={true}
				TextSize={7}
				TextWrapped={true}
				TextXAlignment={Enum.TextXAlignment.Left}
				key="Price"
			>
				<uitextsizeconstraint />
			</textlabel>
			<imagelabel
				AnchorPoint={new Vector2(0.5, 0.5)}
				BackgroundTransparency={1}
				Image={Images.RarityBanners[rarity]}
				// ImageContent={Content}
				Position={new UDim2(0.497, 0, 0.513, 0)}
				Size={new UDim2(0.9, 0, 0.082, 0)}
				key="Rarity"
			>
				<uiaspectratioconstraint AspectRatio={6.8100000000000005} />
			</imagelabel>
			<textlabel
				AnchorPoint={new Vector2(0.5, 0.5)}
				BackgroundTransparency={1}
				Font={Enum.Font.FredokaOne}
				FontFace={FredokaOne}
				Position={new UDim2(0.5, 0, 0.64, 0)}
				Size={new UDim2(0.9, 0, 0.088, 0)}
				Text={funFact ?? "A Quirky fella"}
				TextColor3={Color3.fromRGB(255, 255, 255)}
				TextScaled={true}
				TextSize={20}
				TextWrapped={true}
				key="Description"
			>
				<uistroke
					Color={Color3.fromRGB(52, 97, 154)}
					LineJoinMode={Enum.LineJoinMode.Bevel}
					Thickness={2.999}
				/>
				<uitextsizeconstraint MaxTextSize={20} />
			</textlabel>
			<uiaspectratioconstraint AspectRatio={0.617} />
		</imagelabel>
	);
}
