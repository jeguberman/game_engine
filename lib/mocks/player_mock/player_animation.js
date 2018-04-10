import ActorAnimator from '../../actors/modules/animation/actoranimator.js';
import merge from 'lodash/merge';
import piskelInfest from '../../actors/modules/animation/piskelSupport';
import { cel, AnimationCycle } from '../../actors/modules/animation/animationCycle.js';

import spritesheet from '../../../assets/spriteguy/spriteguy.png';
const json = require('../../../assets/spriteguy/spriteguy.json').frames;
//Each prop has a sub prop. I really want the subprop. Honestly as an array! there has got to be a way of doing that faster. But this si fine for proof of concept

const guyAnimation = function(){
  const animas = [
    { name: "idle", frames: [1] },
    { name: "collideDown", frames: [1] },
    { name: "collideUp", frames: [1] },
    { name: "collideRight", frames: [1] },
    { name: "collideLeft", frames: [1] },
    { name: "walk", frames: [5,5] },
    { name: "jumpUp", frames: [1] },
    { name: "fallDown", frames: [1] },
    { name: "praiseTheSun", frames: [1] }
  ];

  const _guyAnimation = new ActorAnimator({src: spritesheet});
  piskelInfest(_guyAnimation);
  let larva = _guyAnimation.spawnPiskelLarva();
  larva.addInfoFrames(animas);
  larva.piskelParse(json);
  larva.piskelZip();
  larva.apoptosize();
  _guyAnimation.reabsorbPiskelLarva(larva);

  // dbAdd("ga", _guyAnimation);
  return _guyAnimation;
};



module.exports = guyAnimation;
