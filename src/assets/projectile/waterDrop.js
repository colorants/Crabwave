
import {Actor, Engine, Vector} from "excalibur";
import {Resources} from "../resources.js";
import {Seagull} from "../enemies/seagull.js";


export class WaterDrop extends Actor {
    constructor(posX,posY) {

        super({
            width:Resources.Water.width,
            height:Resources.Water.height,
        });
        this.anchor.setTo(0.5,0.5);
        this.pos = new Vector(posX,posY);
    }

    onInitialize(_engine) {
        this.graphics.use(Resources.Water.toSprite())
        this.on("collisionstart", (e) => {
            if (e.other instanceof Seagull) {
                this.kill()
            }
        })
    }



}
