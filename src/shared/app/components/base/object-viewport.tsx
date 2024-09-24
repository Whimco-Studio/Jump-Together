import Make from "@rbxts/make";
import { useMountEffect } from "@rbxts/pretty-react-hooks";
import React, { useRef } from "@rbxts/react";

interface Properties extends React.PropsWithChildren {
	readonly ExtraCameraDepth?: number;
	readonly Native: React.InstanceProps<ViewportFrame>;
	readonly Object: BasePart | Model;
}

function getCameraOffset(fov: number, extentsSize: Vector3): number {
	const halfSize = extentsSize.Magnitude / 2;
	const fovDivisor = math.tan(math.rad(fov / 2));
	return halfSize / fovDivisor;
}

function zoomToExtents(camera: Camera, instance: BasePart | Model): void {
	const isModel = instance.IsA("Model");

	const instanceCFrame = isModel ? (instance as Model).GetModelCFrame() : instance.CFrame;
	const extentsSize = isModel ? (instance as Model).GetExtentsSize() : (instance as BasePart).Size;

	const cameraOffset = getCameraOffset(camera.FieldOfView, extentsSize);
	const cameraRotation = camera.CFrame.sub(camera.CFrame.Position);

	const instancePosition = instanceCFrame.Position;
	camera.CFrame = cameraRotation.add(instancePosition).add(cameraRotation.LookVector.mul(-cameraOffset));
	camera.Focus = cameraRotation.add(instancePosition);
}

function setDefaultCameraView(camera: Camera, model: Model, cameraDepth = 0): void {
	const [modelCF] = model.GetBoundingBox();

	const radius = model.GetExtentsSize().Magnitude / 2;
	const halfFov = math.rad(camera.FieldOfView) / 2;
	const depth = radius / math.tan(halfFov) + cameraDepth;

	// 1. Remove translation
	// 2. Move to model position
	// 3. Push camera back by depth in the original angle given
	camera.CFrame = camera.CFrame.sub(camera.CFrame.Position)
		.add(modelCF.Position)
		.add(camera.CFrame.Position.sub(modelCF.Position).Unit.mul(depth));
}

/**
 * Renders a viewport for displaying an object.
 *
 * @param props - The component props.
 * @param props.ExtraCameraDepth - Additional depth to push the camera back.
 * @param props.Native - The native props to a viewport.
 * @param props.Object - The object to be displayed in the viewport.
 * @param props.children - The child elements.
 * @returns The rendered viewport.
 * @component
 * @example
 *
 * ```tsx
 * <ObjectViewport
 * 	Native={{ Size: new UDim2(1, 0, 1, 0) }}
 * 	Object={new Part()}
 * />;
 * ```
 *
 */
export default function ObjectViewport({ ExtraCameraDepth, Native, Object, children }: Properties): React.Element {
	// Setup the viewport after mounting when we have a ref to it
	const viewportReference = useRef<ViewportFrame>();

	useMountEffect(() => {
		const viewport = viewportReference.current;
		assert(viewport !== undefined, "Viewport is not defined");

		let model = Object;
		if (!model.IsA("Model")) {
			model = Make("Model", {
				Children: [Object],
				PrimaryPart: Object as BasePart,
			});
		}

		model.Parent = viewport;

		const viewportCamera = new Instance("Camera");
		viewport.CurrentCamera = viewportCamera;
		// setDefaultCameraView(viewportCamera, model, ExtraCameraDepth);
		zoomToExtents(viewportCamera, model);
		viewportCamera.Parent = viewport;

		const Root =
			(model.PrimaryPart as BasePart | undefined) || (model.FindFirstChild("HumanoidRootPart") as BasePart);
		if (Root) {
			Root.CFrame = Root.CFrame.mul(CFrame.fromEulerAnglesXYZ(-math.pi / 8, -math.pi / 1.25, 0));
		}
	});

	return (
		<viewportframe {...Native} ref={viewportReference}>
			{children}
		</viewportframe>
	);
}
