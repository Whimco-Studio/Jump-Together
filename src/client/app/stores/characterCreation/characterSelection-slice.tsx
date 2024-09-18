import { createProducer } from "@rbxts/reflex";

interface State {
	Tab: "Quirkymals" | "Accessories" | "Skins";
	ModelPose: CFrame;
	AccessoriesTab: "Headwear" | "Facewear" | "Backwear";
}

const initialState: State = {
	Tab: "Quirkymals",
	ModelPose: new CFrame(0, 0, 0),
	AccessoriesTab: "Headwear",
};

export const characterCreationSlice = createProducer(initialState, {
	setCharacterCreationPanelTab: (state, tab: "Quirkymals" | "Accessories" | "Skins") => {
		return { ...state, Tab: tab };
	},
	setModelPose: (state, pose: CFrame) => {
		return { ...state, ModelPose: pose };
	},
	setAccessoriesTab: (state, tab: "Headwear" | "Facewear" | "Backwear") => {
		return { ...state, AccessoriesTab: tab };
	},
});
