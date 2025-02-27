import { Object, ObjectUtilities } from "@rbxts/luau-polyfill";
import QuirkymalSkins from "client/app/images/quirkymal-skin-values";

const pixelCount = 4;

export default function GetQuirkymalGradient(quirkymal: string) {
	const unsortedColors: {
		[key: string]: {
			index: number;
			value: Color3;
		};
	} = {};
	for (const [skin, skinValues] of Object.entries(QuirkymalSkins)) {
		if (skin === quirkymal) {
			let index = 1;
			for (const value of skinValues) {
				const x = value.x + 1;
				const y = value.y + 1;
				if (x % 2 === 0 && y % 2 === 0 && index <= pixelCount) {
					unsortedColors[tostring(index)] = {
						index: index,
						value: Color3.fromRGB(value.R, value.G, value.B),
					};

					index++;
				}
			}
			break;
		}
	}

	const colors: ColorSequenceKeypoint[] = [];

	for (const [_, colorInfo] of ObjectUtilities.entries(unsortedColors)) {
		if (colorInfo) {
			const index = colorInfo.index - 1;
			colors[index] = new ColorSequenceKeypoint(index === 1 ? 0 : colorInfo.index / pixelCount, colorInfo.value);
		}
	}

	const sortedColors: ColorSequenceKeypoint[] = [];
	for (const color of colors) {
		const nthElement = sortedColors[sortedColors.size() - 1];
		if (nthElement) {
			if (color.Time > nthElement.Time) {
				sortedColors.insert(sortedColors.size(), color);
			} else {
				sortedColors.insert(sortedColors.size() - 1, color);
			}
		} else {
			sortedColors.insert(0, color);
		}
	}

	if (sortedColors.size() < 2) {
		print(quirkymal);
		return new ColorSequence([
			new ColorSequenceKeypoint(0, Color3.fromRGB(255, 255, 255)),
			new ColorSequenceKeypoint(1, Color3.fromRGB(255, 255, 255)),
		]);
	}

	return new ColorSequence(sortedColors);
}
