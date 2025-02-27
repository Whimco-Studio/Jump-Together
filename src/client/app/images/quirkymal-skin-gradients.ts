import QuirkymalSkins from "./quirkymal-skin-values";
import { Object } from "@rbxts/luau-polyfill";

const QuirkymalSkinGradients: {
	[key: keyof typeof QuirkymalSkins]: ColorSequenceKeypoint[];
	// [key: keyof typeof QuirkymalSkins]: ColorSequence;
} = {};

for (const [skin, skinValues] of Object.entries(QuirkymalSkins)) {
	const skinValues = QuirkymalSkins[skin];
	if (!skinValues) continue;
	const colors = skinValues.map((value, index) => {
		if (value.x % 2 === 0 && value.y % 2 === 0) return;

		return new ColorSequenceKeypoint(index / skinValues.size(), Color3.fromRGB(value.R, value.G, value.B));
	});
	QuirkymalSkinGradients[skin] = colors as ColorSequenceKeypoint[]; // new ColorSequence(colors as ColorSequenceKeypoint[]);
}

export default QuirkymalSkinGradients;
