import Sprite from '../components/animation/sprite.js';

import { cel, AnimationCycle } from '../components/animation/animation.js';

const StandRight = new AnimationCycle("standRight");

StandRight.createCel({sX:4, sY:55, width:15, height: 28, frameCount: 1});

const PlayerSprite = new Sprite({src: './assets/mario_sprites.png'});


PlayerSprite.add(StandRight);




module.exports = PlayerSprite;
