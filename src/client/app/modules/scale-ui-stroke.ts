/**
 * Created Date: Monday September 18th 2023 1:09:04 pm CEST
 * Author: Trendon Robinson at <The_Pr0fessor (Rbx), @TPr0fessor (Twitter)>
 * ------
 * Last Modified: Saturday March 16th 2024 8:15:47 pm CEST
 * Modified By: Trendon Robinson at <The_Pr0fessor (Rbx), @TPr0fessor (Twitter)>
 */

/**
 * UIStroke
 *
 * A module for creating relatively scaled UI strokes.
 */

import { cameraViewportYield } from "./camera-viewport-yield";
import { Workspace } from "@rbxts/services";

// Private Functions
function getAverage(vector: Vector2): number {
	return (vector.X + vector.Y) / 2;
}

// Variables
const STUDIO_SCREEN_SIZE = new Vector2(1366, 767); // change to your studio resolution
const camera = Workspace.CurrentCamera!;

cameraViewportYield();

const studioAverage = getAverage(STUDIO_SCREEN_SIZE);
let currentScreenAverage = getAverage(camera.ViewportSize);

// Variable-reliant Private Functions
function adjustThickness(originalThickness: number): number {
	const ratio = originalThickness / studioAverage;
	return currentScreenAverage * ratio;
}

function modifyUiStrokes(arguments_: number): number {
	currentScreenAverage = getAverage(camera.ViewportSize); // re-calculate the screen average as it could've changed
	return adjustThickness(arguments_);
}

// Module
function UIStroke(_thickness: number): number {
	const ratio = _thickness / studioAverage;
	const thickness = currentScreenAverage * ratio;

	return thickness;
}

export default UIStroke;
