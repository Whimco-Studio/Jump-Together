import { useProducer, useSelector, UseProducerHook, UseSelectorHook } from "@rbxts/react-reflex";
import { RootStore } from "../stores";

export const useRootProducer: UseProducerHook<RootStore> = useProducer;
export const useRootSelector: UseSelectorHook<RootStore> = useSelector;
export type useRootProducerType = typeof useRootProducer;
