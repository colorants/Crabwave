import { ImageSource, Sound, Resource, Loader } from 'excalibur'
import crabSprite from '../images/crabSprite.png'
import waterSprite from '../images/waterSprite.png'
import backGroundSprite from '../images/backgroundSprite.png'
import shellSprite from '../images/shellSprite.png'

const Resources = {
    Crab: new ImageSource(crabSprite),
    Shell: new ImageSource(shellSprite),
    Water: new ImageSource(waterSprite),
    Background : new ImageSource(backGroundSprite),

}
const ResourceLoader = new Loader(
    [Resources.Crab,
        Resources.Water,
        Resources.Background,
        Resources.Shell

    ])

export { Resources, ResourceLoader };