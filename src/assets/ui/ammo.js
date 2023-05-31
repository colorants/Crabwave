
import {Actor, Color, Engine, Font, FontUnit, Label, Vector} from "excalibur";

import {Crab} from "../player/crab.js";


export class Ammo extends Crab {
    constructor() {

        super({
        });
    }

    onInitialize(_engine) {
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
    }



}
