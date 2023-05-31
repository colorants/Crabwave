
import {Actor, Engine, randomInRange, Vector} from "excalibur";
import {Resources} from "../resources.js";
import {Crab} from "../player/crab.js";



export class AmmoCrate extends Actor {
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
        this.vel = new Vector(randomInRange(-400,-800), 0)
        this.pos = new Vector(1500,randomInRange(50,750) )
        this.on("precollision", (e) => {
            console.log(e)
            if (e.other instanceof Crab) {
                this.kill()
                this.engine.getAmmo()
            }
        })
    }
}
