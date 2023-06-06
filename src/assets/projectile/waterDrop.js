
import {Actor, Engine, vec, Vector} from "excalibur";
import {Resources} from "../resources.js";
import {Octopus} from "../enemies/octupus.js";


export class WaterDrop extends Actor {
    constructor(posX,posY) {

        super({
            width:Resources.Water.width,
            height:Resources.Water.height,
        });
        this.anchor.setTo(0.5,0.5);
        this.pos = new Vector(posX,posY);
        this.actions.scaleTo(vec(1.6,1.6),vec(1.2,1.2))
    }

    onInitialize(engine) {
        this.graphics.use(Resources.Water.toSprite())
        this.on("collisionstart", (e) => {
            if (e.other instanceof Octopus) {
                this.kill()
            }
        })
    }



}
