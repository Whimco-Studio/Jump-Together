import { RootState } from "../..";

export const getCheckpoint = (state: RootState) => {
	return state.checkpoint.Checkpoint;
};

export const getCheckpointReached = (state: RootState) => {
	return state.checkpoint.CheckpointReached;
};
