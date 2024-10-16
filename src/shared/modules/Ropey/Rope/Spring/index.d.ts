/**
 * Simulates the motion of a spring system
 * @original bhristt
 */

interface Spring<T> {
	readonly Acceleration: T;
	AddOffset(offset: T): void;
	AddVelocity(velocity: T): void;
	Amplitude: T;
	Constant: number;
	Damping: number;
	Destroy(): void;
	ExternalForce: T;
	Frequency: number;

	Goal: T;
	InitialOffset: T;
	InitialVelocity: T;

	Mass: number;
	readonly Offset: T;
	Print(): void;
	Reset(): void;
	SetExternalForce(force: T): void;
	SetFrequency(frequency: number): void;
	SetGoal(goal: T): void;
	SetOffset(offset: T, zeroVelocity?: boolean): void;
	SetOffsetAndAmplitude(offset: T, amplitude: T): void;
	SetOffsetAndMaintainAmplitude(offset: T): void;
	SetVelocity(velocity: T): void;
	SnapToCriticalDamping(): void;
	readonly Velocity: T;
}

/**
 * Creates a new spring system.
 * @param mass Mass of the object
 * @param damping Damping constant
 * @param stiffness Spring constant
 * @param initialOffset Initial offset
 * @param initialVelocity Initial velocity
 * @param goal Target of the spring
 */
declare const Spring: {
	fromFrequency<T>(
		mass: number,
		damping: number,
		frequency: number,
		initialOffset?: T,
		initialVelocity?: T,
		goal?: T,
	): Spring<T>;
	new <T>(
		mass: number,
		damping: number,
		stiffness: number,
		initialOffset?: T,
		initialVelocity?: T,
		goal?: T,
	): Spring<T>;
};

export = Spring;
