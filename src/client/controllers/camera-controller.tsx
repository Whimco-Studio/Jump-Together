import { Controller, OnInit, OnStart } from "@flamework/core";
import { store } from "shared/app/stores";
import { getCameraShot } from "shared/app/stores/camera";

@Controller({})
export class CameraController implements OnStart, OnInit {
	onInit() {}

	onStart() {
		this.listenToCameraShot();
	}

	listenToCameraShot() {
		store.subscribe(getCameraShot, (CameraShot) => {
			print(CameraShot);
		});
	}
}
