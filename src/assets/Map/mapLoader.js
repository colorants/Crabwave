import {Actor, Vector} from "excalibur";
import {Resources} from "../resources.js";


export class MapLoader extends Actor {
    x
    y
    constructor() {
        super()
        this.graphics.use(Resources.Map.toSprite())
        this.scale = new Vector(1, 1);
    }
}
