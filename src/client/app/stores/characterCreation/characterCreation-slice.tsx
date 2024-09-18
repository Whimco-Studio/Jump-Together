import { createProducer } from "@rbxts/reflex";
import { ReplicatedStorage } from "@rbxts/services";

interface State {
	// Model
	ModelPose: CFrame;

	// Selected Item
	SelectedItemIndex: number;

	// Routes
	SkinsRoute: typeof ReplicatedStorage.Assets.Skins;
	QuirkymalsRoute: typeof ReplicatedStorage.Assets.Quirkymals;

	// Tabs
	Tab: "Quirkymals" | "Accessories" | "Skins";
	AccessoriesTab: "Headwear" | "Facewear" | "Backwear";

	// Current Information
	CurrentQuirkymal: string;
	CurrentSkin: string;
	CurrentAccessory: string;

	// ItemSlots
	ItemSlots: Instance[];
}

const initialState: State = {
	// Model
	ModelPose: new CFrame(0, 0, 0),

	// Selected Item
	SelectedItemIndex: -1,

	// Tabs
	Tab: "Quirkymals",
	AccessoriesTab: "Headwear",

	// Routes
	SkinsRoute: ReplicatedStorage.Assets.Skins,
	QuirkymalsRoute: ReplicatedStorage.Assets.Quirkymals,

	// Current Information
	CurrentQuirkymal: "Dragon",
	CurrentSkin: "Default",
	CurrentAccessory: "None",

	// ItemSlots
	ItemSlots: [],
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

	setCharacterCreationPanelSelectedItemIndex: (state, index: number) => {
		return { ...state, SelectedItemIndex: index };
	},

	setCurrentQuirkymal: (state, quirkymal: string) => {
		return { ...state, CurrentQuirkymal: quirkymal };
	},
	setCurrentSkin: (state, skin: string) => {
		return { ...state, CurrentSkin: skin };
	},
	setCurrentAccessory: (state, accessory: string) => {
		return { ...state, CurrentAccessory: accessory };
	},

	setItemSlots: (state, slots: Instance[]) => {
		return { ...state, ItemSlots: slots };
	},
});
