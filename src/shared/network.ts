import { Networking } from "@flamework/networking";

interface ClientToServerEvents {}

interface ServerToClientEvents {
	spawn: (player: Player, character: Model) => void;
}

interface ClientToServerFunctions {}

interface ServerToClientFunctions {}

export const GlobalEvents = Networking.createEvent<ClientToServerEvents, ServerToClientEvents>();
export const GlobalFunctions = Networking.createFunction<ClientToServerFunctions, ServerToClientFunctions>();
