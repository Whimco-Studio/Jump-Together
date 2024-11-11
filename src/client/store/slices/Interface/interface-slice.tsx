import { createProducer } from "@rbxts/reflex";

interface State {
	ItemPreview: Model | undefined;
	Page: string;
	Tab: string;
}

const initialState: State = {
	ItemPreview: undefined,
	Page: "Home",
	Tab: "Quirkymals",
};

export const interfaceSlice = createProducer(initialState, {
	setItemPreview: (state, itemPreview: Model | undefined) => {
		// if (state.ItemPreview) {
		// 	state.ItemPreview.Destroy();
		// }

		return { ...state, ItemPreview: itemPreview };
	},
	setPage: (state, page: string) => {
		return { ...state, Page: page };
	},
	setTab: (state, tab: string) => {
		return { ...state, Tab: tab };
	},
});
