import {Actor, CollisionType, Input, randomInRange, vec, Vector} from "excalibur";
import {Resources} from "../resources.js";
import {WaterDrop} from "../projectile/waterDrop.js";


export class Turtle extends Actor  {
    x
    y


    constructor() {
        super({
            width: Resources.Turtle.width,
            height: Resources.Turtle.height,
            pos: new Vector(1500, Math.random() * 700 + 100),

        });
        this.z= 100;
    }

    onInitialize(engine) {
        this.engine = engine
        this.graphics.use(Resources.Turtle.toSprite())
        this.graphics.scale = new Vector(2,2)
        this.vel = new Vector(-130,0)
        this.actions.scaleTo(vec(1.4,1.4),vec(10,10))


        this.on("collisionstart", (e) => {
            if (e.other instanceof WaterDrop) {
                this.kill()
            }
        })
    }
}
