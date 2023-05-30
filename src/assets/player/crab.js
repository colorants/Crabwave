import {Actor, CollisionType, Input, Vector} from "excalibur";
import {Resources} from "../resources.js";
import {WaterDrop} from "../projectile/waterDrop.js";


export class Crab extends Actor {
    x
    y
    constructor() {
        super();
        this.scale = new Vector(0.2, 0.2)
    }
    onInitialize(_engine) {
        this.graphics.use(Resources.Crab.toSprite())
        this.graphics.scale = new Vector(0.2, 0.2)
        this.vel = new Vector(0, 0)
        this.pos = new Vector(100, 400);
        this.z = 3;
    }

    onPreUpdate(_engine, _delta) {
        super.onPreUpdate(_engine, _delta);
        let xspeed = 0
        let yspeed = 0
        if (_engine.input.keyboard.isHeld(Input.Keys.W)) {
            yspeed = -300
        }
        if (_engine.input.keyboard.isHeld(Input.Keys.S))  {
            yspeed = 300
        }
        if (_engine.input.keyboard.isHeld(Input.Keys.A)) {
            xspeed = -300
        }
        if (_engine.input.keyboard.isHeld(Input.Keys.D)) {
            xspeed = 300
        }
        if (_engine.input.keyboard.wasPressed(Input.Keys.F)) {
            this.actions.delay(200).callMethod(() => {
            this.shootWater()
            })
        }
        this.vel = new Vector(xspeed, yspeed)
    }
    shootWater() {
            let water = new WaterDrop(this.pos.x, this.pos.y)
            water.vel = new Vector(700, 0)
            this.scene.add(water)
    }



}
