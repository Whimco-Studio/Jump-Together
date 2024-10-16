import { RootState } from "../..";

export const getCamera = (state: RootState) => {
	return state.camera.Camera;
};

export const getCameraShot = (state: RootState) => {
	return state.camera.CameraShot;
};
