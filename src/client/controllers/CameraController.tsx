import { Controller, OnStart, OnInit } from "@flamework/core";
import { useStore } from "client/app/hooks/useStore";
import { getCameraShot } from "client/app/stores/camera";

@Controller({})
export class CameraController implements OnStart, OnInit {
	onInit() {}

	onStart() {
		this.listenToCameraShot();
	}

	listenToCameraShot() {
		useStore().subscribe(getCameraShot, (CameraShot) => {
			print(CameraShot);
		});
	}
}
