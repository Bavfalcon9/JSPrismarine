import Vector3 from "../math/vector3";
import World from "./world";

interface PositionData {
    x?: number;
    y?: number;
    z?: number;
    world: World;
}

export default class Position extends Vector3 {
    private world: World;

    constructor({ x, y, z, world }: PositionData) {
        super(x, y, z);
        this.world = world;
    }

    public getWorld() {
        return this.world;
    }
}
