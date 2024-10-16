import { createProducer } from "@rbxts/reflex";

interface State {
	Page: string;
}

const initialState: State = {
	Page: "Home",
};

export const interfaceSlice = createProducer(initialState, {
	setPage: (state, page: string) => {
		return { ...state, Page: page };
	},
});
