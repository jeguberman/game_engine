
// import Sprite from '../components/animation/sprite.js';

import baseObj from '../objects/base_object.js';
import objFrameData from '../objects/modules/debug/objFrameData';

import mockSprite from './mock_obj_animation';
import mockController from './mock_controller';

export const mockObj = (n = 0, m=0) => {
  const _mockObj = new baseObj();

  _mockObj.addModules(
    new mockSprite()
  );

  const options = {
    name: "mockObj",
    dx: 0 + n * 40,
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
  _featureMock.addModules(
    new mockController(),
    new objFrameData()
  );
  // _featureMock.addNewVerb("d", function(){
  //   this.dx += 40;
  // });
  // _featureMock.addNewVerb("space", function(){this.state = "noSpin";});

  return _featureMock;
};
