import { Controller, OnInit, OnStart } from "@flamework/core";
import { clientProducer } from "client/store";
import { getCameraShot } from "client/store/slices/camera";

@Controller({})
export class CameraController implements OnStart, OnInit {
	onInit() {}

	onStart() {
		this.listenToCameraShot();
	}

	listenToCameraShot() {
		clientProducer.subscribe(getCameraShot, (CameraShot) => {
			print(CameraShot);
		});
	}
}
