// Particle.d.ts
declare namespace Particle {
	/**
	 * Toggles the emitters of ParticleEmitter or Beam objects found in the descendants of the Parent.
	 * @param Parent - The parent instance whose descendants will be checked.
	 * @param State - A boolean to enable or disable the emitters.
	 */
	function ToggleEmitters(Parent: Instance, State: boolean): void;

	/**
	 * Creates a particle effect and attaches it to a given parent object.
	 * @param ParticleName - The name of the particle effect to be created (must exist in ReplicatedStorage.Assets.Particles).
	 * @param Parent - The instance to which the particle effect will be attached.
	 */
	function Create(ParticleName: string, Parent: BasePart): void;
}

export = Particle;
