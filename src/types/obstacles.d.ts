type Spike = {
	Main: BasePart;
	MainDecoration: BasePart;
	Top: BasePart;
} & Model;

type SpikeObstacle = {
	Spike: Spike;
} & Folder;
