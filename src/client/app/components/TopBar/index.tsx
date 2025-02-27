//!optimize 2

import { Object } from "@rbxts/luau-polyfill";
import React, { useEffect } from "@rbxts/react";
import { Icon, Stylesheet, TopbarProvider } from "@rbxts/topbar-components";
import { useRootProducer, useRootSelector } from "client/app/hooks";
import { Images } from "client/app/images";
import UICorner from "client/app/modules/scale-ui-corner";
import { getCurrentPage, getIsMobile } from "client/store/slices/Interface";

export default function TopBar({ children }: React.PropsWithChildren): React.Element {
	const producer = useRootProducer();

	const isMobile = useRootSelector(getIsMobile);

	useEffect(() => {
		print("isMobile", isMobile);
	}, [isMobile]);

	return (
		<TopbarProvider>
			<Stylesheet
				Stylesheet={{
					New: {
						Icon: {
							CornerRadius: new UDim(0, UICorner(10)),
						},
					},
				}}
			>
				{isMobile &&
					Object.entries(Images.HeadUserDisplay.Tabs).map(([iconName, iconInfo]) => {
						let iconImage = iconInfo.Icon;
						if (iconName === "Shop") {
							iconImage = "rbxassetid://101401218156376";
						}
						return (
							<Icon
								BackgroundColor={new Color3(255, 255, 255)}
								BackgroundTransparency={0.5}
								ImageId={iconImage}
								OnClick={() => {
									if (getCurrentPage(producer.getState()) === iconName) {
										producer.setPage("Home");
									} else {
										producer.setPage(iconName);
									}
								}}
								ToggleStateOnClick={false}
								key={iconName}
							/>
						);
					})}
			</Stylesheet>
		</TopbarProvider>
	);
}
