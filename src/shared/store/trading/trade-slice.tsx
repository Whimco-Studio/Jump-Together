import { createProducer } from "@rbxts/reflex";

interface TradeSlice {
	TradeSessions: {
		[key: string]: TradeSession;
	};
}

const initialState: TradeSlice = {
	TradeSessions: {},
};

export const tradeSlice = createProducer(initialState, {
	createTradeSession: (state, host: Player, receiver: Player) => {
		const hostId = tostring(host.UserId);
		const newSession: TradeSession = {
			Host: { Player: host, TradeData: {} as TradeData },
			Reciever: { Player: receiver, TradeData: {} as TradeData },
		};
		return {
			...state,
			TradeSessions: { ...state.TradeSessions, [hostId]: newSession },
		};
	},

	// deleteTradeSession: (state, hostId: string) => {
	// 	const { [hostId]: _, ...remainingSessions } = state.TradeSessions;
	// 	return {
	// 		...state,
	// 		TradeSessions: remainingSessions,
	// 	};
	// },

	modifyTradeItem: (
		state,
		hostId: string,
		participant: "Host" | "Reciever",
		slotNumber: TradeSlot,
		itemData: { Amount: string; ItemId: string },
	) => {
		if (!state.TradeSessions[hostId]) return state;
		return {
			...state,
			TradeSessions: {
				...state.TradeSessions,
				[hostId]: {
					...state.TradeSessions[hostId],
					[participant]: {
						...state.TradeSessions[hostId][participant],
						TradeData: {
							...state.TradeSessions[hostId][participant].TradeData,
							[slotNumber]: itemData,
						},
					},
				},
			},
		};
	},

	modifyTradeSession: (state, hostId: string, updatedSession: Partial<TradeSession>) => {
		if (!state.TradeSessions[hostId]) return state;
		return {
			...state,
			TradeSessions: {
				...state.TradeSessions,
				[hostId]: { ...state.TradeSessions[hostId], ...updatedSession },
			},
		};
	},
});
