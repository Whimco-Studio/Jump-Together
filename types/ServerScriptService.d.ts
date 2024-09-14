interface ServerScriptService extends Instance {
	StarterCharacter: Model & {
		HumanoidRootPart: MeshPart & {
			JumpForce: Attachment;
			Handles: Handles;
			AntiGravity: VectorForce;
		};
		Humanoid: Humanoid;
	};
}
