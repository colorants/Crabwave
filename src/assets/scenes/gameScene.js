import {Actor, CollisionType, Color, Engine, Font, FontUnit, Label, Random, Scene, Timer, vec, Vector} from "excalibur"
import {Background} from "../Map/mapLoader.js";
import {Crab} from "../player/crab.js";
import {WaterDrop} from "../projectile/waterDrop.js";
import {Octopus} from "../enemies/octupus.js";
import {Turtle} from "../enemies/turtle.js";
import {HermitShell} from "../projectile/hermitShell.js";
import {AmmoCrate} from "../projectile/ammoCrate.js";
import {Resources} from "../resources.js";


export class GameScene extends Scene {

    game
    engine
    random

    onInitialize(engine) {
    this.game = engine
        this.timer = new Timer({
            fcn: () => this.spawnEnemy(Engine),
            interval: 1100,
            repeats: true
        })
        engine.add(this.timer)
        this.timer.start()

        this.timerPowerup = new Timer({
            fcn: () => this.spawnPowerup(Engine),
            interval: 1100,
            repeats: true
        })

        engine.add(this.timerPowerup)
        this.timerPowerup.start()


        this.random = new Random(1337)

        this.sButton = new Actor({
            z: 100,
            x: 720,
            y: 400,
            width: Resources.StartButton.width,
            height: Resources.StartButton.height,
            collisionType: CollisionType.PreventCollision
        })
        this.sButton.graphics.use(Resources.StartButton.toSprite())
        this.sButton.actions.scaleTo(vec(4,4),vec(7,7))
        this.sButton.on('pointerup', () => {
            this.game.goToScene("gameScene")
        })
        const backgroundLoop = new Background({
            height: 900,
            width: 1440,
        })
        this.add(backgroundLoop);
        this.game = this.engine

//adds player

        const crab = new Crab({
        })
        this.add(crab);




        //adds waterdrop
        const water = new WaterDrop({

        })
        this.add(water);
        //adds seagull


        //ammo counter

    }




    spawnEnemy() {
        console.log("spawn")
        const octopus = new Octopus({
        })
        this.add(octopus)

        const turtle = new Turtle({
        })
        this.add(turtle)
    }


    spawnPowerup() {
        console.log("spawn")
        const ammoCrate = new AmmoCrate({
        })
        this.add(ammoCrate)

        const hermitShell = new HermitShell({
        })
        this.add(hermitShell)
    }

    onActivate(ctx) {

    }
    }

