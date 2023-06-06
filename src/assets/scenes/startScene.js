import {Actor, CollisionType, Scene, vec} from "excalibur"
import {Background} from "../Map/mapLoader.js";
import {Resources,ResourceLoader} from "../resources.js";

export class StartScene extends Scene {

    game
    engine

    onInitialize(engine) {
        this.game = engine

        this.Logo = new Actor({
            z: 120,
            x: 720,
            y: 200,
            width: Resources.Logo.width,
            height: Resources.Logo.height,
            collisionType: CollisionType.PreventCollision
        })
        this.Logo.graphics.use(Resources.Logo.toSprite())
        this.add(this.Logo)


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
            this.game.removeScene("gameScene")
        })

        this.add(this.sButton)

        this.mButton = new Actor({
            z: 100,
            x: 720,
            y: 520,
            width: Resources.MenuButton.width,
            height: Resources.MenuButton.height,
            collisionType: CollisionType.PreventCollision
        })
        this.mButton.graphics.use(Resources.MenuButton.toSprite())
        this.mButton.actions.scaleTo(vec(3.5,3.5),vec(7,7))
        this.mButton.on('pointerup', () => {
            this.game.goToScene("gameScene")
        })
        this.add(this.mButton)
    }

    onActivate(ctx) {

        const backgroundLoop = new Background({
            height: 900,
            width: 1440,
        })
        this.add(backgroundLoop);
    }
}

