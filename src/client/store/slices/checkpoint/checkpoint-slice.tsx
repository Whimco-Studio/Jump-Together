import { createProducer } from "@rbxts/reflex";

interface State {
	Checkpoint?: BasePart;
	CheckpointReached?: BasePart;
}

const initialState: State = {
	Checkpoint: undefined,
	CheckpointReached: undefined,
};

export const checkpointSlice = createProducer(initialState, {
	setCheckpoint: (state, checkpoint: BasePart) => {
		return { ...state, Checkpoint: checkpoint };
	},
});
