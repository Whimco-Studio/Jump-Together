import { ReplicatedStorage, Workspace } from "@rbxts/services";
import { Choose, InferGenericProps, Slider } from "@rbxts/ui-labs";
import Quirkify from "client/util/modules/Quirkify";

const StarterQuirkymal = "Dove";

const GetQuirkymalNames = () => {
	const quirkymalNames = [];
	const finalQuirkymalNames = [];
	for (const quirkymal of ReplicatedStorage.Assets.Quirkymals.GetChildren()) {
		quirkymalNames.push(quirkymal.Name);
	}

	while (finalQuirkymalNames.size() < 20 && quirkymalNames.size() > 0) {
		const randomIndex = math.random(0, quirkymalNames.size() - 1);
		const randomName = quirkymalNames[randomIndex];
		finalQuirkymalNames.push(randomName);
		quirkymalNames.remove(randomIndex);
	}

	finalQuirkymalNames.insert(0, StarterQuirkymal);

	return finalQuirkymalNames;
};

const controls = {
	Visible: true,
	Scale: Slider(0.05, 0.02, 0.1, 0.01),
	Quirkymal: Choose(GetQuirkymalNames()),
};

const story = {
	controls: controls,
	render: (props: InferGenericProps<typeof controls>) => {
		const component = ReplicatedStorage.Assets.StarterCharacter.Clone() as PlayerRig;
		component.Parent = Workspace;
		component.Name = "Quirkymal-StoryRig";
		component.HumanoidRootPart.Transparency = 1;
		component.PivotTo(
			Workspace.Spawn.CFrame.mul(new CFrame(0, Workspace.Spawn.Size.Y / 2, 0)).mul(
				new CFrame(0, component.HumanoidRootPart.Size.Y / 2, 0),
			),
		);

		let QuirkifiedInfo = Quirkify.addQuirkymal(component, StarterQuirkymal);

		const unsubscribe = props.subscribe((values, infos) => {
			const info = infos.Quirkymal; // This will be a GenericInfo<boolean>
			const scale = infos.Scale; // This will be a GenericInfo<boolean>
			if (scale.__new !== scale.__old) {
				QuirkifiedInfo.appearanceRig.ScaleTo(scale.__new);
			}

			if (info.__new !== info.__old) {
				QuirkifiedInfo.animator.Destroy();
				QuirkifiedInfo.appearanceRig.Destroy();
				QuirkifiedInfo.playerAttachment.Destroy();

				QuirkifiedInfo = Quirkify.addQuirkymal(component, values.Quirkymal);
			}
		});

		return () => {
			unsubscribe();
			component.Destroy();
		};
	},
};

export = story;
