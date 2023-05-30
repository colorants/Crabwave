import { ImageSource, Sound, Resource, Loader } from 'excalibur'
import crabSprite from '../images/crabSprite.png'
import waterSprite from '../images/waterSprite.png'
import mapSprite from '../images/mapSprite.png'

const Resources = {
    Crab: new ImageSource(crabSprite),
    Water: new ImageSource(waterSprite),
    Map : new ImageSource(mapSprite)
}
const ResourceLoader = new Loader([Resources.Crab,Resources.Water], [Resources.Map])

export { Resources, ResourceLoader }