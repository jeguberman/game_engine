
// import Sprite from '../components/animation/sprite.js';

import baseObj from '../objects/base_object.js';

import CoinSprite from './mock_sprite';

const mockModule = () => {
  return{
    name: "mockModule",
    arbVal: "from mockModule",
    updateState:function(){
      this.state = "Spin";
    }
  };
};

const mockObj = () => {
  const _mockObj = new baseObj();
  _mockObj.mergeWith(new mockModule());
  _mockObj.addModule(CoinSprite);



  const options = {
    name: "mockObj",
    dx: 40,
    dy: 40,
    collision_width: 40,
    collision_height: 40,
  };

  _mockObj.mergeWith(options);
  options.dx += 40;
  return _mockObj;
};





module.exports = mockObj;
