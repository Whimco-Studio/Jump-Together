import { clientProducer } from "client/store";

export const useStore = () => {
	return clientProducer;
};
