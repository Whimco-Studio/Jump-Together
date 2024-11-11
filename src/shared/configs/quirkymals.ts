import { ReplicatedStorage } from "@rbxts/services";

export const QUIRKYMALS = ReplicatedStorage.Assets.Quirkymals.GetChildren().map((child) => child.Name);
export type Quirkymal = keyof Omit<typeof ReplicatedStorage.Assets.Quirkymals, keyof Folder>;

export const SKINS = ReplicatedStorage.Assets.Quirkymals.GetChildren().map((child) => child.Name);
export type Skin = Quirkymal;
