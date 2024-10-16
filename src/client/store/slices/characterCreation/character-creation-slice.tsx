import { createProducer } from "@rbxts/reflex";
import { ReplicatedStorage } from "@rbxts/services";

interface State {
	AccessoriesTab: "Backwear" | "Facewear" | "Headwear";

	CurrentAccessory: string;

	// Current Information
	CurrentQuirkymal: string;
	CurrentSkin: string;

	// ItemSlots
	ItemSlots: Instance[];
	// Model
	ModelPose: CFrame;

	// Routes
	QuirkymalsRoute: typeof ReplicatedStorage.Assets.Quirkymals;
	// Selected Item
	SelectedItemIndex: number;
	SkinsRoute: typeof ReplicatedStorage.Assets.Skins;

	// Tabs
	Tab: "Accessories" | "Quirkymals" | "Skins";
}

const initialState: State = {
	AccessoriesTab: "Headwear",

	CurrentAccessory: "None",

	// Current Information
	CurrentQuirkymal: "Dragon",
	CurrentSkin: "Default",

	// ItemSlots
	ItemSlots: [],
	// Model
	ModelPose: new CFrame(0, 0, 0),

	QuirkymalsRoute: ReplicatedStorage.Assets.Quirkymals,
	// Selected Item
	SelectedItemIndex: -1,
	// Routes
	SkinsRoute: ReplicatedStorage.Assets.Skins,

	// Tabs
	Tab: "Quirkymals",
};

export const characterCreationSlice = createProducer(initialState, {
	setAccessoriesTab: (state, tab: "Backwear" | "Facewear" | "Headwear") => {
		return { ...state, AccessoriesTab: tab };
	},
	setCharacterCreationPanelSelectedItemIndex: (state, index: number) => {
		return { ...state, SelectedItemIndex: index };
	},
	setCharacterCreationPanelTab: (state, tab: "Accessories" | "Quirkymals" | "Skins") => {
		return { ...state, Tab: tab };
	},

	setCurrentAccessory: (state, accessory: string) => {
		return { ...state, CurrentAccessory: accessory };
	},

	setCurrentQuirkymal: (state, quirkymal: string) => {
		return { ...state, CurrentQuirkymal: quirkymal };
	},
	setCurrentSkin: (state, skin: string) => {
		return { ...state, CurrentSkin: skin };
	},
	setItemSlots: (state, slots: Instance[]) => {
		return { ...state, ItemSlots: slots };
	},

	setModelPose: (state, pose: CFrame) => {
		return { ...state, ModelPose: pose };
	},
});
