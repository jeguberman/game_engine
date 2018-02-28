
// import Sprite from '../components/animation/sprite.js';

import baseObj from '../objects/base_object.js';

import mockSprite from './mock_sprite';
import mockController from './mock_controller';

const mockModule = () => {
  return{
    name: "mockModule",
    arbVal: "from mockModule",
    updateState:function(){
      // this.state = "Spin";
    }
  };
};

const mockObj = (n = 0, m=0) => {
  const _mockObj = new baseObj();

  _mockObj.addModules(
    new mockSprite(),
    new mockController()
  );

  const options = {
    name: "mockObj",
    dx: 0 + n*40,
    dy: 0 + m*40,
    collision_width: 40,
    collision_height: 40,
    state: "Spin"
  };

  _mockObj.mergeWith(options);
  return _mockObj;
};





module.exports = mockObj;
