import React, { useEffect, useState } from "@rbxts/react";
import { ItemSlot } from "../../ItemSlot";
import { useRootProducer, useRootSelector } from "client/app/hooks";
import { useUnmountEffect } from "@rbxts/pretty-react-hooks";

interface SlotContainerProps {}

const GRID_SLOTS = 9;

export function SlotContainer() {
	const [slots, setSlots] = useState<Instance[]>([]);
	const producer = useRootProducer();

	const PanelTab = useRootSelector((state) => state.characterCreation.Tab);
	const ItemSlots = useRootSelector((state) => state.characterCreation.ItemSlots);
	const SkinsFolder = useRootSelector((state) => state.characterCreation.SkinsRoute);
	const QuirkymalsFolder = useRootSelector((state) => state.characterCreation.QuirkymalsRoute);
	const CurrentQuirkymal = useRootSelector((state) => state.characterCreation.CurrentQuirkymal);

	useEffect(() => {
		producer.setCharacterCreationPanelSelectedItemIndex(-1);

		if (PanelTab === "Quirkymals") {
			handleQuirkymalsTab();
		} else if (PanelTab === "Accessories") {
			producer.setItemSlots([]);
		} else if (PanelTab === "Skins") {
			handleSkinsTab();
		}
	}, [PanelTab]);

	useEffect(() => {
		setSlots([]);
		task.delay(0.05, () => {
			setSlots(ItemSlots);
		});
	}, [ItemSlots]);

	useUnmountEffect(() => {
		ItemSlots.forEach((slot) => {
			if (typeOf(slot) === "Instance") {
				slot.Destroy();
			}
		});
	});

	const handleQuirkymalsTab = () => {
		const Quirkymals = QuirkymalsFolder.GetChildren();
		const QuirkymalsList = [];

		for (let index = 0; index < GRID_SLOTS; index++) {
			const randomIndex = math.random(0, Quirkymals.size() - 1);
			const element = Quirkymals[randomIndex].Clone() as QuirkymalAppearance;

			QuirkymalsList.push(element);
			Quirkymals.remove(randomIndex);
		}

		producer.setItemSlots(QuirkymalsList);
	};

	const handleSkinsTab = () => {
		const Quirkymals = QuirkymalsFolder.GetChildren();
		const CurrentQuirkymalInstance = QuirkymalsFolder.FindFirstChild(CurrentQuirkymal);

		producer.setItemSlots([]);
		if (!CurrentQuirkymalInstance) {
			return error(`Quirkymal ${CurrentQuirkymal} not found`);
		}

		const SkinsList = [];
		const defaultQuirkymalSkin = CurrentQuirkymalInstance.Clone() as QuirkymalAppearance;
		SkinsList.push(defaultQuirkymalSkin);

		for (let index = 0; index < GRID_SLOTS - 1; index++) {
			const randomIndex = math.random(0, Quirkymals.size() - 1);
			const randomQuirkymal = Quirkymals[randomIndex] as QuirkymalAppearance;
			const randomSkin = randomQuirkymal.HumanoidRootPart.TextureID;

			const element = CurrentQuirkymalInstance.Clone() as QuirkymalAppearance;
			element.Name = randomQuirkymal.Name;
			element.HumanoidRootPart.TextureID = randomSkin;

			SkinsList.push(element);
			Quirkymals.remove(randomIndex);
		}

		producer.setItemSlots(SkinsList);
	};

	return (
		<frame
			BackgroundColor3={new Color3(0, 0, 0)}
			BorderSizePixel={0}
			BackgroundTransparency={1}
			AnchorPoint={new Vector2(0.5, 0.5)}
			Position={new UDim2(0.495, 0, 0.5625, 0)}
			Size={new UDim2(0.83, 0, 0.75, 0)}
		>
			<uilistlayout
				FillDirection={Enum.FillDirection.Horizontal}
				HorizontalFlex={Enum.UIFlexAlignment.SpaceEvenly}
				VerticalFlex={Enum.UIFlexAlignment.SpaceEvenly}
				Wraps={true}
			/>
			{slots.map((item, index) => (
				<ItemSlot key={index} index={index} item={item} frameSize={UDim2.fromScale(0.3, 0.3)} />
			))}
		</frame>
	);
}
