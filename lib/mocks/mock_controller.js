import actorController from '../objects/modules/controller/actorController.js';

import Verb from '../objects/modules/controller/verb';

function hop(coord, dir){

  var cmd = `this.targets.owner.d${coord} ${dir}= 40`;
  return( function(){
    if(!this.cooldown){
      eval(cmd);
      this.beginCoolDown();
    }
  });
}

const moveVerb = function(name, axis, dir){
  let _v = new Verb({name});
  _v.setFunc( hop(axis,dir));
  _v.setTrigger(
    function(e){
      return e.detail.keydown===name;
    }
  );
  return _v;
};


let right = new moveVerb("right","x","+");
right.addRequirement(function(){
  let owner = this.targets.owner;
  return owner.dx + owner.collision_width < 960;
});

let left = new moveVerb("left","x","-");
left.addRequirement(function(){
  let owner = this.targets.owner;
  return owner.dx > 0;
});

let down = new moveVerb("down","y","+");
down.addRequirement(function(){
  let owner = this.targets.owner;
  return owner.dy + owner.collision_height < 640;
});

let up = new moveVerb("up","y","-");
up.addRequirement(function(){
  let owner = this.targets.owner;
  return owner.dy > 0;
});

let spinFaster = new Verb({name:"spinFaster"});
spinFaster.setFunc(function(e){
    this.targets.owner.modules.actorAnimator = "fastSpin";
});
spinFaster.setTrigger(function(e){
  // debugger
  return e.detail.keydown === "a";
});

let spinSlower = new Verb({name:"spinSlower"});
spinSlower.setFunc(function(e){
    this.targets.owner.modules.actorAnimator = "Spin";
});
spinSlower.setTrigger(function(e){
  // debugger
  return e.detail.keyup === "a";
});

const mockController = function(){
  const _mockController = new actorController();
  _mockController.addVerbs(right, left, up, down,spinFaster,spinSlower);
  return _mockController;
};



module.exports = mockController;
