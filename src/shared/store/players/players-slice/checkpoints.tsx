import { PlayerCheckpoints, PlayerData } from "./types";
import { createProducer } from "@rbxts/reflex";

export interface CheckpointsState {
	readonly [player: string]: PlayerCheckpoints | undefined;
}

const initialState: CheckpointsState = {};

export const checkpointsSlice = createProducer(initialState, {
	closeCheckpointsPlayerData: (state, playerId: string) => {
		const newState = { ...state };
		delete newState[playerId]; // Properly remove key
		return newState;
	},

	loadCheckpointsPlayerData: (state, playerId: string, data: PlayerData) => {
		return {
			...state,
			[playerId]: {
				...state[playerId], // Preserve existing data
				...data.checkpoints, // Merge new data
			},
		};
	},

	unlockCheckpoint: (state, playerId: string, checkpoint: Checkpoint) => {
		return {
			...state,
			[playerId]: {
				...state[playerId], // Ensure existing object
				[checkpoint]: true, // Mark as unlocked
			},
		};
	},
});
