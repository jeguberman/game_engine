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

  _v.addRequirement(function(e){
    return this.targets.owner.state.actorPhysics.block[e.detail.payload] === false;
  });

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

  _v.addRequirement(function(){
    return this.targets.owner.vel[axis] != 0;
  });
  return _v;
};




let right = new moveVerb("right","x","1");
// right.addRequirement(function(){
//   let owner = this.targets.owner;
//   return owner.des.x + owner.collision_width < 960;
// });

//don't delete these added requirements. Right now they don't play nice with the looping function that keeps the guy on the screen, but eventually you want to stop the player from being able to push buttons under certain circumstances.

let unRight = new unMoveVerb("unRight","right","x","1");


let left = new moveVerb("left","x","-1");
// left.addRequirement(function(){
//   let owner = this.targets.owner;
//   return owner.des.x > 0;
// });
let unLeft = new unMoveVerb("unLeft","left","x","-1");

let down = new moveVerb("down","y","+1");
// down.addRequirement(function(){
//   let owner = this.targets.owner;
//   return owner.des.y + owner.collision_height < 640;
// });
// down.addRequirement(function(){
//   return this.targets.owner.flags.blockDown === false;
// });
let unDown = new unMoveVerb("unDown","down","y","1");

let up = new moveVerb("up","y","-1");
// up.addRequirement(function(){
//   let owner = this.targets.owner;
//   return owner.des.y > 0;
// });
let unUp = new unMoveVerb("unUp","up","y","-1");



const mockController = function(){
  const _mockController = new actorController();
  _mockController.addVerbs(right, left, up, down, unRight, unLeft, unUp, unDown);

  return _mockController;
};



module.exports = mockController;
