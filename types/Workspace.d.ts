interface Workspace extends Model {
	GoldChest: Model & {
		Main3: MeshPart;
		["GoldPile.001"]: MeshPart;
		GoldChest2: MeshPart;
		Lock: MeshPart;
		["UpperMain.001"]: MeshPart;
		UpperMain2: MeshPart;
		Main: MeshPart;
		Main2: MeshPart;
	};
	Sections: Model & {
		Highlight: Highlight;
	};
	MeshPart: MeshPart;
	MiniAtmosphere_Spawn: Part & {
		AtmosphereCreater: Script;
	};
	Button: Model & {
		Button: MeshPart & {
			BouncerVFX: Attachment & {
				LineSet1: Attachment & {
					Line4: Attachment & {
						EmitFrom: Attachment & {
							Lines: ParticleEmitter;
						};
					};
					Line3: Attachment & {
						EmitFrom: Attachment & {
							Lines: ParticleEmitter;
						};
					};
					Line2: Attachment & {
						EmitFrom: Attachment & {
							Lines: ParticleEmitter;
						};
					};
					Line1: Attachment & {
						EmitFrom: Attachment & {
							Lines: ParticleEmitter;
						};
					};
				};
				LineSet2: Attachment & {
					Line4: Attachment & {
						EmitFrom: Attachment & {
							Lines: ParticleEmitter;
						};
					};
					Line3: Attachment & {
						EmitFrom: Attachment & {
							Lines: ParticleEmitter;
						};
					};
					Line2: Attachment & {
						EmitFrom: Attachment & {
							Lines: ParticleEmitter;
						};
					};
					Line1: Attachment & {
						EmitFrom: Attachment & {
							Lines: ParticleEmitter;
						};
					};
				};
				Circle1: ParticleEmitter;
			};
			ToggleValue: ObjectValue;
		};
		Holder: MeshPart;
		Highlight: Highlight;
	};
	World: Folder & {
		Map: Folder & {
			["Golden Balloons"]: Folder & {
				["1"]: MeshPart & {
					Part: Part & {
						Target: Attachment;
					};
					AlignPosition: AlignPosition;
					GoldShine: Attachment & {
						Shine: ParticleEmitter;
					};
					Stars: ParticleEmitter;
					Rope: Attachment;
					Float: VectorForce;
					Force: Attachment;
					RopeConstraint: RopeConstraint;
					AlignOrientation: AlignOrientation;
				};
				["3"]: MeshPart & {
					Part: Part & {
						Target: Attachment;
					};
					AlignPosition: AlignPosition;
					GoldShine: Attachment & {
						Shine: ParticleEmitter;
					};
					Stars: ParticleEmitter;
					Rope: Attachment;
					Float: VectorForce;
					Force: Attachment;
					RopeConstraint: RopeConstraint;
					AlignOrientation: AlignOrientation;
				};
				["2"]: MeshPart & {
					Part: Part & {
						Target: Attachment;
					};
					AlignPosition: AlignPosition;
					GoldShine: Attachment & {
						Shine: ParticleEmitter;
					};
					Stars: ParticleEmitter;
					Rope: Attachment;
					Float: VectorForce;
					Force: Attachment;
					RopeConstraint: RopeConstraint;
					AlignOrientation: AlignOrientation;
				};
			};
			Parts: Folder & {
				Areas: Folder & {
					["Jumpin' Jungle"]: Folder & {
						Brushes: Folder & {
							Bush_2: Model;
						};
						Fences: Folder;
						Hammers: Folder;
						Vines: Folder;
						Fans: Folder;
						Mushrooms: Folder;
						Rocks: Folder;
						Paths: Folder & {
							Normal: Folder;
							Cave: Folder;
							Part: Part;
						};
						Planks: Folder;
						Banners: Folder & {
							Banner: Model & {
								ThreeDTextObject: Model & {
									ThreeDTextBoundingBox: Part;
									exclam: MeshPart;
									O: MeshPart;
									ThreeDTextHandle: Part;
									ThreeDTextParams: StringValue;
								};
							};
						};
						Spikes: Folder;
						DarkerGround: Folder;
						Walls: Folder & {
							Lower: Folder;
							Decorations: Folder;
							Upper: Folder;
						};
						Arrows: Folder;
						SystemSets: Folder;
						Bridges: Folder & {
							["Broken Bridge"]: Model & {
								Support: Model;
								Planks: Model;
								Pillars: Model;
								Ropes: Model;
							};
						};
						Grasses: Folder;
						Signs: Folder & {
							Sign: Model;
						};
						Trees: Folder & {
							Big: Folder;
							Tree_3: Model & {
								Trunk: Model;
								Leaves: Model;
								Vines: Model;
							};
						};
						Torches: Folder;
					};
					["Dark Depths"]: Folder & {
						Paths: Folder;
						Lines: Folder & {
							Line: Model;
						};
						["Decorations Balloons"]: Folder;
						Spikes: Folder;
						Walls: Folder;
						Water: Folder;
						Decorations: Folder & {
							Paper: Part & {
								SurfaceGui: SurfaceGui;
							};
							CaveEnter: Model;
							["Golden Weapon"]: Model;
							Column: Model;
						};
						Planks: Folder;
						Fans: Folder;
						["Decoration Ropes"]: Folder;
						Hammers: Folder;
						Arrows: Folder;
					};
					Spawn: Folder & {
						Paths: Folder;
						Shop: Model;
						Decorations: Folder & {
							Mushroom: Model;
							["Small Bucket (Water)"]: Model & {
								Water: Part;
							};
							Sword: Model;
							Book: Model;
							["Tree#1"]: Model;
							Trunk: Model & {
								Inside: Part;
							};
							["To-Do List"]: Part & {
								SurfaceGui: SurfaceGui;
							};
							Bridge: Model;
							Sign: Model;
							Coffee: Model;
						};
						Balloons: Folder;
						Walls: Folder;
					};
				};
			};
		};
	};
	Checkpoints: Folder & {
		["1"]: Model;
		["4"]: Model;
		["3"]: Model;
		["2"]: Model;
	};
	Camera: Camera;
	Obstacles: Folder;
	RopeBag: MeshPart;
	TestSpawn: Part;
	Dove: Model & {
		HumanoidRootPart: MeshPart & {
			root: Bone & {
				body: Bone & {
					["feet.R"]: Bone;
					["feet.L"]: Bone;
					["wing.R"]: Bone;
					["tail.01"]: Bone;
					["hair.01"]: Bone;
					["hair.02"]: Bone;
					["wing.L"]: Bone;
					["tail.02"]: Bone;
				};
			};
		};
		InitialPoses: Folder & {
			["hair.02_Original"]: CFrameValue;
			Mesh_Initial: CFrameValue;
			["feet.L_Composited"]: CFrameValue;
			Mesh_Original: CFrameValue;
			root_Initial: CFrameValue;
			Mesh_Composited: CFrameValue;
			body_Initial: CFrameValue;
			["hair.01_Composited"]: CFrameValue;
			["wing.L_Composited"]: CFrameValue;
			["tail.01_Original"]: CFrameValue;
			root_Composited: CFrameValue;
			["tail.02_Initial"]: CFrameValue;
			["wing.L_Original"]: CFrameValue;
			["feet.R_Original"]: CFrameValue;
			["feet.R_Initial"]: CFrameValue;
			body_Original: CFrameValue;
			["tail.01_Composited"]: CFrameValue;
			["wing.R_Composited"]: CFrameValue;
			["wing.L_Initial"]: CFrameValue;
			["feet.R_Composited"]: CFrameValue;
			body_Composited: CFrameValue;
			["wing.R_Original"]: CFrameValue;
			root_Original: CFrameValue;
			["tail.01_Initial"]: CFrameValue;
			["hair.02_Initial"]: CFrameValue;
			["hair.01_Initial"]: CFrameValue;
			Rig_Composited: CFrameValue;
			["hair.01_Original"]: CFrameValue;
			Rig_Initial: CFrameValue;
			["feet.L_Original"]: CFrameValue;
			["feet.L_Initial"]: CFrameValue;
			["wing.R_Initial"]: CFrameValue;
			["tail.02_Original"]: CFrameValue;
			["hair.02_Composited"]: CFrameValue;
			["tail.02_Composited"]: CFrameValue;
			Rig_Original: CFrameValue;
		};
	};
	NaneInputLabel: ImageLabel & {
		Input: TextBox;
		LabelName: TextLabel;
	};
	RopeLobbies: Folder;
	Spawns: Folder & {
		SpawnLocation: SpawnLocation;
	};
	GoldBag: Model & {
		Bag: MeshPart;
		Gold: MeshPart;
	};
	Debris: Folder;
	["Lumina Particles"]: Folder;
	Gold3: MeshPart;
}
