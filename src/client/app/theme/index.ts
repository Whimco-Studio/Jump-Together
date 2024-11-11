export const Theme = {
	Colors: {
		Primary: Color3.fromHex("#4a8de5"),
		RarityStrokes: {
			Common: {
				TextColor: Color3.fromHex("282828"),
			},
			Quirky: {
				TextColor: Color3.fromHex("692031"),
			},
			Rare: {
				TextColor: Color3.fromHex("202a69"),
			},
			Sepcial: {
				TextColor: Color3.fromHex("2d0080"),
			},
			Uncommon: {
				TextColor: Color3.fromHex("013d00"),
			},
		},

		// Primary: Color3.fromRGB(52, 97, 154),
		Secondary: Color3.fromHex("#62c0f8"),

		Stokes: {
			HeadUserDisplay: Color3.fromHex("#5b8adf"),
		},
	},
	FontFaces: {
		FredokaOne: new Font(
			"rbxasset://fonts/families/FredokaOne.json",
			Enum.FontWeight.Regular,
			Enum.FontStyle.Normal,
		),
	},
};
