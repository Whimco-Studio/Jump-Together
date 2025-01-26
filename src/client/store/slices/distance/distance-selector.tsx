import { RootState } from "../..";

export const getDistance = (state: RootState) => {
	return state.distance.Distance;
};

export const getCoinsPerMin = (state: RootState) => {
	return state.distance.CoinsPerMin;
};

export const getLastMaxDistance = (state: RootState) => {
	return state.distance.LastMaxDistance;
};
