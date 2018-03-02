
// import Sprite from '../components/animation/sprite.js';

import baseObj from '../objects/base_object.js';
import objFrameData from '../objects/modules/debug/objFrameData';
import objData from '../objects/modules/debug/objData';

import mockAnimator from './mock_obj_animation';
import mockController from './mock_controller';

// import * as Verb from '../objects/modules/controller/verb';

export const mockObj = (n = 0, m=0) => {
  const _mockObj = new baseObj();

  _mockObj.addModules(
    new mockAnimator()
  );

  const options = {
    name: "mockObj",
    dx: 1 + n * 40,
    dy: 0 + m * 40,
    collision_width: 40,
    collision_height: 40,
    state: "mockery"
  };

  _mockObj.mergeWith(options);
  return _mockObj;
};

export const featureMock = function(){
  let xmod = 0;
  let ymod = 0;
  let _featureMock = new mockObj(xmod,ymod);

  _featureMock.name = "player";
  _featureMock.type = "player";
  _featureMock.addModules(
    new mockController(),
    new objData(),
    new objFrameData()
  );



  return _featureMock;
};
