export function participantsInAnotherTrade(State: TradeSlice, TradeSession: TradeSession): boolean {
	const HostId = tostring(TradeSession.Host.Player.UserId);
	const RecieverId = tostring(TradeSession.Reciever.Player.UserId);

	if (
		State.TradeSessions[HostId as keyof typeof State.TradeSessions] !== undefined ||
		State.TradeSessions[RecieverId as keyof typeof State.TradeSessions]
	) {
		return true;
	}

	return false;
}
