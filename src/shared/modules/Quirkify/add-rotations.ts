import { CollectionService, Players, Workspace } from "@rbxts/services";

const DELTA_SPEED = 7;
const RAYCAST_PARAMS = new RaycastParams();

export default function addRotations(Attachment: Attachment, Delta: number) {
	RAYCAST_PARAMS.FilterDescendantsInstances = [
		Players.GetDescendants() as unknown as Instance,
		Workspace.WaitForChild("Debris"),
		CollectionService.GetTagged("Visuals-Quirkymal") as unknown as Instance,
	];

	const HumanoidRootPart = Attachment.Parent as MeshPart;
	const Humanoid = HumanoidRootPart.Parent?.WaitForChild("Humanoid") as Humanoid;

	if (!HumanoidRootPart || !Humanoid) {
		return;
	}

	// Raycast downward from the attachment's position
	const RaycastResult = Workspace.Raycast(
		HumanoidRootPart.Position,
		new Vector3(0, -HumanoidRootPart.Size.Y, 0),
		RAYCAST_PARAMS,
	);

	if (
		RaycastResult &&
		math.abs(HumanoidRootPart.Orientation.Z) < 2 &&
		// math.abs(RaycastResult.Normal.Dot(Vector3.yAxis)) > 0.75 &&
		Humanoid.GetState() === Enum.HumanoidStateType.Running
	) {
		// Get the normal of the surface the attachment is on

		const position = RaycastResult.Position;
		const plrLookVector = HumanoidRootPart.CFrame.LookVector;

		// This is where the solution lies
		const up = RaycastResult.Normal;
		const right = up.Cross(plrLookVector.mul(-1)).Unit;
		const forward = up.Cross(right).mul(-1).Unit;

		const finalCf = CFrame.fromMatrix(position, right, up, forward);

		// set values for BodyGyro and BodyPosition inside pet rootpart
		Attachment.WorldCFrame = Attachment.WorldCFrame.Lerp(finalCf, DELTA_SPEED * Delta);
	} else {
		Attachment.CFrame = Attachment.CFrame.Lerp(new CFrame(0, -HumanoidRootPart.Size.Y / 2, 0), Delta);
	}
}
