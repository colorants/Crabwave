
import {Actor, Engine, randomInRange, Vector} from "excalibur";
import {Resources} from "../resources.js";
import {Crab} from "../player/crab.js";



export class AmmoCrate extends Actor {
    x
    y
    engine

    constructor() {
        super({
            width:40,
            height:40,
            pos: new Vector(1500, Math.random() * 700 + 100),
        });
        this.z= 100;

    }

    onInitialize(engine) {
        this.engine = engine
        this.graphics.use(Resources.AmmoCrate.toSprite())
        this.graphics.scale = new Vector(200,200)
        this.vel = new Vector(0,0)


        this.on("collisionstart", (e) => {
            if (e.other instanceof Crab) {
                this.kill()
                this.engine.currentScene.getAmmo();
            }
        })
    }


}
