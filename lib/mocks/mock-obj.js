
// import Sprite from '../components/animation/sprite.js';
import merge from 'lodash/merge.js';

import CoinSprite from './mock_sprite';



const mockObj = merge({

    dx: 50,
    dy: 150,
    collision_width: 40,
    collision_height: 40,

    state: "Spin",

    hook: function(newThing){
      merge(this,newThing);
    }

},CoinSprite);



module.exports = mockObj;
