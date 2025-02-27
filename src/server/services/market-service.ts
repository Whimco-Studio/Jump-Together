//!optimize 2

import { PlayerDataService } from "./player-data-service";
import { OnInit, OnStart, Service } from "@flamework/core";
import type { LogClass } from "@rbxts/rbxts-sleitnick-log";
import { Events } from "server/network";
import { serverProducer } from "server/store";
import { QuirkymalTuning } from "shared/modules/tuning/quirkymals-tuning";

type MarketItem = (typeof QuirkymalTuning)[keyof typeof QuirkymalTuning];
type Quirkymal = keyof typeof QuirkymalTuning;

@Service({})
export class MarketService implements OnInit, OnStart {
	public constructor(
		private readonly log: LogClass,
		private readonly playerDataService: PlayerDataService,
	) {}

	public onInit() {}

	public onStart() {
		this.listenForPurchases();
	}

	private listenForPurchases() {
		Events.BuyQuirkymal.connect((player, quirkymal) => {
			print(`${player.Name} is purchasing ${quirkymal}`);
			this.processQuirkymalPurchase(player, quirkymal);
		});

		Events.BuySkin.connect((player, skin) => {
			this.processSkinPurchase(player, skin);
		});
	}

	private processQuirkymalPurchase(player: Player, quirkymal: string) {
		const item = QuirkymalTuning[quirkymal as keyof typeof QuirkymalTuning];
		const playerData = this.playerDataService.getProfile(player);
		if (!playerData || !item) {
			print(quirkymal);
			return;
		}

		const balance = playerData.Data.balance;
		if (balance.Coins < item.Conditions[0]!.RequiredAmount!) {
			print(`${player.Name} does not have enough coins to purchase ${item.Name}`);
			// serverProducer.changeBalance(tostring(player.UserId), "Coins", 10000);
			return;
		}

		serverProducer.changeBalance(tostring(player.UserId), "Coins", -item.Conditions[0]!.RequiredAmount!);
		serverProducer.unlockQuirkymal(tostring(player.UserId), item.Name as Quirkymal);

		print(`${player.Name} purchased ${item.Name}`);
		print(playerData.Data.quirkymals);
	}

	private processSkinPurchase(player: Player, quirkymal: string) {
		const item = QuirkymalTuning[quirkymal as keyof typeof QuirkymalTuning];
		const playerData = this.playerDataService.getProfile(player);
		if (!playerData) return;

		const balance = playerData.Data.balance;
		if (balance.Coins < item.Conditions[0]!.RequiredAmount!) return;

		serverProducer.changeBalance(tostring(player.UserId), "Coins", -item.Conditions[0]!.RequiredAmount!);
		serverProducer.unlockSkin(tostring(player.UserId), item.Name as Quirkymal);
	}
}
