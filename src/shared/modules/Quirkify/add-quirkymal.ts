import { ReplicatedStorage } from "@rbxts/services";

function createAttachment(Root: MeshPart) {
	const Attachment = new Instance("Attachment");
	Attachment.Parent = Root;

	return Attachment;
}

export function addQuirkymal(character: PlayerRig, _quirkymal: string) {
	const [quirkymal, number] = _quirkymal.gsub("^%l", string.upper);

	const appearanceRig = ReplicatedStorage.Assets.Quirkymals.FindFirstChild(quirkymal)?.Clone() as QuirkymalAppearance;
	const animationController = new Instance("AnimationController");
	animationController.Parent = appearanceRig;

	const animator = new Instance("Animator");
	animator.Parent = animationController;

	appearanceRig.Name = "Quirkymal";
	appearanceRig.HumanoidRootPart.Anchored = false;
	appearanceRig.HumanoidRootPart.CanCollide = false;
	appearanceRig.Parent = character;

	const playerAttachment = createAttachment(character.HumanoidRootPart as MeshPart);
	playerAttachment.CFrame = new CFrame(0, -character.HumanoidRootPart.Size.Y / 2, 0);

	const appearanceAttachment = createAttachment(appearanceRig.HumanoidRootPart);
	appearanceAttachment.CFrame = new CFrame(0, -appearanceRig.HumanoidRootPart.Size.Y / 2, 0);

	const RigidConstraint = new Instance("RigidConstraint");
	RigidConstraint.Attachment0 = playerAttachment;
	RigidConstraint.Attachment1 = appearanceAttachment;
	RigidConstraint.Parent = appearanceRig;

	appearanceAttachment.AddTag("Visuals_TiltCharacter");

	return { animator, appearanceRig, playerAttachment };
}
