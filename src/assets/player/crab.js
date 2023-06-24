import {Actor, clamp, CollisionType, Color, Engine, Font, FontUnit, Input, Label, Vector} from "excalibur";
import {Resources} from "../resources.js";
import {WaterDrop} from "../projectile/waterDrop.js";
import {HermitShell} from "../projectile/hermitShell.js";
import {Turtle} from "../enemies/turtle.js";
import {Octopus} from "../enemies/octupus.js";
import {Ammo} from "../ui/ammo.js";
import {AmmoCrate} from "../projectile/ammoCrate.js";


export class Crab extends Actor {
    x
    y
    engine
    ammoX
    gamemode = 1;
    constructor() {
        super({
            width: Resources.Crab.width,
                height: Resources.Crab.height,
        });

    }
    onInitialize(engine) {
        this.actions.moveTo(100,400)
        this.engine = engine;
        this.graphics.use(Resources.Crab.toSprite())
        // this.graphics.scale = new Vector(0.2, 0.2)
        this.vel = new Vector(0, 0)
        this.pos = new Vector(100, 400)
        this.actions.moveTo(200,400, 100)
        this.z = 1;

       this.ammoX = new Ammo({});
        engine.currentScene.add(this.ammoX)

        this.score = 30
        this.ammoLabel = new Label({
            z: 100,
            text: `Ammo: ${this.score}`,
            pos: new Vector(100, 100),
            font: new Font({
                family: 'comic sans ms',
                size: 40,
                unit: FontUnit.Px,
                color:Color.White
            })
        })
        this.addChild(this.ammoLabel)



        this.on("collisionstart", (e) => {
            if (e.other instanceof Octopus || e.other instanceof Turtle) {
                this.kill()
                this.engine.currentScene.remove("gameScene")
                this.engine.goToScene("endScene",{score: this.score}
                )


            }})

        this.on('collisionstart', (e) => {
            if (e.other instanceof AmmoCrate) {
                this.getAmmo()
            }
        })

    }



    getAmmo() {
        this.score += 30
        this.ammoLabel.text = `Ammo: ${this.score}`
    }


    onPreUpdate(_engine, _delta) {



        super.onPreUpdate(_engine, _delta);
        let xspeed = 0
        let yspeed = 0

        if (_engine.input.keyboard.isHeld(Input.Keys.O)) {
           this.gamemode = 0
        }

        if (_engine.input.keyboard.isHeld(Input.Keys.P)) {
           this.gamemode = 1
        }

if (this.gamemode === 1) {
    if (_engine.input.keyboard.isHeld(Input.Keys.W)) {
        yspeed = -300
    }
    if (_engine.input.keyboard.isHeld(Input.Keys.S)) {
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
        if (this.score > 0) {
            this.shootWater()
        }
    }
}

if (this.gamemode === 0) {
    if ("joystick0up".isHeld) {
        yspeed = -300
    }
    if ("joystick0down".isHeld)  {
        yspeed = 300
    }
    if ("joystick0left".isHeld) {
        xspeed = -300
    }
    if ("joystick0right".isHeld) {
        xspeed = 300
        if (this.pos.x > 400) {
            xspeed = 0
        }
    }
    if ("joystick0button0".wasPressed) {
        if(this.score > 0) {
            this.shootWater()
        }
    }
}
        this.vel = new Vector(xspeed, yspeed)

        // cant go off screen
        this.pos.x = clamp(this.pos.x, this.width/2, _engine.drawWidth - this.width/2);
        this.pos.y = clamp(this.pos.y, this.height/2, _engine.drawHeight - this.height/2);




    }

    shootWater() {
        this.updateScore();
        if (this.score <= 0) {

            return
        }
        let water = new WaterDrop(this.pos.x, this.pos.y)
        water.vel = new Vector(700, 0)
        this.actions.delay(200).callMethod(() => {

            this.scene.add(water)

        })

    }

    updateScore() {
        this.score -= 1
        this.ammoLabel.text = `Ammo: ${this.score}`
    }



}
