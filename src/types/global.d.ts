interface _G {
	/** Enable React dev mode. */
	__DEV__: boolean;
	/** Enable React profiling mode. */
	__PROFILE__: boolean;
}

interface PlayerRig extends Model {
	Humanoid: Humanoid;
	HumanoidRootPart: MeshPart;
}

interface QuirkymalAppearance extends Model {
	HumanoidRootPart: MeshPart;
}
