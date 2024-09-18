import { createProducer } from "@rbxts/reflex";
import { Workspace } from "@rbxts/services";

interface State {
	Camera?: Camera;
	CameraShot: string;
}

const initialState: State = {
	CameraShot: "Default",
	Camera: Workspace.CurrentCamera,
};

export const cameraSlice = createProducer(initialState, {
	setCamera: (state, camera: Camera) => {
		return { ...state, Camera: camera };
	},

	setCameraShot: (state, cameraShot: string) => {
		return { ...state, CameraShot: cameraShot };
	},
});
