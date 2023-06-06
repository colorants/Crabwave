
import {Actor, Engine, randomInRange, Vector} from "excalibur";
import {Resources} from "../resources.js";
import {Crab} from "../player/crab.js";
import {AmmoCrate} from "./ammoCrate.js";



export class HermitShell extends AmmoCrate {
    x
    y
    engine

    constructor() {
        super({
            width:Resources.Shell.width,
            height:Resources.Shell.height,
            pos: new Vector(1500, Math.random() * 700 + 100),
        });
        this.z= 100;
    }

    onInitialize(engine) {
        this.engine = engine
        this.graphics.use(Resources.Shell.toSprite())
        this.graphics.scale = new Vector(1, 1)
        this.vel = new Vector(-200,0)

        this.on("collisionstart", (e) => {
            if (e.other instanceof Crab) {
                this.kill()
            }
        })
    }
}
