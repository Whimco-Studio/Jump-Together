//!optimize 2

import { Controller, OnInit, OnStart } from "@flamework/core";
import { Object } from "@rbxts/luau-polyfill";
import type { LogClass } from "@rbxts/rbxts-sleitnick-log";
import { clientProducer } from "client/store";
import { GetLobbies } from "shared/store/lobbies/lobbies-selector";
import { observeLobby } from "shared/utils/lobby-observers";

@Controller({})
export class RopeController implements OnInit, OnStart {
	public constructor(private readonly log: LogClass) {}

	public onInit() {}

	public onStart() {
		const unsubscribeCallbacks: (() => void)[] = [];

		clientProducer.subscribe(GetLobbies, (state) => {
			for (const unsubscribe of unsubscribeCallbacks) {
				unsubscribe();
			}

			unsubscribeCallbacks.clear();

			for (const [LobbyID, Lobby] of Object.entries(state)) {
				const unsubscribe = observeLobby(Lobby, (Lobby) => {
					return undefined; // Ensure the function returns undefined
				});

				unsubscribeCallbacks.push(unsubscribe);
			}
		});
	}
}
