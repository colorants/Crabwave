import {CollisionType, Input, Vector} from "excalibur";
import {Resources} from "../resources.js";
import {Seagull} from "./seagull.js";

export class HermitCrab extends Seagull {
    x
    y
    constructor() {
        super();
        this.scale = new Vector(0.2, 0.2);
        this.body.collisionType = CollisionType.Fixed;
    }
    onInitialize(_engine) {
        this.graphics.use(Resources.Crab.toSprite())
        this.graphics.scale = new Vector(0.2, 0.2)
        this.vel = new Vector(0, 0)
        this.pos = new Vector(100, 300);
    }


}
