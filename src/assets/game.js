import '../css/style.css'
import {Color, Engine, Font, FontUnit, Input, Label, Random, Timer, Vector} from "excalibur"
import {ResourceLoader} from "./resources.js";
import {GameScene} from "./scenes/gameScene.js";
import {StartScene} from "./scenes/startScene.js";
import {EndScene} from "./scenes/endScene.js";



export class Game extends Engine {
    engine


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

        this.add("gameScene", new GameScene(this.engine))
        this.add("startScene", new StartScene(this.engine))
        this.add("endScene", new EndScene(this.engine))

        this.goToScene("startScene")


        this.engine = engine

    }


}
new Game()





