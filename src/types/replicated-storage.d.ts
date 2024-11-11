interface ReplicatedStorage extends Instance {
	StarterCharacter: Model & {
		HumanoidRootPart: MeshPart & {
			JumpForce: Attachment;
			Handles: Handles;
			AntiGravity: VectorForce;
		};
		Humanoid: Humanoid;
	};
	Assets: Folder & {
		Kits: Folder & {
			["Meshes/pam_prop_letter_start"]: MeshPart;
			["Meshes/pam_prop_b_totem01"]: MeshPart;
			pam_prop_temple: Model & {
				pam_prop_temple: MeshPart;
			};
			["Meshes/pam_prop_tree_01"]: MeshPart;
			["Meshes/pam_prop_bullet_01"]: MeshPart;
			["Meshes/pam_prop_glove_box_pam_prop_glove_box"]: MeshPart;
			["Meshes/pam_prop_pipe_01"]: MeshPart;
			["Meshes/pam_prop_bullet_02"]: MeshPart;
			["Meshes/pam_prop_bouncer_02"]: MeshPart;
			["Meshes/pam_prop_tree_02"]: MeshPart;
			["Meshes/pam_prop_a_totem02"]: MeshPart;
			pam_prop_b_totem03: MeshPart;
			["Meshes/pam_prop_balloon_pam_prop_balloon"]: MeshPart;
			["Meshes/pam_prop_balloon_pam_prop_balloon_canon"]: MeshPart;
			pam_prop_b_totem02: MeshPart;
			["Meshes/pam_prop_letter_finish"]: MeshPart;
			["Meshes/pam_prop_wall"]: MeshPart;
			["Meshes/pam_prop_bouncer"]: MeshPart;
			["Meshes/pam_prop_ground_treadmill"]: MeshPart;
			["Meshes/pam_prop_ground_02"]: MeshPart;
			["Meshes/pam_prop_ground_01"]: MeshPart;
			["Meshes/pam_prop_glove_box_pam_prop_gloves"]: MeshPart;
			["Meshes/pam_prop_a_totem04"]: MeshPart;
			["Meshes/pam_prop_a_totem03"]: MeshPart;
			["Meshes/pam_prop_pipe_02"]: MeshPart;
			["Meshes/pam_prop_a_totem01"]: MeshPart;
			Model: Model & {
				["Meshes/pam_prop_fan_01"]: MeshPart;
				pam_prop_ground_circle_pam_prop_ground_rotate: Model & {
					["Meshes/pam_prop_ground_circle_pam_prop_ground_rotate_c2"]: MeshPart;
					["Meshes/pam_prop_ground_circle_pam_prop_ground_rotate_b04"]: MeshPart;
					["Meshes/pam_prop_ground_circle_pam_prop_ground_rotate_c3"]: MeshPart;
					["Meshes/pam_prop_ground_circle_pam_prop_ground_rotate_b01"]: MeshPart;
					["Meshes/pam_prop_ground_circle_pam_prop_ground_rotate_c4"]: MeshPart;
					["Meshes/pam_prop_ground_circle_pam_prop_ground_rotate_b05"]: MeshPart;
					["Meshes/pam_prop_ground_circle_pam_prop_ground_rotate_c5"]: MeshPart;
					["Meshes/pam_prop_ground_circle_pam_prop_ground_rotate_c7"]: MeshPart;
					["Meshes/pam_prop_ground_circle_pam_prop_ground_rotate_c6"]: MeshPart;
					["Meshes/pam_prop_ground_circle_pam_prop_ground_rotate_b03"]: MeshPart;
					["Meshes/pam_prop_ground_circle_pam_prop_ground_rotate_c1"]: MeshPart;
					["Meshes/pam_prop_ground_circle_pam_prop_ground_rotate_b07"]: MeshPart;
					["Meshes/pam_prop_ground_circle_pam_prop_ground_rotate_b06"]: MeshPart;
					["Meshes/pam_prop_ground_circle_pam_prop_ground_rotate_b08"]: MeshPart;
					["Meshes/pam_prop_ground_circle_pam_prop_ground_rotate_b02"]: MeshPart;
					["Meshes/pam_prop_ground_circle_pam_prop_ground_rotate_c8"]: MeshPart;
					["Meshes/pam_prop_ground_circle_pam_prop_ground_rotate_a"]: MeshPart;
				};
				["Meshes/pam_prop_fan_rod"]: MeshPart;
				["Meshes/pam_prop_fan_02"]: MeshPart;
			};
			["Meshes/pam_prop_arrow"]: MeshPart;
			["Meshes/pam_prop_archentry"]: MeshPart;
			["Meshes/pam_prop_glove_box_pam_prop_glove_metal"]: MeshPart;
			["Meshes/pam_prop_b_totem04"]: MeshPart;
		};
		TheUltimateBuildingAssetPack: Model & {
			Textures: Folder & {
				Model: Model & {
					["Floor H"]: Part;
					["Floor E"]: Part;
					["Glass E"]: Part;
					["Floor L"]: Part;
					marble: Part;
					["Ceiling J"]: Part;
					Snow2: Part;
					ShellFloor: Part;
					["Terrain C"]: Part;
					["Floor A"]: Part;
					["Ceiling K"]: Part;
					RustyMetal: Part;
					["Floor J"]: Part;
					["Floor G"]: Part;
					["Roof B"]: Part;
					["Roof J"]: Part;
					["Terrain B"]: Part;
					moss_wood: Part;
					["Glass L"]: Part;
					["Ceiling E"]: Part;
					plaster_grey: Part;
					["Terrain E"]: Part;
					MetalPlate: Part;
					BlueFloor: Part;
					GreenMetal: Part;
					["Terrain L"]: Part;
					brick_floor: Part;
					large_floor_tiles: Part;
					["Ceiling C"]: Part;
					["Roof H"]: Part;
					["Roof C"]: Part;
					["Glass G"]: Part;
					["Floor D"]: Part;
					["Floor C"]: Part;
					["Roof L"]: Part;
					["Ceiling A"]: Part;
					Concrete: Part;
					["Ceiling G"]: Part;
					["Glass C"]: Part;
					BrownMud2: Part;
					["Roof D"]: Part;
					["Terrain K"]: Part;
					["Wall I"]: Part;
					["Ceiling L"]: Part;
					["Terrain F"]: Part;
					white_plaster_rough: Part;
					["Wall K"]: Part;
					large_square_pattern: Part;
					["Ceiling I"]: Part;
					cobblestone_floor: Part;
					cobblestone2: Part;
					["Wall E"]: Part;
					["Wall D"]: Part;
					planks_brown: Part;
					["Wall J"]: Part;
					["Wall G"]: Part;
					["Wall H"]: Part;
					["Wall F"]: Part;
					["Roof E"]: Part;
					brown_planks: Part;
					["Ceiling F"]: Part;
					["Terrain J"]: Part;
					["Wall L"]: Part;
					["Wall C"]: Part;
					["Wall B"]: Part;
					["Roof F"]: Part;
					TerrainRed: Part;
					["Roof G"]: Part;
					["Ceiling H"]: Part;
					["Terrain H"]: Part;
					["Terrain G"]: Part;
					["Ceiling B"]: Part;
					["Floor F"]: Part;
					["Terrain A"]: Part;
					["Glass F"]: Part;
					["Roof A"]: Part;
					Sand: Part;
					["Roof I"]: Part;
					["Glass B"]: Part;
					Snow: Part;
					ForestGround: Part;
					["Floor B"]: Part;
					["Terrain I"]: Part;
					["Glass I"]: Part;
					["Glass D"]: Part;
					["Terrain D"]: Part;
					CobbleStone: Part;
					["Glass H"]: Part;
					["Wall A"]: Part;
					["Glass K"]: Part;
					["Roof K"]: Part;
					["Glass J"]: Part;
					BrownMud: Part;
					["Ceiling D"]: Part;
					["Floor I"]: Part;
					["Floor K"]: Part;
				};
				CREDITS: Script;
			};
			Meshes: Folder & {
				Model: Model & {
					Egg: MeshPart;
					Cup: MeshPart;
					Hexagon: MeshPart;
					Trapezoid: MeshPart;
					Bowl: MeshPart;
					CornerBall: MeshPart;
					Octagon: MeshPart;
					Vase: MeshPart;
					Head: MeshPart;
					TriangleRing: MeshPart;
					Triangle: MeshPart;
					Hole: MeshPart;
					InvertedBall: MeshPart;
					Pyramid: MeshPart;
					Thing: MeshPart;
					Pentagon: MeshPart;
					HalfCylinder: MeshPart;
					HexagonRing: MeshPart;
					SmoothRock: MeshPart;
				};
				CREDITS: Script;
			};
			DevShurikenoTextures: Folder & {
				Textures: Model;
				CREDITS: Script;
			};
			GraffitiAndDebris: Folder & {
				Model: Model;
				CREDITS: Script;
			};
			PBRTextures: Folder & {
				Model: Model & {
					RawGold: MeshPart & {
						SurfaceAppearance: SurfaceAppearance;
					};
					FakePaint: MeshPart & {
						SurfaceAppearance: SurfaceAppearance;
					};
					MudColored: MeshPart & {
						SurfaceAppearance: SurfaceAppearance;
					};
					agua1: MeshPart & {
						SurfaceAppearance: SurfaceAppearance;
					};
					Rust: MeshPart & {
						SurfaceAppearance: SurfaceAppearance;
					};
					RawBronze: MeshPart & {
						SurfaceAppearance: SurfaceAppearance;
					};
					OldGold: MeshPart & {
						SurfaceAppearance: SurfaceAppearance;
					};
					Pedra: MeshPart & {
						SurfaceAppearance: SurfaceAppearance;
					};
					damascus: MeshPart & {
						SurfaceAppearance: SurfaceAppearance;
					};
					SciFi: MeshPart & {
						SurfaceAppearance: SurfaceAppearance;
					};
				};
				CREDITS: Script;
			};
			Beams: Folder & {
				Model: Model;
				CREDITS: Script;
			};
			Delete: Part & {
				Decal: Decal;
			};
			Forcefield: Folder & {
				Model: Model;
				CREDITS: Script;
			};
			LowPolyTextures: Folder & {
				Model: Model;
				CREDITS: Script;
			};
			Plugins: Folder & {
				Plugins: Script;
				Text: Model & {
					a: MeshPart;
					c: MeshPart;
					e: MeshPart;
					w: MeshPart;
					f: MeshPart;
					g: MeshPart;
					period: MeshPart;
					u: MeshPart;
					l: MeshPart;
					L: MeshPart;
				};
			};
			README: Script;
			Base: Model & {
				Shuri: Model;
			};
			Particles: Folder & {
				Model: Model;
				CREDITS: Script;
			};
		};
		Quirkymals: Folder & {
			Cerberus: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							["leg.F.L"]: Bone;
							["leg.B.R"]: Bone;
							HeadWear: Bone;
							["ear.R"]: Bone;
							["leg.B.L"]: Bone;
							["ear.L"]: Bone;
							["ear.03.L"]: Bone;
							["leg.F.R"]: Bone;
							["ear.02.R"]: Bone;
							["ear.03.R"]: Bone;
							["tail.01"]: Bone & {
								["tail.02"]: Bone;
							};
							["ear.02.L"]: Bone;
						};
					};
				};
			};
			Lioness: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							["leg.F.L"]: Bone;
							["ear.L"]: Bone;
							["leg.B.R"]: Bone;
							["tail.01"]: Bone & {
								["tail.02"]: Bone;
							};
							HeadWear: Bone;
							["leg.F.R"]: Bone;
							["leg.B.L"]: Bone;
							["ear.R"]: Bone;
						};
					};
				};
			};
			Kiwi: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							["feet.R"]: Bone;
							["feet.L"]: Bone;
							HeadWear: Bone;
							["wing.L"]: Bone;
							["wing.R"]: Bone;
						};
					};
				};
			};
			Bass: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							["fin.R"]: Bone;
							["fin.R.01"]: Bone;
							["fin.02"]: Bone;
							["fin.L.01"]: Bone;
							["fin.01"]: Bone;
							HeadWear: Bone;
							["tail.01"]: Bone;
							["fin.L"]: Bone;
							["tail.02"]: Bone;
						};
					};
				};
			};
			Tuna: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							["fin.R"]: Bone;
							["fin.02"]: Bone;
							["fin.01"]: Bone;
							HeadWear: Bone;
							["tail.01"]: Bone;
							["fin.04"]: Bone;
							["fin.L"]: Bone;
							["fin.03"]: Bone;
							["tail.02"]: Bone;
						};
					};
				};
			};
			Emu: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							["hair.01"]: Bone;
							["hair.02"]: Bone;
							["wing.R"]: Bone;
							["feet.R"]: Bone;
							["tail.02"]: Bone;
							["feet.L"]: Bone;
							HeadWear: Bone;
							["wing.L"]: Bone;
							["tail.01"]: Bone;
						};
					};
				};
			};
			Ox: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							["leg.F.L"]: Bone;
							["ear.L"]: Bone;
							["leg.B.R"]: Bone;
							["tail.01"]: Bone & {
								["tail.02"]: Bone;
							};
							HeadWear: Bone;
							["leg.F.R"]: Bone;
							["leg.B.L"]: Bone;
							["ear.R"]: Bone;
						};
					};
				};
			};
			Arowana: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							["fin.L"]: Bone;
							HeadWear: Bone;
							["fin.02"]: Bone;
							["tail.01"]: Bone;
							["fin.00.R"]: Bone;
							["fin.R"]: Bone;
							["fin.01"]: Bone;
							["fin.00.L"]: Bone;
						};
					};
				};
			};
			Moose: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							["leg.F.L"]: Bone;
							["ear.L"]: Bone;
							["leg.B.R"]: Bone;
							["tail.01"]: Bone;
							HeadWear: Bone;
							["leg.F.R"]: Bone;
							["leg.B.L"]: Bone;
							["ear.R"]: Bone;
						};
					};
				};
			};
			Mallard: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							["hair.01"]: Bone;
							["hair.02"]: Bone;
							["wing.R"]: Bone;
							["feet.R"]: Bone;
							["tail.02"]: Bone;
							["feet.L"]: Bone;
							HeadWear: Bone;
							["wing.L"]: Bone;
							["tail.01"]: Bone;
						};
					};
				};
			};
			Dingo: Model & {
				HumanoidRootPart: MeshPart & {
					body: Bone & {
						["leg.B.L"]: Bone;
						["ear.L"]: Bone;
						["leg.B.R"]: Bone;
						["tail.01"]: Bone & {
							["tail.02"]: Bone;
						};
						HeadWear: Bone;
						["leg.F.R"]: Bone;
						["leg.F.L"]: Bone;
						["ear.R"]: Bone;
					};
				};
			};
			Ostrich: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							["feet.R"]: Bone;
							HeadWear: Bone;
							["feet.L"]: Bone;
							["hair.01"]: Bone;
							["hair.02"]: Bone;
							["wing.R"]: Bone;
							["wing.L"]: Bone;
						};
					};
				};
			};
			Kingfisher: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							["hair.01"]: Bone;
							["hair.02"]: Bone;
							["wing.R"]: Bone;
							["feet.R"]: Bone;
							["tail.02"]: Bone;
							["feet.L"]: Bone;
							HeadWear: Bone;
							["wing.L"]: Bone;
							["tail.01"]: Bone;
						};
					};
				};
			};
			SnappingTurtle: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							["leg.B.L"]: Bone;
							["leg.B.R"]: Bone;
							["tail.01"]: Bone;
							HeadWear: Bone;
							["leg.F.R"]: Bone;
							["leg.F.L"]: Bone;
							head: Bone;
						};
					};
				};
			};
			Coyote: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							["leg.F.L"]: Bone;
							["ear.L"]: Bone;
							["leg.B.R"]: Bone;
							["tail.01"]: Bone & {
								["tail.02"]: Bone;
							};
							HeadWear: Bone;
							["leg.F.R"]: Bone;
							["leg.B.L"]: Bone;
							["ear.R"]: Bone;
						};
					};
				};
			};
			Kakapo: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							["hair.01"]: Bone;
							["hair.02"]: Bone;
							["wing.R"]: Bone;
							["feet.R"]: Bone;
							["tail.02"]: Bone;
							["feet.L"]: Bone;
							HeadWear: Bone;
							["wing.L"]: Bone;
							["tail.01"]: Bone;
						};
					};
				};
			};
			Meerkat: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							["leg.F.L"]: Bone;
							["ear.L"]: Bone;
							["leg.B.R"]: Bone;
							["tail.01"]: Bone & {
								["tail.02"]: Bone;
							};
							HeadWear: Bone;
							["leg.F.R"]: Bone;
							["leg.B.L"]: Bone;
							["ear.R"]: Bone;
						};
					};
				};
			};
			Armadillo: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							["leg.F.L"]: Bone;
							["ear.L"]: Bone;
							["leg.B.R"]: Bone;
							["tail.01"]: Bone & {
								["tail.02"]: Bone;
							};
							HeadWear: Bone;
							["leg.F.R"]: Bone;
							["leg.B.L"]: Bone;
							["ear.R"]: Bone;
						};
					};
				};
			};
			Deer: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							["leg.F.L"]: Bone;
							["ear.L"]: Bone;
							["leg.B.R"]: Bone;
							["tail.01"]: Bone;
							HeadWear: Bone;
							["leg.F.R"]: Bone;
							["leg.B.L"]: Bone;
							["ear.R"]: Bone;
						};
					};
				};
			};
			FlyingFox: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							["feet.R"]: Bone;
							["ear.L"]: Bone;
							HeadWear: Bone;
							["feet.L"]: Bone;
							["wing.R"]: Bone;
							["wing.L"]: Bone;
							["ear.R"]: Bone;
						};
					};
				};
			};
			Monkey: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							["leg.F.L"]: Bone;
							["ear.L"]: Bone;
							["leg.B.R"]: Bone;
							["tail.01"]: Bone & {
								["tail.02"]: Bone;
							};
							HeadWear: Bone;
							["leg.F.R"]: Bone;
							["leg.B.L"]: Bone;
							["ear.R"]: Bone;
						};
					};
				};
			};
			Lobster: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							["leg.L.01"]: Bone;
							["leg.L.02"]: Bone;
							["leg.R.01"]: Bone;
							["tail.01"]: Bone;
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
			Squirrel: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							["leg.F.L"]: Bone;
							["ear.L"]: Bone;
							["leg.B.R"]: Bone;
							["tail.01"]: Bone & {
								["tail.02"]: Bone;
							};
							HeadWear: Bone;
							["leg.F.R"]: Bone;
							["leg.B.L"]: Bone;
							["ear.R"]: Bone;
						};
					};
				};
			};
			Gemsbok: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							["leg.F.L"]: Bone;
							["ear.L"]: Bone;
							["leg.B.R"]: Bone;
							["tail.01"]: Bone & {
								["tail.02"]: Bone;
							};
							HeadWear: Bone;
							["leg.F.R"]: Bone;
							["leg.B.L"]: Bone;
							["ear.R"]: Bone;
						};
					};
				};
			};
			Chameleon: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							["leg.B.L"]: Bone;
							["leg.B.R"]: Bone;
							["tail.01"]: Bone & {
								["tail.02"]: Bone;
							};
							HeadWear: Bone;
							["leg.F.L"]: Bone;
							["leg.F.R"]: Bone;
						};
					};
				};
			};
			Mole: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							["leg.F.L"]: Bone;
							["ear.L"]: Bone;
							["leg.B.R"]: Bone;
							["tail.01"]: Bone & {
								["tail.02"]: Bone;
							};
							HeadWear: Bone;
							["leg.F.R"]: Bone;
							["leg.B.L"]: Bone;
							["ear.R"]: Bone;
						};
					};
				};
			};
			Bison: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							["leg.F.L"]: Bone;
							["ear.L"]: Bone;
							["leg.B.R"]: Bone;
							["tail.01"]: Bone & {
								["tail.02"]: Bone;
							};
							HeadWear: Bone;
							["leg.F.R"]: Bone;
							["leg.B.L"]: Bone;
							["ear.R"]: Bone;
						};
					};
				};
			};
			Taipan: Model & {
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
			};
			Marten: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							["leg.B.L"]: Bone;
							["leg.B.R"]: Bone;
							["tail.01"]: Bone & {
								["tail.02"]: Bone;
							};
							HeadWear: Bone;
							["leg.F.R"]: Bone;
							["leg.F.L"]: Bone;
							["ear.R"]: Bone;
						};
					};
				};
			};
			Goat: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							["leg.F.L"]: Bone;
							["ear.L"]: Bone;
							["leg.B.R"]: Bone;
							["tail.01"]: Bone;
							HeadWear: Bone;
							["leg.F.R"]: Bone;
							["leg.B.L"]: Bone;
							["ear.R"]: Bone;
						};
					};
				};
			};
			Narwhal: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							["fin.L"]: Bone;
							HeadWear: Bone;
							["fin.R"]: Bone;
							["tail.01"]: Bone & {
								["tail.02"]: Bone;
							};
						};
					};
				};
			};
			Inkfish: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							["tentacle.L.02"]: Bone & {
								["tentacle.L.06"]: Bone;
							};
							["tentacle.R.02"]: Bone & {
								["tentacle.R.06"]: Bone;
							};
							["tentacle.L.01"]: Bone & {
								["tentacle.L.05"]: Bone;
							};
							["tentacle.L.04"]: Bone & {
								["tentacle.L.08"]: Bone;
							};
							["tentacle.R.01"]: Bone & {
								["tentacle.R.05"]: Bone;
							};
							["tentacle.R.04"]: Bone & {
								["tentacle.R.08"]: Bone;
							};
							["tentacle.R.03"]: Bone & {
								["tentacle.R.07"]: Bone;
							};
							["tentacle.L.03"]: Bone & {
								["tentacle.L.07"]: Bone;
							};
						};
					};
				};
			};
			Chipmunk: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							["leg.F.L"]: Bone;
							["ear.L"]: Bone;
							["leg.B.R"]: Bone;
							["tail.01"]: Bone & {
								["tail.02"]: Bone;
							};
							HeadWear: Bone;
							["leg.F.R"]: Bone;
							["leg.B.L"]: Bone;
							["ear.R"]: Bone;
						};
					};
				};
			};
			Shoebill: Model & {
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
							HeadWear: Bone;
							["wing.L"]: Bone;
							["tail.01"]: Bone;
						};
					};
				};
			};
			PolarBear: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							["leg.F.L"]: Bone;
							["ear.L"]: Bone;
							["leg.B.R"]: Bone;
							["tail.01"]: Bone;
							HeadWear: Bone;
							["leg.B.L"]: Bone;
							["leg.F.R"]: Bone;
							["ear.R"]: Bone;
						};
					};
				};
			};
			Snake: Model & {
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
			};
			Lamb: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							["leg.F.L"]: Bone;
							["ear.L"]: Bone;
							["leg.B.R"]: Bone;
							["tail.01"]: Bone;
							HeadWear: Bone;
							["leg.F.R"]: Bone;
							["leg.B.L"]: Bone;
							["ear.R"]: Bone;
						};
					};
				};
			};
			Sheep: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							["leg.F.L"]: Bone;
							["ear.L"]: Bone;
							["leg.B.R"]: Bone;
							["tail.01"]: Bone;
							HeadWear: Bone;
							["leg.F.R"]: Bone;
							["leg.B.L"]: Bone;
							["ear.R"]: Bone;
						};
					};
				};
			};
			TasmanianDevil: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							["leg.F.L"]: Bone;
							["ear.L"]: Bone;
							["leg.B.R"]: Bone;
							["tail.01"]: Bone & {
								["tail.02"]: Bone;
							};
							HeadWear: Bone;
							["leg.F.R"]: Bone;
							["leg.B.L"]: Bone;
							["ear.R"]: Bone;
						};
					};
				};
			};
			Possum: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							["leg.F.L"]: Bone;
							["ear.L"]: Bone;
							["leg.B.R"]: Bone;
							["tail.01"]: Bone & {
								["tail.02"]: Bone;
							};
							HeadWear: Bone;
							["leg.F.R"]: Bone;
							["leg.B.L"]: Bone;
							["ear.R"]: Bone;
						};
					};
				};
			};
			Hedgehog: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							["leg.F.L"]: Bone;
							["ear.L"]: Bone;
							["leg.B.R"]: Bone;
							["leg.F.R"]: Bone;
							HeadWear: Bone;
							["leg.B.L"]: Bone;
							["ear.R"]: Bone;
						};
					};
				};
			};
			Penguin: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							["feet.R"]: Bone;
							HeadWear: Bone;
							["tail.01"]: Bone;
							["hair.01"]: Bone;
							["feet.L"]: Bone;
							["wing.R"]: Bone;
							["wing.L"]: Bone;
						};
					};
				};
			};
			Frog: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							["leg.F.L"]: Bone;
							["leg.B.R"]: Bone;
							["leg.F.R"]: Bone;
							HeadWear: Bone;
							["leg.B.L"]: Bone;
						};
					};
				};
			};
			Eagle: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							["hair.01"]: Bone;
							["hair.02"]: Bone;
							["wing.R"]: Bone;
							["feet.R"]: Bone;
							["tail.02"]: Bone;
							["feet.L"]: Bone;
							HeadWear: Bone;
							["wing.L"]: Bone;
							["tail.01"]: Bone;
						};
					};
				};
			};
			Porcupine: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							["leg.F.L"]: Bone;
							["ear.L"]: Bone;
							["leg.B.R"]: Bone;
							["tail.01"]: Bone;
							HeadWear: Bone;
							["leg.F.R"]: Bone;
							["leg.B.L"]: Bone;
							["ear.R"]: Bone;
						};
					};
				};
			};
			Hen: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							["hair.01"]: Bone;
							["hair.02"]: Bone;
							["wing.R"]: Bone;
							["feet.R"]: Bone;
							["tail.02"]: Bone;
							["feet.L"]: Bone;
							HeadWear: Bone;
							["wing.L"]: Bone;
							["tail.01"]: Bone;
						};
					};
				};
			};
			Goldfish: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							["fin.L"]: Bone;
							HeadWear: Bone;
							["tail.01"]: Bone;
							["hair.01"]: Bone;
							["fin.R"]: Bone;
							["fin.02"]: Bone;
							["tail.02"]: Bone;
						};
					};
				};
			};
			Bear: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							["leg.F.L"]: Bone;
							["ear.L"]: Bone;
							["leg.B.R"]: Bone;
							["tail.01"]: Bone;
							HeadWear: Bone;
							["leg.B.L"]: Bone;
							["leg.F.R"]: Bone;
							["ear.R"]: Bone;
						};
					};
				};
			};
			Wombat: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							["leg.B.L"]: Bone;
							["ear.L"]: Bone;
							["leg.B.R"]: Bone;
							["leg.F.R"]: Bone;
							HeadWear: Bone;
							["leg.F.L"]: Bone;
							["ear.R"]: Bone;
						};
					};
				};
			};
			Gazelle: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							["leg.F.L"]: Bone;
							["ear.L"]: Bone;
							["leg.B.R"]: Bone;
							["tail.01"]: Bone;
							HeadWear: Bone;
							["leg.F.R"]: Bone;
							["leg.B.L"]: Bone;
							["ear.R"]: Bone;
						};
					};
				};
			};
			Turtle: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							["leg.F.L"]: Bone & {
								["leg.F.L.02"]: Bone;
							};
							["leg.B.R"]: Bone & {
								["leg.B.R.02"]: Bone;
							};
							["tail.01"]: Bone;
							HeadWear: Bone;
							["leg.F.R"]: Bone & {
								["leg.F.R.02"]: Bone;
							};
							["leg.B.L"]: Bone & {
								["leg.B.L.02"]: Bone;
							};
						};
					};
				};
			};
			Pig: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							["leg.F.L"]: Bone;
							["ear.L"]: Bone;
							["leg.B.R"]: Bone;
							["tail.01"]: Bone;
							HeadWear: Bone;
							["leg.F.R"]: Bone;
							["leg.B.L"]: Bone;
							["ear.R"]: Bone;
						};
					};
				};
			};
			Crocodile: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							["leg.B.L"]: Bone;
							["leg.B.R"]: Bone;
							["tail.01"]: Bone & {
								["tail.02"]: Bone;
							};
							HeadWear: Bone;
							["leg.F.L"]: Bone;
							["leg.F.R"]: Bone;
						};
					};
				};
			};
			Clownfish: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							["fin.R"]: Bone;
							["fin.02"]: Bone;
							["fin.01"]: Bone;
							HeadWear: Bone;
							["tail.02"]: Bone;
							["fin.04"]: Bone;
							["fin.L"]: Bone;
							["fin.03"]: Bone;
							["tail.01"]: Bone;
						};
					};
				};
			};
			Donkey: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							["leg.F.L"]: Bone;
							["ear.L"]: Bone;
							["leg.B.R"]: Bone;
							["tail.01"]: Bone & {
								["tail.02"]: Bone;
							};
							HeadWear: Bone;
							["leg.F.R"]: Bone;
							["leg.B.L"]: Bone;
							["ear.R"]: Bone;
						};
					};
				};
			};
			Llama: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							["leg.F.L"]: Bone;
							["ear.L"]: Bone;
							["leg.B.R"]: Bone;
							["tail.01"]: Bone & {
								["tail.02"]: Bone;
							};
							HeadWear: Bone;
							["leg.F.R"]: Bone;
							["leg.B.L"]: Bone;
							["ear.R"]: Bone;
						};
					};
				};
			};
			Rhino: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							["leg.F.L"]: Bone;
							["ear.L"]: Bone;
							["leg.B.R"]: Bone;
							["tail.01"]: Bone;
							HeadWear: Bone;
							["leg.F.R"]: Bone;
							["leg.B.L"]: Bone;
							["ear.R"]: Bone;
						};
					};
				};
			};
			Cardinal: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							["feet.R"]: Bone;
							HeadWear: Bone;
							["tail.01"]: Bone;
							["feet.L"]: Bone;
							["wing.R"]: Bone;
							["wing.L"]: Bone;
							["tail.02"]: Bone;
						};
					};
				};
			};
			SeaLion: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							["leg.L"]: Bone;
							["leg.R"]: Bone;
							["tail.01"]: Bone;
						};
					};
				};
			};
			Peacock: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							["feet.R"]: Bone;
							HeadWear: Bone;
							["feet.L"]: Bone;
							["tail.01"]: Bone;
							["hair.01"]: Bone;
							["wing.R"]: Bone;
							["wing.L"]: Bone;
							["tail.02"]: Bone;
						};
					};
				};
			};
			Quokka: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							["leg.F.L"]: Bone;
							["ear.L"]: Bone;
							["leg.B.R"]: Bone;
							["tail.01"]: Bone & {
								["tail.02"]: Bone;
							};
							HeadWear: Bone;
							["leg.F.R"]: Bone;
							["leg.B.L"]: Bone;
							["ear.R"]: Bone;
						};
					};
				};
			};
			Platypus: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							["leg.B.L"]: Bone;
							["leg.B.R"]: Bone;
							["tail.01"]: Bone & {
								["tail.02"]: Bone;
							};
							HeadWear: Bone;
							["leg.F.L"]: Bone;
							["leg.F.R"]: Bone;
						};
					};
				};
			};
			Pelican: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							["feet.R"]: Bone;
							HeadWear: Bone;
							["wing.R"]: Bone;
							["tail.01"]: Bone;
							["feet.L"]: Bone;
							["tail.03"]: Bone;
							["wing.L"]: Bone;
							["tail.02"]: Bone;
						};
					};
				};
			};
			Skunk: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							["leg.F.L"]: Bone;
							["ear.L"]: Bone;
							["leg.B.R"]: Bone;
							["tail.01"]: Bone & {
								["tail.02"]: Bone;
							};
							HeadWear: Bone;
							["leg.F.R"]: Bone;
							["leg.B.L"]: Bone;
							["ear.R"]: Bone;
						};
					};
				};
			};
			MonitorLizard: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							["leg.B.L"]: Bone;
							["leg.B.R"]: Bone;
							["tail.01"]: Bone & {
								["tail.02"]: Bone;
							};
							HeadWear: Bone;
							["leg.F.L"]: Bone;
							["leg.F.R"]: Bone;
						};
					};
				};
			};
			Walrus: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							["leg.B.L"]: Bone;
							["leg.B.R"]: Bone;
							["leg.F.R"]: Bone;
							HeadWear: Bone;
							["leg.F.L"]: Bone;
						};
					};
				};
			};
			Macaw: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							["hair.01"]: Bone;
							["hair.02"]: Bone;
							["wing.R"]: Bone;
							["feet.R"]: Bone;
							["tail.02"]: Bone;
							["feet.L"]: Bone;
							HeadWear: Bone;
							["wing.L"]: Bone;
							["tail.01"]: Bone;
						};
					};
				};
			};
			Jellyfish: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							["tentacle.L.02"]: Bone & {
								["tentacle.L.06"]: Bone;
							};
							["tentacle.R.02"]: Bone & {
								["tentacle.R.06"]: Bone;
							};
							["tentacle.L.01"]: Bone & {
								["tentacle.L.05"]: Bone;
							};
							["tentacle.L.04"]: Bone & {
								["tentacle.L.08"]: Bone;
							};
							["tentacle.R.01"]: Bone & {
								["tentacle.R.05"]: Bone;
							};
							["tentacle.R.04"]: Bone & {
								["tentacle.R.08"]: Bone;
							};
							["tentacle.R.03"]: Bone & {
								["tentacle.R.07"]: Bone;
							};
							["tentacle.L.03"]: Bone & {
								["tentacle.L.07"]: Bone;
							};
						};
					};
				};
			};
			Antelope: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							["leg.F.L"]: Bone;
							["ear.L"]: Bone;
							["leg.B.R"]: Bone;
							["tail.01"]: Bone;
							HeadWear: Bone;
							["leg.F.R"]: Bone;
							["leg.B.L"]: Bone;
							["ear.R"]: Bone;
						};
					};
				};
			};
			Alpaca: Model & {
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
			};
			Python: Model & {
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
			};
			Giraffe: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							["leg.B.L"]: Bone;
							["leg.B.R"]: Bone;
							["tail.01"]: Bone & {
								["tail.02"]: Bone;
							};
							HeadWear: Bone;
							["leg.F.R"]: Bone;
							["neck.01"]: Bone & {
								["neck.02"]: Bone & {
									["ear.R"]: Bone;
									["ear.L"]: Bone;
								};
							};
							["leg.F.L"]: Bone;
						};
					};
				};
			};
			Jerboa: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							["leg.F.L"]: Bone;
							["ear.L"]: Bone;
							["leg.B.R"]: Bone;
							["tail.01"]: Bone & {
								["tail.02"]: Bone;
							};
							HeadWear: Bone;
							["leg.F.R"]: Bone;
							["leg.B.L"]: Bone;
							["ear.R"]: Bone;
						};
					};
				};
			};
			Alligator: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							["leg.B.L"]: Bone;
							["leg.B.R"]: Bone;
							["tail.01"]: Bone & {
								["tail.02"]: Bone;
							};
							HeadWear: Bone;
							["leg.F.L"]: Bone;
							["leg.F.R"]: Bone;
						};
					};
				};
			};
			SnowLeopard: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							["leg.F.L"]: Bone;
							["ear.L"]: Bone;
							["leg.B.R"]: Bone;
							["tail.01"]: Bone & {
								["tail.02"]: Bone;
							};
							HeadWear: Bone;
							["leg.F.R"]: Bone;
							["leg.B.L"]: Bone;
							["ear.R"]: Bone;
						};
					};
				};
			};
			Hornbill: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							["feet.R"]: Bone;
							HeadWear: Bone;
							["tail.01"]: Bone;
							["feet.L"]: Bone;
							["wing.R"]: Bone;
							["wing.L"]: Bone;
							["tail.02"]: Bone;
						};
					};
				};
			};
			Panda: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							["leg.F.L"]: Bone;
							["ear.L"]: Bone;
							["leg.B.R"]: Bone;
							["tail.01"]: Bone;
							HeadWear: Bone;
							["leg.F.R"]: Bone;
							["leg.B.L"]: Bone;
							["ear.R"]: Bone;
						};
					};
				};
			};
			RedPanda: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							["leg.F.L"]: Bone;
							["ear.L"]: Bone;
							["leg.B.R"]: Bone;
							["tail.01"]: Bone & {
								["tail.02"]: Bone;
							};
							HeadWear: Bone;
							["leg.F.R"]: Bone;
							["leg.B.L"]: Bone;
							["ear.R"]: Bone;
						};
					};
				};
			};
			Mudskipper: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							["fin.L"]: Bone;
							["fin.02"]: Bone;
							HeadWear: Bone;
							["fin.R"]: Bone;
							["fin.01"]: Bone;
							["fin.03"]: Bone;
						};
					};
				};
			};
			Capybara: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							["leg.F.L"]: Bone;
							["ear.L"]: Bone;
							["leg.B.R"]: Bone;
							["tail.01"]: Bone;
							HeadWear: Bone;
							["leg.B.L"]: Bone;
							["leg.F.R"]: Bone;
							["ear.R"]: Bone;
						};
					};
				};
			};
			Tapir: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							["leg.F.L"]: Bone;
							["ear.L"]: Bone;
							["leg.B.R"]: Bone;
							["tail.01"]: Bone;
							HeadWear: Bone;
							["leg.F.R"]: Bone;
							["leg.B.L"]: Bone;
							["ear.R"]: Bone;
						};
					};
				};
			};
			Piranha: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							["fin.L"]: Bone;
							HeadWear: Bone;
							["fin.02"]: Bone;
							["fin.R"]: Bone;
							["tail.02"]: Bone;
							["fin.01"]: Bone;
							["tail.01"]: Bone;
						};
					};
				};
			};
			Pudu: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							["leg.F.L"]: Bone;
							["ear.L"]: Bone;
							["leg.B.R"]: Bone;
							["tail.01"]: Bone;
							HeadWear: Bone;
							["leg.F.R"]: Bone;
							["leg.B.L"]: Bone;
							["ear.R"]: Bone;
						};
					};
				};
			};
			Sparrow: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							["hair.01"]: Bone;
							["hair.02"]: Bone;
							["wing.R"]: Bone;
							["feet.R"]: Bone;
							["tail.02"]: Bone;
							["feet.L"]: Bone;
							HeadWear: Bone;
							["wing.L"]: Bone;
							["tail.01"]: Bone;
						};
					};
				};
			};
			Tortoise: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							["leg.B.L"]: Bone;
							["leg.B.R"]: Bone;
							["tail.01"]: Bone;
							HeadWear: Bone;
							["leg.F.L"]: Bone;
							["leg.F.R"]: Bone;
						};
					};
				};
			};
			Muskrat: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							["leg.F.L"]: Bone;
							["ear.L"]: Bone;
							["leg.B.R"]: Bone;
							["tail.01"]: Bone & {
								["tail.02"]: Bone;
							};
							HeadWear: Bone;
							["leg.F.R"]: Bone;
							["leg.B.L"]: Bone;
							["ear.R"]: Bone;
						};
					};
				};
			};
			Leopard: Model & {
				HumanoidRootPart: MeshPart & {
					body: Bone & {
						["leg.B.L"]: Bone;
						["ear.L"]: Bone;
						["leg.B.R"]: Bone;
						["tail.01"]: Bone & {
							["tail.02"]: Bone;
						};
						HeadWear: Bone;
						["leg.F.R"]: Bone;
						["leg.F.L"]: Bone;
						["ear.R"]: Bone;
					};
				};
			};
			Gecko: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							["leg.B.L"]: Bone;
							["leg.B.R"]: Bone;
							["tail.01"]: Bone & {
								["tail.02"]: Bone;
							};
							HeadWear: Bone;
							["leg.F.L"]: Bone;
							["leg.F.R"]: Bone;
						};
					};
				};
			};
			Wyvern: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							["feet.R"]: Bone;
							["tail.01"]: Bone & {
								["tail.02"]: Bone;
							};
							["feet.L"]: Bone;
							HeadWear: Bone;
							["wing.L"]: Bone & {
								["wing.01.L"]: Bone;
							};
							["wing.R"]: Bone & {
								["wing.01.R"]: Bone;
							};
						};
					};
				};
			};
			Crab: Model & {
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
			Quail: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							["hair.01"]: Bone;
							["hair.02"]: Bone;
							["wing.R"]: Bone;
							["feet.R"]: Bone;
							["tail.02"]: Bone;
							["feet.L"]: Bone;
							HeadWear: Bone;
							["wing.L"]: Bone;
							["tail.01"]: Bone;
						};
					};
				};
			};
			Phoenix: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							["hair.01"]: Bone;
							["hair.02"]: Bone;
							["wing.R"]: Bone;
							["feet.R"]: Bone;
							["tail.02"]: Bone;
							["feet.L"]: Bone;
							HeadWear: Bone;
							["wing.L"]: Bone;
							["tail.01"]: Bone;
						};
					};
				};
			};
			Pegasus: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							["leg.F.L"]: Bone;
							["leg.B.R"]: Bone;
							["wing.R"]: Bone;
							["ear.R"]: Bone;
							["leg.B.L"]: Bone;
							["ear.L"]: Bone;
							["leg.F.R"]: Bone;
							HeadWear: Bone;
							["wing.L"]: Bone;
							["tail.01"]: Bone & {
								["tail.02"]: Bone;
							};
						};
					};
				};
			};
			Manatee: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							HeadWear: Bone;
							["leg.L"]: Bone;
							["leg.R"]: Bone;
							["tail.01"]: Bone;
						};
					};
				};
			};
			Mouse: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							["leg.F.L"]: Bone;
							["ear.L"]: Bone;
							["leg.B.R"]: Bone;
							["tail.01"]: Bone & {
								["tail.02"]: Bone;
							};
							HeadWear: Bone;
							["leg.F.R"]: Bone;
							["leg.B.L"]: Bone;
							["ear.R"]: Bone;
						};
					};
				};
			};
			Leviathan: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							["leg.B.L"]: Bone;
							["leg.B.R"]: Bone;
							["tail.01"]: Bone;
							HeadWear: Bone;
							["leg.F.L"]: Bone;
							["leg.F.R"]: Bone;
						};
					};
				};
			};
			Hyena: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							["leg.F.L"]: Bone;
							["ear.L"]: Bone;
							["leg.B.R"]: Bone;
							["tail.01"]: Bone & {
								["tail.02"]: Bone;
							};
							HeadWear: Bone;
							["leg.F.R"]: Bone;
							["leg.B.L"]: Bone;
							["ear.R"]: Bone;
						};
					};
				};
			};
			Dolphin: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							["fin.R"]: Bone;
							["tail.01"]: Bone & {
								["tail.02"]: Bone;
							};
							HeadWear: Bone;
							["fin.01"]: Bone;
							["fin.L"]: Bone;
						};
					};
				};
			};
			Cougar: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							["leg.F.L"]: Bone;
							["ear.L"]: Bone;
							["leg.B.R"]: Bone;
							["tail.01"]: Bone & {
								["tail.02"]: Bone;
							};
							HeadWear: Bone;
							["leg.F.R"]: Bone;
							["leg.B.L"]: Bone;
							["ear.R"]: Bone;
						};
					};
				};
			};
			Kitsune: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							["leg.F.L"]: Bone;
							["ear.L"]: Bone;
							["leg.B.R"]: Bone;
							["tail.01"]: Bone;
							HeadWear: Bone;
							["leg.F.R"]: Bone;
							["leg.B.L"]: Bone;
							["ear.R"]: Bone;
						};
					};
				};
			};
			Kirin: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							["leg.F.L"]: Bone;
							["ear.L"]: Bone;
							["leg.B.R"]: Bone;
							["tail.01"]: Bone & {
								["tail.02"]: Bone;
							};
							HeadWear: Bone;
							["leg.F.R"]: Bone;
							["leg.B.L"]: Bone;
							["ear.R"]: Bone;
						};
					};
				};
			};
			Rooster: Model & {
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
							HeadWear: Bone;
							["wing.L"]: Bone;
							["tail.01"]: Bone;
						};
					};
				};
			};
			Hog: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							["leg.F.L"]: Bone;
							["ear.L"]: Bone;
							["leg.B.R"]: Bone;
							["tail.01"]: Bone & {
								["tail.02"]: Bone;
							};
							HeadWear: Bone;
							["leg.F.R"]: Bone;
							["leg.B.L"]: Bone;
							["ear.R"]: Bone;
						};
					};
				};
			};
			Puffin: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							["feet.R"]: Bone;
							HeadWear: Bone;
							["tail.01"]: Bone;
							["feet.L"]: Bone;
							["tail.02"]: Bone;
							["wing.R"]: Bone;
							["wing.L"]: Bone;
						};
					};
				};
			};
			Otter: Model & {
				HumanoidRootPart: MeshPart & {
					body: Bone & {
						["leg.B.L"]: Bone;
						["ear.L"]: Bone;
						["leg.B.R"]: Bone;
						["tail.01"]: Bone & {
							["tail.02"]: Bone;
						};
						HeadWear: Bone;
						["leg.F.R"]: Bone;
						["leg.F.L"]: Bone;
						["ear.R"]: Bone;
					};
				};
			};
			Dragon: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							["feet.R"]: Bone;
							["neck.01"]: Bone & {
								["neck.02"]: Bone & {
									head: Bone;
								};
							};
							["arm.R"]: Bone;
							["tail.01"]: Bone & {
								["tail.02"]: Bone;
							};
							["feet.L"]: Bone;
							["arm.L"]: Bone;
							["wing.L"]: Bone & {
								["wing.01.L"]: Bone;
							};
							["wing.R"]: Bone & {
								["wing.01.R"]: Bone;
							};
						};
					};
				};
			};
			Hare: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							["leg.F.L"]: Bone;
							["ear.L"]: Bone;
							["leg.B.R"]: Bone;
							["tail.01"]: Bone;
							HeadWear: Bone;
							["leg.F.R"]: Bone;
							["leg.B.L"]: Bone;
							["ear.R"]: Bone;
						};
					};
				};
			};
			ChineseDragon: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							["leg.B.L"]: Bone;
							["leg.B.R"]: Bone;
							["tail.01"]: Bone & {
								["tail.02"]: Bone;
							};
							HeadWear: Bone;
							["leg.F.L"]: Bone;
							["leg.F.R"]: Bone;
						};
					};
				};
			};
			Zebra: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							["leg.F.L"]: Bone;
							["ear.L"]: Bone;
							["leg.B.R"]: Bone;
							["tail.01"]: Bone & {
								["tail.02"]: Bone;
							};
							HeadWear: Bone;
							["leg.F.R"]: Bone;
							["leg.B.L"]: Bone;
							["ear.R"]: Bone;
						};
					};
				};
			};
			Sloth: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							["leg.B.L"]: Bone;
							["ear.L"]: Bone;
							["leg.B.R"]: Bone;
							["leg.F.R"]: Bone;
							HeadWear: Bone;
							["leg.F.L"]: Bone;
							["ear.R"]: Bone;
						};
					};
				};
			};
			Wolf: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							["leg.F.L"]: Bone;
							["ear.L"]: Bone;
							["leg.B.R"]: Bone;
							["tail.01"]: Bone & {
								["tail.02"]: Bone;
							};
							HeadWear: Bone;
							["leg.F.R"]: Bone;
							["leg.B.L"]: Bone;
							["ear.R"]: Bone;
						};
					};
				};
			};
			Turkey: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							["feet.R"]: Bone;
							HeadWear: Bone;
							["tail.01"]: Bone;
							["feet.L"]: Bone;
							["wing.R"]: Bone;
							["wing.L"]: Bone;
							["tail.02"]: Bone;
						};
					};
				};
			};
			Orca: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							["fin.R"]: Bone;
							["tail.01"]: Bone & {
								["tail.02"]: Bone;
							};
							HeadWear: Bone;
							["fin.01"]: Bone;
							["fin.L"]: Bone;
						};
					};
				};
			};
			Lemur: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							["leg.F.L"]: Bone;
							["ear.L"]: Bone;
							["leg.B.R"]: Bone;
							["tail.01"]: Bone & {
								["tail.02"]: Bone;
							};
							HeadWear: Bone;
							["leg.F.R"]: Bone;
							["leg.B.L"]: Bone;
							["ear.R"]: Bone;
						};
					};
				};
			};
			SeaHorse: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							["fin.L"]: Bone;
							HeadWear: Bone;
							["fin.R"]: Bone;
							["tail.01"]: Bone;
						};
					};
				};
			};
			Bull: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							["leg.F.L"]: Bone;
							["ear.L"]: Bone;
							["leg.B.R"]: Bone;
							["tail.01"]: Bone & {
								["tail.02"]: Bone;
							};
							HeadWear: Bone;
							["leg.F.R"]: Bone;
							["leg.B.L"]: Bone;
							["ear.R"]: Bone;
						};
					};
				};
			};
			Whale: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							["fin.L"]: Bone;
							HeadWear: Bone;
							["fin.R"]: Bone;
							["tail.01"]: Bone & {
								["tail.02"]: Bone;
							};
						};
					};
				};
			};
			Salmon: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							["fin.L"]: Bone;
							HeadWear: Bone;
							["tail.02"]: Bone;
							["fin.02"]: Bone;
							["fin.R"]: Bone;
							["tail.01"]: Bone;
							["fin.01"]: Bone;
							["fin.03"]: Bone;
						};
					};
				};
			};
			Vulture: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							["feet.R"]: Bone;
							HeadWear: Bone;
							["tail.01"]: Bone;
							["feet.L"]: Bone;
							["wing.R"]: Bone;
							["wing.L"]: Bone;
							["tail.02"]: Bone;
						};
					};
				};
			};
			Toucan: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							["feet.R"]: Bone;
							HeadWear: Bone;
							["tail.01"]: Bone;
							["feet.L"]: Bone;
							["tail.02"]: Bone;
							["wing.R"]: Bone;
							["wing.L"]: Bone;
						};
					};
				};
			};
			Tiger: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							["leg.F.L"]: Bone;
							["ear.L"]: Bone;
							["leg.B.R"]: Bone;
							["tail.01"]: Bone & {
								["tail.02"]: Bone;
							};
							HeadWear: Bone;
							["leg.F.R"]: Bone;
							["leg.B.L"]: Bone;
							["ear.R"]: Bone;
						};
					};
				};
			};
			Raccoon: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							["leg.F.L"]: Bone;
							["ear.L"]: Bone;
							["leg.B.R"]: Bone;
							["tail.01"]: Bone & {
								["tail.02"]: Bone;
							};
							HeadWear: Bone;
							["leg.F.R"]: Bone;
							["leg.B.L"]: Bone;
							["ear.R"]: Bone;
						};
					};
				};
			};
			Swan: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							["feet.R"]: Bone;
							HeadWear: Bone;
							["wing.R"]: Bone;
							["tail.01"]: Bone;
							["feet.L"]: Bone;
							["tail.03"]: Bone;
							["wing.L"]: Bone;
							["tail.02"]: Bone;
						};
					};
				};
			};
			RiverDolphin: Model & {
				HumanoidRootPart: MeshPart & {
					body: Bone & {
						["fin.R"]: Bone;
						["tail.01"]: Bone & {
							["tail.02"]: Bone;
						};
						HeadWear: Bone;
						["fin.01"]: Bone;
						["fin.L"]: Bone;
					};
				};
			};
			SnowWeasel: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							["leg.F.L"]: Bone;
							["ear.L"]: Bone;
							["leg.B.R"]: Bone;
							["tail.01"]: Bone & {
								["tail.02"]: Bone;
							};
							HeadWear: Bone;
							["leg.F.R"]: Bone;
							["leg.B.L"]: Bone;
							["ear.R"]: Bone;
						};
					};
				};
			};
			Seagull: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							["hair.01"]: Bone;
							["hair.02"]: Bone;
							["wing.R"]: Bone;
							["feet.R"]: Bone;
							["tail.02"]: Bone;
							["feet.L"]: Bone;
							HeadWear: Bone;
							["wing.L"]: Bone;
							["tail.01"]: Bone;
						};
					};
				};
			};
			Dove: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							["hair.01"]: Bone;
							["hair.02"]: Bone;
							["wing.R"]: Bone;
							["feet.R"]: Bone;
							["tail.02"]: Bone;
							["feet.L"]: Bone;
							HeadWear: Bone;
							["wing.L"]: Bone;
							["tail.01"]: Bone;
						};
					};
				};
			};
			SnowOwl: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							["feet.R"]: Bone;
							HeadWear: Bone;
							["tail.01"]: Bone;
							["feet.L"]: Bone;
							["tail.02"]: Bone;
							["wing.R"]: Bone;
							["wing.L"]: Bone;
						};
					};
				};
			};
			Serval: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							["leg.F.L"]: Bone;
							["ear.L"]: Bone;
							["leg.B.R"]: Bone;
							["tail.01"]: Bone & {
								["tail.02"]: Bone;
							};
							HeadWear: Bone;
							["leg.F.R"]: Bone;
							["leg.B.L"]: Bone;
							["ear.R"]: Bone;
						};
					};
				};
			};
			Ferret: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							["leg.F.L"]: Bone;
							["ear.L"]: Bone;
							["leg.B.R"]: Bone;
							["tail.01"]: Bone & {
								["tail.02"]: Bone;
							};
							HeadWear: Bone;
							["leg.F.R"]: Bone;
							["leg.B.L"]: Bone;
							["ear.R"]: Bone;
						};
					};
				};
			};
			Flamingo: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							["feet.R"]: Bone;
							HeadWear: Bone;
							["wing.R"]: Bone;
							["tail.01"]: Bone;
							["feet.L"]: Bone;
							["tail.03"]: Bone;
							["wing.L"]: Bone;
							["tail.02"]: Bone;
						};
					};
				};
			};
			Catfish: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							["fin.R"]: Bone;
							["fin.R.01"]: Bone;
							["fin.02"]: Bone;
							["fin.L.01"]: Bone;
							["fin.01"]: Bone;
							HeadWear: Bone;
							["tail.02"]: Bone;
							["fin.L"]: Bone;
							["fin.03"]: Bone;
							["tail.01"]: Bone;
						};
					};
				};
			};
			SeaOtter: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							["leg.F.L"]: Bone;
							["ear.L"]: Bone;
							["leg.B.R"]: Bone;
							["tail.01"]: Bone & {
								["tail.02"]: Bone;
							};
							HeadWear: Bone;
							["leg.F.R"]: Bone;
							["leg.B.L"]: Bone;
							["ear.R"]: Bone;
						};
					};
				};
			};
			Gorilla: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							["leg.B.L"]: Bone;
							["ear.L"]: Bone;
							["leg.B.R"]: Bone;
							["leg.F.R"]: Bone;
							HeadWear: Bone;
							["leg.F.L"]: Bone;
							["ear.R"]: Bone;
						};
					};
				};
			};
			Carp: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							["fin.L"]: Bone;
							HeadWear: Bone;
							["fin.02"]: Bone;
							["tail.01"]: Bone;
							["fin.R"]: Bone;
							["fin.03"]: Bone;
							["fin.01"]: Bone;
							["tail.02"]: Bone;
						};
					};
				};
			};
			GoldenEagle: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							["hair.01"]: Bone;
							["hair.02"]: Bone;
							["wing.R"]: Bone;
							["feet.R"]: Bone;
							["tail.02"]: Bone;
							["feet.L"]: Bone;
							HeadWear: Bone;
							["wing.L"]: Bone;
							["tail.01"]: Bone;
						};
					};
				};
			};
			Squid: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							["tentacle.04.L"]: Bone;
							["tentacle.02.L"]: Bone;
							["tentacle.03.R"]: Bone;
							["tentacle.01.L"]: Bone;
							["tentacle.04.R"]: Bone;
							["tail.01"]: Bone;
							["tentacle.03.L"]: Bone;
							["tentacle.01.R"]: Bone;
							["tentacle.02.R"]: Bone;
						};
					};
				};
			};
			Reindeer: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							["leg.F.L"]: Bone;
							["ear.L"]: Bone;
							["leg.B.R"]: Bone;
							["tail.01"]: Bone;
							HeadWear: Bone;
							["leg.F.R"]: Bone;
							["leg.B.L"]: Bone;
							["ear.R"]: Bone;
						};
					};
				};
			};
			Beaver: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							["leg.F.L"]: Bone;
							["ear.L"]: Bone;
							["leg.B.R"]: Bone;
							["tail.01"]: Bone & {
								["tail.02"]: Bone;
							};
							HeadWear: Bone;
							["leg.F.R"]: Bone;
							["leg.B.L"]: Bone;
							["ear.R"]: Bone;
						};
					};
				};
			};
			Husky: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							["leg.F.L"]: Bone;
							["ear.L"]: Bone;
							["leg.B.R"]: Bone;
							["tail.01"]: Bone & {
								["tail.02"]: Bone;
							};
							HeadWear: Bone;
							["leg.F.R"]: Bone;
							["leg.B.L"]: Bone;
							["ear.R"]: Bone;
						};
					};
				};
			};
			Rattlesnake: Model & {
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
			};
			Rabbit: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							["leg.F.L"]: Bone;
							["ear.L"]: Bone;
							["leg.B.R"]: Bone;
							["tail.01"]: Bone;
							HeadWear: Bone;
							["leg.F.R"]: Bone;
							["leg.B.L"]: Bone;
							["ear.R"]: Bone;
						};
					};
				};
			};
			Parrot: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							["hair.01"]: Bone;
							["hair.02"]: Bone;
							["wing.R"]: Bone;
							["feet.R"]: Bone;
							["tail.02"]: Bone;
							["feet.L"]: Bone;
							HeadWear: Bone;
							["wing.L"]: Bone;
							["tail.01"]: Bone;
						};
					};
				};
			};
			Pronghorn: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							["leg.F.L"]: Bone;
							["ear.L"]: Bone;
							["leg.B.R"]: Bone;
							["tail.01"]: Bone;
							HeadWear: Bone;
							["leg.F.R"]: Bone;
							["leg.B.L"]: Bone;
							["ear.R"]: Bone;
						};
					};
				};
			};
			Cow: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							["leg.F.L"]: Bone;
							["ear.L"]: Bone;
							["leg.B.R"]: Bone;
							["tail.01"]: Bone & {
								["tail.02"]: Bone;
							};
							HeadWear: Bone;
							["leg.F.R"]: Bone;
							["leg.B.L"]: Bone;
							["ear.R"]: Bone;
						};
					};
				};
			};
			Hamster: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							["leg.F.L"]: Bone;
							["ear.L"]: Bone;
							["leg.B.R"]: Bone;
							["tail.01"]: Bone;
							HeadWear: Bone;
							["leg.F.R"]: Bone;
							["leg.B.L"]: Bone;
							["ear.R"]: Bone;
						};
					};
				};
			};
			Prawn: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							["arm.R.03"]: Bone & {
								["arm.R.04"]: Bone;
							};
							["leg.R.02"]: Bone;
							["antennae.R.01"]: Bone & {
								["antennae.R.02"]: Bone;
							};
							["arm.R.01"]: Bone & {
								["arm.R.02"]: Bone;
							};
							["arm.L.03"]: Bone & {
								["arm.L.04"]: Bone;
							};
							["leg.L.01"]: Bone;
							["tail.01"]: Bone & {
								["tail.02"]: Bone;
							};
							["antennae.L.01"]: Bone & {
								["antennae.L.02"]: Bone;
							};
							["arm.L.01"]: Bone & {
								["arm.L.02"]: Bone;
							};
							["leg.R.01"]: Bone;
							["leg.L.02"]: Bone;
							["leg.R.03"]: Bone;
							["leg.L.03"]: Bone;
						};
					};
				};
			};
			Javelina: Model & {
				HumanoidRootPart: MeshPart & {
					body: Bone & {
						["leg.F.L"]: Bone;
						["ear.L"]: Bone;
						["leg.B.R"]: Bone;
						["tail.01"]: Bone;
						HeadWear: Bone;
						["leg.B.L"]: Bone;
						["leg.F.R"]: Bone;
						["ear.R"]: Bone;
					};
				};
			};
			Elephant: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							["leg.F.L"]: Bone;
							["leg.B.R"]: Bone;
							["ear.R"]: Bone;
							["leg.B.L"]: Bone;
							["ear.L"]: Bone;
							["leg.F.R"]: Bone;
							HeadWear: Bone;
							["trunk.01"]: Bone & {
								["trunk.02"]: Bone & {
									["trunk.03"]: Bone & {
										["trunk.04"]: Bone;
									};
								};
							};
							["tail.01"]: Bone;
						};
					};
				};
			};
			Kangaroo: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							["leg.B.L"]: Bone;
							["ear.L"]: Bone;
							["leg.B.R"]: Bone;
							["tail.01"]: Bone & {
								["tail.02"]: Bone;
							};
							["arm.R"]: Bone;
							["arm.L"]: Bone;
							["ear.R"]: Bone;
						};
					};
				};
			};
			Bat: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							["feet.R"]: Bone;
							["ear.L"]: Bone;
							HeadWear: Bone;
							["feet.L"]: Bone;
							["wing.R"]: Bone;
							["wing.L"]: Bone;
							["ear.R"]: Bone;
						};
					};
				};
			};
			Herring: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							["fin.L"]: Bone;
							HeadWear: Bone;
							["tail.02"]: Bone;
							["fin.02"]: Bone;
							["fin.R"]: Bone;
							["tail.01"]: Bone;
							["fin.01"]: Bone;
							["fin.03"]: Bone;
						};
					};
				};
			};
			Numbat: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							["leg.F.L"]: Bone;
							["ear.L"]: Bone;
							["leg.B.R"]: Bone;
							["tail.01"]: Bone & {
								["tail.02"]: Bone;
							};
							HeadWear: Bone;
							["leg.F.R"]: Bone;
							["leg.B.L"]: Bone;
							["ear.R"]: Bone;
						};
					};
				};
			};
			Goose: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							["feet.R"]: Bone;
							HeadWear: Bone;
							["tail.01"]: Bone;
							["feet.L"]: Bone;
							["wing.R"]: Bone;
							["wing.L"]: Bone;
							["tail.02"]: Bone;
						};
					};
				};
			};
			Dog: Model & {
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
							HeadWear: Bone;
							["leg.F.R"]: Bone;
							["leg.B.L"]: Bone;
							["ear.R"]: Bone & {
								["ear.R.01"]: Bone;
							};
						};
					};
				};
			};
			Camel: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							["leg.F.L"]: Bone;
							["ear.L"]: Bone;
							["leg.B.R"]: Bone;
							["tail.01"]: Bone & {
								["tail.02"]: Bone;
							};
							HeadWear: Bone;
							["leg.F.R"]: Bone;
							["leg.B.L"]: Bone;
							["ear.R"]: Bone;
						};
					};
				};
			};
			Badger: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							["leg.F.L"]: Bone;
							["ear.L"]: Bone;
							["leg.B.R"]: Bone;
							["tail.01"]: Bone & {
								["tail.02"]: Bone;
							};
							HeadWear: Bone;
							["leg.F.R"]: Bone;
							["leg.B.L"]: Bone;
							["ear.R"]: Bone;
						};
					};
				};
			};
			Owl: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							["feet.R"]: Bone;
							HeadWear: Bone;
							["tail.01"]: Bone;
							["feet.L"]: Bone;
							["tail.02"]: Bone;
							["wing.R"]: Bone;
							["wing.L"]: Bone;
						};
					};
				};
			};
			Horse: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							["leg.F.L"]: Bone;
							["ear.L"]: Bone;
							["leg.B.R"]: Bone;
							["tail.01"]: Bone & {
								["tail.02"]: Bone;
							};
							HeadWear: Bone;
							["leg.F.R"]: Bone;
							["leg.B.L"]: Bone;
							["ear.R"]: Bone;
						};
					};
				};
			};
			Buffalo: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							["leg.F.L"]: Bone;
							["ear.L"]: Bone;
							["leg.B.R"]: Bone;
							["tail.01"]: Bone & {
								["tail.02"]: Bone;
							};
							HeadWear: Bone;
							["leg.F.R"]: Bone;
							["leg.B.L"]: Bone;
							["ear.R"]: Bone;
						};
					};
				};
			};
			Sardine: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							["fin.L"]: Bone;
							HeadWear: Bone;
							["tail.02"]: Bone;
							["fin.02"]: Bone;
							["fin.R"]: Bone;
							["tail.01"]: Bone;
							["fin.01"]: Bone;
							["fin.03"]: Bone;
						};
					};
				};
			};
			Chimp: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							["leg.B.L"]: Bone;
							["ear.L"]: Bone;
							["leg.B.R"]: Bone;
							["leg.F.R"]: Bone;
							HeadWear: Bone;
							["leg.F.L"]: Bone;
							["ear.R"]: Bone;
						};
					};
				};
			};
			OrangUtan: Model & {
				HumanoidRootPart: MeshPart & {
					body: Bone & {
						["leg.F.L"]: Bone;
						["ear.L"]: Bone;
						["leg.B.R"]: Bone;
						["leg.F.R"]: Bone;
						HeadWear: Bone;
						["leg.B.L"]: Bone;
						["ear.R"]: Bone;
					};
				};
			};
			Duck: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							["hair.01"]: Bone;
							["hair.02"]: Bone;
							["wing.R"]: Bone;
							["feet.R"]: Bone;
							["tail.02"]: Bone;
							["feet.L"]: Bone;
							HeadWear: Bone;
							["wing.L"]: Bone;
							["tail.01"]: Bone;
						};
					};
				};
			};
			Fox: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							["leg.F.L"]: Bone;
							["ear.L"]: Bone;
							["leg.B.R"]: Bone;
							["tail.01"]: Bone & {
								["tail.02"]: Bone;
							};
							HeadWear: Bone;
							["leg.F.R"]: Bone;
							["leg.B.L"]: Bone;
							["ear.R"]: Bone;
						};
					};
				};
			};
			Gaur: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							["leg.F.L"]: Bone;
							["ear.L"]: Bone;
							["leg.B.R"]: Bone;
							["tail.01"]: Bone & {
								["tail.02"]: Bone;
							};
							HeadWear: Bone;
							["leg.F.R"]: Bone;
							["leg.B.L"]: Bone;
							["ear.R"]: Bone;
						};
					};
				};
			};
			Iguana: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							["leg.B.L"]: Bone;
							["leg.B.R"]: Bone;
							["tail.01"]: Bone & {
								["tail.02"]: Bone;
							};
							HeadWear: Bone;
							["leg.F.L"]: Bone;
							["leg.F.R"]: Bone;
						};
					};
				};
			};
			Octopus: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							["tentacle.L.02"]: Bone & {
								["tentacle.L.06"]: Bone;
							};
							["tentacle.R.02"]: Bone & {
								["tentacle.R.06"]: Bone;
							};
							["tentacle.L.01"]: Bone & {
								["tentacle.L.05"]: Bone;
							};
							["tentacle.L.04"]: Bone & {
								["tentacle.L.08"]: Bone;
							};
							["tentacle.R.01"]: Bone & {
								["tentacle.R.05"]: Bone;
							};
							["tentacle.R.04"]: Bone & {
								["tentacle.R.08"]: Bone;
							};
							["tentacle.R.03"]: Bone & {
								["tentacle.R.07"]: Bone;
							};
							["tentacle.L.03"]: Bone & {
								["tentacle.L.07"]: Bone;
							};
						};
					};
				};
			};
			Baboon: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							["leg.F.L"]: Bone;
							["ear.L"]: Bone;
							["leg.B.R"]: Bone;
							["tail.01"]: Bone & {
								["tail.02"]: Bone;
							};
							HeadWear: Bone;
							["leg.F.R"]: Bone;
							["leg.B.L"]: Bone;
							["ear.R"]: Bone;
						};
					};
				};
			};
			Mousedeer: Model & {
				HumanoidRootPart: MeshPart & {
					body: Bone & {
						["leg.B.L"]: Bone;
						["ear.L"]: Bone;
						["leg.B.R"]: Bone;
						["tail.01"]: Bone;
						HeadWear: Bone;
						["leg.F.R"]: Bone;
						["leg.F.L"]: Bone;
						["ear.R"]: Bone;
					};
				};
			};
			Lynx: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							["leg.F.L"]: Bone;
							["ear.L"]: Bone;
							["leg.B.R"]: Bone;
							["tail.01"]: Bone & {
								["tail.02"]: Bone;
							};
							HeadWear: Bone;
							["leg.F.R"]: Bone;
							["leg.B.L"]: Bone;
							["ear.R"]: Bone;
						};
					};
				};
			};
			Cat: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							["leg.F.L"]: Bone;
							["ear.L"]: Bone;
							["leg.B.R"]: Bone;
							["tail.01"]: Bone & {
								["tail.02"]: Bone;
							};
							HeadWear: Bone;
							["leg.F.R"]: Bone;
							["leg.B.L"]: Bone;
							["ear.R"]: Bone;
						};
					};
				};
			};
			Cobra: Model & {
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
			};
			HornedLizard: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							["leg.B.L"]: Bone;
							["leg.B.R"]: Bone;
							["tail.01"]: Bone & {
								["tail.02"]: Bone;
							};
							HeadWear: Bone;
							["leg.F.L"]: Bone;
							["leg.F.R"]: Bone;
						};
					};
				};
			};
			Lion: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							["leg.F.L"]: Bone;
							["ear.L"]: Bone;
							["leg.B.R"]: Bone;
							["tail.01"]: Bone & {
								["tail.02"]: Bone;
							};
							HeadWear: Bone;
							["leg.F.R"]: Bone;
							["leg.B.L"]: Bone;
							["ear.R"]: Bone;
						};
					};
				};
			};
			Jackrabbit: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							["leg.F.L"]: Bone;
							["ear.L"]: Bone;
							["leg.B.R"]: Bone;
							["tail.01"]: Bone;
							HeadWear: Bone;
							["leg.F.R"]: Bone;
							["leg.B.L"]: Bone;
							["ear.R"]: Bone;
						};
					};
				};
			};
			Beluga: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							["fin.L"]: Bone;
							HeadWear: Bone;
							["fin.R"]: Bone;
							["tail.01"]: Bone & {
								["tail.02"]: Bone;
							};
						};
					};
				};
			};
			Kookaburra: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							["hair.01"]: Bone;
							["hair.02"]: Bone;
							["wing.R"]: Bone;
							["feet.R"]: Bone;
							["tail.02"]: Bone;
							["feet.L"]: Bone;
							HeadWear: Bone;
							["wing.L"]: Bone;
							["tail.01"]: Bone;
						};
					};
				};
			};
			Bighorn: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							["leg.F.L"]: Bone;
							["ear.L"]: Bone;
							["leg.B.R"]: Bone;
							["tail.01"]: Bone;
							HeadWear: Bone;
							["leg.F.R"]: Bone;
							["leg.B.L"]: Bone;
							["ear.R"]: Bone;
						};
					};
				};
			};
			Koala: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							["leg.B.L"]: Bone;
							["ear.L"]: Bone;
							["leg.B.R"]: Bone;
							["leg.F.R"]: Bone;
							HeadWear: Bone;
							["leg.F.L"]: Bone;
							["ear.R"]: Bone;
						};
					};
				};
			};
			Cheetah: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							["leg.F.L"]: Bone;
							["ear.L"]: Bone;
							["leg.B.R"]: Bone;
							["tail.01"]: Bone & {
								["tail.02"]: Bone;
							};
							HeadWear: Bone;
							["leg.F.R"]: Bone;
							["leg.B.L"]: Bone;
							["ear.R"]: Bone;
						};
					};
				};
			};
			Jackal: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							["leg.F.L"]: Bone;
							["ear.L"]: Bone;
							["leg.B.R"]: Bone;
							["tail.01"]: Bone & {
								["tail.02"]: Bone;
							};
							HeadWear: Bone;
							["leg.F.R"]: Bone;
							["leg.B.L"]: Bone;
							["ear.R"]: Bone;
						};
					};
				};
			};
			Bandicoot: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							["leg.F.L"]: Bone;
							["ear.L"]: Bone;
							["leg.B.R"]: Bone;
							["tail.01"]: Bone;
							HeadWear: Bone;
							["leg.F.R"]: Bone;
							["leg.B.L"]: Bone;
							["ear.R"]: Bone;
						};
					};
				};
			};
			Wildebeest: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							["leg.F.L"]: Bone;
							["ear.L"]: Bone;
							["leg.B.R"]: Bone;
							["tail.01"]: Bone & {
								["tail.02"]: Bone;
							};
							HeadWear: Bone;
							["leg.F.R"]: Bone;
							["leg.B.L"]: Bone;
							["ear.R"]: Bone;
						};
					};
				};
			};
			Hippo: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							["leg.F.L"]: Bone;
							["ear.L"]: Bone;
							["leg.B.R"]: Bone;
							["tail.01"]: Bone;
							HeadWear: Bone;
							["leg.F.R"]: Bone;
							["leg.B.L"]: Bone;
							["ear.R"]: Bone;
						};
					};
				};
			};
			Crow: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							["hair.01"]: Bone;
							["hair.02"]: Bone;
							["wing.R"]: Bone;
							["feet.R"]: Bone;
							["tail.02"]: Bone;
							["feet.L"]: Bone;
							HeadWear: Bone;
							["wing.L"]: Bone;
							["tail.01"]: Bone;
						};
					};
				};
			};
			Pigeon: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							["hair.01"]: Bone;
							["hair.02"]: Bone;
							["wing.R"]: Bone;
							["feet.R"]: Bone;
							["tail.02"]: Bone;
							["feet.L"]: Bone;
							HeadWear: Bone;
							["wing.L"]: Bone;
							["tail.01"]: Bone;
						};
					};
				};
			};
			Chick: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							["hair.01"]: Bone;
							["hair.02"]: Bone;
							["wing.R"]: Bone;
							["feet.R"]: Bone;
							["tail.02"]: Bone;
							["feet.L"]: Bone;
							HeadWear: Bone;
							["wing.L"]: Bone;
							["tail.01"]: Bone;
						};
					};
				};
			};
			ArcticFox: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							["leg.F.L"]: Bone;
							["ear.L"]: Bone;
							["leg.B.R"]: Bone;
							["tail.01"]: Bone & {
								["tail.02"]: Bone;
							};
							HeadWear: Bone;
							["leg.F.R"]: Bone;
							["leg.B.L"]: Bone;
							["ear.R"]: Bone;
						};
					};
				};
			};
			Jaguar: Model & {
				HumanoidRootPart: MeshPart & {
					body: Bone & {
						["leg.B.L"]: Bone;
						["ear.L"]: Bone;
						["leg.B.R"]: Bone;
						["tail.01"]: Bone & {
							["tail.02"]: Bone;
						};
						HeadWear: Bone;
						["leg.F.R"]: Bone;
						["leg.F.L"]: Bone;
						["ear.R"]: Bone;
					};
				};
			};
			GilaMonster: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							["leg.B.L"]: Bone;
							["leg.B.R"]: Bone;
							["tail.01"]: Bone & {
								["tail.02"]: Bone;
							};
							HeadWear: Bone;
							["leg.F.L"]: Bone;
							["leg.F.R"]: Bone;
						};
					};
				};
			};
			FennecFox: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							["leg.F.L"]: Bone;
							["ear.L"]: Bone;
							["leg.B.R"]: Bone;
							["tail.01"]: Bone & {
								["tail.02"]: Bone;
							};
							HeadWear: Bone;
							["leg.F.R"]: Bone;
							["leg.B.L"]: Bone;
							["ear.R"]: Bone;
						};
					};
				};
			};
			Echidna: Model & {
				HumanoidRootPart: MeshPart & {
					root: Bone & {
						body: Bone & {
							["leg.F.L"]: Bone;
							["leg.B.R"]: Bone;
							["leg.F.R"]: Bone;
							HeadWear: Bone;
							["leg.B.L"]: Bone;
						};
					};
				};
			};
		};
		CameraParticles: Folder & {
			GoldBalloonCameraParticles: Part & {
				Main: Attachment & {
					Lines: ParticleEmitter;
				};
				Stars: ParticleEmitter;
			};
		};
		GoldenBalloon: MeshPart;
		Obstacles: Folder & {
			Balloon: MeshPart;
			Bullet: MeshPart;
			TipToeTile: MeshPart;
			Dizzy: Part & {
				Base: Attachment;
			};
		};
		Beams: Model & {
			Beams: Folder & {
				CREDITS: Script;
			};
			Delete: Part & {
				Decal: Decal;
			};
		};
		Balloons: Folder & {
			HotAirBalloon: MeshPart;
			RedBalloon: MeshPart;
		};
		SectionDesign: Folder & {
			Section_1: Folder;
		};
		Cloud: MeshPart;
		Skins: Folder & {
			Icons: Folder & {
				IndigoSkinPaintBrush: Decal;
				GreenSkinPaintBrush: Decal;
				PurpleSkinPaintBrush: Decal;
				BrownSkinPaintBrush: Decal;
				BlueSkinPaintBrush: Decal;
				CheetahSkinPaintBrush: Decal;
				FlamingoSkinPaintBrush: Decal;
				RedSkinPaintBrush: Decal;
				CyanSkinPaintBrush: Decal;
			};
			Textures: Folder & {
				Snake: StringValue;
				Flamingo: StringValue;
				Hornbill: StringValue;
				Owl: StringValue;
				Ox: StringValue;
				Penguin: StringValue;
				Cheetah: StringValue;
				Eagle: StringValue;
				Cow: StringValue;
				Ostrich: StringValue;
				Goldfish: StringValue;
				Zebra: StringValue;
				Tortoise: StringValue;
				Mice: StringValue;
				Pig: StringValue;
				Donkey: StringValue;
				Hyena: StringValue;
				Buffalo: StringValue;
				Duck: StringValue;
				Fox: StringValue;
				Crow: StringValue;
				Hog: StringValue;
				Elephant: StringValue;
				Dove: StringValue;
				Cat: StringValue;
				Rhino: StringValue;
				Hippo: StringValue;
				Wolf: StringValue;
				Antelope: StringValue;
				Red: StringValue;
				Chicken: StringValue;
				Rabbit: StringValue;
				Reindeer: StringValue;
				Parrot: StringValue;
				Walrus: StringValue;
				Sheep: StringValue;
				Rooster: StringValue;
				SeaLion: StringValue;
				Raccoon: StringValue;
				Pigeon: StringValue;
				Chick: StringValue;
				ArcticFox: StringValue;
				SnowOwl: StringValue;
				SnowWeasel: StringValue;
				Dog: StringValue;
				PolarBear: StringValue;
			};
		};
		Pets: Folder & {
			Toasty: MeshPart;
		};
		Particles: Folder & {
			Bubbles: Part & {
				BubbleParticles: ParticleEmitter;
			};
			Checkpoint: Part & {
				Lines: ParticleEmitter;
				Lines2: ParticleEmitter;
				Main: Attachment;
			};
			Poof: Part & {
				Roblox: ParticleEmitter;
			};
		};
		Accessories: Folder & {
			Backwear: Folder & {
				Board: MeshPart & {
					Attachment: Attachment;
				};
			};
			Headwear: Folder & {
				Horse: MeshPart & {
					Attachment: Attachment;
				};
				FancyTophat: MeshPart & {
					Attachment: Attachment;
				};
				SnakeHelmet: MeshPart & {
					Attachment: Attachment;
				};
				Bowler: MeshPart & {
					Attachment: Attachment;
				};
				MrChicken: MeshPart & {
					Attachment: Attachment;
				};
				Headband: MeshPart & {
					Attachment: Attachment;
				};
				Party: MeshPart & {
					Attachment: Attachment;
				};
				Luffy: MeshPart & {
					Attachment: Attachment;
				};
			};
			Facewear: Folder & {
				mask3: MeshPart & {
					Attachment: Attachment;
				};
				Mask2: MeshPart & {
					Attachment: Attachment;
				};
				happy2: MeshPart & {
					Attachment: Attachment;
				};
				Glasses2: MeshPart & {
					Attachment: Attachment;
				};
				Glasses: MeshPart & {
					Attachment: Attachment;
				};
				mask: MeshPart & {
					Attachment: Attachment;
				};
				happy: MeshPart & {
					Attachment: Attachment;
				};
				Mask4: MeshPart & {
					Attachment: Attachment;
				};
			};
		};
	};
	GameSettings: Folder & {
		Tilt: NumberValue;
		TiltRate: NumberValue;
		TestSpawn: BoolValue;
	};
}
