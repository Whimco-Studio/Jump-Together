import { Workspace } from "@rbxts/services";

export function getScreenSize(): { height: number; width: number } {
	const Camera = Workspace.CurrentCamera as Camera;
	const ScreenSize = { height: 0, width: 0 };

	ScreenSize.width = Camera.ViewportSize.X;
	ScreenSize.height = Camera.ViewportSize.Y;

	return ScreenSize;
}
