import {Actor, CollisionType, Input, randomInRange, Vector} from "excalibur";
import {Resources} from "../resources.js";
import {WaterDrop} from "../projectile/waterDrop.js";


export class Seagull extends Actor  {
    x
    y
    engine

    constructor() {
        super({
            width:Resources.Crab.width,
            height:Resources.Crab.height,
        });
       this.scale = new Vector(0.2, 0.2)
        this.z= 100;
    }

    onInitialize(engine) {
        this.engine = engine
        this.graphics.use(Resources.Crab.toSprite())
       // this.graphics.scale = new Vector(0.2, 0.2)
        this.vel = new Vector(0, 0)
        this.pos = new Vector(randomInRange(700, 1000), randomInRange(300, 600))

        this.on("collisionstart", (e) => {
            if (e.other instanceof WaterDrop) {
                this.kill()

            }
        })
    }
}
