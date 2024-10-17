// Lerp.d.ts
declare namespace Lerp {
	/**
	 * Performs a lerp between two numbers.
	 * @param a - The starting number.
	 * @param b - The ending number.
	 * @param t - The lerp factor between 0 and 1.
	 * @returns The interpolated value.
	 */
	function DefaultLerpLerp(a: number, b: number, t: number): number;

	/**
	 * Lerps the value of a specific key in an array.
	 * @param array - The array containing the value to lerp.
	 * @param key - The key of the value to lerp.
	 * @param goal - The target value.
	 * @param t - The duration of the lerp.
	 */
	function KeyValue<T>(array: T, key: keyof T, goal: T[keyof T], t: number): void;

	/**
	 * Lerps the CFrame of a part.
	 * @param part - The part whose CFrame will be lerped.
	 * @param goal - The target CFrame.
	 * @param t - The duration of the lerp.
	 */
	function CFrame(part: BasePart | Camera | MeshPart, goal: CFrame, t: number): void;

	/**
	 * Lerps the size of a part.
	 * @param part - The part whose size will be lerped.
	 * @param goal - The target Vector3 size.
	 * @param t - The duration of the lerp.
	 * @param reversing - If true, reverses the lerp back to the original size.
	 */
	function Size(part: BasePart | MeshPart, goal: Vector3, t: number, reversing: boolean): void;

	/**
	 * Lerps both the CFrame and Size of a part.
	 * @param part - The part whose CFrame and Size will be lerped.
	 * @param goalCF - The target CFrame.
	 * @param goalV3 - The target Vector3 size.
	 * @param t - The duration of the lerp.
	 */
	function CFrameAndSize(part: BasePart | MeshPart, goalCF: CFrame, goalV3: Vector3, t: number): void;

	/**
	 * Creates a new Lerp instance and lerps the CFrame of a part.
	 * @param args - The arguments for the CFrame function.
	 */
}

export = Lerp;
