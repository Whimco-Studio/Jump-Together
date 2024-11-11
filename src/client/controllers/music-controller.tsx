//!optimize 2

import { Controller, OnInit, OnStart } from "@flamework/core";
import type { LogClass } from "@rbxts/rbxts-sleitnick-log";
import { SoundService } from "@rbxts/services";

@Controller({})
export class MusicController implements OnInit, OnStart {
	private sound: Sound = new Instance("Sound");
	private music: { Id: string; Name: string }[] = [];
	public constructor(private readonly log: LogClass) {
		this.music = [
			{ Id: "rbxassetid://110986541299675", Name: "A Chill Time" },
			{ Id: "rbxassetid://18541165926", Name: "A Frog Summer" },
			{ Id: "rbxassetid://116949460005886", Name: "Getting The Mail" },
		];
	}

	public onInit() {
		this.sound.Parent = SoundService;
	}

	public onStart() {
		while (true) {
			for (const music of this.music) {
				this.sound.SoundId = music.Id;
				this.sound.Loaded.Wait();
				this.sound.Play();
				this.sound.Ended.Wait();
			}
		}
	}
}
