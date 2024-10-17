// Tween.d.ts
declare namespace Tween {
	interface TweenSettings {
		Delay?: number;
		EasingDirection?: Enum.EasingDirection;
		EasingStyle?: Enum.EasingStyle;
		Reversing?: boolean;
		TimesRepeated?: number;
	}

	/**
	 * Creates a new tween animation for the given object with specified changes and settings.
	 * @param Object - The instance to apply the tween to.
	 * @param Changes - A table of property changes to tween.
	 * @param Time - The duration of the tween in seconds.
	 * @param Settings - Optional settings for the tween including EasingStyle, EasingDirection, TimesRepeated, Reversing, and Delay.
	 * @returns A Tween object that can be played.
	 */
	function create<T>(Object: T, Changes: Partial<T>, Time: number, Settings?: TweenSettings): Tween;
}

export = Tween;
