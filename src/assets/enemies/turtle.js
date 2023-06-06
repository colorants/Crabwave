import {Actor, CollisionType, Engine, Input, randomInRange, vec, Vector} from "excalibur";
import {Resources} from "../resources.js";
import {WaterDrop} from "../projectile/waterDrop.js";
import {Octopus} from "./octupus.js";


export class Turtle extends Octopus  {
    x
    y


    constructor() {
        super({
            width: Resources.Turtle.width,
            height: Resources.Turtle.height,

        });
        this.z= 100;
    }

    onInitialize(engine) {
        this.engine = engine
        this.graphics.use(Resources.Turtle.toSprite())
        this.graphics.scale = new Vector(2,2)
        this.vel = new Vector(-130,0)
        this.actions.scaleTo(vec(1.4,1.4),vec(10,10))
    }

    onPostUpdate(engine, delta) {
            this.on("collisionstart", (e) => {
                if (e.other instanceof WaterDrop) {
                    this.kill()
                }
            })
    }


}


