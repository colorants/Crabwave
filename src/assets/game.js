import '../css/style.css'
import {Color, Engine, Font, FontUnit, Label, Timer, Vector} from "excalibur"
import {ResourceLoader} from "./resources.js";
import {Background} from "./map/maploader.js";
import {Crab} from "./player/crab.js";
import {WaterDrop} from "./projectile/waterDrop.js";
import {Seagull} from "./enemies/seagull.js";
import {HermitShell} from "./projectile/hermitShell.js";

import {AmmoCrate} from "./projectile/ammoCrate.js";





export class Game extends Engine {
    constructor() {
        super(
            {
                width: 1440,
                height: 900,
               displayMode: "fullscreen",
                maxFps: 50,
            }
        );
        this.start(ResourceLoader).then(() => this.startGame())

    }

    startGame() {
        this.showDebug(true)
        const backgroundLoop = new Background({
            height: 900,
            width: 1440,
        })
        this.add(backgroundLoop);

//adds player
        const crab = new Crab({})
        this.add(crab);

        //adds waterdrop
        const water = new WaterDrop({})
        this.add(water);

        //adds seagull
        const seagull = new Seagull({})
        this.add(seagull);
        const hermitcrab = new HermitShell({})
        this.add(hermitcrab)

        //adds ammocrate
        const ammoCrate = new AmmoCrate({
            scale: new Vector(100, 100)
        })
        this.add(ammoCrate)

        //ammo counter
        const ammo = new Label({})
        this.add(ammo)
        this.score = 30
        this.ammo = new Label({
            text: `Ammo: ${this.score}`,
            pos: new Vector(100, 100),
            font: new Font({
                family: 'impact',
                size: 40,
                unit: FontUnit.Px,
                color:Color.White
            })
        })
        this.add(this.ammo)

    }

    updateScore(){
        this.score--
        this.ammo.text = `Ammo: ${this.score}`
    }

    getAmmo(){
        this.score += 30
        this.ammo.text = `Ammo: ${this.score}`
    }
}
new Game()





