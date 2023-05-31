import {Actor, clamp, CollisionType, Color, Font, FontUnit, Input, Label, Vector} from "excalibur";
import {Resources} from "../resources.js";
import {WaterDrop} from "../projectile/waterDrop.js";
import {HermitShell} from "../projectile/hermitShell.js";


export class Crab extends Actor {
    x
    y
    engine
    constructor() {
        super({
            width: 30,
            height:30,
        });
    }
    onInitialize(engine) {
        this.engine = engine;
        // this.anchor.setTo(0, 0);
        this.graphics.use(Resources.Crab.toSprite())
        this.graphics.scale = new Vector(0.2, 0.2)
        this.vel = new Vector(0, 0)
        this.pos = new Vector(100, 400);
        this.z = 3;

        this.on("collisionstart", (e) => {
            if (e.other instanceof HermitShell) {
                this.getArmor()
            }
        })
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
            if (this.pos.x > 400) {
                xspeed = 0
            }
        }
        if (_engine.input.keyboard.wasPressed(Input.Keys.F)) {
            this.shootWater()
        }
            this.vel = new Vector(xspeed, yspeed)

        // cant go off screen
        this.pos.x = clamp(this.pos.x, this.width/2, _engine.drawWidth - this.width/2);
        this.pos.y = clamp(this.pos.y, this.height/2, _engine.drawHeight - this.height/2);


    }
    shootWater() {
        if (this.engine.score <= 0) {
            return
        }
        this.actions.delay(200).callMethod(() => {
            let water = new WaterDrop(this.pos.x, this.pos.y)
            water.vel = new Vector(700, 0)
            this.scene.add(water)
            this.engine.updateScore();
        })



    }

    getArmor() {
       console.log("bruh")
    }











}
