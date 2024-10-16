interface TradeSlice {
	TradeSessions: {
		[key: string]: TradeSession;
	};
}

interface TradeSession {
	Host: {
		Player: Player;
		TradeData: TradeData;
	};
	Reciever: {
		Player: Player;
		TradeData: TradeData;
	};
}

type TradeSlot = 1 | 2 | 3 | 4 | 5 | 6;

interface TradeItem {
	Amount: string;
	ItemId: string;
}

interface TradeData {
	1: TradeItem | undefined;
	2: TradeItem | undefined;
	3: TradeItem | undefined;
	4: TradeItem | undefined;
	5: TradeItem | undefined;
	6: TradeItem | undefined;
}
