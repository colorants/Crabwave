import {FontUnit, Font, Vector, Actor, Label} from "excalibur";

export class Ammo extends Actor {
    constructor() {
        super();
    }
    onInitialize(_engine) {
        let ammo = new Label({
            text: 'Score: 0',
            pos: new Vector(100, 100),
            font: new Font({
                family: 'impact',
                size: 24,
                unit: FontUnit.Px

            })

        });

    }

}

