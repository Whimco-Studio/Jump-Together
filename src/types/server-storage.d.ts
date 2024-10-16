interface ServerStorage extends Instance {
	["Imported Bundles"]: Folder & {
		["302630 - BIG Head"]: Model & {
			RightArm: Model & {
				R15Fixed: Folder & {
					RightLowerArm: MeshPart & {
						RightLowerArmWrapTarget: WrapTarget;
						RightWristRigAttachment: Attachment;
						SurfaceAppearance: SurfaceAppearance;
						RightElbowRigAttachment: Attachment;
						AvatarPartScaleType: StringValue;
					};
					RightUpperArm: MeshPart & {
						RightUpperArmWrapTarget: WrapTarget;
						RightElbowRigAttachment: Attachment;
						SurfaceAppearance: SurfaceAppearance;
						RightShoulderRigAttachment: Attachment;
						RightShoulderAttachment: Attachment;
						AvatarPartScaleType: StringValue;
					};
					RightHand: MeshPart & {
						RightGripAttachment: Attachment;
						RightWristRigAttachment: Attachment;
						SurfaceAppearance: SurfaceAppearance;
						AvatarPartScaleType: StringValue;
						RightHandWrapTarget: WrapTarget;
					};
				};
				R15ArtistIntent: Folder & {
					RightLowerArm: MeshPart & {
						RightLowerArmWrapTarget: WrapTarget;
						RightWristRigAttachment: Attachment;
						SurfaceAppearance: SurfaceAppearance;
						RightElbowRigAttachment: Attachment;
						AvatarPartScaleType: StringValue;
					};
					RightUpperArm: MeshPart & {
						RightUpperArmWrapTarget: WrapTarget;
						RightElbowRigAttachment: Attachment;
						SurfaceAppearance: SurfaceAppearance;
						RightShoulderRigAttachment: Attachment;
						RightShoulderAttachment: Attachment;
						AvatarPartScaleType: StringValue;
					};
					RightHand: MeshPart & {
						RightGripAttachment: Attachment;
						RightWristRigAttachment: Attachment;
						SurfaceAppearance: SurfaceAppearance;
						AvatarPartScaleType: StringValue;
						RightHandWrapTarget: WrapTarget;
					};
				};
				R6: Folder;
			};
			["16118094842"]: Model & {
				Mesh: SpecialMesh & {
					HatAttachment: Vector3Value;
					NeckRigAttachment: Vector3Value;
					HairAttachment: Vector3Value;
					FaceFrontAttachment: Vector3Value;
					FaceCenterAttachment: Vector3Value;
				};
			};
			LeftArm: Model & {
				R15Fixed: Folder & {
					LeftUpperArm: MeshPart & {
						LeftShoulderRigAttachment: Attachment;
						LeftUpperArmWrapTarget: WrapTarget;
						LeftShoulderAttachment: Attachment;
						LeftElbowRigAttachment: Attachment;
						SurfaceAppearance: SurfaceAppearance;
						AvatarPartScaleType: StringValue;
					};
					LeftLowerArm: MeshPart & {
						SurfaceAppearance: SurfaceAppearance;
						LeftElbowRigAttachment: Attachment;
						LeftLowerArmWrapTarget: WrapTarget;
						AvatarPartScaleType: StringValue;
						LeftWristRigAttachment: Attachment;
					};
					LeftHand: MeshPart & {
						AvatarPartScaleType: StringValue;
						SurfaceAppearance: SurfaceAppearance;
						LeftGripAttachment: Attachment;
						LeftHandWrapTarget: WrapTarget;
						LeftWristRigAttachment: Attachment;
					};
				};
				R15ArtistIntent: Folder & {
					LeftUpperArm: MeshPart & {
						LeftShoulderRigAttachment: Attachment;
						LeftUpperArmWrapTarget: WrapTarget;
						LeftShoulderAttachment: Attachment;
						LeftElbowRigAttachment: Attachment;
						SurfaceAppearance: SurfaceAppearance;
						AvatarPartScaleType: StringValue;
					};
					LeftLowerArm: MeshPart & {
						SurfaceAppearance: SurfaceAppearance;
						LeftElbowRigAttachment: Attachment;
						LeftLowerArmWrapTarget: WrapTarget;
						AvatarPartScaleType: StringValue;
						LeftWristRigAttachment: Attachment;
					};
					LeftHand: MeshPart & {
						AvatarPartScaleType: StringValue;
						SurfaceAppearance: SurfaceAppearance;
						LeftGripAttachment: Attachment;
						LeftHandWrapTarget: WrapTarget;
						LeftWristRigAttachment: Attachment;
					};
				};
				R6: Folder;
			};
			RightLeg: Model & {
				R15Fixed: Folder & {
					RightLowerLeg: MeshPart & {
						RightKneeRigAttachment: Attachment;
						RightAnkleRigAttachment: Attachment;
						RightLowerLegWrapTarget: WrapTarget;
						AvatarPartScaleType: StringValue;
					};
					RightUpperLeg: MeshPart & {
						RightKneeRigAttachment: Attachment;
						AvatarPartScaleType: StringValue;
						RightUpperLegWrapTarget: WrapTarget;
						RightHipRigAttachment: Attachment;
					};
					RightFoot: MeshPart & {
						RightFootWrapTarget: WrapTarget;
						RightAnkleRigAttachment: Attachment;
						RightFootAttachment: Attachment;
						AvatarPartScaleType: StringValue;
					};
				};
				R15ArtistIntent: Folder & {
					RightLowerLeg: MeshPart & {
						RightKneeRigAttachment: Attachment;
						RightAnkleRigAttachment: Attachment;
						RightLowerLegWrapTarget: WrapTarget;
						AvatarPartScaleType: StringValue;
					};
					RightUpperLeg: MeshPart & {
						RightKneeRigAttachment: Attachment;
						AvatarPartScaleType: StringValue;
						RightUpperLegWrapTarget: WrapTarget;
						RightHipRigAttachment: Attachment;
					};
					RightFoot: MeshPart & {
						RightFootWrapTarget: WrapTarget;
						RightAnkleRigAttachment: Attachment;
						RightFootAttachment: Attachment;
						AvatarPartScaleType: StringValue;
					};
				};
				R6: Folder;
			};
			Torso: Model & {
				R15Fixed: Folder & {
					LowerTorso: MeshPart & {
						LowerTorsoWrapTarget: WrapTarget;
						LeftHipRigAttachment: Attachment;
						WaistFrontAttachment: Attachment;
						RootRigAttachment: Attachment;
						RightHipRigAttachment: Attachment;
						WaistCenterAttachment: Attachment;
						WaistRigAttachment: Attachment;
						WaistBackAttachment: Attachment;
						AvatarPartScaleType: StringValue;
					};
					UpperTorso: MeshPart & {
						LeftShoulderRigAttachment: Attachment;
						BodyBackAttachment: Attachment;
						NeckRigAttachment: Attachment;
						RightShoulderRigAttachment: Attachment;
						UpperTorsoWrapTarget: WrapTarget;
						RightCollarAttachment: Attachment;
						NeckAttachment: Attachment;
						BodyFrontAttachment: Attachment;
						WaistRigAttachment: Attachment;
						LeftCollarAttachment: Attachment;
						AvatarPartScaleType: StringValue;
					};
				};
				R15ArtistIntent: Folder & {
					LowerTorso: MeshPart & {
						LowerTorsoWrapTarget: WrapTarget;
						LeftHipRigAttachment: Attachment;
						WaistFrontAttachment: Attachment;
						RootRigAttachment: Attachment;
						RightHipRigAttachment: Attachment;
						WaistCenterAttachment: Attachment;
						WaistRigAttachment: Attachment;
						WaistBackAttachment: Attachment;
						AvatarPartScaleType: StringValue;
					};
					UpperTorso: MeshPart & {
						LeftShoulderRigAttachment: Attachment;
						BodyBackAttachment: Attachment;
						NeckRigAttachment: Attachment;
						RightShoulderRigAttachment: Attachment;
						UpperTorsoWrapTarget: WrapTarget;
						RightCollarAttachment: Attachment;
						NeckAttachment: Attachment;
						BodyFrontAttachment: Attachment;
						WaistRigAttachment: Attachment;
						LeftCollarAttachment: Attachment;
						AvatarPartScaleType: StringValue;
					};
				};
				R6: Folder;
			};
			["14618207727"]: Model & {
				R15Anim: Folder & {
					mood: StringValue & {
						Animation1: Animation;
					};
				};
			};
			LeftLeg: Model & {
				R15Fixed: Folder & {
					LeftFoot: MeshPart & {
						LeftFootWrapTarget: WrapTarget;
						LeftFootAttachment: Attachment;
						LeftAnkleRigAttachment: Attachment;
						AvatarPartScaleType: StringValue;
					};
					LeftUpperLeg: MeshPart & {
						AvatarPartScaleType: StringValue;
						LeftUpperLegWrapTarget: WrapTarget;
						LeftHipRigAttachment: Attachment;
						LeftKneeRigAttachment: Attachment;
					};
					LeftLowerLeg: MeshPart & {
						AvatarPartScaleType: StringValue;
						LeftKneeRigAttachment: Attachment;
						LeftAnkleRigAttachment: Attachment;
						LeftLowerLegWrapTarget: WrapTarget;
					};
				};
				R15ArtistIntent: Folder & {
					LeftFoot: MeshPart & {
						LeftFootWrapTarget: WrapTarget;
						LeftFootAttachment: Attachment;
						LeftAnkleRigAttachment: Attachment;
						AvatarPartScaleType: StringValue;
					};
					LeftUpperLeg: MeshPart & {
						AvatarPartScaleType: StringValue;
						LeftUpperLegWrapTarget: WrapTarget;
						LeftHipRigAttachment: Attachment;
						LeftKneeRigAttachment: Attachment;
					};
					LeftLowerLeg: MeshPart & {
						AvatarPartScaleType: StringValue;
						LeftKneeRigAttachment: Attachment;
						LeftAnkleRigAttachment: Attachment;
						LeftLowerLegWrapTarget: WrapTarget;
					};
				};
				R6: Folder;
			};
		};
	};
	Highlight: Highlight;
	__Rojo_SessionLock: ObjectValue;
	ButtonPathways: Folder & {
		CloudHop: Folder;
	};
	["Plug-in"]: ScreenGui & {
		Height: ImageLabel & {
			TextBox: TextBox;
			TextLabel: TextLabel;
			UIAspectRatioConstraint: UIAspectRatioConstraint;
		};
		Meters: Frame & {
			UIListLayout: UIListLayout;
			HeightValue: Frame & {
				Height: ImageLabel & {
					UIAspectRatioConstraint: UIAspectRatioConstraint;
					TextLabel: TextLabel;
				};
				UIListLayout: UIListLayout;
				Clamper: Frame & {
					TextLabel: TextLabel;
				};
			};
		};
	};
	TagList: Folder & {
		Obstacles_DeathZone: Configuration;
		Game_LobbyConfiguration: Configuration;
		Replicator_DrawBridge: Configuration;
		Visuals_Quirkymal: Configuration;
		Replicator_Crown: Configuration;
		Obstacles_Checkpoint: Configuration;
		Obstacles_Booster: Configuration;
		Game_Lobby: Configuration;
		Game_CharacterQueue: Configuration;
		Obstacles_Bouncer: Configuration;
		Obstacles_TipToeTile: Configuration;
		Obstacles_Glove: Configuration;
		Replicator_AddBalloon: Configuration;
		Physics_SpinningPlatform: Configuration;
		Physics_PlatformStand: Configuration;
		Obstacles_Shooter: Configuration;
		Obstacles_Wind: Configuration;
		Physics_AddBalloon: Configuration;
		Replicator_Door: Configuration;
		Obstacles_BalloonBarrier: Configuration;
		Visuals_GoldenBalloon: Configuration;
		Visuals_Cloud: Configuration;
		Replicator_Checkpoint: Configuration;
		Obstacles_Fan: Configuration;
		Visuals_CharacterQueue: Configuration;
		Physics_AntiGravity: Configuration;
		Visuals_Dizzy: Configuration;
		Obstacles_DrawBridge: Configuration;
		Visuals_Button: Configuration;
		Physics_StayAwake: Configuration;
		Replicator_Button: Configuration;
		Obstacles_Ground: Configuration;
		Game_Crown: Configuration;
		Obstacles_Bumper: Configuration;
		Visuals_Sway: Configuration;
		Obstacles_YSpin: Configuration;
		Obstacles_Hammer: Configuration;
		Replicator_TipToeTiles: Configuration;
		Obstacles_Treadmill: Configuration;
	};
	Quirkymals: Folder & {
		Snake: Model & {
			Humanoid: Humanoid & {
				Animator: Animator;
			};
			HumanoidRootPart: MeshPart & {
				root: Bone & {
					body: Bone & {
						["neck.01"]: Bone & {
							["neck.02"]: Bone & {
								head: Bone;
							};
						};
						["tail.01"]: Bone & {
							["tail.02"]: Bone & {
								["tail.03"]: Bone;
							};
						};
					};
				};
			};
			InitialPoses: Folder & {
				head_Original: CFrameValue;
				Mesh_Initial: CFrameValue;
				["tail.03_Initial"]: CFrameValue;
				body_Original: CFrameValue;
				["neck.02_Initial"]: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				head_Initial: CFrameValue;
				["tail.03_Composited"]: CFrameValue;
				["neck.01_Initial"]: CFrameValue;
				Mesh_Original: CFrameValue;
				Mesh_Composited: CFrameValue;
				["neck.01_Composited"]: CFrameValue;
				["neck.01_Original"]: CFrameValue;
				body_Composited: CFrameValue;
				["neck.02_Composited"]: CFrameValue;
				["neck.02_Original"]: CFrameValue;
				root_Initial: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				head_Composited: CFrameValue;
				body_Initial: CFrameValue;
				Rig_Composited: CFrameValue;
				root_Original: CFrameValue;
				Rig_Initial: CFrameValue;
				["tail.02_Initial"]: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				["tail.03_Original"]: CFrameValue;
				["tail.02_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				["tail.02_Composited"]: CFrameValue;
				Rig_Original: CFrameValue;
			};
		};
		Flamingo: Model & {
			Humanoid: Humanoid & {
				Animator: Animator;
			};
			HumanoidRootPart: MeshPart & {
				root: Bone & {
					body: Bone & {
						["feet.R"]: Bone;
						["wing.R"]: Bone;
						["tail.01"]: Bone;
						["feet.L"]: Bone;
						["tail.03"]: Bone;
						["wing.L"]: Bone;
						["tail.02"]: Bone;
					};
				};
			};
			InitialPoses: Folder & {
				Mesh_Initial: CFrameValue;
				["feet.L_Composited"]: CFrameValue;
				Mesh_Original: CFrameValue;
				root_Initial: CFrameValue;
				Mesh_Composited: CFrameValue;
				body_Initial: CFrameValue;
				["wing.L_Composited"]: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				["tail.03_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				["tail.02_Initial"]: CFrameValue;
				["wing.L_Original"]: CFrameValue;
				["feet.R_Original"]: CFrameValue;
				["feet.R_Initial"]: CFrameValue;
				body_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["tail.03_Composited"]: CFrameValue;
				["wing.R_Composited"]: CFrameValue;
				["wing.L_Initial"]: CFrameValue;
				["feet.R_Composited"]: CFrameValue;
				body_Composited: CFrameValue;
				["wing.R_Original"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				Rig_Composited: CFrameValue;
				["feet.L_Original"]: CFrameValue;
				Rig_Initial: CFrameValue;
				["tail.03_Initial"]: CFrameValue;
				["feet.L_Initial"]: CFrameValue;
				["wing.R_Initial"]: CFrameValue;
				["tail.02_Original"]: CFrameValue;
				root_Original: CFrameValue;
				["tail.02_Composited"]: CFrameValue;
				Rig_Original: CFrameValue;
			};
		};
		Hornbill: Model & {
			Humanoid: Humanoid & {
				Animator: Animator;
			};
			HumanoidRootPart: MeshPart & {
				root: Bone & {
					body: Bone & {
						["feet.R"]: Bone;
						["tail.01"]: Bone;
						["feet.L"]: Bone;
						["wing.R"]: Bone;
						["wing.L"]: Bone;
						["tail.02"]: Bone;
					};
				};
			};
			InitialPoses: Folder & {
				Mesh_Initial: CFrameValue;
				["feet.R_Original"]: CFrameValue;
				["feet.R_Initial"]: CFrameValue;
				body_Original: CFrameValue;
				["feet.L_Composited"]: CFrameValue;
				["tail.02_Initial"]: CFrameValue;
				Mesh_Composited: CFrameValue;
				Mesh_Original: CFrameValue;
				["wing.R_Composited"]: CFrameValue;
				["wing.L_Initial"]: CFrameValue;
				["feet.L_Original"]: CFrameValue;
				["feet.R_Composited"]: CFrameValue;
				["wing.L_Original"]: CFrameValue;
				body_Composited: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["wing.R_Original"]: CFrameValue;
				root_Initial: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				root_Original: CFrameValue;
				body_Initial: CFrameValue;
				Rig_Composited: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				Rig_Initial: CFrameValue;
				["wing.L_Composited"]: CFrameValue;
				["feet.L_Initial"]: CFrameValue;
				["wing.R_Initial"]: CFrameValue;
				["tail.02_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				["tail.02_Composited"]: CFrameValue;
				Rig_Original: CFrameValue;
			};
		};
		Owl: Model & {
			Humanoid: Humanoid & {
				Animator: Animator;
			};
			HumanoidRootPart: MeshPart & {
				root: Bone & {
					body: Bone & {
						["feet.R"]: Bone;
						["tail.01"]: Bone;
						["feet.L"]: Bone;
						["tail.02"]: Bone;
						["wing.R"]: Bone;
						["wing.L"]: Bone;
					};
				};
			};
			InitialPoses: Folder & {
				Mesh_Initial: CFrameValue;
				["feet.R_Original"]: CFrameValue;
				["feet.R_Initial"]: CFrameValue;
				body_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["feet.L_Original"]: CFrameValue;
				Mesh_Composited: CFrameValue;
				Mesh_Original: CFrameValue;
				["wing.R_Composited"]: CFrameValue;
				["wing.L_Initial"]: CFrameValue;
				["feet.L_Initial"]: CFrameValue;
				["feet.R_Composited"]: CFrameValue;
				["feet.L_Composited"]: CFrameValue;
				body_Composited: CFrameValue;
				["tail.02_Initial"]: CFrameValue;
				["wing.R_Original"]: CFrameValue;
				root_Initial: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["wing.L_Original"]: CFrameValue;
				body_Initial: CFrameValue;
				Rig_Composited: CFrameValue;
				root_Original: CFrameValue;
				Rig_Initial: CFrameValue;
				["wing.L_Composited"]: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				["wing.R_Initial"]: CFrameValue;
				["tail.02_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				["tail.02_Composited"]: CFrameValue;
				Rig_Original: CFrameValue;
			};
		};
		Ox: Model & {
			Humanoid: Humanoid & {
				Animator: Animator;
			};
			HumanoidRootPart: MeshPart & {
				root: Bone & {
					body: Bone & {
						["leg.F.L"]: Bone;
						["ear.L"]: Bone;
						["leg.B.R"]: Bone;
						["tail.01"]: Bone & {
							["tail.02"]: Bone;
						};
						["leg.F.R"]: Bone;
						["leg.B.L"]: Bone;
						["ear.R"]: Bone;
					};
				};
			};
			InitialPoses: Folder & {
				Mesh_Initial: CFrameValue;
				Mesh_Original: CFrameValue;
				["leg.F.R_Initial"]: CFrameValue;
				["ear.R_Composited"]: CFrameValue;
				root_Initial: CFrameValue;
				Mesh_Composited: CFrameValue;
				body_Initial: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				root_Original: CFrameValue;
				["tail.02_Initial"]: CFrameValue;
				["leg.F.R_Composited"]: CFrameValue;
				body_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["leg.B.L_Original"]: CFrameValue;
				["ear.L_Original"]: CFrameValue;
				["leg.B.R_Initial"]: CFrameValue;
				root_Composited: CFrameValue;
				["leg.B.R_Composited"]: CFrameValue;
				["ear.R_Original"]: CFrameValue;
				body_Composited: CFrameValue;
				["ear.R_Initial"]: CFrameValue;
				["leg.F.R_Original"]: CFrameValue;
				["ear.L_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["ear.L_Initial"]: CFrameValue;
				["leg.B.L_Composited"]: CFrameValue;
				Rig_Composited: CFrameValue;
				["leg.F.L_Original"]: CFrameValue;
				Rig_Initial: CFrameValue;
				["leg.F.L_Initial"]: CFrameValue;
				["leg.B.R_Original"]: CFrameValue;
				["leg.B.L_Initial"]: CFrameValue;
				["tail.02_Original"]: CFrameValue;
				["leg.F.L_Composited"]: CFrameValue;
				["tail.02_Composited"]: CFrameValue;
				Rig_Original: CFrameValue;
			};
		};
		Penguin: Model & {
			Humanoid: Humanoid & {
				Animator: Animator;
			};
			HumanoidRootPart: MeshPart & {
				root: Bone & {
					body: Bone & {
						["feet.R"]: Bone;
						["tail.01"]: Bone;
						["hair.01"]: Bone;
						["feet.L"]: Bone;
						["wing.R"]: Bone;
						["wing.L"]: Bone;
					};
				};
			};
			InitialPoses: Folder & {
				Mesh_Initial: CFrameValue;
				["feet.R_Original"]: CFrameValue;
				["feet.R_Initial"]: CFrameValue;
				body_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["feet.L_Composited"]: CFrameValue;
				["feet.L_Initial"]: CFrameValue;
				Mesh_Original: CFrameValue;
				["wing.R_Composited"]: CFrameValue;
				["wing.L_Initial"]: CFrameValue;
				["feet.L_Original"]: CFrameValue;
				["feet.R_Composited"]: CFrameValue;
				["hair.01_Initial"]: CFrameValue;
				body_Composited: CFrameValue;
				["hair.01_Original"]: CFrameValue;
				["wing.R_Original"]: CFrameValue;
				root_Initial: CFrameValue;
				Mesh_Composited: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				body_Initial: CFrameValue;
				Rig_Composited: CFrameValue;
				["hair.01_Composited"]: CFrameValue;
				Rig_Initial: CFrameValue;
				["wing.L_Composited"]: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				["wing.R_Initial"]: CFrameValue;
				["wing.L_Original"]: CFrameValue;
				root_Original: CFrameValue;
				root_Composited: CFrameValue;
				Rig_Original: CFrameValue;
			};
		};
		Cheetah: Model & {
			Humanoid: Humanoid & {
				Animator: Animator;
			};
			HumanoidRootPart: MeshPart & {
				root: Bone & {
					body: Bone & {
						["leg.F.L"]: Bone;
						["ear.L"]: Bone;
						["leg.B.R"]: Bone;
						["tail.01"]: Bone & {
							["tail.02"]: Bone;
						};
						["leg.F.R"]: Bone;
						["leg.B.L"]: Bone;
						["ear.R"]: Bone;
					};
				};
			};
			InitialPoses: Folder & {
				Mesh_Initial: CFrameValue;
				Mesh_Original: CFrameValue;
				["leg.F.R_Initial"]: CFrameValue;
				["ear.R_Composited"]: CFrameValue;
				root_Initial: CFrameValue;
				Mesh_Composited: CFrameValue;
				body_Initial: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				["tail.02_Initial"]: CFrameValue;
				["leg.F.R_Composited"]: CFrameValue;
				body_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["leg.B.L_Original"]: CFrameValue;
				["ear.L_Original"]: CFrameValue;
				["leg.B.R_Initial"]: CFrameValue;
				["ear.R_Initial"]: CFrameValue;
				["leg.F.L_Composited"]: CFrameValue;
				["ear.R_Original"]: CFrameValue;
				body_Composited: CFrameValue;
				["leg.B.R_Composited"]: CFrameValue;
				["leg.F.L_Initial"]: CFrameValue;
				["ear.L_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["ear.L_Initial"]: CFrameValue;
				["leg.F.R_Original"]: CFrameValue;
				Rig_Composited: CFrameValue;
				["leg.F.L_Original"]: CFrameValue;
				Rig_Initial: CFrameValue;
				["leg.B.L_Composited"]: CFrameValue;
				["leg.B.R_Original"]: CFrameValue;
				["leg.B.L_Initial"]: CFrameValue;
				["tail.02_Original"]: CFrameValue;
				root_Original: CFrameValue;
				["tail.02_Composited"]: CFrameValue;
				Rig_Original: CFrameValue;
			};
		};
		Eagle: Model & {
			Humanoid: Humanoid & {
				Animator: Animator;
			};
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
		Cow: Model & {
			Humanoid: Humanoid & {
				Animator: Animator;
			};
			HumanoidRootPart: MeshPart & {
				root: Bone & {
					body: Bone & {
						["leg.F.L"]: Bone;
						["ear.L"]: Bone;
						["leg.B.R"]: Bone;
						["tail.01"]: Bone & {
							["tail.02"]: Bone;
						};
						["leg.F.R"]: Bone;
						["leg.B.L"]: Bone;
						["ear.R"]: Bone;
					};
				};
			};
			InitialPoses: Folder & {
				Mesh_Initial: CFrameValue;
				Mesh_Original: CFrameValue;
				["leg.F.R_Initial"]: CFrameValue;
				["ear.R_Composited"]: CFrameValue;
				root_Initial: CFrameValue;
				Mesh_Composited: CFrameValue;
				body_Initial: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				["tail.02_Initial"]: CFrameValue;
				["leg.F.R_Composited"]: CFrameValue;
				body_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["leg.B.L_Original"]: CFrameValue;
				["ear.L_Original"]: CFrameValue;
				["leg.B.R_Initial"]: CFrameValue;
				["ear.R_Initial"]: CFrameValue;
				["leg.F.L_Composited"]: CFrameValue;
				["ear.R_Original"]: CFrameValue;
				body_Composited: CFrameValue;
				["leg.B.R_Composited"]: CFrameValue;
				["leg.F.L_Initial"]: CFrameValue;
				["ear.L_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["ear.L_Initial"]: CFrameValue;
				["leg.F.R_Original"]: CFrameValue;
				Rig_Composited: CFrameValue;
				["leg.F.L_Original"]: CFrameValue;
				Rig_Initial: CFrameValue;
				["leg.B.L_Composited"]: CFrameValue;
				["leg.B.R_Original"]: CFrameValue;
				["leg.B.L_Initial"]: CFrameValue;
				["tail.02_Original"]: CFrameValue;
				root_Original: CFrameValue;
				["tail.02_Composited"]: CFrameValue;
				Rig_Original: CFrameValue;
			};
		};
		Ostrich: Model & {
			Humanoid: Humanoid & {
				Animator: Animator;
			};
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
		Goldfish: Model & {
			Humanoid: Humanoid & {
				Animator: Animator;
			};
			HumanoidRootPart: MeshPart & {
				root: Bone & {
					body: Bone & {
						["fin.L"]: Bone;
						["tail.01"]: Bone;
						["hair.01"]: Bone;
						["fin.R"]: Bone;
						["fin.02"]: Bone;
						["tail.02"]: Bone;
					};
				};
			};
			InitialPoses: Folder & {
				Mesh_Initial: CFrameValue;
				["fin.R_Composited"]: CFrameValue;
				body_Original: CFrameValue;
				Mesh_Composited: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["hair.01_Initial"]: CFrameValue;
				["fin.R_Original"]: CFrameValue;
				Mesh_Original: CFrameValue;
				["fin.L_Initial"]: CFrameValue;
				["fin.L_Original"]: CFrameValue;
				root_Original: CFrameValue;
				["fin.02_Composited"]: CFrameValue;
				["fin.02_Initial"]: CFrameValue;
				body_Composited: CFrameValue;
				["fin.02_Original"]: CFrameValue;
				["fin.R_Initial"]: CFrameValue;
				root_Initial: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["hair.01_Original"]: CFrameValue;
				body_Initial: CFrameValue;
				Rig_Composited: CFrameValue;
				["hair.01_Composited"]: CFrameValue;
				Rig_Initial: CFrameValue;
				["fin.L_Composited"]: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				["tail.02_Initial"]: CFrameValue;
				["tail.02_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				["tail.02_Composited"]: CFrameValue;
				Rig_Original: CFrameValue;
			};
		};
		Zebra: Model & {
			Humanoid: Humanoid & {
				Animator: Animator;
			};
			HumanoidRootPart: MeshPart & {
				root: Bone & {
					body: Bone & {
						["leg.F.L"]: Bone;
						["ear.L"]: Bone;
						["leg.B.R"]: Bone;
						["tail.01"]: Bone & {
							["tail.02"]: Bone;
						};
						["leg.F.R"]: Bone;
						["leg.B.L"]: Bone;
						["ear.R"]: Bone;
					};
				};
			};
			InitialPoses: Folder & {
				Mesh_Initial: CFrameValue;
				Mesh_Original: CFrameValue;
				["leg.F.R_Initial"]: CFrameValue;
				["ear.R_Composited"]: CFrameValue;
				root_Initial: CFrameValue;
				Mesh_Composited: CFrameValue;
				body_Initial: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				["tail.02_Initial"]: CFrameValue;
				["leg.F.R_Composited"]: CFrameValue;
				body_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["leg.B.L_Original"]: CFrameValue;
				["ear.L_Original"]: CFrameValue;
				["leg.B.R_Initial"]: CFrameValue;
				["ear.R_Initial"]: CFrameValue;
				["leg.F.L_Composited"]: CFrameValue;
				["ear.R_Original"]: CFrameValue;
				body_Composited: CFrameValue;
				["leg.B.R_Composited"]: CFrameValue;
				["leg.F.L_Initial"]: CFrameValue;
				["ear.L_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["ear.L_Initial"]: CFrameValue;
				["leg.F.R_Original"]: CFrameValue;
				Rig_Composited: CFrameValue;
				["leg.F.L_Original"]: CFrameValue;
				Rig_Initial: CFrameValue;
				["leg.B.L_Composited"]: CFrameValue;
				["leg.B.R_Original"]: CFrameValue;
				["leg.B.L_Initial"]: CFrameValue;
				["tail.02_Original"]: CFrameValue;
				root_Original: CFrameValue;
				["tail.02_Composited"]: CFrameValue;
				Rig_Original: CFrameValue;
			};
		};
		Elephant: Model & {
			Humanoid: Humanoid & {
				Animator: Animator;
			};
			HumanoidRootPart: MeshPart & {
				root: Bone & {
					body: Bone & {
						["leg.F.L"]: Bone;
						["ear.L"]: Bone;
						["trunk.01"]: Bone & {
							["trunk.02"]: Bone & {
								["trunk.03"]: Bone & {
									["trunk.04"]: Bone;
								};
							};
						};
						["tail.01"]: Bone;
						["leg.B.R"]: Bone;
						["leg.F.R"]: Bone;
						["leg.B.L"]: Bone;
						["ear.R"]: Bone;
					};
				};
			};
			InitialPoses: Folder & {
				["trunk.03_Composited"]: CFrameValue;
				Mesh_Initial: CFrameValue;
				["trunk.03_Initial"]: CFrameValue;
				["trunk.01_Original"]: CFrameValue;
				["leg.F.R_Initial"]: CFrameValue;
				["ear.R_Composited"]: CFrameValue;
				root_Initial: CFrameValue;
				Mesh_Composited: CFrameValue;
				body_Initial: CFrameValue;
				["trunk.02_Composited"]: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				["trunk.02_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				["leg.F.L_Initial"]: CFrameValue;
				["ear.R_Initial"]: CFrameValue;
				["trunk.04_Composited"]: CFrameValue;
				["leg.B.R_Initial"]: CFrameValue;
				body_Original: CFrameValue;
				["trunk.04_Original"]: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["leg.B.L_Original"]: CFrameValue;
				["leg.B.R_Composited"]: CFrameValue;
				["leg.F.R_Original"]: CFrameValue;
				["ear.L_Original"]: CFrameValue;
				["leg.F.R_Composited"]: CFrameValue;
				["trunk.03_Original"]: CFrameValue;
				["trunk.01_Initial"]: CFrameValue;
				["ear.R_Original"]: CFrameValue;
				body_Composited: CFrameValue;
				Mesh_Original: CFrameValue;
				["leg.F.L_Original"]: CFrameValue;
				["ear.L_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["ear.L_Initial"]: CFrameValue;
				["leg.F.L_Composited"]: CFrameValue;
				Rig_Composited: CFrameValue;
				["trunk.02_Initial"]: CFrameValue;
				Rig_Initial: CFrameValue;
				["trunk.04_Initial"]: CFrameValue;
				["leg.B.R_Original"]: CFrameValue;
				["leg.B.L_Initial"]: CFrameValue;
				["leg.B.L_Composited"]: CFrameValue;
				["trunk.01_Composited"]: CFrameValue;
				root_Original: CFrameValue;
				Rig_Original: CFrameValue;
			};
		};
		Mice: Model & {
			Humanoid: Humanoid & {
				Animator: Animator;
			};
			HumanoidRootPart: MeshPart & {
				root: Bone & {
					body: Bone & {
						["leg.F.L"]: Bone;
						["ear.L"]: Bone;
						["leg.B.R"]: Bone;
						["tail.01"]: Bone & {
							["tail.02"]: Bone;
						};
						["leg.F.R"]: Bone;
						["leg.B.L"]: Bone;
						["ear.R"]: Bone;
					};
				};
			};
			InitialPoses: Folder & {
				Mesh_Initial: CFrameValue;
				Mesh_Original: CFrameValue;
				["leg.F.R_Initial"]: CFrameValue;
				["ear.R_Composited"]: CFrameValue;
				root_Initial: CFrameValue;
				Mesh_Composited: CFrameValue;
				body_Initial: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				["tail.02_Initial"]: CFrameValue;
				["leg.F.R_Composited"]: CFrameValue;
				body_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["leg.B.L_Original"]: CFrameValue;
				["ear.L_Original"]: CFrameValue;
				["leg.B.R_Initial"]: CFrameValue;
				["ear.R_Initial"]: CFrameValue;
				["leg.B.L_Composited"]: CFrameValue;
				["ear.R_Original"]: CFrameValue;
				body_Composited: CFrameValue;
				["leg.B.R_Composited"]: CFrameValue;
				["leg.F.L_Initial"]: CFrameValue;
				["ear.L_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["ear.L_Initial"]: CFrameValue;
				["leg.F.R_Original"]: CFrameValue;
				Rig_Composited: CFrameValue;
				["leg.F.L_Original"]: CFrameValue;
				Rig_Initial: CFrameValue;
				root_Original: CFrameValue;
				["leg.B.R_Original"]: CFrameValue;
				["leg.B.L_Initial"]: CFrameValue;
				["tail.02_Original"]: CFrameValue;
				["leg.F.L_Composited"]: CFrameValue;
				["tail.02_Composited"]: CFrameValue;
				Rig_Original: CFrameValue;
			};
		};
		Crab: Model & {
			Humanoid: Humanoid & {
				Animator: Animator;
			};
			InitialPoses: Folder & {
				Mesh_Initial: CFrameValue;
				wrist_Initial: CFrameValue;
				["leg.L.03_Composited"]: CFrameValue;
				["claw.L_Original"]: CFrameValue;
				["claw.R_Original"]: CFrameValue;
				["leg.L.02_Composited"]: CFrameValue;
				["leg.R.02_Initial"]: CFrameValue;
				["leg.R.02_Original"]: CFrameValue;
				wrist_Original: CFrameValue;
				Mesh_Composited: CFrameValue;
				["leg.R.03_Original"]: CFrameValue;
				body_Initial: CFrameValue;
				["leg.L.02_Original"]: CFrameValue;
				["leg.L.01_Composited"]: CFrameValue;
				root_Original: CFrameValue;
				["leg.L.03_Initial"]: CFrameValue;
				body_Original: CFrameValue;
				Mesh_Original: CFrameValue;
				["leg.R.01_Initial"]: CFrameValue;
				["leg.L.03_Original"]: CFrameValue;
				["claw.L_Composited"]: CFrameValue;
				["leg.R.01_Original"]: CFrameValue;
				body_Composited: CFrameValue;
				["claw.L_Initial"]: CFrameValue;
				["claw.R_Initial"]: CFrameValue;
				["leg.R.03_Composited"]: CFrameValue;
				["leg.L.01_Original"]: CFrameValue;
				["leg.L.01_Initial"]: CFrameValue;
				root_Initial: CFrameValue;
				Rig_Composited: CFrameValue;
				["leg.L.02_Initial"]: CFrameValue;
				Rig_Initial: CFrameValue;
				wrist_Composited: CFrameValue;
				["leg.R.01_Composited"]: CFrameValue;
				["leg.R.02_Composited"]: CFrameValue;
				["leg.R.03_Initial"]: CFrameValue;
				["claw.R_Composited"]: CFrameValue;
				root_Composited: CFrameValue;
				Rig_Original: CFrameValue;
			};
			HumanoidRootPart: MeshPart & {
				root: Bone & {
					body: Bone & {
						["leg.L.01"]: Bone;
						["leg.R.01"]: Bone;
						["leg.L.02"]: Bone;
						["leg.R.02"]: Bone;
						wrist: Bone & {
							["claw.L"]: Bone;
							["claw.R"]: Bone;
						};
						["leg.R.03"]: Bone;
						["leg.L.03"]: Bone;
					};
				};
			};
		};
		Dog: Model & {
			Humanoid: Humanoid & {
				Animator: Animator;
			};
			HumanoidRootPart: MeshPart & {
				root: Bone & {
					body: Bone & {
						["leg.F.L"]: Bone;
						["ear.L"]: Bone & {
							["ear.L.01"]: Bone;
						};
						["leg.B.R"]: Bone;
						["tail.01"]: Bone & {
							["tail.02"]: Bone;
						};
						["leg.F.R"]: Bone;
						["leg.B.L"]: Bone;
						["ear.R"]: Bone & {
							["ear.R.01"]: Bone;
						};
					};
				};
			};
			InitialPoses: Folder & {
				Mesh_Initial: CFrameValue;
				Mesh_Original: CFrameValue;
				["leg.F.R_Initial"]: CFrameValue;
				["ear.R_Composited"]: CFrameValue;
				root_Initial: CFrameValue;
				Mesh_Composited: CFrameValue;
				["ear.L.01_Composited"]: CFrameValue;
				body_Initial: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				root_Original: CFrameValue;
				["ear.R.01_Initial"]: CFrameValue;
				["ear.R_Initial"]: CFrameValue;
				["leg.B.R_Initial"]: CFrameValue;
				["ear.R.01_Composited"]: CFrameValue;
				["ear.L.01_Initial"]: CFrameValue;
				["leg.B.R_Composited"]: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["leg.B.L_Original"]: CFrameValue;
				["leg.F.R_Original"]: CFrameValue;
				["ear.R.01_Original"]: CFrameValue;
				["ear.L_Original"]: CFrameValue;
				["leg.F.R_Composited"]: CFrameValue;
				["ear.L.01_Original"]: CFrameValue;
				["leg.B.L_Composited"]: CFrameValue;
				["ear.R_Original"]: CFrameValue;
				body_Composited: CFrameValue;
				["leg.F.L_Initial"]: CFrameValue;
				["leg.F.L_Composited"]: CFrameValue;
				["ear.L_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["ear.L_Initial"]: CFrameValue;
				body_Original: CFrameValue;
				Rig_Composited: CFrameValue;
				["leg.F.L_Original"]: CFrameValue;
				Rig_Initial: CFrameValue;
				["tail.02_Initial"]: CFrameValue;
				["leg.B.R_Original"]: CFrameValue;
				["leg.B.L_Initial"]: CFrameValue;
				["tail.02_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				["tail.02_Composited"]: CFrameValue;
				Rig_Original: CFrameValue;
			};
		};
		Clownfish: Model & {
			Humanoid: Humanoid & {
				Animator: Animator;
			};
			InitialPoses: Folder & {
				Mesh_Initial: CFrameValue;
				["fin.03_Initial"]: CFrameValue;
				["fin.04_Initial"]: CFrameValue;
				Mesh_Original: CFrameValue;
				["fin.R_Composited"]: CFrameValue;
				["fin.03_Composited"]: CFrameValue;
				["fin.R_Initial"]: CFrameValue;
				root_Initial: CFrameValue;
				Mesh_Composited: CFrameValue;
				body_Initial: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				["tail.02_Initial"]: CFrameValue;
				body_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["fin.04_Original"]: CFrameValue;
				["fin.L_Initial"]: CFrameValue;
				["fin.01_Original"]: CFrameValue;
				root_Original: CFrameValue;
				body_Composited: CFrameValue;
				["fin.02_Initial"]: CFrameValue;
				["fin.02_Original"]: CFrameValue;
				["fin.02_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["fin.01_Composited"]: CFrameValue;
				["fin.03_Original"]: CFrameValue;
				Rig_Composited: CFrameValue;
				["fin.R_Original"]: CFrameValue;
				Rig_Initial: CFrameValue;
				["fin.L_Composited"]: CFrameValue;
				["fin.01_Initial"]: CFrameValue;
				["fin.04_Composited"]: CFrameValue;
				["tail.02_Original"]: CFrameValue;
				["fin.L_Original"]: CFrameValue;
				["tail.02_Composited"]: CFrameValue;
				Rig_Original: CFrameValue;
			};
			HumanoidRootPart: MeshPart & {
				root: Bone & {
					body: Bone & {
						["fin.L"]: Bone;
						["fin.R"]: Bone;
						["fin.02"]: Bone;
						["tail.01"]: Bone;
						["fin.04"]: Bone;
						["fin.03"]: Bone;
						["fin.01"]: Bone;
						["tail.02"]: Bone;
					};
				};
			};
		};
		Donkey: Model & {
			Humanoid: Humanoid & {
				Animator: Animator;
			};
			HumanoidRootPart: MeshPart & {
				root: Bone & {
					body: Bone & {
						["leg.F.L"]: Bone;
						["ear.L"]: Bone;
						["leg.B.R"]: Bone;
						["tail.01"]: Bone & {
							["tail.02"]: Bone;
						};
						["leg.F.R"]: Bone;
						["leg.B.L"]: Bone;
						["ear.R"]: Bone;
					};
				};
			};
			InitialPoses: Folder & {
				Mesh_Initial: CFrameValue;
				Mesh_Original: CFrameValue;
				["leg.F.R_Initial"]: CFrameValue;
				["ear.R_Composited"]: CFrameValue;
				root_Initial: CFrameValue;
				Mesh_Composited: CFrameValue;
				body_Initial: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				root_Original: CFrameValue;
				["tail.02_Initial"]: CFrameValue;
				["leg.F.R_Composited"]: CFrameValue;
				body_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["leg.B.L_Original"]: CFrameValue;
				["ear.L_Original"]: CFrameValue;
				["leg.B.R_Initial"]: CFrameValue;
				root_Composited: CFrameValue;
				["leg.B.R_Composited"]: CFrameValue;
				["ear.R_Original"]: CFrameValue;
				body_Composited: CFrameValue;
				["ear.R_Initial"]: CFrameValue;
				["leg.F.R_Original"]: CFrameValue;
				["ear.L_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["ear.L_Initial"]: CFrameValue;
				["leg.B.L_Composited"]: CFrameValue;
				Rig_Composited: CFrameValue;
				["leg.F.L_Original"]: CFrameValue;
				Rig_Initial: CFrameValue;
				["leg.F.L_Initial"]: CFrameValue;
				["leg.B.R_Original"]: CFrameValue;
				["leg.B.L_Initial"]: CFrameValue;
				["tail.02_Original"]: CFrameValue;
				["leg.F.L_Composited"]: CFrameValue;
				["tail.02_Composited"]: CFrameValue;
				Rig_Original: CFrameValue;
			};
		};
		Hyena: Model & {
			Humanoid: Humanoid & {
				Animator: Animator;
			};
			HumanoidRootPart: MeshPart & {
				root: Bone & {
					body: Bone & {
						["leg.F.L"]: Bone;
						["ear.L"]: Bone;
						["leg.B.R"]: Bone;
						["tail.01"]: Bone & {
							["tail.02"]: Bone;
						};
						["leg.F.R"]: Bone;
						["leg.B.L"]: Bone;
						["ear.R"]: Bone;
					};
				};
			};
			InitialPoses: Folder & {
				Mesh_Initial: CFrameValue;
				Mesh_Original: CFrameValue;
				["leg.F.R_Initial"]: CFrameValue;
				["ear.R_Composited"]: CFrameValue;
				root_Initial: CFrameValue;
				Mesh_Composited: CFrameValue;
				body_Initial: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				root_Original: CFrameValue;
				["tail.02_Initial"]: CFrameValue;
				["leg.F.R_Composited"]: CFrameValue;
				body_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["leg.B.L_Original"]: CFrameValue;
				["ear.L_Original"]: CFrameValue;
				["leg.B.R_Initial"]: CFrameValue;
				root_Composited: CFrameValue;
				["leg.B.R_Composited"]: CFrameValue;
				["ear.R_Original"]: CFrameValue;
				body_Composited: CFrameValue;
				["ear.R_Initial"]: CFrameValue;
				["leg.F.R_Original"]: CFrameValue;
				["ear.L_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["ear.L_Initial"]: CFrameValue;
				["leg.B.L_Composited"]: CFrameValue;
				Rig_Composited: CFrameValue;
				["leg.F.L_Original"]: CFrameValue;
				Rig_Initial: CFrameValue;
				["leg.F.L_Initial"]: CFrameValue;
				["leg.B.R_Original"]: CFrameValue;
				["leg.B.L_Initial"]: CFrameValue;
				["tail.02_Original"]: CFrameValue;
				["leg.F.L_Composited"]: CFrameValue;
				["tail.02_Composited"]: CFrameValue;
				Rig_Original: CFrameValue;
			};
		};
		Buffalo: Model & {
			Humanoid: Humanoid & {
				Animator: Animator;
			};
			HumanoidRootPart: MeshPart & {
				root: Bone & {
					body: Bone & {
						["leg.F.L"]: Bone;
						["ear.L"]: Bone;
						["leg.B.R"]: Bone;
						["tail.01"]: Bone & {
							["tail.02"]: Bone;
						};
						["leg.F.R"]: Bone;
						["leg.B.L"]: Bone;
						["ear.R"]: Bone;
					};
				};
			};
			InitialPoses: Folder & {
				Mesh_Initial: CFrameValue;
				Mesh_Original: CFrameValue;
				["leg.F.R_Initial"]: CFrameValue;
				["ear.R_Composited"]: CFrameValue;
				root_Initial: CFrameValue;
				Mesh_Composited: CFrameValue;
				body_Initial: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				root_Original: CFrameValue;
				["tail.02_Initial"]: CFrameValue;
				["leg.F.R_Composited"]: CFrameValue;
				body_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["leg.B.L_Original"]: CFrameValue;
				["ear.L_Original"]: CFrameValue;
				["leg.B.R_Initial"]: CFrameValue;
				root_Composited: CFrameValue;
				["leg.B.R_Composited"]: CFrameValue;
				["ear.R_Original"]: CFrameValue;
				body_Composited: CFrameValue;
				["ear.R_Initial"]: CFrameValue;
				["leg.F.R_Original"]: CFrameValue;
				["ear.L_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["ear.L_Initial"]: CFrameValue;
				["leg.B.L_Composited"]: CFrameValue;
				Rig_Composited: CFrameValue;
				["leg.F.L_Original"]: CFrameValue;
				Rig_Initial: CFrameValue;
				["leg.F.L_Initial"]: CFrameValue;
				["leg.B.R_Original"]: CFrameValue;
				["leg.B.L_Initial"]: CFrameValue;
				["tail.02_Original"]: CFrameValue;
				["leg.F.L_Composited"]: CFrameValue;
				["tail.02_Composited"]: CFrameValue;
				Rig_Original: CFrameValue;
			};
		};
		Duck: Model & {
			Humanoid: Humanoid & {
				Animator: Animator;
			};
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
				["hair.02_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["hair.02_Initial"]: CFrameValue;
				["feet.L_Original"]: CFrameValue;
				Rig_Composited: CFrameValue;
				["hair.01_Original"]: CFrameValue;
				Rig_Initial: CFrameValue;
				root_Original: CFrameValue;
				["feet.L_Initial"]: CFrameValue;
				["wing.R_Initial"]: CFrameValue;
				["tail.02_Original"]: CFrameValue;
				["hair.01_Initial"]: CFrameValue;
				["tail.02_Composited"]: CFrameValue;
				Rig_Original: CFrameValue;
			};
		};
		Fox: Model & {
			Humanoid: Humanoid & {
				Animator: Animator;
			};
			HumanoidRootPart: MeshPart & {
				root: Bone & {
					body: Bone & {
						["leg.F.L"]: Bone;
						["ear.L"]: Bone;
						["leg.B.R"]: Bone;
						["tail.01"]: Bone & {
							["tail.02"]: Bone;
						};
						["leg.F.R"]: Bone;
						["leg.B.L"]: Bone;
						["ear.R"]: Bone;
					};
				};
			};
			InitialPoses: Folder & {
				Mesh_Initial: CFrameValue;
				Mesh_Original: CFrameValue;
				["leg.F.R_Initial"]: CFrameValue;
				["ear.R_Composited"]: CFrameValue;
				root_Initial: CFrameValue;
				Mesh_Composited: CFrameValue;
				body_Initial: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				["tail.02_Initial"]: CFrameValue;
				["leg.F.R_Composited"]: CFrameValue;
				body_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["leg.B.L_Original"]: CFrameValue;
				["ear.L_Original"]: CFrameValue;
				["leg.B.R_Initial"]: CFrameValue;
				["ear.R_Initial"]: CFrameValue;
				["leg.F.L_Composited"]: CFrameValue;
				["ear.R_Original"]: CFrameValue;
				body_Composited: CFrameValue;
				["leg.B.R_Composited"]: CFrameValue;
				["leg.F.L_Initial"]: CFrameValue;
				["ear.L_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["ear.L_Initial"]: CFrameValue;
				["leg.F.R_Original"]: CFrameValue;
				Rig_Composited: CFrameValue;
				["leg.F.L_Original"]: CFrameValue;
				Rig_Initial: CFrameValue;
				["leg.B.L_Composited"]: CFrameValue;
				["leg.B.R_Original"]: CFrameValue;
				["leg.B.L_Initial"]: CFrameValue;
				["tail.02_Original"]: CFrameValue;
				root_Original: CFrameValue;
				["tail.02_Composited"]: CFrameValue;
				Rig_Original: CFrameValue;
			};
		};
		Crow: Model & {
			Humanoid: Humanoid & {
				Animator: Animator;
			};
			HumanoidRootPart: MeshPart & {
				root: Bone & {
					body: Bone & {
						["feet.R"]: Bone;
						["wing.R"]: Bone;
						["hair.01"]: Bone;
						["tail.01"]: Bone;
						["feet.L"]: Bone;
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
				["hair.02_Composited"]: CFrameValue;
				Rig_Composited: CFrameValue;
				["hair.01_Original"]: CFrameValue;
				Rig_Initial: CFrameValue;
				["hair.01_Initial"]: CFrameValue;
				["feet.L_Initial"]: CFrameValue;
				["wing.R_Initial"]: CFrameValue;
				["tail.02_Original"]: CFrameValue;
				["feet.L_Original"]: CFrameValue;
				["tail.02_Composited"]: CFrameValue;
				Rig_Original: CFrameValue;
			};
		};
		Hog: Model & {
			Humanoid: Humanoid & {
				Animator: Animator;
			};
			HumanoidRootPart: MeshPart & {
				root: Bone & {
					body: Bone & {
						["leg.F.L"]: Bone;
						["ear.L"]: Bone;
						["leg.B.R"]: Bone;
						["tail.01"]: Bone & {
							["tail.02"]: Bone;
						};
						["leg.F.R"]: Bone;
						["leg.B.L"]: Bone;
						["ear.R"]: Bone;
					};
				};
			};
			InitialPoses: Folder & {
				Mesh_Initial: CFrameValue;
				Mesh_Original: CFrameValue;
				["leg.F.R_Initial"]: CFrameValue;
				["ear.R_Composited"]: CFrameValue;
				root_Initial: CFrameValue;
				Mesh_Composited: CFrameValue;
				body_Initial: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				["tail.02_Initial"]: CFrameValue;
				["leg.F.R_Composited"]: CFrameValue;
				body_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["leg.B.L_Original"]: CFrameValue;
				["ear.L_Original"]: CFrameValue;
				["leg.B.R_Initial"]: CFrameValue;
				["ear.R_Initial"]: CFrameValue;
				["leg.B.L_Composited"]: CFrameValue;
				["ear.R_Original"]: CFrameValue;
				body_Composited: CFrameValue;
				["leg.B.R_Composited"]: CFrameValue;
				["leg.F.L_Initial"]: CFrameValue;
				["ear.L_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["ear.L_Initial"]: CFrameValue;
				["leg.F.R_Original"]: CFrameValue;
				Rig_Composited: CFrameValue;
				["leg.F.L_Original"]: CFrameValue;
				Rig_Initial: CFrameValue;
				root_Original: CFrameValue;
				["leg.B.R_Original"]: CFrameValue;
				["leg.B.L_Initial"]: CFrameValue;
				["tail.02_Original"]: CFrameValue;
				["leg.F.L_Composited"]: CFrameValue;
				["tail.02_Composited"]: CFrameValue;
				Rig_Original: CFrameValue;
			};
		};
		SnowWeasel: Model & {
			Humanoid: Humanoid & {
				Animator: Animator;
			};
			HumanoidRootPart: MeshPart & {
				root: Bone & {
					body: Bone & {
						["leg.F.L"]: Bone;
						["ear.L"]: Bone;
						["leg.B.R"]: Bone;
						["tail.01"]: Bone & {
							["tail.02"]: Bone;
						};
						["leg.F.R"]: Bone;
						["leg.B.L"]: Bone;
						["ear.R"]: Bone;
					};
				};
			};
			InitialPoses: Folder & {
				Mesh_Initial: CFrameValue;
				Mesh_Original: CFrameValue;
				["leg.F.R_Initial"]: CFrameValue;
				["ear.R_Composited"]: CFrameValue;
				root_Initial: CFrameValue;
				Mesh_Composited: CFrameValue;
				body_Initial: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				["tail.02_Initial"]: CFrameValue;
				["leg.F.R_Composited"]: CFrameValue;
				body_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["leg.B.L_Original"]: CFrameValue;
				["ear.L_Original"]: CFrameValue;
				["leg.B.R_Initial"]: CFrameValue;
				["ear.R_Initial"]: CFrameValue;
				["leg.F.L_Composited"]: CFrameValue;
				["ear.R_Original"]: CFrameValue;
				body_Composited: CFrameValue;
				["leg.B.R_Composited"]: CFrameValue;
				["leg.F.L_Initial"]: CFrameValue;
				["ear.L_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["ear.L_Initial"]: CFrameValue;
				["leg.F.R_Original"]: CFrameValue;
				Rig_Composited: CFrameValue;
				["leg.F.L_Original"]: CFrameValue;
				Rig_Initial: CFrameValue;
				["leg.B.L_Composited"]: CFrameValue;
				["leg.B.R_Original"]: CFrameValue;
				["leg.B.L_Initial"]: CFrameValue;
				["tail.02_Original"]: CFrameValue;
				root_Original: CFrameValue;
				["tail.02_Composited"]: CFrameValue;
				Rig_Original: CFrameValue;
			};
		};
		Cat: Model & {
			Humanoid: Humanoid & {
				Animator: Animator;
			};
			HumanoidRootPart: MeshPart & {
				root: Bone & {
					body: Bone & {
						["leg.F.L"]: Bone;
						["ear.L"]: Bone;
						["leg.B.R"]: Bone;
						["tail.01"]: Bone & {
							["tail.02"]: Bone;
						};
						["leg.F.R"]: Bone;
						["leg.B.L"]: Bone;
						["ear.R"]: Bone;
					};
				};
			};
			InitialPoses: Folder & {
				Mesh_Initial: CFrameValue;
				Mesh_Original: CFrameValue;
				["leg.F.R_Initial"]: CFrameValue;
				["ear.R_Composited"]: CFrameValue;
				root_Initial: CFrameValue;
				Mesh_Composited: CFrameValue;
				body_Initial: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				root_Original: CFrameValue;
				["tail.02_Initial"]: CFrameValue;
				["leg.F.R_Composited"]: CFrameValue;
				body_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["leg.B.L_Original"]: CFrameValue;
				["ear.L_Original"]: CFrameValue;
				["leg.B.R_Initial"]: CFrameValue;
				root_Composited: CFrameValue;
				["leg.B.R_Composited"]: CFrameValue;
				["ear.R_Original"]: CFrameValue;
				body_Composited: CFrameValue;
				["ear.R_Initial"]: CFrameValue;
				["leg.F.R_Original"]: CFrameValue;
				["ear.L_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["ear.L_Initial"]: CFrameValue;
				["leg.B.L_Composited"]: CFrameValue;
				Rig_Composited: CFrameValue;
				["leg.F.L_Original"]: CFrameValue;
				Rig_Initial: CFrameValue;
				["leg.F.L_Initial"]: CFrameValue;
				["leg.B.R_Original"]: CFrameValue;
				["leg.B.L_Initial"]: CFrameValue;
				["tail.02_Original"]: CFrameValue;
				["leg.F.L_Composited"]: CFrameValue;
				["tail.02_Composited"]: CFrameValue;
				Rig_Original: CFrameValue;
			};
		};
		Reindeer: Model & {
			Humanoid: Humanoid & {
				Animator: Animator;
			};
			HumanoidRootPart: MeshPart & {
				root: Bone & {
					body: Bone & {
						["leg.F.L"]: Bone;
						["ear.L"]: Bone;
						["leg.B.R"]: Bone;
						["tail.01"]: Bone;
						["leg.F.R"]: Bone;
						["leg.B.L"]: Bone;
						["ear.R"]: Bone;
					};
				};
			};
			InitialPoses: Folder & {
				Mesh_Initial: CFrameValue;
				Mesh_Original: CFrameValue;
				["leg.F.R_Initial"]: CFrameValue;
				["ear.R_Composited"]: CFrameValue;
				root_Initial: CFrameValue;
				Mesh_Composited: CFrameValue;
				body_Initial: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				root_Original: CFrameValue;
				["leg.F.L_Initial"]: CFrameValue;
				["leg.F.R_Composited"]: CFrameValue;
				body_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["leg.B.L_Original"]: CFrameValue;
				["ear.L_Original"]: CFrameValue;
				["ear.R_Original"]: CFrameValue;
				body_Composited: CFrameValue;
				["leg.B.R_Initial"]: CFrameValue;
				["ear.R_Initial"]: CFrameValue;
				["ear.L_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["ear.L_Initial"]: CFrameValue;
				["leg.F.R_Original"]: CFrameValue;
				Rig_Composited: CFrameValue;
				["leg.F.L_Original"]: CFrameValue;
				Rig_Initial: CFrameValue;
				["leg.B.R_Composited"]: CFrameValue;
				["leg.B.R_Original"]: CFrameValue;
				["leg.B.L_Initial"]: CFrameValue;
				["leg.B.L_Composited"]: CFrameValue;
				root_Composited: CFrameValue;
				["leg.F.L_Composited"]: CFrameValue;
				Rig_Original: CFrameValue;
			};
		};
		Tortoise: Model & {
			Humanoid: Humanoid & {
				Animator: Animator;
			};
			HumanoidRootPart: MeshPart & {
				root: Bone & {
					body: Bone & {
						["leg.B.L"]: Bone;
						["leg.B.R"]: Bone;
						["tail.01"]: Bone;
						["leg.F.L"]: Bone;
						["leg.F.R"]: Bone;
					};
				};
			};
			InitialPoses: Folder & {
				["leg.F.R_Composited"]: CFrameValue;
				Mesh_Initial: CFrameValue;
				body_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["leg.B.L_Original"]: CFrameValue;
				Mesh_Original: CFrameValue;
				["leg.B.R_Initial"]: CFrameValue;
				["leg.F.R_Initial"]: CFrameValue;
				Mesh_Composited: CFrameValue;
				["leg.B.R_Original"]: CFrameValue;
				body_Composited: CFrameValue;
				["leg.B.R_Composited"]: CFrameValue;
				["leg.F.R_Original"]: CFrameValue;
				root_Initial: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["leg.F.L_Composited"]: CFrameValue;
				body_Initial: CFrameValue;
				Rig_Composited: CFrameValue;
				["leg.F.L_Original"]: CFrameValue;
				Rig_Initial: CFrameValue;
				root_Original: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				["leg.B.L_Initial"]: CFrameValue;
				["leg.B.L_Composited"]: CFrameValue;
				root_Composited: CFrameValue;
				["leg.F.L_Initial"]: CFrameValue;
				Rig_Original: CFrameValue;
			};
		};
		Wolf: Model & {
			Humanoid: Humanoid & {
				Animator: Animator;
			};
			HumanoidRootPart: MeshPart & {
				root: Bone & {
					body: Bone & {
						["leg.F.L"]: Bone;
						["ear.L"]: Bone;
						["leg.B.R"]: Bone;
						["tail.01"]: Bone & {
							["tail.02"]: Bone;
						};
						["leg.F.R"]: Bone;
						["leg.B.L"]: Bone;
						["ear.R"]: Bone;
					};
				};
			};
			InitialPoses: Folder & {
				Mesh_Initial: CFrameValue;
				Mesh_Original: CFrameValue;
				["leg.F.R_Initial"]: CFrameValue;
				["ear.R_Composited"]: CFrameValue;
				root_Initial: CFrameValue;
				Mesh_Composited: CFrameValue;
				body_Initial: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				root_Original: CFrameValue;
				["tail.02_Initial"]: CFrameValue;
				["leg.F.R_Composited"]: CFrameValue;
				body_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["leg.B.L_Original"]: CFrameValue;
				["ear.L_Original"]: CFrameValue;
				["leg.B.R_Initial"]: CFrameValue;
				root_Composited: CFrameValue;
				["leg.B.R_Composited"]: CFrameValue;
				["ear.R_Original"]: CFrameValue;
				body_Composited: CFrameValue;
				["ear.R_Initial"]: CFrameValue;
				["leg.F.R_Original"]: CFrameValue;
				["ear.L_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["ear.L_Initial"]: CFrameValue;
				["leg.B.L_Composited"]: CFrameValue;
				Rig_Composited: CFrameValue;
				["leg.F.L_Original"]: CFrameValue;
				Rig_Initial: CFrameValue;
				["leg.F.L_Initial"]: CFrameValue;
				["leg.B.R_Original"]: CFrameValue;
				["leg.B.L_Initial"]: CFrameValue;
				["tail.02_Original"]: CFrameValue;
				["leg.F.L_Composited"]: CFrameValue;
				["tail.02_Composited"]: CFrameValue;
				Rig_Original: CFrameValue;
			};
		};
		SnowOwl: Model & {
			Humanoid: Humanoid & {
				Animator: Animator;
			};
			HumanoidRootPart: MeshPart & {
				root: Bone & {
					body: Bone & {
						["feet.R"]: Bone;
						["tail.01"]: Bone;
						["feet.L"]: Bone;
						["tail.02"]: Bone;
						["wing.R"]: Bone;
						["wing.L"]: Bone;
					};
				};
			};
			InitialPoses: Folder & {
				Mesh_Initial: CFrameValue;
				["feet.R_Original"]: CFrameValue;
				["feet.R_Initial"]: CFrameValue;
				body_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["feet.L_Original"]: CFrameValue;
				Mesh_Composited: CFrameValue;
				Mesh_Original: CFrameValue;
				["wing.R_Composited"]: CFrameValue;
				["wing.L_Initial"]: CFrameValue;
				["feet.L_Initial"]: CFrameValue;
				["feet.R_Composited"]: CFrameValue;
				["feet.L_Composited"]: CFrameValue;
				body_Composited: CFrameValue;
				["tail.02_Initial"]: CFrameValue;
				["wing.R_Original"]: CFrameValue;
				root_Initial: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["wing.L_Original"]: CFrameValue;
				body_Initial: CFrameValue;
				Rig_Composited: CFrameValue;
				root_Original: CFrameValue;
				Rig_Initial: CFrameValue;
				["wing.L_Composited"]: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				["wing.R_Initial"]: CFrameValue;
				["tail.02_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				["tail.02_Composited"]: CFrameValue;
				Rig_Original: CFrameValue;
			};
		};
		Sheep: Model & {
			Humanoid: Humanoid & {
				Animator: Animator;
			};
			HumanoidRootPart: MeshPart & {
				root: Bone & {
					body: Bone & {
						["leg.F.L"]: Bone;
						["ear.L"]: Bone;
						["leg.B.R"]: Bone;
						["tail.01"]: Bone;
						["leg.F.R"]: Bone;
						["leg.B.L"]: Bone;
						["ear.R"]: Bone;
					};
				};
			};
			InitialPoses: Folder & {
				Mesh_Initial: CFrameValue;
				Mesh_Original: CFrameValue;
				["leg.F.R_Initial"]: CFrameValue;
				["ear.R_Composited"]: CFrameValue;
				root_Initial: CFrameValue;
				Mesh_Composited: CFrameValue;
				body_Initial: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				root_Original: CFrameValue;
				["leg.F.L_Initial"]: CFrameValue;
				["leg.F.R_Composited"]: CFrameValue;
				body_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["leg.B.L_Original"]: CFrameValue;
				["ear.L_Original"]: CFrameValue;
				["ear.R_Original"]: CFrameValue;
				body_Composited: CFrameValue;
				["leg.B.R_Initial"]: CFrameValue;
				["ear.R_Initial"]: CFrameValue;
				["ear.L_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["ear.L_Initial"]: CFrameValue;
				["leg.F.R_Original"]: CFrameValue;
				Rig_Composited: CFrameValue;
				["leg.F.L_Original"]: CFrameValue;
				Rig_Initial: CFrameValue;
				["leg.B.R_Composited"]: CFrameValue;
				["leg.B.R_Original"]: CFrameValue;
				["leg.B.L_Initial"]: CFrameValue;
				["leg.B.L_Composited"]: CFrameValue;
				root_Composited: CFrameValue;
				["leg.F.L_Composited"]: CFrameValue;
				Rig_Original: CFrameValue;
			};
		};
		Chicken: Model & {
			Humanoid: Humanoid & {
				Animator: Animator;
			};
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
		SeaLion: Model & {
			Humanoid: Humanoid & {
				Animator: Animator;
			};
			HumanoidRootPart: MeshPart & {
				root: Bone & {
					body: Bone & {
						["leg.L"]: Bone;
						["leg.R"]: Bone;
						["tail.01"]: Bone;
					};
				};
			};
			InitialPoses: Folder & {
				["leg.R_Composited"]: CFrameValue;
				Mesh_Initial: CFrameValue;
				["leg.R_Initial"]: CFrameValue;
				body_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				Mesh_Original: CFrameValue;
				["leg.L_Composited"]: CFrameValue;
				body_Composited: CFrameValue;
				["leg.L_Original"]: CFrameValue;
				root_Initial: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				body_Initial: CFrameValue;
				Rig_Composited: CFrameValue;
				Rig_Initial: CFrameValue;
				["leg.R_Original"]: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				["leg.L_Initial"]: CFrameValue;
				Mesh_Composited: CFrameValue;
				root_Original: CFrameValue;
				root_Composited: CFrameValue;
				Rig_Original: CFrameValue;
			};
		};
		Rooster: Model & {
			Humanoid: Humanoid & {
				Animator: Animator;
			};
			HumanoidRootPart: MeshPart & {
				root: Bone & {
					body: Bone & {
						["tail.03"]: Bone;
						["hair.01"]: Bone;
						["hair.02"]: Bone;
						["wing.R"]: Bone;
						["feet.R"]: Bone;
						["tail.02"]: Bone;
						["feet.L"]: Bone;
						["wing.L"]: Bone;
						["tail.01"]: Bone;
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
				["tail.03_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				["tail.02_Initial"]: CFrameValue;
				["wing.L_Original"]: CFrameValue;
				["tail.03_Initial"]: CFrameValue;
				["feet.R_Initial"]: CFrameValue;
				body_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["tail.03_Composited"]: CFrameValue;
				["wing.R_Composited"]: CFrameValue;
				["wing.L_Initial"]: CFrameValue;
				["feet.R_Composited"]: CFrameValue;
				body_Composited: CFrameValue;
				["feet.R_Original"]: CFrameValue;
				["wing.R_Original"]: CFrameValue;
				root_Original: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["hair.02_Initial"]: CFrameValue;
				["feet.L_Original"]: CFrameValue;
				Rig_Composited: CFrameValue;
				["hair.01_Original"]: CFrameValue;
				Rig_Initial: CFrameValue;
				["hair.01_Initial"]: CFrameValue;
				["feet.L_Initial"]: CFrameValue;
				["wing.R_Initial"]: CFrameValue;
				["tail.02_Original"]: CFrameValue;
				["hair.02_Composited"]: CFrameValue;
				["tail.02_Composited"]: CFrameValue;
				Rig_Original: CFrameValue;
			};
		};
		Rhino: Model & {
			Humanoid: Humanoid & {
				Animator: Animator;
			};
			HumanoidRootPart: MeshPart & {
				root: Bone & {
					body: Bone & {
						["leg.F.L"]: Bone;
						["ear.L"]: Bone;
						["leg.B.R"]: Bone;
						["tail.01"]: Bone;
						["leg.F.R"]: Bone;
						["leg.B.L"]: Bone;
						["ear.R"]: Bone;
					};
				};
			};
			InitialPoses: Folder & {
				Mesh_Initial: CFrameValue;
				Mesh_Original: CFrameValue;
				["leg.F.R_Initial"]: CFrameValue;
				["ear.R_Composited"]: CFrameValue;
				root_Initial: CFrameValue;
				Mesh_Composited: CFrameValue;
				body_Initial: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				["leg.F.L_Initial"]: CFrameValue;
				["leg.F.R_Composited"]: CFrameValue;
				body_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["leg.B.L_Original"]: CFrameValue;
				["ear.L_Original"]: CFrameValue;
				["ear.R_Original"]: CFrameValue;
				body_Composited: CFrameValue;
				["ear.R_Initial"]: CFrameValue;
				["leg.B.R_Initial"]: CFrameValue;
				["ear.L_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["ear.L_Initial"]: CFrameValue;
				["leg.F.R_Original"]: CFrameValue;
				Rig_Composited: CFrameValue;
				["leg.F.L_Original"]: CFrameValue;
				Rig_Initial: CFrameValue;
				["leg.B.R_Composited"]: CFrameValue;
				["leg.B.R_Original"]: CFrameValue;
				["leg.B.L_Initial"]: CFrameValue;
				["leg.B.L_Composited"]: CFrameValue;
				root_Original: CFrameValue;
				["leg.F.L_Composited"]: CFrameValue;
				Rig_Original: CFrameValue;
			};
		};
		Walrus: Model & {
			Humanoid: Humanoid & {
				Animator: Animator;
			};
			HumanoidRootPart: MeshPart & {
				root: Bone & {
					body: Bone & {
						["leg.F.L"]: Bone;
						["leg.B.L"]: Bone;
						["leg.B.R"]: Bone;
						["leg.F.R"]: Bone;
					};
				};
			};
			InitialPoses: Folder & {
				["leg.F.R_Composited"]: CFrameValue;
				Mesh_Initial: CFrameValue;
				body_Original: CFrameValue;
				["leg.B.L_Original"]: CFrameValue;
				Mesh_Original: CFrameValue;
				["leg.B.R_Initial"]: CFrameValue;
				["leg.F.R_Initial"]: CFrameValue;
				body_Composited: CFrameValue;
				["leg.B.R_Composited"]: CFrameValue;
				root_Original: CFrameValue;
				root_Initial: CFrameValue;
				Mesh_Composited: CFrameValue;
				["leg.F.R_Original"]: CFrameValue;
				body_Initial: CFrameValue;
				Rig_Composited: CFrameValue;
				["leg.F.L_Original"]: CFrameValue;
				Rig_Initial: CFrameValue;
				["leg.F.L_Composited"]: CFrameValue;
				["leg.B.R_Original"]: CFrameValue;
				["leg.B.L_Initial"]: CFrameValue;
				["leg.B.L_Composited"]: CFrameValue;
				root_Composited: CFrameValue;
				["leg.F.L_Initial"]: CFrameValue;
				Rig_Original: CFrameValue;
			};
		};
		Raccoon: Model & {
			Humanoid: Humanoid & {
				Animator: Animator;
			};
			HumanoidRootPart: MeshPart & {
				root: Bone & {
					body: Bone & {
						["leg.F.L"]: Bone;
						["ear.L"]: Bone;
						["leg.B.R"]: Bone;
						["tail.01"]: Bone & {
							["tail.02"]: Bone;
						};
						["leg.F.R"]: Bone;
						["leg.B.L"]: Bone;
						["ear.R"]: Bone;
					};
				};
			};
			InitialPoses: Folder & {
				Mesh_Initial: CFrameValue;
				Mesh_Original: CFrameValue;
				["leg.F.R_Initial"]: CFrameValue;
				["ear.R_Composited"]: CFrameValue;
				root_Initial: CFrameValue;
				Mesh_Composited: CFrameValue;
				body_Initial: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				root_Original: CFrameValue;
				["tail.02_Initial"]: CFrameValue;
				["leg.F.R_Composited"]: CFrameValue;
				body_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["leg.B.L_Original"]: CFrameValue;
				["ear.L_Original"]: CFrameValue;
				["leg.B.R_Initial"]: CFrameValue;
				root_Composited: CFrameValue;
				["leg.B.R_Composited"]: CFrameValue;
				["ear.R_Original"]: CFrameValue;
				body_Composited: CFrameValue;
				["ear.R_Initial"]: CFrameValue;
				["leg.F.R_Original"]: CFrameValue;
				["ear.L_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["ear.L_Initial"]: CFrameValue;
				["leg.B.L_Composited"]: CFrameValue;
				Rig_Composited: CFrameValue;
				["leg.F.L_Original"]: CFrameValue;
				Rig_Initial: CFrameValue;
				["leg.F.L_Initial"]: CFrameValue;
				["leg.B.R_Original"]: CFrameValue;
				["leg.B.L_Initial"]: CFrameValue;
				["tail.02_Original"]: CFrameValue;
				["leg.F.L_Composited"]: CFrameValue;
				["tail.02_Composited"]: CFrameValue;
				Rig_Original: CFrameValue;
			};
		};
		Rabbit: Model & {
			Humanoid: Humanoid & {
				Animator: Animator;
			};
			HumanoidRootPart: MeshPart & {
				root: Bone & {
					body: Bone & {
						["leg.F.L"]: Bone;
						["ear.L"]: Bone;
						["leg.B.R"]: Bone;
						["tail.01"]: Bone;
						["leg.F.R"]: Bone;
						["leg.B.L"]: Bone;
						["ear.R"]: Bone;
					};
				};
			};
			InitialPoses: Folder & {
				Mesh_Initial: CFrameValue;
				Mesh_Original: CFrameValue;
				["leg.F.R_Initial"]: CFrameValue;
				["ear.R_Composited"]: CFrameValue;
				root_Initial: CFrameValue;
				Mesh_Composited: CFrameValue;
				body_Initial: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				root_Original: CFrameValue;
				["leg.F.L_Initial"]: CFrameValue;
				["leg.F.R_Composited"]: CFrameValue;
				body_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["leg.B.L_Original"]: CFrameValue;
				["ear.L_Original"]: CFrameValue;
				["ear.R_Original"]: CFrameValue;
				body_Composited: CFrameValue;
				["leg.B.R_Initial"]: CFrameValue;
				["ear.R_Initial"]: CFrameValue;
				["ear.L_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["ear.L_Initial"]: CFrameValue;
				["leg.F.R_Original"]: CFrameValue;
				Rig_Composited: CFrameValue;
				["leg.F.L_Original"]: CFrameValue;
				Rig_Initial: CFrameValue;
				["leg.B.R_Composited"]: CFrameValue;
				["leg.B.R_Original"]: CFrameValue;
				["leg.B.L_Initial"]: CFrameValue;
				["leg.B.L_Composited"]: CFrameValue;
				root_Composited: CFrameValue;
				["leg.F.L_Composited"]: CFrameValue;
				Rig_Original: CFrameValue;
			};
		};
		PolarBear: Model & {
			Humanoid: Humanoid & {
				Animator: Animator;
			};
			HumanoidRootPart: MeshPart & {
				root: Bone & {
					body: Bone & {
						["leg.F.L"]: Bone;
						["ear.L"]: Bone;
						["leg.B.R"]: Bone;
						["tail.01"]: Bone;
						["leg.B.L"]: Bone;
						["leg.F.R"]: Bone;
						["ear.R"]: Bone;
					};
				};
			};
			InitialPoses: Folder & {
				Mesh_Initial: CFrameValue;
				Mesh_Original: CFrameValue;
				["leg.F.R_Initial"]: CFrameValue;
				["ear.R_Composited"]: CFrameValue;
				root_Initial: CFrameValue;
				Mesh_Composited: CFrameValue;
				body_Initial: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				root_Original: CFrameValue;
				["leg.F.L_Initial"]: CFrameValue;
				["leg.F.R_Composited"]: CFrameValue;
				body_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["leg.B.L_Original"]: CFrameValue;
				["ear.L_Original"]: CFrameValue;
				["ear.R_Original"]: CFrameValue;
				body_Composited: CFrameValue;
				["leg.B.R_Initial"]: CFrameValue;
				["ear.R_Initial"]: CFrameValue;
				["ear.L_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["ear.L_Initial"]: CFrameValue;
				["leg.F.R_Original"]: CFrameValue;
				Rig_Composited: CFrameValue;
				["leg.F.L_Original"]: CFrameValue;
				Rig_Initial: CFrameValue;
				["leg.B.R_Composited"]: CFrameValue;
				["leg.B.R_Original"]: CFrameValue;
				["leg.B.L_Initial"]: CFrameValue;
				["leg.B.L_Composited"]: CFrameValue;
				root_Composited: CFrameValue;
				["leg.F.L_Composited"]: CFrameValue;
				Rig_Original: CFrameValue;
			};
		};
		Antelope: Model & {
			Humanoid: Humanoid & {
				Animator: Animator;
			};
			HumanoidRootPart: MeshPart & {
				root: Bone & {
					body: Bone & {
						["leg.F.L"]: Bone;
						["ear.L"]: Bone;
						["leg.B.R"]: Bone;
						["tail.01"]: Bone;
						["leg.F.R"]: Bone;
						["leg.B.L"]: Bone;
						["ear.R"]: Bone;
					};
				};
			};
			InitialPoses: Folder & {
				Mesh_Initial: CFrameValue;
				Mesh_Original: CFrameValue;
				["leg.F.R_Initial"]: CFrameValue;
				["ear.R_Composited"]: CFrameValue;
				root_Initial: CFrameValue;
				Mesh_Composited: CFrameValue;
				body_Initial: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				root_Original: CFrameValue;
				["leg.F.L_Initial"]: CFrameValue;
				["leg.F.R_Composited"]: CFrameValue;
				body_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["leg.B.L_Original"]: CFrameValue;
				["ear.L_Original"]: CFrameValue;
				["ear.R_Original"]: CFrameValue;
				body_Composited: CFrameValue;
				["leg.B.R_Initial"]: CFrameValue;
				["ear.R_Initial"]: CFrameValue;
				["ear.L_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["ear.L_Initial"]: CFrameValue;
				["leg.F.R_Original"]: CFrameValue;
				Rig_Composited: CFrameValue;
				["leg.F.L_Original"]: CFrameValue;
				Rig_Initial: CFrameValue;
				["leg.B.R_Composited"]: CFrameValue;
				["leg.B.R_Original"]: CFrameValue;
				["leg.B.L_Initial"]: CFrameValue;
				["leg.B.L_Composited"]: CFrameValue;
				root_Composited: CFrameValue;
				["leg.F.L_Composited"]: CFrameValue;
				Rig_Original: CFrameValue;
			};
		};
		Pigeon: Model & {
			Humanoid: Humanoid & {
				Animator: Animator;
			};
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
		Chick: Model & {
			Humanoid: Humanoid & {
				Animator: Animator;
			};
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
				["hair.02_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["hair.02_Initial"]: CFrameValue;
				["feet.L_Original"]: CFrameValue;
				Rig_Composited: CFrameValue;
				["hair.01_Original"]: CFrameValue;
				Rig_Initial: CFrameValue;
				root_Original: CFrameValue;
				["feet.L_Initial"]: CFrameValue;
				["wing.R_Initial"]: CFrameValue;
				["tail.02_Original"]: CFrameValue;
				["hair.01_Initial"]: CFrameValue;
				["tail.02_Composited"]: CFrameValue;
				Rig_Original: CFrameValue;
			};
		};
		ArcticFox: Model & {
			Humanoid: Humanoid & {
				Animator: Animator;
			};
			HumanoidRootPart: MeshPart & {
				root: Bone & {
					body: Bone & {
						["leg.F.L"]: Bone;
						["ear.L"]: Bone;
						["leg.B.R"]: Bone;
						["tail.01"]: Bone & {
							["tail.02"]: Bone;
						};
						["leg.F.R"]: Bone;
						["leg.B.L"]: Bone;
						["ear.R"]: Bone;
					};
				};
			};
			InitialPoses: Folder & {
				Mesh_Initial: CFrameValue;
				Mesh_Original: CFrameValue;
				["leg.F.R_Initial"]: CFrameValue;
				["ear.R_Composited"]: CFrameValue;
				root_Initial: CFrameValue;
				Mesh_Composited: CFrameValue;
				body_Initial: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				["tail.02_Initial"]: CFrameValue;
				["leg.F.R_Composited"]: CFrameValue;
				body_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["leg.B.L_Original"]: CFrameValue;
				["ear.L_Original"]: CFrameValue;
				["leg.B.R_Initial"]: CFrameValue;
				["ear.R_Initial"]: CFrameValue;
				["leg.F.L_Composited"]: CFrameValue;
				["ear.R_Original"]: CFrameValue;
				body_Composited: CFrameValue;
				["leg.B.R_Composited"]: CFrameValue;
				["leg.F.L_Initial"]: CFrameValue;
				["ear.L_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["ear.L_Initial"]: CFrameValue;
				["leg.F.R_Original"]: CFrameValue;
				Rig_Composited: CFrameValue;
				["leg.F.L_Original"]: CFrameValue;
				Rig_Initial: CFrameValue;
				["leg.B.L_Composited"]: CFrameValue;
				["leg.B.R_Original"]: CFrameValue;
				["leg.B.L_Initial"]: CFrameValue;
				["tail.02_Original"]: CFrameValue;
				root_Original: CFrameValue;
				["tail.02_Composited"]: CFrameValue;
				Rig_Original: CFrameValue;
			};
		};
		Pig: Model & {
			Humanoid: Humanoid & {
				Animator: Animator;
			};
			HumanoidRootPart: MeshPart & {
				root: Bone & {
					body: Bone & {
						["leg.F.L"]: Bone;
						["ear.L"]: Bone;
						["leg.B.R"]: Bone;
						["tail.01"]: Bone;
						["leg.F.R"]: Bone;
						["leg.B.L"]: Bone;
						["ear.R"]: Bone;
					};
				};
			};
			InitialPoses: Folder & {
				Mesh_Initial: CFrameValue;
				Mesh_Original: CFrameValue;
				["leg.F.R_Initial"]: CFrameValue;
				["ear.R_Composited"]: CFrameValue;
				root_Initial: CFrameValue;
				Mesh_Composited: CFrameValue;
				body_Initial: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				root_Original: CFrameValue;
				["leg.F.L_Initial"]: CFrameValue;
				["leg.F.R_Composited"]: CFrameValue;
				body_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["leg.B.L_Original"]: CFrameValue;
				["ear.L_Original"]: CFrameValue;
				["ear.R_Original"]: CFrameValue;
				body_Composited: CFrameValue;
				["leg.B.R_Initial"]: CFrameValue;
				["ear.R_Initial"]: CFrameValue;
				["ear.L_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["ear.L_Initial"]: CFrameValue;
				["leg.F.R_Original"]: CFrameValue;
				Rig_Composited: CFrameValue;
				["leg.F.L_Original"]: CFrameValue;
				Rig_Initial: CFrameValue;
				["leg.B.R_Composited"]: CFrameValue;
				["leg.B.R_Original"]: CFrameValue;
				["leg.B.L_Initial"]: CFrameValue;
				["leg.B.L_Composited"]: CFrameValue;
				root_Composited: CFrameValue;
				["leg.F.L_Composited"]: CFrameValue;
				Rig_Original: CFrameValue;
			};
		};
		Dove: Model & {
			Humanoid: Humanoid & {
				Animator: Animator;
			};
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
		Parrot: Model & {
			Humanoid: Humanoid & {
				Animator: Animator;
			};
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
		Hippo: Model & {
			Humanoid: Humanoid & {
				Animator: Animator;
			};
			HumanoidRootPart: MeshPart & {
				root: Bone & {
					body: Bone & {
						["leg.F.L"]: Bone;
						["ear.L"]: Bone;
						["leg.B.R"]: Bone;
						["tail.01"]: Bone;
						["leg.F.R"]: Bone;
						["leg.B.L"]: Bone;
						["ear.R"]: Bone;
					};
				};
			};
			InitialPoses: Folder & {
				Mesh_Initial: CFrameValue;
				Mesh_Original: CFrameValue;
				["leg.F.R_Initial"]: CFrameValue;
				["ear.R_Composited"]: CFrameValue;
				root_Initial: CFrameValue;
				Mesh_Composited: CFrameValue;
				body_Initial: CFrameValue;
				["tail.01_Original"]: CFrameValue;
				root_Composited: CFrameValue;
				["leg.F.L_Initial"]: CFrameValue;
				["leg.F.R_Composited"]: CFrameValue;
				body_Original: CFrameValue;
				["tail.01_Composited"]: CFrameValue;
				["leg.B.L_Original"]: CFrameValue;
				["ear.L_Original"]: CFrameValue;
				["ear.R_Original"]: CFrameValue;
				body_Composited: CFrameValue;
				["ear.R_Initial"]: CFrameValue;
				["leg.B.R_Initial"]: CFrameValue;
				["ear.L_Composited"]: CFrameValue;
				["tail.01_Initial"]: CFrameValue;
				["ear.L_Initial"]: CFrameValue;
				["leg.F.R_Original"]: CFrameValue;
				Rig_Composited: CFrameValue;
				["leg.F.L_Original"]: CFrameValue;
				Rig_Initial: CFrameValue;
				["leg.B.R_Composited"]: CFrameValue;
				["leg.B.R_Original"]: CFrameValue;
				["leg.B.L_Initial"]: CFrameValue;
				["leg.B.L_Composited"]: CFrameValue;
				root_Original: CFrameValue;
				["leg.F.L_Composited"]: CFrameValue;
				Rig_Original: CFrameValue;
			};
		};
	};
	CSProtocols: Folder;
	Animate: LocalScript & {
		point: StringValue & {
			PointAnim: Animation;
		};
		dance2: StringValue & {
			Animation2: Animation & {
				Weight: NumberValue;
			};
			Animation3: Animation & {
				Weight: NumberValue;
			};
			Animation1: Animation & {
				Weight: NumberValue;
			};
		};
		cheer: StringValue & {
			CheerAnim: Animation;
		};
		dance3: StringValue & {
			Animation2: Animation & {
				Weight: NumberValue;
			};
			Animation3: Animation & {
				Weight: NumberValue;
			};
			Animation1: Animation & {
				Weight: NumberValue;
			};
		};
		toolnone: StringValue & {
			ToolNoneAnim: Animation;
		};
		dance: StringValue & {
			Animation2: Animation & {
				Weight: NumberValue;
			};
			Animation3: Animation & {
				Weight: NumberValue;
			};
			Animation1: Animation & {
				Weight: NumberValue;
			};
		};
		ScaleDampeningPercent: NumberValue;
		fall: StringValue & {
			FallAnim: Animation;
		};
		laugh: StringValue & {
			LaughAnim: Animation;
		};
		idle: StringValue & {
			Animation2: Animation & {
				Weight: NumberValue;
			};
			Animation1: Animation & {
				Weight: NumberValue;
			};
		};
		jump: StringValue & {
			JumpAnim: Animation;
		};
		sit: StringValue & {
			SitAnim: Animation;
		};
		run: StringValue & {
			RunAnim: Animation;
		};
		swim: StringValue & {
			Swim: Animation;
		};
		wave: StringValue & {
			WaveAnim: Animation;
		};
		climb: StringValue & {
			ClimbAnim: Animation;
		};
		toolslash: StringValue & {
			ToolSlashAnim: Animation;
		};
		PlayEmote: BindableFunction;
		swimidle: StringValue & {
			SwimIdle: Animation;
		};
		toollunge: StringValue & {
			ToolLungeAnim: Animation;
		};
		walk: StringValue & {
			WalkAnim: Animation;
		};
	};
	StarterCharacter: Model & {
		HumanoidRootPart: MeshPart & {
			JumpForce: Attachment;
			Handles: Handles;
			AntiGravity: VectorForce;
		};
		Humanoid: Humanoid;
	};
	Brushtool2_Plugin_Storage: Folder & {
		["572995537_BrushtoolBrushObjects"]: Folder & {
			["{0d5107ee-a69d-4ff4-867c-6829386d00ec}"]: Folder & {
				["Meshes/Grass_A_03_Grass_A_03_LOD0"]: MeshPart;
			};
			["{a72fa5b5-979c-4f28-a981-126ac0f0fcbc}"]: Folder & {
				["Meshes/Flora_A_01_Flora_A_01_LOD0"]: MeshPart;
			};
			["{819485d2-c2a3-4ae2-9109-e7479fae38cb}"]: Folder & {
				["Meshes/Grass_B_03_Grass_B_03_LOD0"]: MeshPart;
			};
			["{847ca4c1-a4a2-4ba5-9162-d12b994b906a}"]: Folder & {
				["Meshes/Flora_A_03_Flora_A_03_LOD0"]: MeshPart;
			};
			["{e868001b-e1f6-4e10-b364-e5fa4231aaab}"]: Folder & {
				["Meshes/Flora_B_02_Flora_B_02_LOD0"]: MeshPart;
			};
			["{b3156ba7-66ff-493e-b379-414f28220b98}"]: Folder & {
				["Meshes/Flora_B_01_Flora_B_01_LOD0"]: MeshPart;
			};
			["{5eab37f3-a1d6-4d4b-b96a-8e0ef1ae33cf}"]: Folder & {
				["Meshes/Grass_A_04_Grass_A_04_LOD0"]: MeshPart;
			};
			["{c27cfe24-a1ea-4494-91fa-3356e8197f9f}"]: Folder & {
				["Meshes/Grass_B_02_Grass_B_02_LOD0"]: MeshPart;
			};
			["{72863dd3-022c-4a38-9607-436222f90657}"]: Folder & {
				["Meshes/Flora_A_02_Flora_A_02_LOD0"]: MeshPart;
			};
			["{af114e5c-5fc4-405e-a68f-9d004d2173de}"]: Folder & {
				["Meshes/Grass_B_05_Grass_B_05_LOD0"]: MeshPart;
			};
			["{6e13cc3d-e979-427f-8858-eaca1247a07d}"]: Folder & {
				["Meshes/Grass_A_06_Grass_A_06_LOD0"]: MeshPart;
			};
			["{74d2d1b4-3fa5-4e30-8905-6401dadfd485}"]: Folder & {
				["Meshes/Grass_B_06_Grass_B_06_LOD0"]: MeshPart;
			};
			["{c35a724e-88a7-4e59-acbd-c68aea958e89}"]: Folder & {
				["Meshes/Grass_A_01_Grass_A_01_LOD0"]: MeshPart;
			};
			["{945d0bb6-7db9-4e1f-b1ec-7877e0b037c2}"]: Folder & {
				["Meshes/Flora_B_03_Flora_B_03_LOD0"]: MeshPart;
			};
		};
		["572995537_BrushtoolStampObjects"]: Folder & {
			["{EA0887D3-1F39-4F5C-88E9-9C2341526468}"]: Folder & {
				CanopyTent: Model & {
					Visual: Model & {
						Legs: Part & {
							Mesh: SpecialMesh;
						};
						Canopy: Part & {
							Mesh: SpecialMesh;
						};
					};
					Collider: Model & {
						Canopy: MeshPart;
					};
					Base: Part;
				};
			};
		};
		["572995537_BrushtoolReferences"]: Folder & {
			stampedParent: Folder & {
				Value: ObjectValue;
			};
			brushedParent: Folder & {
				Value: ObjectValue;
			};
		};
		["572995537_BrushtoolTable"]: Folder & {
			erase: StringValue;
			stamp: StringValue;
			stampObjects: StringValue;
			brushObjects: StringValue;
			brush: StringValue;
		};
	};
	["Lumina Saves"]: Folder;
	UIPresets: Folder;
}
