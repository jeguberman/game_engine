import actorController from '../../actors/modules/controller/actorController.js';

import Verb from '../../actors/modules/controller/verb';



let spinFaster = new Verb({name:"spinFaster"});
spinFaster.setFunc(
  function(){
    this.targets.owner.modules.actorAnimator = "fastSpin";
  }
);
spinFaster.setTrigger(
  function(e){
    return e.detail.type === "pressdown" && e.detail.payload === "a";
  }
);

let spinSlower = new Verb({name:"spinSlower"});
spinSlower.setFunc(
  function(){
    this.targets.owner.modules.actorAnimator = "Spin";
  }
);
spinSlower.setTrigger(
  function(e){
    return e.detail.type === "pressup" && e.detail.payload === "a";
  }
);


// let spinSlower = new Verb({name:"spinSlower"});
// spinSlower.setFunc(function(e){
//     this.targets.owner.modules.actorAnimator = "Spin";
// });
//
// spinSlower.setTrigger(function(e){
//   return e.detail.keyup === "a";
// });



const coinController = function(){
  const _coinController = new actorController();
  _coinController.addVerbs(spinFaster, spinSlower);
  return _coinController;
};

module.exports = coinController;
