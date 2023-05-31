import {Actor, CollisionType, Input, randomInRange, Vector} from "excalibur";
import {Resources} from "../resources.js";
import {Crab} from "../player/crab.js";


export class HermitShell extends Actor  {
    x
    y
    engine

    constructor() {
        super({
            width:Resources.Shell.width,
            height:Resources.Shell.height,
        });
        this.z= 100;
    }

    onInitialize(engine) {
        this.engine = engine
        this.graphics.use(Resources.Shell.toSprite())
        this.graphics.scale = new Vector(1.5, 1.5)
        this.vel = new Vector(randomInRange(-400,-800), 0)
        this.pos = new Vector(1500,randomInRange(50,750) )

        this.on("collisionstart", (e) => {
            if (e.other instanceof Crab) {
                this.kill()
            }
        })
    }
}
