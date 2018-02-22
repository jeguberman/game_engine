
// import Sprite from '../components/animation/sprite.js';

import baseObj from '../components/base_object.js';

import CoinSprite from './mock_sprite';




  const mockObjA = new baseObj();
  const mockObjB = new baseObj();
  mockObjA.addModule(CoinSprite);
  mockObjB.addModule(CoinSprite);

  const options = {
    name: "mockObj",
    dx: 150,
    dy: 50,
    collision_width: 40,
    collision_height: 40,

  };
  mockObjA.mergeWith(options);

  options.dx = 200;
  mockObjB.mergeWith(options);

  const mockModuleA = () => {
    return{
      name: "mockModule",
      arbVal: "from mockModuleA",
      // moduleStep: function(){console.log(this.arbVal);},
      updateState:function(){
        this.state = "Spin";
      }
    };
  };


  mockObjA.addModule(mockModuleA());



module.exports = {a:mockObjA, b:mockObjB};