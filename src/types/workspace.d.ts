interface Workspace extends WorldRoot {
	["AnimSaves Upload"]: {
		Frame: {
			Cancel: {
				UITextSizeConstraint: UITextSizeConstraint;
			} & TextButton;
			Continue: {
				UITextSizeConstraint: UITextSizeConstraint;
			} & TextButton;
			UIListLayout: UIListLayout;
		} & Frame;
		Main: Script;
	} & Folder;
	Baseplate: {
		Texture: Texture;
	} & Part;
	Camera: Camera;
	Characters: Model;
	Debris: Folder;
	Folder: Folder;
	Quirkymals: {
		Alligator: {
			HumanoidRootPart: {
				root: {
					body: {
						["leg.B.L"]: Bone;
						["leg.B.R"]: Bone;
						["leg.F.L"]: Bone;
						["leg.F.R"]: Bone;
						["tail.01"]: {
							["tail.02"]: Bone;
						} & Bone;
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
				["leg.B.L_Composited"]: CFrameValue;
				["leg.B.L_Initial"]: CFrameValue;
				["leg.B.L_Original"]: CFrameValue;
				["leg.B.R_Composited"]: CFrameValue;
				["leg.B.R_Initial"]: CFrameValue;
				["leg.B.R_Original"]: CFrameValue;
				["leg.F.L_Composited"]: CFrameValue;
				["leg.F.L_Initial"]: CFrameValue;
				["leg.F.L_Original"]: CFrameValue;
				["leg.F.R_Composited"]: CFrameValue;
				["leg.F.R_Initial"]: CFrameValue;
				["leg.F.R_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				root_Initial: CFrameValue;
				root_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				["tail.02_Composited"]: CFrameValue;
				["tail.02_Initial"]: CFrameValue;
				["tail.02_Original"]: CFrameValue;
			} & Folder;
		} & Model;
		Alpaca: {
			HumanoidRootPart: {
				root: {
					body: {
						["ear.L"]: Bone;
						["ear.R"]: Bone;
						["leg.B.L"]: Bone;
						["leg.B.R"]: Bone;
						["leg.F.L"]: Bone;
						["leg.F.R"]: Bone;
						["tail.01"]: {
							["tail.02"]: Bone;
						} & Bone;
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
				["ear.L_Composited"]: CFrameValue;
				["ear.L_Initial"]: CFrameValue;
				["ear.L_Original"]: CFrameValue;
				["ear.R_Composited"]: CFrameValue;
				["ear.R_Initial"]: CFrameValue;
				["ear.R_Original"]: CFrameValue;
				["leg.B.L_Composited"]: CFrameValue;
				["leg.B.L_Initial"]: CFrameValue;
				["leg.B.L_Original"]: CFrameValue;
				["leg.B.R_Composited"]: CFrameValue;
				["leg.B.R_Initial"]: CFrameValue;
				["leg.B.R_Original"]: CFrameValue;
				["leg.F.L_Composited"]: CFrameValue;
				["leg.F.L_Initial"]: CFrameValue;
				["leg.F.L_Original"]: CFrameValue;
				["leg.F.R_Composited"]: CFrameValue;
				["leg.F.R_Initial"]: CFrameValue;
				["leg.F.R_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				root_Initial: CFrameValue;
				root_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				["tail.02_Composited"]: CFrameValue;
				["tail.02_Initial"]: CFrameValue;
				["tail.02_Original"]: CFrameValue;
			} & Folder;
		} & Model;
		Antelope: {
			HumanoidRootPart: {
				root: {
					body: {
						["ear.L"]: Bone;
						["ear.R"]: Bone;
						["leg.B.L"]: Bone;
						["leg.B.R"]: Bone;
						["leg.F.L"]: Bone;
						["leg.F.R"]: Bone;
						["tail.01"]: Bone;
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
				["ear.L_Composited"]: CFrameValue;
				["ear.L_Initial"]: CFrameValue;
				["ear.L_Original"]: CFrameValue;
				["ear.R_Composited"]: CFrameValue;
				["ear.R_Initial"]: CFrameValue;
				["ear.R_Original"]: CFrameValue;
				["leg.B.L_Composited"]: CFrameValue;
				["leg.B.L_Initial"]: CFrameValue;
				["leg.B.L_Original"]: CFrameValue;
				["leg.B.R_Composited"]: CFrameValue;
				["leg.B.R_Initial"]: CFrameValue;
				["leg.B.R_Original"]: CFrameValue;
				["leg.F.L_Composited"]: CFrameValue;
				["leg.F.L_Initial"]: CFrameValue;
				["leg.F.L_Original"]: CFrameValue;
				["leg.F.R_Composited"]: CFrameValue;
				["leg.F.R_Initial"]: CFrameValue;
				["leg.F.R_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				root_Initial: CFrameValue;
				root_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["tail.01_Original"]: CFrameValue;
			} & Folder;
		} & Model;
		ArcticFox: {
			HumanoidRootPart: {
				root: {
					body: {
						["ear.L"]: Bone;
						["ear.R"]: Bone;
						["leg.B.L"]: Bone;
						["leg.B.R"]: Bone;
						["leg.F.L"]: Bone;
						["leg.F.R"]: Bone;
						["tail.01"]: {
							["tail.02"]: Bone;
						} & Bone;
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
				["ear.L_Composited"]: CFrameValue;
				["ear.L_Initial"]: CFrameValue;
				["ear.L_Original"]: CFrameValue;
				["ear.R_Composited"]: CFrameValue;
				["ear.R_Initial"]: CFrameValue;
				["ear.R_Original"]: CFrameValue;
				["leg.B.L_Composited"]: CFrameValue;
				["leg.B.L_Initial"]: CFrameValue;
				["leg.B.L_Original"]: CFrameValue;
				["leg.B.R_Composited"]: CFrameValue;
				["leg.B.R_Initial"]: CFrameValue;
				["leg.B.R_Original"]: CFrameValue;
				["leg.F.L_Composited"]: CFrameValue;
				["leg.F.L_Initial"]: CFrameValue;
				["leg.F.L_Original"]: CFrameValue;
				["leg.F.R_Composited"]: CFrameValue;
				["leg.F.R_Initial"]: CFrameValue;
				["leg.F.R_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				root_Initial: CFrameValue;
				root_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				["tail.02_Composited"]: CFrameValue;
				["tail.02_Initial"]: CFrameValue;
				["tail.02_Original"]: CFrameValue;
			} & Folder;
		} & Model;
		Armadillo: {
			HumanoidRootPart: {
				root: {
					body: {
						["ear.L"]: Bone;
						["ear.R"]: Bone;
						["leg.B.L"]: Bone;
						["leg.B.R"]: Bone;
						["leg.F.L"]: Bone;
						["leg.F.R"]: Bone;
						["tail.01"]: {
							["tail.02"]: Bone;
						} & Bone;
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
				["ear.L_Composited"]: CFrameValue;
				["ear.L_Initial"]: CFrameValue;
				["ear.L_Original"]: CFrameValue;
				["ear.R_Composited"]: CFrameValue;
				["ear.R_Initial"]: CFrameValue;
				["ear.R_Original"]: CFrameValue;
				["leg.B.L_Composited"]: CFrameValue;
				["leg.B.L_Initial"]: CFrameValue;
				["leg.B.L_Original"]: CFrameValue;
				["leg.B.R_Composited"]: CFrameValue;
				["leg.B.R_Initial"]: CFrameValue;
				["leg.B.R_Original"]: CFrameValue;
				["leg.F.L_Composited"]: CFrameValue;
				["leg.F.L_Initial"]: CFrameValue;
				["leg.F.L_Original"]: CFrameValue;
				["leg.F.R_Composited"]: CFrameValue;
				["leg.F.R_Initial"]: CFrameValue;
				["leg.F.R_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				root_Initial: CFrameValue;
				root_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				["tail.02_Composited"]: CFrameValue;
				["tail.02_Initial"]: CFrameValue;
				["tail.02_Original"]: CFrameValue;
			} & Folder;
		} & Model;
		Arowana: {
			HumanoidRootPart: {
				root: {
					body: {
						["fin.00.L"]: Bone;
						["fin.00.R"]: Bone;
						["fin.01"]: Bone;
						["fin.02"]: Bone;
						["fin.L"]: Bone;
						["fin.R"]: Bone;
						["tail.01"]: Bone;
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
				["fin.00.L_Composited"]: CFrameValue;
				["fin.00.L_Initial"]: CFrameValue;
				["fin.00.L_Original"]: CFrameValue;
				["fin.00.R_Composited"]: CFrameValue;
				["fin.00.R_Initial"]: CFrameValue;
				["fin.00.R_Original"]: CFrameValue;
				["fin.01_Composited"]: CFrameValue;
				["fin.01_Initial"]: CFrameValue;
				["fin.01_Original"]: CFrameValue;
				["fin.02_Composited"]: CFrameValue;
				["fin.02_Initial"]: CFrameValue;
				["fin.02_Original"]: CFrameValue;
				["fin.L_Composited"]: CFrameValue;
				["fin.L_Initial"]: CFrameValue;
				["fin.L_Original"]: CFrameValue;
				["fin.R_Composited"]: CFrameValue;
				["fin.R_Initial"]: CFrameValue;
				["fin.R_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				root_Initial: CFrameValue;
				root_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["tail.01_Original"]: CFrameValue;
			} & Folder;
		} & Model;
		Baboon: {
			HumanoidRootPart: {
				root: {
					body: {
						["ear.L"]: Bone;
						["ear.R"]: Bone;
						["leg.B.L"]: Bone;
						["leg.B.R"]: Bone;
						["leg.F.L"]: Bone;
						["leg.F.R"]: Bone;
						["tail.01"]: {
							["tail.02"]: Bone;
						} & Bone;
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
				["ear.L_Composited"]: CFrameValue;
				["ear.L_Initial"]: CFrameValue;
				["ear.L_Original"]: CFrameValue;
				["ear.R_Composited"]: CFrameValue;
				["ear.R_Initial"]: CFrameValue;
				["ear.R_Original"]: CFrameValue;
				["leg.B.L_Composited"]: CFrameValue;
				["leg.B.L_Initial"]: CFrameValue;
				["leg.B.L_Original"]: CFrameValue;
				["leg.B.R_Composited"]: CFrameValue;
				["leg.B.R_Initial"]: CFrameValue;
				["leg.B.R_Original"]: CFrameValue;
				["leg.F.L_Composited"]: CFrameValue;
				["leg.F.L_Initial"]: CFrameValue;
				["leg.F.L_Original"]: CFrameValue;
				["leg.F.R_Composited"]: CFrameValue;
				["leg.F.R_Initial"]: CFrameValue;
				["leg.F.R_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				root_Initial: CFrameValue;
				root_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				["tail.02_Composited"]: CFrameValue;
				["tail.02_Initial"]: CFrameValue;
				["tail.02_Original"]: CFrameValue;
			} & Folder;
		} & Model;
		Badger: {
			HumanoidRootPart: {
				root: {
					body: {
						["ear.L"]: Bone;
						["ear.R"]: Bone;
						["leg.B.L"]: Bone;
						["leg.B.R"]: Bone;
						["leg.F.L"]: Bone;
						["leg.F.R"]: Bone;
						["tail.01"]: {
							["tail.02"]: Bone;
						} & Bone;
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
				["ear.L_Composited"]: CFrameValue;
				["ear.L_Initial"]: CFrameValue;
				["ear.L_Original"]: CFrameValue;
				["ear.R_Composited"]: CFrameValue;
				["ear.R_Initial"]: CFrameValue;
				["ear.R_Original"]: CFrameValue;
				["leg.B.L_Composited"]: CFrameValue;
				["leg.B.L_Initial"]: CFrameValue;
				["leg.B.L_Original"]: CFrameValue;
				["leg.B.R_Composited"]: CFrameValue;
				["leg.B.R_Initial"]: CFrameValue;
				["leg.B.R_Original"]: CFrameValue;
				["leg.F.L_Composited"]: CFrameValue;
				["leg.F.L_Initial"]: CFrameValue;
				["leg.F.L_Original"]: CFrameValue;
				["leg.F.R_Composited"]: CFrameValue;
				["leg.F.R_Initial"]: CFrameValue;
				["leg.F.R_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				root_Initial: CFrameValue;
				root_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				["tail.02_Composited"]: CFrameValue;
				["tail.02_Initial"]: CFrameValue;
				["tail.02_Original"]: CFrameValue;
			} & Folder;
		} & Model;
		Bandicoot: {
			HumanoidRootPart: {
				root: {
					body: {
						["ear.L"]: Bone;
						["ear.R"]: Bone;
						["leg.B.L"]: Bone;
						["leg.B.R"]: Bone;
						["leg.F.L"]: Bone;
						["leg.F.R"]: Bone;
						["tail.01"]: Bone;
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
				["ear.L_Composited"]: CFrameValue;
				["ear.L_Initial"]: CFrameValue;
				["ear.L_Original"]: CFrameValue;
				["ear.R_Composited"]: CFrameValue;
				["ear.R_Initial"]: CFrameValue;
				["ear.R_Original"]: CFrameValue;
				["leg.B.L_Composited"]: CFrameValue;
				["leg.B.L_Initial"]: CFrameValue;
				["leg.B.L_Original"]: CFrameValue;
				["leg.B.R_Composited"]: CFrameValue;
				["leg.B.R_Initial"]: CFrameValue;
				["leg.B.R_Original"]: CFrameValue;
				["leg.F.L_Composited"]: CFrameValue;
				["leg.F.L_Initial"]: CFrameValue;
				["leg.F.L_Original"]: CFrameValue;
				["leg.F.R_Composited"]: CFrameValue;
				["leg.F.R_Initial"]: CFrameValue;
				["leg.F.R_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				root_Initial: CFrameValue;
				root_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["tail.01_Original"]: CFrameValue;
			} & Folder;
		} & Model;
		Bass: {
			HumanoidRootPart: {
				root: {
					body: {
						["fin.01"]: Bone;
						["fin.02"]: Bone;
						["fin.L"]: Bone;
						["fin.L.01"]: Bone;
						["fin.R"]: Bone;
						["fin.R.01"]: Bone;
						["tail.01"]: Bone;
						["tail.02"]: Bone;
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
				["fin.01_Composited"]: CFrameValue;
				["fin.01_Initial"]: CFrameValue;
				["fin.01_Original"]: CFrameValue;
				["fin.02_Composited"]: CFrameValue;
				["fin.02_Initial"]: CFrameValue;
				["fin.02_Original"]: CFrameValue;
				["fin.L.01_Composited"]: CFrameValue;
				["fin.L.01_Initial"]: CFrameValue;
				["fin.L.01_Original"]: CFrameValue;
				["fin.L_Composited"]: CFrameValue;
				["fin.L_Initial"]: CFrameValue;
				["fin.L_Original"]: CFrameValue;
				["fin.R.01_Composited"]: CFrameValue;
				["fin.R.01_Initial"]: CFrameValue;
				["fin.R.01_Original"]: CFrameValue;
				["fin.R_Composited"]: CFrameValue;
				["fin.R_Initial"]: CFrameValue;
				["fin.R_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				root_Initial: CFrameValue;
				root_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				["tail.02_Composited"]: CFrameValue;
				["tail.02_Initial"]: CFrameValue;
				["tail.02_Original"]: CFrameValue;
			} & Folder;
		} & Model;
		Bat: {
			HumanoidRootPart: {
				root: {
					body: {
						["ear.L"]: Bone;
						["ear.R"]: Bone;
						["feet.L"]: Bone;
						["feet.R"]: Bone;
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
				["ear.L_Composited"]: CFrameValue;
				["ear.L_Initial"]: CFrameValue;
				["ear.L_Original"]: CFrameValue;
				["ear.R_Composited"]: CFrameValue;
				["ear.R_Initial"]: CFrameValue;
				["ear.R_Original"]: CFrameValue;
				["feet.L_Composited"]: CFrameValue;
				["feet.L_Initial"]: CFrameValue;
				["feet.L_Original"]: CFrameValue;
				["feet.R_Composited"]: CFrameValue;
				["feet.R_Initial"]: CFrameValue;
				["feet.R_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				root_Initial: CFrameValue;
				root_Original: CFrameValue;
				["wing.L_Composited"]: CFrameValue;
				["wing.L_Initial"]: CFrameValue;
				["wing.L_Original"]: CFrameValue;
				["wing.R_Composited"]: CFrameValue;
				["wing.R_Initial"]: CFrameValue;
				["wing.R_Original"]: CFrameValue;
			} & Folder;
		} & Model;
		Bear: {
			HumanoidRootPart: {
				root: {
					body: {
						["ear.L"]: Bone;
						["ear.R"]: Bone;
						["leg.B.L"]: Bone;
						["leg.B.R"]: Bone;
						["leg.F.L"]: Bone;
						["leg.F.R"]: Bone;
						["tail.01"]: Bone;
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
				["ear.L_Composited"]: CFrameValue;
				["ear.L_Initial"]: CFrameValue;
				["ear.L_Original"]: CFrameValue;
				["ear.R_Composited"]: CFrameValue;
				["ear.R_Initial"]: CFrameValue;
				["ear.R_Original"]: CFrameValue;
				["leg.B.L_Composited"]: CFrameValue;
				["leg.B.L_Initial"]: CFrameValue;
				["leg.B.L_Original"]: CFrameValue;
				["leg.B.R_Composited"]: CFrameValue;
				["leg.B.R_Initial"]: CFrameValue;
				["leg.B.R_Original"]: CFrameValue;
				["leg.F.L_Composited"]: CFrameValue;
				["leg.F.L_Initial"]: CFrameValue;
				["leg.F.L_Original"]: CFrameValue;
				["leg.F.R_Composited"]: CFrameValue;
				["leg.F.R_Initial"]: CFrameValue;
				["leg.F.R_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				root_Initial: CFrameValue;
				root_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["tail.01_Original"]: CFrameValue;
			} & Folder;
		} & Model;
		Beaver: {
			HumanoidRootPart: {
				root: {
					body: {
						["ear.L"]: Bone;
						["ear.R"]: Bone;
						["leg.B.L"]: Bone;
						["leg.B.R"]: Bone;
						["leg.F.L"]: Bone;
						["leg.F.R"]: Bone;
						["tail.01"]: {
							["tail.02"]: Bone;
						} & Bone;
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
				["ear.L_Composited"]: CFrameValue;
				["ear.L_Initial"]: CFrameValue;
				["ear.L_Original"]: CFrameValue;
				["ear.R_Composited"]: CFrameValue;
				["ear.R_Initial"]: CFrameValue;
				["ear.R_Original"]: CFrameValue;
				["leg.B.L_Composited"]: CFrameValue;
				["leg.B.L_Initial"]: CFrameValue;
				["leg.B.L_Original"]: CFrameValue;
				["leg.B.R_Composited"]: CFrameValue;
				["leg.B.R_Initial"]: CFrameValue;
				["leg.B.R_Original"]: CFrameValue;
				["leg.F.L_Composited"]: CFrameValue;
				["leg.F.L_Initial"]: CFrameValue;
				["leg.F.L_Original"]: CFrameValue;
				["leg.F.R_Composited"]: CFrameValue;
				["leg.F.R_Initial"]: CFrameValue;
				["leg.F.R_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				root_Initial: CFrameValue;
				root_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				["tail.02_Composited"]: CFrameValue;
				["tail.02_Initial"]: CFrameValue;
				["tail.02_Original"]: CFrameValue;
			} & Folder;
		} & Model;
		Beluga: {
			HumanoidRootPart: {
				root: {
					body: {
						["fin.L"]: Bone;
						["fin.R"]: Bone;
						["tail.01"]: {
							["tail.02"]: Bone;
						} & Bone;
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
				["fin.L_Composited"]: CFrameValue;
				["fin.L_Initial"]: CFrameValue;
				["fin.L_Original"]: CFrameValue;
				["fin.R_Composited"]: CFrameValue;
				["fin.R_Initial"]: CFrameValue;
				["fin.R_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				root_Initial: CFrameValue;
				root_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				["tail.02_Composited"]: CFrameValue;
				["tail.02_Initial"]: CFrameValue;
				["tail.02_Original"]: CFrameValue;
			} & Folder;
		} & Model;
		Bighorn: {
			HumanoidRootPart: {
				root: {
					body: {
						["ear.L"]: Bone;
						["ear.R"]: Bone;
						["leg.B.L"]: Bone;
						["leg.B.R"]: Bone;
						["leg.F.L"]: Bone;
						["leg.F.R"]: Bone;
						["tail.01"]: Bone;
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
				["ear.L_Composited"]: CFrameValue;
				["ear.L_Initial"]: CFrameValue;
				["ear.L_Original"]: CFrameValue;
				["ear.R_Composited"]: CFrameValue;
				["ear.R_Initial"]: CFrameValue;
				["ear.R_Original"]: CFrameValue;
				["leg.B.L_Composited"]: CFrameValue;
				["leg.B.L_Initial"]: CFrameValue;
				["leg.B.L_Original"]: CFrameValue;
				["leg.B.R_Composited"]: CFrameValue;
				["leg.B.R_Initial"]: CFrameValue;
				["leg.B.R_Original"]: CFrameValue;
				["leg.F.L_Composited"]: CFrameValue;
				["leg.F.L_Initial"]: CFrameValue;
				["leg.F.L_Original"]: CFrameValue;
				["leg.F.R_Composited"]: CFrameValue;
				["leg.F.R_Initial"]: CFrameValue;
				["leg.F.R_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				root_Initial: CFrameValue;
				root_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["tail.01_Original"]: CFrameValue;
			} & Folder;
		} & Model;
		Bison: {
			HumanoidRootPart: {
				root: {
					body: {
						["ear.L"]: Bone;
						["ear.R"]: Bone;
						["leg.B.L"]: Bone;
						["leg.B.R"]: Bone;
						["leg.F.L"]: Bone;
						["leg.F.R"]: Bone;
						["tail.01"]: {
							["tail.02"]: Bone;
						} & Bone;
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
				["ear.L_Composited"]: CFrameValue;
				["ear.L_Initial"]: CFrameValue;
				["ear.L_Original"]: CFrameValue;
				["ear.R_Composited"]: CFrameValue;
				["ear.R_Initial"]: CFrameValue;
				["ear.R_Original"]: CFrameValue;
				["leg.B.L_Composited"]: CFrameValue;
				["leg.B.L_Initial"]: CFrameValue;
				["leg.B.L_Original"]: CFrameValue;
				["leg.B.R_Composited"]: CFrameValue;
				["leg.B.R_Initial"]: CFrameValue;
				["leg.B.R_Original"]: CFrameValue;
				["leg.F.L_Composited"]: CFrameValue;
				["leg.F.L_Initial"]: CFrameValue;
				["leg.F.L_Original"]: CFrameValue;
				["leg.F.R_Composited"]: CFrameValue;
				["leg.F.R_Initial"]: CFrameValue;
				["leg.F.R_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				root_Initial: CFrameValue;
				root_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				["tail.02_Composited"]: CFrameValue;
				["tail.02_Initial"]: CFrameValue;
				["tail.02_Original"]: CFrameValue;
			} & Folder;
		} & Model;
		Buffalo: {
			HumanoidRootPart: {
				root: {
					body: {
						["ear.L"]: Bone;
						["ear.R"]: Bone;
						["leg.B.L"]: Bone;
						["leg.B.R"]: Bone;
						["leg.F.L"]: Bone;
						["leg.F.R"]: Bone;
						["tail.01"]: {
							["tail.02"]: Bone;
						} & Bone;
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
				["ear.L_Composited"]: CFrameValue;
				["ear.L_Initial"]: CFrameValue;
				["ear.L_Original"]: CFrameValue;
				["ear.R_Composited"]: CFrameValue;
				["ear.R_Initial"]: CFrameValue;
				["ear.R_Original"]: CFrameValue;
				["leg.B.L_Composited"]: CFrameValue;
				["leg.B.L_Initial"]: CFrameValue;
				["leg.B.L_Original"]: CFrameValue;
				["leg.B.R_Composited"]: CFrameValue;
				["leg.B.R_Initial"]: CFrameValue;
				["leg.B.R_Original"]: CFrameValue;
				["leg.F.L_Composited"]: CFrameValue;
				["leg.F.L_Initial"]: CFrameValue;
				["leg.F.L_Original"]: CFrameValue;
				["leg.F.R_Composited"]: CFrameValue;
				["leg.F.R_Initial"]: CFrameValue;
				["leg.F.R_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				root_Initial: CFrameValue;
				root_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				["tail.02_Composited"]: CFrameValue;
				["tail.02_Initial"]: CFrameValue;
				["tail.02_Original"]: CFrameValue;
			} & Folder;
		} & Model;
		Bull: {
			HumanoidRootPart: {
				root: {
					body: {
						["ear.L"]: Bone;
						["ear.R"]: Bone;
						["leg.B.L"]: Bone;
						["leg.B.R"]: Bone;
						["leg.F.L"]: Bone;
						["leg.F.R"]: Bone;
						["tail.01"]: {
							["tail.02"]: Bone;
						} & Bone;
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
				["ear.L_Composited"]: CFrameValue;
				["ear.L_Initial"]: CFrameValue;
				["ear.L_Original"]: CFrameValue;
				["ear.R_Composited"]: CFrameValue;
				["ear.R_Initial"]: CFrameValue;
				["ear.R_Original"]: CFrameValue;
				["leg.B.L_Composited"]: CFrameValue;
				["leg.B.L_Initial"]: CFrameValue;
				["leg.B.L_Original"]: CFrameValue;
				["leg.B.R_Composited"]: CFrameValue;
				["leg.B.R_Initial"]: CFrameValue;
				["leg.B.R_Original"]: CFrameValue;
				["leg.F.L_Composited"]: CFrameValue;
				["leg.F.L_Initial"]: CFrameValue;
				["leg.F.L_Original"]: CFrameValue;
				["leg.F.R_Composited"]: CFrameValue;
				["leg.F.R_Initial"]: CFrameValue;
				["leg.F.R_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				root_Initial: CFrameValue;
				root_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				["tail.02_Composited"]: CFrameValue;
				["tail.02_Initial"]: CFrameValue;
				["tail.02_Original"]: CFrameValue;
			} & Folder;
		} & Model;
		Camel: {
			HumanoidRootPart: {
				root: {
					body: {
						["ear.L"]: Bone;
						["ear.R"]: Bone;
						["leg.B.L"]: Bone;
						["leg.B.R"]: Bone;
						["leg.F.L"]: Bone;
						["leg.F.R"]: Bone;
						["tail.01"]: {
							["tail.02"]: Bone;
						} & Bone;
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
				["ear.L_Composited"]: CFrameValue;
				["ear.L_Initial"]: CFrameValue;
				["ear.L_Original"]: CFrameValue;
				["ear.R_Composited"]: CFrameValue;
				["ear.R_Initial"]: CFrameValue;
				["ear.R_Original"]: CFrameValue;
				["leg.B.L_Composited"]: CFrameValue;
				["leg.B.L_Initial"]: CFrameValue;
				["leg.B.L_Original"]: CFrameValue;
				["leg.B.R_Composited"]: CFrameValue;
				["leg.B.R_Initial"]: CFrameValue;
				["leg.B.R_Original"]: CFrameValue;
				["leg.F.L_Composited"]: CFrameValue;
				["leg.F.L_Initial"]: CFrameValue;
				["leg.F.L_Original"]: CFrameValue;
				["leg.F.R_Composited"]: CFrameValue;
				["leg.F.R_Initial"]: CFrameValue;
				["leg.F.R_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				root_Initial: CFrameValue;
				root_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				["tail.02_Composited"]: CFrameValue;
				["tail.02_Initial"]: CFrameValue;
				["tail.02_Original"]: CFrameValue;
			} & Folder;
		} & Model;
		Capybara: {
			HumanoidRootPart: {
				root: {
					body: {
						["ear.L"]: Bone;
						["ear.R"]: Bone;
						["leg.B.L"]: Bone;
						["leg.B.R"]: Bone;
						["leg.F.L"]: Bone;
						["leg.F.R"]: Bone;
						["tail.01"]: Bone;
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
				["ear.L_Composited"]: CFrameValue;
				["ear.L_Initial"]: CFrameValue;
				["ear.L_Original"]: CFrameValue;
				["ear.R_Composited"]: CFrameValue;
				["ear.R_Initial"]: CFrameValue;
				["ear.R_Original"]: CFrameValue;
				["leg.B.L_Composited"]: CFrameValue;
				["leg.B.L_Initial"]: CFrameValue;
				["leg.B.L_Original"]: CFrameValue;
				["leg.B.R_Composited"]: CFrameValue;
				["leg.B.R_Initial"]: CFrameValue;
				["leg.B.R_Original"]: CFrameValue;
				["leg.F.L_Composited"]: CFrameValue;
				["leg.F.L_Initial"]: CFrameValue;
				["leg.F.L_Original"]: CFrameValue;
				["leg.F.R_Composited"]: CFrameValue;
				["leg.F.R_Initial"]: CFrameValue;
				["leg.F.R_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				root_Initial: CFrameValue;
				root_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["tail.01_Original"]: CFrameValue;
			} & Folder;
		} & Model;
		Cardinal: {
			HumanoidRootPart: {
				root: {
					body: {
						["feet.L"]: Bone;
						["feet.R"]: Bone;
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
		Carp: {
			HumanoidRootPart: {
				root: {
					body: {
						["fin.01"]: Bone;
						["fin.02"]: Bone;
						["fin.03"]: Bone;
						["fin.L"]: Bone;
						["fin.R"]: Bone;
						["tail.01"]: Bone;
						["tail.02"]: Bone;
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
				["fin.01_Composited"]: CFrameValue;
				["fin.01_Initial"]: CFrameValue;
				["fin.01_Original"]: CFrameValue;
				["fin.02_Composited"]: CFrameValue;
				["fin.02_Initial"]: CFrameValue;
				["fin.02_Original"]: CFrameValue;
				["fin.03_Composited"]: CFrameValue;
				["fin.03_Initial"]: CFrameValue;
				["fin.03_Original"]: CFrameValue;
				["fin.L_Composited"]: CFrameValue;
				["fin.L_Initial"]: CFrameValue;
				["fin.L_Original"]: CFrameValue;
				["fin.R_Composited"]: CFrameValue;
				["fin.R_Initial"]: CFrameValue;
				["fin.R_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				root_Initial: CFrameValue;
				root_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				["tail.02_Composited"]: CFrameValue;
				["tail.02_Initial"]: CFrameValue;
				["tail.02_Original"]: CFrameValue;
			} & Folder;
		} & Model;
		Cat: {
			HumanoidRootPart: {
				root: {
					body: {
						["ear.L"]: Bone;
						["ear.R"]: Bone;
						["leg.B.L"]: Bone;
						["leg.B.R"]: Bone;
						["leg.F.L"]: Bone;
						["leg.F.R"]: Bone;
						["tail.01"]: {
							["tail.02"]: Bone;
						} & Bone;
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
				["ear.L_Composited"]: CFrameValue;
				["ear.L_Initial"]: CFrameValue;
				["ear.L_Original"]: CFrameValue;
				["ear.R_Composited"]: CFrameValue;
				["ear.R_Initial"]: CFrameValue;
				["ear.R_Original"]: CFrameValue;
				["leg.B.L_Composited"]: CFrameValue;
				["leg.B.L_Initial"]: CFrameValue;
				["leg.B.L_Original"]: CFrameValue;
				["leg.B.R_Composited"]: CFrameValue;
				["leg.B.R_Initial"]: CFrameValue;
				["leg.B.R_Original"]: CFrameValue;
				["leg.F.L_Composited"]: CFrameValue;
				["leg.F.L_Initial"]: CFrameValue;
				["leg.F.L_Original"]: CFrameValue;
				["leg.F.R_Composited"]: CFrameValue;
				["leg.F.R_Initial"]: CFrameValue;
				["leg.F.R_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				root_Initial: CFrameValue;
				root_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				["tail.02_Composited"]: CFrameValue;
				["tail.02_Initial"]: CFrameValue;
				["tail.02_Original"]: CFrameValue;
			} & Folder;
		} & Model;
		Catfish: {
			HumanoidRootPart: {
				root: {
					body: {
						["fin.01"]: Bone;
						["fin.02"]: Bone;
						["fin.03"]: Bone;
						["fin.L"]: Bone;
						["fin.L.01"]: Bone;
						["fin.R"]: Bone;
						["fin.R.01"]: Bone;
						["tail.01"]: Bone;
						["tail.02"]: Bone;
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
				["fin.01_Composited"]: CFrameValue;
				["fin.01_Initial"]: CFrameValue;
				["fin.01_Original"]: CFrameValue;
				["fin.02_Composited"]: CFrameValue;
				["fin.02_Initial"]: CFrameValue;
				["fin.02_Original"]: CFrameValue;
				["fin.03_Composited"]: CFrameValue;
				["fin.03_Initial"]: CFrameValue;
				["fin.03_Original"]: CFrameValue;
				["fin.L.01_Composited"]: CFrameValue;
				["fin.L.01_Initial"]: CFrameValue;
				["fin.L.01_Original"]: CFrameValue;
				["fin.L_Composited"]: CFrameValue;
				["fin.L_Initial"]: CFrameValue;
				["fin.L_Original"]: CFrameValue;
				["fin.R.01_Composited"]: CFrameValue;
				["fin.R.01_Initial"]: CFrameValue;
				["fin.R.01_Original"]: CFrameValue;
				["fin.R_Composited"]: CFrameValue;
				["fin.R_Initial"]: CFrameValue;
				["fin.R_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				root_Initial: CFrameValue;
				root_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				["tail.02_Composited"]: CFrameValue;
				["tail.02_Initial"]: CFrameValue;
				["tail.02_Original"]: CFrameValue;
			} & Folder;
		} & Model;
		Cerberus: {
			HumanoidRootPart: {
				root: {
					body: {
						["ear.02.L"]: Bone;
						["ear.02.R"]: Bone;
						["ear.03.L"]: Bone;
						["ear.03.R"]: Bone;
						["ear.L"]: Bone;
						["ear.R"]: Bone;
						["leg.B.L"]: Bone;
						["leg.B.R"]: Bone;
						["leg.F.L"]: Bone;
						["leg.F.R"]: Bone;
						["tail.01"]: {
							["tail.02"]: Bone;
						} & Bone;
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
				["ear.02.L_Composited"]: CFrameValue;
				["ear.02.L_Initial"]: CFrameValue;
				["ear.02.L_Original"]: CFrameValue;
				["ear.02.R_Composited"]: CFrameValue;
				["ear.02.R_Initial"]: CFrameValue;
				["ear.02.R_Original"]: CFrameValue;
				["ear.03.L_Composited"]: CFrameValue;
				["ear.03.L_Initial"]: CFrameValue;
				["ear.03.L_Original"]: CFrameValue;
				["ear.03.R_Composited"]: CFrameValue;
				["ear.03.R_Initial"]: CFrameValue;
				["ear.03.R_Original"]: CFrameValue;
				["ear.L_Composited"]: CFrameValue;
				["ear.L_Initial"]: CFrameValue;
				["ear.L_Original"]: CFrameValue;
				["ear.R_Composited"]: CFrameValue;
				["ear.R_Initial"]: CFrameValue;
				["ear.R_Original"]: CFrameValue;
				["leg.B.L_Composited"]: CFrameValue;
				["leg.B.L_Initial"]: CFrameValue;
				["leg.B.L_Original"]: CFrameValue;
				["leg.B.R_Composited"]: CFrameValue;
				["leg.B.R_Initial"]: CFrameValue;
				["leg.B.R_Original"]: CFrameValue;
				["leg.F.L_Composited"]: CFrameValue;
				["leg.F.L_Initial"]: CFrameValue;
				["leg.F.L_Original"]: CFrameValue;
				["leg.F.R_Composited"]: CFrameValue;
				["leg.F.R_Initial"]: CFrameValue;
				["leg.F.R_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				root_Initial: CFrameValue;
				root_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				["tail.02_Composited"]: CFrameValue;
				["tail.02_Initial"]: CFrameValue;
				["tail.02_Original"]: CFrameValue;
			} & Folder;
		} & Model;
		Chameleon: {
			HumanoidRootPart: {
				root: {
					body: {
						["leg.B.L"]: Bone;
						["leg.B.R"]: Bone;
						["leg.F.L"]: Bone;
						["leg.F.R"]: Bone;
						["tail.01"]: {
							["tail.02"]: Bone;
						} & Bone;
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
				["leg.B.L_Composited"]: CFrameValue;
				["leg.B.L_Initial"]: CFrameValue;
				["leg.B.L_Original"]: CFrameValue;
				["leg.B.R_Composited"]: CFrameValue;
				["leg.B.R_Initial"]: CFrameValue;
				["leg.B.R_Original"]: CFrameValue;
				["leg.F.L_Composited"]: CFrameValue;
				["leg.F.L_Initial"]: CFrameValue;
				["leg.F.L_Original"]: CFrameValue;
				["leg.F.R_Composited"]: CFrameValue;
				["leg.F.R_Initial"]: CFrameValue;
				["leg.F.R_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				root_Initial: CFrameValue;
				root_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				["tail.02_Composited"]: CFrameValue;
				["tail.02_Initial"]: CFrameValue;
				["tail.02_Original"]: CFrameValue;
			} & Folder;
		} & Model;
		Cheetah: {
			HumanoidRootPart: {
				root: {
					body: {
						["ear.L"]: Bone;
						["ear.R"]: Bone;
						["leg.B.L"]: Bone;
						["leg.B.R"]: Bone;
						["leg.F.L"]: Bone;
						["leg.F.R"]: Bone;
						["tail.01"]: {
							["tail.02"]: Bone;
						} & Bone;
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
				["ear.L_Composited"]: CFrameValue;
				["ear.L_Initial"]: CFrameValue;
				["ear.L_Original"]: CFrameValue;
				["ear.R_Composited"]: CFrameValue;
				["ear.R_Initial"]: CFrameValue;
				["ear.R_Original"]: CFrameValue;
				["leg.B.L_Composited"]: CFrameValue;
				["leg.B.L_Initial"]: CFrameValue;
				["leg.B.L_Original"]: CFrameValue;
				["leg.B.R_Composited"]: CFrameValue;
				["leg.B.R_Initial"]: CFrameValue;
				["leg.B.R_Original"]: CFrameValue;
				["leg.F.L_Composited"]: CFrameValue;
				["leg.F.L_Initial"]: CFrameValue;
				["leg.F.L_Original"]: CFrameValue;
				["leg.F.R_Composited"]: CFrameValue;
				["leg.F.R_Initial"]: CFrameValue;
				["leg.F.R_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				root_Initial: CFrameValue;
				root_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				["tail.02_Composited"]: CFrameValue;
				["tail.02_Initial"]: CFrameValue;
				["tail.02_Original"]: CFrameValue;
			} & Folder;
		} & Model;
		Chick: {
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
		Chimp: {
			HumanoidRootPart: {
				root: {
					body: {
						["ear.L"]: Bone;
						["ear.R"]: Bone;
						["leg.B.L"]: Bone;
						["leg.B.R"]: Bone;
						["leg.F.L"]: Bone;
						["leg.F.R"]: Bone;
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
				["ear.L_Composited"]: CFrameValue;
				["ear.L_Initial"]: CFrameValue;
				["ear.L_Original"]: CFrameValue;
				["ear.R_Composited"]: CFrameValue;
				["ear.R_Initial"]: CFrameValue;
				["ear.R_Original"]: CFrameValue;
				["leg.B.L_Composited"]: CFrameValue;
				["leg.B.L_Initial"]: CFrameValue;
				["leg.B.L_Original"]: CFrameValue;
				["leg.B.R_Composited"]: CFrameValue;
				["leg.B.R_Initial"]: CFrameValue;
				["leg.B.R_Original"]: CFrameValue;
				["leg.F.L_Composited"]: CFrameValue;
				["leg.F.L_Initial"]: CFrameValue;
				["leg.F.L_Original"]: CFrameValue;
				["leg.F.R_Composited"]: CFrameValue;
				["leg.F.R_Initial"]: CFrameValue;
				["leg.F.R_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				root_Initial: CFrameValue;
				root_Original: CFrameValue;
			} & Folder;
		} & Model;
		ChineseDragon: {
			HumanoidRootPart: {
				root: {
					body: {
						["leg.B.L"]: Bone;
						["leg.B.R"]: Bone;
						["leg.F.L"]: Bone;
						["leg.F.R"]: Bone;
						["tail.01"]: {
							["tail.02"]: Bone;
						} & Bone;
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
				["leg.B.L_Composited"]: CFrameValue;
				["leg.B.L_Initial"]: CFrameValue;
				["leg.B.L_Original"]: CFrameValue;
				["leg.B.R_Composited"]: CFrameValue;
				["leg.B.R_Initial"]: CFrameValue;
				["leg.B.R_Original"]: CFrameValue;
				["leg.F.L_Composited"]: CFrameValue;
				["leg.F.L_Initial"]: CFrameValue;
				["leg.F.L_Original"]: CFrameValue;
				["leg.F.R_Composited"]: CFrameValue;
				["leg.F.R_Initial"]: CFrameValue;
				["leg.F.R_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				root_Initial: CFrameValue;
				root_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				["tail.02_Composited"]: CFrameValue;
				["tail.02_Initial"]: CFrameValue;
				["tail.02_Original"]: CFrameValue;
			} & Folder;
		} & Model;
		Chipmunk: {
			HumanoidRootPart: {
				root: {
					body: {
						["ear.L"]: Bone;
						["ear.R"]: Bone;
						["leg.B.L"]: Bone;
						["leg.B.R"]: Bone;
						["leg.F.L"]: Bone;
						["leg.F.R"]: Bone;
						["tail.01"]: {
							["tail.02"]: Bone;
						} & Bone;
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
				["ear.L_Composited"]: CFrameValue;
				["ear.L_Initial"]: CFrameValue;
				["ear.L_Original"]: CFrameValue;
				["ear.R_Composited"]: CFrameValue;
				["ear.R_Initial"]: CFrameValue;
				["ear.R_Original"]: CFrameValue;
				["leg.B.L_Composited"]: CFrameValue;
				["leg.B.L_Initial"]: CFrameValue;
				["leg.B.L_Original"]: CFrameValue;
				["leg.B.R_Composited"]: CFrameValue;
				["leg.B.R_Initial"]: CFrameValue;
				["leg.B.R_Original"]: CFrameValue;
				["leg.F.L_Composited"]: CFrameValue;
				["leg.F.L_Initial"]: CFrameValue;
				["leg.F.L_Original"]: CFrameValue;
				["leg.F.R_Composited"]: CFrameValue;
				["leg.F.R_Initial"]: CFrameValue;
				["leg.F.R_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				root_Initial: CFrameValue;
				root_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				["tail.02_Composited"]: CFrameValue;
				["tail.02_Initial"]: CFrameValue;
				["tail.02_Original"]: CFrameValue;
			} & Folder;
		} & Model;
		Clownfish: {
			HumanoidRootPart: {
				root: {
					body: {
						["fin.01"]: Bone;
						["fin.02"]: Bone;
						["fin.03"]: Bone;
						["fin.04"]: Bone;
						["fin.L"]: Bone;
						["fin.R"]: Bone;
						["tail.01"]: Bone;
						["tail.02"]: Bone;
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
				["fin.01_Composited"]: CFrameValue;
				["fin.01_Initial"]: CFrameValue;
				["fin.01_Original"]: CFrameValue;
				["fin.02_Composited"]: CFrameValue;
				["fin.02_Initial"]: CFrameValue;
				["fin.02_Original"]: CFrameValue;
				["fin.03_Composited"]: CFrameValue;
				["fin.03_Initial"]: CFrameValue;
				["fin.03_Original"]: CFrameValue;
				["fin.04_Composited"]: CFrameValue;
				["fin.04_Initial"]: CFrameValue;
				["fin.04_Original"]: CFrameValue;
				["fin.L_Composited"]: CFrameValue;
				["fin.L_Initial"]: CFrameValue;
				["fin.L_Original"]: CFrameValue;
				["fin.R_Composited"]: CFrameValue;
				["fin.R_Initial"]: CFrameValue;
				["fin.R_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				root_Initial: CFrameValue;
				root_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				["tail.02_Composited"]: CFrameValue;
				["tail.02_Initial"]: CFrameValue;
				["tail.02_Original"]: CFrameValue;
			} & Folder;
		} & Model;
		Cobra: {
			HumanoidRootPart: {
				root: {
					body: {
						["neck.01"]: {
							["neck.02"]: {
								head: Bone;
							} & Bone;
						} & Bone;
						["tail.01"]: {
							["tail.02"]: {
								["tail.03"]: Bone;
							} & Bone;
						} & Bone;
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
				head_Composited: CFrameValue;
				head_Initial: CFrameValue;
				head_Original: CFrameValue;
				["neck.01_Composited"]: CFrameValue;
				["neck.01_Initial"]: CFrameValue;
				["neck.01_Original"]: CFrameValue;
				["neck.02_Composited"]: CFrameValue;
				["neck.02_Initial"]: CFrameValue;
				["neck.02_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				root_Initial: CFrameValue;
				root_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				["tail.02_Composited"]: CFrameValue;
				["tail.02_Initial"]: CFrameValue;
				["tail.02_Original"]: CFrameValue;
				["tail.03_Composited"]: CFrameValue;
				["tail.03_Initial"]: CFrameValue;
				["tail.03_Original"]: CFrameValue;
			} & Folder;
		} & Model;
		Cougar: {
			HumanoidRootPart: {
				root: {
					body: {
						["ear.L"]: Bone;
						["ear.R"]: Bone;
						["leg.B.L"]: Bone;
						["leg.B.R"]: Bone;
						["leg.F.L"]: Bone;
						["leg.F.R"]: Bone;
						["tail.01"]: {
							["tail.02"]: Bone;
						} & Bone;
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
				["ear.L_Composited"]: CFrameValue;
				["ear.L_Initial"]: CFrameValue;
				["ear.L_Original"]: CFrameValue;
				["ear.R_Composited"]: CFrameValue;
				["ear.R_Initial"]: CFrameValue;
				["ear.R_Original"]: CFrameValue;
				["leg.B.L_Composited"]: CFrameValue;
				["leg.B.L_Initial"]: CFrameValue;
				["leg.B.L_Original"]: CFrameValue;
				["leg.B.R_Composited"]: CFrameValue;
				["leg.B.R_Initial"]: CFrameValue;
				["leg.B.R_Original"]: CFrameValue;
				["leg.F.L_Composited"]: CFrameValue;
				["leg.F.L_Initial"]: CFrameValue;
				["leg.F.L_Original"]: CFrameValue;
				["leg.F.R_Composited"]: CFrameValue;
				["leg.F.R_Initial"]: CFrameValue;
				["leg.F.R_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				root_Initial: CFrameValue;
				root_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				["tail.02_Composited"]: CFrameValue;
				["tail.02_Initial"]: CFrameValue;
				["tail.02_Original"]: CFrameValue;
			} & Folder;
		} & Model;
		Cow: {
			HumanoidRootPart: {
				root: {
					body: {
						["ear.L"]: Bone;
						["ear.R"]: Bone;
						["leg.B.L"]: Bone;
						["leg.B.R"]: Bone;
						["leg.F.L"]: Bone;
						["leg.F.R"]: Bone;
						["tail.01"]: {
							["tail.02"]: Bone;
						} & Bone;
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
				["ear.L_Composited"]: CFrameValue;
				["ear.L_Initial"]: CFrameValue;
				["ear.L_Original"]: CFrameValue;
				["ear.R_Composited"]: CFrameValue;
				["ear.R_Initial"]: CFrameValue;
				["ear.R_Original"]: CFrameValue;
				["leg.B.L_Composited"]: CFrameValue;
				["leg.B.L_Initial"]: CFrameValue;
				["leg.B.L_Original"]: CFrameValue;
				["leg.B.R_Composited"]: CFrameValue;
				["leg.B.R_Initial"]: CFrameValue;
				["leg.B.R_Original"]: CFrameValue;
				["leg.F.L_Composited"]: CFrameValue;
				["leg.F.L_Initial"]: CFrameValue;
				["leg.F.L_Original"]: CFrameValue;
				["leg.F.R_Composited"]: CFrameValue;
				["leg.F.R_Initial"]: CFrameValue;
				["leg.F.R_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				root_Initial: CFrameValue;
				root_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				["tail.02_Composited"]: CFrameValue;
				["tail.02_Initial"]: CFrameValue;
				["tail.02_Original"]: CFrameValue;
			} & Folder;
		} & Model;
		Coyote: {
			HumanoidRootPart: {
				root: {
					body: {
						["ear.L"]: Bone;
						["ear.R"]: Bone;
						["leg.B.L"]: Bone;
						["leg.B.R"]: Bone;
						["leg.F.L"]: Bone;
						["leg.F.R"]: Bone;
						["tail.01"]: {
							["tail.02"]: Bone;
						} & Bone;
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
				["ear.L_Composited"]: CFrameValue;
				["ear.L_Initial"]: CFrameValue;
				["ear.L_Original"]: CFrameValue;
				["ear.R_Composited"]: CFrameValue;
				["ear.R_Initial"]: CFrameValue;
				["ear.R_Original"]: CFrameValue;
				["leg.B.L_Composited"]: CFrameValue;
				["leg.B.L_Initial"]: CFrameValue;
				["leg.B.L_Original"]: CFrameValue;
				["leg.B.R_Composited"]: CFrameValue;
				["leg.B.R_Initial"]: CFrameValue;
				["leg.B.R_Original"]: CFrameValue;
				["leg.F.L_Composited"]: CFrameValue;
				["leg.F.L_Initial"]: CFrameValue;
				["leg.F.L_Original"]: CFrameValue;
				["leg.F.R_Composited"]: CFrameValue;
				["leg.F.R_Initial"]: CFrameValue;
				["leg.F.R_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				root_Initial: CFrameValue;
				root_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				["tail.02_Composited"]: CFrameValue;
				["tail.02_Initial"]: CFrameValue;
				["tail.02_Original"]: CFrameValue;
			} & Folder;
		} & Model;
		Crab: {
			HumanoidRootPart: {
				root: {
					body: {
						["leg.L.01"]: Bone;
						["leg.L.02"]: Bone;
						["leg.L.03"]: Bone;
						["leg.R.01"]: Bone;
						["leg.R.02"]: Bone;
						["leg.R.03"]: Bone;
						wrist: {
							["claw.L"]: Bone;
							["claw.R"]: Bone;
						} & Bone;
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
				["claw.L_Composited"]: CFrameValue;
				["claw.L_Initial"]: CFrameValue;
				["claw.L_Original"]: CFrameValue;
				["claw.R_Composited"]: CFrameValue;
				["claw.R_Initial"]: CFrameValue;
				["claw.R_Original"]: CFrameValue;
				["leg.L.01_Composited"]: CFrameValue;
				["leg.L.01_Initial"]: CFrameValue;
				["leg.L.01_Original"]: CFrameValue;
				["leg.L.02_Composited"]: CFrameValue;
				["leg.L.02_Initial"]: CFrameValue;
				["leg.L.02_Original"]: CFrameValue;
				["leg.L.03_Composited"]: CFrameValue;
				["leg.L.03_Initial"]: CFrameValue;
				["leg.L.03_Original"]: CFrameValue;
				["leg.R.01_Composited"]: CFrameValue;
				["leg.R.01_Initial"]: CFrameValue;
				["leg.R.01_Original"]: CFrameValue;
				["leg.R.02_Composited"]: CFrameValue;
				["leg.R.02_Initial"]: CFrameValue;
				["leg.R.02_Original"]: CFrameValue;
				["leg.R.03_Composited"]: CFrameValue;
				["leg.R.03_Initial"]: CFrameValue;
				["leg.R.03_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				root_Initial: CFrameValue;
				root_Original: CFrameValue;
				wrist_Composited: CFrameValue;
				wrist_Initial: CFrameValue;
				wrist_Original: CFrameValue;
			} & Folder;
		} & Model;
		Crocodile: {
			HumanoidRootPart: {
				root: {
					body: {
						["leg.B.L"]: Bone;
						["leg.B.R"]: Bone;
						["leg.F.L"]: Bone;
						["leg.F.R"]: Bone;
						["tail.01"]: {
							["tail.02"]: Bone;
						} & Bone;
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
				["leg.B.L_Composited"]: CFrameValue;
				["leg.B.L_Initial"]: CFrameValue;
				["leg.B.L_Original"]: CFrameValue;
				["leg.B.R_Composited"]: CFrameValue;
				["leg.B.R_Initial"]: CFrameValue;
				["leg.B.R_Original"]: CFrameValue;
				["leg.F.L_Composited"]: CFrameValue;
				["leg.F.L_Initial"]: CFrameValue;
				["leg.F.L_Original"]: CFrameValue;
				["leg.F.R_Composited"]: CFrameValue;
				["leg.F.R_Initial"]: CFrameValue;
				["leg.F.R_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				root_Initial: CFrameValue;
				root_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				["tail.02_Composited"]: CFrameValue;
				["tail.02_Initial"]: CFrameValue;
				["tail.02_Original"]: CFrameValue;
			} & Folder;
		} & Model;
		Crow: {
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
		Deer: {
			HumanoidRootPart: {
				root: {
					body: {
						["ear.L"]: Bone;
						["ear.R"]: Bone;
						["leg.B.L"]: Bone;
						["leg.B.R"]: Bone;
						["leg.F.L"]: Bone;
						["leg.F.R"]: Bone;
						["tail.01"]: Bone;
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
				["ear.L_Composited"]: CFrameValue;
				["ear.L_Initial"]: CFrameValue;
				["ear.L_Original"]: CFrameValue;
				["ear.R_Composited"]: CFrameValue;
				["ear.R_Initial"]: CFrameValue;
				["ear.R_Original"]: CFrameValue;
				["leg.B.L_Composited"]: CFrameValue;
				["leg.B.L_Initial"]: CFrameValue;
				["leg.B.L_Original"]: CFrameValue;
				["leg.B.R_Composited"]: CFrameValue;
				["leg.B.R_Initial"]: CFrameValue;
				["leg.B.R_Original"]: CFrameValue;
				["leg.F.L_Composited"]: CFrameValue;
				["leg.F.L_Initial"]: CFrameValue;
				["leg.F.L_Original"]: CFrameValue;
				["leg.F.R_Composited"]: CFrameValue;
				["leg.F.R_Initial"]: CFrameValue;
				["leg.F.R_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				root_Initial: CFrameValue;
				root_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["tail.01_Original"]: CFrameValue;
			} & Folder;
		} & Model;
		Dingo: {
			HumanoidRootPart: {
				body: {
					["ear.L"]: Bone;
					["ear.R"]: Bone;
					["leg.B.L"]: Bone;
					["leg.B.R"]: Bone;
					["leg.F.L"]: Bone;
					["leg.F.R"]: Bone;
					["tail.01"]: {
						["tail.02"]: Bone;
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
				["ear.L_Composited"]: CFrameValue;
				["ear.L_Initial"]: CFrameValue;
				["ear.L_Original"]: CFrameValue;
				["ear.R_Composited"]: CFrameValue;
				["ear.R_Initial"]: CFrameValue;
				["ear.R_Original"]: CFrameValue;
				["leg.B.L_Composited"]: CFrameValue;
				["leg.B.L_Initial"]: CFrameValue;
				["leg.B.L_Original"]: CFrameValue;
				["leg.B.R_Composited"]: CFrameValue;
				["leg.B.R_Initial"]: CFrameValue;
				["leg.B.R_Original"]: CFrameValue;
				["leg.F.L_Composited"]: CFrameValue;
				["leg.F.L_Initial"]: CFrameValue;
				["leg.F.L_Original"]: CFrameValue;
				["leg.F.R_Composited"]: CFrameValue;
				["leg.F.R_Initial"]: CFrameValue;
				["leg.F.R_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				root_Initial: CFrameValue;
				root_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				["tail.02_Composited"]: CFrameValue;
				["tail.02_Initial"]: CFrameValue;
				["tail.02_Original"]: CFrameValue;
			} & Folder;
		} & Model;
		Dog: {
			HumanoidRootPart: {
				root: {
					body: {
						["ear.L"]: {
							["ear.L.01"]: Bone;
						} & Bone;
						["ear.R"]: {
							["ear.R.01"]: Bone;
						} & Bone;
						["leg.B.L"]: Bone;
						["leg.B.R"]: Bone;
						["leg.F.L"]: Bone;
						["leg.F.R"]: Bone;
						["tail.01"]: {
							["tail.02"]: Bone;
						} & Bone;
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
				["ear.L.01_Composited"]: CFrameValue;
				["ear.L.01_Initial"]: CFrameValue;
				["ear.L.01_Original"]: CFrameValue;
				["ear.L_Composited"]: CFrameValue;
				["ear.L_Initial"]: CFrameValue;
				["ear.L_Original"]: CFrameValue;
				["ear.R.01_Composited"]: CFrameValue;
				["ear.R.01_Initial"]: CFrameValue;
				["ear.R.01_Original"]: CFrameValue;
				["ear.R_Composited"]: CFrameValue;
				["ear.R_Initial"]: CFrameValue;
				["ear.R_Original"]: CFrameValue;
				["leg.B.L_Composited"]: CFrameValue;
				["leg.B.L_Initial"]: CFrameValue;
				["leg.B.L_Original"]: CFrameValue;
				["leg.B.R_Composited"]: CFrameValue;
				["leg.B.R_Initial"]: CFrameValue;
				["leg.B.R_Original"]: CFrameValue;
				["leg.F.L_Composited"]: CFrameValue;
				["leg.F.L_Initial"]: CFrameValue;
				["leg.F.L_Original"]: CFrameValue;
				["leg.F.R_Composited"]: CFrameValue;
				["leg.F.R_Initial"]: CFrameValue;
				["leg.F.R_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				root_Initial: CFrameValue;
				root_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				["tail.02_Composited"]: CFrameValue;
				["tail.02_Initial"]: CFrameValue;
				["tail.02_Original"]: CFrameValue;
			} & Folder;
		} & Model;
		Dolphin: {
			HumanoidRootPart: {
				root: {
					body: {
						["fin.01"]: Bone;
						["fin.L"]: Bone;
						["fin.R"]: Bone;
						["tail.01"]: {
							["tail.02"]: Bone;
						} & Bone;
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
				["fin.01_Composited"]: CFrameValue;
				["fin.01_Initial"]: CFrameValue;
				["fin.01_Original"]: CFrameValue;
				["fin.L_Composited"]: CFrameValue;
				["fin.L_Initial"]: CFrameValue;
				["fin.L_Original"]: CFrameValue;
				["fin.R_Composited"]: CFrameValue;
				["fin.R_Initial"]: CFrameValue;
				["fin.R_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				root_Initial: CFrameValue;
				root_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				["tail.02_Composited"]: CFrameValue;
				["tail.02_Initial"]: CFrameValue;
				["tail.02_Original"]: CFrameValue;
			} & Folder;
		} & Model;
		Donkey: {
			HumanoidRootPart: {
				root: {
					body: {
						["ear.L"]: Bone;
						["ear.R"]: Bone;
						["leg.B.L"]: Bone;
						["leg.B.R"]: Bone;
						["leg.F.L"]: Bone;
						["leg.F.R"]: Bone;
						["tail.01"]: {
							["tail.02"]: Bone;
						} & Bone;
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
				["ear.L_Composited"]: CFrameValue;
				["ear.L_Initial"]: CFrameValue;
				["ear.L_Original"]: CFrameValue;
				["ear.R_Composited"]: CFrameValue;
				["ear.R_Initial"]: CFrameValue;
				["ear.R_Original"]: CFrameValue;
				["leg.B.L_Composited"]: CFrameValue;
				["leg.B.L_Initial"]: CFrameValue;
				["leg.B.L_Original"]: CFrameValue;
				["leg.B.R_Composited"]: CFrameValue;
				["leg.B.R_Initial"]: CFrameValue;
				["leg.B.R_Original"]: CFrameValue;
				["leg.F.L_Composited"]: CFrameValue;
				["leg.F.L_Initial"]: CFrameValue;
				["leg.F.L_Original"]: CFrameValue;
				["leg.F.R_Composited"]: CFrameValue;
				["leg.F.R_Initial"]: CFrameValue;
				["leg.F.R_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				root_Initial: CFrameValue;
				root_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				["tail.02_Composited"]: CFrameValue;
				["tail.02_Initial"]: CFrameValue;
				["tail.02_Original"]: CFrameValue;
			} & Folder;
		} & Model;
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
		Dragon: {
			HumanoidRootPart: {
				root: {
					body: {
						["arm.L"]: Bone;
						["arm.R"]: Bone;
						["feet.L"]: Bone;
						["feet.R"]: Bone;
						["neck.01"]: {
							["neck.02"]: {
								head: Bone;
							} & Bone;
						} & Bone;
						["tail.01"]: {
							["tail.02"]: Bone;
						} & Bone;
						["wing.L"]: {
							["wing.01.L"]: Bone;
						} & Bone;
						["wing.R"]: {
							["wing.01.R"]: Bone;
						} & Bone;
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
				["arm.L_Composited"]: CFrameValue;
				["arm.L_Initial"]: CFrameValue;
				["arm.L_Original"]: CFrameValue;
				["arm.R_Composited"]: CFrameValue;
				["arm.R_Initial"]: CFrameValue;
				["arm.R_Original"]: CFrameValue;
				body_Composited: CFrameValue;
				body_Initial: CFrameValue;
				body_Original: CFrameValue;
				["feet.L_Composited"]: CFrameValue;
				["feet.L_Initial"]: CFrameValue;
				["feet.L_Original"]: CFrameValue;
				["feet.R_Composited"]: CFrameValue;
				["feet.R_Initial"]: CFrameValue;
				["feet.R_Original"]: CFrameValue;
				head_Composited: CFrameValue;
				head_Initial: CFrameValue;
				head_Original: CFrameValue;
				["neck.01_Composited"]: CFrameValue;
				["neck.01_Initial"]: CFrameValue;
				["neck.01_Original"]: CFrameValue;
				["neck.02_Composited"]: CFrameValue;
				["neck.02_Initial"]: CFrameValue;
				["neck.02_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				root_Initial: CFrameValue;
				root_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				["tail.02_Composited"]: CFrameValue;
				["tail.02_Initial"]: CFrameValue;
				["tail.02_Original"]: CFrameValue;
				["wing.01.L_Composited"]: CFrameValue;
				["wing.01.L_Initial"]: CFrameValue;
				["wing.01.L_Original"]: CFrameValue;
				["wing.01.R_Composited"]: CFrameValue;
				["wing.01.R_Initial"]: CFrameValue;
				["wing.01.R_Original"]: CFrameValue;
				["wing.L_Composited"]: CFrameValue;
				["wing.L_Initial"]: CFrameValue;
				["wing.L_Original"]: CFrameValue;
				["wing.R_Composited"]: CFrameValue;
				["wing.R_Initial"]: CFrameValue;
				["wing.R_Original"]: CFrameValue;
			} & Folder;
		} & Model;
		Duck: {
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
		Eagle: {
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
		Echidna: {
			HumanoidRootPart: {
				root: {
					body: {
						["leg.B.L"]: Bone;
						["leg.B.R"]: Bone;
						["leg.F.L"]: Bone;
						["leg.F.R"]: Bone;
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
				["leg.B.L_Composited"]: CFrameValue;
				["leg.B.L_Initial"]: CFrameValue;
				["leg.B.L_Original"]: CFrameValue;
				["leg.B.R_Composited"]: CFrameValue;
				["leg.B.R_Initial"]: CFrameValue;
				["leg.B.R_Original"]: CFrameValue;
				["leg.F.L_Composited"]: CFrameValue;
				["leg.F.L_Initial"]: CFrameValue;
				["leg.F.L_Original"]: CFrameValue;
				["leg.F.R_Composited"]: CFrameValue;
				["leg.F.R_Initial"]: CFrameValue;
				["leg.F.R_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				root_Initial: CFrameValue;
				root_Original: CFrameValue;
			} & Folder;
		} & Model;
		Elephant: {
			HumanoidRootPart: {
				root: {
					body: {
						["ear.L"]: Bone;
						["ear.R"]: Bone;
						["leg.B.L"]: Bone;
						["leg.B.R"]: Bone;
						["leg.F.L"]: Bone;
						["leg.F.R"]: Bone;
						["tail.01"]: Bone;
						["trunk.01"]: {
							["trunk.02"]: {
								["trunk.03"]: Bone & {
									["trunk.04"]: Bone;
								};
							} & Bone;
						} & Bone;
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
				["ear.L_Composited"]: CFrameValue;
				["ear.L_Initial"]: CFrameValue;
				["ear.L_Original"]: CFrameValue;
				["ear.R_Composited"]: CFrameValue;
				["ear.R_Initial"]: CFrameValue;
				["ear.R_Original"]: CFrameValue;
				["leg.B.L_Composited"]: CFrameValue;
				["leg.B.L_Initial"]: CFrameValue;
				["leg.B.L_Original"]: CFrameValue;
				["leg.B.R_Composited"]: CFrameValue;
				["leg.B.R_Initial"]: CFrameValue;
				["leg.B.R_Original"]: CFrameValue;
				["leg.F.L_Composited"]: CFrameValue;
				["leg.F.L_Initial"]: CFrameValue;
				["leg.F.L_Original"]: CFrameValue;
				["leg.F.R_Composited"]: CFrameValue;
				["leg.F.R_Initial"]: CFrameValue;
				["leg.F.R_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				root_Initial: CFrameValue;
				root_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				["trunk.01_Composited"]: CFrameValue;
				["trunk.01_Initial"]: CFrameValue;
				["trunk.01_Original"]: CFrameValue;
				["trunk.02_Composited"]: CFrameValue;
				["trunk.02_Initial"]: CFrameValue;
				["trunk.02_Original"]: CFrameValue;
				["trunk.03_Composited"]: CFrameValue;
				["trunk.03_Initial"]: CFrameValue;
				["trunk.03_Original"]: CFrameValue;
				["trunk.04_Composited"]: CFrameValue;
				["trunk.04_Initial"]: CFrameValue;
				["trunk.04_Original"]: CFrameValue;
			} & Folder;
		} & Model;
		Emu: {
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
		FennecFox: {
			HumanoidRootPart: {
				root: {
					body: {
						["ear.L"]: Bone;
						["ear.R"]: Bone;
						["leg.B.L"]: Bone;
						["leg.B.R"]: Bone;
						["leg.F.L"]: Bone;
						["leg.F.R"]: Bone;
						["tail.01"]: {
							["tail.02"]: Bone;
						} & Bone;
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
				["ear.L_Composited"]: CFrameValue;
				["ear.L_Initial"]: CFrameValue;
				["ear.L_Original"]: CFrameValue;
				["ear.R_Composited"]: CFrameValue;
				["ear.R_Initial"]: CFrameValue;
				["ear.R_Original"]: CFrameValue;
				["leg.B.L_Composited"]: CFrameValue;
				["leg.B.L_Initial"]: CFrameValue;
				["leg.B.L_Original"]: CFrameValue;
				["leg.B.R_Composited"]: CFrameValue;
				["leg.B.R_Initial"]: CFrameValue;
				["leg.B.R_Original"]: CFrameValue;
				["leg.F.L_Composited"]: CFrameValue;
				["leg.F.L_Initial"]: CFrameValue;
				["leg.F.L_Original"]: CFrameValue;
				["leg.F.R_Composited"]: CFrameValue;
				["leg.F.R_Initial"]: CFrameValue;
				["leg.F.R_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				root_Initial: CFrameValue;
				root_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				["tail.02_Composited"]: CFrameValue;
				["tail.02_Initial"]: CFrameValue;
				["tail.02_Original"]: CFrameValue;
			} & Folder;
		} & Model;
		Ferret: {
			HumanoidRootPart: {
				root: {
					body: {
						["ear.L"]: Bone;
						["ear.R"]: Bone;
						["leg.B.L"]: Bone;
						["leg.B.R"]: Bone;
						["leg.F.L"]: Bone;
						["leg.F.R"]: Bone;
						["tail.01"]: {
							["tail.02"]: Bone;
						} & Bone;
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
				["ear.L_Composited"]: CFrameValue;
				["ear.L_Initial"]: CFrameValue;
				["ear.L_Original"]: CFrameValue;
				["ear.R_Composited"]: CFrameValue;
				["ear.R_Initial"]: CFrameValue;
				["ear.R_Original"]: CFrameValue;
				["leg.B.L_Composited"]: CFrameValue;
				["leg.B.L_Initial"]: CFrameValue;
				["leg.B.L_Original"]: CFrameValue;
				["leg.B.R_Composited"]: CFrameValue;
				["leg.B.R_Initial"]: CFrameValue;
				["leg.B.R_Original"]: CFrameValue;
				["leg.F.L_Composited"]: CFrameValue;
				["leg.F.L_Initial"]: CFrameValue;
				["leg.F.L_Original"]: CFrameValue;
				["leg.F.R_Composited"]: CFrameValue;
				["leg.F.R_Initial"]: CFrameValue;
				["leg.F.R_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				root_Initial: CFrameValue;
				root_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				["tail.02_Composited"]: CFrameValue;
				["tail.02_Initial"]: CFrameValue;
				["tail.02_Original"]: CFrameValue;
			} & Folder;
		} & Model;
		Flamingo: {
			HumanoidRootPart: {
				root: {
					body: {
						["feet.L"]: Bone;
						["feet.R"]: Bone;
						["tail.01"]: Bone;
						["tail.02"]: Bone;
						["tail.03"]: Bone;
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
				root_Composited: CFrameValue;
				root_Initial: CFrameValue;
				root_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				["tail.02_Composited"]: CFrameValue;
				["tail.02_Initial"]: CFrameValue;
				["tail.02_Original"]: CFrameValue;
				["tail.03_Composited"]: CFrameValue;
				["tail.03_Initial"]: CFrameValue;
				["tail.03_Original"]: CFrameValue;
				["wing.L_Composited"]: CFrameValue;
				["wing.L_Initial"]: CFrameValue;
				["wing.L_Original"]: CFrameValue;
				["wing.R_Composited"]: CFrameValue;
				["wing.R_Initial"]: CFrameValue;
				["wing.R_Original"]: CFrameValue;
			} & Folder;
		} & Model;
		FlyingFox: {
			HumanoidRootPart: {
				root: {
					body: {
						["ear.L"]: Bone;
						["ear.R"]: Bone;
						["feet.L"]: Bone;
						["feet.R"]: Bone;
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
				["ear.L_Composited"]: CFrameValue;
				["ear.L_Initial"]: CFrameValue;
				["ear.L_Original"]: CFrameValue;
				["ear.R_Composited"]: CFrameValue;
				["ear.R_Initial"]: CFrameValue;
				["ear.R_Original"]: CFrameValue;
				["feet.L_Composited"]: CFrameValue;
				["feet.L_Initial"]: CFrameValue;
				["feet.L_Original"]: CFrameValue;
				["feet.R_Composited"]: CFrameValue;
				["feet.R_Initial"]: CFrameValue;
				["feet.R_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				root_Initial: CFrameValue;
				root_Original: CFrameValue;
				["wing.L_Composited"]: CFrameValue;
				["wing.L_Initial"]: CFrameValue;
				["wing.L_Original"]: CFrameValue;
				["wing.R_Composited"]: CFrameValue;
				["wing.R_Initial"]: CFrameValue;
				["wing.R_Original"]: CFrameValue;
			} & Folder;
		} & Model;
		Fox: {
			HumanoidRootPart: {
				root: {
					body: {
						["ear.L"]: Bone;
						["ear.R"]: Bone;
						["leg.B.L"]: Bone;
						["leg.B.R"]: Bone;
						["leg.F.L"]: Bone;
						["leg.F.R"]: Bone;
						["tail.01"]: {
							["tail.02"]: Bone;
						} & Bone;
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
				["ear.L_Composited"]: CFrameValue;
				["ear.L_Initial"]: CFrameValue;
				["ear.L_Original"]: CFrameValue;
				["ear.R_Composited"]: CFrameValue;
				["ear.R_Initial"]: CFrameValue;
				["ear.R_Original"]: CFrameValue;
				["leg.B.L_Composited"]: CFrameValue;
				["leg.B.L_Initial"]: CFrameValue;
				["leg.B.L_Original"]: CFrameValue;
				["leg.B.R_Composited"]: CFrameValue;
				["leg.B.R_Initial"]: CFrameValue;
				["leg.B.R_Original"]: CFrameValue;
				["leg.F.L_Composited"]: CFrameValue;
				["leg.F.L_Initial"]: CFrameValue;
				["leg.F.L_Original"]: CFrameValue;
				["leg.F.R_Composited"]: CFrameValue;
				["leg.F.R_Initial"]: CFrameValue;
				["leg.F.R_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				root_Initial: CFrameValue;
				root_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				["tail.02_Composited"]: CFrameValue;
				["tail.02_Initial"]: CFrameValue;
				["tail.02_Original"]: CFrameValue;
			} & Folder;
		} & Model;
		Frog: {
			HumanoidRootPart: {
				root: {
					body: {
						["leg.B.L"]: Bone;
						["leg.B.R"]: Bone;
						["leg.F.L"]: Bone;
						["leg.F.R"]: Bone;
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
				["leg.B.L_Composited"]: CFrameValue;
				["leg.B.L_Initial"]: CFrameValue;
				["leg.B.L_Original"]: CFrameValue;
				["leg.B.R_Composited"]: CFrameValue;
				["leg.B.R_Initial"]: CFrameValue;
				["leg.B.R_Original"]: CFrameValue;
				["leg.F.L_Composited"]: CFrameValue;
				["leg.F.L_Initial"]: CFrameValue;
				["leg.F.L_Original"]: CFrameValue;
				["leg.F.R_Composited"]: CFrameValue;
				["leg.F.R_Initial"]: CFrameValue;
				["leg.F.R_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				root_Initial: CFrameValue;
				root_Original: CFrameValue;
			} & Folder;
		} & Model;
		Gaur: {
			HumanoidRootPart: {
				root: {
					body: {
						["ear.L"]: Bone;
						["ear.R"]: Bone;
						["leg.B.L"]: Bone;
						["leg.B.R"]: Bone;
						["leg.F.L"]: Bone;
						["leg.F.R"]: Bone;
						["tail.01"]: {
							["tail.02"]: Bone;
						} & Bone;
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
				["ear.L_Composited"]: CFrameValue;
				["ear.L_Initial"]: CFrameValue;
				["ear.L_Original"]: CFrameValue;
				["ear.R_Composited"]: CFrameValue;
				["ear.R_Initial"]: CFrameValue;
				["ear.R_Original"]: CFrameValue;
				["leg.B.L_Composited"]: CFrameValue;
				["leg.B.L_Initial"]: CFrameValue;
				["leg.B.L_Original"]: CFrameValue;
				["leg.B.R_Composited"]: CFrameValue;
				["leg.B.R_Initial"]: CFrameValue;
				["leg.B.R_Original"]: CFrameValue;
				["leg.F.L_Composited"]: CFrameValue;
				["leg.F.L_Initial"]: CFrameValue;
				["leg.F.L_Original"]: CFrameValue;
				["leg.F.R_Composited"]: CFrameValue;
				["leg.F.R_Initial"]: CFrameValue;
				["leg.F.R_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				root_Initial: CFrameValue;
				root_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				["tail.02_Composited"]: CFrameValue;
				["tail.02_Initial"]: CFrameValue;
				["tail.02_Original"]: CFrameValue;
			} & Folder;
		} & Model;
		Gazelle: {
			HumanoidRootPart: {
				root: {
					body: {
						["ear.L"]: Bone;
						["ear.R"]: Bone;
						["leg.B.L"]: Bone;
						["leg.B.R"]: Bone;
						["leg.F.L"]: Bone;
						["leg.F.R"]: Bone;
						["tail.01"]: Bone;
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
				["ear.L_Composited"]: CFrameValue;
				["ear.L_Initial"]: CFrameValue;
				["ear.L_Original"]: CFrameValue;
				["ear.R_Composited"]: CFrameValue;
				["ear.R_Initial"]: CFrameValue;
				["ear.R_Original"]: CFrameValue;
				["leg.B.L_Composited"]: CFrameValue;
				["leg.B.L_Initial"]: CFrameValue;
				["leg.B.L_Original"]: CFrameValue;
				["leg.B.R_Composited"]: CFrameValue;
				["leg.B.R_Initial"]: CFrameValue;
				["leg.B.R_Original"]: CFrameValue;
				["leg.F.L_Composited"]: CFrameValue;
				["leg.F.L_Initial"]: CFrameValue;
				["leg.F.L_Original"]: CFrameValue;
				["leg.F.R_Composited"]: CFrameValue;
				["leg.F.R_Initial"]: CFrameValue;
				["leg.F.R_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				root_Initial: CFrameValue;
				root_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["tail.01_Original"]: CFrameValue;
			} & Folder;
		} & Model;
		Gecko: {
			HumanoidRootPart: {
				root: {
					body: {
						["leg.B.L"]: Bone;
						["leg.B.R"]: Bone;
						["leg.F.L"]: Bone;
						["leg.F.R"]: Bone;
						["tail.01"]: {
							["tail.02"]: Bone;
						} & Bone;
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
				["leg.B.L_Composited"]: CFrameValue;
				["leg.B.L_Initial"]: CFrameValue;
				["leg.B.L_Original"]: CFrameValue;
				["leg.B.R_Composited"]: CFrameValue;
				["leg.B.R_Initial"]: CFrameValue;
				["leg.B.R_Original"]: CFrameValue;
				["leg.F.L_Composited"]: CFrameValue;
				["leg.F.L_Initial"]: CFrameValue;
				["leg.F.L_Original"]: CFrameValue;
				["leg.F.R_Composited"]: CFrameValue;
				["leg.F.R_Initial"]: CFrameValue;
				["leg.F.R_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				root_Initial: CFrameValue;
				root_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				["tail.02_Composited"]: CFrameValue;
				["tail.02_Initial"]: CFrameValue;
				["tail.02_Original"]: CFrameValue;
			} & Folder;
		} & Model;
		Gemsbok: {
			HumanoidRootPart: {
				root: {
					body: {
						["ear.L"]: Bone;
						["ear.R"]: Bone;
						["leg.B.L"]: Bone;
						["leg.B.R"]: Bone;
						["leg.F.L"]: Bone;
						["leg.F.R"]: Bone;
						["tail.01"]: {
							["tail.02"]: Bone;
						} & Bone;
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
				["ear.L_Composited"]: CFrameValue;
				["ear.L_Initial"]: CFrameValue;
				["ear.L_Original"]: CFrameValue;
				["ear.R_Composited"]: CFrameValue;
				["ear.R_Initial"]: CFrameValue;
				["ear.R_Original"]: CFrameValue;
				["leg.B.L_Composited"]: CFrameValue;
				["leg.B.L_Initial"]: CFrameValue;
				["leg.B.L_Original"]: CFrameValue;
				["leg.B.R_Composited"]: CFrameValue;
				["leg.B.R_Initial"]: CFrameValue;
				["leg.B.R_Original"]: CFrameValue;
				["leg.F.L_Composited"]: CFrameValue;
				["leg.F.L_Initial"]: CFrameValue;
				["leg.F.L_Original"]: CFrameValue;
				["leg.F.R_Composited"]: CFrameValue;
				["leg.F.R_Initial"]: CFrameValue;
				["leg.F.R_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				root_Initial: CFrameValue;
				root_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				["tail.02_Composited"]: CFrameValue;
				["tail.02_Initial"]: CFrameValue;
				["tail.02_Original"]: CFrameValue;
			} & Folder;
		} & Model;
		GilaMonster: {
			HumanoidRootPart: {
				root: {
					body: {
						["leg.B.L"]: Bone;
						["leg.B.R"]: Bone;
						["leg.F.L"]: Bone;
						["leg.F.R"]: Bone;
						["tail.01"]: {
							["tail.02"]: Bone;
						} & Bone;
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
				["leg.B.L_Composited"]: CFrameValue;
				["leg.B.L_Initial"]: CFrameValue;
				["leg.B.L_Original"]: CFrameValue;
				["leg.B.R_Composited"]: CFrameValue;
				["leg.B.R_Initial"]: CFrameValue;
				["leg.B.R_Original"]: CFrameValue;
				["leg.F.L_Composited"]: CFrameValue;
				["leg.F.L_Initial"]: CFrameValue;
				["leg.F.L_Original"]: CFrameValue;
				["leg.F.R_Composited"]: CFrameValue;
				["leg.F.R_Initial"]: CFrameValue;
				["leg.F.R_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				root_Initial: CFrameValue;
				root_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				["tail.02_Composited"]: CFrameValue;
				["tail.02_Initial"]: CFrameValue;
				["tail.02_Original"]: CFrameValue;
			} & Folder;
		} & Model;
		Giraffe: {
			HumanoidRootPart: {
				root: {
					body: {
						["leg.B.L"]: Bone;
						["leg.B.R"]: Bone;
						["leg.F.L"]: Bone;
						["leg.F.R"]: Bone;
						["neck.01"]: {
							["neck.02"]: {
								["ear.R"]: Bone;
								["ear.L"]: Bone;
							} & Bone;
						} & Bone;
						["tail.01"]: {
							["tail.02"]: Bone;
						} & Bone;
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
				["ear.L_Composited"]: CFrameValue;
				["ear.L_Initial"]: CFrameValue;
				["ear.L_Original"]: CFrameValue;
				["ear.R_Composited"]: CFrameValue;
				["ear.R_Initial"]: CFrameValue;
				["ear.R_Original"]: CFrameValue;
				["leg.B.L_Composited"]: CFrameValue;
				["leg.B.L_Initial"]: CFrameValue;
				["leg.B.L_Original"]: CFrameValue;
				["leg.B.R_Composited"]: CFrameValue;
				["leg.B.R_Initial"]: CFrameValue;
				["leg.B.R_Original"]: CFrameValue;
				["leg.F.L_Composited"]: CFrameValue;
				["leg.F.L_Initial"]: CFrameValue;
				["leg.F.L_Original"]: CFrameValue;
				["leg.F.R_Composited"]: CFrameValue;
				["leg.F.R_Initial"]: CFrameValue;
				["leg.F.R_Original"]: CFrameValue;
				["neck.01_Composited"]: CFrameValue;
				["neck.01_Initial"]: CFrameValue;
				["neck.01_Original"]: CFrameValue;
				["neck.02_Composited"]: CFrameValue;
				["neck.02_Initial"]: CFrameValue;
				["neck.02_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				root_Initial: CFrameValue;
				root_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				["tail.02_Composited"]: CFrameValue;
				["tail.02_Initial"]: CFrameValue;
				["tail.02_Original"]: CFrameValue;
			} & Folder;
		} & Model;
		Goat: {
			HumanoidRootPart: {
				root: {
					body: {
						["ear.L"]: Bone;
						["ear.R"]: Bone;
						["leg.B.L"]: Bone;
						["leg.B.R"]: Bone;
						["leg.F.L"]: Bone;
						["leg.F.R"]: Bone;
						["tail.01"]: Bone;
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
				["ear.L_Composited"]: CFrameValue;
				["ear.L_Initial"]: CFrameValue;
				["ear.L_Original"]: CFrameValue;
				["ear.R_Composited"]: CFrameValue;
				["ear.R_Initial"]: CFrameValue;
				["ear.R_Original"]: CFrameValue;
				["leg.B.L_Composited"]: CFrameValue;
				["leg.B.L_Initial"]: CFrameValue;
				["leg.B.L_Original"]: CFrameValue;
				["leg.B.R_Composited"]: CFrameValue;
				["leg.B.R_Initial"]: CFrameValue;
				["leg.B.R_Original"]: CFrameValue;
				["leg.F.L_Composited"]: CFrameValue;
				["leg.F.L_Initial"]: CFrameValue;
				["leg.F.L_Original"]: CFrameValue;
				["leg.F.R_Composited"]: CFrameValue;
				["leg.F.R_Initial"]: CFrameValue;
				["leg.F.R_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				root_Initial: CFrameValue;
				root_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["tail.01_Original"]: CFrameValue;
			} & Folder;
		} & Model;
		GoldenEagle: {
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
		Goldfish: {
			HumanoidRootPart: {
				root: {
					body: {
						["fin.02"]: Bone;
						["fin.L"]: Bone;
						["fin.R"]: Bone;
						["hair.01"]: Bone;
						["tail.01"]: Bone;
						["tail.02"]: Bone;
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
				["fin.02_Composited"]: CFrameValue;
				["fin.02_Initial"]: CFrameValue;
				["fin.02_Original"]: CFrameValue;
				["fin.L_Composited"]: CFrameValue;
				["fin.L_Initial"]: CFrameValue;
				["fin.L_Original"]: CFrameValue;
				["fin.R_Composited"]: CFrameValue;
				["fin.R_Initial"]: CFrameValue;
				["fin.R_Original"]: CFrameValue;
				["hair.01_Composited"]: CFrameValue;
				["hair.01_Initial"]: CFrameValue;
				["hair.01_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				root_Initial: CFrameValue;
				root_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				["tail.02_Composited"]: CFrameValue;
				["tail.02_Initial"]: CFrameValue;
				["tail.02_Original"]: CFrameValue;
			} & Folder;
		} & Model;
		Goose: {
			HumanoidRootPart: {
				root: {
					body: {
						["feet.L"]: Bone;
						["feet.R"]: Bone;
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
		Gorilla: {
			HumanoidRootPart: {
				root: {
					body: {
						["ear.L"]: Bone;
						["ear.R"]: Bone;
						["leg.B.L"]: Bone;
						["leg.B.R"]: Bone;
						["leg.F.L"]: Bone;
						["leg.F.R"]: Bone;
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
				["ear.L_Composited"]: CFrameValue;
				["ear.L_Initial"]: CFrameValue;
				["ear.L_Original"]: CFrameValue;
				["ear.R_Composited"]: CFrameValue;
				["ear.R_Initial"]: CFrameValue;
				["ear.R_Original"]: CFrameValue;
				["leg.B.L_Composited"]: CFrameValue;
				["leg.B.L_Initial"]: CFrameValue;
				["leg.B.L_Original"]: CFrameValue;
				["leg.B.R_Composited"]: CFrameValue;
				["leg.B.R_Initial"]: CFrameValue;
				["leg.B.R_Original"]: CFrameValue;
				["leg.F.L_Composited"]: CFrameValue;
				["leg.F.L_Initial"]: CFrameValue;
				["leg.F.L_Original"]: CFrameValue;
				["leg.F.R_Composited"]: CFrameValue;
				["leg.F.R_Initial"]: CFrameValue;
				["leg.F.R_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				root_Initial: CFrameValue;
				root_Original: CFrameValue;
			} & Folder;
		} & Model;
		Hamster: {
			HumanoidRootPart: {
				root: {
					body: {
						["ear.L"]: Bone;
						["ear.R"]: Bone;
						["leg.B.L"]: Bone;
						["leg.B.R"]: Bone;
						["leg.F.L"]: Bone;
						["leg.F.R"]: Bone;
						["tail.01"]: Bone;
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
				["ear.L_Composited"]: CFrameValue;
				["ear.L_Initial"]: CFrameValue;
				["ear.L_Original"]: CFrameValue;
				["ear.R_Composited"]: CFrameValue;
				["ear.R_Initial"]: CFrameValue;
				["ear.R_Original"]: CFrameValue;
				["leg.B.L_Composited"]: CFrameValue;
				["leg.B.L_Initial"]: CFrameValue;
				["leg.B.L_Original"]: CFrameValue;
				["leg.B.R_Composited"]: CFrameValue;
				["leg.B.R_Initial"]: CFrameValue;
				["leg.B.R_Original"]: CFrameValue;
				["leg.F.L_Composited"]: CFrameValue;
				["leg.F.L_Initial"]: CFrameValue;
				["leg.F.L_Original"]: CFrameValue;
				["leg.F.R_Composited"]: CFrameValue;
				["leg.F.R_Initial"]: CFrameValue;
				["leg.F.R_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				root_Initial: CFrameValue;
				root_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["tail.01_Original"]: CFrameValue;
			} & Folder;
		} & Model;
		Hare: {
			HumanoidRootPart: {
				root: {
					body: {
						["ear.L"]: Bone;
						["ear.R"]: Bone;
						["leg.B.L"]: Bone;
						["leg.B.R"]: Bone;
						["leg.F.L"]: Bone;
						["leg.F.R"]: Bone;
						["tail.01"]: Bone;
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
				["ear.L_Composited"]: CFrameValue;
				["ear.L_Initial"]: CFrameValue;
				["ear.L_Original"]: CFrameValue;
				["ear.R_Composited"]: CFrameValue;
				["ear.R_Initial"]: CFrameValue;
				["ear.R_Original"]: CFrameValue;
				["leg.B.L_Composited"]: CFrameValue;
				["leg.B.L_Initial"]: CFrameValue;
				["leg.B.L_Original"]: CFrameValue;
				["leg.B.R_Composited"]: CFrameValue;
				["leg.B.R_Initial"]: CFrameValue;
				["leg.B.R_Original"]: CFrameValue;
				["leg.F.L_Composited"]: CFrameValue;
				["leg.F.L_Initial"]: CFrameValue;
				["leg.F.L_Original"]: CFrameValue;
				["leg.F.R_Composited"]: CFrameValue;
				["leg.F.R_Initial"]: CFrameValue;
				["leg.F.R_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				root_Initial: CFrameValue;
				root_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["tail.01_Original"]: CFrameValue;
			} & Folder;
		} & Model;
		Hedgehog: {
			HumanoidRootPart: {
				root: {
					body: {
						["ear.L"]: Bone;
						["ear.R"]: Bone;
						["leg.B.L"]: Bone;
						["leg.B.R"]: Bone;
						["leg.F.L"]: Bone;
						["leg.F.R"]: Bone;
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
				["ear.L_Composited"]: CFrameValue;
				["ear.L_Initial"]: CFrameValue;
				["ear.L_Original"]: CFrameValue;
				["ear.R_Composited"]: CFrameValue;
				["ear.R_Initial"]: CFrameValue;
				["ear.R_Original"]: CFrameValue;
				["leg.B.L_Composited"]: CFrameValue;
				["leg.B.L_Initial"]: CFrameValue;
				["leg.B.L_Original"]: CFrameValue;
				["leg.B.R_Composited"]: CFrameValue;
				["leg.B.R_Initial"]: CFrameValue;
				["leg.B.R_Original"]: CFrameValue;
				["leg.F.L_Composited"]: CFrameValue;
				["leg.F.L_Initial"]: CFrameValue;
				["leg.F.L_Original"]: CFrameValue;
				["leg.F.R_Composited"]: CFrameValue;
				["leg.F.R_Initial"]: CFrameValue;
				["leg.F.R_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				root_Initial: CFrameValue;
				root_Original: CFrameValue;
			} & Folder;
		} & Model;
		Hen: {
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
		Herring: {
			HumanoidRootPart: {
				root: {
					body: {
						["fin.01"]: Bone;
						["fin.02"]: Bone;
						["fin.03"]: Bone;
						["fin.L"]: Bone;
						["fin.R"]: Bone;
						["tail.01"]: Bone;
						["tail.02"]: Bone;
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
				["fin.01_Composited"]: CFrameValue;
				["fin.01_Initial"]: CFrameValue;
				["fin.01_Original"]: CFrameValue;
				["fin.02_Composited"]: CFrameValue;
				["fin.02_Initial"]: CFrameValue;
				["fin.02_Original"]: CFrameValue;
				["fin.03_Composited"]: CFrameValue;
				["fin.03_Initial"]: CFrameValue;
				["fin.03_Original"]: CFrameValue;
				["fin.L_Composited"]: CFrameValue;
				["fin.L_Initial"]: CFrameValue;
				["fin.L_Original"]: CFrameValue;
				["fin.R_Composited"]: CFrameValue;
				["fin.R_Initial"]: CFrameValue;
				["fin.R_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				root_Initial: CFrameValue;
				root_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				["tail.02_Composited"]: CFrameValue;
				["tail.02_Initial"]: CFrameValue;
				["tail.02_Original"]: CFrameValue;
			} & Folder;
		} & Model;
		Hippo: {
			HumanoidRootPart: {
				root: {
					body: {
						["ear.L"]: Bone;
						["ear.R"]: Bone;
						["leg.B.L"]: Bone;
						["leg.B.R"]: Bone;
						["leg.F.L"]: Bone;
						["leg.F.R"]: Bone;
						["tail.01"]: Bone;
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
				["ear.L_Composited"]: CFrameValue;
				["ear.L_Initial"]: CFrameValue;
				["ear.L_Original"]: CFrameValue;
				["ear.R_Composited"]: CFrameValue;
				["ear.R_Initial"]: CFrameValue;
				["ear.R_Original"]: CFrameValue;
				["leg.B.L_Composited"]: CFrameValue;
				["leg.B.L_Initial"]: CFrameValue;
				["leg.B.L_Original"]: CFrameValue;
				["leg.B.R_Composited"]: CFrameValue;
				["leg.B.R_Initial"]: CFrameValue;
				["leg.B.R_Original"]: CFrameValue;
				["leg.F.L_Composited"]: CFrameValue;
				["leg.F.L_Initial"]: CFrameValue;
				["leg.F.L_Original"]: CFrameValue;
				["leg.F.R_Composited"]: CFrameValue;
				["leg.F.R_Initial"]: CFrameValue;
				["leg.F.R_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				root_Initial: CFrameValue;
				root_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["tail.01_Original"]: CFrameValue;
			} & Folder;
		} & Model;
		Hog: {
			HumanoidRootPart: {
				root: {
					body: {
						["ear.L"]: Bone;
						["ear.R"]: Bone;
						["leg.B.L"]: Bone;
						["leg.B.R"]: Bone;
						["leg.F.L"]: Bone;
						["leg.F.R"]: Bone;
						["tail.01"]: {
							["tail.02"]: Bone;
						} & Bone;
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
				["ear.L_Composited"]: CFrameValue;
				["ear.L_Initial"]: CFrameValue;
				["ear.L_Original"]: CFrameValue;
				["ear.R_Composited"]: CFrameValue;
				["ear.R_Initial"]: CFrameValue;
				["ear.R_Original"]: CFrameValue;
				["leg.B.L_Composited"]: CFrameValue;
				["leg.B.L_Initial"]: CFrameValue;
				["leg.B.L_Original"]: CFrameValue;
				["leg.B.R_Composited"]: CFrameValue;
				["leg.B.R_Initial"]: CFrameValue;
				["leg.B.R_Original"]: CFrameValue;
				["leg.F.L_Composited"]: CFrameValue;
				["leg.F.L_Initial"]: CFrameValue;
				["leg.F.L_Original"]: CFrameValue;
				["leg.F.R_Composited"]: CFrameValue;
				["leg.F.R_Initial"]: CFrameValue;
				["leg.F.R_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				root_Initial: CFrameValue;
				root_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				["tail.02_Composited"]: CFrameValue;
				["tail.02_Initial"]: CFrameValue;
				["tail.02_Original"]: CFrameValue;
			} & Folder;
		} & Model;
		Hornbill: {
			HumanoidRootPart: {
				root: {
					body: {
						["feet.L"]: Bone;
						["feet.R"]: Bone;
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
		HornedLizard: {
			HumanoidRootPart: {
				root: {
					body: {
						["leg.B.L"]: Bone;
						["leg.B.R"]: Bone;
						["leg.F.L"]: Bone;
						["leg.F.R"]: Bone;
						["tail.01"]: {
							["tail.02"]: Bone;
						} & Bone;
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
				["leg.B.L_Composited"]: CFrameValue;
				["leg.B.L_Initial"]: CFrameValue;
				["leg.B.L_Original"]: CFrameValue;
				["leg.B.R_Composited"]: CFrameValue;
				["leg.B.R_Initial"]: CFrameValue;
				["leg.B.R_Original"]: CFrameValue;
				["leg.F.L_Composited"]: CFrameValue;
				["leg.F.L_Initial"]: CFrameValue;
				["leg.F.L_Original"]: CFrameValue;
				["leg.F.R_Composited"]: CFrameValue;
				["leg.F.R_Initial"]: CFrameValue;
				["leg.F.R_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				root_Initial: CFrameValue;
				root_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				["tail.02_Composited"]: CFrameValue;
				["tail.02_Initial"]: CFrameValue;
				["tail.02_Original"]: CFrameValue;
			} & Folder;
		} & Model;
		Horse: {
			HumanoidRootPart: {
				root: {
					body: {
						["ear.L"]: Bone;
						["ear.R"]: Bone;
						["leg.B.L"]: Bone;
						["leg.B.R"]: Bone;
						["leg.F.L"]: Bone;
						["leg.F.R"]: Bone;
						["tail.01"]: {
							["tail.02"]: Bone;
						} & Bone;
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
				["ear.L_Composited"]: CFrameValue;
				["ear.L_Initial"]: CFrameValue;
				["ear.L_Original"]: CFrameValue;
				["ear.R_Composited"]: CFrameValue;
				["ear.R_Initial"]: CFrameValue;
				["ear.R_Original"]: CFrameValue;
				["leg.B.L_Composited"]: CFrameValue;
				["leg.B.L_Initial"]: CFrameValue;
				["leg.B.L_Original"]: CFrameValue;
				["leg.B.R_Composited"]: CFrameValue;
				["leg.B.R_Initial"]: CFrameValue;
				["leg.B.R_Original"]: CFrameValue;
				["leg.F.L_Composited"]: CFrameValue;
				["leg.F.L_Initial"]: CFrameValue;
				["leg.F.L_Original"]: CFrameValue;
				["leg.F.R_Composited"]: CFrameValue;
				["leg.F.R_Initial"]: CFrameValue;
				["leg.F.R_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				root_Initial: CFrameValue;
				root_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				["tail.02_Composited"]: CFrameValue;
				["tail.02_Initial"]: CFrameValue;
				["tail.02_Original"]: CFrameValue;
			} & Folder;
		} & Model;
		Husky: {
			HumanoidRootPart: {
				root: {
					body: {
						["ear.L"]: Bone;
						["ear.R"]: Bone;
						["leg.B.L"]: Bone;
						["leg.B.R"]: Bone;
						["leg.F.L"]: Bone;
						["leg.F.R"]: Bone;
						["tail.01"]: {
							["tail.02"]: Bone;
						} & Bone;
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
				["ear.L_Composited"]: CFrameValue;
				["ear.L_Initial"]: CFrameValue;
				["ear.L_Original"]: CFrameValue;
				["ear.R_Composited"]: CFrameValue;
				["ear.R_Initial"]: CFrameValue;
				["ear.R_Original"]: CFrameValue;
				["leg.B.L_Composited"]: CFrameValue;
				["leg.B.L_Initial"]: CFrameValue;
				["leg.B.L_Original"]: CFrameValue;
				["leg.B.R_Composited"]: CFrameValue;
				["leg.B.R_Initial"]: CFrameValue;
				["leg.B.R_Original"]: CFrameValue;
				["leg.F.L_Composited"]: CFrameValue;
				["leg.F.L_Initial"]: CFrameValue;
				["leg.F.L_Original"]: CFrameValue;
				["leg.F.R_Composited"]: CFrameValue;
				["leg.F.R_Initial"]: CFrameValue;
				["leg.F.R_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				root_Initial: CFrameValue;
				root_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				["tail.02_Composited"]: CFrameValue;
				["tail.02_Initial"]: CFrameValue;
				["tail.02_Original"]: CFrameValue;
			} & Folder;
		} & Model;
		Hyena: {
			HumanoidRootPart: {
				root: {
					body: {
						["ear.L"]: Bone;
						["ear.R"]: Bone;
						["leg.B.L"]: Bone;
						["leg.B.R"]: Bone;
						["leg.F.L"]: Bone;
						["leg.F.R"]: Bone;
						["tail.01"]: {
							["tail.02"]: Bone;
						} & Bone;
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
				["ear.L_Composited"]: CFrameValue;
				["ear.L_Initial"]: CFrameValue;
				["ear.L_Original"]: CFrameValue;
				["ear.R_Composited"]: CFrameValue;
				["ear.R_Initial"]: CFrameValue;
				["ear.R_Original"]: CFrameValue;
				["leg.B.L_Composited"]: CFrameValue;
				["leg.B.L_Initial"]: CFrameValue;
				["leg.B.L_Original"]: CFrameValue;
				["leg.B.R_Composited"]: CFrameValue;
				["leg.B.R_Initial"]: CFrameValue;
				["leg.B.R_Original"]: CFrameValue;
				["leg.F.L_Composited"]: CFrameValue;
				["leg.F.L_Initial"]: CFrameValue;
				["leg.F.L_Original"]: CFrameValue;
				["leg.F.R_Composited"]: CFrameValue;
				["leg.F.R_Initial"]: CFrameValue;
				["leg.F.R_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				root_Initial: CFrameValue;
				root_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				["tail.02_Composited"]: CFrameValue;
				["tail.02_Initial"]: CFrameValue;
				["tail.02_Original"]: CFrameValue;
			} & Folder;
		} & Model;
		Iguana: {
			HumanoidRootPart: {
				root: {
					body: {
						["leg.B.L"]: Bone;
						["leg.B.R"]: Bone;
						["leg.F.L"]: Bone;
						["leg.F.R"]: Bone;
						["tail.01"]: {
							["tail.02"]: Bone;
						} & Bone;
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
				["leg.B.L_Composited"]: CFrameValue;
				["leg.B.L_Initial"]: CFrameValue;
				["leg.B.L_Original"]: CFrameValue;
				["leg.B.R_Composited"]: CFrameValue;
				["leg.B.R_Initial"]: CFrameValue;
				["leg.B.R_Original"]: CFrameValue;
				["leg.F.L_Composited"]: CFrameValue;
				["leg.F.L_Initial"]: CFrameValue;
				["leg.F.L_Original"]: CFrameValue;
				["leg.F.R_Composited"]: CFrameValue;
				["leg.F.R_Initial"]: CFrameValue;
				["leg.F.R_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				root_Initial: CFrameValue;
				root_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				["tail.02_Composited"]: CFrameValue;
				["tail.02_Initial"]: CFrameValue;
				["tail.02_Original"]: CFrameValue;
			} & Folder;
		} & Model;
		Inkfish: {
			HumanoidRootPart: {
				root: {
					body: {
						["tentacle.L.01"]: {
							["tentacle.L.05"]: Bone;
						} & Bone;
						["tentacle.L.02"]: {
							["tentacle.L.06"]: Bone;
						} & Bone;
						["tentacle.L.03"]: {
							["tentacle.L.07"]: Bone;
						} & Bone;
						["tentacle.L.04"]: {
							["tentacle.L.08"]: Bone;
						} & Bone;
						["tentacle.R.01"]: {
							["tentacle.R.05"]: Bone;
						} & Bone;
						["tentacle.R.02"]: {
							["tentacle.R.06"]: Bone;
						} & Bone;
						["tentacle.R.03"]: {
							["tentacle.R.07"]: Bone;
						} & Bone;
						["tentacle.R.04"]: {
							["tentacle.R.08"]: Bone;
						} & Bone;
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
				root_Composited: CFrameValue;
				root_Initial: CFrameValue;
				root_Original: CFrameValue;
				["tentacle.L.01_Composited"]: CFrameValue;
				["tentacle.L.01_Initial"]: CFrameValue;
				["tentacle.L.01_Original"]: CFrameValue;
				["tentacle.L.02_Composited"]: CFrameValue;
				["tentacle.L.02_Initial"]: CFrameValue;
				["tentacle.L.02_Original"]: CFrameValue;
				["tentacle.L.03_Composited"]: CFrameValue;
				["tentacle.L.03_Initial"]: CFrameValue;
				["tentacle.L.03_Original"]: CFrameValue;
				["tentacle.L.04_Composited"]: CFrameValue;
				["tentacle.L.04_Initial"]: CFrameValue;
				["tentacle.L.04_Original"]: CFrameValue;
				["tentacle.L.05_Composited"]: CFrameValue;
				["tentacle.L.05_Initial"]: CFrameValue;
				["tentacle.L.05_Original"]: CFrameValue;
				["tentacle.L.06_Composited"]: CFrameValue;
				["tentacle.L.06_Initial"]: CFrameValue;
				["tentacle.L.06_Original"]: CFrameValue;
				["tentacle.L.07_Composited"]: CFrameValue;
				["tentacle.L.07_Initial"]: CFrameValue;
				["tentacle.L.07_Original"]: CFrameValue;
				["tentacle.L.08_Composited"]: CFrameValue;
				["tentacle.L.08_Initial"]: CFrameValue;
				["tentacle.L.08_Original"]: CFrameValue;
				["tentacle.R.01_Composited"]: CFrameValue;
				["tentacle.R.01_Initial"]: CFrameValue;
				["tentacle.R.01_Original"]: CFrameValue;
				["tentacle.R.02_Composited"]: CFrameValue;
				["tentacle.R.02_Initial"]: CFrameValue;
				["tentacle.R.02_Original"]: CFrameValue;
				["tentacle.R.03_Composited"]: CFrameValue;
				["tentacle.R.03_Initial"]: CFrameValue;
				["tentacle.R.03_Original"]: CFrameValue;
				["tentacle.R.04_Composited"]: CFrameValue;
				["tentacle.R.04_Initial"]: CFrameValue;
				["tentacle.R.04_Original"]: CFrameValue;
				["tentacle.R.05_Composited"]: CFrameValue;
				["tentacle.R.05_Initial"]: CFrameValue;
				["tentacle.R.05_Original"]: CFrameValue;
				["tentacle.R.06_Composited"]: CFrameValue;
				["tentacle.R.06_Initial"]: CFrameValue;
				["tentacle.R.06_Original"]: CFrameValue;
				["tentacle.R.07_Composited"]: CFrameValue;
				["tentacle.R.07_Initial"]: CFrameValue;
				["tentacle.R.07_Original"]: CFrameValue;
				["tentacle.R.08_Composited"]: CFrameValue;
				["tentacle.R.08_Initial"]: CFrameValue;
				["tentacle.R.08_Original"]: CFrameValue;
			} & Folder;
		} & Model;
		Jackal: {
			HumanoidRootPart: {
				root: {
					body: {
						["ear.L"]: Bone;
						["ear.R"]: Bone;
						["leg.B.L"]: Bone;
						["leg.B.R"]: Bone;
						["leg.F.L"]: Bone;
						["leg.F.R"]: Bone;
						["tail.01"]: {
							["tail.02"]: Bone;
						} & Bone;
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
				["ear.L_Composited"]: CFrameValue;
				["ear.L_Initial"]: CFrameValue;
				["ear.L_Original"]: CFrameValue;
				["ear.R_Composited"]: CFrameValue;
				["ear.R_Initial"]: CFrameValue;
				["ear.R_Original"]: CFrameValue;
				["leg.B.L_Composited"]: CFrameValue;
				["leg.B.L_Initial"]: CFrameValue;
				["leg.B.L_Original"]: CFrameValue;
				["leg.B.R_Composited"]: CFrameValue;
				["leg.B.R_Initial"]: CFrameValue;
				["leg.B.R_Original"]: CFrameValue;
				["leg.F.L_Composited"]: CFrameValue;
				["leg.F.L_Initial"]: CFrameValue;
				["leg.F.L_Original"]: CFrameValue;
				["leg.F.R_Composited"]: CFrameValue;
				["leg.F.R_Initial"]: CFrameValue;
				["leg.F.R_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				root_Initial: CFrameValue;
				root_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				["tail.02_Composited"]: CFrameValue;
				["tail.02_Initial"]: CFrameValue;
				["tail.02_Original"]: CFrameValue;
			} & Folder;
		} & Model;
		Jackrabbit: {
			HumanoidRootPart: {
				root: {
					body: {
						["ear.L"]: Bone;
						["ear.R"]: Bone;
						["leg.B.L"]: Bone;
						["leg.B.R"]: Bone;
						["leg.F.L"]: Bone;
						["leg.F.R"]: Bone;
						["tail.01"]: Bone;
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
				["ear.L_Composited"]: CFrameValue;
				["ear.L_Initial"]: CFrameValue;
				["ear.L_Original"]: CFrameValue;
				["ear.R_Composited"]: CFrameValue;
				["ear.R_Initial"]: CFrameValue;
				["ear.R_Original"]: CFrameValue;
				["leg.B.L_Composited"]: CFrameValue;
				["leg.B.L_Initial"]: CFrameValue;
				["leg.B.L_Original"]: CFrameValue;
				["leg.B.R_Composited"]: CFrameValue;
				["leg.B.R_Initial"]: CFrameValue;
				["leg.B.R_Original"]: CFrameValue;
				["leg.F.L_Composited"]: CFrameValue;
				["leg.F.L_Initial"]: CFrameValue;
				["leg.F.L_Original"]: CFrameValue;
				["leg.F.R_Composited"]: CFrameValue;
				["leg.F.R_Initial"]: CFrameValue;
				["leg.F.R_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				root_Initial: CFrameValue;
				root_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["tail.01_Original"]: CFrameValue;
			} & Folder;
		} & Model;
		Jaguar: {
			HumanoidRootPart: {
				body: {
					["ear.L"]: Bone;
					["ear.R"]: Bone;
					["leg.B.L"]: Bone;
					["leg.B.R"]: Bone;
					["leg.F.L"]: Bone;
					["leg.F.R"]: Bone;
					["tail.01"]: {
						["tail.02"]: Bone;
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
				["ear.L_Composited"]: CFrameValue;
				["ear.L_Initial"]: CFrameValue;
				["ear.L_Original"]: CFrameValue;
				["ear.R_Composited"]: CFrameValue;
				["ear.R_Initial"]: CFrameValue;
				["ear.R_Original"]: CFrameValue;
				["leg.B.L_Composited"]: CFrameValue;
				["leg.B.L_Initial"]: CFrameValue;
				["leg.B.L_Original"]: CFrameValue;
				["leg.B.R_Composited"]: CFrameValue;
				["leg.B.R_Initial"]: CFrameValue;
				["leg.B.R_Original"]: CFrameValue;
				["leg.F.L_Composited"]: CFrameValue;
				["leg.F.L_Initial"]: CFrameValue;
				["leg.F.L_Original"]: CFrameValue;
				["leg.F.R_Composited"]: CFrameValue;
				["leg.F.R_Initial"]: CFrameValue;
				["leg.F.R_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				root_Initial: CFrameValue;
				root_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				["tail.02_Composited"]: CFrameValue;
				["tail.02_Initial"]: CFrameValue;
				["tail.02_Original"]: CFrameValue;
			} & Folder;
		} & Model;
		Javelina: {
			HumanoidRootPart: {
				body: {
					["ear.L"]: Bone;
					["ear.R"]: Bone;
					["leg.B.L"]: Bone;
					["leg.B.R"]: Bone;
					["leg.F.L"]: Bone;
					["leg.F.R"]: Bone;
					["tail.01"]: Bone;
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
				["ear.L_Composited"]: CFrameValue;
				["ear.L_Initial"]: CFrameValue;
				["ear.L_Original"]: CFrameValue;
				["ear.R_Composited"]: CFrameValue;
				["ear.R_Initial"]: CFrameValue;
				["ear.R_Original"]: CFrameValue;
				["leg.B.L_Composited"]: CFrameValue;
				["leg.B.L_Initial"]: CFrameValue;
				["leg.B.L_Original"]: CFrameValue;
				["leg.B.R_Composited"]: CFrameValue;
				["leg.B.R_Initial"]: CFrameValue;
				["leg.B.R_Original"]: CFrameValue;
				["leg.F.L_Composited"]: CFrameValue;
				["leg.F.L_Initial"]: CFrameValue;
				["leg.F.L_Original"]: CFrameValue;
				["leg.F.R_Composited"]: CFrameValue;
				["leg.F.R_Initial"]: CFrameValue;
				["leg.F.R_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				root_Initial: CFrameValue;
				root_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["tail.01_Original"]: CFrameValue;
			} & Folder;
		} & Model;
		Jellyfish: {
			HumanoidRootPart: {
				root: {
					body: {
						["tentacle.L.01"]: {
							["tentacle.L.05"]: Bone;
						} & Bone;
						["tentacle.L.02"]: {
							["tentacle.L.06"]: Bone;
						} & Bone;
						["tentacle.L.03"]: {
							["tentacle.L.07"]: Bone;
						} & Bone;
						["tentacle.L.04"]: {
							["tentacle.L.08"]: Bone;
						} & Bone;
						["tentacle.R.01"]: {
							["tentacle.R.05"]: Bone;
						} & Bone;
						["tentacle.R.02"]: {
							["tentacle.R.06"]: Bone;
						} & Bone;
						["tentacle.R.03"]: {
							["tentacle.R.07"]: Bone;
						} & Bone;
						["tentacle.R.04"]: {
							["tentacle.R.08"]: Bone;
						} & Bone;
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
				root_Composited: CFrameValue;
				root_Initial: CFrameValue;
				root_Original: CFrameValue;
				["tentacle.L.01_Composited"]: CFrameValue;
				["tentacle.L.01_Initial"]: CFrameValue;
				["tentacle.L.01_Original"]: CFrameValue;
				["tentacle.L.02_Composited"]: CFrameValue;
				["tentacle.L.02_Initial"]: CFrameValue;
				["tentacle.L.02_Original"]: CFrameValue;
				["tentacle.L.03_Composited"]: CFrameValue;
				["tentacle.L.03_Initial"]: CFrameValue;
				["tentacle.L.03_Original"]: CFrameValue;
				["tentacle.L.04_Composited"]: CFrameValue;
				["tentacle.L.04_Initial"]: CFrameValue;
				["tentacle.L.04_Original"]: CFrameValue;
				["tentacle.L.05_Composited"]: CFrameValue;
				["tentacle.L.05_Initial"]: CFrameValue;
				["tentacle.L.05_Original"]: CFrameValue;
				["tentacle.L.06_Composited"]: CFrameValue;
				["tentacle.L.06_Initial"]: CFrameValue;
				["tentacle.L.06_Original"]: CFrameValue;
				["tentacle.L.07_Composited"]: CFrameValue;
				["tentacle.L.07_Initial"]: CFrameValue;
				["tentacle.L.07_Original"]: CFrameValue;
				["tentacle.L.08_Composited"]: CFrameValue;
				["tentacle.L.08_Initial"]: CFrameValue;
				["tentacle.L.08_Original"]: CFrameValue;
				["tentacle.R.01_Composited"]: CFrameValue;
				["tentacle.R.01_Initial"]: CFrameValue;
				["tentacle.R.01_Original"]: CFrameValue;
				["tentacle.R.02_Composited"]: CFrameValue;
				["tentacle.R.02_Initial"]: CFrameValue;
				["tentacle.R.02_Original"]: CFrameValue;
				["tentacle.R.03_Composited"]: CFrameValue;
				["tentacle.R.03_Initial"]: CFrameValue;
				["tentacle.R.03_Original"]: CFrameValue;
				["tentacle.R.04_Composited"]: CFrameValue;
				["tentacle.R.04_Initial"]: CFrameValue;
				["tentacle.R.04_Original"]: CFrameValue;
				["tentacle.R.05_Composited"]: CFrameValue;
				["tentacle.R.05_Initial"]: CFrameValue;
				["tentacle.R.05_Original"]: CFrameValue;
				["tentacle.R.06_Composited"]: CFrameValue;
				["tentacle.R.06_Initial"]: CFrameValue;
				["tentacle.R.06_Original"]: CFrameValue;
				["tentacle.R.07_Composited"]: CFrameValue;
				["tentacle.R.07_Initial"]: CFrameValue;
				["tentacle.R.07_Original"]: CFrameValue;
				["tentacle.R.08_Composited"]: CFrameValue;
				["tentacle.R.08_Initial"]: CFrameValue;
				["tentacle.R.08_Original"]: CFrameValue;
			} & Folder;
		} & Model;
		Jerboa: {
			HumanoidRootPart: {
				root: {
					body: {
						["ear.L"]: Bone;
						["ear.R"]: Bone;
						["leg.B.L"]: Bone;
						["leg.B.R"]: Bone;
						["leg.F.L"]: Bone;
						["leg.F.R"]: Bone;
						["tail.01"]: {
							["tail.02"]: Bone;
						} & Bone;
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
				["ear.L_Composited"]: CFrameValue;
				["ear.L_Initial"]: CFrameValue;
				["ear.L_Original"]: CFrameValue;
				["ear.R_Composited"]: CFrameValue;
				["ear.R_Initial"]: CFrameValue;
				["ear.R_Original"]: CFrameValue;
				["leg.B.L_Composited"]: CFrameValue;
				["leg.B.L_Initial"]: CFrameValue;
				["leg.B.L_Original"]: CFrameValue;
				["leg.B.R_Composited"]: CFrameValue;
				["leg.B.R_Initial"]: CFrameValue;
				["leg.B.R_Original"]: CFrameValue;
				["leg.F.L_Composited"]: CFrameValue;
				["leg.F.L_Initial"]: CFrameValue;
				["leg.F.L_Original"]: CFrameValue;
				["leg.F.R_Composited"]: CFrameValue;
				["leg.F.R_Initial"]: CFrameValue;
				["leg.F.R_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				root_Initial: CFrameValue;
				root_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				["tail.02_Composited"]: CFrameValue;
				["tail.02_Initial"]: CFrameValue;
				["tail.02_Original"]: CFrameValue;
			} & Folder;
		} & Model;
		Kakapo: {
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
		Kangaroo: {
			HumanoidRootPart: {
				root: {
					body: {
						["arm.L"]: Bone;
						["arm.R"]: Bone;
						["ear.L"]: Bone;
						["ear.R"]: Bone;
						["leg.B.L"]: Bone;
						["leg.B.R"]: Bone;
						["tail.01"]: {
							["tail.02"]: Bone;
						} & Bone;
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
				["arm.L_Composited"]: CFrameValue;
				["arm.L_Initial"]: CFrameValue;
				["arm.L_Original"]: CFrameValue;
				["arm.R_Composited"]: CFrameValue;
				["arm.R_Initial"]: CFrameValue;
				["arm.R_Original"]: CFrameValue;
				body_Composited: CFrameValue;
				body_Initial: CFrameValue;
				body_Original: CFrameValue;
				["ear.L_Composited"]: CFrameValue;
				["ear.L_Initial"]: CFrameValue;
				["ear.L_Original"]: CFrameValue;
				["ear.R_Composited"]: CFrameValue;
				["ear.R_Initial"]: CFrameValue;
				["ear.R_Original"]: CFrameValue;
				["leg.B.L_Composited"]: CFrameValue;
				["leg.B.L_Initial"]: CFrameValue;
				["leg.B.L_Original"]: CFrameValue;
				["leg.B.R_Composited"]: CFrameValue;
				["leg.B.R_Initial"]: CFrameValue;
				["leg.B.R_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				root_Initial: CFrameValue;
				root_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				["tail.02_Composited"]: CFrameValue;
				["tail.02_Initial"]: CFrameValue;
				["tail.02_Original"]: CFrameValue;
			} & Folder;
		} & Model;
		Kingfisher: {
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
		Kirin: {
			HumanoidRootPart: {
				root: {
					body: {
						["ear.L"]: Bone;
						["ear.R"]: Bone;
						["leg.B.L"]: Bone;
						["leg.B.R"]: Bone;
						["leg.F.L"]: Bone;
						["leg.F.R"]: Bone;
						["tail.01"]: {
							["tail.02"]: Bone;
						} & Bone;
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
				["ear.L_Composited"]: CFrameValue;
				["ear.L_Initial"]: CFrameValue;
				["ear.L_Original"]: CFrameValue;
				["ear.R_Composited"]: CFrameValue;
				["ear.R_Initial"]: CFrameValue;
				["ear.R_Original"]: CFrameValue;
				["leg.B.L_Composited"]: CFrameValue;
				["leg.B.L_Initial"]: CFrameValue;
				["leg.B.L_Original"]: CFrameValue;
				["leg.B.R_Composited"]: CFrameValue;
				["leg.B.R_Initial"]: CFrameValue;
				["leg.B.R_Original"]: CFrameValue;
				["leg.F.L_Composited"]: CFrameValue;
				["leg.F.L_Initial"]: CFrameValue;
				["leg.F.L_Original"]: CFrameValue;
				["leg.F.R_Composited"]: CFrameValue;
				["leg.F.R_Initial"]: CFrameValue;
				["leg.F.R_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				root_Initial: CFrameValue;
				root_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				["tail.02_Composited"]: CFrameValue;
				["tail.02_Initial"]: CFrameValue;
				["tail.02_Original"]: CFrameValue;
			} & Folder;
		} & Model;
		Kitsune: {
			HumanoidRootPart: {
				root: {
					body: {
						["ear.L"]: Bone;
						["ear.R"]: Bone;
						["leg.B.L"]: Bone;
						["leg.B.R"]: Bone;
						["leg.F.L"]: Bone;
						["leg.F.R"]: Bone;
						["tail.01"]: Bone;
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
				["ear.L_Composited"]: CFrameValue;
				["ear.L_Initial"]: CFrameValue;
				["ear.L_Original"]: CFrameValue;
				["ear.R_Composited"]: CFrameValue;
				["ear.R_Initial"]: CFrameValue;
				["ear.R_Original"]: CFrameValue;
				["leg.B.L_Composited"]: CFrameValue;
				["leg.B.L_Initial"]: CFrameValue;
				["leg.B.L_Original"]: CFrameValue;
				["leg.B.R_Composited"]: CFrameValue;
				["leg.B.R_Initial"]: CFrameValue;
				["leg.B.R_Original"]: CFrameValue;
				["leg.F.L_Composited"]: CFrameValue;
				["leg.F.L_Initial"]: CFrameValue;
				["leg.F.L_Original"]: CFrameValue;
				["leg.F.R_Composited"]: CFrameValue;
				["leg.F.R_Initial"]: CFrameValue;
				["leg.F.R_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				root_Initial: CFrameValue;
				root_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["tail.01_Original"]: CFrameValue;
			} & Folder;
		} & Model;
		Kiwi: {
			HumanoidRootPart: {
				root: {
					body: {
						["feet.L"]: Bone;
						["feet.R"]: Bone;
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
				root_Composited: CFrameValue;
				root_Initial: CFrameValue;
				root_Original: CFrameValue;
				["wing.L_Composited"]: CFrameValue;
				["wing.L_Initial"]: CFrameValue;
				["wing.L_Original"]: CFrameValue;
				["wing.R_Composited"]: CFrameValue;
				["wing.R_Initial"]: CFrameValue;
				["wing.R_Original"]: CFrameValue;
			} & Folder;
		} & Model;
		Koala: {
			HumanoidRootPart: {
				root: {
					body: {
						["ear.L"]: Bone;
						["ear.R"]: Bone;
						["leg.B.L"]: Bone;
						["leg.B.R"]: Bone;
						["leg.F.L"]: Bone;
						["leg.F.R"]: Bone;
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
				["ear.L_Composited"]: CFrameValue;
				["ear.L_Initial"]: CFrameValue;
				["ear.L_Original"]: CFrameValue;
				["ear.R_Composited"]: CFrameValue;
				["ear.R_Initial"]: CFrameValue;
				["ear.R_Original"]: CFrameValue;
				["leg.B.L_Composited"]: CFrameValue;
				["leg.B.L_Initial"]: CFrameValue;
				["leg.B.L_Original"]: CFrameValue;
				["leg.B.R_Composited"]: CFrameValue;
				["leg.B.R_Initial"]: CFrameValue;
				["leg.B.R_Original"]: CFrameValue;
				["leg.F.L_Composited"]: CFrameValue;
				["leg.F.L_Initial"]: CFrameValue;
				["leg.F.L_Original"]: CFrameValue;
				["leg.F.R_Composited"]: CFrameValue;
				["leg.F.R_Initial"]: CFrameValue;
				["leg.F.R_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				root_Initial: CFrameValue;
				root_Original: CFrameValue;
			} & Folder;
		} & Model;
		Kookaburra: {
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
		Lamb: {
			HumanoidRootPart: {
				root: {
					body: {
						["ear.L"]: Bone;
						["ear.R"]: Bone;
						["leg.B.L"]: Bone;
						["leg.B.R"]: Bone;
						["leg.F.L"]: Bone;
						["leg.F.R"]: Bone;
						["tail.01"]: Bone;
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
				["ear.L_Composited"]: CFrameValue;
				["ear.L_Initial"]: CFrameValue;
				["ear.L_Original"]: CFrameValue;
				["ear.R_Composited"]: CFrameValue;
				["ear.R_Initial"]: CFrameValue;
				["ear.R_Original"]: CFrameValue;
				["leg.B.L_Composited"]: CFrameValue;
				["leg.B.L_Initial"]: CFrameValue;
				["leg.B.L_Original"]: CFrameValue;
				["leg.B.R_Composited"]: CFrameValue;
				["leg.B.R_Initial"]: CFrameValue;
				["leg.B.R_Original"]: CFrameValue;
				["leg.F.L_Composited"]: CFrameValue;
				["leg.F.L_Initial"]: CFrameValue;
				["leg.F.L_Original"]: CFrameValue;
				["leg.F.R_Composited"]: CFrameValue;
				["leg.F.R_Initial"]: CFrameValue;
				["leg.F.R_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				root_Initial: CFrameValue;
				root_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["tail.01_Original"]: CFrameValue;
			} & Folder;
		} & Model;
		Lemur: {
			HumanoidRootPart: {
				root: {
					body: {
						["ear.L"]: Bone;
						["ear.R"]: Bone;
						["leg.B.L"]: Bone;
						["leg.B.R"]: Bone;
						["leg.F.L"]: Bone;
						["leg.F.R"]: Bone;
						["tail.01"]: {
							["tail.02"]: Bone;
						} & Bone;
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
				["ear.L_Composited"]: CFrameValue;
				["ear.L_Initial"]: CFrameValue;
				["ear.L_Original"]: CFrameValue;
				["ear.R_Composited"]: CFrameValue;
				["ear.R_Initial"]: CFrameValue;
				["ear.R_Original"]: CFrameValue;
				["leg.B.L_Composited"]: CFrameValue;
				["leg.B.L_Initial"]: CFrameValue;
				["leg.B.L_Original"]: CFrameValue;
				["leg.B.R_Composited"]: CFrameValue;
				["leg.B.R_Initial"]: CFrameValue;
				["leg.B.R_Original"]: CFrameValue;
				["leg.F.L_Composited"]: CFrameValue;
				["leg.F.L_Initial"]: CFrameValue;
				["leg.F.L_Original"]: CFrameValue;
				["leg.F.R_Composited"]: CFrameValue;
				["leg.F.R_Initial"]: CFrameValue;
				["leg.F.R_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				root_Initial: CFrameValue;
				root_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				["tail.02_Composited"]: CFrameValue;
				["tail.02_Initial"]: CFrameValue;
				["tail.02_Original"]: CFrameValue;
			} & Folder;
		} & Model;
		Leopard: {
			HumanoidRootPart: {
				body: {
					["ear.L"]: Bone;
					["ear.R"]: Bone;
					["leg.B.L"]: Bone;
					["leg.B.R"]: Bone;
					["leg.F.L"]: Bone;
					["leg.F.R"]: Bone;
					["tail.01"]: {
						["tail.02"]: Bone;
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
				["ear.L_Composited"]: CFrameValue;
				["ear.L_Initial"]: CFrameValue;
				["ear.L_Original"]: CFrameValue;
				["ear.R_Composited"]: CFrameValue;
				["ear.R_Initial"]: CFrameValue;
				["ear.R_Original"]: CFrameValue;
				["leg.B.L_Composited"]: CFrameValue;
				["leg.B.L_Initial"]: CFrameValue;
				["leg.B.L_Original"]: CFrameValue;
				["leg.B.R_Composited"]: CFrameValue;
				["leg.B.R_Initial"]: CFrameValue;
				["leg.B.R_Original"]: CFrameValue;
				["leg.F.L_Composited"]: CFrameValue;
				["leg.F.L_Initial"]: CFrameValue;
				["leg.F.L_Original"]: CFrameValue;
				["leg.F.R_Composited"]: CFrameValue;
				["leg.F.R_Initial"]: CFrameValue;
				["leg.F.R_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				root_Initial: CFrameValue;
				root_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				["tail.02_Composited"]: CFrameValue;
				["tail.02_Initial"]: CFrameValue;
				["tail.02_Original"]: CFrameValue;
			} & Folder;
		} & Model;
		Leviathan: {
			HumanoidRootPart: {
				root: {
					body: {
						["leg.B.L"]: Bone;
						["leg.B.R"]: Bone;
						["leg.F.L"]: Bone;
						["leg.F.R"]: Bone;
						["tail.01"]: Bone;
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
				["ear.L_Composited"]: CFrameValue;
				["ear.L_Initial"]: CFrameValue;
				["ear.L_Original"]: CFrameValue;
				["ear.R_Composited"]: CFrameValue;
				["ear.R_Initial"]: CFrameValue;
				["ear.R_Original"]: CFrameValue;
				["leg.B.L_Composited"]: CFrameValue;
				["leg.B.L_Initial"]: CFrameValue;
				["leg.B.L_Original"]: CFrameValue;
				["leg.B.R_Composited"]: CFrameValue;
				["leg.B.R_Initial"]: CFrameValue;
				["leg.B.R_Original"]: CFrameValue;
				["leg.F.L_Composited"]: CFrameValue;
				["leg.F.L_Initial"]: CFrameValue;
				["leg.F.L_Original"]: CFrameValue;
				["leg.F.R_Composited"]: CFrameValue;
				["leg.F.R_Initial"]: CFrameValue;
				["leg.F.R_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				root_Initial: CFrameValue;
				root_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["tail.01_Original"]: CFrameValue;
			} & Folder;
		} & Model;
		Lion: {
			HumanoidRootPart: {
				root: {
					body: {
						["ear.L"]: Bone;
						["ear.R"]: Bone;
						["leg.B.L"]: Bone;
						["leg.B.R"]: Bone;
						["leg.F.L"]: Bone;
						["leg.F.R"]: Bone;
						["tail.01"]: {
							["tail.02"]: Bone;
						} & Bone;
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
				["ear.L_Composited"]: CFrameValue;
				["ear.L_Initial"]: CFrameValue;
				["ear.L_Original"]: CFrameValue;
				["ear.R_Composited"]: CFrameValue;
				["ear.R_Initial"]: CFrameValue;
				["ear.R_Original"]: CFrameValue;
				["leg.B.L_Composited"]: CFrameValue;
				["leg.B.L_Initial"]: CFrameValue;
				["leg.B.L_Original"]: CFrameValue;
				["leg.B.R_Composited"]: CFrameValue;
				["leg.B.R_Initial"]: CFrameValue;
				["leg.B.R_Original"]: CFrameValue;
				["leg.F.L_Composited"]: CFrameValue;
				["leg.F.L_Initial"]: CFrameValue;
				["leg.F.L_Original"]: CFrameValue;
				["leg.F.R_Composited"]: CFrameValue;
				["leg.F.R_Initial"]: CFrameValue;
				["leg.F.R_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				root_Initial: CFrameValue;
				root_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				["tail.02_Composited"]: CFrameValue;
				["tail.02_Initial"]: CFrameValue;
				["tail.02_Original"]: CFrameValue;
			} & Folder;
		} & Model;
		Lioness: {
			HumanoidRootPart: {
				root: {
					body: {
						["ear.L"]: Bone;
						["ear.R"]: Bone;
						["leg.B.L"]: Bone;
						["leg.B.R"]: Bone;
						["leg.F.L"]: Bone;
						["leg.F.R"]: Bone;
						["tail.01"]: {
							["tail.02"]: Bone;
						} & Bone;
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
				["ear.L_Composited"]: CFrameValue;
				["ear.L_Initial"]: CFrameValue;
				["ear.L_Original"]: CFrameValue;
				["ear.R_Composited"]: CFrameValue;
				["ear.R_Initial"]: CFrameValue;
				["ear.R_Original"]: CFrameValue;
				["leg.B.L_Composited"]: CFrameValue;
				["leg.B.L_Initial"]: CFrameValue;
				["leg.B.L_Original"]: CFrameValue;
				["leg.B.R_Composited"]: CFrameValue;
				["leg.B.R_Initial"]: CFrameValue;
				["leg.B.R_Original"]: CFrameValue;
				["leg.F.L_Composited"]: CFrameValue;
				["leg.F.L_Initial"]: CFrameValue;
				["leg.F.L_Original"]: CFrameValue;
				["leg.F.R_Composited"]: CFrameValue;
				["leg.F.R_Initial"]: CFrameValue;
				["leg.F.R_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				root_Initial: CFrameValue;
				root_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				["tail.02_Composited"]: CFrameValue;
				["tail.02_Initial"]: CFrameValue;
				["tail.02_Original"]: CFrameValue;
			} & Folder;
		} & Model;
		Llama: {
			HumanoidRootPart: {
				root: {
					body: {
						["ear.L"]: Bone;
						["ear.R"]: Bone;
						["leg.B.L"]: Bone;
						["leg.B.R"]: Bone;
						["leg.F.L"]: Bone;
						["leg.F.R"]: Bone;
						["tail.01"]: {
							["tail.02"]: Bone;
						} & Bone;
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
				["ear.L_Composited"]: CFrameValue;
				["ear.L_Initial"]: CFrameValue;
				["ear.L_Original"]: CFrameValue;
				["ear.R_Composited"]: CFrameValue;
				["ear.R_Initial"]: CFrameValue;
				["ear.R_Original"]: CFrameValue;
				["leg.B.L_Composited"]: CFrameValue;
				["leg.B.L_Initial"]: CFrameValue;
				["leg.B.L_Original"]: CFrameValue;
				["leg.B.R_Composited"]: CFrameValue;
				["leg.B.R_Initial"]: CFrameValue;
				["leg.B.R_Original"]: CFrameValue;
				["leg.F.L_Composited"]: CFrameValue;
				["leg.F.L_Initial"]: CFrameValue;
				["leg.F.L_Original"]: CFrameValue;
				["leg.F.R_Composited"]: CFrameValue;
				["leg.F.R_Initial"]: CFrameValue;
				["leg.F.R_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				root_Initial: CFrameValue;
				root_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				["tail.02_Composited"]: CFrameValue;
				["tail.02_Initial"]: CFrameValue;
				["tail.02_Original"]: CFrameValue;
			} & Folder;
		} & Model;
		Lobster: {
			HumanoidRootPart: {
				root: {
					body: {
						["leg.L.01"]: Bone;
						["leg.L.02"]: Bone;
						["leg.L.03"]: Bone;
						["leg.R.01"]: Bone;
						["leg.R.02"]: Bone;
						["leg.R.03"]: Bone;
						["tail.01"]: Bone;
						wrist: {
							["claw.L"]: Bone;
							["claw.R"]: Bone;
						} & Bone;
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
				["claw.L_Composited"]: CFrameValue;
				["claw.L_Initial"]: CFrameValue;
				["claw.L_Original"]: CFrameValue;
				["claw.R_Composited"]: CFrameValue;
				["claw.R_Initial"]: CFrameValue;
				["claw.R_Original"]: CFrameValue;
				["leg.L.01_Composited"]: CFrameValue;
				["leg.L.01_Initial"]: CFrameValue;
				["leg.L.01_Original"]: CFrameValue;
				["leg.L.02_Composited"]: CFrameValue;
				["leg.L.02_Initial"]: CFrameValue;
				["leg.L.02_Original"]: CFrameValue;
				["leg.L.03_Composited"]: CFrameValue;
				["leg.L.03_Initial"]: CFrameValue;
				["leg.L.03_Original"]: CFrameValue;
				["leg.R.01_Composited"]: CFrameValue;
				["leg.R.01_Initial"]: CFrameValue;
				["leg.R.01_Original"]: CFrameValue;
				["leg.R.02_Composited"]: CFrameValue;
				["leg.R.02_Initial"]: CFrameValue;
				["leg.R.02_Original"]: CFrameValue;
				["leg.R.03_Composited"]: CFrameValue;
				["leg.R.03_Initial"]: CFrameValue;
				["leg.R.03_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				root_Initial: CFrameValue;
				root_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				wrist_Composited: CFrameValue;
				wrist_Initial: CFrameValue;
				wrist_Original: CFrameValue;
			} & Folder;
		} & Model;
		Lynx: {
			HumanoidRootPart: {
				root: {
					body: {
						["ear.L"]: Bone;
						["ear.R"]: Bone;
						["leg.B.L"]: Bone;
						["leg.B.R"]: Bone;
						["leg.F.L"]: Bone;
						["leg.F.R"]: Bone;
						["tail.01"]: {
							["tail.02"]: Bone;
						} & Bone;
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
				["ear.L_Composited"]: CFrameValue;
				["ear.L_Initial"]: CFrameValue;
				["ear.L_Original"]: CFrameValue;
				["ear.R_Composited"]: CFrameValue;
				["ear.R_Initial"]: CFrameValue;
				["ear.R_Original"]: CFrameValue;
				["leg.B.L_Composited"]: CFrameValue;
				["leg.B.L_Initial"]: CFrameValue;
				["leg.B.L_Original"]: CFrameValue;
				["leg.B.R_Composited"]: CFrameValue;
				["leg.B.R_Initial"]: CFrameValue;
				["leg.B.R_Original"]: CFrameValue;
				["leg.F.L_Composited"]: CFrameValue;
				["leg.F.L_Initial"]: CFrameValue;
				["leg.F.L_Original"]: CFrameValue;
				["leg.F.R_Composited"]: CFrameValue;
				["leg.F.R_Initial"]: CFrameValue;
				["leg.F.R_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				root_Initial: CFrameValue;
				root_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				["tail.02_Composited"]: CFrameValue;
				["tail.02_Initial"]: CFrameValue;
				["tail.02_Original"]: CFrameValue;
			} & Folder;
		} & Model;
		Macaw: {
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
		Mallard: {
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
		Manatee: {
			HumanoidRootPart: {
				root: {
					body: {
						["leg.L"]: Bone;
						["leg.R"]: Bone;
						["tail.01"]: Bone;
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
				["leg.L_Composited"]: CFrameValue;
				["leg.L_Initial"]: CFrameValue;
				["leg.L_Original"]: CFrameValue;
				["leg.R_Composited"]: CFrameValue;
				["leg.R_Initial"]: CFrameValue;
				["leg.R_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				root_Initial: CFrameValue;
				root_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["tail.01_Original"]: CFrameValue;
			} & Folder;
		} & Model;
		Marten: {
			HumanoidRootPart: {
				root: {
					body: {
						["ear.R"]: Bone;
						["leg.B.L"]: Bone;
						["leg.B.R"]: Bone;
						["leg.F.L"]: Bone;
						["leg.F.R"]: Bone;
						["tail.01"]: {
							["tail.02"]: Bone;
						} & Bone;
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
				["ear.L_Composited"]: CFrameValue;
				["ear.L_Initial"]: CFrameValue;
				["ear.L_Original"]: CFrameValue;
				["ear.R_Composited"]: CFrameValue;
				["ear.R_Initial"]: CFrameValue;
				["ear.R_Original"]: CFrameValue;
				["leg.B.L_Composited"]: CFrameValue;
				["leg.B.L_Initial"]: CFrameValue;
				["leg.B.L_Original"]: CFrameValue;
				["leg.B.R_Composited"]: CFrameValue;
				["leg.B.R_Initial"]: CFrameValue;
				["leg.B.R_Original"]: CFrameValue;
				["leg.F.L_Composited"]: CFrameValue;
				["leg.F.L_Initial"]: CFrameValue;
				["leg.F.L_Original"]: CFrameValue;
				["leg.F.R_Composited"]: CFrameValue;
				["leg.F.R_Initial"]: CFrameValue;
				["leg.F.R_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				root_Initial: CFrameValue;
				root_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				["tail.02_Composited"]: CFrameValue;
				["tail.02_Initial"]: CFrameValue;
				["tail.02_Original"]: CFrameValue;
			} & Folder;
		} & Model;
		Meerkat: {
			HumanoidRootPart: {
				root: {
					body: {
						["ear.L"]: Bone;
						["ear.R"]: Bone;
						["leg.B.L"]: Bone;
						["leg.B.R"]: Bone;
						["leg.F.L"]: Bone;
						["leg.F.R"]: Bone;
						["tail.01"]: {
							["tail.02"]: Bone;
						} & Bone;
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
				["ear.L_Composited"]: CFrameValue;
				["ear.L_Initial"]: CFrameValue;
				["ear.L_Original"]: CFrameValue;
				["ear.R_Composited"]: CFrameValue;
				["ear.R_Initial"]: CFrameValue;
				["ear.R_Original"]: CFrameValue;
				["leg.B.L_Composited"]: CFrameValue;
				["leg.B.L_Initial"]: CFrameValue;
				["leg.B.L_Original"]: CFrameValue;
				["leg.B.R_Composited"]: CFrameValue;
				["leg.B.R_Initial"]: CFrameValue;
				["leg.B.R_Original"]: CFrameValue;
				["leg.F.L_Composited"]: CFrameValue;
				["leg.F.L_Initial"]: CFrameValue;
				["leg.F.L_Original"]: CFrameValue;
				["leg.F.R_Composited"]: CFrameValue;
				["leg.F.R_Initial"]: CFrameValue;
				["leg.F.R_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				root_Initial: CFrameValue;
				root_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				["tail.02_Composited"]: CFrameValue;
				["tail.02_Initial"]: CFrameValue;
				["tail.02_Original"]: CFrameValue;
			} & Folder;
		} & Model;
		Mole: {
			HumanoidRootPart: {
				root: {
					body: {
						["ear.L"]: Bone;
						["ear.R"]: Bone;
						["leg.B.L"]: Bone;
						["leg.B.R"]: Bone;
						["leg.F.L"]: Bone;
						["leg.F.R"]: Bone;
						["tail.01"]: {
							["tail.02"]: Bone;
						} & Bone;
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
				["ear.L_Composited"]: CFrameValue;
				["ear.L_Initial"]: CFrameValue;
				["ear.L_Original"]: CFrameValue;
				["ear.R_Composited"]: CFrameValue;
				["ear.R_Initial"]: CFrameValue;
				["ear.R_Original"]: CFrameValue;
				["leg.B.L_Composited"]: CFrameValue;
				["leg.B.L_Initial"]: CFrameValue;
				["leg.B.L_Original"]: CFrameValue;
				["leg.B.R_Composited"]: CFrameValue;
				["leg.B.R_Initial"]: CFrameValue;
				["leg.B.R_Original"]: CFrameValue;
				["leg.F.L_Composited"]: CFrameValue;
				["leg.F.L_Initial"]: CFrameValue;
				["leg.F.L_Original"]: CFrameValue;
				["leg.F.R_Composited"]: CFrameValue;
				["leg.F.R_Initial"]: CFrameValue;
				["leg.F.R_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				root_Initial: CFrameValue;
				root_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				["tail.02_Composited"]: CFrameValue;
				["tail.02_Initial"]: CFrameValue;
				["tail.02_Original"]: CFrameValue;
			} & Folder;
		} & Model;
		MonitorLizard: {
			HumanoidRootPart: {
				root: {
					body: {
						["leg.B.L"]: Bone;
						["leg.B.R"]: Bone;
						["leg.F.L"]: Bone;
						["leg.F.R"]: Bone;
						["tail.01"]: {
							["tail.02"]: Bone;
						} & Bone;
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
				["leg.B.L_Composited"]: CFrameValue;
				["leg.B.L_Initial"]: CFrameValue;
				["leg.B.L_Original"]: CFrameValue;
				["leg.B.R_Composited"]: CFrameValue;
				["leg.B.R_Initial"]: CFrameValue;
				["leg.B.R_Original"]: CFrameValue;
				["leg.F.L_Composited"]: CFrameValue;
				["leg.F.L_Initial"]: CFrameValue;
				["leg.F.L_Original"]: CFrameValue;
				["leg.F.R_Composited"]: CFrameValue;
				["leg.F.R_Initial"]: CFrameValue;
				["leg.F.R_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				root_Initial: CFrameValue;
				root_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				["tail.02_Composited"]: CFrameValue;
				["tail.02_Initial"]: CFrameValue;
				["tail.02_Original"]: CFrameValue;
			} & Folder;
		} & Model;
		Monkey: {
			HumanoidRootPart: {
				root: {
					body: {
						["ear.L"]: Bone;
						["ear.R"]: Bone;
						["leg.B.L"]: Bone;
						["leg.B.R"]: Bone;
						["leg.F.L"]: Bone;
						["leg.F.R"]: Bone;
						["tail.01"]: {
							["tail.02"]: Bone;
						} & Bone;
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
				["ear.L_Composited"]: CFrameValue;
				["ear.L_Initial"]: CFrameValue;
				["ear.L_Original"]: CFrameValue;
				["ear.R_Composited"]: CFrameValue;
				["ear.R_Initial"]: CFrameValue;
				["ear.R_Original"]: CFrameValue;
				["leg.B.L_Composited"]: CFrameValue;
				["leg.B.L_Initial"]: CFrameValue;
				["leg.B.L_Original"]: CFrameValue;
				["leg.B.R_Composited"]: CFrameValue;
				["leg.B.R_Initial"]: CFrameValue;
				["leg.B.R_Original"]: CFrameValue;
				["leg.F.L_Composited"]: CFrameValue;
				["leg.F.L_Initial"]: CFrameValue;
				["leg.F.L_Original"]: CFrameValue;
				["leg.F.R_Composited"]: CFrameValue;
				["leg.F.R_Initial"]: CFrameValue;
				["leg.F.R_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				root_Initial: CFrameValue;
				root_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				["tail.02_Composited"]: CFrameValue;
				["tail.02_Initial"]: CFrameValue;
				["tail.02_Original"]: CFrameValue;
			} & Folder;
		} & Model;
		Moose: {
			HumanoidRootPart: {
				root: {
					body: {
						["ear.L"]: Bone;
						["ear.R"]: Bone;
						["leg.B.L"]: Bone;
						["leg.B.R"]: Bone;
						["leg.F.L"]: Bone;
						["leg.F.R"]: Bone;
						["tail.01"]: Bone;
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
				["ear.L_Composited"]: CFrameValue;
				["ear.L_Initial"]: CFrameValue;
				["ear.L_Original"]: CFrameValue;
				["ear.R_Composited"]: CFrameValue;
				["ear.R_Initial"]: CFrameValue;
				["ear.R_Original"]: CFrameValue;
				["leg.B.L_Composited"]: CFrameValue;
				["leg.B.L_Initial"]: CFrameValue;
				["leg.B.L_Original"]: CFrameValue;
				["leg.B.R_Composited"]: CFrameValue;
				["leg.B.R_Initial"]: CFrameValue;
				["leg.B.R_Original"]: CFrameValue;
				["leg.F.L_Composited"]: CFrameValue;
				["leg.F.L_Initial"]: CFrameValue;
				["leg.F.L_Original"]: CFrameValue;
				["leg.F.R_Composited"]: CFrameValue;
				["leg.F.R_Initial"]: CFrameValue;
				["leg.F.R_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				root_Initial: CFrameValue;
				root_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["tail.01_Original"]: CFrameValue;
			} & Folder;
		} & Model;
		Mouse: {
			HumanoidRootPart: {
				root: {
					body: {
						["ear.L"]: Bone;
						["ear.R"]: Bone;
						["leg.B.L"]: Bone;
						["leg.B.R"]: Bone;
						["leg.F.L"]: Bone;
						["leg.F.R"]: Bone;
						["tail.01"]: {
							["tail.02"]: Bone;
						} & Bone;
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
				["ear.L_Composited"]: CFrameValue;
				["ear.L_Initial"]: CFrameValue;
				["ear.L_Original"]: CFrameValue;
				["ear.R_Composited"]: CFrameValue;
				["ear.R_Initial"]: CFrameValue;
				["ear.R_Original"]: CFrameValue;
				["leg.B.L_Composited"]: CFrameValue;
				["leg.B.L_Initial"]: CFrameValue;
				["leg.B.L_Original"]: CFrameValue;
				["leg.B.R_Composited"]: CFrameValue;
				["leg.B.R_Initial"]: CFrameValue;
				["leg.B.R_Original"]: CFrameValue;
				["leg.F.L_Composited"]: CFrameValue;
				["leg.F.L_Initial"]: CFrameValue;
				["leg.F.L_Original"]: CFrameValue;
				["leg.F.R_Composited"]: CFrameValue;
				["leg.F.R_Initial"]: CFrameValue;
				["leg.F.R_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				root_Initial: CFrameValue;
				root_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				["tail.02_Composited"]: CFrameValue;
				["tail.02_Initial"]: CFrameValue;
				["tail.02_Original"]: CFrameValue;
			} & Folder;
		} & Model;
		Mousedeer: {
			HumanoidRootPart: {
				body: {
					["ear.L"]: Bone;
					["ear.R"]: Bone;
					["leg.B.L"]: Bone;
					["leg.B.R"]: Bone;
					["leg.F.L"]: Bone;
					["leg.F.R"]: Bone;
					["tail.01"]: Bone;
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
				["ear.L_Composited"]: CFrameValue;
				["ear.L_Initial"]: CFrameValue;
				["ear.L_Original"]: CFrameValue;
				["ear.R_Composited"]: CFrameValue;
				["ear.R_Initial"]: CFrameValue;
				["ear.R_Original"]: CFrameValue;
				["leg.B.L_Composited"]: CFrameValue;
				["leg.B.L_Initial"]: CFrameValue;
				["leg.B.L_Original"]: CFrameValue;
				["leg.B.R_Composited"]: CFrameValue;
				["leg.B.R_Initial"]: CFrameValue;
				["leg.B.R_Original"]: CFrameValue;
				["leg.F.L_Composited"]: CFrameValue;
				["leg.F.L_Initial"]: CFrameValue;
				["leg.F.L_Original"]: CFrameValue;
				["leg.F.R_Composited"]: CFrameValue;
				["leg.F.R_Initial"]: CFrameValue;
				["leg.F.R_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				root_Initial: CFrameValue;
				root_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["tail.01_Original"]: CFrameValue;
			} & Folder;
		} & Model;
		Mudskipper: {
			HumanoidRootPart: {
				root: {
					body: {
						["fin.01"]: Bone;
						["fin.02"]: Bone;
						["fin.03"]: Bone;
						["fin.L"]: Bone;
						["fin.R"]: Bone;
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
				["fin.01_Composited"]: CFrameValue;
				["fin.01_Initial"]: CFrameValue;
				["fin.01_Original"]: CFrameValue;
				["fin.02_Composited"]: CFrameValue;
				["fin.02_Initial"]: CFrameValue;
				["fin.02_Original"]: CFrameValue;
				["fin.03_Composited"]: CFrameValue;
				["fin.03_Initial"]: CFrameValue;
				["fin.03_Original"]: CFrameValue;
				["fin.L_Composited"]: CFrameValue;
				["fin.L_Initial"]: CFrameValue;
				["fin.L_Original"]: CFrameValue;
				["fin.R_Composited"]: CFrameValue;
				["fin.R_Initial"]: CFrameValue;
				["fin.R_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				root_Initial: CFrameValue;
				root_Original: CFrameValue;
			} & Folder;
		} & Model;
		Muskrat: {
			HumanoidRootPart: {
				root: {
					body: {
						["ear.L"]: Bone;
						["ear.R"]: Bone;
						["leg.B.L"]: Bone;
						["leg.B.R"]: Bone;
						["leg.F.L"]: Bone;
						["leg.F.R"]: Bone;
						["tail.01"]: {
							["tail.02"]: Bone;
						} & Bone;
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
				["ear.L_Composited"]: CFrameValue;
				["ear.L_Initial"]: CFrameValue;
				["ear.L_Original"]: CFrameValue;
				["ear.R_Composited"]: CFrameValue;
				["ear.R_Initial"]: CFrameValue;
				["ear.R_Original"]: CFrameValue;
				["leg.B.L_Composited"]: CFrameValue;
				["leg.B.L_Initial"]: CFrameValue;
				["leg.B.L_Original"]: CFrameValue;
				["leg.B.R_Composited"]: CFrameValue;
				["leg.B.R_Initial"]: CFrameValue;
				["leg.B.R_Original"]: CFrameValue;
				["leg.F.L_Composited"]: CFrameValue;
				["leg.F.L_Initial"]: CFrameValue;
				["leg.F.L_Original"]: CFrameValue;
				["leg.F.R_Composited"]: CFrameValue;
				["leg.F.R_Initial"]: CFrameValue;
				["leg.F.R_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				root_Initial: CFrameValue;
				root_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				["tail.02_Composited"]: CFrameValue;
				["tail.02_Initial"]: CFrameValue;
				["tail.02_Original"]: CFrameValue;
			} & Folder;
		} & Model;
		Narwhal: {
			HumanoidRootPart: {
				root: {
					body: {
						["fin.L"]: Bone;
						["fin.R"]: Bone;
						["tail.01"]: {
							["tail.02"]: Bone;
						} & Bone;
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
				["fin.L_Composited"]: CFrameValue;
				["fin.L_Initial"]: CFrameValue;
				["fin.L_Original"]: CFrameValue;
				["fin.R_Composited"]: CFrameValue;
				["fin.R_Initial"]: CFrameValue;
				["fin.R_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				root_Initial: CFrameValue;
				root_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				["tail.02_Composited"]: CFrameValue;
				["tail.02_Initial"]: CFrameValue;
				["tail.02_Original"]: CFrameValue;
			} & Folder;
		} & Model;
		Numbat: {
			HumanoidRootPart: {
				root: {
					body: {
						["ear.L"]: Bone;
						["ear.R"]: Bone;
						["leg.B.L"]: Bone;
						["leg.B.R"]: Bone;
						["leg.F.L"]: Bone;
						["leg.F.R"]: Bone;
						["tail.01"]: {
							["tail.02"]: Bone;
						} & Bone;
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
				["ear.L_Composited"]: CFrameValue;
				["ear.L_Initial"]: CFrameValue;
				["ear.L_Original"]: CFrameValue;
				["ear.R_Composited"]: CFrameValue;
				["ear.R_Initial"]: CFrameValue;
				["ear.R_Original"]: CFrameValue;
				["leg.B.L_Composited"]: CFrameValue;
				["leg.B.L_Initial"]: CFrameValue;
				["leg.B.L_Original"]: CFrameValue;
				["leg.B.R_Composited"]: CFrameValue;
				["leg.B.R_Initial"]: CFrameValue;
				["leg.B.R_Original"]: CFrameValue;
				["leg.F.L_Composited"]: CFrameValue;
				["leg.F.L_Initial"]: CFrameValue;
				["leg.F.L_Original"]: CFrameValue;
				["leg.F.R_Composited"]: CFrameValue;
				["leg.F.R_Initial"]: CFrameValue;
				["leg.F.R_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				root_Initial: CFrameValue;
				root_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				["tail.02_Composited"]: CFrameValue;
				["tail.02_Initial"]: CFrameValue;
				["tail.02_Original"]: CFrameValue;
			} & Folder;
		} & Model;
		Octopus: {
			HumanoidRootPart: {
				root: {
					body: {
						["tentacle.L.01"]: {
							["tentacle.L.05"]: Bone;
						} & Bone;
						["tentacle.L.02"]: {
							["tentacle.L.06"]: Bone;
						} & Bone;
						["tentacle.L.03"]: {
							["tentacle.L.07"]: Bone;
						} & Bone;
						["tentacle.L.04"]: {
							["tentacle.L.08"]: Bone;
						} & Bone;
						["tentacle.R.01"]: {
							["tentacle.R.05"]: Bone;
						} & Bone;
						["tentacle.R.02"]: {
							["tentacle.R.06"]: Bone;
						} & Bone;
						["tentacle.R.03"]: {
							["tentacle.R.07"]: Bone;
						} & Bone;
						["tentacle.R.04"]: {
							["tentacle.R.08"]: Bone;
						} & Bone;
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
				root_Composited: CFrameValue;
				root_Initial: CFrameValue;
				root_Original: CFrameValue;
				["tentacle.L.01_Composited"]: CFrameValue;
				["tentacle.L.01_Initial"]: CFrameValue;
				["tentacle.L.01_Original"]: CFrameValue;
				["tentacle.L.02_Composited"]: CFrameValue;
				["tentacle.L.02_Initial"]: CFrameValue;
				["tentacle.L.02_Original"]: CFrameValue;
				["tentacle.L.03_Composited"]: CFrameValue;
				["tentacle.L.03_Initial"]: CFrameValue;
				["tentacle.L.03_Original"]: CFrameValue;
				["tentacle.L.04_Composited"]: CFrameValue;
				["tentacle.L.04_Initial"]: CFrameValue;
				["tentacle.L.04_Original"]: CFrameValue;
				["tentacle.L.05_Composited"]: CFrameValue;
				["tentacle.L.05_Initial"]: CFrameValue;
				["tentacle.L.05_Original"]: CFrameValue;
				["tentacle.L.06_Composited"]: CFrameValue;
				["tentacle.L.06_Initial"]: CFrameValue;
				["tentacle.L.06_Original"]: CFrameValue;
				["tentacle.L.07_Composited"]: CFrameValue;
				["tentacle.L.07_Initial"]: CFrameValue;
				["tentacle.L.07_Original"]: CFrameValue;
				["tentacle.L.08_Composited"]: CFrameValue;
				["tentacle.L.08_Initial"]: CFrameValue;
				["tentacle.L.08_Original"]: CFrameValue;
				["tentacle.R.01_Composited"]: CFrameValue;
				["tentacle.R.01_Initial"]: CFrameValue;
				["tentacle.R.01_Original"]: CFrameValue;
				["tentacle.R.02_Composited"]: CFrameValue;
				["tentacle.R.02_Initial"]: CFrameValue;
				["tentacle.R.02_Original"]: CFrameValue;
				["tentacle.R.03_Composited"]: CFrameValue;
				["tentacle.R.03_Initial"]: CFrameValue;
				["tentacle.R.03_Original"]: CFrameValue;
				["tentacle.R.04_Composited"]: CFrameValue;
				["tentacle.R.04_Initial"]: CFrameValue;
				["tentacle.R.04_Original"]: CFrameValue;
				["tentacle.R.05_Composited"]: CFrameValue;
				["tentacle.R.05_Initial"]: CFrameValue;
				["tentacle.R.05_Original"]: CFrameValue;
				["tentacle.R.06_Composited"]: CFrameValue;
				["tentacle.R.06_Initial"]: CFrameValue;
				["tentacle.R.06_Original"]: CFrameValue;
				["tentacle.R.07_Composited"]: CFrameValue;
				["tentacle.R.07_Initial"]: CFrameValue;
				["tentacle.R.07_Original"]: CFrameValue;
				["tentacle.R.08_Composited"]: CFrameValue;
				["tentacle.R.08_Initial"]: CFrameValue;
				["tentacle.R.08_Original"]: CFrameValue;
			} & Folder;
		} & Model;
		OrangUtan: {
			HumanoidRootPart: {
				body: {
					["ear.L"]: Bone;
					["ear.R"]: Bone;
					["leg.B.L"]: Bone;
					["leg.B.R"]: Bone;
					["leg.F.L"]: Bone;
					["leg.F.R"]: Bone;
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
				["ear.L_Composited"]: CFrameValue;
				["ear.L_Initial"]: CFrameValue;
				["ear.L_Original"]: CFrameValue;
				["ear.R_Composited"]: CFrameValue;
				["ear.R_Initial"]: CFrameValue;
				["ear.R_Original"]: CFrameValue;
				["leg.B.L_Composited"]: CFrameValue;
				["leg.B.L_Initial"]: CFrameValue;
				["leg.B.L_Original"]: CFrameValue;
				["leg.B.R_Composited"]: CFrameValue;
				["leg.B.R_Initial"]: CFrameValue;
				["leg.B.R_Original"]: CFrameValue;
				["leg.F.L_Composited"]: CFrameValue;
				["leg.F.L_Initial"]: CFrameValue;
				["leg.F.L_Original"]: CFrameValue;
				["leg.F.R_Composited"]: CFrameValue;
				["leg.F.R_Initial"]: CFrameValue;
				["leg.F.R_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				root_Initial: CFrameValue;
				root_Original: CFrameValue;
			} & Folder;
		} & Model;
		Orca: {
			HumanoidRootPart: {
				root: {
					body: {
						["fin.01"]: Bone;
						["fin.L"]: Bone;
						["fin.R"]: Bone;
						["tail.01"]: {
							["tail.02"]: Bone;
						} & Bone;
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
				["fin.01_Composited"]: CFrameValue;
				["fin.01_Initial"]: CFrameValue;
				["fin.01_Original"]: CFrameValue;
				["fin.L_Composited"]: CFrameValue;
				["fin.L_Initial"]: CFrameValue;
				["fin.L_Original"]: CFrameValue;
				["fin.R_Composited"]: CFrameValue;
				["fin.R_Initial"]: CFrameValue;
				["fin.R_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				root_Initial: CFrameValue;
				root_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				["tail.02_Composited"]: CFrameValue;
				["tail.02_Initial"]: CFrameValue;
				["tail.02_Original"]: CFrameValue;
			} & Folder;
		} & Model;
		Ostrich: {
			HumanoidRootPart: {
				root: {
					body: {
						["feet.L"]: Bone;
						["feet.R"]: Bone;
						["hair.01"]: Bone;
						["hair.02"]: Bone;
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
		Otter: {
			HumanoidRootPart: {
				body: {
					["ear.L"]: Bone;
					["ear.R"]: Bone;
					["leg.B.L"]: Bone;
					["leg.B.R"]: Bone;
					["leg.F.L"]: Bone;
					["leg.F.R"]: Bone;
					["tail.01"]: {
						["tail.02"]: Bone;
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
				["ear.L_Composited"]: CFrameValue;
				["ear.L_Initial"]: CFrameValue;
				["ear.L_Original"]: CFrameValue;
				["ear.R_Composited"]: CFrameValue;
				["ear.R_Initial"]: CFrameValue;
				["ear.R_Original"]: CFrameValue;
				["leg.B.L_Composited"]: CFrameValue;
				["leg.B.L_Initial"]: CFrameValue;
				["leg.B.L_Original"]: CFrameValue;
				["leg.B.R_Composited"]: CFrameValue;
				["leg.B.R_Initial"]: CFrameValue;
				["leg.B.R_Original"]: CFrameValue;
				["leg.F.L_Composited"]: CFrameValue;
				["leg.F.L_Initial"]: CFrameValue;
				["leg.F.L_Original"]: CFrameValue;
				["leg.F.R_Composited"]: CFrameValue;
				["leg.F.R_Initial"]: CFrameValue;
				["leg.F.R_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				root_Initial: CFrameValue;
				root_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				["tail.02_Composited"]: CFrameValue;
				["tail.02_Initial"]: CFrameValue;
				["tail.02_Original"]: CFrameValue;
			} & Folder;
		} & Model;
		Owl: {
			HumanoidRootPart: {
				root: {
					body: {
						["feet.L"]: Bone;
						["feet.R"]: Bone;
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
		Ox: {
			HumanoidRootPart: {
				root: {
					body: {
						["ear.L"]: Bone;
						["ear.R"]: Bone;
						["leg.B.L"]: Bone;
						["leg.B.R"]: Bone;
						["leg.F.L"]: Bone;
						["leg.F.R"]: Bone;
						["tail.01"]: {
							["tail.02"]: Bone;
						} & Bone;
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
				["ear.L_Composited"]: CFrameValue;
				["ear.L_Initial"]: CFrameValue;
				["ear.L_Original"]: CFrameValue;
				["ear.R_Composited"]: CFrameValue;
				["ear.R_Initial"]: CFrameValue;
				["ear.R_Original"]: CFrameValue;
				["leg.B.L_Composited"]: CFrameValue;
				["leg.B.L_Initial"]: CFrameValue;
				["leg.B.L_Original"]: CFrameValue;
				["leg.B.R_Composited"]: CFrameValue;
				["leg.B.R_Initial"]: CFrameValue;
				["leg.B.R_Original"]: CFrameValue;
				["leg.F.L_Composited"]: CFrameValue;
				["leg.F.L_Initial"]: CFrameValue;
				["leg.F.L_Original"]: CFrameValue;
				["leg.F.R_Composited"]: CFrameValue;
				["leg.F.R_Initial"]: CFrameValue;
				["leg.F.R_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				root_Initial: CFrameValue;
				root_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				["tail.02_Composited"]: CFrameValue;
				["tail.02_Initial"]: CFrameValue;
				["tail.02_Original"]: CFrameValue;
			} & Folder;
		} & Model;
		Panda: {
			HumanoidRootPart: {
				root: {
					body: {
						["ear.L"]: Bone;
						["ear.R"]: Bone;
						["leg.B.L"]: Bone;
						["leg.B.R"]: Bone;
						["leg.F.L"]: Bone;
						["leg.F.R"]: Bone;
						["tail.01"]: Bone;
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
				["ear.L_Composited"]: CFrameValue;
				["ear.L_Initial"]: CFrameValue;
				["ear.L_Original"]: CFrameValue;
				["ear.R_Composited"]: CFrameValue;
				["ear.R_Initial"]: CFrameValue;
				["ear.R_Original"]: CFrameValue;
				["leg.B.L_Composited"]: CFrameValue;
				["leg.B.L_Initial"]: CFrameValue;
				["leg.B.L_Original"]: CFrameValue;
				["leg.B.R_Composited"]: CFrameValue;
				["leg.B.R_Initial"]: CFrameValue;
				["leg.B.R_Original"]: CFrameValue;
				["leg.F.L_Composited"]: CFrameValue;
				["leg.F.L_Initial"]: CFrameValue;
				["leg.F.L_Original"]: CFrameValue;
				["leg.F.R_Composited"]: CFrameValue;
				["leg.F.R_Initial"]: CFrameValue;
				["leg.F.R_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				root_Initial: CFrameValue;
				root_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["tail.01_Original"]: CFrameValue;
			} & Folder;
		} & Model;
		Parrot: {
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
		Peacock: {
			HumanoidRootPart: {
				root: {
					body: {
						["feet.L"]: Bone;
						["feet.R"]: Bone;
						["hair.01"]: Bone;
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
		Pegasus: {
			HumanoidRootPart: {
				root: {
					body: {
						["ear.L"]: Bone;
						["ear.R"]: Bone;
						["leg.B.L"]: Bone;
						["leg.B.R"]: Bone;
						["leg.F.L"]: Bone;
						["leg.F.R"]: Bone;
						["tail.01"]: {
							["tail.02"]: Bone;
						} & Bone;
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
				["ear.L_Composited"]: CFrameValue;
				["ear.L_Initial"]: CFrameValue;
				["ear.L_Original"]: CFrameValue;
				["ear.R_Composited"]: CFrameValue;
				["ear.R_Initial"]: CFrameValue;
				["ear.R_Original"]: CFrameValue;
				["leg.B.L_Composited"]: CFrameValue;
				["leg.B.L_Initial"]: CFrameValue;
				["leg.B.L_Original"]: CFrameValue;
				["leg.B.R_Composited"]: CFrameValue;
				["leg.B.R_Initial"]: CFrameValue;
				["leg.B.R_Original"]: CFrameValue;
				["leg.F.L_Composited"]: CFrameValue;
				["leg.F.L_Initial"]: CFrameValue;
				["leg.F.L_Original"]: CFrameValue;
				["leg.F.R_Composited"]: CFrameValue;
				["leg.F.R_Initial"]: CFrameValue;
				["leg.F.R_Original"]: CFrameValue;
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
		Pelican: {
			HumanoidRootPart: {
				root: {
					body: {
						["feet.L"]: Bone;
						["feet.R"]: Bone;
						["tail.01"]: Bone;
						["tail.02"]: Bone;
						["tail.03"]: Bone;
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
				root_Composited: CFrameValue;
				root_Initial: CFrameValue;
				root_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				["tail.02_Composited"]: CFrameValue;
				["tail.02_Initial"]: CFrameValue;
				["tail.02_Original"]: CFrameValue;
				["tail.03_Composited"]: CFrameValue;
				["tail.03_Initial"]: CFrameValue;
				["tail.03_Original"]: CFrameValue;
				["wing.L_Composited"]: CFrameValue;
				["wing.L_Initial"]: CFrameValue;
				["wing.L_Original"]: CFrameValue;
				["wing.R_Composited"]: CFrameValue;
				["wing.R_Initial"]: CFrameValue;
				["wing.R_Original"]: CFrameValue;
			} & Folder;
		} & Model;
		Penguin: {
			HumanoidRootPart: {
				root: {
					body: {
						["feet.L"]: Bone;
						["feet.R"]: Bone;
						["hair.01"]: Bone;
						["tail.01"]: Bone;
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
				root_Composited: CFrameValue;
				root_Initial: CFrameValue;
				root_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				["wing.L_Composited"]: CFrameValue;
				["wing.L_Initial"]: CFrameValue;
				["wing.L_Original"]: CFrameValue;
				["wing.R_Composited"]: CFrameValue;
				["wing.R_Initial"]: CFrameValue;
				["wing.R_Original"]: CFrameValue;
			} & Folder;
		} & Model;
		Phoenix: {
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
		Pig: {
			HumanoidRootPart: {
				root: {
					body: {
						["ear.L"]: Bone;
						["ear.R"]: Bone;
						["leg.B.L"]: Bone;
						["leg.B.R"]: Bone;
						["leg.F.L"]: Bone;
						["leg.F.R"]: Bone;
						["tail.01"]: Bone;
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
				["ear.L_Composited"]: CFrameValue;
				["ear.L_Initial"]: CFrameValue;
				["ear.L_Original"]: CFrameValue;
				["ear.R_Composited"]: CFrameValue;
				["ear.R_Initial"]: CFrameValue;
				["ear.R_Original"]: CFrameValue;
				["leg.B.L_Composited"]: CFrameValue;
				["leg.B.L_Initial"]: CFrameValue;
				["leg.B.L_Original"]: CFrameValue;
				["leg.B.R_Composited"]: CFrameValue;
				["leg.B.R_Initial"]: CFrameValue;
				["leg.B.R_Original"]: CFrameValue;
				["leg.F.L_Composited"]: CFrameValue;
				["leg.F.L_Initial"]: CFrameValue;
				["leg.F.L_Original"]: CFrameValue;
				["leg.F.R_Composited"]: CFrameValue;
				["leg.F.R_Initial"]: CFrameValue;
				["leg.F.R_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				root_Initial: CFrameValue;
				root_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["tail.01_Original"]: CFrameValue;
			} & Folder;
		} & Model;
		Pigeon: {
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
		Piranha: {
			HumanoidRootPart: {
				root: {
					body: {
						["fin.01"]: Bone;
						["fin.02"]: Bone;
						["fin.L"]: Bone;
						["fin.R"]: Bone;
						["tail.01"]: Bone;
						["tail.02"]: Bone;
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
				["fin.01_Composited"]: CFrameValue;
				["fin.01_Initial"]: CFrameValue;
				["fin.01_Original"]: CFrameValue;
				["fin.02_Composited"]: CFrameValue;
				["fin.02_Initial"]: CFrameValue;
				["fin.02_Original"]: CFrameValue;
				["fin.L_Composited"]: CFrameValue;
				["fin.L_Initial"]: CFrameValue;
				["fin.L_Original"]: CFrameValue;
				["fin.R_Composited"]: CFrameValue;
				["fin.R_Initial"]: CFrameValue;
				["fin.R_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				root_Initial: CFrameValue;
				root_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				["tail.02_Composited"]: CFrameValue;
				["tail.02_Initial"]: CFrameValue;
				["tail.02_Original"]: CFrameValue;
			} & Folder;
		} & Model;
		Platypus: {
			HumanoidRootPart: {
				root: {
					body: {
						["leg.B.L"]: Bone;
						["leg.B.R"]: Bone;
						["leg.F.L"]: Bone;
						["leg.F.R"]: Bone;
						["tail.01"]: {
							["tail.02"]: Bone;
						} & Bone;
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
				["leg.B.L_Composited"]: CFrameValue;
				["leg.B.L_Initial"]: CFrameValue;
				["leg.B.L_Original"]: CFrameValue;
				["leg.B.R_Composited"]: CFrameValue;
				["leg.B.R_Initial"]: CFrameValue;
				["leg.B.R_Original"]: CFrameValue;
				["leg.F.L_Composited"]: CFrameValue;
				["leg.F.L_Initial"]: CFrameValue;
				["leg.F.L_Original"]: CFrameValue;
				["leg.F.R_Composited"]: CFrameValue;
				["leg.F.R_Initial"]: CFrameValue;
				["leg.F.R_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				root_Initial: CFrameValue;
				root_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				["tail.02_Composited"]: CFrameValue;
				["tail.02_Initial"]: CFrameValue;
				["tail.02_Original"]: CFrameValue;
			} & Folder;
		} & Model;
		PolarBear: {
			HumanoidRootPart: {
				root: {
					body: {
						["ear.L"]: Bone;
						["ear.R"]: Bone;
						["leg.B.L"]: Bone;
						["leg.B.R"]: Bone;
						["leg.F.L"]: Bone;
						["leg.F.R"]: Bone;
						["tail.01"]: Bone;
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
				["ear.L_Composited"]: CFrameValue;
				["ear.L_Initial"]: CFrameValue;
				["ear.L_Original"]: CFrameValue;
				["ear.R_Composited"]: CFrameValue;
				["ear.R_Initial"]: CFrameValue;
				["ear.R_Original"]: CFrameValue;
				["leg.B.L_Composited"]: CFrameValue;
				["leg.B.L_Initial"]: CFrameValue;
				["leg.B.L_Original"]: CFrameValue;
				["leg.B.R_Composited"]: CFrameValue;
				["leg.B.R_Initial"]: CFrameValue;
				["leg.B.R_Original"]: CFrameValue;
				["leg.F.L_Composited"]: CFrameValue;
				["leg.F.L_Initial"]: CFrameValue;
				["leg.F.L_Original"]: CFrameValue;
				["leg.F.R_Composited"]: CFrameValue;
				["leg.F.R_Initial"]: CFrameValue;
				["leg.F.R_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				root_Initial: CFrameValue;
				root_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["tail.01_Original"]: CFrameValue;
			} & Folder;
		} & Model;
		Porcupine: {
			HumanoidRootPart: {
				root: {
					body: {
						["ear.L"]: Bone;
						["ear.R"]: Bone;
						["leg.B.L"]: Bone;
						["leg.B.R"]: Bone;
						["leg.F.L"]: Bone;
						["leg.F.R"]: Bone;
						["tail.01"]: Bone;
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
				["ear.L_Composited"]: CFrameValue;
				["ear.L_Initial"]: CFrameValue;
				["ear.L_Original"]: CFrameValue;
				["ear.R_Composited"]: CFrameValue;
				["ear.R_Initial"]: CFrameValue;
				["ear.R_Original"]: CFrameValue;
				["leg.B.L_Composited"]: CFrameValue;
				["leg.B.L_Initial"]: CFrameValue;
				["leg.B.L_Original"]: CFrameValue;
				["leg.B.R_Composited"]: CFrameValue;
				["leg.B.R_Initial"]: CFrameValue;
				["leg.B.R_Original"]: CFrameValue;
				["leg.F.L_Composited"]: CFrameValue;
				["leg.F.L_Initial"]: CFrameValue;
				["leg.F.L_Original"]: CFrameValue;
				["leg.F.R_Composited"]: CFrameValue;
				["leg.F.R_Initial"]: CFrameValue;
				["leg.F.R_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				root_Initial: CFrameValue;
				root_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["tail.01_Original"]: CFrameValue;
			} & Folder;
		} & Model;
		Possum: {
			HumanoidRootPart: {
				root: {
					body: {
						["ear.L"]: Bone;
						["ear.R"]: Bone;
						["leg.B.L"]: Bone;
						["leg.B.R"]: Bone;
						["leg.F.L"]: Bone;
						["leg.F.R"]: Bone;
						["tail.01"]: {
							["tail.02"]: Bone;
						} & Bone;
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
				["ear.L_Composited"]: CFrameValue;
				["ear.L_Initial"]: CFrameValue;
				["ear.L_Original"]: CFrameValue;
				["ear.R_Composited"]: CFrameValue;
				["ear.R_Initial"]: CFrameValue;
				["ear.R_Original"]: CFrameValue;
				["leg.B.L_Composited"]: CFrameValue;
				["leg.B.L_Initial"]: CFrameValue;
				["leg.B.L_Original"]: CFrameValue;
				["leg.B.R_Composited"]: CFrameValue;
				["leg.B.R_Initial"]: CFrameValue;
				["leg.B.R_Original"]: CFrameValue;
				["leg.F.L_Composited"]: CFrameValue;
				["leg.F.L_Initial"]: CFrameValue;
				["leg.F.L_Original"]: CFrameValue;
				["leg.F.R_Composited"]: CFrameValue;
				["leg.F.R_Initial"]: CFrameValue;
				["leg.F.R_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				root_Initial: CFrameValue;
				root_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				["tail.02_Composited"]: CFrameValue;
				["tail.02_Initial"]: CFrameValue;
				["tail.02_Original"]: CFrameValue;
			} & Folder;
		} & Model;
		Prawn: {
			HumanoidRootPart: {
				root: {
					body: {
						["antennae.L.01"]: {
							["antennae.L.02"]: Bone;
						} & Bone;
						["antennae.R.01"]: {
							["antennae.R.02"]: Bone;
						} & Bone;
						["arm.L.01"]: {
							["arm.L.02"]: Bone;
						} & Bone;
						["arm.L.03"]: {
							["arm.L.04"]: Bone;
						} & Bone;
						["arm.R.01"]: {
							["arm.R.02"]: Bone;
						} & Bone;
						["arm.R.03"]: {
							["arm.R.04"]: Bone;
						} & Bone;
						["leg.L.01"]: Bone;
						["leg.L.02"]: Bone;
						["leg.L.03"]: Bone;
						["leg.R.01"]: Bone;
						["leg.R.02"]: Bone;
						["leg.R.03"]: Bone;
						["tail.01"]: {
							["tail.02"]: Bone;
						} & Bone;
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
				["antennae.L.01_Composited"]: CFrameValue;
				["antennae.L.01_Initial"]: CFrameValue;
				["antennae.L.01_Original"]: CFrameValue;
				["antennae.L.02_Composited"]: CFrameValue;
				["antennae.L.02_Initial"]: CFrameValue;
				["antennae.L.02_Original"]: CFrameValue;
				["antennae.R.01_Composited"]: CFrameValue;
				["antennae.R.01_Initial"]: CFrameValue;
				["antennae.R.01_Original"]: CFrameValue;
				["antennae.R.02_Composited"]: CFrameValue;
				["antennae.R.02_Initial"]: CFrameValue;
				["antennae.R.02_Original"]: CFrameValue;
				["arm.L.01_Composited"]: CFrameValue;
				["arm.L.01_Initial"]: CFrameValue;
				["arm.L.01_Original"]: CFrameValue;
				["arm.L.02_Composited"]: CFrameValue;
				["arm.L.02_Initial"]: CFrameValue;
				["arm.L.02_Original"]: CFrameValue;
				["arm.L.03_Composited"]: CFrameValue;
				["arm.L.03_Initial"]: CFrameValue;
				["arm.L.03_Original"]: CFrameValue;
				["arm.L.04_Composited"]: CFrameValue;
				["arm.L.04_Initial"]: CFrameValue;
				["arm.L.04_Original"]: CFrameValue;
				["arm.R.01_Composited"]: CFrameValue;
				["arm.R.01_Initial"]: CFrameValue;
				["arm.R.01_Original"]: CFrameValue;
				["arm.R.02_Composited"]: CFrameValue;
				["arm.R.02_Initial"]: CFrameValue;
				["arm.R.02_Original"]: CFrameValue;
				["arm.R.03_Composited"]: CFrameValue;
				["arm.R.03_Initial"]: CFrameValue;
				["arm.R.03_Original"]: CFrameValue;
				["arm.R.04_Composited"]: CFrameValue;
				["arm.R.04_Initial"]: CFrameValue;
				["arm.R.04_Original"]: CFrameValue;
				body_Composited: CFrameValue;
				body_Initial: CFrameValue;
				body_Original: CFrameValue;
				["leg.L.01_Composited"]: CFrameValue;
				["leg.L.01_Initial"]: CFrameValue;
				["leg.L.01_Original"]: CFrameValue;
				["leg.L.02_Composited"]: CFrameValue;
				["leg.L.02_Initial"]: CFrameValue;
				["leg.L.02_Original"]: CFrameValue;
				["leg.L.03_Composited"]: CFrameValue;
				["leg.L.03_Initial"]: CFrameValue;
				["leg.L.03_Original"]: CFrameValue;
				["leg.R.01_Composited"]: CFrameValue;
				["leg.R.01_Initial"]: CFrameValue;
				["leg.R.01_Original"]: CFrameValue;
				["leg.R.02_Composited"]: CFrameValue;
				["leg.R.02_Initial"]: CFrameValue;
				["leg.R.02_Original"]: CFrameValue;
				["leg.R.03_Composited"]: CFrameValue;
				["leg.R.03_Initial"]: CFrameValue;
				["leg.R.03_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				root_Initial: CFrameValue;
				root_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				["tail.02_Composited"]: CFrameValue;
				["tail.02_Initial"]: CFrameValue;
				["tail.02_Original"]: CFrameValue;
			} & Folder;
		} & Model;
		Pronghorn: {
			HumanoidRootPart: {
				root: {
					body: {
						["ear.L"]: Bone;
						["ear.R"]: Bone;
						["leg.B.L"]: Bone;
						["leg.B.R"]: Bone;
						["leg.F.L"]: Bone;
						["leg.F.R"]: Bone;
						["tail.01"]: Bone;
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
				["ear.L_Composited"]: CFrameValue;
				["ear.L_Initial"]: CFrameValue;
				["ear.L_Original"]: CFrameValue;
				["ear.R_Composited"]: CFrameValue;
				["ear.R_Initial"]: CFrameValue;
				["ear.R_Original"]: CFrameValue;
				["leg.B.L_Composited"]: CFrameValue;
				["leg.B.L_Initial"]: CFrameValue;
				["leg.B.L_Original"]: CFrameValue;
				["leg.B.R_Composited"]: CFrameValue;
				["leg.B.R_Initial"]: CFrameValue;
				["leg.B.R_Original"]: CFrameValue;
				["leg.F.L_Composited"]: CFrameValue;
				["leg.F.L_Initial"]: CFrameValue;
				["leg.F.L_Original"]: CFrameValue;
				["leg.F.R_Composited"]: CFrameValue;
				["leg.F.R_Initial"]: CFrameValue;
				["leg.F.R_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				root_Initial: CFrameValue;
				root_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["tail.01_Original"]: CFrameValue;
			} & Folder;
		} & Model;
		Pudu: {
			HumanoidRootPart: {
				root: {
					body: {
						["ear.L"]: Bone;
						["ear.R"]: Bone;
						["leg.B.L"]: Bone;
						["leg.B.R"]: Bone;
						["leg.F.L"]: Bone;
						["leg.F.R"]: Bone;
						["tail.01"]: Bone;
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
				["ear.L_Composited"]: CFrameValue;
				["ear.L_Initial"]: CFrameValue;
				["ear.L_Original"]: CFrameValue;
				["ear.R_Composited"]: CFrameValue;
				["ear.R_Initial"]: CFrameValue;
				["ear.R_Original"]: CFrameValue;
				["leg.B.L_Composited"]: CFrameValue;
				["leg.B.L_Initial"]: CFrameValue;
				["leg.B.L_Original"]: CFrameValue;
				["leg.B.R_Composited"]: CFrameValue;
				["leg.B.R_Initial"]: CFrameValue;
				["leg.B.R_Original"]: CFrameValue;
				["leg.F.L_Composited"]: CFrameValue;
				["leg.F.L_Initial"]: CFrameValue;
				["leg.F.L_Original"]: CFrameValue;
				["leg.F.R_Composited"]: CFrameValue;
				["leg.F.R_Initial"]: CFrameValue;
				["leg.F.R_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				root_Initial: CFrameValue;
				root_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["tail.01_Original"]: CFrameValue;
			} & Folder;
		} & Model;
		Puffin: {
			HumanoidRootPart: {
				root: {
					body: {
						["feet.L"]: Bone;
						["feet.R"]: Bone;
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
		Python: {
			HumanoidRootPart: {
				root: {
					body: {
						["neck.01"]: {
							["neck.02"]: {
								head: Bone;
							} & Bone;
						} & Bone;
						["tail.01"]: {
							["tail.02"]: {
								["tail.03"]: Bone;
							} & Bone;
						} & Bone;
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
				head_Composited: CFrameValue;
				head_Initial: CFrameValue;
				head_Original: CFrameValue;
				["neck.01_Composited"]: CFrameValue;
				["neck.01_Initial"]: CFrameValue;
				["neck.01_Original"]: CFrameValue;
				["neck.02_Composited"]: CFrameValue;
				["neck.02_Initial"]: CFrameValue;
				["neck.02_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				root_Initial: CFrameValue;
				root_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				["tail.02_Composited"]: CFrameValue;
				["tail.02_Initial"]: CFrameValue;
				["tail.02_Original"]: CFrameValue;
				["tail.03_Composited"]: CFrameValue;
				["tail.03_Initial"]: CFrameValue;
				["tail.03_Original"]: CFrameValue;
			} & Folder;
		} & Model;
		Quail: {
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
		Quokka: {
			HumanoidRootPart: {
				root: {
					body: {
						["ear.L"]: Bone;
						["ear.R"]: Bone;
						["leg.B.L"]: Bone;
						["leg.B.R"]: Bone;
						["leg.F.L"]: Bone;
						["leg.F.R"]: Bone;
						["tail.01"]: {
							["tail.02"]: Bone;
						} & Bone;
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
				["ear.L_Composited"]: CFrameValue;
				["ear.L_Initial"]: CFrameValue;
				["ear.L_Original"]: CFrameValue;
				["ear.R_Composited"]: CFrameValue;
				["ear.R_Initial"]: CFrameValue;
				["ear.R_Original"]: CFrameValue;
				["leg.B.L_Composited"]: CFrameValue;
				["leg.B.L_Initial"]: CFrameValue;
				["leg.B.L_Original"]: CFrameValue;
				["leg.B.R_Composited"]: CFrameValue;
				["leg.B.R_Initial"]: CFrameValue;
				["leg.B.R_Original"]: CFrameValue;
				["leg.F.L_Composited"]: CFrameValue;
				["leg.F.L_Initial"]: CFrameValue;
				["leg.F.L_Original"]: CFrameValue;
				["leg.F.R_Composited"]: CFrameValue;
				["leg.F.R_Initial"]: CFrameValue;
				["leg.F.R_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				root_Initial: CFrameValue;
				root_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				["tail.02_Composited"]: CFrameValue;
				["tail.02_Initial"]: CFrameValue;
				["tail.02_Original"]: CFrameValue;
			} & Folder;
		} & Model;
		Rabbit: {
			HumanoidRootPart: {
				root: {
					body: {
						["ear.L"]: Bone;
						["ear.R"]: Bone;
						["leg.B.L"]: Bone;
						["leg.B.R"]: Bone;
						["leg.F.L"]: Bone;
						["leg.F.R"]: Bone;
						["tail.01"]: Bone;
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
				["ear.L_Composited"]: CFrameValue;
				["ear.L_Initial"]: CFrameValue;
				["ear.L_Original"]: CFrameValue;
				["ear.R_Composited"]: CFrameValue;
				["ear.R_Initial"]: CFrameValue;
				["ear.R_Original"]: CFrameValue;
				["leg.B.L_Composited"]: CFrameValue;
				["leg.B.L_Initial"]: CFrameValue;
				["leg.B.L_Original"]: CFrameValue;
				["leg.B.R_Composited"]: CFrameValue;
				["leg.B.R_Initial"]: CFrameValue;
				["leg.B.R_Original"]: CFrameValue;
				["leg.F.L_Composited"]: CFrameValue;
				["leg.F.L_Initial"]: CFrameValue;
				["leg.F.L_Original"]: CFrameValue;
				["leg.F.R_Composited"]: CFrameValue;
				["leg.F.R_Initial"]: CFrameValue;
				["leg.F.R_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				root_Initial: CFrameValue;
				root_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["tail.01_Original"]: CFrameValue;
			} & Folder;
		} & Model;
		Raccoon: {
			HumanoidRootPart: {
				root: {
					body: {
						["ear.L"]: Bone;
						["ear.R"]: Bone;
						["leg.B.L"]: Bone;
						["leg.B.R"]: Bone;
						["leg.F.L"]: Bone;
						["leg.F.R"]: Bone;
						["tail.01"]: {
							["tail.02"]: Bone;
						} & Bone;
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
				["ear.L_Composited"]: CFrameValue;
				["ear.L_Initial"]: CFrameValue;
				["ear.L_Original"]: CFrameValue;
				["ear.R_Composited"]: CFrameValue;
				["ear.R_Initial"]: CFrameValue;
				["ear.R_Original"]: CFrameValue;
				["leg.B.L_Composited"]: CFrameValue;
				["leg.B.L_Initial"]: CFrameValue;
				["leg.B.L_Original"]: CFrameValue;
				["leg.B.R_Composited"]: CFrameValue;
				["leg.B.R_Initial"]: CFrameValue;
				["leg.B.R_Original"]: CFrameValue;
				["leg.F.L_Composited"]: CFrameValue;
				["leg.F.L_Initial"]: CFrameValue;
				["leg.F.L_Original"]: CFrameValue;
				["leg.F.R_Composited"]: CFrameValue;
				["leg.F.R_Initial"]: CFrameValue;
				["leg.F.R_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				root_Initial: CFrameValue;
				root_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				["tail.02_Composited"]: CFrameValue;
				["tail.02_Initial"]: CFrameValue;
				["tail.02_Original"]: CFrameValue;
			} & Folder;
		} & Model;
		Rattlesnake: {
			HumanoidRootPart: {
				root: {
					body: {
						["neck.01"]: {
							["neck.02"]: {
								head: Bone;
							} & Bone;
						} & Bone;
						["tail.01"]: {
							["tail.02"]: {
								["tail.03"]: Bone;
							} & Bone;
						} & Bone;
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
				head_Composited: CFrameValue;
				head_Initial: CFrameValue;
				head_Original: CFrameValue;
				["neck.01_Composited"]: CFrameValue;
				["neck.01_Initial"]: CFrameValue;
				["neck.01_Original"]: CFrameValue;
				["neck.02_Composited"]: CFrameValue;
				["neck.02_Initial"]: CFrameValue;
				["neck.02_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				root_Initial: CFrameValue;
				root_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				["tail.02_Composited"]: CFrameValue;
				["tail.02_Initial"]: CFrameValue;
				["tail.02_Original"]: CFrameValue;
				["tail.03_Composited"]: CFrameValue;
				["tail.03_Initial"]: CFrameValue;
				["tail.03_Original"]: CFrameValue;
			} & Folder;
		} & Model;
		RedPanda: {
			HumanoidRootPart: {
				root: {
					body: {
						["ear.L"]: Bone;
						["ear.R"]: Bone;
						["leg.B.L"]: Bone;
						["leg.B.R"]: Bone;
						["leg.F.L"]: Bone;
						["leg.F.R"]: Bone;
						["tail.01"]: {
							["tail.02"]: Bone;
						} & Bone;
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
				["ear.L_Composited"]: CFrameValue;
				["ear.L_Initial"]: CFrameValue;
				["ear.L_Original"]: CFrameValue;
				["ear.R_Composited"]: CFrameValue;
				["ear.R_Initial"]: CFrameValue;
				["ear.R_Original"]: CFrameValue;
				["leg.B.L_Composited"]: CFrameValue;
				["leg.B.L_Initial"]: CFrameValue;
				["leg.B.L_Original"]: CFrameValue;
				["leg.B.R_Composited"]: CFrameValue;
				["leg.B.R_Initial"]: CFrameValue;
				["leg.B.R_Original"]: CFrameValue;
				["leg.F.L_Composited"]: CFrameValue;
				["leg.F.L_Initial"]: CFrameValue;
				["leg.F.L_Original"]: CFrameValue;
				["leg.F.R_Composited"]: CFrameValue;
				["leg.F.R_Initial"]: CFrameValue;
				["leg.F.R_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				root_Initial: CFrameValue;
				root_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				["tail.02_Composited"]: CFrameValue;
				["tail.02_Initial"]: CFrameValue;
				["tail.02_Original"]: CFrameValue;
			} & Folder;
		} & Model;
		Reindeer: {
			HumanoidRootPart: {
				root: {
					body: {
						["ear.L"]: Bone;
						["ear.R"]: Bone;
						["leg.B.L"]: Bone;
						["leg.B.R"]: Bone;
						["leg.F.L"]: Bone;
						["leg.F.R"]: Bone;
						["tail.01"]: Bone;
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
				["ear.L_Composited"]: CFrameValue;
				["ear.L_Initial"]: CFrameValue;
				["ear.L_Original"]: CFrameValue;
				["ear.R_Composited"]: CFrameValue;
				["ear.R_Initial"]: CFrameValue;
				["ear.R_Original"]: CFrameValue;
				["leg.B.L_Composited"]: CFrameValue;
				["leg.B.L_Initial"]: CFrameValue;
				["leg.B.L_Original"]: CFrameValue;
				["leg.B.R_Composited"]: CFrameValue;
				["leg.B.R_Initial"]: CFrameValue;
				["leg.B.R_Original"]: CFrameValue;
				["leg.F.L_Composited"]: CFrameValue;
				["leg.F.L_Initial"]: CFrameValue;
				["leg.F.L_Original"]: CFrameValue;
				["leg.F.R_Composited"]: CFrameValue;
				["leg.F.R_Initial"]: CFrameValue;
				["leg.F.R_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				root_Initial: CFrameValue;
				root_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["tail.01_Original"]: CFrameValue;
			} & Folder;
		} & Model;
		Rhino: {
			HumanoidRootPart: {
				root: {
					body: {
						["ear.L"]: Bone;
						["ear.R"]: Bone;
						["leg.B.L"]: Bone;
						["leg.B.R"]: Bone;
						["leg.F.L"]: Bone;
						["leg.F.R"]: Bone;
						["tail.01"]: Bone;
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
				["ear.L_Composited"]: CFrameValue;
				["ear.L_Initial"]: CFrameValue;
				["ear.L_Original"]: CFrameValue;
				["ear.R_Composited"]: CFrameValue;
				["ear.R_Initial"]: CFrameValue;
				["ear.R_Original"]: CFrameValue;
				["leg.B.L_Composited"]: CFrameValue;
				["leg.B.L_Initial"]: CFrameValue;
				["leg.B.L_Original"]: CFrameValue;
				["leg.B.R_Composited"]: CFrameValue;
				["leg.B.R_Initial"]: CFrameValue;
				["leg.B.R_Original"]: CFrameValue;
				["leg.F.L_Composited"]: CFrameValue;
				["leg.F.L_Initial"]: CFrameValue;
				["leg.F.L_Original"]: CFrameValue;
				["leg.F.R_Composited"]: CFrameValue;
				["leg.F.R_Initial"]: CFrameValue;
				["leg.F.R_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				root_Initial: CFrameValue;
				root_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["tail.01_Original"]: CFrameValue;
			} & Folder;
		} & Model;
		Rig: {
			Animate: {
				PlayEmote: BindableFunction;
				ScaleDampeningPercent: NumberValue;
				cheer: {
					CheerAnim: Animation;
				} & StringValue;
				climb: {
					ClimbAnim: Animation;
				} & StringValue;
				dance: {
					Animation1: {
						Weight: NumberValue;
					} & Animation;
					Animation2: {
						Weight: NumberValue;
					} & Animation;
					Animation3: {
						Weight: NumberValue;
					} & Animation;
				} & StringValue;
				dance2: {
					Animation1: {
						Weight: NumberValue;
					} & Animation;
					Animation2: {
						Weight: NumberValue;
					} & Animation;
					Animation3: {
						Weight: NumberValue;
					} & Animation;
				} & StringValue;
				dance3: {
					Animation1: {
						Weight: NumberValue;
					} & Animation;
					Animation2: {
						Weight: NumberValue;
					} & Animation;
					Animation3: {
						Weight: NumberValue;
					} & Animation;
				} & StringValue;
				fall: {
					FallAnim: Animation;
				} & StringValue;
				idle: {
					Animation1: {
						Weight: NumberValue;
					} & Animation;
					Animation2: {
						Weight: NumberValue;
					} & Animation;
				} & StringValue;
				jump: {
					JumpAnim: Animation;
				} & StringValue;
				laugh: {
					LaughAnim: Animation;
				} & StringValue;
				mood: {
					Animation1: Animation;
				} & StringValue;
				point: {
					PointAnim: Animation;
				} & StringValue;
				run: {
					RunAnim: Animation;
				} & StringValue;
				sit: {
					SitAnim: Animation;
				} & StringValue;
				swim: {
					Swim: Animation;
				} & StringValue;
				swimidle: {
					SwimIdle: Animation;
				} & StringValue;
				toollunge: {
					ToolLungeAnim: Animation;
				} & StringValue;
				toolnone: {
					ToolNoneAnim: Animation;
				} & StringValue;
				toolslash: {
					ToolSlashAnim: Animation;
				} & StringValue;
				walk: {
					WalkAnim: Animation;
				} & StringValue;
				wave: {
					WaveAnim: Animation;
				} & StringValue;
			} & LocalScript;
			["Body Colors"]: BodyColors;
			Head: {
				FaceCenterAttachment: {
					OriginalPosition: Vector3Value;
				} & Attachment;
				FaceFrontAttachment: {
					OriginalPosition: Vector3Value;
				} & Attachment;
				HairAttachment: {
					OriginalPosition: Vector3Value;
				} & Attachment;
				HatAttachment: {
					OriginalPosition: Vector3Value;
				} & Attachment;
				Head: WrapTarget;
				Neck: Motor6D;
				NeckRigAttachment: {
					OriginalPosition: Vector3Value;
				} & Attachment;
				OriginalSize: Vector3Value;
				face: Decal;
			} & MeshPart;
			Humanoid: {
				Animator: Animator;
				BodyDepthScale: NumberValue;
				BodyHeightScale: NumberValue;
				BodyProportionScale: NumberValue;
				BodyTypeScale: NumberValue;
				BodyWidthScale: NumberValue;
				HeadScale: NumberValue;
				HumanoidDescription: HumanoidDescription;
				Status: Status;
			} & Humanoid;
			HumanoidRootPart: {
				OriginalSize: Vector3Value;
				RootAttachment: {
					OriginalPosition: Vector3Value;
				} & Attachment;
				RootRigAttachment: {
					OriginalPosition: Vector3Value;
				} & Attachment;
			} & Part;
			LeftFoot: {
				LeftAnkle: Motor6D;
				LeftAnkleRigAttachment: {
					OriginalPosition: Vector3Value;
				} & Attachment;
				LeftFoot: WrapTarget;
				LeftFootAttachment: {
					OriginalPosition: Vector3Value;
				} & Attachment;
				OriginalSize: Vector3Value;
			} & MeshPart;
			LeftHand: {
				LeftGripAttachment: {
					OriginalPosition: Vector3Value;
				} & Attachment;
				LeftHand: WrapTarget;
				LeftWrist: Motor6D;
				LeftWristRigAttachment: {
					OriginalPosition: Vector3Value;
				} & Attachment;
				OriginalSize: Vector3Value;
			} & MeshPart;
			LeftLowerArm: {
				LeftElbow: Motor6D;
				LeftElbowRigAttachment: {
					OriginalPosition: Vector3Value;
				} & Attachment;
				LeftLowerArm: WrapTarget;
				LeftWristRigAttachment: {
					OriginalPosition: Vector3Value;
				} & Attachment;
				OriginalSize: Vector3Value;
			} & MeshPart;
			LeftLowerLeg: {
				LeftAnkleRigAttachment: {
					OriginalPosition: Vector3Value;
				} & Attachment;
				LeftKnee: Motor6D;
				LeftKneeRigAttachment: {
					OriginalPosition: Vector3Value;
				} & Attachment;
				LeftLowerLeg: WrapTarget;
				OriginalSize: Vector3Value;
			} & MeshPart;
			LeftUpperArm: {
				LeftElbowRigAttachment: {
					OriginalPosition: Vector3Value;
				} & Attachment;
				LeftShoulder: Motor6D;
				LeftShoulderAttachment: {
					OriginalPosition: Vector3Value;
				} & Attachment;
				LeftShoulderRigAttachment: {
					OriginalPosition: Vector3Value;
				} & Attachment;
				LeftUpperArm: WrapTarget;
				OriginalSize: Vector3Value;
			} & MeshPart;
			LeftUpperLeg: {
				LeftHip: Motor6D;
				LeftHipRigAttachment: {
					OriginalPosition: Vector3Value;
				} & Attachment;
				LeftKneeRigAttachment: {
					OriginalPosition: Vector3Value;
				} & Attachment;
				LeftUpperLeg: WrapTarget;
				OriginalSize: Vector3Value;
			} & MeshPart;
			LowerTorso: {
				LeftHipRigAttachment: {
					OriginalPosition: Vector3Value;
				} & Attachment;
				LowerTorso: WrapTarget;
				OriginalSize: Vector3Value;
				RightHipRigAttachment: {
					OriginalPosition: Vector3Value;
				} & Attachment;
				Root: Motor6D;
				RootRigAttachment: {
					OriginalPosition: Vector3Value;
				} & Attachment;
				WaistBackAttachment: {
					OriginalPosition: Vector3Value;
				} & Attachment;
				WaistCenterAttachment: {
					OriginalPosition: Vector3Value;
				} & Attachment;
				WaistFrontAttachment: {
					OriginalPosition: Vector3Value;
				} & Attachment;
				WaistRigAttachment: {
					OriginalPosition: Vector3Value;
				} & Attachment;
			} & MeshPart;
			RightFoot: {
				OriginalSize: Vector3Value;
				RightAnkle: Motor6D;
				RightAnkleRigAttachment: {
					OriginalPosition: Vector3Value;
				} & Attachment;
				RightFoot: WrapTarget;
				RightFootAttachment: {
					OriginalPosition: Vector3Value;
				} & Attachment;
			} & MeshPart;
			RightHand: {
				OriginalSize: Vector3Value;
				RightGripAttachment: {
					OriginalPosition: Vector3Value;
				} & Attachment;
				RightHand: WrapTarget;
				RightWrist: Motor6D;
				RightWristRigAttachment: {
					OriginalPosition: Vector3Value;
				} & Attachment;
			} & MeshPart;
			RightLowerArm: {
				OriginalSize: Vector3Value;
				RightElbow: Motor6D;
				RightElbowRigAttachment: {
					OriginalPosition: Vector3Value;
				} & Attachment;
				RightLowerArm: WrapTarget;
				RightWristRigAttachment: {
					OriginalPosition: Vector3Value;
				} & Attachment;
			} & MeshPart;
			RightLowerLeg: {
				OriginalSize: Vector3Value;
				RightAnkleRigAttachment: {
					OriginalPosition: Vector3Value;
				} & Attachment;
				RightKnee: Motor6D;
				RightKneeRigAttachment: {
					OriginalPosition: Vector3Value;
				} & Attachment;
				RightLowerLeg: WrapTarget;
			} & MeshPart;
			RightUpperArm: {
				OriginalSize: Vector3Value;
				RightElbowRigAttachment: {
					OriginalPosition: Vector3Value;
				} & Attachment;
				RightShoulder: Motor6D;
				RightShoulderAttachment: {
					OriginalPosition: Vector3Value;
				} & Attachment;
				RightShoulderRigAttachment: {
					OriginalPosition: Vector3Value;
				} & Attachment;
				RightUpperArm: WrapTarget;
			} & MeshPart;
			RightUpperLeg: {
				OriginalSize: Vector3Value;
				RightHip: Motor6D;
				RightHipRigAttachment: {
					OriginalPosition: Vector3Value;
				} & Attachment;
				RightKneeRigAttachment: {
					OriginalPosition: Vector3Value;
				} & Attachment;
				RightUpperLeg: WrapTarget;
			} & MeshPart;
			UpperTorso: {
				BodyBackAttachment: {
					OriginalPosition: Vector3Value;
				} & Attachment;
				BodyFrontAttachment: {
					OriginalPosition: Vector3Value;
				} & Attachment;
				LeftCollarAttachment: {
					OriginalPosition: Vector3Value;
				} & Attachment;
				LeftShoulderRigAttachment: {
					OriginalPosition: Vector3Value;
				} & Attachment;
				NeckAttachment: {
					OriginalPosition: Vector3Value;
				} & Attachment;
				NeckRigAttachment: {
					OriginalPosition: Vector3Value;
				} & Attachment;
				OriginalSize: Vector3Value;
				RightCollarAttachment: {
					OriginalPosition: Vector3Value;
				} & Attachment;
				RightShoulderRigAttachment: {
					OriginalPosition: Vector3Value;
				} & Attachment;
				UpperTorso: WrapTarget;
				Waist: Motor6D;
				WaistRigAttachment: {
					OriginalPosition: Vector3Value;
				} & Attachment;
			} & MeshPart;
		} & Model;
		RiverDolphin: {
			HumanoidRootPart: {
				body: {
					["fin.01"]: Bone;
					["fin.L"]: Bone;
					["fin.R"]: Bone;
					["tail.01"]: {
						["tail.02"]: Bone;
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
				["fin.01_Composited"]: CFrameValue;
				["fin.01_Initial"]: CFrameValue;
				["fin.01_Original"]: CFrameValue;
				["fin.L_Composited"]: CFrameValue;
				["fin.L_Initial"]: CFrameValue;
				["fin.L_Original"]: CFrameValue;
				["fin.R_Composited"]: CFrameValue;
				["fin.R_Initial"]: CFrameValue;
				["fin.R_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				root_Initial: CFrameValue;
				root_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				["tail.02_Composited"]: CFrameValue;
				["tail.02_Initial"]: CFrameValue;
				["tail.02_Original"]: CFrameValue;
			} & Folder;
		} & Model;
		Rooster: {
			HumanoidRootPart: {
				root: {
					body: {
						["feet.L"]: Bone;
						["feet.R"]: Bone;
						["hair.01"]: Bone;
						["hair.02"]: Bone;
						["tail.01"]: Bone;
						["tail.02"]: Bone;
						["tail.03"]: Bone;
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
				["tail.03_Composited"]: CFrameValue;
				["tail.03_Initial"]: CFrameValue;
				["tail.03_Original"]: CFrameValue;
				["wing.L_Composited"]: CFrameValue;
				["wing.L_Initial"]: CFrameValue;
				["wing.L_Original"]: CFrameValue;
				["wing.R_Composited"]: CFrameValue;
				["wing.R_Initial"]: CFrameValue;
				["wing.R_Original"]: CFrameValue;
			} & Folder;
		} & Model;
		Salmon: {
			HumanoidRootPart: {
				root: {
					body: {
						["fin.01"]: Bone;
						["fin.02"]: Bone;
						["fin.03"]: Bone;
						["fin.L"]: Bone;
						["fin.R"]: Bone;
						["tail.01"]: Bone;
						["tail.02"]: Bone;
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
				["fin.01_Composited"]: CFrameValue;
				["fin.01_Initial"]: CFrameValue;
				["fin.01_Original"]: CFrameValue;
				["fin.02_Composited"]: CFrameValue;
				["fin.02_Initial"]: CFrameValue;
				["fin.02_Original"]: CFrameValue;
				["fin.03_Composited"]: CFrameValue;
				["fin.03_Initial"]: CFrameValue;
				["fin.03_Original"]: CFrameValue;
				["fin.L_Composited"]: CFrameValue;
				["fin.L_Initial"]: CFrameValue;
				["fin.L_Original"]: CFrameValue;
				["fin.R_Composited"]: CFrameValue;
				["fin.R_Initial"]: CFrameValue;
				["fin.R_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				root_Initial: CFrameValue;
				root_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				["tail.02_Composited"]: CFrameValue;
				["tail.02_Initial"]: CFrameValue;
				["tail.02_Original"]: CFrameValue;
			} & Folder;
		} & Model;
		Sardine: {
			HumanoidRootPart: {
				root: {
					body: {
						["fin.01"]: Bone;
						["fin.02"]: Bone;
						["fin.03"]: Bone;
						["fin.L"]: Bone;
						["fin.R"]: Bone;
						["tail.01"]: Bone;
						["tail.02"]: Bone;
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
				["fin.01_Composited"]: CFrameValue;
				["fin.01_Initial"]: CFrameValue;
				["fin.01_Original"]: CFrameValue;
				["fin.02_Composited"]: CFrameValue;
				["fin.02_Initial"]: CFrameValue;
				["fin.02_Original"]: CFrameValue;
				["fin.03_Composited"]: CFrameValue;
				["fin.03_Initial"]: CFrameValue;
				["fin.03_Original"]: CFrameValue;
				["fin.L_Composited"]: CFrameValue;
				["fin.L_Initial"]: CFrameValue;
				["fin.L_Original"]: CFrameValue;
				["fin.R_Composited"]: CFrameValue;
				["fin.R_Initial"]: CFrameValue;
				["fin.R_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				root_Initial: CFrameValue;
				root_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				["tail.02_Composited"]: CFrameValue;
				["tail.02_Initial"]: CFrameValue;
				["tail.02_Original"]: CFrameValue;
			} & Folder;
		} & Model;
		SeaHorse: {
			HumanoidRootPart: {
				root: {
					body: {
						["fin.L"]: Bone;
						["fin.R"]: Bone;
						["tail.01"]: Bone;
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
				["fin.L_Composited"]: CFrameValue;
				["fin.L_Initial"]: CFrameValue;
				["fin.L_Original"]: CFrameValue;
				["fin.R_Composited"]: CFrameValue;
				["fin.R_Initial"]: CFrameValue;
				["fin.R_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				root_Initial: CFrameValue;
				root_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["tail.01_Original"]: CFrameValue;
			} & Folder;
		} & Model;
		SeaLion: {
			HumanoidRootPart: {
				root: {
					body: {
						["leg.L"]: Bone;
						["leg.R"]: Bone;
						["tail.01"]: Bone;
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
				["leg.L_Composited"]: CFrameValue;
				["leg.L_Initial"]: CFrameValue;
				["leg.L_Original"]: CFrameValue;
				["leg.R_Composited"]: CFrameValue;
				["leg.R_Initial"]: CFrameValue;
				["leg.R_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				root_Initial: CFrameValue;
				root_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["tail.01_Original"]: CFrameValue;
			} & Folder;
		} & Model;
		SeaOtter: {
			HumanoidRootPart: {
				root: {
					body: {
						["ear.L"]: Bone;
						["ear.R"]: Bone;
						["leg.B.L"]: Bone;
						["leg.B.R"]: Bone;
						["leg.F.L"]: Bone;
						["leg.F.R"]: Bone;
						["tail.01"]: {
							["tail.02"]: Bone;
						} & Bone;
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
				["ear.L_Composited"]: CFrameValue;
				["ear.L_Initial"]: CFrameValue;
				["ear.L_Original"]: CFrameValue;
				["ear.R_Composited"]: CFrameValue;
				["ear.R_Initial"]: CFrameValue;
				["ear.R_Original"]: CFrameValue;
				["leg.B.L_Composited"]: CFrameValue;
				["leg.B.L_Initial"]: CFrameValue;
				["leg.B.L_Original"]: CFrameValue;
				["leg.B.R_Composited"]: CFrameValue;
				["leg.B.R_Initial"]: CFrameValue;
				["leg.B.R_Original"]: CFrameValue;
				["leg.F.L_Composited"]: CFrameValue;
				["leg.F.L_Initial"]: CFrameValue;
				["leg.F.L_Original"]: CFrameValue;
				["leg.F.R_Composited"]: CFrameValue;
				["leg.F.R_Initial"]: CFrameValue;
				["leg.F.R_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				root_Initial: CFrameValue;
				root_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				["tail.02_Composited"]: CFrameValue;
				["tail.02_Initial"]: CFrameValue;
				["tail.02_Original"]: CFrameValue;
			} & Folder;
		} & Model;
		Seagull: {
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
		Serval: {
			HumanoidRootPart: {
				root: {
					body: {
						["ear.L"]: Bone;
						["ear.R"]: Bone;
						["leg.B.L"]: Bone;
						["leg.B.R"]: Bone;
						["leg.F.L"]: Bone;
						["leg.F.R"]: Bone;
						["tail.01"]: {
							["tail.02"]: Bone;
						} & Bone;
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
				["ear.L_Composited"]: CFrameValue;
				["ear.L_Initial"]: CFrameValue;
				["ear.L_Original"]: CFrameValue;
				["ear.R_Composited"]: CFrameValue;
				["ear.R_Initial"]: CFrameValue;
				["ear.R_Original"]: CFrameValue;
				["leg.B.L_Composited"]: CFrameValue;
				["leg.B.L_Initial"]: CFrameValue;
				["leg.B.L_Original"]: CFrameValue;
				["leg.B.R_Composited"]: CFrameValue;
				["leg.B.R_Initial"]: CFrameValue;
				["leg.B.R_Original"]: CFrameValue;
				["leg.F.L_Composited"]: CFrameValue;
				["leg.F.L_Initial"]: CFrameValue;
				["leg.F.L_Original"]: CFrameValue;
				["leg.F.R_Composited"]: CFrameValue;
				["leg.F.R_Initial"]: CFrameValue;
				["leg.F.R_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				root_Initial: CFrameValue;
				root_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				["tail.02_Composited"]: CFrameValue;
				["tail.02_Initial"]: CFrameValue;
				["tail.02_Original"]: CFrameValue;
			} & Folder;
		} & Model;
		Sheep: {
			HumanoidRootPart: {
				root: {
					body: {
						["ear.L"]: Bone;
						["ear.R"]: Bone;
						["leg.B.L"]: Bone;
						["leg.B.R"]: Bone;
						["leg.F.L"]: Bone;
						["leg.F.R"]: Bone;
						["tail.01"]: Bone;
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
				["ear.L_Composited"]: CFrameValue;
				["ear.L_Initial"]: CFrameValue;
				["ear.L_Original"]: CFrameValue;
				["ear.R_Composited"]: CFrameValue;
				["ear.R_Initial"]: CFrameValue;
				["ear.R_Original"]: CFrameValue;
				["leg.B.L_Composited"]: CFrameValue;
				["leg.B.L_Initial"]: CFrameValue;
				["leg.B.L_Original"]: CFrameValue;
				["leg.B.R_Composited"]: CFrameValue;
				["leg.B.R_Initial"]: CFrameValue;
				["leg.B.R_Original"]: CFrameValue;
				["leg.F.L_Composited"]: CFrameValue;
				["leg.F.L_Initial"]: CFrameValue;
				["leg.F.L_Original"]: CFrameValue;
				["leg.F.R_Composited"]: CFrameValue;
				["leg.F.R_Initial"]: CFrameValue;
				["leg.F.R_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				root_Initial: CFrameValue;
				root_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["tail.01_Original"]: CFrameValue;
			} & Folder;
		} & Model;
		Shoebill: {
			HumanoidRootPart: {
				root: {
					body: {
						["feet.L"]: Bone;
						["feet.R"]: Bone;
						["hair.01"]: Bone;
						["hair.02"]: Bone;
						["tail.01"]: Bone;
						["tail.02"]: Bone;
						["tail.03"]: Bone;
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
				["tail.03_Composited"]: CFrameValue;
				["tail.03_Initial"]: CFrameValue;
				["tail.03_Original"]: CFrameValue;
				["wing.L_Composited"]: CFrameValue;
				["wing.L_Initial"]: CFrameValue;
				["wing.L_Original"]: CFrameValue;
				["wing.R_Composited"]: CFrameValue;
				["wing.R_Initial"]: CFrameValue;
				["wing.R_Original"]: CFrameValue;
			} & Folder;
		} & Model;
		Skunk: {
			HumanoidRootPart: {
				root: {
					body: {
						["ear.L"]: Bone;
						["ear.R"]: Bone;
						["leg.B.L"]: Bone;
						["leg.B.R"]: Bone;
						["leg.F.L"]: Bone;
						["leg.F.R"]: Bone;
						["tail.01"]: {
							["tail.02"]: Bone;
						} & Bone;
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
				["ear.L_Composited"]: CFrameValue;
				["ear.L_Initial"]: CFrameValue;
				["ear.L_Original"]: CFrameValue;
				["ear.R_Composited"]: CFrameValue;
				["ear.R_Initial"]: CFrameValue;
				["ear.R_Original"]: CFrameValue;
				["leg.B.L_Composited"]: CFrameValue;
				["leg.B.L_Initial"]: CFrameValue;
				["leg.B.L_Original"]: CFrameValue;
				["leg.B.R_Composited"]: CFrameValue;
				["leg.B.R_Initial"]: CFrameValue;
				["leg.B.R_Original"]: CFrameValue;
				["leg.F.L_Composited"]: CFrameValue;
				["leg.F.L_Initial"]: CFrameValue;
				["leg.F.L_Original"]: CFrameValue;
				["leg.F.R_Composited"]: CFrameValue;
				["leg.F.R_Initial"]: CFrameValue;
				["leg.F.R_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				root_Initial: CFrameValue;
				root_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				["tail.02_Composited"]: CFrameValue;
				["tail.02_Initial"]: CFrameValue;
				["tail.02_Original"]: CFrameValue;
			} & Folder;
		} & Model;
		Sloth: {
			HumanoidRootPart: {
				root: {
					body: {
						["ear.L"]: Bone;
						["ear.R"]: Bone;
						["leg.B.L"]: Bone;
						["leg.B.R"]: Bone;
						["leg.F.L"]: Bone;
						["leg.F.R"]: Bone;
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
				["ear.L_Composited"]: CFrameValue;
				["ear.L_Initial"]: CFrameValue;
				["ear.L_Original"]: CFrameValue;
				["ear.R_Composited"]: CFrameValue;
				["ear.R_Initial"]: CFrameValue;
				["ear.R_Original"]: CFrameValue;
				["leg.B.L_Composited"]: CFrameValue;
				["leg.B.L_Initial"]: CFrameValue;
				["leg.B.L_Original"]: CFrameValue;
				["leg.B.R_Composited"]: CFrameValue;
				["leg.B.R_Initial"]: CFrameValue;
				["leg.B.R_Original"]: CFrameValue;
				["leg.F.L_Composited"]: CFrameValue;
				["leg.F.L_Initial"]: CFrameValue;
				["leg.F.L_Original"]: CFrameValue;
				["leg.F.R_Composited"]: CFrameValue;
				["leg.F.R_Initial"]: CFrameValue;
				["leg.F.R_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				root_Initial: CFrameValue;
				root_Original: CFrameValue;
			} & Folder;
		} & Model;
		Snake: {
			HumanoidRootPart: {
				root: {
					body: {
						["neck.01"]: {
							["neck.02"]: {
								head: Bone;
							} & Bone;
						} & Bone;
						["tail.01"]: {
							["tail.02"]: {
								["tail.03"]: Bone;
							} & Bone;
						} & Bone;
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
				head_Composited: CFrameValue;
				head_Initial: CFrameValue;
				head_Original: CFrameValue;
				["neck.01_Composited"]: CFrameValue;
				["neck.01_Initial"]: CFrameValue;
				["neck.01_Original"]: CFrameValue;
				["neck.02_Composited"]: CFrameValue;
				["neck.02_Initial"]: CFrameValue;
				["neck.02_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				root_Initial: CFrameValue;
				root_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				["tail.02_Composited"]: CFrameValue;
				["tail.02_Initial"]: CFrameValue;
				["tail.02_Original"]: CFrameValue;
				["tail.03_Composited"]: CFrameValue;
				["tail.03_Initial"]: CFrameValue;
				["tail.03_Original"]: CFrameValue;
			} & Folder;
		} & Model;
		SnappingTurtle: {
			HumanoidRootPart: {
				root: {
					body: {
						head: Bone;
						["leg.B.L"]: Bone;
						["leg.B.R"]: Bone;
						["leg.F.L"]: Bone;
						["leg.F.R"]: Bone;
						["tail.01"]: Bone;
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
				head_Composited: CFrameValue;
				head_Initial: CFrameValue;
				head_Original: CFrameValue;
				["leg.B.L_Composited"]: CFrameValue;
				["leg.B.L_Initial"]: CFrameValue;
				["leg.B.L_Original"]: CFrameValue;
				["leg.B.R_Composited"]: CFrameValue;
				["leg.B.R_Initial"]: CFrameValue;
				["leg.B.R_Original"]: CFrameValue;
				["leg.F.L_Composited"]: CFrameValue;
				["leg.F.L_Initial"]: CFrameValue;
				["leg.F.L_Original"]: CFrameValue;
				["leg.F.R_Composited"]: CFrameValue;
				["leg.F.R_Initial"]: CFrameValue;
				["leg.F.R_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				root_Initial: CFrameValue;
				root_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["tail.01_Original"]: CFrameValue;
			} & Folder;
		} & Model;
		SnowLeopard: {
			HumanoidRootPart: {
				root: {
					body: {
						["ear.L"]: Bone;
						["ear.R"]: Bone;
						["leg.B.L"]: Bone;
						["leg.B.R"]: Bone;
						["leg.F.L"]: Bone;
						["leg.F.R"]: Bone;
						["tail.01"]: {
							["tail.02"]: Bone;
						} & Bone;
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
				["ear.L_Composited"]: CFrameValue;
				["ear.L_Initial"]: CFrameValue;
				["ear.L_Original"]: CFrameValue;
				["ear.R_Composited"]: CFrameValue;
				["ear.R_Initial"]: CFrameValue;
				["ear.R_Original"]: CFrameValue;
				["leg.B.L_Composited"]: CFrameValue;
				["leg.B.L_Initial"]: CFrameValue;
				["leg.B.L_Original"]: CFrameValue;
				["leg.B.R_Composited"]: CFrameValue;
				["leg.B.R_Initial"]: CFrameValue;
				["leg.B.R_Original"]: CFrameValue;
				["leg.F.L_Composited"]: CFrameValue;
				["leg.F.L_Initial"]: CFrameValue;
				["leg.F.L_Original"]: CFrameValue;
				["leg.F.R_Composited"]: CFrameValue;
				["leg.F.R_Initial"]: CFrameValue;
				["leg.F.R_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				root_Initial: CFrameValue;
				root_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				["tail.02_Composited"]: CFrameValue;
				["tail.02_Initial"]: CFrameValue;
				["tail.02_Original"]: CFrameValue;
			} & Folder;
		} & Model;
		SnowOwl: {
			HumanoidRootPart: {
				root: {
					body: {
						["feet.L"]: Bone;
						["feet.R"]: Bone;
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
		SnowWeasel: {
			HumanoidRootPart: {
				root: {
					body: {
						["ear.L"]: Bone;
						["ear.R"]: Bone;
						["leg.B.L"]: Bone;
						["leg.B.R"]: Bone;
						["leg.F.L"]: Bone;
						["leg.F.R"]: Bone;
						["tail.01"]: {
							["tail.02"]: Bone;
						} & Bone;
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
				["ear.L_Composited"]: CFrameValue;
				["ear.L_Initial"]: CFrameValue;
				["ear.L_Original"]: CFrameValue;
				["ear.R_Composited"]: CFrameValue;
				["ear.R_Initial"]: CFrameValue;
				["ear.R_Original"]: CFrameValue;
				["leg.B.L_Composited"]: CFrameValue;
				["leg.B.L_Initial"]: CFrameValue;
				["leg.B.L_Original"]: CFrameValue;
				["leg.B.R_Composited"]: CFrameValue;
				["leg.B.R_Initial"]: CFrameValue;
				["leg.B.R_Original"]: CFrameValue;
				["leg.F.L_Composited"]: CFrameValue;
				["leg.F.L_Initial"]: CFrameValue;
				["leg.F.L_Original"]: CFrameValue;
				["leg.F.R_Composited"]: CFrameValue;
				["leg.F.R_Initial"]: CFrameValue;
				["leg.F.R_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				root_Initial: CFrameValue;
				root_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				["tail.02_Composited"]: CFrameValue;
				["tail.02_Initial"]: CFrameValue;
				["tail.02_Original"]: CFrameValue;
			} & Folder;
		} & Model;
		Sparrow: {
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
		Squid: {
			HumanoidRootPart: {
				root: {
					body: {
						["tail.01"]: Bone;
						["tentacle.01.L"]: Bone;
						["tentacle.01.R"]: Bone;
						["tentacle.02.L"]: Bone;
						["tentacle.02.R"]: Bone;
						["tentacle.03.L"]: Bone;
						["tentacle.03.R"]: Bone;
						["tentacle.04.L"]: Bone;
						["tentacle.04.R"]: Bone;
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
				root_Composited: CFrameValue;
				root_Initial: CFrameValue;
				root_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				["tentacle.01.L_Composited"]: CFrameValue;
				["tentacle.01.L_Initial"]: CFrameValue;
				["tentacle.01.L_Original"]: CFrameValue;
				["tentacle.01.R_Composited"]: CFrameValue;
				["tentacle.01.R_Initial"]: CFrameValue;
				["tentacle.01.R_Original"]: CFrameValue;
				["tentacle.02.L_Composited"]: CFrameValue;
				["tentacle.02.L_Initial"]: CFrameValue;
				["tentacle.02.L_Original"]: CFrameValue;
				["tentacle.02.R_Composited"]: CFrameValue;
				["tentacle.02.R_Initial"]: CFrameValue;
				["tentacle.02.R_Original"]: CFrameValue;
				["tentacle.03.L_Composited"]: CFrameValue;
				["tentacle.03.L_Initial"]: CFrameValue;
				["tentacle.03.L_Original"]: CFrameValue;
				["tentacle.03.R_Composited"]: CFrameValue;
				["tentacle.03.R_Initial"]: CFrameValue;
				["tentacle.03.R_Original"]: CFrameValue;
				["tentacle.04.L_Composited"]: CFrameValue;
				["tentacle.04.L_Initial"]: CFrameValue;
				["tentacle.04.L_Original"]: CFrameValue;
				["tentacle.04.R_Composited"]: CFrameValue;
				["tentacle.04.R_Initial"]: CFrameValue;
				["tentacle.04.R_Original"]: CFrameValue;
			} & Folder;
		} & Model;
		Squirrel: {
			HumanoidRootPart: {
				root: {
					body: {
						["ear.L"]: Bone;
						["ear.R"]: Bone;
						["leg.B.L"]: Bone;
						["leg.B.R"]: Bone;
						["leg.F.L"]: Bone;
						["leg.F.R"]: Bone;
						["tail.01"]: {
							["tail.02"]: Bone;
						} & Bone;
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
				["ear.L_Composited"]: CFrameValue;
				["ear.L_Initial"]: CFrameValue;
				["ear.L_Original"]: CFrameValue;
				["ear.R_Composited"]: CFrameValue;
				["ear.R_Initial"]: CFrameValue;
				["ear.R_Original"]: CFrameValue;
				["leg.B.L_Composited"]: CFrameValue;
				["leg.B.L_Initial"]: CFrameValue;
				["leg.B.L_Original"]: CFrameValue;
				["leg.B.R_Composited"]: CFrameValue;
				["leg.B.R_Initial"]: CFrameValue;
				["leg.B.R_Original"]: CFrameValue;
				["leg.F.L_Composited"]: CFrameValue;
				["leg.F.L_Initial"]: CFrameValue;
				["leg.F.L_Original"]: CFrameValue;
				["leg.F.R_Composited"]: CFrameValue;
				["leg.F.R_Initial"]: CFrameValue;
				["leg.F.R_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				root_Initial: CFrameValue;
				root_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				["tail.02_Composited"]: CFrameValue;
				["tail.02_Initial"]: CFrameValue;
				["tail.02_Original"]: CFrameValue;
			} & Folder;
		} & Model;
		Swan: {
			HumanoidRootPart: {
				root: {
					body: {
						["feet.L"]: Bone;
						["feet.R"]: Bone;
						["tail.01"]: Bone;
						["tail.02"]: Bone;
						["tail.03"]: Bone;
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
				root_Composited: CFrameValue;
				root_Initial: CFrameValue;
				root_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				["tail.02_Composited"]: CFrameValue;
				["tail.02_Initial"]: CFrameValue;
				["tail.02_Original"]: CFrameValue;
				["tail.03_Composited"]: CFrameValue;
				["tail.03_Initial"]: CFrameValue;
				["tail.03_Original"]: CFrameValue;
				["wing.L_Composited"]: CFrameValue;
				["wing.L_Initial"]: CFrameValue;
				["wing.L_Original"]: CFrameValue;
				["wing.R_Composited"]: CFrameValue;
				["wing.R_Initial"]: CFrameValue;
				["wing.R_Original"]: CFrameValue;
			} & Folder;
		} & Model;
		Taipan: {
			HumanoidRootPart: {
				root: {
					body: {
						["neck.01"]: {
							["neck.02"]: {
								head: Bone;
							} & Bone;
						} & Bone;
						["tail.01"]: {
							["tail.02"]: {
								["tail.03"]: Bone;
							} & Bone;
						} & Bone;
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
				head_Composited: CFrameValue;
				head_Initial: CFrameValue;
				head_Original: CFrameValue;
				["neck.01_Composited"]: CFrameValue;
				["neck.01_Initial"]: CFrameValue;
				["neck.01_Original"]: CFrameValue;
				["neck.02_Composited"]: CFrameValue;
				["neck.02_Initial"]: CFrameValue;
				["neck.02_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				root_Initial: CFrameValue;
				root_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				["tail.02_Composited"]: CFrameValue;
				["tail.02_Initial"]: CFrameValue;
				["tail.02_Original"]: CFrameValue;
				["tail.03_Composited"]: CFrameValue;
				["tail.03_Initial"]: CFrameValue;
				["tail.03_Original"]: CFrameValue;
			} & Folder;
		} & Model;
		Tapir: {
			HumanoidRootPart: {
				root: {
					body: {
						["ear.L"]: Bone;
						["ear.R"]: Bone;
						["leg.B.L"]: Bone;
						["leg.B.R"]: Bone;
						["leg.F.L"]: Bone;
						["leg.F.R"]: Bone;
						["tail.01"]: Bone;
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
				["ear.L_Composited"]: CFrameValue;
				["ear.L_Initial"]: CFrameValue;
				["ear.L_Original"]: CFrameValue;
				["ear.R_Composited"]: CFrameValue;
				["ear.R_Initial"]: CFrameValue;
				["ear.R_Original"]: CFrameValue;
				["leg.B.L_Composited"]: CFrameValue;
				["leg.B.L_Initial"]: CFrameValue;
				["leg.B.L_Original"]: CFrameValue;
				["leg.B.R_Composited"]: CFrameValue;
				["leg.B.R_Initial"]: CFrameValue;
				["leg.B.R_Original"]: CFrameValue;
				["leg.F.L_Composited"]: CFrameValue;
				["leg.F.L_Initial"]: CFrameValue;
				["leg.F.L_Original"]: CFrameValue;
				["leg.F.R_Composited"]: CFrameValue;
				["leg.F.R_Initial"]: CFrameValue;
				["leg.F.R_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				root_Initial: CFrameValue;
				root_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["tail.01_Original"]: CFrameValue;
			} & Folder;
		} & Model;
		TasmanianDevil: {
			HumanoidRootPart: {
				root: {
					body: {
						["ear.L"]: Bone;
						["ear.R"]: Bone;
						["leg.B.L"]: Bone;
						["leg.B.R"]: Bone;
						["leg.F.L"]: Bone;
						["leg.F.R"]: Bone;
						["tail.01"]: {
							["tail.02"]: Bone;
						} & Bone;
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
				["ear.L_Composited"]: CFrameValue;
				["ear.L_Initial"]: CFrameValue;
				["ear.L_Original"]: CFrameValue;
				["ear.R_Composited"]: CFrameValue;
				["ear.R_Initial"]: CFrameValue;
				["ear.R_Original"]: CFrameValue;
				["leg.B.L_Composited"]: CFrameValue;
				["leg.B.L_Initial"]: CFrameValue;
				["leg.B.L_Original"]: CFrameValue;
				["leg.B.R_Composited"]: CFrameValue;
				["leg.B.R_Initial"]: CFrameValue;
				["leg.B.R_Original"]: CFrameValue;
				["leg.F.L_Composited"]: CFrameValue;
				["leg.F.L_Initial"]: CFrameValue;
				["leg.F.L_Original"]: CFrameValue;
				["leg.F.R_Composited"]: CFrameValue;
				["leg.F.R_Initial"]: CFrameValue;
				["leg.F.R_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				root_Initial: CFrameValue;
				root_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				["tail.02_Composited"]: CFrameValue;
				["tail.02_Initial"]: CFrameValue;
				["tail.02_Original"]: CFrameValue;
			} & Folder;
		} & Model;
		Tiger: {
			HumanoidRootPart: {
				root: {
					body: {
						["ear.L"]: Bone;
						["ear.R"]: Bone;
						["leg.B.L"]: Bone;
						["leg.B.R"]: Bone;
						["leg.F.L"]: Bone;
						["leg.F.R"]: Bone;
						["tail.01"]: {
							["tail.02"]: Bone;
						} & Bone;
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
				["ear.L_Composited"]: CFrameValue;
				["ear.L_Initial"]: CFrameValue;
				["ear.L_Original"]: CFrameValue;
				["ear.R_Composited"]: CFrameValue;
				["ear.R_Initial"]: CFrameValue;
				["ear.R_Original"]: CFrameValue;
				["leg.B.L_Composited"]: CFrameValue;
				["leg.B.L_Initial"]: CFrameValue;
				["leg.B.L_Original"]: CFrameValue;
				["leg.B.R_Composited"]: CFrameValue;
				["leg.B.R_Initial"]: CFrameValue;
				["leg.B.R_Original"]: CFrameValue;
				["leg.F.L_Composited"]: CFrameValue;
				["leg.F.L_Initial"]: CFrameValue;
				["leg.F.L_Original"]: CFrameValue;
				["leg.F.R_Composited"]: CFrameValue;
				["leg.F.R_Initial"]: CFrameValue;
				["leg.F.R_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				root_Initial: CFrameValue;
				root_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				["tail.02_Composited"]: CFrameValue;
				["tail.02_Initial"]: CFrameValue;
				["tail.02_Original"]: CFrameValue;
			} & Folder;
		} & Model;
		Tortoise: {
			HumanoidRootPart: {
				root: {
					body: {
						["leg.B.L"]: Bone;
						["leg.B.R"]: Bone;
						["leg.F.L"]: Bone;
						["leg.F.R"]: Bone;
						["tail.01"]: Bone;
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
				["leg.B.L_Composited"]: CFrameValue;
				["leg.B.L_Initial"]: CFrameValue;
				["leg.B.L_Original"]: CFrameValue;
				["leg.B.R_Composited"]: CFrameValue;
				["leg.B.R_Initial"]: CFrameValue;
				["leg.B.R_Original"]: CFrameValue;
				["leg.F.L_Composited"]: CFrameValue;
				["leg.F.L_Initial"]: CFrameValue;
				["leg.F.L_Original"]: CFrameValue;
				["leg.F.R_Composited"]: CFrameValue;
				["leg.F.R_Initial"]: CFrameValue;
				["leg.F.R_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				root_Initial: CFrameValue;
				root_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["tail.01_Original"]: CFrameValue;
			} & Folder;
		} & Model;
		Toucan: {
			HumanoidRootPart: {
				root: {
					body: {
						["feet.L"]: Bone;
						["feet.R"]: Bone;
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
		Tuna: {
			HumanoidRootPart: {
				root: {
					body: {
						["fin.01"]: Bone;
						["fin.02"]: Bone;
						["fin.03"]: Bone;
						["fin.04"]: Bone;
						["fin.L"]: Bone;
						["fin.R"]: Bone;
						["tail.01"]: Bone;
						["tail.02"]: Bone;
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
				["fin.01_Composited"]: CFrameValue;
				["fin.01_Initial"]: CFrameValue;
				["fin.01_Original"]: CFrameValue;
				["fin.02_Composited"]: CFrameValue;
				["fin.02_Initial"]: CFrameValue;
				["fin.02_Original"]: CFrameValue;
				["fin.03_Composited"]: CFrameValue;
				["fin.03_Initial"]: CFrameValue;
				["fin.03_Original"]: CFrameValue;
				["fin.04_Composited"]: CFrameValue;
				["fin.04_Initial"]: CFrameValue;
				["fin.04_Original"]: CFrameValue;
				["fin.L_Composited"]: CFrameValue;
				["fin.L_Initial"]: CFrameValue;
				["fin.L_Original"]: CFrameValue;
				["fin.R_Composited"]: CFrameValue;
				["fin.R_Initial"]: CFrameValue;
				["fin.R_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				root_Initial: CFrameValue;
				root_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				["tail.02_Composited"]: CFrameValue;
				["tail.02_Initial"]: CFrameValue;
				["tail.02_Original"]: CFrameValue;
			} & Folder;
		} & Model;
		Turkey: {
			HumanoidRootPart: {
				root: {
					body: {
						["feet.L"]: Bone;
						["feet.R"]: Bone;
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
		Turtle: {
			HumanoidRootPart: {
				root: {
					body: {
						["leg.B.L"]: {
							["leg.B.L.02"]: Bone;
						} & Bone;
						["leg.B.R"]: {
							["leg.B.R.02"]: Bone;
						} & Bone;
						["leg.F.L"]: {
							["leg.F.L.02"]: Bone;
						} & Bone;
						["leg.F.R"]: {
							["leg.F.R.02"]: Bone;
						} & Bone;
						["tail.01"]: Bone;
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
				["leg.B.L.02_Composited"]: CFrameValue;
				["leg.B.L.02_Initial"]: CFrameValue;
				["leg.B.L.02_Original"]: CFrameValue;
				["leg.B.L_Composited"]: CFrameValue;
				["leg.B.L_Initial"]: CFrameValue;
				["leg.B.L_Original"]: CFrameValue;
				["leg.B.R.02_Composited"]: CFrameValue;
				["leg.B.R.02_Initial"]: CFrameValue;
				["leg.B.R.02_Original"]: CFrameValue;
				["leg.B.R_Composited"]: CFrameValue;
				["leg.B.R_Initial"]: CFrameValue;
				["leg.B.R_Original"]: CFrameValue;
				["leg.F.L.02_Composited"]: CFrameValue;
				["leg.F.L.02_Initial"]: CFrameValue;
				["leg.F.L.02_Original"]: CFrameValue;
				["leg.F.L_Composited"]: CFrameValue;
				["leg.F.L_Initial"]: CFrameValue;
				["leg.F.L_Original"]: CFrameValue;
				["leg.F.R.02_Composited"]: CFrameValue;
				["leg.F.R.02_Initial"]: CFrameValue;
				["leg.F.R.02_Original"]: CFrameValue;
				["leg.F.R_Composited"]: CFrameValue;
				["leg.F.R_Initial"]: CFrameValue;
				["leg.F.R_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				root_Initial: CFrameValue;
				root_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["tail.01_Original"]: CFrameValue;
			} & Folder;
		} & Model;
		Vulture: {
			HumanoidRootPart: {
				root: {
					body: {
						["feet.L"]: Bone;
						["feet.R"]: Bone;
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
		Walrus: {
			HumanoidRootPart: {
				root: {
					body: {
						["leg.B.L"]: Bone;
						["leg.B.R"]: Bone;
						["leg.F.L"]: Bone;
						["leg.F.R"]: Bone;
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
				["leg.B.L_Composited"]: CFrameValue;
				["leg.B.L_Initial"]: CFrameValue;
				["leg.B.L_Original"]: CFrameValue;
				["leg.B.R_Composited"]: CFrameValue;
				["leg.B.R_Initial"]: CFrameValue;
				["leg.B.R_Original"]: CFrameValue;
				["leg.F.L_Composited"]: CFrameValue;
				["leg.F.L_Initial"]: CFrameValue;
				["leg.F.L_Original"]: CFrameValue;
				["leg.F.R_Composited"]: CFrameValue;
				["leg.F.R_Initial"]: CFrameValue;
				["leg.F.R_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				root_Initial: CFrameValue;
				root_Original: CFrameValue;
			} & Folder;
		} & Model;
		Whale: {
			HumanoidRootPart: {
				root: {
					body: {
						["fin.L"]: Bone;
						["fin.R"]: Bone;
						["tail.01"]: {
							["tail.02"]: Bone;
						} & Bone;
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
				["fin.L_Composited"]: CFrameValue;
				["fin.L_Initial"]: CFrameValue;
				["fin.L_Original"]: CFrameValue;
				["fin.R_Composited"]: CFrameValue;
				["fin.R_Initial"]: CFrameValue;
				["fin.R_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				root_Initial: CFrameValue;
				root_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				["tail.02_Composited"]: CFrameValue;
				["tail.02_Initial"]: CFrameValue;
				["tail.02_Original"]: CFrameValue;
			} & Folder;
		} & Model;
		Wildebeest: {
			HumanoidRootPart: {
				root: {
					body: {
						["ear.L"]: Bone;
						["ear.R"]: Bone;
						["leg.B.L"]: Bone;
						["leg.B.R"]: Bone;
						["leg.F.L"]: Bone;
						["leg.F.R"]: Bone;
						["tail.01"]: {
							["tail.02"]: Bone;
						} & Bone;
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
				["ear.L_Composited"]: CFrameValue;
				["ear.L_Initial"]: CFrameValue;
				["ear.L_Original"]: CFrameValue;
				["ear.R_Composited"]: CFrameValue;
				["ear.R_Initial"]: CFrameValue;
				["ear.R_Original"]: CFrameValue;
				["leg.B.L_Composited"]: CFrameValue;
				["leg.B.L_Initial"]: CFrameValue;
				["leg.B.L_Original"]: CFrameValue;
				["leg.B.R_Composited"]: CFrameValue;
				["leg.B.R_Initial"]: CFrameValue;
				["leg.B.R_Original"]: CFrameValue;
				["leg.F.L_Composited"]: CFrameValue;
				["leg.F.L_Initial"]: CFrameValue;
				["leg.F.L_Original"]: CFrameValue;
				["leg.F.R_Composited"]: CFrameValue;
				["leg.F.R_Initial"]: CFrameValue;
				["leg.F.R_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				root_Initial: CFrameValue;
				root_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				["tail.02_Composited"]: CFrameValue;
				["tail.02_Initial"]: CFrameValue;
				["tail.02_Original"]: CFrameValue;
			} & Folder;
		} & Model;
		Wolf: {
			HumanoidRootPart: {
				root: {
					body: {
						["ear.L"]: Bone;
						["ear.R"]: Bone;
						["leg.B.L"]: Bone;
						["leg.B.R"]: Bone;
						["leg.F.L"]: Bone;
						["leg.F.R"]: Bone;
						["tail.01"]: {
							["tail.02"]: Bone;
						} & Bone;
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
				["ear.L_Composited"]: CFrameValue;
				["ear.L_Initial"]: CFrameValue;
				["ear.L_Original"]: CFrameValue;
				["ear.R_Composited"]: CFrameValue;
				["ear.R_Initial"]: CFrameValue;
				["ear.R_Original"]: CFrameValue;
				["leg.B.L_Composited"]: CFrameValue;
				["leg.B.L_Initial"]: CFrameValue;
				["leg.B.L_Original"]: CFrameValue;
				["leg.B.R_Composited"]: CFrameValue;
				["leg.B.R_Initial"]: CFrameValue;
				["leg.B.R_Original"]: CFrameValue;
				["leg.F.L_Composited"]: CFrameValue;
				["leg.F.L_Initial"]: CFrameValue;
				["leg.F.L_Original"]: CFrameValue;
				["leg.F.R_Composited"]: CFrameValue;
				["leg.F.R_Initial"]: CFrameValue;
				["leg.F.R_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				root_Initial: CFrameValue;
				root_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				["tail.02_Composited"]: CFrameValue;
				["tail.02_Initial"]: CFrameValue;
				["tail.02_Original"]: CFrameValue;
			} & Folder;
		} & Model;
		Wombat: {
			HumanoidRootPart: {
				root: {
					body: {
						["ear.L"]: Bone;
						["ear.R"]: Bone;
						["leg.B.L"]: Bone;
						["leg.B.R"]: Bone;
						["leg.F.L"]: Bone;
						["leg.F.R"]: Bone;
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
				["ear.L_Composited"]: CFrameValue;
				["ear.L_Initial"]: CFrameValue;
				["ear.L_Original"]: CFrameValue;
				["ear.R_Composited"]: CFrameValue;
				["ear.R_Initial"]: CFrameValue;
				["ear.R_Original"]: CFrameValue;
				["leg.B.L_Composited"]: CFrameValue;
				["leg.B.L_Initial"]: CFrameValue;
				["leg.B.L_Original"]: CFrameValue;
				["leg.B.R_Composited"]: CFrameValue;
				["leg.B.R_Initial"]: CFrameValue;
				["leg.B.R_Original"]: CFrameValue;
				["leg.F.L_Composited"]: CFrameValue;
				["leg.F.L_Initial"]: CFrameValue;
				["leg.F.L_Original"]: CFrameValue;
				["leg.F.R_Composited"]: CFrameValue;
				["leg.F.R_Initial"]: CFrameValue;
				["leg.F.R_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				root_Initial: CFrameValue;
				root_Original: CFrameValue;
			} & Folder;
		} & Model;
		Wyvern: {
			HumanoidRootPart: {
				root: {
					body: {
						["feet.L"]: Bone;
						["feet.R"]: Bone;
						["tail.01"]: {
							["tail.02"]: Bone;
						} & Bone;
						["wing.L"]: {
							["wing.01.L"]: Bone;
						} & Bone;
						["wing.R"]: {
							["wing.01.R"]: Bone;
						} & Bone;
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
				root_Composited: CFrameValue;
				root_Initial: CFrameValue;
				root_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				["tail.02_Composited"]: CFrameValue;
				["tail.02_Initial"]: CFrameValue;
				["tail.02_Original"]: CFrameValue;
				["wing.01.L_Composited"]: CFrameValue;
				["wing.01.L_Initial"]: CFrameValue;
				["wing.01.L_Original"]: CFrameValue;
				["wing.01.R_Composited"]: CFrameValue;
				["wing.01.R_Initial"]: CFrameValue;
				["wing.01.R_Original"]: CFrameValue;
				["wing.L_Composited"]: CFrameValue;
				["wing.L_Initial"]: CFrameValue;
				["wing.L_Original"]: CFrameValue;
				["wing.R_Composited"]: CFrameValue;
				["wing.R_Initial"]: CFrameValue;
				["wing.R_Original"]: CFrameValue;
			} & Folder;
		} & Model;
		Zebra: {
			HumanoidRootPart: {
				root: {
					body: {
						["ear.L"]: Bone;
						["ear.R"]: Bone;
						["leg.B.L"]: Bone;
						["leg.B.R"]: Bone;
						["leg.F.L"]: Bone;
						["leg.F.R"]: Bone;
						["tail.01"]: {
							["tail.02"]: Bone;
						} & Bone;
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
				["ear.L_Composited"]: CFrameValue;
				["ear.L_Initial"]: CFrameValue;
				["ear.L_Original"]: CFrameValue;
				["ear.R_Composited"]: CFrameValue;
				["ear.R_Initial"]: CFrameValue;
				["ear.R_Original"]: CFrameValue;
				["leg.B.L_Composited"]: CFrameValue;
				["leg.B.L_Initial"]: CFrameValue;
				["leg.B.L_Original"]: CFrameValue;
				["leg.B.R_Composited"]: CFrameValue;
				["leg.B.R_Initial"]: CFrameValue;
				["leg.B.R_Original"]: CFrameValue;
				["leg.F.L_Composited"]: CFrameValue;
				["leg.F.L_Initial"]: CFrameValue;
				["leg.F.L_Original"]: CFrameValue;
				["leg.F.R_Composited"]: CFrameValue;
				["leg.F.R_Initial"]: CFrameValue;
				["leg.F.R_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				root_Initial: CFrameValue;
				root_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				["tail.02_Composited"]: CFrameValue;
				["tail.02_Initial"]: CFrameValue;
				["tail.02_Original"]: CFrameValue;
			} & Folder;
		} & Model;
	} & Folder;
	Spawn: {
		Decal: Decal;
	} & SpawnLocation;
	WedgeTest: Model;
}
