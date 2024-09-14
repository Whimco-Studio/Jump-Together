import { Service, OnStart, OnInit } from "@flamework/core";
import { Players, ReplicatedStorage, ServerStorage, Workspace } from "@rbxts/services";
import { Events } from "server/network";

@Service({})
export class QuirkymalService implements OnStart, OnInit {
	private Characters: { [key: number]: Model } = {};
	private SaveSpawns: { [key: number]: BasePart } = {};
	private Spawn = Workspace.FindFirstChild("Spawn", true) as BasePart;
	private CharactersGroup: Instance =
		Workspace.FindFirstChild("Characters", true) || (new Instance("Model", Workspace) as Instance);

	onInit() {
		Players.PlayerAdded.Connect((player) => {
			player.CharacterAdded.Connect((character: Model) => {
				this.SpawnPlayer(player, character);
			});

			this.playerAttributeEvents(player);
			this.addCharacter(player);
		});
	}

	onStart() {}

	private playerAttributeEvents(player: Player) {
		player.GetAttributeChangedSignal("Quirkymal").Connect((value: unknown) => {
			this.addCharacter(player);
		});

		this.chatCommand(player);
	}

	private addCharacter(player: Player) {
		const PreviousCharacter = this.Characters[player.UserId] || player.Character;

		if (PreviousCharacter) {
			PreviousCharacter.Destroy();
		}

		const playerQuirkymal = player.GetAttribute("Quirkymal") as string;
		const StarterCharacterRig = ServerStorage.FindFirstChild("StarterCharacter")?.Clone() as Model & {
			Humanoid: Humanoid;
			HumanoidRootPart: BasePart;
		};

		if (StarterCharacterRig) {
			StarterCharacterRig.HumanoidRootPart.Transparency = 0.5;
			StarterCharacterRig.SetAttribute("Quirkymal", playerQuirkymal !== undefined ? playerQuirkymal : "Dove");
			StarterCharacterRig.Name = player.DisplayName;
		}

		StarterCharacterRig.Humanoid.JumpPower = 30;

		this.Characters[player.UserId] = StarterCharacterRig;
		player.Character = StarterCharacterRig;
	}

	private SpawnPlayer(player: Player, character: Model) {
		const SaveSpawn = this.SaveSpawns[player.UserId];

		if (SaveSpawn) {
			character.PivotTo(SaveSpawn.CFrame.mul(new CFrame(0, 5.5, 0)));
		} else {
			character.PivotTo(this.Spawn.CFrame.mul(new CFrame(0, 5.5, 0)));
		}

		character.Parent = this.CharactersGroup;

		Events.spawn.broadcast(player, character);
	}

	private chatCommand(player: Player) {
		player.Chatted.Connect((message: string, recipient?: Player) => {
			if (!recipient) {
				try {
					const [quirkymalName, number] = message.gsub("^%l", string.upper);

					print(ReplicatedStorage.Assets.Quirkymals.FindFirstChild(quirkymalName));

					if (ReplicatedStorage.Assets.Quirkymals.FindFirstChild(quirkymalName)) {
						player.SetAttribute("Quirkymal", message);
					}
				} catch (error) {
					warn(`Error setting Quirkymal attribute: ${error}`);
				}
			}
		});
	}
}
