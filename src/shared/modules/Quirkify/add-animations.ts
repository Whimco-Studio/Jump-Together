// Created Date: Tuesday June 25th 2024 1:22:32 pm CEST
// Author: Trendon Robinson at <The_Pr0fessor (Rbx), @TPr0fessor (Twitter)>
// -------
// Last Modified: Friday July 12th 2024 1:35:43 pm CEST
// Modified By: Trendon Robinson at <The_Pr0fessor (Rbx), @TPr0fessor (Twitter)>

import Animations from "../quirkymal-animations";

// Services
const ReplicatedStorage = game.GetService("ReplicatedStorage");

// Variables
const AnimationPrefix = "rbxassetid://";
const userEmoteToRunThresholdChange = false; // Assuming you set this flag somewhere

// AddAnimations class definition
class AddAnimations {
	character!: Model;
	humanoid!: Humanoid;
	animator!: Animator;
	animationMap!: { [key: string]: number };
	loadedAnimations!: { [key: string]: AnimationTrack };
	currentAnimation!: string | undefined;
	currentAnimTrack!: AnimationTrack | undefined;
	currentAnimKeyframeHandler: RBXScriptConnection | undefined;
	pose!: string;
	currentlyPlayingEmote!: boolean;
	emoteNames!: { [key: string]: boolean };

	constructor(character: Model, animator: Animator, quirkymal: string) {
		if (!character) {
			return;
		}

		this.character = character;
		this.humanoid = character.Parent?.WaitForChild("Humanoid") as Humanoid;
		this.animator = animator;
		this.animationMap =
			(Animations[quirkymal as keyof typeof Animations] as typeof Animations.Dove) || Animations.Dove; // Initialize with an empty object if not found
		this.loadedAnimations = {};
		this.currentAnimation = undefined;
		this.currentAnimTrack = undefined;
		this.currentAnimKeyframeHandler = undefined;
		this.pose = "Standing";
		this.currentlyPlayingEmote = false;
		this.emoteNames = {
			cheer: false,
			dance: true,
			dance2: true,
			dance3: true,
			laugh: false,
			point: false,
			wave: false,
		};
		this.connectHumanoidEvents();
	}

	// Load an animation (or retrieve from cache)
	loadAnimation(animationId: number): AnimationTrack {
		const animationIdString = tostring(animationId);
		if (this.loadedAnimations[animationIdString]) {
			return this.loadedAnimations[animationIdString];
		}

		const animation = new Instance("Animation");
		animation.AnimationId = AnimationPrefix + animationId;

		const loadedAnimation = this.animator.LoadAnimation(animation);
		this.loadedAnimations[animationIdString] = loadedAnimation;
		return loadedAnimation;
	}

	// Play animation based on animation name
	playAnimation(animationName: string, transitionTime?: number) {
		if (this.currentAnimation === animationName && this.currentAnimTrack?.IsPlaying) {
			return; // Prevent playing the same animation again
		}

		if (this.currentAnimTrack) {
			this.currentAnimTrack.Stop(transitionTime === undefined ? 0.1 : transitionTime);
			if (this.currentAnimKeyframeHandler) {
				this.currentAnimKeyframeHandler.Disconnect();
				this.currentAnimKeyframeHandler = undefined;
			}
		}

		const animationId = this.animationMap[animationName];

		if (animationId !== undefined) {
			const animation = this.loadAnimation(animationId);
			this.currentAnimTrack = animation;
			this.currentAnimTrack.Play(transitionTime === undefined ? 0.1 : transitionTime);
			this.currentAnimation = animationName;

			this.currentAnimKeyframeHandler = this.currentAnimTrack.KeyframeReached.Connect((keyframeName) => {
				if (keyframeName === "End" && animationName === "Idle1") {
					this.currentAnimTrack?.Play(transitionTime === undefined ? 0.1 : transitionTime);
				}
			});
		}
	}

