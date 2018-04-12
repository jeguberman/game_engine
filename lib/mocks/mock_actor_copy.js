import actor from '../actors/actor.js';
import objFrameData from '../actors/modules/debug/objFrameData';
import objData from '../actors/modules/debug/objData';

import coinAnimation from './coinAnimation';
import mockController from './mock_controller';
import mockPhysics from './mock_physics';

import guyAnimation from './guyAnimation';

import Verb from '../actors/modules/controller/verb';

export const mockObj = (n = 0, m = 0) => {
  devLog.log(`ceating new mock object`);
  const _mockObj = new actor();

  _mockObj.addModules(
    new guyAnimation(),
    new mockPhysics()
  );

  const options = {
    name: "mockObj",
    d:{
      x: 0 + n * 40,
      y: 0 + m * 40
    },
    collision_width: 32,
    collision_height: 32,
    state: "mockery"
  };

  _mockObj.mergeWith(options);
  return _mockObj;
};

export const featureMock = function(){
  let xmod = 0;
  let ymod = 0;
  devLog.log(`creating new feature mock`);
  let _featureMock = new mockObj(xmod,ymod);
  devLog.log(`changing name of ${_featureMock.name} to [player]`);
  _featureMock.name = "player";
  _featureMock.type = "player";

  _featureMock.addModules(
    new mockController(),
    new objData(),
    new objFrameData()
  );

  _featureMock.initializeActorController();
  return _featureMock;
};
