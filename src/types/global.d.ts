interface _G {
	/** Enable React dev mode. */
	__DEV__: boolean;
	/** Enable React profiling mode. */
	__PROFILE__: boolean;
}

interface PlayerRig extends Model {
	Humanoid: Humanoid;
	HumanoidRootPart: BasePart;
}

interface QuirkymalAppearance extends Model {
	HumanoidRootPart: {
			root: Bone & {
				body: Bone & {
					[index: string]: Bone;
					HeadWear: Bone;
				};
			};
		} & MeshPart;
	};
}

interface QuirkymalPlayer {
	Appearance: QuirkymalAppearance;
}

interface Lobby {
	readonly Host: Player;
	readonly ID: string;
	readonly Players: readonly Player[];
}

// type QuirkymalName = keyof typeof QuirkymalTuning;

interface HeadWearItem extends MeshPart {
	Attachment: Attachment;
}
