// Particles.d.ts

/**
 * Represents a class that manages particle systems for a humanoid.
 */
declare namespace Particles {
	/**
	 * Creates a new ParticleClass instance.
	 * @param key - A unique key or an instance to associate with the particle system.
	 * @param Humanoid - The humanoid object that the particles are attached to.
	 * @param Mesh - The mesh part or an empty table for particle effects.
	 * @param Offset - The offset for the particle effect in relation to the humanoid.
	 * @param CacheLimit - Optional, sets a limit for particle caching. Default is 100.
	 * @returns A new ParticleClass instance.
	 */
	function create(
		key: Instance | string,
		Humanoid: Humanoid,
		Mesh: MeshPart,
		Offset?: CFrame,
		CacheLimit?: number,
	): ParticleClass;

	/**
	 * Creates or reuses a cached particle intended for linear direction.
	 * @param key - The unique key or table associated with the particle.
	 */
	function CreateParticle(key: ParticleClass | string): void;

	/**
	 * Creates or reuses a cached particle intended for radial spread.
	 * @param key - The unique key or table associated with the particle.
	 * @param Destination - The destination for the radial particle.
	 */
	function CreateRadialParticle(key: ParticleClass | string, Destination: Vector3): void;

	/**
	 * Creates particles in a radius. Called after the humanoid's Landed event has been fired.
	 * @param key - The unique key or table associated with the particle.
	 */
	function Landed(key: ParticleClass | string): void;

	/**
	 * Connects the particle system to humanoid events such as MoveDirection and StateChanged.
	 * @param key - The unique key or table associated with the particle.
	 */
	function Connect(key: ParticleClass | string): void;

	/**
	 * Disconnects connections created and stored during Connect().
	 * @param key - The unique key or table associated with the particle.
	 * @param Connection - (Optional) Specific connection to disconnect. If omitted, all connections are disconnected.
	 */
	function Disconnect(key: ParticleClass | string, Connection?: string): void;

	/**
	 * Destroys the particle system and clears all cached particles.
	 * @param key - The unique key or table associated with the particle.
	 */
	function Destroy(key: ParticleClass | string): void;

	/**
	 * Toggles the particle system on or off.
	 * @param key - The unique key or table associated with the particle.
	 * @param Activate - Whether to activate or deactivate the particle system.
	 */
	function Toggle(key: ParticleClass | string, Activate: boolean): void;

	/**
	 * Represents a dictionary of connections associated with the particle system.
	 */
	type Connections = { [key: string]: RBXScriptConnection };

	/**
	 * Represents a class that manages particle systems for a humanoid.
	 */
	type ParticleClass = {
		Active: boolean;
		Base: BasePart;
		Cache: BasePart[];

		CacheLimit: number;
		CanCreateParticle: boolean;
		Connections: Connections;

		Humanoid: Humanoid;
		Mesh: BasePart | MeshPart;
		key: string;
	};
}

export = Particles;
