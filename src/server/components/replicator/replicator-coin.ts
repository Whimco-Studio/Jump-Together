//!optimize 2

import { BaseComponent, Component } from "@flamework/components";
import { OnStart } from "@flamework/core";
import type { LogClass } from "@rbxts/rbxts-sleitnick-log";
import { HttpService, Players } from "@rbxts/services";
import { serverProducer } from "server/store";

interface Attributes {
	Collected: boolean;
	ServerCollected: boolean;
}

const CoinCollectDuration = 10;

@Component({
	defaults: {
		Collected: false,
		ServerCollected: false,
	},
	tag: "Replicator_Coin",
})
export class ReplicatorCoin extends BaseComponent<Attributes, BasePart> implements OnStart {
	public constructor(private readonly log: LogClass) {
		super();
	}

	public onStart() {
		let CanCollect = true;
		this.instance.SetAttribute("ID", HttpService.GenerateGUID(false));

		this.instance.Touched.Connect((other) => {
			const Player = Players.GetPlayerFromCharacter(other.Parent);
			if (Player && CanCollect) {
				CanCollect = false;
				serverProducer.changeBalance(tostring(Player.UserId), "Coins", 1);
				this.instance.SetAttribute("ServerCollected", true);

				task.defer(() => {
					task.wait(CoinCollectDuration);
					CanCollect = true;
					this.instance.SetAttribute("ServerCollected", false);
				});
			}
		});

		this.instance.AddTag("Visuals_Coin");
	}
}
