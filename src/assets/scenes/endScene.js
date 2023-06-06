import {Actor, CollisionType, Color, Font, FontUnit, Label, Scene, vec, Vector} from "excalibur"
import {Background} from "../Map/mapLoader.js";
import {Resources,ResourceLoader} from "../resources.js";
import {Ammo} from "../ui/ammo.js";

export class EndScene extends Scene {

    game
    engine

    onInitialize(engine) {
        this.game = engine
        console.log("EndScene initialized")
        const backgroundLoop = new Background({
            height: 900,
            width: 1440,
        })
        this.add(backgroundLoop);




        this.sButton = new Actor({
            z: 100,
            x: 720,
            y: 400,
            width: Resources.StartButton.width,
            height: Resources.StartButton.height,
            collisionType: CollisionType.PreventCollision
        })
        this.sButton.graphics.use(Resources.StartButton.toSprite())
        this.sButton.actions.scaleTo(vec(2,2),vec(7,7))
        this.sButton.on('pointerup', () => {
            this.game.goToScene("gameScene")
            location.reload()
        })

        this.add(this.sButton)

    }

    onActivate(ctx) {
        const ammo = new Ammo({})
        this.add(ammo)

        this.ammo = new Label({
            z: 100,
            text: `Remaining ammo: ${ctx.data.score}`,
            pos: new Vector(550, 300),
            font: new Font({
                family: 'comic sans ms',
                size: 40,
                unit: FontUnit.Px,
                color:Color.White
            })
        })
        this.add(this.ammo)
    }
}

