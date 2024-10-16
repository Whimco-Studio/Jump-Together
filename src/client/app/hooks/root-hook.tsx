import { UseProducerHook, UseSelectorHook, useProducer, useSelector } from "@rbxts/react-reflex";
import { RootStore } from "client/store";

export const useRootProducer: UseProducerHook<RootStore> = useProducer;
export const useRootSelector: UseSelectorHook<RootStore> = useSelector;
export type useRootProducerType = typeof useRootProducer;
