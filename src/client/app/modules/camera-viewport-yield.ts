import { Workspace } from "@rbxts/services";

export function cameraViewportYield() {
	const camera = Workspace.CurrentCamera!;

	while (camera.ViewportSize.X < 2) {
		task.wait(0.1);
	}
}
