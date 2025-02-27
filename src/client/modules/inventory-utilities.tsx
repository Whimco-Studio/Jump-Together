import { Object } from "@rbxts/luau-polyfill";
import { ReplicatedStorage } from "@rbxts/services";
// import InventoryItemSlot from "client/app/components/JumpTogether/Inventory/InventorySlotsContainer/inventory-item-slot";
import { QuirkymalTuning } from "shared/modules/tuning/quirkymals-tuning";

function PriceToRarity(Price: number): "Common" | "Quirky" | "Rare" | "Special" | "Uncommon" {
	if (Price > 0 && Price <= 500) {
		return "Common";
	}
	if (Price > 500 && Price <= 1000) {
		return "Uncommon";
	}
	if (Price > 1000 && Price <= 2000) {
		return "Rare";
	}
	if (Price > 2000 && Price <= 3000) {
		return "Special";
	}
	if (Price > 3000) {
		return "Quirky";
	}

	return "Common";
}

export function getQuirkymals(IgnoreList: string[] = []) {
	return Object.values(QuirkymalTuning)
		.filter((item) => !IgnoreList.includes(item.Name))
		.sort((a, b) => (a.Conditions[0]!.RequiredAmount as number) > (b.Conditions[0]!.RequiredAmount as number))
		.map((item) => {
			return undefined;
			// return (
			// 	<InventoryItemSlot
			// 		AssetPreview={
			// 			ReplicatedStorage.Assets.Quirkymals.FindFirstChild(item.Name)?.Clone() as QuirkymalAppearance
			// 		}
			// 		AssetPrice={item.Conditions[0]!.RequiredAmount as number}
			// 		Assetkey={item.Name}
			// 		FunFact={item.FunFact}
			// 		Name={item.Name}
			// 		OnClick={() => {
			// 			// Events.EquipQuirkymal.fire(item.Name as keyof typeof QuirkymalTuning);
			// 		}}
			// 		Rarity={PriceToRarity(item.Conditions[0]!.RequiredAmount as number)}
			// 		key={item.Name}
			// 	/>
			// );
		});
}

export function getSkins(QuirkymalName: string, IgnoreList: string[] = []) {
	return Object.values(QuirkymalTuning)
		.filter((item) => !IgnoreList.includes(item.Name))
		.sort((a, b) => (a.Conditions[0]!.RequiredAmount as number) > (b.Conditions[0]!.RequiredAmount as number))
		.map((item) => {
			const AssetPreview = ReplicatedStorage.Assets.Quirkymals.FindFirstChild(
				QuirkymalName,
			)?.Clone() as QuirkymalAppearance;

			const AssetSkin = ReplicatedStorage.Assets.Quirkymals.FindFirstChild(
				item.Name,
			)?.Clone() as QuirkymalAppearance;

			AssetPreview.HumanoidRootPart.TextureID = AssetSkin.HumanoidRootPart.TextureID;

			return undefined;
			// return (
			// 	<InventoryItemSlot
			// 		AssetPreview={AssetPreview}
			// 		AssetPrice={item.Conditions[0]!.RequiredAmount as number}
			// 		Assetkey={item.Name}
			// 		FunFact={item.FunFact}
			// 		Name={item.Name}
			// 		OnClick={() => {
			// 			Events.EquipSkin(item.Name as keyof typeof QuirkymalTuning);
			// 		}}
			// 		Rarity={PriceToRarity(item.Conditions[0]!.RequiredAmount as number)}
			// 		key={item.Name}
			// 	/>
			// );
		});
}