	// Set animation speed
	setAnimationSpeed(speed: number) {
		if (this.currentAnimTrack) {
			this.currentAnimTrack.AdjustSpeed(speed);
		}
	}

	// Running state handler
	onRunning(speed: number) {
		const movedDuringEmote =
			userEmoteToRunThresholdChange &&
			this.currentlyPlayingEmote &&
			this.humanoid.MoveDirection !== new Vector3(0, 0, 0);
		const speedThreshold = movedDuringEmote ? this.humanoid.WalkSpeed : 0.75;

		if (speed > speedThreshold) {
			const scale = 16;
			this.playAnimation("Walk", 0.2);
			this.setAnimationSpeed(speed / scale);
			this.pose = "Running";
		} else {
			if (
				this.currentAnimation !== undefined &&
				this.emoteNames[this.currentAnimation] === undefined &&
				!this.currentlyPlayingEmote
			) {
				this.playAnimation("Idle1", 0.2);
				this.pose = "Standing";
			}
		}
	}

	// Other state handlers
	onDied() {
		this.playAnimation("Death", 0.1);
		this.pose = "Dead";
	}

	onJumping() {
		this.playAnimation("Jump", 0.1);
		this.pose = "Jumping";
	}

	onClimbing(speed: number) {
		const scale = 5;
		this.playAnimation("Walk", 0.1);
		this.setAnimationSpeed(speed / scale);
		this.pose = "Climbing";
	}

	onGettingUp() {
		this.playAnimation("GetUp", 0.1);
		this.pose = "GettingUp";
	}

	onFreeFall() {
		this.playAnimation("Fly", 0.1);
		this.pose = "FreeFall";
	}

	onFallingDown() {
		this.playAnimation("Fly", 0.1);
		this.pose = "FallingDown";
	}

	onSeated() {
		this.playAnimation("Sit", 0.1);
		this.pose = "Seated";
	}

	onPlatformStanding() {
		this.playAnimation("PlatformStand", 0.1);
		this.pose = "PlatformStanding";
	}

	onSwimming(speed: number) {
		if (speed > 1) {
			const scale = 10;
			this.playAnimation("Swim", 0.4);
			this.setAnimationSpeed(speed / scale);
			this.pose = "Swimming";
		} else {
			this.playAnimation("SwimIdle", 0.4);
			this.pose = "Standing";
		}
	}

	// Check if character should walk after landing
	checkIfShouldWalk() {
		const speed = this.humanoid.WalkSpeed;
		if (speed > 0) {
			this.onRunning(speed);
		} else {
			this.playAnimation("Idle1", 0.2);
			this.pose = "Standing";
		}
	}

	// Connect to Humanoid state events
	connectHumanoidEvents() {
		this.humanoid.Died.Connect(() => {
			this.onDied();
		});
		this.humanoid.Running.Connect((speed) => {
			this.onRunning(speed);
		});
		this.humanoid.Jumping.Connect(() => {
			this.onJumping();
		});
		this.humanoid.Climbing.Connect((speed) => {
			this.onClimbing(speed);
		});
		this.humanoid.GettingUp.Connect(() => {
			this.onGettingUp();
			this.checkIfShouldWalk();
		});
		this.humanoid.FreeFalling.Connect(() => {
			this.onFreeFall();
		});
		this.humanoid.FallingDown.Connect(() => {
			this.onFallingDown();
			this.checkIfShouldWalk();
		});
		this.humanoid.Seated.Connect(() => {
			this.onSeated();
		});
		this.humanoid.PlatformStanding.Connect(() => {
			this.onPlatformStanding();
		});
		this.humanoid.Swimming.Connect((speed) => {
			this.onSwimming(speed);
		});

		this.humanoid.StateChanged.Connect((_oldState, newState) => {
			if (newState === Enum.HumanoidStateType.Landed) {
				this.checkIfShouldWalk();
			}
		});

		// Initial Idle1 animation
		this.playAnimation("Idle1", 0.2);
	}
}

export = AddAnimations;
