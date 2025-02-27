//!optimize 2

import { Object } from "@rbxts/luau-polyfill";
import { CreateGenericStory } from "@rbxts/ui-labs";
import QuirkymalSkins from "client/app/images/quirkymal-skin-values";

export = CreateGenericStory(
	{
		name: "Skins.story",
		summary: "Skins story.",
	},
	() => {
		const unsortedColors: {
			[key: string]: {
				index: number;
				value: Color3;
			};
		} = {};
		for (const [skin, skinValues] of Object.entries(QuirkymalSkins)) {
			if (skin === "Dove") {
				let index = 1;
				for (const value of skinValues) {
					const x = (value.x + 1) ;
					const y = (value.y + 1);
					if (x % 2 === 0 && y % 2 === 0) {
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

		for (const [_, colorInfo] of Object.entries(unsortedColors)) {
			if (colorInfo) {
				const index = colorInfo.index - 1;
				colors[index] = new ColorSequenceKeypoint(index === 1 ? 0 : colorInfo.index / 16, colorInfo.value);
			}
		}

		print(colors);

		// const amount = 20;

		// for (let index = 1; index <= amount; index++) {
		// 	const time = index / amount;
		// 	colors.push(new ColorSequenceKeypoint(index === 1 ? 0 : time, Color3.fromRGB(255, 255, 255)));
		// }

		// const gradient = new ColorSequence(colors);

		// print(gradient);
		return () => {};
	},
);
