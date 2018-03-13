import actor from '../objects/actor.js';
import objFrameData from '../objects/modules/debug/objFrameData';
import objData from '../objects/modules/debug/objData';

import mockAnimator from './mock_obj_animation';
import mockController from './mock_controller';

import Verb from '../objects/modules/controller/verb';

export const mockObj = (n = 0, m=0) => {
  const _mockObj = new actor();

  _mockObj.addModules(
    new mockAnimator()
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
  _featureMock.type = "player";
  var mc = new mockController();



  _featureMock.addModules(
    new mockController(),
    new objData(),
    new objFrameData()
  );



  // let spinFaster = new Verb({name:"spinFaster"});
  // spinFaster.setFunc(function(e){
  //   if( e.detail.keydown === "a" ){
  //     this.targets.owner.modules.objAnimator = "fastSpin";
  //   }
  // });
  // spinFaster.newSubscription("controllerAction");
  //
  // let spinSlower = new Verb({name:"spinSlower"});
  // spinSlower.setFunc(function(e){
  //   if( e.detail.keyup === "a" ){
  //     let state = this.targets.owner.modules.objAnimator;
  //     this.targets.owner.modules.objAnimator = "Spin";
  //   }
  // });
  // spinSlower.newSubscription("controllerAction");


  // _featureMock.addVerbs(spinFaster, spinSlower);



  _featureMock.initializeActorController();
  return _featureMock;
};
