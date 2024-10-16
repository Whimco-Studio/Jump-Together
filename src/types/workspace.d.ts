interface Workspace extends Model {
	Button: {
		Button: {
			BouncerVFX: {
				Circle1: ParticleEmitter;
				LineSet1: {
					Line1: {
						EmitFrom: {
							Lines: ParticleEmitter;
						} & Attachment;
					} & Attachment;
					Line2: {
						EmitFrom: {
							Lines: ParticleEmitter;
						} & Attachment;
					} & Attachment;
					Line3: {
						EmitFrom: {
							Lines: ParticleEmitter;
						} & Attachment;
					} & Attachment;
					Line4: {
						EmitFrom: {
							Lines: ParticleEmitter;
						} & Attachment;
					} & Attachment;
				} & Attachment;
				LineSet2: {
					Line1: {
						EmitFrom: {
							Lines: ParticleEmitter;
						} & Attachment;
					} & Attachment;
					Line2: {
						EmitFrom: {
							Lines: ParticleEmitter;
						} & Attachment;
					} & Attachment;
					Line3: {
						EmitFrom: {
							Lines: ParticleEmitter;
						} & Attachment;
					} & Attachment;
					Line4: {
						EmitFrom: {
							Lines: ParticleEmitter;
						} & Attachment;
					} & Attachment;
				} & Attachment;
			} & Attachment;
			ToggleValue: ObjectValue;
		} & MeshPart;
		Highlight: Highlight;
		Holder: MeshPart;
	} & Model;
	Camera: Camera;
	Checkpoints: {
		["1"]: Model;
		["2"]: Model;
		["3"]: Model;
		["4"]: Model;
	} & Folder;
	Debris: Folder;
	Dove: {
		HumanoidRootPart: {
			root: {
				body: {
					["feet.L"]: Bone;
					["feet.R"]: Bone;
					["hair.01"]: Bone;
					["hair.02"]: Bone;
					["tail.01"]: Bone;
					["tail.02"]: Bone;
					["wing.L"]: Bone;
					["wing.R"]: Bone;
				} & Bone;
			} & Bone;
		} & MeshPart;
		InitialPoses: {
			Mesh_Composited: CFrameValue;
			Mesh_Initial: CFrameValue;
			Mesh_Original: CFrameValue;
			Rig_Composited: CFrameValue;
			Rig_Initial: CFrameValue;
			Rig_Original: CFrameValue;
			body_Composited: CFrameValue;
			body_Initial: CFrameValue;
			body_Original: CFrameValue;
			["feet.L_Composited"]: CFrameValue;
			["feet.L_Initial"]: CFrameValue;
			["feet.L_Original"]: CFrameValue;
			["feet.R_Composited"]: CFrameValue;
			["feet.R_Initial"]: CFrameValue;
			["feet.R_Original"]: CFrameValue;
			["hair.01_Composited"]: CFrameValue;
			["hair.01_Initial"]: CFrameValue;
			["hair.01_Original"]: CFrameValue;
			["hair.02_Composited"]: CFrameValue;
			["hair.02_Initial"]: CFrameValue;
			["hair.02_Original"]: CFrameValue;
			root_Composited: CFrameValue;
			root_Initial: CFrameValue;
			root_Original: CFrameValue;
			["tail.01_Composited"]: CFrameValue;
			["tail.01_Initial"]: CFrameValue;
			["tail.01_Original"]: CFrameValue;
			["tail.02_Composited"]: CFrameValue;
			["tail.02_Initial"]: CFrameValue;
			["tail.02_Original"]: CFrameValue;
			["wing.L_Composited"]: CFrameValue;
			["wing.L_Initial"]: CFrameValue;
			["wing.L_Original"]: CFrameValue;
			["wing.R_Composited"]: CFrameValue;
			["wing.R_Initial"]: CFrameValue;
			["wing.R_Original"]: CFrameValue;
		} & Folder;
	} & Model;
	Gold3: MeshPart;
	GoldBag: {
		Bag: MeshPart;
		Gold: MeshPart;
	} & Model;
	GoldChest: {
		GoldChest2: MeshPart;
		["GoldPile.001"]: MeshPart;
		Lock: MeshPart;
		Main: MeshPart;
		Main2: MeshPart;
		Main3: MeshPart;
		["UpperMain.001"]: MeshPart;
		UpperMain2: MeshPart;
	} & Model;
	["Lumina Particles"]: Folder;
	MeshPart: MeshPart;
	MiniAtmosphere_Spawn: {
		AtmosphereCreater: Script;
	} & Part;
	NaneInputLabel: {
		Input: TextBox;
		LabelName: TextLabel;
	} & ImageLabel;
	Obstacles: Folder;
	RopeBag: MeshPart;
	RopeLobbies: Folder;
	Sections: {
		Highlight: Highlight;
	} & Model;
	Spawns: {
		SpawnLocation: SpawnLocation;
	} & Folder;
	TestSpawn: Part;
	World: {
		Map: {
			["Golden Balloons"]: {
				["1"]: {
					AlignOrientation: AlignOrientation;
					AlignPosition: AlignPosition;
					Float: VectorForce;
					Force: Attachment;
					GoldShine: {
						Shine: ParticleEmitter;
					} & Attachment;
					Part: {
						Target: Attachment;
					} & Part;
					Rope: Attachment;
					RopeConstraint: RopeConstraint;
					Stars: ParticleEmitter;
				} & MeshPart;
				["2"]: {
					AlignOrientation: AlignOrientation;
					AlignPosition: AlignPosition;
					Float: VectorForce;
					Force: Attachment;
					GoldShine: {
						Shine: ParticleEmitter;
					} & Attachment;
					Part: {
						Target: Attachment;
					} & Part;
					Rope: Attachment;
					RopeConstraint: RopeConstraint;
					Stars: ParticleEmitter;
				} & MeshPart;
				["3"]: {
					AlignOrientation: AlignOrientation;
					AlignPosition: AlignPosition;
					Float: VectorForce;
					Force: Attachment;
					GoldShine: {
						Shine: ParticleEmitter;
					} & Attachment;
					Part: {
						Target: Attachment;
					} & Part;
					Rope: Attachment;
					RopeConstraint: RopeConstraint;
					Stars: ParticleEmitter;
				} & MeshPart;
			} & Folder;
			Parts: {
				Areas: {
					["Dark Depths"]: {
						Arrows: Folder;
						["Decoration Ropes"]: Folder;
						Decorations: {
							CaveEnter: Model;
							Column: Model;
							["Golden Weapon"]: Model;
							Paper: {
								SurfaceGui: SurfaceGui;
							} & Part;
						} & Folder;
						["Decorations Balloons"]: Folder;
						Fans: Folder;
						Hammers: Folder;
						Lines: {
							Line: Model;
						} & Folder;
						Paths: Folder;
						Planks: Folder;
						Spikes: Folder;
						Walls: Folder;
						Water: Folder;
					} & Folder;
					["Jumpin' Jungle"]: {
						Arrows: Folder;
						Banners: {
							Banner: {
								ThreeDTextObject: {
									O: MeshPart;
									ThreeDTextBoundingBox: Part;
									ThreeDTextHandle: Part;
									ThreeDTextParams: StringValue;
									exclam: MeshPart;
								} & Model;
							} & Model;
						} & Folder;
						Bridges: {
							["Broken Bridge"]: {
								Pillars: Model;
								Planks: Model;
								Ropes: Model;
								Support: Model;
							} & Model;
						} & Folder;
						Brushes: {
							Bush_2: Model;
						} & Folder;
						DarkerGround: Folder;
						Fans: Folder;
						Fences: Folder;
						Grasses: Folder;
						Hammers: Folder;
						Mushrooms: Folder;
						Paths: {
							Cave: Folder;
							Normal: Folder;
							Part: Part;
						} & Folder;
						Planks: Folder;
						Rocks: Folder;
						Signs: {
							Sign: Model;
						} & Folder;
						Spikes: Folder;
						SystemSets: Folder;
						Torches: Folder;
						Trees: {
							Big: Folder;
							Tree_3: {
								Leaves: Model;
								Trunk: Model;
								Vines: Model;
							} & Model;
						} & Folder;
						Vines: Folder;
						Walls: {
							Decorations: Folder;
							Lower: Folder;
							Upper: Folder;
						} & Folder;
					} & Folder;
					Spawn: {
						Balloons: Folder;
						Decorations: {
							Book: Model;
							Bridge: Model;
							Coffee: Model;
							Mushroom: Model;
							Sign: Model;
							["Small Bucket (Water)"]: {
								Water: Part;
							} & Model;
							Sword: Model;
							["To-Do List"]: {
								SurfaceGui: SurfaceGui;
							} & Part;
							["Tree#1"]: Model;
							Trunk: {
								Inside: Part;
							} & Model;
						} & Folder;
						Paths: Folder;
						Shop: Model;
						Walls: Folder;
					} & Folder;
				} & Folder;
			} & Folder;
		} & Folder;
	} & Folder;
}
