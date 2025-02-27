import { Object } from "@rbxts/luau-polyfill";
import { ReplicatedStorage } from "@rbxts/services";
import QuirkymalIcons from "client/app/images/quirkymal-icons";

const StarterQuirkymal = "Dove";
export default function GetQuirkymalNames(): keyof (typeof QuirkymalIcons)[] {
	const quirkymalNames: string[] = [];
	const finalQuirkymalNames: string[] = [];
	for (const quirkymal of ReplicatedStorage.Assets.Quirkymals.GetChildren()) {
		quirkymalNames.push(quirkymal.Name);
	}

	while (finalQuirkymalNames.size() < Object.entries(QuirkymalIcons).size() && quirkymalNames.size() > 0) {
		const randomIndex = math.random(0, quirkymalNames.size() - 1);
		const randomName = quirkymalNames[randomIndex];

		if (randomName === "Dove") continue;
		finalQuirkymalNames.push(randomName as string);
		quirkymalNames.remove(randomIndex);
	}

	finalQuirkymalNames.insert(0, StarterQuirkymal);

	return finalQuirkymalNames as unknown as keyof (typeof QuirkymalIcons)[];
}
