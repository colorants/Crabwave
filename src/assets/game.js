import '../css/style.css'
import {Engine, Label, Timer} from "excalibur"
import {ResourceLoader} from "./resources.js";
import {Crab} from "./player/crab.js";
import {WaterDrop} from "./projectile/waterDrop.js";
import {Seagull} from "./enemies/seagull.js";
import {MapLoader} from "./map/mapLoader.js";
import {Ammo} from "./ui/ammo.js";



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
        const map = new MapLoader({})
        this.add(map);
        const crab = new Crab({})
        this.add(crab);
        const water = new WaterDrop({})
        this.add(water);
        const seagull = new Seagull({})
        this.add(seagull);
        const ammo = new Ammo({})
        this.add(ammo)
    }

}
new Game()





