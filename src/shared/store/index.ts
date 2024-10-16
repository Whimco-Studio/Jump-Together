import { equipmentSlice } from "./equipment/equipment-slice";
import { lobbiesSlice } from "./lobbies/lobbies-slice";
import { petSlice } from "./pet/pet-slice";
import { templateSlice } from "./template/template-slice";
import { tradeSlice } from "./trading/trade-slice";
import { createBinarySerializer } from "@rbxts/flamework-binary-serializer";
import { CombineStates } from "@rbxts/reflex";

export type SharedState = CombineStates<typeof slices>;
export type SerializedSharedState = ReturnType<typeof stateSerDes.serialize>;

export const stateSerDes = createBinarySerializer<SharedState>();

export const slices = {
	equipment: equipmentSlice,
	lobbies: lobbiesSlice,
	pet: petSlice,
	template: templateSlice,
	trading: tradeSlice,
};
