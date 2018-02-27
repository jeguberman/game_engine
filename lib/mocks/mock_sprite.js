import Sprite from '../objects/modules/animation/sprite.js';

import { cel, AnimationCycle } from '../objects/modules/animation/animation.js';

const Spin = new AnimationCycle("Spin");
const noSpin = new AnimationCycle("noSpin");

noSpin.createCel({sX:400, sY:0, draw_width:40, draw_height: 40}); //0

Spin.createCel({sX:400, sY:0, draw_width:40, draw_height: 40}); //0
Spin.createCel({sX:5, sY:0, draw_width:37, draw_height: 40});//1
Spin.createCel({sX:51, sY:0, draw_width:31, draw_height: 40});//2
Spin.createCel({sX:101, sY:0, draw_width:21, draw_height: 40});//3
Spin.createCel({sX:149, sY:0, draw_width:13, draw_height: 40});//4
Spin.createCel({sX:196, sY:0, draw_width:8, draw_height: 40});//5
Spin.createCel({sX:238, sY:0, draw_width:13, draw_height: 40});//6
Spin.createCel({sX:277, sY:0, draw_width:22, draw_height: 40});//7
Spin.createCel({sX:317, sY:0, draw_width:31, draw_height: 40});//8
Spin.createCel({sX:357, sY:0, draw_width:38, draw_height: 40});//9

const CoinSprite = ()=>{
  const _coinSprite = new Sprite({src: './assets/coin_test.png'});
  _coinSprite.add(Spin);
  _coinSprite.add(noSpin);
  return _coinSprite;
};

module.exports = CoinSprite;
