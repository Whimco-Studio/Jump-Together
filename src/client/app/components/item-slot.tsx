import { useRootProducer, useRootSelector } from "../hooks/root-hook";
import { Images } from "../images";
import ObjectViewport from "./base/object-viewport";
import { useMotion } from "@rbxts/pretty-react-hooks";
import React, { useEffect, useState } from "@rbxts/react";

interface ItemSlotProperties {
	anchorPoint?: Vector2;
	aspectRatio?: number;
	frameSize?: UDim2;
	image?: string;
	index: number;
	item?: Instance;
	position?: UDim2;
}

const SPRING_SETTINGS = {
	friction: 12,
	tension: 180,
};

const BUTTON_STATE_SIZES = {
	CLICKED: UDim2.fromScale(0.75, 0.75),
	DEFAULT: UDim2.fromScale(1, 1),
	HOVERED: UDim2.fromScale(1.1, 1.1),
};

const CAMERA_ZOOM = 2;
const OBJECT_OFFSET = new CFrame(0, 0, 0);
const CAMERA_ROTATION = CFrame.fromEulerAnglesXYZ(0, 0, math.pi / 1.25);

export function ItemSlot({ anchorPoint, aspectRatio, frameSize, image, index, item, position }: ItemSlotProperties) {
	const [size, sizeMotion] = useMotion(UDim2.fromScale(0, 0));
	const [selected, setSelected] = useState(false);

	const producer = useRootProducer();
	const ItemSlots = useRootSelector((state) => state.characterCreation.ItemSlots);
	const CurrentPanelTab = useRootSelector((state) => state.characterCreation.Tab);
	const CurrentSkin = useRootSelector((state) => state.characterCreation.CurrentSkin);
	const CurrentQuirkymal = useRootSelector((state) => state.characterCreation.CurrentQuirkymal);
	const CurrentAccessory = useRootSelector((state) => state.characterCreation.CurrentAccessory);

	const TabToFunction = {
		Accessories: producer.setCurrentAccessory,
		Quirkymals: producer.setCurrentQuirkymal,
		Skins: producer.setCurrentSkin,
	};

	useEffect(() => {
		sizeMotion.spring(BUTTON_STATE_SIZES.DEFAULT, SPRING_SETTINGS);
	}, []);

	useEffect(() => {}, [ItemSlots]);

	useEffect(() => {
		switch (CurrentPanelTab) {
			case "Skins": {
				setSelected(CurrentSkin === item?.Name);

				break;
			}
			case "Quirkymals": {
				setSelected(CurrentQuirkymal === item?.Name);

				break;
			}
			case "Accessories": {
				setSelected(CurrentAccessory === item?.Name);

				break;
			}
			// No default
		}
	}, [CurrentPanelTab, CurrentSkin, CurrentQuirkymal, CurrentAccessory]);

	return (
		<frame
			AnchorPoint={anchorPoint ?? new Vector2(0.5, 0.5)}
			BackgroundTransparency={1}
			BorderColor3={Color3.fromRGB(27, 42, 53)}
			BorderSizePixel={0}
			Position={position ?? UDim2.fromScale(0.5, 0.5)}
			Size={frameSize ?? UDim2.fromScale(0.227, 0.2)}
		>
			<uiaspectratioconstraint AspectRatio={0.909} />
			<imagebutton
				AnchorPoint={new Vector2(0.5, 0.5)}
				BackgroundTransparency={1}
				BorderColor3={Color3.fromRGB(27, 42, 53)}
				BorderSizePixel={0}
				Event={{
					MouseButton1Click: () => {
						sizeMotion.spring(BUTTON_STATE_SIZES.CLICKED, SPRING_SETTINGS);

						if (item) {
							TabToFunction[CurrentPanelTab](item.Name);
						}

						task.defer(() => {
							task.wait(0.2);
							sizeMotion.spring(BUTTON_STATE_SIZES.DEFAULT, SPRING_SETTINGS);
						});
					},
					MouseEnter: () => {
						sizeMotion.spring(BUTTON_STATE_SIZES.HOVERED, SPRING_SETTINGS);
					},

					MouseLeave: () => {
						sizeMotion.spring(BUTTON_STATE_SIZES.DEFAULT, SPRING_SETTINGS);
					},
				}}
				Position={UDim2.fromScale(0.5, 0.5)}
				Size={size}
			>
				<imagelabel
					AnchorPoint={new Vector2(0.5, 0.5)}
					BackgroundTransparency={1}
					BorderColor3={Color3.fromRGB(27, 42, 53)}
					BorderSizePixel={0}
					Image={selected ? Images.CharacterCreation.ItemSlotSelected : Images.CharacterCreation.ItemSlot}
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
							Native={{
								BackgroundTransparency: 1,
								Size: UDim2.fromScale(1, 1),
							}}
							Object={item as Model}
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
