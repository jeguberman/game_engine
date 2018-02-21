import Sprite from '../components/animation/sprite.js';

import { cel, AnimationCycle } from '../components/animation/animation.js';

const Spin = new AnimationCycle("Spin");

Spin.createCel({sX:400, sY:0, draw_width:40, draw_height: 40}); //0
Spin.createCel({sX:5, sY:0, draw_width:37, draw_height: 40});//1
Spin.createCel({sX:51, sY:0, draw_width:31, draw_height: 40});//2
Spin.createCel({sX:101, sY:0, draw_width:21, draw_height: 40});//3
Spin.createCel({sX:149, sY:0, draw_width:13, draw_height: 40});//4
// Spin.createCel({sX:5, sY:0, draw_width:37, draw_height: 40});//
// Spin.createCel({sX:5, sY:0, draw_width:37, draw_height: 40});//
// Spin.createCel({sX:5, sY:0, draw_width:37, draw_height: 40});//
// Spin.createCel({sX:5, sY:0, draw_width:37, draw_height: 40});//
// Spin.createCel({sX:5, sY:0, draw_width:37, draw_height: 40});//

const CoinSprite = new Sprite({src: './assets/coin_test.png'});


CoinSprite.add(Spin);




module.exports = CoinSprite;
