
import {Actor,Label} from "excalibur";


export class Ammo extends Actor {
    constructor() {

        super({});
    }

    onInitialize(_engine) {
        this.ammo = new Label({});
    }
}



