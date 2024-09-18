import { useMotion } from "@rbxts/pretty-react-hooks";
import React, { useState, useEffect } from "@rbxts/react";
import ObjectViewport from "./base/ObjectViewport";
import { useRootProducer, useRootSelector } from "../hooks";
import { Images } from "../images";

interface ItemSlotProps {
	index: number;
	image?: string;
	aspectRatio?: number;
	anchorPoint?: Vector2;
	position?: UDim2;
	frameSize?: UDim2;
	item?: Instance;
}

const SPRING_SETTINGS = {
	tension: 180,
	friction: 12,
};

const BUTTON_STATE_SIZES = {
	DEFAULT: UDim2.fromScale(1, 1),
	HOVERED: UDim2.fromScale(1.1, 1.1),
	CLICKED: UDim2.fromScale(0.75, 0.75),
};

const CAMERA_ZOOM = 2;
const OBJECT_OFFSET = new CFrame(0, 0, 0);
const CAMERA_ROTATION = CFrame.fromEulerAnglesXYZ(0, 0, math.pi / 1.25);

export function ItemSlot({ index, image, aspectRatio, anchorPoint, position, frameSize, item }: ItemSlotProps) {
	const [size, sizeMotion] = useMotion(UDim2.fromScale(0, 0));
	const [selected, setSelected] = useState(false);

	const producer = useRootProducer();
	const ItemSlots = useRootSelector((state) => state.characterCreation.ItemSlots);
	const CurrentPanelTab = useRootSelector((state) => state.characterCreation.Tab);
	const CurrentSkin = useRootSelector((state) => state.characterCreation.CurrentSkin);
	const CurrentQuirkymal = useRootSelector((state) => state.characterCreation.CurrentQuirkymal);
	const CurrentAccessory = useRootSelector((state) => state.characterCreation.CurrentAccessory);

	const TabToFunction = {
		Skins: producer.setCurrentSkin,
		Quirkymals: producer.setCurrentQuirkymal,
		Accessories: producer.setCurrentAccessory,
	};

	useEffect(() => {
		sizeMotion.spring(BUTTON_STATE_SIZES.DEFAULT, SPRING_SETTINGS);
	}, []);

	useEffect(() => {}, [ItemSlots]);

	useEffect(() => {
		if (CurrentPanelTab === "Skins") {
			setSelected(CurrentSkin === item?.Name);
		} else if (CurrentPanelTab === "Quirkymals") {
			setSelected(CurrentQuirkymal === item?.Name);
		} else if (CurrentPanelTab === "Accessories") {
			setSelected(CurrentAccessory === item?.Name);
		}
	}, [CurrentPanelTab, CurrentSkin, CurrentQuirkymal, CurrentAccessory]);

	return (
		<frame
			BackgroundTransparency={1}
			BorderColor3={Color3.fromRGB(27, 42, 53)}
			BorderSizePixel={0}
			Size={frameSize ?? UDim2.fromScale(0.227, 0.2)}
			AnchorPoint={anchorPoint ?? new Vector2(0.5, 0.5)}
			Position={position ?? UDim2.fromScale(0.5, 0.5)}
		>
			<uiaspectratioconstraint AspectRatio={0.909} />
			<imagebutton
				BackgroundTransparency={1}
				BorderColor3={Color3.fromRGB(27, 42, 53)}
				BorderSizePixel={0}
				Size={size}
				AnchorPoint={new Vector2(0.5, 0.5)}
				Position={UDim2.fromScale(0.5, 0.5)}
				Event={{
					MouseEnter: () => {
						sizeMotion.spring(BUTTON_STATE_SIZES.HOVERED, SPRING_SETTINGS);
					},
					MouseLeave: () => {
						sizeMotion.spring(BUTTON_STATE_SIZES.DEFAULT, SPRING_SETTINGS);
					},

					MouseButton1Click: () => {
						sizeMotion.spring(BUTTON_STATE_SIZES.CLICKED, SPRING_SETTINGS);

						if (item) {
							TabToFunction[CurrentPanelTab](item.Name);
						}

						task.delay(0.2, () => {
							sizeMotion.spring(BUTTON_STATE_SIZES.DEFAULT, SPRING_SETTINGS);
						});
					},
				}}
			>
				<imagelabel
					Image={selected ? Images.CharacterCreation.ItemSlotSelected : Images.CharacterCreation.ItemSlot}
					AnchorPoint={new Vector2(0.5, 0.5)}
					BackgroundTransparency={1}
					BorderColor3={Color3.fromRGB(27, 42, 53)}
					BorderSizePixel={0}
					Position={UDim2.fromScale(0.5, 0.5)}
					Size={UDim2.fromScale(1, 1)}
				/>
				<frame
					AnchorPoint={new Vector2(0.5, 0.5)}
					BackgroundColor3={Color3.fromRGB(17, 255, 0)}
					BackgroundTransparency={1}
					BorderColor3={Color3.fromRGB(27, 42, 53)}
					BorderSizePixel={0}
					Position={UDim2.fromScale(0.5, 0.45)}
					Size={UDim2.fromScale(0.65, 0.6)}
				>
					{item && (
						<ObjectViewport
							Object={item as Model}
							Native={{
								Size: UDim2.fromScale(1, 1),
								BackgroundTransparency: 1,
							}}
							// CameraZoom={CAMERA_ZOOM}
							// ObjectOffset={OBJECT_OFFSET}
							// InstanceRotation={CAMERA_ROTATION}
						/>
					)}
				</frame>
			</imagebutton>
		</frame>
	);
}
