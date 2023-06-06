import {Actor, CollisionType, Input, randomInRange, vec, Vector} from "excalibur";
import {Resources} from "../resources.js";
import {WaterDrop} from "../projectile/waterDrop.js";


export class Octopus extends Actor  {
    x
    y
    engine

    constructor() {
        super({
            width: Resources.Octopus.width,
            height: Resources.Octopus.height,
            pos: new Vector(1500, Math.random() * 700 + 100),
        });
        this.z= 100;
    }

    onInitialize(engine) {
        this.engine = engine
        this.graphics.use(Resources.Octopus.toSprite())
        this.graphics.flipHorizontal = false
        this.vel = new Vector(-150, 0)
        this.actions.scaleTo(vec(1.4,1.4),vec(10,10))

        this.on("collisionstart", (e) => {
            if (e.other instanceof WaterDrop) {
                this.kill()
            }
        })
    }
}
