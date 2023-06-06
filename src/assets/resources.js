import { ImageSource, Sound, Resource, Loader } from 'excalibur'
import crabSprite from '../images/crabSprite.png'
import waterSprite from '../images/waterSprite.png'
import backGroundSprite from '../images/backgroundSprite.png'
import shellSprite from '../images/shellSprite.png'
import turtleSprite from '../images/turtleSprite.png'
import octopusSprite from '../images/octopusSprite.png'
import ammoCrate from '../images/ammoCrate.png'
import startButton from '../images/startButton.png'
import menuButton from '../images/menuButton.png'
import logo from '../images/logo.png'

const Resources = {
    Crab: new ImageSource(crabSprite),
    Shell: new ImageSource(shellSprite),
    Turtle: new ImageSource(turtleSprite),
    Water: new ImageSource(waterSprite),
    Background : new ImageSource(backGroundSprite),
    Octopus: new ImageSource(octopusSprite),
    AmmoCrate: new ImageSource(ammoCrate),
    StartButton : new ImageSource(startButton),
    MenuButton : new ImageSource(menuButton),
    Logo : new ImageSource(logo)



}
const ResourceLoader = new Loader(
    [Resources.Crab,
        Resources.Water,
        Resources.Background,
        Resources.Shell,
        Resources.Turtle,
        Resources.Octopus,
        Resources.AmmoCrate,
        Resources.StartButton,
        Resources.MenuButton,
        Resources.Logo


    ])

export { Resources, ResourceLoader };