import '../css/style.css'
import {Color, Engine, Font, FontUnit, Input, Label, Random, Timer, Vector} from "excalibur"
import {ResourceLoader} from "./resources.js";
import {GameScene} from "./scenes/gameScene.js";
import {StartScene} from "./scenes/startScene.js";
import {EndScene} from "./scenes/endScene.js";
import {Arcade} from "arcade-game";



export class Game extends Engine {
    engine
    #arcade;
    ammoX;
    #joystickListener;


    constructor() {
        super(
            {
                width: 1440,
                height: 900,
                displayMode: "fullscreen",
                maxFps: 50,
            }
        );
        ResourceLoader.suppressPlayButton = true
        this.start(ResourceLoader).then(() => this.startGame())
        this.random = new Random(1337)

    }


    startGame(engine) {

        this.#arcade = new Arcade(this, false, true);

        this.#joystickListener = (e) => this.#joyStickFound(e)
        document.addEventListener("joystickcreated",  this.#joystickListener)



        this.add("gameScene", new GameScene(this.engine))
        this.add("startScene", new StartScene(this.engine))
        this.add("endScene", new EndScene(this.engine))

        this.goToScene("startScene")


        this.engine = engine

    }

    #joyStickFound(e) {
        let joystick = this.#arcade.Joysticks[e.detail]

        // debug, this shows you the names of the buttons when they are pressed
        for (const buttonEvent of joystick.ButtonEvents) {
            document.addEventListener(buttonEvent, () => console.log(buttonEvent))
        }

        this.update();
    }

    onPreUpdate() {
        for (let joystick of this.#arcade.Joysticks) {
            joystick.update()
        }
    }

    disconnect() {
        document.removeEventListener("joystickcreated", this.#joystickListener)
    }

}

new Game()





