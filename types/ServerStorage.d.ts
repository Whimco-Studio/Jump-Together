interface ServerStorage extends Instance {
	MissingAnimationChecker: Script;
	LargeAnimals: Folder & {
		Snake: Model & {
			AnimationController: AnimationController & {
				Animator: Animator;
			};
			AnimSaves: Model & {
				Spin: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["neck.01"]: Pose & {
											["neck.02"]: Pose & {
												head: Pose;
											};
										};
										["tail.01"]: Pose & {
											["tail.02"]: Pose & {
												["tail.03"]: Pose;
											};
										};
									};
								};
							};
						};
					};
				};
				Bounce: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["neck.01"]: Pose & {
											["neck.02"]: Pose & {
												head: Pose;
											};
										};
										["tail.01"]: Pose & {
											["tail.02"]: Pose & {
												["tail.03"]: Pose;
											};
										};
									};
								};
							};
						};
					};
				};
				Idle2: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["neck.01"]: Pose & {
											["neck.02"]: Pose & {
												head: Pose;
											};
										};
										["tail.01"]: Pose & {
											["tail.02"]: Pose & {
												["tail.03"]: Pose;
											};
										};
									};
								};
							};
						};
					};
				};
				Roll: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["neck.01"]: Pose & {
											["neck.02"]: Pose & {
												head: Pose;
											};
										};
										["tail.01"]: Pose & {
											["tail.02"]: Pose & {
												["tail.03"]: Pose;
											};
										};
									};
								};
							};
						};
					};
				};
				Eat: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["neck.01"]: Pose & {
											["neck.02"]: Pose & {
												head: Pose;
											};
										};
										["tail.01"]: Pose & {
											["tail.02"]: Pose & {
												["tail.03"]: Pose;
											};
										};
									};
								};
							};
						};
					};
				};
				Fear: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["neck.01"]: Pose & {
											["neck.02"]: Pose & {
												head: Pose;
											};
										};
										["tail.01"]: Pose & {
											["tail.02"]: Pose & {
												["tail.03"]: Pose;
											};
										};
									};
								};
							};
						};
					};
				};
				Idle: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["neck.01"]: Pose & {
											["neck.02"]: Pose & {
												head: Pose;
											};
										};
										["tail.01"]: Pose & {
											["tail.02"]: Pose & {
												["tail.03"]: Pose;
											};
										};
									};
								};
							};
						};
					};
				};
				Jump: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["neck.01"]: Pose & {
											["neck.02"]: Pose & {
												head: Pose;
											};
										};
										["tail.01"]: Pose & {
											["tail.02"]: Pose & {
												["tail.03"]: Pose;
											};
										};
									};
								};
							};
						};
					};
				};
				Sit: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["neck.01"]: Pose & {
											["neck.02"]: Pose & {
												head: Pose;
											};
										};
										["tail.01"]: Pose & {
											["tail.02"]: Pose & {
												["tail.03"]: Pose;
											};
										};
									};
								};
							};
						};
					};
				};
				Run: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["neck.01"]: Pose & {
											["neck.02"]: Pose & {
												head: Pose;
											};
										};
										["tail.01"]: Pose & {
											["tail.02"]: Pose & {
												["tail.03"]: Pose;
											};
										};
									};
								};
							};
						};
					};
				};
				Swim: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["neck.01"]: Pose & {
											["neck.02"]: Pose & {
												head: Pose;
											};
										};
										["tail.01"]: Pose & {
											["tail.02"]: Pose & {
												["tail.03"]: Pose;
											};
										};
									};
								};
							};
						};
					};
				};
				Walk: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["neck.01"]: Pose & {
											["neck.02"]: Pose & {
												head: Pose;
											};
										};
										["tail.01"]: Pose & {
											["tail.02"]: Pose & {
												["tail.03"]: Pose;
											};
										};
									};
								};
							};
						};
					};
				};
				Fly: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["neck.01"]: Pose & {
											["neck.02"]: Pose & {
												head: Pose;
											};
										};
										["tail.01"]: Pose & {
											["tail.02"]: Pose & {
												["tail.03"]: Pose;
											};
										};
									};
								};
							};
						};
					};
				};
				Death: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["neck.01"]: Pose & {
											["neck.02"]: Pose & {
												head: Pose;
											};
										};
										["tail.01"]: Pose & {
											["tail.02"]: Pose & {
												["tail.03"]: Pose;
											};
										};
									};
								};
							};
						};
					};
				};
				Idle3: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["neck.01"]: Pose & {
											["neck.02"]: Pose & {
												head: Pose;
											};
										};
										["tail.01"]: Pose & {
											["tail.02"]: Pose & {
												["tail.03"]: Pose;
											};
										};
									};
								};
							};
						};
					};
				};
				Clicked: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["neck.01"]: Pose & {
											["neck.02"]: Pose & {
												head: Pose;
											};
										};
										["tail.01"]: Pose & {
											["tail.02"]: Pose & {
												["tail.03"]: Pose;
											};
										};
									};
								};
							};
						};
					};
				};
				Hit: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["neck.01"]: Pose & {
											["neck.02"]: Pose & {
												head: Pose;
											};
										};
										["tail.01"]: Pose & {
											["tail.02"]: Pose & {
												["tail.03"]: Pose;
											};
										};
									};
								};
							};
						};
					};
				};
				Attack: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["neck.01"]: Pose & {
											["neck.02"]: Pose & {
												head: Pose;
											};
										};
										["tail.01"]: Pose & {
											["tail.02"]: Pose & {
												["tail.03"]: Pose;
											};
										};
									};
								};
							};
						};
					};
				};
			};
			AnimationsFolder: Folder;
			Mesh: MeshPart & {
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
			AnimationController: AnimationController;
			AnimSaves: Model & {
				Spin: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["feet.L"]: Pose;
										["tail.03"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Bounce: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["feet.L"]: Pose;
										["tail.03"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Idle2: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["feet.L"]: Pose;
										["tail.03"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Roll: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["feet.L"]: Pose;
										["tail.03"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Eat: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["feet.L"]: Pose;
										["tail.03"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Fear: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["feet.L"]: Pose;
										["tail.03"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Idle: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["feet.L"]: Pose;
										["tail.03"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Jump: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["feet.L"]: Pose;
										["tail.03"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Sit: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["feet.L"]: Pose;
										["tail.03"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Run: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["feet.L"]: Pose;
										["tail.03"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Swim: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["feet.L"]: Pose;
										["tail.03"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Walk: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["feet.L"]: Pose;
										["tail.03"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Fly: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["feet.L"]: Pose;
										["tail.03"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Death: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["feet.L"]: Pose;
										["tail.03"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Idle3: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["feet.L"]: Pose;
										["tail.03"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Clicked: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["feet.L"]: Pose;
										["tail.03"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Hit: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["feet.L"]: Pose;
										["tail.03"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Attack: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["feet.L"]: Pose;
										["tail.03"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
			};
			AnimationsFolder: Folder;
			Mesh: MeshPart & {
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
			AnimationController: AnimationController;
			AnimSaves: Model & {
				Spin: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["tail.01"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Bounce: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["tail.01"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Idle2: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["tail.01"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Roll: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["tail.01"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Eat: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["tail.01"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Fear: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["tail.01"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Idle: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["tail.01"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Jump: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["tail.01"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Sit: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["tail.01"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Run: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["tail.01"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Swim: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["tail.01"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Walk: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["tail.01"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Fly: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["tail.01"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Death: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["tail.01"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Idle3: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["tail.01"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Clicked: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["tail.01"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Hit: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["tail.01"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Attack: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["tail.01"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
			};
			AnimationsFolder: Folder;
			Mesh: MeshPart & {
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
			AnimationController: AnimationController & {
				Animator: Animator;
			};
			AnimSaves: Model & {
				Spin: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["tail.01"]: Pose;
										["feet.L"]: Pose;
										["tail.02"]: Pose;
										["wing.R"]: Pose;
										["wing.L"]: Pose;
									};
								};
							};
						};
					};
				};
				Bounce: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["tail.01"]: Pose;
										["feet.L"]: Pose;
										["tail.02"]: Pose;
										["wing.R"]: Pose;
										["wing.L"]: Pose;
									};
								};
							};
						};
					};
				};
				Idle2: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["tail.01"]: Pose;
										["feet.L"]: Pose;
										["tail.02"]: Pose;
										["wing.R"]: Pose;
										["wing.L"]: Pose;
									};
								};
							};
						};
					};
				};
				Roll: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["tail.01"]: Pose;
										["feet.L"]: Pose;
										["tail.02"]: Pose;
										["wing.R"]: Pose;
										["wing.L"]: Pose;
									};
								};
							};
						};
					};
				};
				Eat: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["tail.01"]: Pose;
										["feet.L"]: Pose;
										["tail.02"]: Pose;
										["wing.R"]: Pose;
										["wing.L"]: Pose;
									};
								};
							};
						};
					};
				};
				Fear: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["tail.01"]: Pose;
										["feet.L"]: Pose;
										["tail.02"]: Pose;
										["wing.R"]: Pose;
										["wing.L"]: Pose;
									};
								};
							};
						};
					};
				};
				Idle: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["tail.01"]: Pose;
										["feet.L"]: Pose;
										["tail.02"]: Pose;
										["wing.R"]: Pose;
										["wing.L"]: Pose;
									};
								};
							};
						};
					};
				};
				Jump: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["tail.01"]: Pose;
										["feet.L"]: Pose;
										["tail.02"]: Pose;
										["wing.R"]: Pose;
										["wing.L"]: Pose;
									};
								};
							};
						};
					};
				};
				Sit: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["tail.01"]: Pose;
										["feet.L"]: Pose;
										["tail.02"]: Pose;
										["wing.R"]: Pose;
										["wing.L"]: Pose;
									};
								};
							};
						};
					};
				};
				Run: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["tail.01"]: Pose;
										["feet.L"]: Pose;
										["tail.02"]: Pose;
										["wing.R"]: Pose;
										["wing.L"]: Pose;
									};
								};
							};
						};
					};
				};
				Swim: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["tail.01"]: Pose;
										["feet.L"]: Pose;
										["tail.02"]: Pose;
										["wing.R"]: Pose;
										["wing.L"]: Pose;
									};
								};
							};
						};
					};
				};
				Walk: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["tail.01"]: Pose;
										["feet.L"]: Pose;
										["tail.02"]: Pose;
										["wing.R"]: Pose;
										["wing.L"]: Pose;
									};
								};
							};
						};
					};
				};
				Fly: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["tail.01"]: Pose;
										["feet.L"]: Pose;
										["tail.02"]: Pose;
										["wing.R"]: Pose;
										["wing.L"]: Pose;
									};
								};
							};
						};
					};
				};
				Death: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["tail.01"]: Pose;
										["feet.L"]: Pose;
										["tail.02"]: Pose;
										["wing.R"]: Pose;
										["wing.L"]: Pose;
									};
								};
							};
						};
					};
				};
				Idle3: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["tail.01"]: Pose;
										["feet.L"]: Pose;
										["tail.02"]: Pose;
										["wing.R"]: Pose;
										["wing.L"]: Pose;
									};
								};
							};
						};
					};
				};
				Clicked: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["tail.01"]: Pose;
										["feet.L"]: Pose;
										["tail.02"]: Pose;
										["wing.R"]: Pose;
										["wing.L"]: Pose;
									};
								};
							};
						};
					};
				};
				Hit: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["tail.01"]: Pose;
										["feet.L"]: Pose;
										["tail.02"]: Pose;
										["wing.R"]: Pose;
										["wing.L"]: Pose;
									};
								};
							};
						};
					};
				};
				Attack: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["tail.01"]: Pose;
										["feet.L"]: Pose;
										["tail.02"]: Pose;
										["wing.R"]: Pose;
										["wing.L"]: Pose;
									};
								};
							};
						};
					};
				};
			};
			AnimationsFolder: Folder;
			Mesh: MeshPart & {
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
			AnimationController: AnimationController & {
				Animator: Animator;
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
			Mesh: MeshPart & {
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
			AnimSaves: Model & {
				Spin: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose;
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.B.L"]: Pose;
									["ear.L"]: Pose;
									["leg.B.R"]: Pose;
									["tail.01"]: Pose & {
										["tail.02"]: Pose;
									};
									["leg.F.L"]: Pose;
									["leg.F.R"]: Pose;
									["ear.R"]: Pose;
								};
							};
						};
						Rig: Pose;
					};
				};
				Bounce: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose;
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.B.L"]: Pose;
									["ear.L"]: Pose;
									["leg.B.R"]: Pose;
									["tail.01"]: Pose & {
										["tail.02"]: Pose;
									};
									["leg.F.L"]: Pose;
									["leg.F.R"]: Pose;
									["ear.R"]: Pose;
								};
							};
						};
						Rig: Pose;
					};
				};
				Idle2: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose;
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.B.L"]: Pose;
									["ear.L"]: Pose;
									["leg.B.R"]: Pose;
									["leg.F.R"]: Pose;
									["leg.F.L"]: Pose;
									["tail.01"]: Pose & {
										["tail.02"]: Pose;
									};
									["ear.R"]: Pose;
								};
							};
						};
						Rig: Pose;
					};
				};
				Roll: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose;
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.B.L"]: Pose;
									["ear.L"]: Pose;
									["leg.B.R"]: Pose;
									["tail.01"]: Pose & {
										["tail.02"]: Pose;
									};
									["leg.F.L"]: Pose;
									["leg.F.R"]: Pose;
									["ear.R"]: Pose;
								};
							};
						};
						Rig: Pose;
					};
				};
				Eat: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose;
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.B.L"]: Pose;
									["ear.L"]: Pose;
									["leg.B.R"]: Pose;
									["tail.01"]: Pose & {
										["tail.02"]: Pose;
									};
									["leg.F.L"]: Pose;
									["leg.F.R"]: Pose;
									["ear.R"]: Pose;
								};
							};
						};
						Rig: Pose;
					};
				};
				Fear: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose;
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.B.L"]: Pose;
									["ear.L"]: Pose;
									["leg.B.R"]: Pose;
									["tail.01"]: Pose & {
										["tail.02"]: Pose;
									};
									["leg.F.L"]: Pose;
									["leg.F.R"]: Pose;
									["ear.R"]: Pose;
								};
							};
						};
						Rig: Pose;
					};
				};
				Idle: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose;
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.B.L"]: Pose;
									["ear.L"]: Pose;
									["leg.B.R"]: Pose;
									["tail.01"]: Pose & {
										["tail.02"]: Pose;
									};
									["leg.F.L"]: Pose;
									["leg.F.R"]: Pose;
									["ear.R"]: Pose;
								};
							};
						};
						Rig: Pose;
					};
				};
				Jump: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose;
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.B.L"]: Pose;
									["ear.L"]: Pose;
									["leg.B.R"]: Pose;
									["tail.01"]: Pose & {
										["tail.02"]: Pose;
									};
									["leg.F.L"]: Pose;
									["leg.F.R"]: Pose;
									["ear.R"]: Pose;
								};
							};
						};
						Rig: Pose;
					};
				};
				Sit: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose;
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.B.L"]: Pose;
									["ear.L"]: Pose;
									["leg.B.R"]: Pose;
									["tail.01"]: Pose & {
										["tail.02"]: Pose;
									};
									["leg.F.L"]: Pose;
									["leg.F.R"]: Pose;
									["ear.R"]: Pose;
								};
							};
						};
						Rig: Pose;
					};
				};
				Run: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose;
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.B.L"]: Pose;
									["ear.L"]: Pose;
									["leg.B.R"]: Pose;
									["tail.01"]: Pose & {
										["tail.02"]: Pose;
									};
									["leg.F.L"]: Pose;
									["leg.F.R"]: Pose;
									["ear.R"]: Pose;
								};
							};
						};
						Rig: Pose;
					};
				};
				Swim: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose;
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.B.L"]: Pose;
									["ear.L"]: Pose;
									["leg.B.R"]: Pose;
									["tail.01"]: Pose & {
										["tail.02"]: Pose;
									};
									["leg.F.L"]: Pose;
									["leg.F.R"]: Pose;
									["ear.R"]: Pose;
								};
							};
						};
						Rig: Pose;
					};
				};
				Walk: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose;
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.B.L"]: Pose;
									["ear.L"]: Pose;
									["leg.B.R"]: Pose;
									["tail.01"]: Pose & {
										["tail.02"]: Pose;
									};
									["leg.F.L"]: Pose;
									["leg.F.R"]: Pose;
									["ear.R"]: Pose;
								};
							};
						};
						Rig: Pose;
					};
				};
				Fly: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose;
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.B.L"]: Pose;
									["ear.L"]: Pose;
									["leg.B.R"]: Pose;
									["tail.01"]: Pose & {
										["tail.02"]: Pose;
									};
									["leg.F.L"]: Pose;
									["leg.F.R"]: Pose;
									["ear.R"]: Pose;
								};
							};
						};
						Rig: Pose;
					};
				};
				Death: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose;
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.B.L"]: Pose;
									["ear.L"]: Pose;
									["leg.B.R"]: Pose;
									["tail.01"]: Pose & {
										["tail.02"]: Pose;
									};
									["leg.F.L"]: Pose;
									["leg.F.R"]: Pose;
									["ear.R"]: Pose;
								};
							};
						};
						Rig: Pose;
					};
				};
				Idle3: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose;
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.B.L"]: Pose;
									["ear.L"]: Pose;
									["leg.B.R"]: Pose;
									["tail.01"]: Pose & {
										["tail.02"]: Pose;
									};
									["leg.F.L"]: Pose;
									["leg.F.R"]: Pose;
									["ear.R"]: Pose;
								};
							};
						};
						Rig: Pose;
					};
				};
				Clicked: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose;
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.B.L"]: Pose;
									["ear.L"]: Pose;
									["leg.B.R"]: Pose;
									["tail.01"]: Pose & {
										["tail.02"]: Pose;
									};
									["leg.F.L"]: Pose;
									["leg.F.R"]: Pose;
									["ear.R"]: Pose;
								};
							};
						};
						Rig: Pose;
					};
				};
				Hit: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose;
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.B.L"]: Pose;
									["ear.L"]: Pose;
									["leg.B.R"]: Pose;
									["tail.01"]: Pose & {
										["tail.02"]: Pose;
									};
									["leg.F.L"]: Pose;
									["leg.F.R"]: Pose;
									["ear.R"]: Pose;
								};
							};
						};
						Rig: Pose;
					};
				};
				Attack: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose;
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.B.L"]: Pose;
									["ear.L"]: Pose;
									["leg.B.R"]: Pose;
									["tail.01"]: Pose & {
										["tail.02"]: Pose;
									};
									["leg.F.L"]: Pose;
									["leg.F.R"]: Pose;
									["ear.R"]: Pose;
								};
							};
						};
						Rig: Pose;
					};
				};
			};
		};
		Penguin: Model & {
			AnimationController: AnimationController & {
				Animator: Animator;
			};
			AnimSaves: Model & {
				Spin: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["feet.R"]: Pose;
									["tail.01"]: Pose;
									["hair.01"]: Pose;
									["wing.R"]: Pose;
									["wing.L"]: Pose;
									["feet.L"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
				Bounce: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["feet.R"]: Pose;
									["tail.01"]: Pose;
									["hair.01"]: Pose;
									["wing.R"]: Pose;
									["wing.L"]: Pose;
									["feet.L"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
				Idle2: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["feet.R"]: Pose;
									["tail.01"]: Pose;
									["hair.01"]: Pose;
									["wing.R"]: Pose;
									["wing.L"]: Pose;
									["feet.L"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
				Roll: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["feet.R"]: Pose;
									["feet.L"]: Pose;
									["hair.01"]: Pose;
									["tail.01"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
				Eat: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["feet.R"]: Pose;
									["feet.L"]: Pose;
									["hair.01"]: Pose;
									["tail.01"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
				Fear: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["feet.R"]: Pose;
									["tail.01"]: Pose;
									["hair.01"]: Pose;
									["wing.R"]: Pose;
									["wing.L"]: Pose;
									["feet.L"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
				Idle: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["feet.R"]: Pose;
									["tail.01"]: Pose;
									["hair.01"]: Pose;
									["wing.R"]: Pose;
									["wing.L"]: Pose;
									["feet.L"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
				Jump: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["feet.R"]: Pose;
									["tail.01"]: Pose;
									["hair.01"]: Pose;
									["wing.R"]: Pose;
									["wing.L"]: Pose;
									["feet.L"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
				Sit: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["feet.R"]: Pose;
									["tail.01"]: Pose;
									["hair.01"]: Pose;
									["wing.R"]: Pose;
									["wing.L"]: Pose;
									["feet.L"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
				Run: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["feet.R"]: Pose;
									["tail.01"]: Pose;
									["hair.01"]: Pose;
									["wing.R"]: Pose;
									["wing.L"]: Pose;
									["feet.L"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
				Swim: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["feet.R"]: Pose;
									["tail.01"]: Pose;
									["hair.01"]: Pose;
									["wing.R"]: Pose;
									["wing.L"]: Pose;
									["feet.L"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
				Walk: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["wing.L"]: Pose;
									};
								};
							};
						};
					};
				};
				Idle3: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["feet.R"]: Pose;
									["tail.01"]: Pose;
									["hair.01"]: Pose;
									["wing.R"]: Pose;
									["wing.L"]: Pose;
									["feet.L"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
				Death: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["feet.R"]: Pose;
									["tail.01"]: Pose;
									["feet.L"]: Pose;
									["wing.L"]: Pose;
									["wing.R"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
				Fly: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["feet.R"]: Pose;
									["tail.01"]: Pose;
									["hair.01"]: Pose;
									["wing.R"]: Pose;
									["wing.L"]: Pose;
									["feet.L"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
				Clicked: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["feet.R"]: Pose;
									["tail.01"]: Pose;
									["hair.01"]: Pose;
									["wing.R"]: Pose;
									["wing.L"]: Pose;
									["feet.L"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
				Hit: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["feet.R"]: Pose;
									["tail.01"]: Pose;
									["hair.01"]: Pose;
									["wing.R"]: Pose;
									["wing.L"]: Pose;
									["feet.L"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
				Attack: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["feet.R"]: Pose;
									["tail.01"]: Pose;
									["hair.01"]: Pose;
									["wing.R"]: Pose;
									["wing.L"]: Pose;
									["feet.L"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
			};
			AnimationsFolder: Folder;
			Mesh: MeshPart & {
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
			AnimationController: AnimationController;
			AnimSaves: Model & {
				Spin: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Bounce: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Idle2: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Roll: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Eat: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Fear: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Idle: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Jump: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Sit: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Run: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Swim: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Walk: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Fly: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Death: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Idle3: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Clicked: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Hit: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Attack: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
			};
			AnimationsFolder: Folder;
			Mesh: MeshPart & {
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
			AnimationController: AnimationController;
			AnimSaves: Model & {
				Spin: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Bounce: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Idle2: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Roll: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Eat: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Fear: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Idle: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Jump: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Sit: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Run: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Swim: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Walk: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Fly: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Death: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Idle3: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Clicked: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Hit: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Attack: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
			};
			AnimationsFolder: Folder;
			Mesh: MeshPart & {
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
			AnimationController: AnimationController;
			AnimSaves: Model & {
				Spin: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Bounce: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Idle2: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Roll: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Eat: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Fear: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Idle: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Jump: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Sit: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Run: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Swim: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Walk: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Fly: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Death: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Idle3: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Clicked: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Hit: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Attack: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
			};
			AnimationsFolder: Folder;
			Mesh: MeshPart & {
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
			AnimationController: AnimationController;
			AnimSaves: Model & {
				Spin: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Bounce: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Idle2: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Roll: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Eat: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Fear: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Idle: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Jump: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Sit: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Run: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Swim: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Walk: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Fly: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Death: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Idle3: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Clicked: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Hit: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Attack: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
			};
			AnimationsFolder: Folder;
			Mesh: MeshPart & {
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
			AnimationController: AnimationController;
			AnimSaves: Model & {
				Spin: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["fin.L"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["fin.R"]: Pose;
										["fin.02"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Bounce: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["fin.L"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["fin.R"]: Pose;
										["fin.02"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Idle2: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["fin.L"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["fin.R"]: Pose;
										["fin.02"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Roll: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["fin.L"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["fin.R"]: Pose;
										["fin.02"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Eat: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["fin.L"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["fin.R"]: Pose;
										["fin.02"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Fear: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["fin.L"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["fin.R"]: Pose;
										["fin.02"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Idle: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["fin.L"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["fin.R"]: Pose;
										["fin.02"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Jump: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["fin.L"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["fin.R"]: Pose;
										["fin.02"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Sit: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["fin.L"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["fin.R"]: Pose;
										["fin.02"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Run: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["fin.L"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["fin.R"]: Pose;
										["fin.02"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Swim: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["fin.L"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["fin.R"]: Pose;
										["fin.02"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Walk: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["fin.L"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["fin.R"]: Pose;
										["fin.02"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Fly: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["fin.L"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["fin.R"]: Pose;
										["fin.02"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Death: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["fin.L"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["fin.R"]: Pose;
										["fin.02"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Idle3: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["fin.L"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["fin.R"]: Pose;
										["fin.02"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Clicked: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["fin.L"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["fin.R"]: Pose;
										["fin.02"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Hit: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["fin.L"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["fin.R"]: Pose;
										["fin.02"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Attack: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["fin.L"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["fin.R"]: Pose;
										["fin.02"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
			};
			AnimationsFolder: Folder;
			Mesh: MeshPart & {
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
			AnimationController: AnimationController;
			AnimSaves: Model & {
				Spin: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Bounce: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Idle2: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Roll: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Eat: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Fear: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Delete: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Idle: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Jump: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Sit: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Run: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Swim: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Walk: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Fly: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Death: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Idle3: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Clicked: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Hit: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Attack: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
			};
			AnimationsFolder: Folder;
			Mesh: MeshPart & {
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
		Tortoise: Model & {
			AnimationController: AnimationController;
			AnimSaves: Model & {
				Spin: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.B.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.L"]: Pose;
										["leg.F.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Bounce: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.B.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.L"]: Pose;
										["leg.F.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Idle2: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.B.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.L"]: Pose;
										["leg.F.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Roll: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.B.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.L"]: Pose;
										["leg.F.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Eat: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.B.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.L"]: Pose;
										["leg.F.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Fear: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.B.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.L"]: Pose;
										["leg.F.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Idle: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.B.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.L"]: Pose;
										["leg.F.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Jump: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.B.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.L"]: Pose;
										["leg.F.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Sit: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.B.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.L"]: Pose;
										["leg.F.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Run: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.B.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.L"]: Pose;
										["leg.F.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Swim: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.B.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.L"]: Pose;
										["leg.F.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Walk: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.B.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.L"]: Pose;
										["leg.F.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Fly: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.B.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.L"]: Pose;
										["leg.F.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Death: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.B.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.L"]: Pose;
										["leg.F.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Idle3: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.B.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.L"]: Pose;
										["leg.F.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Clicked: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.B.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.L"]: Pose;
										["leg.F.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Hit: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.B.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.L"]: Pose;
										["leg.F.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Attack: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.B.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.L"]: Pose;
										["leg.F.R"]: Pose;
									};
								};
							};
						};
					};
				};
			};
			AnimationsFolder: Folder;
			Mesh: MeshPart & {
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
		Mice: Model & {
			AnimationController: AnimationController;
			AnimSaves: Model & {
				Spin: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Bounce: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Idle2: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Roll: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Eat: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Fear: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Idle: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Jump: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Sit: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Run: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Swim: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Walk: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Fly: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Death: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Idle3: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Clicked: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Hit: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Attack: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
			};
			AnimationsFolder: Folder;
			Mesh: MeshPart & {
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
		Pig: Model & {
			AnimationController: AnimationController;
			AnimSaves: Model & {
				Spin: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Bounce: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Idle2: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Roll: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Eat: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Fear: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Idle: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Jump: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Sit: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Run: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Swim: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Walk: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Fly: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Death: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Idle3: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Clicked: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Hit: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Attack: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
			};
			AnimationsFolder: Folder;
			Mesh: MeshPart & {
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
		Donkey: Model & {
			AnimationController: AnimationController;
			AnimSaves: Model & {
				Spin: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Bounce: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Idle2: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Roll: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Eat: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Fear: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Idle: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Jump: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Sit: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Run: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Swim: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Walk: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Fly: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Death: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Idle3: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Clicked: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Hit: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Attack: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
			};
			AnimationsFolder: Folder;
			Mesh: MeshPart & {
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
			AnimationController: AnimationController;
			AnimSaves: Model & {
				Spin: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Bounce: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Idle2: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Roll: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Eat: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Fear: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Idle: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Jump: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Sit: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Run: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Swim: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Walk: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Fly: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Death: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Idle3: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Clicked: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Hit: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Attack: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
			};
			AnimationsFolder: Folder;
			Mesh: MeshPart & {
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
			AnimationController: AnimationController;
			AnimSaves: Model & {
				Spin: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Bounce: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Idle2: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Roll: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Eat: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Fear: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Idle: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Jump: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Sit: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Run: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Swim: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Walk: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Fly: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Death: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Idle3: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Clicked: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Hit: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Attack: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
			};
			AnimationsFolder: Folder;
			Mesh: MeshPart & {
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
			AnimationController: AnimationController;
			AnimSaves: Model & {
				Spin: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Bounce: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Idle2: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Roll: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Eat: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Fear: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Idle: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Jump: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Sit: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Run: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Swim: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Walk: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Fly: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Death: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Idle3: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Clicked: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Hit: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Attack: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
			};
			AnimationsFolder: Folder;
			Mesh: MeshPart & {
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
			AnimationController: AnimationController;
			AnimSaves: Model & {
				Spin: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Bounce: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Idle2: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Roll: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Eat: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Fear: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Idle: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Jump: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Sit: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Run: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Swim: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Walk: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Fly: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Death: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Idle3: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Clicked: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Hit: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Attack: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
			};
			AnimationsFolder: Folder;
			Mesh: MeshPart & {
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
			AnimationController: AnimationController;
			AnimSaves: Model & {
				Spin: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["wing.R"]: Pose;
										["hair.01"]: Pose;
										["tail.01"]: Pose;
										["feet.L"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Bounce: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["wing.R"]: Pose;
										["hair.01"]: Pose;
										["tail.01"]: Pose;
										["feet.L"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Idle2: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["wing.R"]: Pose;
										["hair.01"]: Pose;
										["tail.01"]: Pose;
										["feet.L"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Roll: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["wing.R"]: Pose;
										["hair.01"]: Pose;
										["tail.01"]: Pose;
										["feet.L"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Eat: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["wing.R"]: Pose;
										["hair.01"]: Pose;
										["tail.01"]: Pose;
										["feet.L"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Fear: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["wing.R"]: Pose;
										["hair.01"]: Pose;
										["tail.01"]: Pose;
										["feet.L"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Idle: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["wing.R"]: Pose;
										["hair.01"]: Pose;
										["tail.01"]: Pose;
										["feet.L"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Jump: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["wing.R"]: Pose;
										["hair.01"]: Pose;
										["tail.01"]: Pose;
										["feet.L"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Sit: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["wing.R"]: Pose;
										["hair.01"]: Pose;
										["tail.01"]: Pose;
										["feet.L"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Run: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["wing.R"]: Pose;
										["hair.01"]: Pose;
										["tail.01"]: Pose;
										["feet.L"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Swim: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["wing.R"]: Pose;
										["hair.01"]: Pose;
										["tail.01"]: Pose;
										["feet.L"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Walk: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["wing.R"]: Pose;
										["hair.01"]: Pose;
										["tail.01"]: Pose;
										["feet.L"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Fly: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["wing.R"]: Pose;
										["hair.01"]: Pose;
										["tail.01"]: Pose;
										["feet.L"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Death: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["wing.R"]: Pose;
										["hair.01"]: Pose;
										["tail.01"]: Pose;
										["feet.L"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Idle3: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["wing.R"]: Pose;
										["hair.01"]: Pose;
										["tail.01"]: Pose;
										["feet.L"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Clicked: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["wing.R"]: Pose;
										["hair.01"]: Pose;
										["tail.01"]: Pose;
										["feet.L"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Hit: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["wing.R"]: Pose;
										["hair.01"]: Pose;
										["tail.01"]: Pose;
										["feet.L"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Attack: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["wing.R"]: Pose;
										["hair.01"]: Pose;
										["tail.01"]: Pose;
										["feet.L"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
			};
			AnimationsFolder: Folder;
			Mesh: MeshPart & {
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
			AnimationController: AnimationController;
			AnimSaves: Model & {
				Spin: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Bounce: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Idle2: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Roll: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Eat: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Fear: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Idle: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Jump: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Sit: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Run: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Swim: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Walk: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Fly: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Death: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Idle3: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Clicked: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Hit: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Attack: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
			};
			AnimationsFolder: Folder;
			Mesh: MeshPart & {
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
		SnowOwl: Model & {
			AnimationController: AnimationController;
			Mesh: MeshPart & {
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
		Cat: Model & {
			AnimationController: AnimationController;
			AnimSaves: Model & {
				Spin: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Bounce: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Idle2: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Roll: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Eat: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Fear: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Idle: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Jump: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Sit: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Run: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Swim: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Walk: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Fly: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Death: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Idle3: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Clicked: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Hit: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Attack: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
			};
			AnimationsFolder: Folder;
			Mesh: MeshPart & {
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
		Rhino: Model & {
			AnimationController: AnimationController;
			AnimSaves: Model & {
				Spin: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Bounce: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Idle2: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Roll: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Eat: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Fear: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Idle: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Jump: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Sit: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Run: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Swim: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Walk: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Fly: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Death: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Idle3: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Clicked: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Hit: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Attack: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
			};
			AnimationsFolder: Folder;
			Mesh: MeshPart & {
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
		Hippo: Model & {
			AnimationController: AnimationController;
			AnimSaves: Model & {
				Spin: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Bounce: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Idle2: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Roll: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Eat: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Fear: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Idle: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Jump: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Sit: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Run: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Swim: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Walk: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Fly: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Death: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Idle3: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Clicked: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Hit: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Attack: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
			};
			AnimationsFolder: Folder;
			Mesh: MeshPart & {
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
		Wolf: Model & {
			AnimationController: AnimationController;
			AnimSaves: Model & {
				Spin: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Bounce: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Idle2: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Roll: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Eat: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Fear: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Idle: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Jump: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Sit: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Run: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Swim: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Walk: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Fly: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Death: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Idle3: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Clicked: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Hit: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Attack: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
			};
			AnimationsFolder: Folder;
			Mesh: MeshPart & {
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
		Antelope: Model & {
			AnimationController: AnimationController;
			AnimSaves: Model & {
				Spin: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Bounce: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Idle2: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Roll: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Eat: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Fear: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Idle: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Jump: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Sit: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Run: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Swim: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Walk: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Fly: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Death: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Idle3: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Clicked: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Hit: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Attack: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
			};
			AnimationsFolder: Folder;
			Mesh: MeshPart & {
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
		Elephant: Model & {
			AnimationController: AnimationController & {
				Animator: Animator;
			};
			AnimSaves: Model & {
				Spin: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["trunk.01"]: Pose & {
											["trunk.02"]: Pose & {
												["trunk.03"]: Pose & {
													["trunk.04"]: Pose;
												};
											};
										};
										["tail.01"]: Pose;
										["leg.B.R"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Bounce: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["trunk.01"]: Pose & {
											["trunk.02"]: Pose & {
												["trunk.03"]: Pose & {
													["trunk.04"]: Pose;
												};
											};
										};
										["tail.01"]: Pose;
										["leg.B.R"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Idle2: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["trunk.01"]: Pose & {
											["trunk.02"]: Pose & {
												["trunk.03"]: Pose & {
													["trunk.04"]: Pose;
												};
											};
										};
										["tail.01"]: Pose;
										["leg.B.R"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Roll: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["trunk.01"]: Pose & {
											["trunk.02"]: Pose & {
												["trunk.03"]: Pose & {
													["trunk.04"]: Pose;
												};
											};
										};
										["tail.01"]: Pose;
										["leg.B.R"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Eat: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["trunk.01"]: Pose & {
											["trunk.02"]: Pose & {
												["trunk.03"]: Pose & {
													["trunk.04"]: Pose;
												};
											};
										};
										["tail.01"]: Pose;
										["leg.B.R"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Fear: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["trunk.01"]: Pose & {
											["trunk.02"]: Pose & {
												["trunk.03"]: Pose & {
													["trunk.04"]: Pose;
												};
											};
										};
										["tail.01"]: Pose;
										["leg.B.R"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Idle: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["trunk.01"]: Pose & {
											["trunk.02"]: Pose & {
												["trunk.03"]: Pose & {
													["trunk.04"]: Pose;
												};
											};
										};
										["tail.01"]: Pose;
										["leg.B.R"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Jump: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["trunk.01"]: Pose & {
											["trunk.02"]: Pose & {
												["trunk.03"]: Pose & {
													["trunk.04"]: Pose;
												};
											};
										};
										["tail.01"]: Pose;
										["leg.B.R"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Sit: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["trunk.01"]: Pose & {
											["trunk.02"]: Pose & {
												["trunk.03"]: Pose & {
													["trunk.04"]: Pose;
												};
											};
										};
										["tail.01"]: Pose;
										["leg.B.R"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Run: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["trunk.01"]: Pose & {
											["trunk.02"]: Pose & {
												["trunk.03"]: Pose & {
													["trunk.04"]: Pose;
												};
											};
										};
										["tail.01"]: Pose;
										["leg.B.R"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Swim: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["trunk.01"]: Pose & {
											["trunk.02"]: Pose & {
												["trunk.03"]: Pose & {
													["trunk.04"]: Pose;
												};
											};
										};
										["tail.01"]: Pose;
										["leg.B.R"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Walk: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["trunk.01"]: Pose & {
											["trunk.02"]: Pose & {
												["trunk.03"]: Pose & {
													["trunk.04"]: Pose;
												};
											};
										};
										["tail.01"]: Pose;
										["leg.B.R"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Fly: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["trunk.01"]: Pose & {
											["trunk.02"]: Pose & {
												["trunk.03"]: Pose & {
													["trunk.04"]: Pose;
												};
											};
										};
										["tail.01"]: Pose;
										["leg.B.R"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Death: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["trunk.01"]: Pose & {
											["trunk.02"]: Pose & {
												["trunk.03"]: Pose & {
													["trunk.04"]: Pose;
												};
											};
										};
										["tail.01"]: Pose;
										["leg.B.R"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Idle3: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["trunk.01"]: Pose & {
											["trunk.02"]: Pose & {
												["trunk.03"]: Pose & {
													["trunk.04"]: Pose;
												};
											};
										};
										["tail.01"]: Pose;
										["leg.B.R"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Clicked: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["trunk.01"]: Pose & {
											["trunk.02"]: Pose & {
												["trunk.03"]: Pose & {
													["trunk.04"]: Pose;
												};
											};
										};
										["tail.01"]: Pose;
										["leg.B.R"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Hit: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["trunk.01"]: Pose & {
											["trunk.02"]: Pose & {
												["trunk.03"]: Pose & {
													["trunk.04"]: Pose;
												};
											};
										};
										["tail.01"]: Pose;
										["leg.B.R"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Attack: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["trunk.01"]: Pose & {
											["trunk.02"]: Pose & {
												["trunk.03"]: Pose & {
													["trunk.04"]: Pose;
												};
											};
										};
										["tail.01"]: Pose;
										["leg.B.R"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
			};
			AnimationsFolder: Folder;
			Mesh: MeshPart & {
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
		Chicken: Model & {
			AnimationController: AnimationController & {
				Animator: Animator;
			};
			AnimSaves: Model & {
				Spin: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Bounce: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Idle2: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Roll: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Eat: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Fear: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Idle: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Jump: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Sit: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Run: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Swim: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Walk: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Fly: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Death: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Idle3: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Clicked: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Hit: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Attack: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
			};
			AnimationsFolder: Folder;
			Mesh: MeshPart & {
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
		Rabbit: Model & {
			AnimationController: AnimationController;
			AnimSaves: Model & {
				Spin: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Bounce: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Idle2: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Roll: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Eat: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Fear: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Idle: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Jump: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Sit: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Run: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Swim: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Walk: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Fly: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Death: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Idle3: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Clicked: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Hit: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Attack: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
			};
			AnimationsFolder: Folder;
			Mesh: MeshPart & {
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
		Reindeer: Model & {
			AnimationController: AnimationController & {
				Animator: Animator;
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
			Mesh: MeshPart & {
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
			AnimSaves: Model & {
				Spin: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.B.L"]: Pose;
									["ear.L"]: Pose;
									["leg.B.R"]: Pose;
									["leg.F.R"]: Pose;
									["tail.01"]: Pose;
									["leg.F.L"]: Pose;
									["ear.R"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
				Bounce: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.B.L"]: Pose;
									["ear.L"]: Pose;
									["leg.B.R"]: Pose;
									["leg.F.R"]: Pose;
									["tail.01"]: Pose;
									["leg.F.L"]: Pose;
									["ear.R"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
				Idle2: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.B.L"]: Pose;
									["ear.L"]: Pose;
									["leg.B.R"]: Pose;
									["leg.F.R"]: Pose;
									["tail.01"]: Pose;
									["leg.F.L"]: Pose;
									["ear.R"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
				Roll: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.B.L"]: Pose;
									["ear.L"]: Pose;
									["leg.B.R"]: Pose;
									["leg.F.R"]: Pose;
									["tail.01"]: Pose;
									["leg.F.L"]: Pose;
									["ear.R"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
				Eat: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.B.L"]: Pose;
									["ear.L"]: Pose;
									["leg.B.R"]: Pose;
									["leg.F.R"]: Pose;
									["tail.01"]: Pose;
									["leg.F.L"]: Pose;
									["ear.R"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
				Fear: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.B.L"]: Pose;
									["ear.L"]: Pose;
									["leg.B.R"]: Pose;
									["leg.F.R"]: Pose;
									["tail.01"]: Pose;
									["leg.F.L"]: Pose;
									["ear.R"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
				Idle: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.B.L"]: Pose;
									["ear.L"]: Pose;
									["leg.B.R"]: Pose;
									["leg.F.R"]: Pose;
									["tail.01"]: Pose;
									["leg.F.L"]: Pose;
									["ear.R"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
				Jump: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.B.L"]: Pose;
									["ear.L"]: Pose;
									["leg.B.R"]: Pose;
									["leg.F.R"]: Pose;
									["tail.01"]: Pose;
									["leg.F.L"]: Pose;
									["ear.R"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
				Sit: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.B.L"]: Pose;
									["ear.L"]: Pose;
									["leg.B.R"]: Pose;
									["leg.F.R"]: Pose;
									["tail.01"]: Pose;
									["leg.F.L"]: Pose;
									["ear.R"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
				Run: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.B.L"]: Pose;
									["ear.L"]: Pose;
									["leg.B.R"]: Pose;
									["leg.F.R"]: Pose;
									["tail.01"]: Pose;
									["leg.F.L"]: Pose;
									["ear.R"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
				Swim: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.B.L"]: Pose;
									["ear.L"]: Pose;
									["leg.B.R"]: Pose;
									["leg.F.R"]: Pose;
									["tail.01"]: Pose;
									["leg.F.L"]: Pose;
									["ear.R"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
				Walk: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.B.L"]: Pose;
									["ear.L"]: Pose;
									["leg.B.R"]: Pose;
									["leg.F.R"]: Pose;
									["tail.01"]: Pose;
									["leg.F.L"]: Pose;
									["ear.R"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
				Fly: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.B.L"]: Pose;
									["ear.L"]: Pose;
									["leg.B.R"]: Pose;
									["leg.F.R"]: Pose;
									["tail.01"]: Pose;
									["leg.F.L"]: Pose;
									["ear.R"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
				Death: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.B.L"]: Pose;
									["ear.L"]: Pose;
									["leg.B.R"]: Pose;
									["leg.F.R"]: Pose;
									["tail.01"]: Pose;
									["leg.F.L"]: Pose;
									["ear.R"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
				Idle3: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.B.L"]: Pose;
									["ear.L"]: Pose;
									["leg.B.R"]: Pose;
									["tail.01"]: Pose;
									["leg.F.R"]: Pose;
									["leg.F.L"]: Pose;
									["ear.R"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
				Clicked: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.B.L"]: Pose;
									["ear.L"]: Pose;
									["leg.B.R"]: Pose;
									["leg.F.R"]: Pose;
									["tail.01"]: Pose;
									["leg.F.L"]: Pose;
									["ear.R"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
				Hit: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.B.L"]: Pose;
									["ear.L"]: Pose;
									["leg.B.R"]: Pose;
									["leg.F.R"]: Pose;
									["tail.01"]: Pose;
									["leg.F.L"]: Pose;
									["ear.R"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
				Attack: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.B.L"]: Pose;
									["ear.L"]: Pose;
									["leg.B.R"]: Pose;
									["tail.01"]: Pose;
									["leg.F.R"]: Pose;
									["leg.F.L"]: Pose;
									["ear.R"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
			};
		};
		Parrot: Model & {
			AnimationController: AnimationController;
			AnimSaves: Model & {
				Spin: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Bounce: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Idle2: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Roll: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Eat: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Fear: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Idle: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Jump: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Sit: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Run: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Swim: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Walk: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Fly: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Death: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Idle3: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Clicked: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Hit: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Attack: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
			};
			AnimationsFolder: Folder;
			Mesh: MeshPart & {
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
		Walrus: Model & {
			AnimationController: AnimationController;
			AnimSaves: Model & {
				Spin: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["leg.B.L"]: Pose;
										["leg.B.R"]: Pose;
										["leg.F.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Bounce: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["leg.B.L"]: Pose;
										["leg.B.R"]: Pose;
										["leg.F.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Idle2: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["leg.B.L"]: Pose;
										["leg.B.R"]: Pose;
										["leg.F.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Roll: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["leg.B.L"]: Pose;
										["leg.B.R"]: Pose;
										["leg.F.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Eat: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["leg.B.L"]: Pose;
										["leg.B.R"]: Pose;
										["leg.F.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Fear: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["leg.B.L"]: Pose;
										["leg.B.R"]: Pose;
										["leg.F.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Idle: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["leg.B.L"]: Pose;
										["leg.B.R"]: Pose;
										["leg.F.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Jump: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["leg.B.L"]: Pose;
										["leg.B.R"]: Pose;
										["leg.F.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Sit: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["leg.B.L"]: Pose;
										["leg.B.R"]: Pose;
										["leg.F.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Run: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["leg.B.L"]: Pose;
										["leg.B.R"]: Pose;
										["leg.F.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Swim: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["leg.B.L"]: Pose;
										["leg.B.R"]: Pose;
										["leg.F.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Walk: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["leg.B.L"]: Pose;
										["leg.B.R"]: Pose;
										["leg.F.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Fly: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["leg.B.L"]: Pose;
										["leg.B.R"]: Pose;
										["leg.F.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Death: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["leg.B.L"]: Pose;
										["leg.B.R"]: Pose;
										["leg.F.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Idle3: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["leg.B.L"]: Pose;
										["leg.B.R"]: Pose;
										["leg.F.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Clicked: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["leg.B.L"]: Pose;
										["leg.B.R"]: Pose;
										["leg.F.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Hit: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["leg.B.L"]: Pose;
										["leg.B.R"]: Pose;
										["leg.F.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Attack: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["leg.B.L"]: Pose;
										["leg.B.R"]: Pose;
										["leg.F.R"]: Pose;
									};
								};
							};
						};
					};
				};
			};
			AnimationsFolder: Folder;
			Mesh: MeshPart & {
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
		Sheep: Model & {
			AnimationController: AnimationController;
			AnimSaves: Model & {
				Spin: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Bounce: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Idle2: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Roll: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Eat: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Fear: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Idle: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Jump: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Sit: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Run: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Swim: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Walk: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Fly: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Death: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Idle3: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Clicked: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Hit: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Attack: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
			};
			AnimationsFolder: Folder;
			Mesh: MeshPart & {
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
		Rooster: Model & {
			AnimationController: AnimationController;
			AnimSaves: Model & {
				Spin: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["tail.03"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.R"]: Pose;
										["feet.R"]: Pose;
										["tail.02"]: Pose;
										["feet.L"]: Pose;
										["wing.L"]: Pose;
										["tail.01"]: Pose;
									};
								};
							};
						};
					};
				};
				Bounce: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["tail.03"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.R"]: Pose;
										["feet.R"]: Pose;
										["tail.02"]: Pose;
										["feet.L"]: Pose;
										["wing.L"]: Pose;
										["tail.01"]: Pose;
									};
								};
							};
						};
					};
				};
				Idle2: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["tail.03"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.R"]: Pose;
										["feet.R"]: Pose;
										["tail.02"]: Pose;
										["feet.L"]: Pose;
										["wing.L"]: Pose;
										["tail.01"]: Pose;
									};
								};
							};
						};
					};
				};
				Roll: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["tail.03"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.R"]: Pose;
										["feet.R"]: Pose;
										["tail.02"]: Pose;
										["feet.L"]: Pose;
										["wing.L"]: Pose;
										["tail.01"]: Pose;
									};
								};
							};
						};
					};
				};
				Eat: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["tail.03"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.R"]: Pose;
										["feet.R"]: Pose;
										["tail.02"]: Pose;
										["feet.L"]: Pose;
										["wing.L"]: Pose;
										["tail.01"]: Pose;
									};
								};
							};
						};
					};
				};
				Fear: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["tail.03"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.R"]: Pose;
										["feet.R"]: Pose;
										["tail.02"]: Pose;
										["feet.L"]: Pose;
										["wing.L"]: Pose;
										["tail.01"]: Pose;
									};
								};
							};
						};
					};
				};
				Idle: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["tail.03"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.R"]: Pose;
										["feet.R"]: Pose;
										["tail.02"]: Pose;
										["feet.L"]: Pose;
										["wing.L"]: Pose;
										["tail.01"]: Pose;
									};
								};
							};
						};
					};
				};
				Jump: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["tail.03"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.R"]: Pose;
										["feet.R"]: Pose;
										["tail.02"]: Pose;
										["feet.L"]: Pose;
										["wing.L"]: Pose;
										["tail.01"]: Pose;
									};
								};
							};
						};
					};
				};
				Sit: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["tail.03"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.R"]: Pose;
										["feet.R"]: Pose;
										["tail.02"]: Pose;
										["feet.L"]: Pose;
										["wing.L"]: Pose;
										["tail.01"]: Pose;
									};
								};
							};
						};
					};
				};
				Run: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["tail.03"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.R"]: Pose;
										["feet.R"]: Pose;
										["tail.02"]: Pose;
										["feet.L"]: Pose;
										["wing.L"]: Pose;
										["tail.01"]: Pose;
									};
								};
							};
						};
					};
				};
				Swim: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["tail.03"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.R"]: Pose;
										["feet.R"]: Pose;
										["tail.02"]: Pose;
										["feet.L"]: Pose;
										["wing.L"]: Pose;
										["tail.01"]: Pose;
									};
								};
							};
						};
					};
				};
				Walk: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["tail.03"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.R"]: Pose;
										["feet.R"]: Pose;
										["tail.02"]: Pose;
										["feet.L"]: Pose;
										["wing.L"]: Pose;
										["tail.01"]: Pose;
									};
								};
							};
						};
					};
				};
				Fly: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["tail.03"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.R"]: Pose;
										["feet.R"]: Pose;
										["tail.02"]: Pose;
										["feet.L"]: Pose;
										["wing.L"]: Pose;
										["tail.01"]: Pose;
									};
								};
							};
						};
					};
				};
				Death: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["tail.03"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.R"]: Pose;
										["feet.R"]: Pose;
										["tail.02"]: Pose;
										["feet.L"]: Pose;
										["wing.L"]: Pose;
										["tail.01"]: Pose;
									};
								};
							};
						};
					};
				};
				Idle3: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["tail.03"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.R"]: Pose;
										["feet.R"]: Pose;
										["tail.02"]: Pose;
										["feet.L"]: Pose;
										["wing.L"]: Pose;
										["tail.01"]: Pose;
									};
								};
							};
						};
					};
				};
				Clicked: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["tail.03"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.R"]: Pose;
										["feet.R"]: Pose;
										["tail.02"]: Pose;
										["feet.L"]: Pose;
										["wing.L"]: Pose;
										["tail.01"]: Pose;
									};
								};
							};
						};
					};
				};
				Hit: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["tail.03"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.R"]: Pose;
										["feet.R"]: Pose;
										["tail.02"]: Pose;
										["feet.L"]: Pose;
										["wing.L"]: Pose;
										["tail.01"]: Pose;
									};
								};
							};
						};
					};
				};
				Attack: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["tail.03"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.R"]: Pose;
										["feet.R"]: Pose;
										["tail.02"]: Pose;
										["feet.L"]: Pose;
										["wing.L"]: Pose;
										["tail.01"]: Pose;
									};
								};
							};
						};
					};
				};
			};
			AnimationsFolder: Folder;
			Mesh: MeshPart & {
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
		SeaLion: Model & {
			AnimationController: AnimationController & {
				Animator: Animator;
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
			Mesh: MeshPart & {
				root: Bone & {
					body: Bone & {
						["leg.L"]: Bone;
						["leg.R"]: Bone;
						["tail.01"]: Bone;
					};
				};
			};
			AnimSaves: Model & {
				Spin: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.R"]: Pose;
									["leg.L"]: Pose;
									["tail.01"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
				Bounce: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.R"]: Pose;
									["leg.L"]: Pose;
									["tail.01"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
				Idle2: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.R"]: Pose;
									["leg.L"]: Pose;
									["tail.01"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
				Roll: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["tail.01"]: Pose;
									["leg.L"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
				Eat: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.R"]: Pose;
									["leg.L"]: Pose;
									["tail.01"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
				Fear: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.R"]: Pose;
									["leg.L"]: Pose;
									["tail.01"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
				Idle: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.R"]: Pose;
									["leg.L"]: Pose;
									["tail.01"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
				Jump: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.R"]: Pose;
									["leg.L"]: Pose;
									["tail.01"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
				Sit: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.R"]: Pose;
									["leg.L"]: Pose;
									["tail.01"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
				Run: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.R"]: Pose;
									["leg.L"]: Pose;
									["tail.01"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
				Swim: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.R"]: Pose;
									["leg.L"]: Pose;
									["tail.01"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
				Walk: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.R"]: Pose;
									["leg.L"]: Pose;
									["tail.01"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
				Fly: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.R"]: Pose;
									["leg.L"]: Pose;
									["tail.01"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
				Death: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.R"]: Pose;
									["leg.L"]: Pose;
									["tail.01"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
				Idle3: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.R"]: Pose;
									["leg.L"]: Pose;
									["tail.01"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
				Clicked: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.R"]: Pose;
									["leg.L"]: Pose;
									["tail.01"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
				Hit: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["tail.01"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
				Attack: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.R"]: Pose;
									["leg.L"]: Pose;
									["tail.01"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
			};
		};
		Raccoon: Model & {
			AnimationController: AnimationController & {
				Animator: Animator;
			};
			AnimSaves: Model & {
				Spin: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Bounce: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Idle2: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Roll: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Eat: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Fear: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Idle: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Jump: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Sit: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Run: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Swim: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Walk: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Fly: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Death: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Idle3: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Clicked: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Hit: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Attack: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
			};
			AnimationsFolder: Folder;
			Mesh: MeshPart & {
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
		Pigeon: Model & {
			AnimationController: AnimationController;
			AnimSaves: Model & {
				Spin: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Bounce: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Idle2: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Roll: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Eat: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Fear: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Idle: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Jump: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Sit: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Run: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Swim: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Walk: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Fly: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Death: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Idle3: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Clicked: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Hit: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Attack: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
			};
			AnimationsFolder: Folder;
			Mesh: MeshPart & {
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
			AnimationController: AnimationController;
			AnimSaves: Model & {
				Spin: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Bounce: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Idle2: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Roll: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Eat: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Fear: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Idle: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Jump: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Sit: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Run: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Swim: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Walk: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Fly: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Death: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Idle3: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Clicked: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Hit: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Attack: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
			};
			AnimationsFolder: Folder;
			Mesh: MeshPart & {
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
			AnimationController: AnimationController & {
				Animator: Animator;
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
			Mesh: MeshPart & {
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
			AnimSaves: Model & {
				Spin: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.B.L"]: Pose;
									["ear.L"]: Pose;
									["leg.B.R"]: Pose;
									["tail.01"]: Pose & {
										["tail.02"]: Pose;
									};
									["leg.F.R"]: Pose;
									["leg.F.L"]: Pose;
									["ear.R"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
				Bounce: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.B.L"]: Pose;
									["ear.L"]: Pose;
									["leg.B.R"]: Pose;
									["tail.01"]: Pose & {
										["tail.02"]: Pose;
									};
									["leg.F.R"]: Pose;
									["leg.F.L"]: Pose;
									["ear.R"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
				Idle2: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.B.L"]: Pose;
									["ear.L"]: Pose;
									["leg.B.R"]: Pose;
									["tail.01"]: Pose & {
										["tail.02"]: Pose;
									};
									["leg.F.R"]: Pose;
									["leg.F.L"]: Pose;
									["ear.R"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
				Roll: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.B.L"]: Pose;
									["ear.L"]: Pose;
									["leg.B.R"]: Pose;
									["tail.01"]: Pose & {
										["tail.02"]: Pose;
									};
									["leg.F.R"]: Pose;
									["leg.F.L"]: Pose;
									["ear.R"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
				Eat: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.B.L"]: Pose;
									["ear.L"]: Pose;
									["leg.B.R"]: Pose;
									["tail.01"]: Pose & {
										["tail.02"]: Pose;
									};
									["leg.F.R"]: Pose;
									["leg.F.L"]: Pose;
									["ear.R"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
				Fear: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.B.L"]: Pose;
									["ear.L"]: Pose;
									["leg.B.R"]: Pose;
									["tail.01"]: Pose & {
										["tail.02"]: Pose;
									};
									["leg.F.R"]: Pose;
									["leg.F.L"]: Pose;
									["ear.R"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
				Idle: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.B.L"]: Pose;
									["ear.L"]: Pose;
									["leg.B.R"]: Pose;
									["tail.01"]: Pose & {
										["tail.02"]: Pose;
									};
									["leg.F.R"]: Pose;
									["leg.F.L"]: Pose;
									["ear.R"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
				Jump: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.B.L"]: Pose;
									["ear.L"]: Pose;
									["leg.B.R"]: Pose;
									["tail.01"]: Pose & {
										["tail.02"]: Pose;
									};
									["leg.F.R"]: Pose;
									["leg.F.L"]: Pose;
									["ear.R"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
				Sit: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.B.L"]: Pose;
									["ear.L"]: Pose;
									["leg.B.R"]: Pose;
									["tail.01"]: Pose & {
										["tail.02"]: Pose;
									};
									["leg.F.R"]: Pose;
									["leg.F.L"]: Pose;
									["ear.R"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
				Run: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.B.L"]: Pose;
									["ear.L"]: Pose;
									["leg.B.R"]: Pose;
									["tail.01"]: Pose & {
										["tail.02"]: Pose;
									};
									["leg.F.R"]: Pose;
									["leg.F.L"]: Pose;
									["ear.R"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
				Swim: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.B.L"]: Pose;
									["ear.L"]: Pose;
									["leg.B.R"]: Pose;
									["tail.01"]: Pose & {
										["tail.02"]: Pose;
									};
									["leg.F.R"]: Pose;
									["leg.F.L"]: Pose;
									["ear.R"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
				Walk: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.B.L"]: Pose;
									["ear.L"]: Pose;
									["leg.B.R"]: Pose;
									["tail.01"]: Pose & {
										["tail.02"]: Pose;
									};
									["leg.F.R"]: Pose;
									["leg.F.L"]: Pose;
									["ear.R"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
				Fly: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.B.L"]: Pose;
									["ear.L"]: Pose;
									["leg.B.R"]: Pose;
									["tail.01"]: Pose & {
										["tail.02"]: Pose;
									};
									["leg.F.R"]: Pose;
									["leg.F.L"]: Pose;
									["ear.R"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
				Death: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.B.L"]: Pose;
									["ear.L"]: Pose;
									["leg.B.R"]: Pose;
									["tail.01"]: Pose & {
										["tail.02"]: Pose;
									};
									["leg.F.R"]: Pose;
									["leg.F.L"]: Pose;
									["ear.R"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
				Idle3: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.B.L"]: Pose;
									["ear.L"]: Pose;
									["leg.B.R"]: Pose;
									["tail.01"]: Pose & {
										["tail.02"]: Pose;
									};
									["leg.F.R"]: Pose;
									["leg.F.L"]: Pose;
									["ear.R"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
				Clicked: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.B.L"]: Pose;
									["ear.L"]: Pose;
									["leg.B.R"]: Pose;
									["tail.01"]: Pose & {
										["tail.02"]: Pose;
									};
									["leg.F.R"]: Pose;
									["leg.F.L"]: Pose;
									["ear.R"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
				Hit: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.B.L"]: Pose;
									["ear.L"]: Pose;
									["leg.B.R"]: Pose;
									["tail.01"]: Pose & {
										["tail.02"]: Pose;
									};
									["leg.F.R"]: Pose;
									["leg.F.L"]: Pose;
									["ear.R"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
				Attack: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.B.L"]: Pose;
									["ear.L"]: Pose;
									["leg.B.R"]: Pose;
									["tail.01"]: Pose & {
										["tail.02"]: Pose;
									};
									["leg.F.R"]: Pose;
									["leg.F.L"]: Pose;
									["ear.R"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
			};
		};
		Dove: Model & {
			AnimationController: AnimationController;
			AnimSaves: Model & {
				Spin: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Bounce: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Idle2: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Roll: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Eat: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Fear: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Idle: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Jump: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Sit: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Run: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Swim: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Walk: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Fly: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Death: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Idle3: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Clicked: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Hit: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Attack: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
			};
			AnimationsFolder: Folder;
			Mesh: MeshPart & {
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
		SnowWeasel: Model & {
			AnimationController: AnimationController;
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
			Mesh: MeshPart & {
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
			AnimSaves: Model & {
				Spin: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Bounce: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Idle2: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Roll: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Eat: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Fear: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Idle: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Jump: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Sit: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Run: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Swim: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Walk: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Fly: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Death: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Idle3: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Clicked: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Hit: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Attack: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
			};
		};
		Dog: Model & {
			AnimationController: AnimationController;
			AnimSaves: Model & {
				Spin: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose & {
											["ear.L.01"]: Pose;
										};
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose & {
											["ear.R.01"]: Pose;
										};
									};
								};
							};
						};
					};
				};
				Bounce: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose & {
											["ear.L.01"]: Pose;
										};
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose & {
											["ear.R.01"]: Pose;
										};
									};
								};
							};
						};
					};
				};
				Idle2: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose & {
											["ear.L.01"]: Pose;
										};
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose & {
											["ear.R.01"]: Pose;
										};
									};
								};
							};
						};
					};
				};
				Roll: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose & {
											["ear.L.01"]: Pose;
										};
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose & {
											["ear.R.01"]: Pose;
										};
									};
								};
							};
						};
					};
				};
				Eat: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose & {
											["ear.L.01"]: Pose;
										};
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose & {
											["ear.R.01"]: Pose;
										};
									};
								};
							};
						};
					};
				};
				Fear: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose & {
											["ear.L.01"]: Pose;
										};
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose & {
											["ear.R.01"]: Pose;
										};
									};
								};
							};
						};
					};
				};
				Idle: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose & {
											["ear.L.01"]: Pose;
										};
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose & {
											["ear.R.01"]: Pose;
										};
									};
								};
							};
						};
					};
				};
				Jump: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose & {
											["ear.L.01"]: Pose;
										};
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose & {
											["ear.R.01"]: Pose;
										};
									};
								};
							};
						};
					};
				};
				Sit: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose & {
											["ear.L.01"]: Pose;
										};
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose & {
											["ear.R.01"]: Pose;
										};
									};
								};
							};
						};
					};
				};
				Run: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose & {
											["ear.L.01"]: Pose;
										};
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose & {
											["ear.R.01"]: Pose;
										};
									};
								};
							};
						};
					};
				};
				Swim: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose & {
											["ear.L.01"]: Pose;
										};
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose & {
											["ear.R.01"]: Pose;
										};
									};
								};
							};
						};
					};
				};
				Walk: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose & {
											["ear.L.01"]: Pose;
										};
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose & {
											["ear.R.01"]: Pose;
										};
									};
								};
							};
						};
					};
				};
				Fly: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose & {
											["ear.L.01"]: Pose;
										};
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose & {
											["ear.R.01"]: Pose;
										};
									};
								};
							};
						};
					};
				};
				Death: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose & {
											["ear.L.01"]: Pose;
										};
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose & {
											["ear.R.01"]: Pose;
										};
									};
								};
							};
						};
					};
				};
				Idle3: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose & {
											["ear.L.01"]: Pose;
										};
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose & {
											["ear.R.01"]: Pose;
										};
									};
								};
							};
						};
					};
				};
				Clicked: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose & {
											["ear.L.01"]: Pose;
										};
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose & {
											["ear.R.01"]: Pose;
										};
									};
								};
							};
						};
					};
				};
				Hit: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose & {
											["ear.L.01"]: Pose;
										};
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose & {
											["ear.R.01"]: Pose;
										};
									};
								};
							};
						};
					};
				};
				Attack: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose & {
											["ear.L.01"]: Pose;
										};
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose & {
											["ear.R.01"]: Pose;
										};
									};
								};
							};
						};
					};
				};
			};
			AnimationsFolder: Folder;
			Mesh: MeshPart & {
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
		PolarBear: Model & {
			AnimationController: AnimationController & {
				Animator: Animator;
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
			Mesh: MeshPart & {
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
			AnimSaves: Model & {
				Spin: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.B.L"]: Pose;
									["ear.L"]: Pose;
									["leg.B.R"]: Pose;
									["leg.F.R"]: Pose;
									["tail.01"]: Pose;
									["leg.F.L"]: Pose;
									["ear.R"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
				Bounce: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.B.L"]: Pose;
									["ear.L"]: Pose;
									["leg.B.R"]: Pose;
									["leg.F.R"]: Pose;
									["tail.01"]: Pose;
									["leg.F.L"]: Pose;
									["ear.R"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
				Idle2: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.B.L"]: Pose;
									["ear.L"]: Pose;
									["leg.B.R"]: Pose;
									["leg.F.R"]: Pose;
									["tail.01"]: Pose;
									["leg.F.L"]: Pose;
									["ear.R"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
				Roll: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.B.L"]: Pose;
									["ear.L"]: Pose;
									["leg.B.R"]: Pose;
									["leg.F.R"]: Pose;
									["tail.01"]: Pose;
									["leg.F.L"]: Pose;
									["ear.R"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
				Eat: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.B.L"]: Pose;
									["ear.L"]: Pose;
									["leg.B.R"]: Pose;
									["leg.F.R"]: Pose;
									["tail.01"]: Pose;
									["leg.F.L"]: Pose;
									["ear.R"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
				Fear: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.B.L"]: Pose;
									["ear.L"]: Pose;
									["leg.B.R"]: Pose;
									["tail.01"]: Pose;
									["leg.F.R"]: Pose;
									["leg.F.L"]: Pose;
									["ear.R"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
				Idle: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.B.L"]: Pose;
									["ear.L"]: Pose;
									["leg.B.R"]: Pose;
									["leg.F.R"]: Pose;
									["tail.01"]: Pose;
									["leg.F.L"]: Pose;
									["ear.R"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
				Jump: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.B.L"]: Pose;
									["ear.L"]: Pose;
									["leg.B.R"]: Pose;
									["leg.F.R"]: Pose;
									["tail.01"]: Pose;
									["leg.F.L"]: Pose;
									["ear.R"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
				Sit: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.B.L"]: Pose;
									["ear.L"]: Pose;
									["leg.B.R"]: Pose;
									["leg.F.R"]: Pose;
									["tail.01"]: Pose;
									["leg.F.L"]: Pose;
									["ear.R"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
				Run: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.B.L"]: Pose;
									["ear.L"]: Pose;
									["leg.B.R"]: Pose;
									["leg.F.R"]: Pose;
									["tail.01"]: Pose;
									["leg.F.L"]: Pose;
									["ear.R"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
				Swim: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.B.L"]: Pose;
									["ear.L"]: Pose;
									["leg.B.R"]: Pose;
									["leg.F.R"]: Pose;
									["tail.01"]: Pose;
									["leg.F.L"]: Pose;
									["ear.R"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
				Walk: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.B.L"]: Pose;
									["ear.L"]: Pose;
									["leg.B.R"]: Pose;
									["leg.F.R"]: Pose;
									["tail.01"]: Pose;
									["leg.F.L"]: Pose;
									["ear.R"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
				Fly: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.B.L"]: Pose;
									["ear.L"]: Pose;
									["leg.B.R"]: Pose;
									["leg.F.R"]: Pose;
									["tail.01"]: Pose;
									["leg.F.L"]: Pose;
									["ear.R"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
				Death: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.B.L"]: Pose;
									["ear.L"]: Pose;
									["leg.B.R"]: Pose;
									["leg.F.R"]: Pose;
									["tail.01"]: Pose;
									["leg.F.L"]: Pose;
									["ear.R"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
				Idle3: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.B.L"]: Pose;
									["ear.L"]: Pose;
									["leg.B.R"]: Pose;
									["leg.F.R"]: Pose;
									["tail.01"]: Pose;
									["leg.F.L"]: Pose;
									["ear.R"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
				Clicked: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.B.L"]: Pose;
									["ear.L"]: Pose;
									["leg.B.R"]: Pose;
									["leg.F.R"]: Pose;
									["tail.01"]: Pose;
									["leg.F.L"]: Pose;
									["ear.R"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
				Hit: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.B.L"]: Pose;
									["ear.L"]: Pose;
									["leg.B.R"]: Pose;
									["tail.01"]: Pose;
									["leg.F.R"]: Pose;
									["leg.F.L"]: Pose;
									["ear.R"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
				Attack: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.B.L"]: Pose;
									["ear.L"]: Pose;
									["leg.B.R"]: Pose;
									["leg.F.R"]: Pose;
									["tail.01"]: Pose;
									["leg.F.L"]: Pose;
									["ear.R"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
			};
		};
	};
	AnimalsWithAnimations: Folder & {
		Snake: Model & {
			AnimationController: AnimationController & {
				Animator: Animator;
			};
			AnimSaves: Model & {
				Snake_Fear: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["neck.01"]: Pose & {
											["neck.02"]: Pose & {
												head: Pose;
											};
										};
										["tail.01"]: Pose & {
											["tail.02"]: Pose & {
												["tail.03"]: Pose;
											};
										};
									};
								};
							};
						};
					};
				};
				Snake_Walk: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["neck.01"]: Pose & {
											["neck.02"]: Pose & {
												head: Pose;
											};
										};
										["tail.01"]: Pose & {
											["tail.02"]: Pose & {
												["tail.03"]: Pose;
											};
										};
									};
								};
							};
						};
					};
				};
				Snake_Fly: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["neck.01"]: Pose & {
											["neck.02"]: Pose & {
												head: Pose;
											};
										};
										["tail.01"]: Pose & {
											["tail.02"]: Pose & {
												["tail.03"]: Pose;
											};
										};
									};
								};
							};
						};
					};
				};
				Snake_Run: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["neck.01"]: Pose & {
											["neck.02"]: Pose & {
												head: Pose;
											};
										};
										["tail.01"]: Pose & {
											["tail.02"]: Pose & {
												["tail.03"]: Pose;
											};
										};
									};
								};
							};
						};
					};
				};
				Snake_Spin: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["neck.01"]: Pose & {
											["neck.02"]: Pose & {
												head: Pose;
											};
										};
										["tail.01"]: Pose & {
											["tail.02"]: Pose & {
												["tail.03"]: Pose;
											};
										};
									};
								};
							};
						};
					};
				};
				Snake_Bounce: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["neck.01"]: Pose & {
											["neck.02"]: Pose & {
												head: Pose;
											};
										};
										["tail.01"]: Pose & {
											["tail.02"]: Pose & {
												["tail.03"]: Pose;
											};
										};
									};
								};
							};
						};
					};
				};
				Snake_Attack: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["neck.01"]: Pose & {
											["neck.02"]: Pose & {
												head: Pose;
											};
										};
										["tail.01"]: Pose & {
											["tail.02"]: Pose & {
												["tail.03"]: Pose;
											};
										};
									};
								};
							};
						};
					};
				};
				Snake_Jump: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["neck.01"]: Pose & {
											["neck.02"]: Pose & {
												head: Pose;
											};
										};
										["tail.01"]: Pose & {
											["tail.02"]: Pose & {
												["tail.03"]: Pose;
											};
										};
									};
								};
							};
						};
					};
				};
				Snake_Idle: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["neck.01"]: Pose & {
											["neck.02"]: Pose & {
												head: Pose;
											};
										};
										["tail.01"]: Pose & {
											["tail.02"]: Pose & {
												["tail.03"]: Pose;
											};
										};
									};
								};
							};
						};
					};
				};
				Snake_Sit: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["neck.01"]: Pose & {
											["neck.02"]: Pose & {
												head: Pose;
											};
										};
										["tail.01"]: Pose & {
											["tail.02"]: Pose & {
												["tail.03"]: Pose;
											};
										};
									};
								};
							};
						};
					};
				};
				Snake_Swim: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["neck.01"]: Pose & {
											["neck.02"]: Pose & {
												head: Pose;
											};
										};
										["tail.01"]: Pose & {
											["tail.02"]: Pose & {
												["tail.03"]: Pose;
											};
										};
									};
								};
							};
						};
					};
				};
				Snake_Idle2: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["neck.01"]: Pose & {
											["neck.02"]: Pose & {
												head: Pose;
											};
										};
										["tail.01"]: Pose & {
											["tail.02"]: Pose & {
												["tail.03"]: Pose;
											};
										};
									};
								};
							};
						};
					};
				};
				Snake_Roll: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["neck.01"]: Pose & {
											["neck.02"]: Pose & {
												head: Pose;
											};
										};
										["tail.01"]: Pose & {
											["tail.02"]: Pose & {
												["tail.03"]: Pose;
											};
										};
									};
								};
							};
						};
					};
				};
				Snake_Clicked: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["neck.01"]: Pose & {
											["neck.02"]: Pose & {
												head: Pose;
											};
										};
										["tail.01"]: Pose & {
											["tail.02"]: Pose & {
												["tail.03"]: Pose;
											};
										};
									};
								};
							};
						};
					};
				};
				Snake_Hit: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["neck.01"]: Pose & {
											["neck.02"]: Pose & {
												head: Pose;
											};
										};
										["tail.01"]: Pose & {
											["tail.02"]: Pose & {
												["tail.03"]: Pose;
											};
										};
									};
								};
							};
						};
					};
				};
				Snake_Death: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["neck.01"]: Pose & {
											["neck.02"]: Pose & {
												head: Pose;
											};
										};
										["tail.01"]: Pose & {
											["tail.02"]: Pose & {
												["tail.03"]: Pose;
											};
										};
									};
								};
							};
						};
					};
				};
				Snake_Eat: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["neck.01"]: Pose & {
											["neck.02"]: Pose & {
												head: Pose;
											};
										};
										["tail.01"]: Pose & {
											["tail.02"]: Pose & {
												["tail.03"]: Pose;
											};
										};
									};
								};
							};
						};
					};
				};
				Snake_Idle3: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["neck.01"]: Pose & {
											["neck.02"]: Pose & {
												head: Pose;
											};
										};
										["tail.01"]: Pose & {
											["tail.02"]: Pose & {
												["tail.03"]: Pose;
											};
										};
									};
								};
							};
						};
					};
				};
			};
			AnimationsFolder: Folder;
			Mesh: MeshPart & {
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
			AnimationController: AnimationController;
			AnimSaves: Model & {
				Flamingo_Sit: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["feet.L"]: Pose;
										["tail.03"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Flamingo_Hit: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["feet.L"]: Pose;
										["tail.03"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Flamingo_Jump: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["feet.L"]: Pose;
										["tail.03"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Flamingo_Idle3: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["feet.L"]: Pose;
										["tail.03"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Flamingo_Attack: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["feet.L"]: Pose;
										["tail.03"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Flamingo_Death: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["feet.L"]: Pose;
										["tail.03"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Flamingo_Idle2: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["feet.L"]: Pose;
										["tail.03"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Flamingo_Roll: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["feet.L"]: Pose;
										["tail.03"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Flamingo_Run: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["feet.L"]: Pose;
										["tail.03"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Flamingo_Walk: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["feet.L"]: Pose;
										["tail.03"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Flamingo_Eat: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["feet.L"]: Pose;
										["tail.03"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Flamingo_Clicked: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["feet.L"]: Pose;
										["tail.03"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Flamingo_Swim: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["feet.L"]: Pose;
										["tail.03"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Flamingo_Spin: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["feet.L"]: Pose;
										["tail.03"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Flamingo_Fly: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["feet.L"]: Pose;
										["tail.03"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Flamingo_Idle: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["feet.L"]: Pose;
										["tail.03"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Flamingo_Fear: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["feet.L"]: Pose;
										["tail.03"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Flamingo_Bounce: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["feet.L"]: Pose;
										["tail.03"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
			};
			AnimationsFolder: Folder;
			Mesh: MeshPart & {
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
			AnimationController: AnimationController;
			AnimSaves: Model & {
				Hornbill_Run: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["tail.01"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Hornbill_Sit: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["tail.01"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Hornbill_Hit: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["tail.01"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Hornbill_Fly: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["tail.01"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Hornbill_Death: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["tail.01"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Hornbill_Bounce: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["tail.01"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Hornbill_Spin: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["tail.01"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Hornbill_Idle3: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["tail.01"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Hornbill_Eat: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["tail.01"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Hornbill_Roll: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["tail.01"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Hornbill_Idle: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["tail.01"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Hornbill_Walk: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["tail.01"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Hornbill_Swim: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["tail.01"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Hornbill_Jump: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["tail.01"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Hornbill_Idle2: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["tail.01"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Hornbill_Clicked: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["tail.01"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Hornbill_Attack: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["tail.01"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Hornbill_Fear: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["tail.01"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
			};
			AnimationsFolder: Folder;
			Mesh: MeshPart & {
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
			AnimationController: AnimationController & {
				Animator: Animator;
			};
			AnimSaves: Model & {
				Owl_Spin: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["tail.01"]: Pose;
										["feet.L"]: Pose;
										["tail.02"]: Pose;
										["wing.R"]: Pose;
										["wing.L"]: Pose;
									};
								};
							};
						};
					};
				};
				Owl_Bounce: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["tail.01"]: Pose;
										["feet.L"]: Pose;
										["tail.02"]: Pose;
										["wing.R"]: Pose;
										["wing.L"]: Pose;
									};
								};
							};
						};
					};
				};
				Owl_Clicked: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["tail.01"]: Pose;
										["feet.L"]: Pose;
										["tail.02"]: Pose;
										["wing.R"]: Pose;
										["wing.L"]: Pose;
									};
								};
							};
						};
					};
				};
				Owl_Roll: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["tail.01"]: Pose;
										["feet.L"]: Pose;
										["tail.02"]: Pose;
										["wing.R"]: Pose;
										["wing.L"]: Pose;
									};
								};
							};
						};
					};
				};
				Owl_Fly: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["tail.01"]: Pose;
										["feet.L"]: Pose;
										["tail.02"]: Pose;
										["wing.R"]: Pose;
										["wing.L"]: Pose;
									};
								};
							};
						};
					};
				};
				Owl_Eat: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["tail.01"]: Pose;
										["feet.L"]: Pose;
										["tail.02"]: Pose;
										["wing.R"]: Pose;
										["wing.L"]: Pose;
									};
								};
							};
						};
					};
				};
				Owl_Idle2: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["tail.01"]: Pose;
										["feet.L"]: Pose;
										["tail.02"]: Pose;
										["wing.R"]: Pose;
										["wing.L"]: Pose;
									};
								};
							};
						};
					};
				};
				Owl_Hit: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["tail.01"]: Pose;
										["feet.L"]: Pose;
										["tail.02"]: Pose;
										["wing.R"]: Pose;
										["wing.L"]: Pose;
									};
								};
							};
						};
					};
				};
				Owl_Idle: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["tail.01"]: Pose;
										["feet.L"]: Pose;
										["tail.02"]: Pose;
										["wing.R"]: Pose;
										["wing.L"]: Pose;
									};
								};
							};
						};
					};
				};
				Owl_Fear: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["tail.01"]: Pose;
										["feet.L"]: Pose;
										["tail.02"]: Pose;
										["wing.R"]: Pose;
										["wing.L"]: Pose;
									};
								};
							};
						};
					};
				};
				Owl_Attack: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["tail.01"]: Pose;
										["feet.L"]: Pose;
										["tail.02"]: Pose;
										["wing.R"]: Pose;
										["wing.L"]: Pose;
									};
								};
							};
						};
					};
				};
				Owl_Run: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["tail.01"]: Pose;
										["feet.L"]: Pose;
										["tail.02"]: Pose;
										["wing.R"]: Pose;
										["wing.L"]: Pose;
									};
								};
							};
						};
					};
				};
				Owl_Walk: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["tail.01"]: Pose;
										["feet.L"]: Pose;
										["tail.02"]: Pose;
										["wing.R"]: Pose;
										["wing.L"]: Pose;
									};
								};
							};
						};
					};
				};
				Owl_Death: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["tail.01"]: Pose;
										["feet.L"]: Pose;
										["tail.02"]: Pose;
										["wing.R"]: Pose;
										["wing.L"]: Pose;
									};
								};
							};
						};
					};
				};
				Owl_Swim: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["tail.01"]: Pose;
										["feet.L"]: Pose;
										["tail.02"]: Pose;
										["wing.R"]: Pose;
										["wing.L"]: Pose;
									};
								};
							};
						};
					};
				};
				Owl_Sit: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["tail.01"]: Pose;
										["feet.L"]: Pose;
										["tail.02"]: Pose;
										["wing.R"]: Pose;
										["wing.L"]: Pose;
									};
								};
							};
						};
					};
				};
				Owl_Jump: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["tail.01"]: Pose;
										["feet.L"]: Pose;
										["tail.02"]: Pose;
										["wing.R"]: Pose;
										["wing.L"]: Pose;
									};
								};
							};
						};
					};
				};
				Owl_Idle3: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["tail.01"]: Pose;
										["feet.L"]: Pose;
										["tail.02"]: Pose;
										["wing.R"]: Pose;
										["wing.L"]: Pose;
									};
								};
							};
						};
					};
				};
			};
			AnimationsFolder: Folder;
			Mesh: MeshPart & {
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
			AnimationController: AnimationController & {
				Animator: Animator;
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
			Mesh: MeshPart & {
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
			AnimSaves: Model & {
				Ox_Run: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose;
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.B.L"]: Pose;
									["ear.L"]: Pose;
									["leg.B.R"]: Pose;
									["tail.01"]: Pose & {
										["tail.02"]: Pose;
									};
									["leg.F.L"]: Pose;
									["leg.F.R"]: Pose;
									["ear.R"]: Pose;
								};
							};
						};
						Rig: Pose;
					};
				};
				Ox_Hit: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose;
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.B.L"]: Pose;
									["ear.L"]: Pose;
									["leg.B.R"]: Pose;
									["tail.01"]: Pose & {
										["tail.02"]: Pose;
									};
									["leg.F.L"]: Pose;
									["leg.F.R"]: Pose;
									["ear.R"]: Pose;
								};
							};
						};
						Rig: Pose;
					};
				};
				Ox_Swim: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose;
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.B.L"]: Pose;
									["ear.L"]: Pose;
									["leg.B.R"]: Pose;
									["tail.01"]: Pose & {
										["tail.02"]: Pose;
									};
									["leg.F.L"]: Pose;
									["leg.F.R"]: Pose;
									["ear.R"]: Pose;
								};
							};
						};
						Rig: Pose;
					};
				};
				Ox_Fly: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose;
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.B.L"]: Pose;
									["ear.L"]: Pose;
									["leg.B.R"]: Pose;
									["tail.01"]: Pose & {
										["tail.02"]: Pose;
									};
									["leg.F.L"]: Pose;
									["leg.F.R"]: Pose;
									["ear.R"]: Pose;
								};
							};
						};
						Rig: Pose;
					};
				};
				Ox_Idle: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose;
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.B.L"]: Pose;
									["ear.L"]: Pose;
									["leg.B.R"]: Pose;
									["tail.01"]: Pose & {
										["tail.02"]: Pose;
									};
									["leg.F.L"]: Pose;
									["leg.F.R"]: Pose;
									["ear.R"]: Pose;
								};
							};
						};
						Rig: Pose;
					};
				};
				Ox_Idle2: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose;
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.B.L"]: Pose;
									["ear.L"]: Pose;
									["leg.B.R"]: Pose;
									["leg.F.R"]: Pose;
									["leg.F.L"]: Pose;
									["tail.01"]: Pose & {
										["tail.02"]: Pose;
									};
									["ear.R"]: Pose;
								};
							};
						};
						Rig: Pose;
					};
				};
				Ox_Walk: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose;
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.B.L"]: Pose;
									["ear.L"]: Pose;
									["leg.B.R"]: Pose;
									["tail.01"]: Pose & {
										["tail.02"]: Pose;
									};
									["leg.F.L"]: Pose;
									["leg.F.R"]: Pose;
									["ear.R"]: Pose;
								};
							};
						};
						Rig: Pose;
					};
				};
				Ox_Fear: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose;
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.B.L"]: Pose;
									["ear.L"]: Pose;
									["leg.B.R"]: Pose;
									["tail.01"]: Pose & {
										["tail.02"]: Pose;
									};
									["leg.F.L"]: Pose;
									["leg.F.R"]: Pose;
									["ear.R"]: Pose;
								};
							};
						};
						Rig: Pose;
					};
				};
				Ox_Roll: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose;
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.B.L"]: Pose;
									["ear.L"]: Pose;
									["leg.B.R"]: Pose;
									["tail.01"]: Pose & {
										["tail.02"]: Pose;
									};
									["leg.F.L"]: Pose;
									["leg.F.R"]: Pose;
									["ear.R"]: Pose;
								};
							};
						};
						Rig: Pose;
					};
				};
				Ox_Jump: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose;
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.B.L"]: Pose;
									["ear.L"]: Pose;
									["leg.B.R"]: Pose;
									["tail.01"]: Pose & {
										["tail.02"]: Pose;
									};
									["leg.F.L"]: Pose;
									["leg.F.R"]: Pose;
									["ear.R"]: Pose;
								};
							};
						};
						Rig: Pose;
					};
				};
				Ox_Attack: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose;
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.B.L"]: Pose;
									["ear.L"]: Pose;
									["leg.B.R"]: Pose;
									["tail.01"]: Pose & {
										["tail.02"]: Pose;
									};
									["leg.F.L"]: Pose;
									["leg.F.R"]: Pose;
									["ear.R"]: Pose;
								};
							};
						};
						Rig: Pose;
					};
				};
				Ox_Idle3: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose;
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.B.L"]: Pose;
									["ear.L"]: Pose;
									["leg.B.R"]: Pose;
									["tail.01"]: Pose & {
										["tail.02"]: Pose;
									};
									["leg.F.L"]: Pose;
									["leg.F.R"]: Pose;
									["ear.R"]: Pose;
								};
							};
						};
						Rig: Pose;
					};
				};
				Ox_Clicked: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose;
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.B.L"]: Pose;
									["ear.L"]: Pose;
									["leg.B.R"]: Pose;
									["tail.01"]: Pose & {
										["tail.02"]: Pose;
									};
									["leg.F.L"]: Pose;
									["leg.F.R"]: Pose;
									["ear.R"]: Pose;
								};
							};
						};
						Rig: Pose;
					};
				};
				Ox_Bounce: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose;
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.B.L"]: Pose;
									["ear.L"]: Pose;
									["leg.B.R"]: Pose;
									["tail.01"]: Pose & {
										["tail.02"]: Pose;
									};
									["leg.F.L"]: Pose;
									["leg.F.R"]: Pose;
									["ear.R"]: Pose;
								};
							};
						};
						Rig: Pose;
					};
				};
				Ox_Eat: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose;
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.B.L"]: Pose;
									["ear.L"]: Pose;
									["leg.B.R"]: Pose;
									["tail.01"]: Pose & {
										["tail.02"]: Pose;
									};
									["leg.F.L"]: Pose;
									["leg.F.R"]: Pose;
									["ear.R"]: Pose;
								};
							};
						};
						Rig: Pose;
					};
				};
				Ox_Sit: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose;
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.B.L"]: Pose;
									["ear.L"]: Pose;
									["leg.B.R"]: Pose;
									["tail.01"]: Pose & {
										["tail.02"]: Pose;
									};
									["leg.F.L"]: Pose;
									["leg.F.R"]: Pose;
									["ear.R"]: Pose;
								};
							};
						};
						Rig: Pose;
					};
				};
				Ox_Death: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose;
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.B.L"]: Pose;
									["ear.L"]: Pose;
									["leg.B.R"]: Pose;
									["tail.01"]: Pose & {
										["tail.02"]: Pose;
									};
									["leg.F.L"]: Pose;
									["leg.F.R"]: Pose;
									["ear.R"]: Pose;
								};
							};
						};
						Rig: Pose;
					};
				};
				Ox_Spin: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose;
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.B.L"]: Pose;
									["ear.L"]: Pose;
									["leg.B.R"]: Pose;
									["tail.01"]: Pose & {
										["tail.02"]: Pose;
									};
									["leg.F.L"]: Pose;
									["leg.F.R"]: Pose;
									["ear.R"]: Pose;
								};
							};
						};
						Rig: Pose;
					};
				};
			};
		};
		Penguin: Model & {
			AnimationController: AnimationController & {
				Animator: Animator;
			};
			AnimSaves: Model & {
				Penguin_Eat: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["feet.R"]: Pose;
									["feet.L"]: Pose;
									["hair.01"]: Pose;
									["tail.01"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
				Penguin_Clicked: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["feet.R"]: Pose;
									["tail.01"]: Pose;
									["hair.01"]: Pose;
									["wing.R"]: Pose;
									["wing.L"]: Pose;
									["feet.L"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
				Penguin_Roll: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["feet.R"]: Pose;
									["feet.L"]: Pose;
									["hair.01"]: Pose;
									["tail.01"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
				Penguin_Idle3: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["feet.R"]: Pose;
									["tail.01"]: Pose;
									["hair.01"]: Pose;
									["wing.R"]: Pose;
									["wing.L"]: Pose;
									["feet.L"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
				Penguin_Idle2: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["feet.R"]: Pose;
									["tail.01"]: Pose;
									["hair.01"]: Pose;
									["wing.R"]: Pose;
									["wing.L"]: Pose;
									["feet.L"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
				Penguin_Fly: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["feet.R"]: Pose;
									["tail.01"]: Pose;
									["hair.01"]: Pose;
									["wing.R"]: Pose;
									["wing.L"]: Pose;
									["feet.L"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
				Penguin_Run: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["feet.R"]: Pose;
									["tail.01"]: Pose;
									["hair.01"]: Pose;
									["wing.R"]: Pose;
									["wing.L"]: Pose;
									["feet.L"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
				Penguin_Sit: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["feet.R"]: Pose;
									["tail.01"]: Pose;
									["hair.01"]: Pose;
									["wing.R"]: Pose;
									["wing.L"]: Pose;
									["feet.L"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
				Penguin_Bounce: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["feet.R"]: Pose;
									["tail.01"]: Pose;
									["hair.01"]: Pose;
									["wing.R"]: Pose;
									["wing.L"]: Pose;
									["feet.L"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
				Penguin_Fear: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["feet.R"]: Pose;
									["tail.01"]: Pose;
									["hair.01"]: Pose;
									["wing.R"]: Pose;
									["wing.L"]: Pose;
									["feet.L"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
				Penguin_Jump: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["feet.R"]: Pose;
									["tail.01"]: Pose;
									["hair.01"]: Pose;
									["wing.R"]: Pose;
									["wing.L"]: Pose;
									["feet.L"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
				Penguin_Hit: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["feet.R"]: Pose;
									["tail.01"]: Pose;
									["hair.01"]: Pose;
									["wing.R"]: Pose;
									["wing.L"]: Pose;
									["feet.L"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
				Penguin_Death: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["feet.R"]: Pose;
									["tail.01"]: Pose;
									["feet.L"]: Pose;
									["wing.L"]: Pose;
									["wing.R"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
				Penguin_Idle: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["feet.R"]: Pose;
									["tail.01"]: Pose;
									["hair.01"]: Pose;
									["wing.R"]: Pose;
									["wing.L"]: Pose;
									["feet.L"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
				Penguin_Walk: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["wing.L"]: Pose;
									};
								};
							};
						};
					};
				};
				Penguin_Spin: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["feet.R"]: Pose;
									["tail.01"]: Pose;
									["hair.01"]: Pose;
									["wing.R"]: Pose;
									["wing.L"]: Pose;
									["feet.L"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
				Penguin_Swim: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["feet.R"]: Pose;
									["tail.01"]: Pose;
									["hair.01"]: Pose;
									["wing.R"]: Pose;
									["wing.L"]: Pose;
									["feet.L"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
				Penguin_Attack: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["feet.R"]: Pose;
									["tail.01"]: Pose;
									["hair.01"]: Pose;
									["wing.R"]: Pose;
									["wing.L"]: Pose;
									["feet.L"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
			};
			AnimationsFolder: Folder;
			Mesh: MeshPart & {
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
			AnimationController: AnimationController;
			AnimSaves: Model & {
				Cheetah_Run: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Cheetah_Eat: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Cheetah_Hit: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Cheetah_Idle2: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Cheetah_Death: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Cheetah_Fear: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Cheetah_Roll: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Cheetah_Swim: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Cheetah_Clicked: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Cheetah_Sit: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Cheetah_Spin: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Cheetah_Jump: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Cheetah_Walk: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Cheetah_Attack: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Cheetah_Bounce: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Cheetah_Idle: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Cheetah_Idle3: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Cheetah_Fly: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
			};
			AnimationsFolder: Folder;
			Mesh: MeshPart & {
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
			AnimationController: AnimationController;
			AnimSaves: Model & {
				Eagle_Idle3: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Eagle_Sit: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Eagle_Fear: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Eagle_Idle2: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Eagle_Swim: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Eagle_Hit: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Eagle_Idle: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Eagle_Attack: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Eagle_Roll: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Eagle_Clicked: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Eagle_Run: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Eagle_Spin: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Eagle_Death: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Eagle_Eat: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Eagle_Walk: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Eagle_Jump: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Eagle_Bounce: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Eagle_Fly: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
			};
			AnimationsFolder: Folder;
			Mesh: MeshPart & {
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
			AnimationController: AnimationController & {
				Animator: Animator;
			};
			AnimSaves: Model & {
				Cow_Idle2: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Cow_Clicked: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Cow_Eat: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Cow_Roll: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Cow_Hit: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Cow_Fear: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Cow_Swim: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Cow_Bounce: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Cow_Spin: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Cow_Walk: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Cow_Attack: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Cow_Idle: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Cow_Jump: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Cow_Fly: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Cow_Idle3: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Cow_Death: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Cow_Run: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Cow_Sit: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
			};
			AnimationsFolder: Folder;
			Mesh: MeshPart & {
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
			AnimationController: AnimationController;
			AnimSaves: Model & {
				Ostrich_Jump: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Ostrich_Eat: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Ostrich_Hit: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Ostrich_Sit: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Ostrich_Spin: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Ostrich_Idle: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Ostrich_Fly: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Ostrich_Idle2: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Ostrich_Bounce: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Ostrich_Attack: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Ostrich_Death: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Ostrich_Walk: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Ostrich_Fear: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Ostrich_Roll: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Ostrich_Swim: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Ostrich_Run: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Ostrich_Clicked: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Ostrich_Idle3: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
			};
			AnimationsFolder: Folder;
			Mesh: MeshPart & {
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
			AnimationController: AnimationController;
			AnimSaves: Model & {
				Goldfish_Spin: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["fin.L"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["fin.R"]: Pose;
										["fin.02"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Goldfish_Idle: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["fin.L"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["fin.R"]: Pose;
										["fin.02"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Goldfish_Eat: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["fin.L"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["fin.R"]: Pose;
										["fin.02"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Goldfish_Fly: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["fin.L"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["fin.R"]: Pose;
										["fin.02"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Goldfish_Attack: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["fin.L"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["fin.R"]: Pose;
										["fin.02"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Goldfish_Idle2: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["fin.L"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["fin.R"]: Pose;
										["fin.02"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Goldfish_Hit: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["fin.L"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["fin.R"]: Pose;
										["fin.02"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Goldfish_Clicked: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["fin.L"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["fin.R"]: Pose;
										["fin.02"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Goldfish_Swim: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["fin.L"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["fin.R"]: Pose;
										["fin.02"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Goldfish_Bounce: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["fin.L"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["fin.R"]: Pose;
										["fin.02"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Goldfish_Fear: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["fin.L"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["fin.R"]: Pose;
										["fin.02"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Goldfish_Roll: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["fin.L"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["fin.R"]: Pose;
										["fin.02"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Goldfish_Sit: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["fin.L"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["fin.R"]: Pose;
										["fin.02"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Goldfish_Death: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["fin.L"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["fin.R"]: Pose;
										["fin.02"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Goldfish_Jump: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["fin.L"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["fin.R"]: Pose;
										["fin.02"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Goldfish_Walk: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["fin.L"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["fin.R"]: Pose;
										["fin.02"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Goldfish_Idle3: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["fin.L"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["fin.R"]: Pose;
										["fin.02"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Goldfish_Run: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["fin.L"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["fin.R"]: Pose;
										["fin.02"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
			};
			AnimationsFolder: Folder;
			Mesh: MeshPart & {
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
			AnimationController: AnimationController;
			AnimSaves: Model & {
				Zebra_Jump: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Zebra_Walk: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Zebra_Swim: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Zebra_Idle: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Zebra_Clicked: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Zebra_Spin: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Zebra_Idle2: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Zebra_Roll: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Zebra_Idle3: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Zebra_Sit: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Zebra_Fear: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Zebra_Hit: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Zebra_Death: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Zebra_Fly: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Zebra_Bounce: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Zebra_Attack: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Zebra_Eat: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Zebra_Run: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
			};
			AnimationsFolder: Folder;
			Mesh: MeshPart & {
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
		Tortoise: Model & {
			AnimationController: AnimationController;
			AnimSaves: Model & {
				Tortoise_Roll: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.B.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.L"]: Pose;
										["leg.F.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Tortoise_Sit: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.B.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.L"]: Pose;
										["leg.F.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Tortoise_Hit: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.B.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.L"]: Pose;
										["leg.F.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Tortoise_Clicked: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.B.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.L"]: Pose;
										["leg.F.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Tortoise_Fly: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.B.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.L"]: Pose;
										["leg.F.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Tortoise_Attack: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.B.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.L"]: Pose;
										["leg.F.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Tortoise_Death: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.B.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.L"]: Pose;
										["leg.F.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Tortoise_Idle3: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.B.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.L"]: Pose;
										["leg.F.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Tortoise_Jump: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.B.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.L"]: Pose;
										["leg.F.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Tortoise_Idle: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.B.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.L"]: Pose;
										["leg.F.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Tortoise_Run: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.B.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.L"]: Pose;
										["leg.F.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Tortoise_Swim: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.B.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.L"]: Pose;
										["leg.F.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Tortoise_Fear: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.B.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.L"]: Pose;
										["leg.F.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Tortoise_Spin: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.B.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.L"]: Pose;
										["leg.F.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Tortoise_Idle2: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.B.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.L"]: Pose;
										["leg.F.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Tortoise_Bounce: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.B.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.L"]: Pose;
										["leg.F.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Tortoise_Eat: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.B.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.L"]: Pose;
										["leg.F.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Tortoise_Walk: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.B.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.L"]: Pose;
										["leg.F.R"]: Pose;
									};
								};
							};
						};
					};
				};
			};
			AnimationsFolder: Folder;
			Mesh: MeshPart & {
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
		Mice: Model & {
			AnimationController: AnimationController;
			AnimSaves: Model & {
				Mice_Run: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Mice_Idle: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Mice_Idle3: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Mice_Hit: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Mice_Walk: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Mice_Swim: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Mice_Clicked: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Mice_Death: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Mice_Bounce: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Mice_Idle2: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Mice_Eat: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Mice_Roll: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Mice_Sit: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Mice_Attack: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Mice_Jump: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Mice_Fly: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Mice_Fear: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Mice_Spin: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
			};
			AnimationsFolder: Folder;
			Mesh: MeshPart & {
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
		Pig: Model & {
			AnimationController: AnimationController;
			AnimSaves: Model & {
				Pig_Idle2: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Pig_Spin: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Pig_Swim: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Pig_Clicked: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Pig_Run: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Pig_Roll: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Pig_Bounce: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Pig_Sit: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Pig_Jump: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Pig_Hit: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Pig_Idle: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Pig_Eat: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Pig_Death: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Pig_Walk: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Pig_Fear: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Pig_Idle3: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Pig_Fly: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Pig_Attack: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
			};
			AnimationsFolder: Folder;
			Mesh: MeshPart & {
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
		Donkey: Model & {
			AnimationController: AnimationController;
			AnimSaves: Model & {
				Donkey_Jump: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Donkey_Fly: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Donkey_Roll: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Donkey_Clicked: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Donkey_Sit: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Donkey_Walk: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Donkey_Attack: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Donkey_Idle: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Donkey_Swim: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Donkey_Idle3: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Donkey_Spin: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Donkey_Death: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Donkey_Run: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Donkey_Hit: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Donkey_Eat: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Donkey_Fear: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Donkey_Bounce: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Donkey_Idle2: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
			};
			AnimationsFolder: Folder;
			Mesh: MeshPart & {
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
			AnimationController: AnimationController;
			AnimSaves: Model & {
				Hyena_Fear: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Hyena_Idle: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Hyena_Death: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Hyena_Idle3: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Hyena_Hit: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Hyena_Spin: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Hyena_Fly: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Hyena_Walk: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Hyena_Run: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Hyena_Sit: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Hyena_Roll: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Hyena_Swim: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Hyena_Bounce: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Hyena_Eat: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Hyena_Jump: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Hyena_Attack: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Hyena_Clicked: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Hyena_Idle2: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
			};
			AnimationsFolder: Folder;
			Mesh: MeshPart & {
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
			AnimationController: AnimationController;
			AnimSaves: Model & {
				Buffalo_Walk: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Buffalo_Bounce: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Buffalo_Fly: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Buffalo_Death: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Buffalo_Idle3: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Buffalo_Idle: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Buffalo_Spin: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Buffalo_Hit: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Buffalo_Eat: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Buffalo_Jump: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Buffalo_Swim: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Buffalo_Clicked: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Buffalo_Sit: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Buffalo_Run: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Buffalo_Fear: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Buffalo_Roll: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Buffalo_Idle2: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Buffalo_Attack: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
			};
			AnimationsFolder: Folder;
			Mesh: MeshPart & {
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
			AnimationController: AnimationController;
			AnimSaves: Model & {
				Duck_Run: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Duck_Fear: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Duck_Eat: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Duck_Hit: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Duck_Idle: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Duck_Jump: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Duck_Attack: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Duck_Spin: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Duck_Idle2: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Duck_Swim: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Duck_Idle3: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Duck_Roll: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Duck_Walk: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Duck_Clicked: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Duck_Sit: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Duck_Bounce: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Duck_Death: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Duck_Fly: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
			};
			AnimationsFolder: Folder;
			Mesh: MeshPart & {
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
			AnimationController: AnimationController;
			AnimSaves: Model & {
				Fox_Attack: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Fox_Eat: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Fox_Idle2: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Fox_Sit: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Fox_Clicked: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Fox_Bounce: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Fox_Spin: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Fox_Death: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Fox_Idle: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Fox_Hit: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Fox_Walk: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Fox_Swim: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Fox_Run: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Fox_Idle3: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Fox_Roll: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Fox_Fear: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Fox_Jump: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Fox_Fly: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
			};
			AnimationsFolder: Folder;
			Mesh: MeshPart & {
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
			AnimationController: AnimationController;
			AnimSaves: Model & {
				Crow_Spin: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["wing.R"]: Pose;
										["hair.01"]: Pose;
										["tail.01"]: Pose;
										["feet.L"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Crow_Idle2: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["wing.R"]: Pose;
										["hair.01"]: Pose;
										["tail.01"]: Pose;
										["feet.L"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Crow_Swim: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["wing.R"]: Pose;
										["hair.01"]: Pose;
										["tail.01"]: Pose;
										["feet.L"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Crow_Run: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["wing.R"]: Pose;
										["hair.01"]: Pose;
										["tail.01"]: Pose;
										["feet.L"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Crow_Attack: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["wing.R"]: Pose;
										["hair.01"]: Pose;
										["tail.01"]: Pose;
										["feet.L"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Crow_Death: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["wing.R"]: Pose;
										["hair.01"]: Pose;
										["tail.01"]: Pose;
										["feet.L"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Crow_Eat: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["wing.R"]: Pose;
										["hair.01"]: Pose;
										["tail.01"]: Pose;
										["feet.L"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Crow_Clicked: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["wing.R"]: Pose;
										["hair.01"]: Pose;
										["tail.01"]: Pose;
										["feet.L"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Crow_Walk: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["wing.R"]: Pose;
										["hair.01"]: Pose;
										["tail.01"]: Pose;
										["feet.L"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Crow_Fly: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["wing.R"]: Pose;
										["hair.01"]: Pose;
										["tail.01"]: Pose;
										["feet.L"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Crow_Bounce: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["wing.R"]: Pose;
										["hair.01"]: Pose;
										["tail.01"]: Pose;
										["feet.L"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Crow_Hit: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["wing.R"]: Pose;
										["hair.01"]: Pose;
										["tail.01"]: Pose;
										["feet.L"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Crow_Sit: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["wing.R"]: Pose;
										["hair.01"]: Pose;
										["tail.01"]: Pose;
										["feet.L"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Crow_Idle3: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["wing.R"]: Pose;
										["hair.01"]: Pose;
										["tail.01"]: Pose;
										["feet.L"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Crow_Roll: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["wing.R"]: Pose;
										["hair.01"]: Pose;
										["tail.01"]: Pose;
										["feet.L"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Crow_Jump: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["wing.R"]: Pose;
										["hair.01"]: Pose;
										["tail.01"]: Pose;
										["feet.L"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Crow_Idle: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["wing.R"]: Pose;
										["hair.01"]: Pose;
										["tail.01"]: Pose;
										["feet.L"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Crow_Fear: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["wing.R"]: Pose;
										["hair.01"]: Pose;
										["tail.01"]: Pose;
										["feet.L"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
			};
			AnimationsFolder: Folder;
			Mesh: MeshPart & {
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
			AnimationController: AnimationController;
			AnimSaves: Model & {
				Hog_Fly: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Hog_Eat: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Hog_Swim: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Hog_Clicked: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Hog_Sit: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Hog_Idle2: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Hog_Attack: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Hog_Bounce: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Hog_Idle: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Hog_Run: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Hog_Fear: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Hog_Walk: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Hog_Spin: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Hog_Death: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Hog_Idle3: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Hog_Hit: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Hog_Jump: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Hog_Roll: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
			};
			AnimationsFolder: Folder;
			Mesh: MeshPart & {
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
		SnowOwl: Model & {
			AnimationController: AnimationController & {
				Animator: Animator;
			};
			AnimSaves: Model & {
				SnowOwl_Death: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["tail.01"]: Pose;
										["feet.L"]: Pose;
										["tail.02"]: Pose;
										["wing.R"]: Pose;
										["wing.L"]: Pose;
									};
								};
							};
						};
					};
				};
				SnowOwl_Idle3: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["tail.01"]: Pose;
										["feet.L"]: Pose;
										["tail.02"]: Pose;
										["wing.R"]: Pose;
										["wing.L"]: Pose;
									};
								};
							};
						};
					};
				};
				SnowOwl_Idle2: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["tail.01"]: Pose;
										["feet.L"]: Pose;
										["tail.02"]: Pose;
										["wing.R"]: Pose;
										["wing.L"]: Pose;
									};
								};
							};
						};
					};
				};
				SnowOwl_Jump: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["tail.01"]: Pose;
										["feet.L"]: Pose;
										["tail.02"]: Pose;
										["wing.R"]: Pose;
										["wing.L"]: Pose;
									};
								};
							};
						};
					};
				};
				SnowOwl_Fear: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["tail.01"]: Pose;
										["feet.L"]: Pose;
										["tail.02"]: Pose;
										["wing.R"]: Pose;
										["wing.L"]: Pose;
									};
								};
							};
						};
					};
				};
				SnowOwl_Fly: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["tail.01"]: Pose;
										["feet.L"]: Pose;
										["tail.02"]: Pose;
										["wing.R"]: Pose;
										["wing.L"]: Pose;
									};
								};
							};
						};
					};
				};
				SnowOwl_Sit: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["tail.01"]: Pose;
										["feet.L"]: Pose;
										["tail.02"]: Pose;
										["wing.R"]: Pose;
										["wing.L"]: Pose;
									};
								};
							};
						};
					};
				};
				SnowOwl_Bounce: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["tail.01"]: Pose;
										["feet.L"]: Pose;
										["tail.02"]: Pose;
										["wing.R"]: Pose;
										["wing.L"]: Pose;
									};
								};
							};
						};
					};
				};
				SnowOwl_Walk: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["tail.01"]: Pose;
										["feet.L"]: Pose;
										["tail.02"]: Pose;
										["wing.R"]: Pose;
										["wing.L"]: Pose;
									};
								};
							};
						};
					};
				};
				SnowOwl_Idle: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["tail.01"]: Pose;
										["feet.L"]: Pose;
										["tail.02"]: Pose;
										["wing.R"]: Pose;
										["wing.L"]: Pose;
									};
								};
							};
						};
					};
				};
				SnowOwl_Roll: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["tail.01"]: Pose;
										["feet.L"]: Pose;
										["tail.02"]: Pose;
										["wing.R"]: Pose;
										["wing.L"]: Pose;
									};
								};
							};
						};
					};
				};
				SnowOwl_Attack: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["tail.01"]: Pose;
										["feet.L"]: Pose;
										["tail.02"]: Pose;
										["wing.R"]: Pose;
										["wing.L"]: Pose;
									};
								};
							};
						};
					};
				};
				SnowOwl_Run: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["tail.01"]: Pose;
										["feet.L"]: Pose;
										["tail.02"]: Pose;
										["wing.R"]: Pose;
										["wing.L"]: Pose;
									};
								};
							};
						};
					};
				};
				SnowOwl_Spin: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["tail.01"]: Pose;
										["feet.L"]: Pose;
										["tail.02"]: Pose;
										["wing.R"]: Pose;
										["wing.L"]: Pose;
									};
								};
							};
						};
					};
				};
				SnowOwl_Eat: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["tail.01"]: Pose;
										["feet.L"]: Pose;
										["tail.02"]: Pose;
										["wing.R"]: Pose;
										["wing.L"]: Pose;
									};
								};
							};
						};
					};
				};
				SnowOwl_Swim: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["tail.01"]: Pose;
										["feet.L"]: Pose;
										["tail.02"]: Pose;
										["wing.R"]: Pose;
										["wing.L"]: Pose;
									};
								};
							};
						};
					};
				};
				SnowOwl_Hit: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["tail.01"]: Pose;
										["feet.L"]: Pose;
										["tail.02"]: Pose;
										["wing.R"]: Pose;
										["wing.L"]: Pose;
									};
								};
							};
						};
					};
				};
				SnowOwl_Clicked: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["tail.01"]: Pose;
										["feet.L"]: Pose;
										["tail.02"]: Pose;
										["wing.R"]: Pose;
										["wing.L"]: Pose;
									};
								};
							};
						};
					};
				};
			};
			AnimationsFolder: Folder;
			Mesh: MeshPart & {
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
		Cat: Model & {
			AnimationController: AnimationController;
			AnimSaves: Model & {
				Cat_Eat: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Cat_Hit: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Cat_Clicked: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Cat_Bounce: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Cat_Spin: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Cat_Idle: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Cat_Attack: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Cat_Jump: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Cat_Idle3: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Cat_Roll: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Cat_Run: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Cat_Swim: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Cat_Walk: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Cat_Idle2: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Cat_Sit: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Cat_Fly: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Cat_Fear: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Cat_Death: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
			};
			AnimationsFolder: Folder;
			Mesh: MeshPart & {
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
		Rhino: Model & {
			AnimationController: AnimationController & {
				Animator: Animator;
			};
			AnimSaves: Model & {
				Rhino_Fear: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Rhino_Run: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Rhino_Bounce: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Rhino_Idle3: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Rhino_Idle: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Rhino_Fly: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Rhino_Eat: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Rhino_Roll: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Rhino_Jump: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Rhino_Walk: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Rhino_Swim: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Rhino_Clicked: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Rhino_Spin: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Rhino_Death: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Rhino_Sit: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Rhino_Idle2: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Rhino_Hit: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Rhino_Attack: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
			};
			AnimationsFolder: Folder;
			Mesh: MeshPart & {
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
		Hippo: Model & {
			AnimationController: AnimationController;
			AnimSaves: Model & {
				Hippo_Run: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Hippo_Hit: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Hippo_Roll: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Hippo_Swim: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Hippo_Idle: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Hippo_Bounce: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Hippo_Death: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Hippo_Clicked: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Hippo_Sit: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Hippo_Attack: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Hippo_Fear: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Hippo_Spin: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Hippo_Walk: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Hippo_Jump: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Hippo_Idle3: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Hippo_Eat: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Hippo_Fly: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Hippo_Idle2: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
			};
			AnimationsFolder: Folder;
			Mesh: MeshPart & {
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
		Wolf: Model & {
			AnimationController: AnimationController;
			AnimSaves: Model & {
				Wolf_Clicked: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Wolf_Bounce: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Wolf_Walk: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Wolf_Fear: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Wolf_Eat: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Wolf_Spin: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Wolf_Idle2: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Wolf_Idle: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Wolf_Roll: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Wolf_Swim: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Wolf_Fly: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Wolf_Jump: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Wolf_Attack: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Wolf_Death: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Wolf_Hit: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Wolf_Run: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Wolf_Sit: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Wolf_Idle3: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
			};
			AnimationsFolder: Folder;
			Mesh: MeshPart & {
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
		Antelope: Model & {
			AnimationController: AnimationController;
			AnimSaves: Model & {
				Antelope_Clicked: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Antelope_Sit: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Antelope_Fly: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Antelope_Idle: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Antelope_Walk: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Antelope_Roll: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Antelope_Idle2: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Antelope_Eat: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Antelope_Run: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Antelope_Spin: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Antelope_Idle3: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Antelope_Jump: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Antelope_Death: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Antelope_Fear: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Antelope_Hit: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Antelope_Swim: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Antelope_Attack: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Antelope_Bounce: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
			};
			AnimationsFolder: Folder;
			Mesh: MeshPart & {
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
		Elephant: Model & {
			AnimationController: AnimationController & {
				Animator: Animator;
			};
			AnimSaves: Model & {
				Elephant_Walk: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["trunk.01"]: Pose & {
											["trunk.02"]: Pose & {
												["trunk.03"]: Pose & {
													["trunk.04"]: Pose;
												};
											};
										};
										["tail.01"]: Pose;
										["leg.B.R"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Elephant_Clicked: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["trunk.01"]: Pose & {
											["trunk.02"]: Pose & {
												["trunk.03"]: Pose & {
													["trunk.04"]: Pose;
												};
											};
										};
										["tail.01"]: Pose;
										["leg.B.R"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Elephant_Hit: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["trunk.01"]: Pose & {
											["trunk.02"]: Pose & {
												["trunk.03"]: Pose & {
													["trunk.04"]: Pose;
												};
											};
										};
										["tail.01"]: Pose;
										["leg.B.R"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Elephant_Run: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["trunk.01"]: Pose & {
											["trunk.02"]: Pose & {
												["trunk.03"]: Pose & {
													["trunk.04"]: Pose;
												};
											};
										};
										["tail.01"]: Pose;
										["leg.B.R"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Elephant_Jump: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["trunk.01"]: Pose & {
											["trunk.02"]: Pose & {
												["trunk.03"]: Pose & {
													["trunk.04"]: Pose;
												};
											};
										};
										["tail.01"]: Pose;
										["leg.B.R"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Elephant_Idle: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["trunk.01"]: Pose & {
											["trunk.02"]: Pose & {
												["trunk.03"]: Pose & {
													["trunk.04"]: Pose;
												};
											};
										};
										["tail.01"]: Pose;
										["leg.B.R"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Elephant_Swim: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["trunk.01"]: Pose & {
											["trunk.02"]: Pose & {
												["trunk.03"]: Pose & {
													["trunk.04"]: Pose;
												};
											};
										};
										["tail.01"]: Pose;
										["leg.B.R"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Elephant_Idle2: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["trunk.01"]: Pose & {
											["trunk.02"]: Pose & {
												["trunk.03"]: Pose & {
													["trunk.04"]: Pose;
												};
											};
										};
										["tail.01"]: Pose;
										["leg.B.R"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Elephant_Fear: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["trunk.01"]: Pose & {
											["trunk.02"]: Pose & {
												["trunk.03"]: Pose & {
													["trunk.04"]: Pose;
												};
											};
										};
										["tail.01"]: Pose;
										["leg.B.R"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Elephant_Roll: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["trunk.01"]: Pose & {
											["trunk.02"]: Pose & {
												["trunk.03"]: Pose & {
													["trunk.04"]: Pose;
												};
											};
										};
										["tail.01"]: Pose;
										["leg.B.R"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Elephant_Bounce: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["trunk.01"]: Pose & {
											["trunk.02"]: Pose & {
												["trunk.03"]: Pose & {
													["trunk.04"]: Pose;
												};
											};
										};
										["tail.01"]: Pose;
										["leg.B.R"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Elephant_Idle3: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["trunk.01"]: Pose & {
											["trunk.02"]: Pose & {
												["trunk.03"]: Pose & {
													["trunk.04"]: Pose;
												};
											};
										};
										["tail.01"]: Pose;
										["leg.B.R"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Elephant_Attack: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["trunk.01"]: Pose & {
											["trunk.02"]: Pose & {
												["trunk.03"]: Pose & {
													["trunk.04"]: Pose;
												};
											};
										};
										["tail.01"]: Pose;
										["leg.B.R"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Elephant_Eat: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["trunk.01"]: Pose & {
											["trunk.02"]: Pose & {
												["trunk.03"]: Pose & {
													["trunk.04"]: Pose;
												};
											};
										};
										["tail.01"]: Pose;
										["leg.B.R"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Elephant_Spin: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["trunk.01"]: Pose & {
											["trunk.02"]: Pose & {
												["trunk.03"]: Pose & {
													["trunk.04"]: Pose;
												};
											};
										};
										["tail.01"]: Pose;
										["leg.B.R"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Elephant_Sit: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["trunk.01"]: Pose & {
											["trunk.02"]: Pose & {
												["trunk.03"]: Pose & {
													["trunk.04"]: Pose;
												};
											};
										};
										["tail.01"]: Pose;
										["leg.B.R"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Elephant_Death: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["trunk.01"]: Pose & {
											["trunk.02"]: Pose & {
												["trunk.03"]: Pose & {
													["trunk.04"]: Pose;
												};
											};
										};
										["tail.01"]: Pose;
										["leg.B.R"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Elephant_Fly: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["trunk.01"]: Pose & {
											["trunk.02"]: Pose & {
												["trunk.03"]: Pose & {
													["trunk.04"]: Pose;
												};
											};
										};
										["tail.01"]: Pose;
										["leg.B.R"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
			};
			AnimationsFolder: Folder;
			Mesh: MeshPart & {
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
		Chicken: Model & {
			AnimationController: AnimationController & {
				Animator: Animator;
			};
			AnimSaves: Model & {
				Chicken_Bounce: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Chicken_Death: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Chicken_Run: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Chicken_Eat: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Chicken_Fly: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Chicken_Idle3: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Chicken_Clicked: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Chicken_Attack: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Chicken_Hit: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Chicken_Swim: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Chicken_Roll: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Chicken_Sit: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Chicken_Walk: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Chicken_Spin: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Chicken_Fear: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Chicken_Idle2: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Chicken_Jump: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Chicken_Idle: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
			};
			AnimationsFolder: Folder;
			Mesh: MeshPart & {
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
		Rabbit: Model & {
			AnimationController: AnimationController;
			AnimSaves: Model & {
				Rabbit_Walk: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Rabbit_Bounce: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Rabbit_Fear: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Rabbit_Jump: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Rabbit_Spin: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Rabbit_Idle2: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Rabbit_Idle3: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Rabbit_Run: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Rabbit_Swim: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Rabbit_Fly: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Rabbit_Sit: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Rabbit_Clicked: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Rabbit_Eat: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Rabbit_Death: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Rabbit_Idle: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Rabbit_Hit: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Rabbit_Roll: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Rabbit_Attack: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
			};
			AnimationsFolder: Folder;
			Mesh: MeshPart & {
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
		Reindeer: Model & {
			AnimationController: AnimationController & {
				Animator: Animator;
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
			Mesh: MeshPart & {
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
			AnimSaves: Model & {
				Reindeer_Bounce: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.B.L"]: Pose;
									["ear.L"]: Pose;
									["leg.B.R"]: Pose;
									["leg.F.R"]: Pose;
									["tail.01"]: Pose;
									["leg.F.L"]: Pose;
									["ear.R"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
				Reindeer_Run: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.B.L"]: Pose;
									["ear.L"]: Pose;
									["leg.B.R"]: Pose;
									["leg.F.R"]: Pose;
									["tail.01"]: Pose;
									["leg.F.L"]: Pose;
									["ear.R"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
				Reindeer_Walk: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.B.L"]: Pose;
									["ear.L"]: Pose;
									["leg.B.R"]: Pose;
									["leg.F.R"]: Pose;
									["tail.01"]: Pose;
									["leg.F.L"]: Pose;
									["ear.R"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
				Reindeer_Jump: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.B.L"]: Pose;
									["ear.L"]: Pose;
									["leg.B.R"]: Pose;
									["leg.F.R"]: Pose;
									["tail.01"]: Pose;
									["leg.F.L"]: Pose;
									["ear.R"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
				Reindeer_Spin: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.B.L"]: Pose;
									["ear.L"]: Pose;
									["leg.B.R"]: Pose;
									["leg.F.R"]: Pose;
									["tail.01"]: Pose;
									["leg.F.L"]: Pose;
									["ear.R"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
				Reindeer_Idle2: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.B.L"]: Pose;
									["ear.L"]: Pose;
									["leg.B.R"]: Pose;
									["leg.F.R"]: Pose;
									["tail.01"]: Pose;
									["leg.F.L"]: Pose;
									["ear.R"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
				Reindeer_Clicked: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.B.L"]: Pose;
									["ear.L"]: Pose;
									["leg.B.R"]: Pose;
									["leg.F.R"]: Pose;
									["tail.01"]: Pose;
									["leg.F.L"]: Pose;
									["ear.R"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
				Reindeer_Death: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.B.L"]: Pose;
									["ear.L"]: Pose;
									["leg.B.R"]: Pose;
									["leg.F.R"]: Pose;
									["tail.01"]: Pose;
									["leg.F.L"]: Pose;
									["ear.R"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
				Reindeer_Sit: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.B.L"]: Pose;
									["ear.L"]: Pose;
									["leg.B.R"]: Pose;
									["leg.F.R"]: Pose;
									["tail.01"]: Pose;
									["leg.F.L"]: Pose;
									["ear.R"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
				Reindeer_Idle: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.B.L"]: Pose;
									["ear.L"]: Pose;
									["leg.B.R"]: Pose;
									["leg.F.R"]: Pose;
									["tail.01"]: Pose;
									["leg.F.L"]: Pose;
									["ear.R"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
				Reindeer_Fly: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.B.L"]: Pose;
									["ear.L"]: Pose;
									["leg.B.R"]: Pose;
									["leg.F.R"]: Pose;
									["tail.01"]: Pose;
									["leg.F.L"]: Pose;
									["ear.R"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
				Reindeer_Swim: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.B.L"]: Pose;
									["ear.L"]: Pose;
									["leg.B.R"]: Pose;
									["leg.F.R"]: Pose;
									["tail.01"]: Pose;
									["leg.F.L"]: Pose;
									["ear.R"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
				Reindeer_Roll: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.B.L"]: Pose;
									["ear.L"]: Pose;
									["leg.B.R"]: Pose;
									["leg.F.R"]: Pose;
									["tail.01"]: Pose;
									["leg.F.L"]: Pose;
									["ear.R"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
				Reindeer_Idle3: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.B.L"]: Pose;
									["ear.L"]: Pose;
									["leg.B.R"]: Pose;
									["tail.01"]: Pose;
									["leg.F.R"]: Pose;
									["leg.F.L"]: Pose;
									["ear.R"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
				Reindeer_Eat: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.B.L"]: Pose;
									["ear.L"]: Pose;
									["leg.B.R"]: Pose;
									["leg.F.R"]: Pose;
									["tail.01"]: Pose;
									["leg.F.L"]: Pose;
									["ear.R"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
				Reindeer_Fear: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.B.L"]: Pose;
									["ear.L"]: Pose;
									["leg.B.R"]: Pose;
									["leg.F.R"]: Pose;
									["tail.01"]: Pose;
									["leg.F.L"]: Pose;
									["ear.R"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
				Reindeer_Hit: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.B.L"]: Pose;
									["ear.L"]: Pose;
									["leg.B.R"]: Pose;
									["leg.F.R"]: Pose;
									["tail.01"]: Pose;
									["leg.F.L"]: Pose;
									["ear.R"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
				Reindeer_Attack: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.B.L"]: Pose;
									["ear.L"]: Pose;
									["leg.B.R"]: Pose;
									["tail.01"]: Pose;
									["leg.F.R"]: Pose;
									["leg.F.L"]: Pose;
									["ear.R"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
			};
		};
		Parrot: Model & {
			AnimationController: AnimationController;
			AnimSaves: Model & {
				Parrot_Idle3: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Parrot_Eat: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Parrot_Attack: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Parrot_Sit: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Parrot_Run: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Parrot_Jump: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Parrot_Idle: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Parrot_Clicked: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Parrot_Fly: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Parrot_Spin: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Parrot_Walk: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Parrot_Roll: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Parrot_Fear: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Parrot_Bounce: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Parrot_Idle2: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Parrot_Death: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Parrot_Swim: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Parrot_Hit: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
			};
			AnimationsFolder: Folder;
			Mesh: MeshPart & {
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
		Walrus: Model & {
			AnimationController: AnimationController;
			AnimSaves: Model & {
				Walrus_Walk: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["leg.B.L"]: Pose;
										["leg.B.R"]: Pose;
										["leg.F.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Walrus_Idle: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["leg.B.L"]: Pose;
										["leg.B.R"]: Pose;
										["leg.F.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Walrus_Jump: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["leg.B.L"]: Pose;
										["leg.B.R"]: Pose;
										["leg.F.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Walrus_Spin: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["leg.B.L"]: Pose;
										["leg.B.R"]: Pose;
										["leg.F.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Walrus_Death: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["leg.B.L"]: Pose;
										["leg.B.R"]: Pose;
										["leg.F.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Walrus_Fear: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["leg.B.L"]: Pose;
										["leg.B.R"]: Pose;
										["leg.F.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Walrus_Roll: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["leg.B.L"]: Pose;
										["leg.B.R"]: Pose;
										["leg.F.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Walrus_Run: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["leg.B.L"]: Pose;
										["leg.B.R"]: Pose;
										["leg.F.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Walrus_Fly: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["leg.B.L"]: Pose;
										["leg.B.R"]: Pose;
										["leg.F.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Walrus_Swim: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["leg.B.L"]: Pose;
										["leg.B.R"]: Pose;
										["leg.F.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Walrus_Attack: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["leg.B.L"]: Pose;
										["leg.B.R"]: Pose;
										["leg.F.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Walrus_Hit: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["leg.B.L"]: Pose;
										["leg.B.R"]: Pose;
										["leg.F.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Walrus_Idle3: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["leg.B.L"]: Pose;
										["leg.B.R"]: Pose;
										["leg.F.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Walrus_Sit: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["leg.B.L"]: Pose;
										["leg.B.R"]: Pose;
										["leg.F.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Walrus_Clicked: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["leg.B.L"]: Pose;
										["leg.B.R"]: Pose;
										["leg.F.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Walrus_Eat: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["leg.B.L"]: Pose;
										["leg.B.R"]: Pose;
										["leg.F.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Walrus_Idle2: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["leg.B.L"]: Pose;
										["leg.B.R"]: Pose;
										["leg.F.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Walrus_Bounce: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["leg.B.L"]: Pose;
										["leg.B.R"]: Pose;
										["leg.F.R"]: Pose;
									};
								};
							};
						};
					};
				};
			};
			AnimationsFolder: Folder;
			Mesh: MeshPart & {
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
		Sheep: Model & {
			AnimationController: AnimationController;
			AnimSaves: Model & {
				Sheep_Spin: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Sheep_Idle3: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Sheep_Attack: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Sheep_Swim: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Sheep_Walk: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Sheep_Idle2: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Sheep_Jump: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Sheep_Run: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Sheep_Eat: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Sheep_Fear: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Sheep_Idle: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Sheep_Clicked: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Sheep_Roll: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Sheep_Sit: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Sheep_Hit: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Sheep_Fly: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Sheep_Death: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Sheep_Bounce: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose;
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
			};
			AnimationsFolder: Folder;
			Mesh: MeshPart & {
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
		Rooster: Model & {
			AnimationController: AnimationController;
			AnimSaves: Model & {
				Rooster_Walk: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["tail.03"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.R"]: Pose;
										["feet.R"]: Pose;
										["tail.02"]: Pose;
										["feet.L"]: Pose;
										["wing.L"]: Pose;
										["tail.01"]: Pose;
									};
								};
							};
						};
					};
				};
				Rooster_Attack: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["tail.03"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.R"]: Pose;
										["feet.R"]: Pose;
										["tail.02"]: Pose;
										["feet.L"]: Pose;
										["wing.L"]: Pose;
										["tail.01"]: Pose;
									};
								};
							};
						};
					};
				};
				Rooster_Idle: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["tail.03"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.R"]: Pose;
										["feet.R"]: Pose;
										["tail.02"]: Pose;
										["feet.L"]: Pose;
										["wing.L"]: Pose;
										["tail.01"]: Pose;
									};
								};
							};
						};
					};
				};
				Rooster_Jump: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["tail.03"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.R"]: Pose;
										["feet.R"]: Pose;
										["tail.02"]: Pose;
										["feet.L"]: Pose;
										["wing.L"]: Pose;
										["tail.01"]: Pose;
									};
								};
							};
						};
					};
				};
				Rooster_Sit: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["tail.03"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.R"]: Pose;
										["feet.R"]: Pose;
										["tail.02"]: Pose;
										["feet.L"]: Pose;
										["wing.L"]: Pose;
										["tail.01"]: Pose;
									};
								};
							};
						};
					};
				};
				Rooster_Run: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["tail.03"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.R"]: Pose;
										["feet.R"]: Pose;
										["tail.02"]: Pose;
										["feet.L"]: Pose;
										["wing.L"]: Pose;
										["tail.01"]: Pose;
									};
								};
							};
						};
					};
				};
				Rooster_Spin: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["tail.03"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.R"]: Pose;
										["feet.R"]: Pose;
										["tail.02"]: Pose;
										["feet.L"]: Pose;
										["wing.L"]: Pose;
										["tail.01"]: Pose;
									};
								};
							};
						};
					};
				};
				Rooster_Bounce: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["tail.03"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.R"]: Pose;
										["feet.R"]: Pose;
										["tail.02"]: Pose;
										["feet.L"]: Pose;
										["wing.L"]: Pose;
										["tail.01"]: Pose;
									};
								};
							};
						};
					};
				};
				Rooster_Idle2: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["tail.03"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.R"]: Pose;
										["feet.R"]: Pose;
										["tail.02"]: Pose;
										["feet.L"]: Pose;
										["wing.L"]: Pose;
										["tail.01"]: Pose;
									};
								};
							};
						};
					};
				};
				Rooster_Fly: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["tail.03"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.R"]: Pose;
										["feet.R"]: Pose;
										["tail.02"]: Pose;
										["feet.L"]: Pose;
										["wing.L"]: Pose;
										["tail.01"]: Pose;
									};
								};
							};
						};
					};
				};
				Rooster_Fear: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["tail.03"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.R"]: Pose;
										["feet.R"]: Pose;
										["tail.02"]: Pose;
										["feet.L"]: Pose;
										["wing.L"]: Pose;
										["tail.01"]: Pose;
									};
								};
							};
						};
					};
				};
				Rooster_Eat: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["tail.03"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.R"]: Pose;
										["feet.R"]: Pose;
										["tail.02"]: Pose;
										["feet.L"]: Pose;
										["wing.L"]: Pose;
										["tail.01"]: Pose;
									};
								};
							};
						};
					};
				};
				Rooster_Clicked: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["tail.03"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.R"]: Pose;
										["feet.R"]: Pose;
										["tail.02"]: Pose;
										["feet.L"]: Pose;
										["wing.L"]: Pose;
										["tail.01"]: Pose;
									};
								};
							};
						};
					};
				};
				Rooster_Idle3: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["tail.03"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.R"]: Pose;
										["feet.R"]: Pose;
										["tail.02"]: Pose;
										["feet.L"]: Pose;
										["wing.L"]: Pose;
										["tail.01"]: Pose;
									};
								};
							};
						};
					};
				};
				Rooster_Roll: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["tail.03"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.R"]: Pose;
										["feet.R"]: Pose;
										["tail.02"]: Pose;
										["feet.L"]: Pose;
										["wing.L"]: Pose;
										["tail.01"]: Pose;
									};
								};
							};
						};
					};
				};
				Rooster_Death: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["tail.03"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.R"]: Pose;
										["feet.R"]: Pose;
										["tail.02"]: Pose;
										["feet.L"]: Pose;
										["wing.L"]: Pose;
										["tail.01"]: Pose;
									};
								};
							};
						};
					};
				};
				Rooster_Swim: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["tail.03"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.R"]: Pose;
										["feet.R"]: Pose;
										["tail.02"]: Pose;
										["feet.L"]: Pose;
										["wing.L"]: Pose;
										["tail.01"]: Pose;
									};
								};
							};
						};
					};
				};
				Rooster_Hit: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["tail.03"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.R"]: Pose;
										["feet.R"]: Pose;
										["tail.02"]: Pose;
										["feet.L"]: Pose;
										["wing.L"]: Pose;
										["tail.01"]: Pose;
									};
								};
							};
						};
					};
				};
			};
			AnimationsFolder: Folder;
			Mesh: MeshPart & {
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
		SeaLion: Model & {
			AnimationController: AnimationController & {
				Animator: Animator;
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
			Mesh: MeshPart & {
				root: Bone & {
					body: Bone & {
						["leg.L"]: Bone;
						["leg.R"]: Bone;
						["tail.01"]: Bone;
					};
				};
			};
			AnimSaves: Model & {
				SeaLion_Clicked: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.R"]: Pose;
									["leg.L"]: Pose;
									["tail.01"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
				SeaLion_Jump: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.R"]: Pose;
									["leg.L"]: Pose;
									["tail.01"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
				SeaLion_Attack: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.R"]: Pose;
									["leg.L"]: Pose;
									["tail.01"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
				SeaLion_Roll: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["tail.01"]: Pose;
									["leg.L"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
				SeaLion_Fly: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.R"]: Pose;
									["leg.L"]: Pose;
									["tail.01"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
				SeaLion_Walk: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.R"]: Pose;
									["leg.L"]: Pose;
									["tail.01"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
				SeaLion_Idle3: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.R"]: Pose;
									["leg.L"]: Pose;
									["tail.01"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
				SeaLion_Death: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.R"]: Pose;
									["leg.L"]: Pose;
									["tail.01"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
				SeaLion_Spin: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.R"]: Pose;
									["leg.L"]: Pose;
									["tail.01"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
				SeaLion_Eat: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.R"]: Pose;
									["leg.L"]: Pose;
									["tail.01"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
				SeaLion_Idle: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.R"]: Pose;
									["leg.L"]: Pose;
									["tail.01"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
				SeaLion_Swim: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.R"]: Pose;
									["leg.L"]: Pose;
									["tail.01"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
				SeaLion_Hit: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["tail.01"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
				SeaLion_Sit: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.R"]: Pose;
									["leg.L"]: Pose;
									["tail.01"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
				SeaLion_Bounce: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.R"]: Pose;
									["leg.L"]: Pose;
									["tail.01"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
				SeaLion_Run: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.R"]: Pose;
									["leg.L"]: Pose;
									["tail.01"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
				SeaLion_Fear: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.R"]: Pose;
									["leg.L"]: Pose;
									["tail.01"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
				SeaLion_Idle2: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.R"]: Pose;
									["leg.L"]: Pose;
									["tail.01"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
			};
		};
		Raccoon: Model & {
			AnimationController: AnimationController & {
				Animator: Animator;
			};
			AnimSaves: Model & {
				Raccoon_Idle2: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Raccoon_Sit: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Raccoon_Run: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Raccoon_Hit: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Raccoon_Idle3: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Raccoon_Bounce: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Raccoon_Idle: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Raccoon_Jump: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Raccoon_Death: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Raccoon_Attack: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Raccoon_Spin: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Raccoon_Fly: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Raccoon_Clicked: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Raccoon_Walk: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Raccoon_Swim: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Raccoon_Eat: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Raccoon_Roll: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				Raccoon_Fear: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
			};
			AnimationsFolder: Folder;
			Mesh: MeshPart & {
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
		Pigeon: Model & {
			AnimationController: AnimationController;
			AnimSaves: Model & {
				Pigeon_Death: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Pigeon_Roll: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Pigeon_Jump: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Pigeon_Run: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Pigeon_Idle3: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Pigeon_Idle: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Pigeon_Bounce: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Pigeon_Clicked: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Pigeon_Fear: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Pigeon_Hit: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Pigeon_Walk: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Pigeon_Eat: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Pigeon_Swim: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Pigeon_Attack: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Pigeon_Sit: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Pigeon_Spin: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Pigeon_Idle2: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Pigeon_Fly: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
			};
			AnimationsFolder: Folder;
			Mesh: MeshPart & {
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
			AnimationController: AnimationController;
			AnimSaves: Model & {
				Chick_Fly: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Chick_Clicked: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Chick_Idle2: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Chick_Jump: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Chick_Walk: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Chick_Death: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Chick_Roll: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Chick_Attack: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Chick_Bounce: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Chick_Sit: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Chick_Idle: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Chick_Spin: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Chick_Swim: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Chick_Run: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Chick_Hit: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Chick_Fear: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Chick_Eat: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Chick_Idle3: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
			};
			AnimationsFolder: Folder;
			Mesh: MeshPart & {
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
			AnimationController: AnimationController & {
				Animator: Animator;
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
			Mesh: MeshPart & {
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
			AnimSaves: Model & {
				ArcticFox_Idle3: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.B.L"]: Pose;
									["ear.L"]: Pose;
									["leg.B.R"]: Pose;
									["tail.01"]: Pose & {
										["tail.02"]: Pose;
									};
									["leg.F.R"]: Pose;
									["leg.F.L"]: Pose;
									["ear.R"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
				ArcticFox_Death: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.B.L"]: Pose;
									["ear.L"]: Pose;
									["leg.B.R"]: Pose;
									["tail.01"]: Pose & {
										["tail.02"]: Pose;
									};
									["leg.F.R"]: Pose;
									["leg.F.L"]: Pose;
									["ear.R"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
				ArcticFox_Sit: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.B.L"]: Pose;
									["ear.L"]: Pose;
									["leg.B.R"]: Pose;
									["tail.01"]: Pose & {
										["tail.02"]: Pose;
									};
									["leg.F.R"]: Pose;
									["leg.F.L"]: Pose;
									["ear.R"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
				ArcticFox_Run: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.B.L"]: Pose;
									["ear.L"]: Pose;
									["leg.B.R"]: Pose;
									["tail.01"]: Pose & {
										["tail.02"]: Pose;
									};
									["leg.F.R"]: Pose;
									["leg.F.L"]: Pose;
									["ear.R"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
				ArcticFox_Walk: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.B.L"]: Pose;
									["ear.L"]: Pose;
									["leg.B.R"]: Pose;
									["tail.01"]: Pose & {
										["tail.02"]: Pose;
									};
									["leg.F.R"]: Pose;
									["leg.F.L"]: Pose;
									["ear.R"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
				ArcticFox_Jump: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.B.L"]: Pose;
									["ear.L"]: Pose;
									["leg.B.R"]: Pose;
									["tail.01"]: Pose & {
										["tail.02"]: Pose;
									};
									["leg.F.R"]: Pose;
									["leg.F.L"]: Pose;
									["ear.R"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
				ArcticFox_Idle2: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.B.L"]: Pose;
									["ear.L"]: Pose;
									["leg.B.R"]: Pose;
									["tail.01"]: Pose & {
										["tail.02"]: Pose;
									};
									["leg.F.R"]: Pose;
									["leg.F.L"]: Pose;
									["ear.R"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
				ArcticFox_Fly: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.B.L"]: Pose;
									["ear.L"]: Pose;
									["leg.B.R"]: Pose;
									["tail.01"]: Pose & {
										["tail.02"]: Pose;
									};
									["leg.F.R"]: Pose;
									["leg.F.L"]: Pose;
									["ear.R"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
				ArcticFox_Clicked: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.B.L"]: Pose;
									["ear.L"]: Pose;
									["leg.B.R"]: Pose;
									["tail.01"]: Pose & {
										["tail.02"]: Pose;
									};
									["leg.F.R"]: Pose;
									["leg.F.L"]: Pose;
									["ear.R"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
				ArcticFox_Idle: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.B.L"]: Pose;
									["ear.L"]: Pose;
									["leg.B.R"]: Pose;
									["tail.01"]: Pose & {
										["tail.02"]: Pose;
									};
									["leg.F.R"]: Pose;
									["leg.F.L"]: Pose;
									["ear.R"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
				ArcticFox_Bounce: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.B.L"]: Pose;
									["ear.L"]: Pose;
									["leg.B.R"]: Pose;
									["tail.01"]: Pose & {
										["tail.02"]: Pose;
									};
									["leg.F.R"]: Pose;
									["leg.F.L"]: Pose;
									["ear.R"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
				ArcticFox_Spin: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.B.L"]: Pose;
									["ear.L"]: Pose;
									["leg.B.R"]: Pose;
									["tail.01"]: Pose & {
										["tail.02"]: Pose;
									};
									["leg.F.R"]: Pose;
									["leg.F.L"]: Pose;
									["ear.R"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
				ArcticFox_Swim: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.B.L"]: Pose;
									["ear.L"]: Pose;
									["leg.B.R"]: Pose;
									["tail.01"]: Pose & {
										["tail.02"]: Pose;
									};
									["leg.F.R"]: Pose;
									["leg.F.L"]: Pose;
									["ear.R"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
				ArcticFox_Hit: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.B.L"]: Pose;
									["ear.L"]: Pose;
									["leg.B.R"]: Pose;
									["tail.01"]: Pose & {
										["tail.02"]: Pose;
									};
									["leg.F.R"]: Pose;
									["leg.F.L"]: Pose;
									["ear.R"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
				ArcticFox_Attack: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.B.L"]: Pose;
									["ear.L"]: Pose;
									["leg.B.R"]: Pose;
									["tail.01"]: Pose & {
										["tail.02"]: Pose;
									};
									["leg.F.R"]: Pose;
									["leg.F.L"]: Pose;
									["ear.R"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
				ArcticFox_Roll: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.B.L"]: Pose;
									["ear.L"]: Pose;
									["leg.B.R"]: Pose;
									["tail.01"]: Pose & {
										["tail.02"]: Pose;
									};
									["leg.F.R"]: Pose;
									["leg.F.L"]: Pose;
									["ear.R"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
				ArcticFox_Fear: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.B.L"]: Pose;
									["ear.L"]: Pose;
									["leg.B.R"]: Pose;
									["tail.01"]: Pose & {
										["tail.02"]: Pose;
									};
									["leg.F.R"]: Pose;
									["leg.F.L"]: Pose;
									["ear.R"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
				ArcticFox_Eat: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.B.L"]: Pose;
									["ear.L"]: Pose;
									["leg.B.R"]: Pose;
									["tail.01"]: Pose & {
										["tail.02"]: Pose;
									};
									["leg.F.R"]: Pose;
									["leg.F.L"]: Pose;
									["ear.R"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
			};
		};
		Dove: Model & {
			AnimationController: AnimationController;
			AnimSaves: Model & {
				Dove_Spin: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Dove_Bounce: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Dove_Death: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Dove_Swim: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Dove_Eat: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Dove_Jump: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Dove_Idle3: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Dove_Sit: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Dove_Fly: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Dove_Clicked: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Dove_Walk: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Dove_Fear: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Dove_Run: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Dove_Roll: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Dove_Hit: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Dove_Idle2: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Dove_Idle: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
				Dove_Attack: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["feet.R"]: Pose;
										["feet.L"]: Pose;
										["wing.R"]: Pose;
										["tail.01"]: Pose;
										["hair.01"]: Pose;
										["hair.02"]: Pose;
										["wing.L"]: Pose;
										["tail.02"]: Pose;
									};
								};
							};
						};
					};
				};
			};
			AnimationsFolder: Folder;
			Mesh: MeshPart & {
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
		SnowWeasel: Model & {
			AnimationController: AnimationController;
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
			Mesh: MeshPart & {
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
			AnimSaves: Model & {
				SnowWeasel_Fear: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				SnowWeasel_Walk: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				SnowWeasel_Idle: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				SnowWeasel_Spin: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				SnowWeasel_Fly: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				SnowWeasel_Bounce: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				SnowWeasel_Jump: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				SnowWeasel_Swim: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				SnowWeasel_Idle2: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				SnowWeasel_Idle3: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				SnowWeasel_Death: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				SnowWeasel_Attack: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				SnowWeasel_Run: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				SnowWeasel_Clicked: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				SnowWeasel_Hit: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				SnowWeasel_Sit: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				SnowWeasel_Roll: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
				SnowWeasel_Eat: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose;
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose;
									};
								};
							};
						};
					};
				};
			};
		};
		Dog: Model & {
			AnimationController: AnimationController;
			AnimSaves: Model & {
				Dog_Idle3: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose & {
											["ear.L.01"]: Pose;
										};
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose & {
											["ear.R.01"]: Pose;
										};
									};
								};
							};
						};
					};
				};
				Dog_Clicked: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose & {
											["ear.L.01"]: Pose;
										};
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose & {
											["ear.R.01"]: Pose;
										};
									};
								};
							};
						};
					};
				};
				Dog_Roll: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose & {
											["ear.L.01"]: Pose;
										};
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose & {
											["ear.R.01"]: Pose;
										};
									};
								};
							};
						};
					};
				};
				Dog_Fly: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose & {
											["ear.L.01"]: Pose;
										};
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose & {
											["ear.R.01"]: Pose;
										};
									};
								};
							};
						};
					};
				};
				Dog_Sit: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose & {
											["ear.L.01"]: Pose;
										};
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose & {
											["ear.R.01"]: Pose;
										};
									};
								};
							};
						};
					};
				};
				Dog_Run: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose & {
											["ear.L.01"]: Pose;
										};
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose & {
											["ear.R.01"]: Pose;
										};
									};
								};
							};
						};
					};
				};
				Dog_Idle2: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose & {
											["ear.L.01"]: Pose;
										};
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose & {
											["ear.R.01"]: Pose;
										};
									};
								};
							};
						};
					};
				};
				Dog_Fear: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose & {
											["ear.L.01"]: Pose;
										};
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose & {
											["ear.R.01"]: Pose;
										};
									};
								};
							};
						};
					};
				};
				Dog_Bounce: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose & {
											["ear.L.01"]: Pose;
										};
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose & {
											["ear.R.01"]: Pose;
										};
									};
								};
							};
						};
					};
				};
				Dog_Idle: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose & {
											["ear.L.01"]: Pose;
										};
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose & {
											["ear.R.01"]: Pose;
										};
									};
								};
							};
						};
					};
				};
				Dog_Swim: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose & {
											["ear.L.01"]: Pose;
										};
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose & {
											["ear.R.01"]: Pose;
										};
									};
								};
							};
						};
					};
				};
				Dog_Walk: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose & {
											["ear.L.01"]: Pose;
										};
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose & {
											["ear.R.01"]: Pose;
										};
									};
								};
							};
						};
					};
				};
				Dog_Spin: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose & {
											["ear.L.01"]: Pose;
										};
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose & {
											["ear.R.01"]: Pose;
										};
									};
								};
							};
						};
					};
				};
				Dog_Death: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose & {
											["ear.L.01"]: Pose;
										};
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose & {
											["ear.R.01"]: Pose;
										};
									};
								};
							};
						};
					};
				};
				Dog_Hit: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose & {
											["ear.L.01"]: Pose;
										};
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose & {
											["ear.R.01"]: Pose;
										};
									};
								};
							};
						};
					};
				};
				Dog_Attack: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose & {
											["ear.L.01"]: Pose;
										};
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose & {
											["ear.R.01"]: Pose;
										};
									};
								};
							};
						};
					};
				};
				Dog_Jump: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose & {
											["ear.L.01"]: Pose;
										};
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose & {
											["ear.R.01"]: Pose;
										};
									};
								};
							};
						};
					};
				};
				Dog_Eat: KeyframeSequence & {
					End: Keyframe & {
						RootNode: Pose & {
							Mesh: Pose;
							Rig: Pose & {
								root: Pose & {
									body: Pose & {
										["leg.F.L"]: Pose;
										["ear.L"]: Pose & {
											["ear.L.01"]: Pose;
										};
										["leg.B.R"]: Pose;
										["tail.01"]: Pose & {
											["tail.02"]: Pose;
										};
										["leg.F.R"]: Pose;
										["leg.B.L"]: Pose;
										["ear.R"]: Pose & {
											["ear.R.01"]: Pose;
										};
									};
								};
							};
						};
					};
				};
			};
			AnimationsFolder: Folder;
			Mesh: MeshPart & {
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
		PolarBear: Model & {
			AnimationController: AnimationController & {
				Animator: Animator;
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
			Mesh: MeshPart & {
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
			AnimSaves: Model & {
				PolarBear_Jump: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.B.L"]: Pose;
									["ear.L"]: Pose;
									["leg.B.R"]: Pose;
									["leg.F.R"]: Pose;
									["tail.01"]: Pose;
									["leg.F.L"]: Pose;
									["ear.R"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
				PolarBear_Walk: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.B.L"]: Pose;
									["ear.L"]: Pose;
									["leg.B.R"]: Pose;
									["leg.F.R"]: Pose;
									["tail.01"]: Pose;
									["leg.F.L"]: Pose;
									["ear.R"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
				PolarBear_Roll: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.B.L"]: Pose;
									["ear.L"]: Pose;
									["leg.B.R"]: Pose;
									["leg.F.R"]: Pose;
									["tail.01"]: Pose;
									["leg.F.L"]: Pose;
									["ear.R"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
				PolarBear_Idle3: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.B.L"]: Pose;
									["ear.L"]: Pose;
									["leg.B.R"]: Pose;
									["leg.F.R"]: Pose;
									["tail.01"]: Pose;
									["leg.F.L"]: Pose;
									["ear.R"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
				PolarBear_Attack: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.B.L"]: Pose;
									["ear.L"]: Pose;
									["leg.B.R"]: Pose;
									["leg.F.R"]: Pose;
									["tail.01"]: Pose;
									["leg.F.L"]: Pose;
									["ear.R"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
				PolarBear_Idle: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.B.L"]: Pose;
									["ear.L"]: Pose;
									["leg.B.R"]: Pose;
									["leg.F.R"]: Pose;
									["tail.01"]: Pose;
									["leg.F.L"]: Pose;
									["ear.R"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
				PolarBear_Hit: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.B.L"]: Pose;
									["ear.L"]: Pose;
									["leg.B.R"]: Pose;
									["tail.01"]: Pose;
									["leg.F.R"]: Pose;
									["leg.F.L"]: Pose;
									["ear.R"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
				PolarBear_Spin: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.B.L"]: Pose;
									["ear.L"]: Pose;
									["leg.B.R"]: Pose;
									["leg.F.R"]: Pose;
									["tail.01"]: Pose;
									["leg.F.L"]: Pose;
									["ear.R"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
				PolarBear_Idle2: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.B.L"]: Pose;
									["ear.L"]: Pose;
									["leg.B.R"]: Pose;
									["leg.F.R"]: Pose;
									["tail.01"]: Pose;
									["leg.F.L"]: Pose;
									["ear.R"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
				PolarBear_Swim: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.B.L"]: Pose;
									["ear.L"]: Pose;
									["leg.B.R"]: Pose;
									["leg.F.R"]: Pose;
									["tail.01"]: Pose;
									["leg.F.L"]: Pose;
									["ear.R"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
				PolarBear_Clicked: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.B.L"]: Pose;
									["ear.L"]: Pose;
									["leg.B.R"]: Pose;
									["leg.F.R"]: Pose;
									["tail.01"]: Pose;
									["leg.F.L"]: Pose;
									["ear.R"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
				PolarBear_Fear: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.B.L"]: Pose;
									["ear.L"]: Pose;
									["leg.B.R"]: Pose;
									["tail.01"]: Pose;
									["leg.F.R"]: Pose;
									["leg.F.L"]: Pose;
									["ear.R"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
				PolarBear_Bounce: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.B.L"]: Pose;
									["ear.L"]: Pose;
									["leg.B.R"]: Pose;
									["leg.F.R"]: Pose;
									["tail.01"]: Pose;
									["leg.F.L"]: Pose;
									["ear.R"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
				PolarBear_Death: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.B.L"]: Pose;
									["ear.L"]: Pose;
									["leg.B.R"]: Pose;
									["leg.F.R"]: Pose;
									["tail.01"]: Pose;
									["leg.F.L"]: Pose;
									["ear.R"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
				PolarBear_Eat: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.B.L"]: Pose;
									["ear.L"]: Pose;
									["leg.B.R"]: Pose;
									["leg.F.R"]: Pose;
									["tail.01"]: Pose;
									["leg.F.L"]: Pose;
									["ear.R"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
				PolarBear_Fly: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.B.L"]: Pose;
									["ear.L"]: Pose;
									["leg.B.R"]: Pose;
									["leg.F.R"]: Pose;
									["tail.01"]: Pose;
									["leg.F.L"]: Pose;
									["ear.R"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
				PolarBear_Sit: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.B.L"]: Pose;
									["ear.L"]: Pose;
									["leg.B.R"]: Pose;
									["leg.F.R"]: Pose;
									["tail.01"]: Pose;
									["leg.F.L"]: Pose;
									["ear.R"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
				PolarBear_Run: KeyframeSequence & {
					End: Keyframe & {
						Mesh: Pose & {
							root: Pose & {
								body: Pose & {
									["leg.B.L"]: Pose;
									["ear.L"]: Pose;
									["leg.B.R"]: Pose;
									["leg.F.R"]: Pose;
									["tail.01"]: Pose;
									["leg.F.L"]: Pose;
									["ear.R"]: Pose;
								};
							};
						};
						RootNode: Pose;
					};
				};
			};
		};
	};
	RBX_ANIMSAVES: Model & {
		Wyvern: ObjectValue;
		Jellyfish_Idle_A: ObjectValue;
		Kitsune_LOD0: ObjectValue & {
			Spin: KeyframeSequence & {
				End: Keyframe & {
					Mesh: Pose & {
						root: Pose & {
							body: Pose & {
								["leg.B.L"]: Pose;
								["ear.L"]: Pose;
								["leg.B.R"]: Pose;
								["leg.F.R"]: Pose;
								["tail.01"]: Pose;
								["leg.F.L"]: Pose;
								["ear.R"]: Pose;
							};
						};
					};
					RootNode: Pose;
				};
			};
			Bounce: KeyframeSequence & {
				End: Keyframe & {
					Mesh: Pose & {
						root: Pose & {
							body: Pose & {
								["leg.B.L"]: Pose;
								["ear.L"]: Pose;
								["leg.B.R"]: Pose;
								["leg.F.R"]: Pose;
								["tail.01"]: Pose;
								["leg.F.L"]: Pose;
								["ear.R"]: Pose;
							};
						};
					};
					RootNode: Pose;
				};
			};
			Roll: KeyframeSequence & {
				End: Keyframe & {
					Mesh: Pose & {
						root: Pose & {
							body: Pose & {
								["leg.B.L"]: Pose;
								["ear.L"]: Pose;
								["leg.B.R"]: Pose;
								["leg.F.R"]: Pose;
								["tail.01"]: Pose;
								["leg.F.L"]: Pose;
								["ear.R"]: Pose;
							};
						};
					};
					RootNode: Pose;
				};
			};
			Eat: KeyframeSequence & {
				End: Keyframe & {
					Mesh: Pose & {
						root: Pose & {
							body: Pose & {
								["leg.B.L"]: Pose;
								["ear.L"]: Pose;
								["leg.B.R"]: Pose;
								["leg.F.R"]: Pose;
								["tail.01"]: Pose;
								["leg.F.L"]: Pose;
								["ear.R"]: Pose;
							};
						};
					};
					RootNode: Pose;
				};
			};
			Fear: KeyframeSequence & {
				End: Keyframe & {
					Mesh: Pose & {
						root: Pose & {
							body: Pose & {
								["leg.B.L"]: Pose;
								["ear.L"]: Pose;
								["leg.B.R"]: Pose;
								["leg.F.R"]: Pose;
								["tail.01"]: Pose;
								["leg.F.L"]: Pose;
								["ear.R"]: Pose;
							};
						};
					};
					RootNode: Pose;
				};
			};
			Idle_C: KeyframeSequence & {
				End: Keyframe & {
					Mesh: Pose & {
						root: Pose & {
							body: Pose & {
								["leg.B.L"]: Pose;
								["ear.L"]: Pose;
								["leg.B.R"]: Pose;
								["leg.F.R"]: Pose;
								["tail.01"]: Pose;
								["leg.F.L"]: Pose;
								["ear.R"]: Pose;
							};
						};
					};
					RootNode: Pose;
				};
			};
			Jump: KeyframeSequence & {
				End: Keyframe & {
					Mesh: Pose & {
						root: Pose & {
							body: Pose & {
								["leg.B.L"]: Pose;
								["ear.L"]: Pose;
								["leg.B.R"]: Pose;
								["leg.F.R"]: Pose;
								["tail.01"]: Pose;
								["leg.F.L"]: Pose;
								["ear.R"]: Pose;
							};
						};
					};
					RootNode: Pose;
				};
			};
			Sit: KeyframeSequence & {
				End: Keyframe & {
					Mesh: Pose & {
						root: Pose & {
							body: Pose & {
								["leg.B.L"]: Pose;
								["ear.L"]: Pose;
								["leg.B.R"]: Pose;
								["leg.F.R"]: Pose;
								["tail.01"]: Pose;
								["leg.F.L"]: Pose;
								["ear.R"]: Pose;
							};
						};
					};
					RootNode: Pose;
				};
			};
			Idle_A: KeyframeSequence & {
				End: Keyframe & {
					Mesh: Pose & {
						root: Pose & {
							body: Pose & {
								["leg.B.L"]: Pose;
								["ear.L"]: Pose;
								["leg.B.R"]: Pose;
								["leg.F.R"]: Pose;
								["tail.01"]: Pose;
								["leg.F.L"]: Pose;
								["ear.R"]: Pose;
							};
						};
					};
					RootNode: Pose;
				};
			};
			Run: KeyframeSequence & {
				End: Keyframe & {
					Mesh: Pose & {
						root: Pose & {
							body: Pose & {
								["leg.B.L"]: Pose;
								["ear.L"]: Pose;
								["leg.B.R"]: Pose;
								["leg.F.R"]: Pose;
								["tail.01"]: Pose;
								["leg.F.L"]: Pose;
								["ear.R"]: Pose;
							};
						};
					};
					RootNode: Pose;
				};
			};
			Swim: KeyframeSequence & {
				End: Keyframe & {
					Mesh: Pose & {
						root: Pose & {
							body: Pose & {
								["leg.B.L"]: Pose;
								["ear.L"]: Pose;
								["leg.B.R"]: Pose;
								["leg.F.R"]: Pose;
								["tail.01"]: Pose;
								["leg.F.L"]: Pose;
								["ear.R"]: Pose;
							};
						};
					};
					RootNode: Pose;
				};
			};
			Walk: KeyframeSequence & {
				End: Keyframe & {
					Mesh: Pose & {
						root: Pose & {
							body: Pose & {
								["leg.B.L"]: Pose;
								["ear.L"]: Pose;
								["leg.B.R"]: Pose;
								["leg.F.R"]: Pose;
								["tail.01"]: Pose;
								["leg.F.L"]: Pose;
								["ear.R"]: Pose;
							};
						};
					};
					RootNode: Pose;
				};
			};
			Fly: KeyframeSequence & {
				End: Keyframe & {
					Mesh: Pose & {
						root: Pose & {
							body: Pose & {
								["leg.B.L"]: Pose;
								["ear.L"]: Pose;
								["leg.B.R"]: Pose;
								["leg.F.R"]: Pose;
								["tail.01"]: Pose;
								["leg.F.L"]: Pose;
								["ear.R"]: Pose;
							};
						};
					};
					RootNode: Pose;
				};
			};
			Death: KeyframeSequence & {
				End: Keyframe & {
					Mesh: Pose & {
						root: Pose & {
							body: Pose & {
								["leg.B.L"]: Pose;
								["ear.L"]: Pose;
								["leg.B.R"]: Pose;
								["leg.F.R"]: Pose;
								["tail.01"]: Pose;
								["leg.F.L"]: Pose;
								["ear.R"]: Pose;
							};
						};
					};
					RootNode: Pose;
				};
			};
			Hit: KeyframeSequence & {
				End: Keyframe & {
					Mesh: Pose & {
						root: Pose & {
							body: Pose & {
								["leg.B.L"]: Pose;
								["ear.L"]: Pose;
								["leg.B.R"]: Pose;
								["leg.F.R"]: Pose;
								["tail.01"]: Pose;
								["leg.F.L"]: Pose;
								["ear.R"]: Pose;
							};
						};
					};
					RootNode: Pose;
				};
			};
			Clicked: KeyframeSequence & {
				End: Keyframe & {
					Mesh: Pose & {
						root: Pose & {
							body: Pose & {
								["leg.B.L"]: Pose;
								["ear.L"]: Pose;
								["leg.B.R"]: Pose;
								["leg.F.R"]: Pose;
								["tail.01"]: Pose;
								["leg.F.L"]: Pose;
								["ear.R"]: Pose;
							};
						};
					};
					RootNode: Pose;
				};
			};
			Idle_B: KeyframeSequence & {
				End: Keyframe & {
					Mesh: Pose & {
						root: Pose & {
							body: Pose & {
								["leg.B.L"]: Pose;
								["ear.L"]: Pose;
								["leg.B.R"]: Pose;
								["leg.F.R"]: Pose;
								["tail.01"]: Pose;
								["leg.F.L"]: Pose;
								["ear.R"]: Pose;
							};
						};
					};
					RootNode: Pose;
				};
			};
			Attack: KeyframeSequence & {
				End: Keyframe & {
					Mesh: Pose & {
						root: Pose & {
							body: Pose & {
								["leg.B.L"]: Pose;
								["ear.L"]: Pose;
								["leg.B.R"]: Pose;
								["leg.F.R"]: Pose;
								["tail.01"]: Pose;
								["leg.F.L"]: Pose;
								["ear.R"]: Pose;
							};
						};
					};
					RootNode: Pose;
				};
			};
		};
		untitled: ObjectValue;
		Phoenix_LOD0: ObjectValue;
		Octopus_LOD0: ObjectValue;
		Ninetails: ObjectValue & {
			Spin: KeyframeSequence & {
				End: Keyframe & {
					Mesh: Pose & {
						root: Pose & {
							body: Pose & {
								["leg.B.L"]: Pose;
								["ear.L"]: Pose;
								["leg.B.R"]: Pose;
								["leg.F.R"]: Pose;
								["tail.01"]: Pose;
								["leg.F.L"]: Pose;
								["ear.R"]: Pose;
							};
						};
					};
					RootNode: Pose;
				};
			};
			Bounce: KeyframeSequence & {
				End: Keyframe & {
					Mesh: Pose & {
						root: Pose & {
							body: Pose & {
								["leg.B.L"]: Pose;
								["ear.L"]: Pose;
								["leg.B.R"]: Pose;
								["leg.F.R"]: Pose;
								["tail.01"]: Pose;
								["leg.F.L"]: Pose;
								["ear.R"]: Pose;
							};
						};
					};
					RootNode: Pose;
				};
			};
			Roll: KeyframeSequence & {
				End: Keyframe & {
					Mesh: Pose & {
						root: Pose & {
							body: Pose & {
								["leg.B.L"]: Pose;
								["ear.L"]: Pose;
								["leg.B.R"]: Pose;
								["leg.F.R"]: Pose;
								["tail.01"]: Pose;
								["leg.F.L"]: Pose;
								["ear.R"]: Pose;
							};
						};
					};
					RootNode: Pose;
				};
			};
			Fly: KeyframeSequence & {
				End: Keyframe & {
					Mesh: Pose & {
						root: Pose & {
							body: Pose & {
								["leg.B.L"]: Pose;
								["ear.L"]: Pose;
								["leg.B.R"]: Pose;
								["leg.F.R"]: Pose;
								["tail.01"]: Pose;
								["leg.F.L"]: Pose;
								["ear.R"]: Pose;
							};
						};
					};
					RootNode: Pose;
				};
			};
			Fear: KeyframeSequence & {
				End: Keyframe & {
					Mesh: Pose & {
						root: Pose & {
							body: Pose & {
								["leg.B.L"]: Pose;
								["ear.L"]: Pose;
								["leg.B.R"]: Pose;
								["leg.F.R"]: Pose;
								["tail.01"]: Pose;
								["leg.F.L"]: Pose;
								["ear.R"]: Pose;
							};
						};
					};
					RootNode: Pose;
				};
			};
			Idle_C: KeyframeSequence & {
				End: Keyframe & {
					Mesh: Pose & {
						root: Pose & {
							body: Pose & {
								["leg.B.L"]: Pose;
								["ear.L"]: Pose;
								["leg.B.R"]: Pose;
								["leg.F.R"]: Pose;
								["tail.01"]: Pose;
								["leg.F.L"]: Pose;
								["ear.R"]: Pose;
							};
						};
					};
					RootNode: Pose;
				};
			};
			Jump: KeyframeSequence & {
				End: Keyframe & {
					Mesh: Pose & {
						root: Pose & {
							body: Pose & {
								["leg.B.L"]: Pose;
								["ear.L"]: Pose;
								["leg.B.R"]: Pose;
								["leg.F.R"]: Pose;
								["tail.01"]: Pose;
								["leg.F.L"]: Pose;
								["ear.R"]: Pose;
							};
						};
					};
					RootNode: Pose;
				};
			};
			Sit: KeyframeSequence & {
				End: Keyframe & {
					Mesh: Pose & {
						root: Pose & {
							body: Pose & {
								["leg.B.L"]: Pose;
								["ear.L"]: Pose;
								["leg.B.R"]: Pose;
								["leg.F.R"]: Pose;
								["tail.01"]: Pose;
								["leg.F.L"]: Pose;
								["ear.R"]: Pose;
							};
						};
					};
					RootNode: Pose;
				};
			};
			Idle_A: KeyframeSequence & {
				End: Keyframe & {
					Mesh: Pose & {
						root: Pose & {
							body: Pose & {
								["leg.B.L"]: Pose;
								["ear.L"]: Pose;
								["leg.B.R"]: Pose;
								["leg.F.R"]: Pose;
								["tail.01"]: Pose;
								["leg.F.L"]: Pose;
								["ear.R"]: Pose;
							};
						};
					};
					RootNode: Pose;
				};
			};
			Run: KeyframeSequence & {
				End: Keyframe & {
					Mesh: Pose & {
						root: Pose & {
							body: Pose & {
								["leg.B.L"]: Pose;
								["ear.L"]: Pose;
								["leg.B.R"]: Pose;
								["leg.F.R"]: Pose;
								["tail.01"]: Pose;
								["leg.F.L"]: Pose;
								["ear.R"]: Pose;
							};
						};
					};
					RootNode: Pose;
				};
			};
			Swim: KeyframeSequence & {
				End: Keyframe & {
					Mesh: Pose & {
						root: Pose & {
							body: Pose & {
								["leg.B.L"]: Pose;
								["ear.L"]: Pose;
								["leg.B.R"]: Pose;
								["leg.F.R"]: Pose;
								["tail.01"]: Pose;
								["leg.F.L"]: Pose;
								["ear.R"]: Pose;
							};
						};
					};
					RootNode: Pose;
				};
			};
			Hit: KeyframeSequence & {
				End: Keyframe & {
					Mesh: Pose & {
						root: Pose & {
							body: Pose & {
								["leg.B.L"]: Pose;
								["ear.L"]: Pose;
								["leg.B.R"]: Pose;
								["leg.F.R"]: Pose;
								["tail.01"]: Pose;
								["leg.F.L"]: Pose;
								["ear.R"]: Pose;
							};
						};
					};
					RootNode: Pose;
				};
			};
			Eat: KeyframeSequence & {
				End: Keyframe & {
					Mesh: Pose & {
						root: Pose & {
							body: Pose & {
								["leg.B.L"]: Pose;
								["ear.L"]: Pose;
								["leg.B.R"]: Pose;
								["leg.F.R"]: Pose;
								["tail.01"]: Pose;
								["leg.F.L"]: Pose;
								["ear.R"]: Pose;
							};
						};
					};
					RootNode: Pose;
				};
			};
			Death: KeyframeSequence & {
				End: Keyframe & {
					Mesh: Pose & {
						root: Pose & {
							body: Pose & {
								["leg.B.L"]: Pose;
								["ear.L"]: Pose;
								["leg.B.R"]: Pose;
								["leg.F.R"]: Pose;
								["tail.01"]: Pose;
								["leg.F.L"]: Pose;
								["ear.R"]: Pose;
							};
						};
					};
					RootNode: Pose;
				};
			};
			Walk: KeyframeSequence & {
				End: Keyframe & {
					Mesh: Pose & {
						root: Pose & {
							body: Pose & {
								["leg.B.L"]: Pose;
								["ear.L"]: Pose;
								["leg.B.R"]: Pose;
								["leg.F.R"]: Pose;
								["tail.01"]: Pose;
								["leg.F.L"]: Pose;
								["ear.R"]: Pose;
							};
						};
					};
					RootNode: Pose;
				};
			};
			Clicked: KeyframeSequence & {
				End: Keyframe & {
					Mesh: Pose & {
						root: Pose & {
							body: Pose & {
								["leg.B.L"]: Pose;
								["ear.L"]: Pose;
								["leg.B.R"]: Pose;
								["leg.F.R"]: Pose;
								["tail.01"]: Pose;
								["leg.F.L"]: Pose;
								["ear.R"]: Pose;
							};
						};
					};
					RootNode: Pose;
				};
			};
			Idle_B: KeyframeSequence & {
				End: Keyframe & {
					Mesh: Pose & {
						root: Pose & {
							body: Pose & {
								["leg.B.L"]: Pose;
								["ear.L"]: Pose;
								["leg.B.R"]: Pose;
								["leg.F.R"]: Pose;
								["tail.01"]: Pose;
								["leg.F.L"]: Pose;
								["ear.R"]: Pose;
							};
						};
					};
					RootNode: Pose;
				};
			};
			Attack: KeyframeSequence & {
				End: Keyframe & {
					Mesh: Pose & {
						root: Pose & {
							body: Pose & {
								["leg.B.L"]: Pose;
								["ear.L"]: Pose;
								["leg.B.R"]: Pose;
								["leg.F.R"]: Pose;
								["tail.01"]: Pose;
								["leg.F.L"]: Pose;
								["ear.R"]: Pose;
							};
						};
					};
					RootNode: Pose;
				};
			};
		};
		Dove: ObjectValue;
		Jellyfish_LOD0: ObjectValue & {
			Idle: KeyframeSequence & {
				End: Keyframe & {
					Mesh: Pose & {
						root: Pose & {
							body: Pose & {
								["tentacle.L.02"]: Pose & {
									["tentacle.L.06"]: Pose;
								};
								["tentacle.R.02"]: Pose & {
									["tentacle.R.06"]: Pose;
								};
								["tentacle.R.04"]: Pose & {
									["tentacle.R.08"]: Pose;
								};
								["tentacle.L.04"]: Pose & {
									["tentacle.L.08"]: Pose;
								};
								["tentacle.R.01"]: Pose & {
									["tentacle.R.05"]: Pose;
								};
								["tentacle.R.03"]: Pose & {
									["tentacle.R.07"]: Pose;
								};
								["tentacle.L.03"]: Pose & {
									["tentacle.L.07"]: Pose;
								};
								["tentacle.L.01"]: Pose & {
									["tentacle.L.05"]: Pose;
								};
							};
						};
					};
					RootNode: Pose;
				};
			};
		};
		Leviathan_LOD0: ObjectValue;
	};
	StarterCharacter: Model & {
		HumanoidRootPart: MeshPart & {
			JumpForce: Attachment;
			Handles: Handles;
			AntiGravity: VectorForce;
		};
		Humanoid: Humanoid;
	};
}
