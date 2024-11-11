import { useMotion } from "@rbxts/pretty-react-hooks";
import React, { useEffect } from "@rbxts/react";
import { Animation } from "client/app/animation";
import { useRootSelector } from "client/app/hooks/root-hook";
// import { useRootSelector } from "client/app/hooks/root-hook";

interface CharacterCreationExitProperties {
	onClick: () => void;
}

const SPRING_SETTINGS = Animation.BUTTON_SPRING_SETTINGS;

const BUTTON_STATE_SIZES = {
	CLICKED: UDim2.fromScale(0.75, 0.75),
	DEFAULT: UDim2.fromScale(1, 1),
	HOVERED: UDim2.fromScale(1.1, 1.1),
};

export function CharacterCreationExit({ onClick }: CharacterCreationExitProperties) {
	const [size, sizeMotion] = useMotion(BUTTON_STATE_SIZES.DEFAULT);
	const [positionSpring, positionSpringMotion] = useMotion(UDim2.fromScale(1, 0.0991));
	const currentPage = useRootSelector((state) => state.interface.Page);

	useEffect(() => {
		if (currentPage === "CharacterCreation") {
			positionSpringMotion.spring(UDim2.fromScale(0.92, 0.1), SPRING_SETTINGS);
		} else {
			positionSpringMotion.spring(UDim2.fromScale(1, 0.1), SPRING_SETTINGS);
		}
	}, [currentPage]);

	return (
		<imagebutton
			AnchorPoint={new Vector2(0, 0)}
			BackgroundTransparency={1}
			BorderColor3={Color3.fromRGB(27, 42, 53)}
			BorderSizePixel={0}
			Event={{
				MouseButton1Click: () => {
					if (currentPage === "CharacterCreation") {
						sizeMotion.spring(BUTTON_STATE_SIZES.CLICKED, SPRING_SETTINGS);

						if (onClick) {
							onClick();
						}

						task.defer(() => {
							task.wait(0.2);
							sizeMotion.spring(BUTTON_STATE_SIZES.DEFAULT, SPRING_SETTINGS);
						});
					}
				},
				MouseEnter: () => {
					if (currentPage === "CharacterCreation") {
						sizeMotion.spring(BUTTON_STATE_SIZES.HOVERED, SPRING_SETTINGS);
					}
				},
				MouseLeave: () => {
					if (currentPage === "CharacterCreation") {
						sizeMotion.spring(BUTTON_STATE_SIZES.DEFAULT, SPRING_SETTINGS);
					}
				},
			}}
			Position={positionSpring}
			Size={UDim2.fromScale(0.35, 0.15)}
		>
			<uiaspectratioconstraint AspectRatio={4.157} />
			<imagelabel
				BackgroundTransparency={1}
				BorderColor3={Color3.fromRGB(27, 42, 53)}
				BorderSizePixel={0}
				Image="rbxassetid://15105257496"
				Size={UDim2.fromScale(1, 1)}
			/>
			<textlabel
				BackgroundTransparency={1}
				BorderColor3={Color3.fromRGB(27, 42, 53)}
				BorderSizePixel={0}
				FontFace={Font.fromName("FredokaOne")}
				Position={UDim2.fromScale(0.1, 0.209)}
				Size={UDim2.fromScale(0.0753, 0.504)}
				Text="X"
				TextColor3={Color3.fromRGB(84, 175, 255)}
				TextSize={48}
			>
				<uistroke Color={Color3.fromRGB(84, 175, 255)} LineJoinMode={Enum.LineJoinMode.Miter} Thickness={4.5} />
			</textlabel>
		</imagebutton>
	);
}
