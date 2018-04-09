import actorController from '../../actors/modules/controller/actorController.js';

import Verb from '../../actors/modules/controller/verb';

function hop(coord, dir){
  var cmd = `this.targets.owner.des.${coord} += 40 * ${dir}`;
  return( function(){
    // debugger
    if(!this.cooldown){
      eval(cmd);
      this.beginCoolDown();
    }
  });
}

function move(axis, dir){
  return function(){
    this.targets.owner.acc[axis] += ( 1 * dir );
  };
}

const moveVerb = function(name, axis, dir){
  let _v = new Verb({name});

  _v.setFunc( move(axis, dir));

  _v.setTrigger(
    function(e){
      return e.detail.type === "pressdown" && e.detail.payload === name;
    }
  );
  return _v;
};

function unMove(axis, dir){
  return function(){
    this.targets.owner.acc[axis] -= ( 1 * dir);
  };
}

const unMoveVerb = function(name, trigger, axis, dir){
  let _v = new Verb({name});
  _v.setFunc( unMove(axis, dir));

  _v.setTrigger(
    function(e){
      return e.detail.type === "pressup" && e.detail.payload === trigger;
    }
  );
  return _v;
};




let right = new moveVerb("right","x","1");
right.addRequirement(function(){
  let owner = this.targets.owner;
  return owner.des.x + owner.collision_width < 960;
});

let unRight = new unMoveVerb("unRight","right","x","1");

let left = new moveVerb("left","x","-1");
left.addRequirement(function(){
  let owner = this.targets.owner;
  return owner.des.x > 0;
});
let unLeft = new unMoveVerb("unLeft","left","x","-1");

let down = new moveVerb("down","y","+1");
down.addRequirement(function(){
  let owner = this.targets.owner;
  return owner.des.y + owner.collision_height < 640;
});
let unDown = new unMoveVerb("unDown","down","y","1");

let up = new moveVerb("up","y","-1");
up.addRequirement(function(){
  let owner = this.targets.owner;
  return owner.des.y > 0;
});
let unUp = new unMoveVerb("unUp","up","y","-1");

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
  return e.detail.keyup === "a";
});

const mockController = function(){
  const _mockController = new actorController();
  _mockController.addVerbs(right, left, up, down,spinFaster,spinSlower, unRight, unLeft, unUp, unDown);
  return _mockController;
};



module.exports = mockController;
