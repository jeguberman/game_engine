import actorController from '../objects/modules/controller/actorController.js';

import Verb from '../objects/modules/controller/verb';

function hop(coord, dir){

  var cmd = `this.targets.owner.d${coord} ${dir}= 40`;
  return( function(){
    if(!this.cooldown){
      eval(cmd);
      this.beginCoolDown(75);
    }
  });
}

const moveVerb = function(name, axis, dir){
  let _v = new Verb({name});
  _v.setFunc( hop(axis,dir));
  _v.setKeydownTrigger(name);
  return _v;
};

let right = new moveVerb("right","x","+");
// let right = new Verb({name:'right'});
// right.setFunc( hop("x","+") );
// right.setButtonTrigger("right");

let left = new moveVerb("left","x","-");
// let left = new Verb({name:'left'});
// left.setFunc( hop("x","-") );

let up = new Verb({name:'up'});
up.setFunc( hop("y","+") );

let down = new Verb({name:'down'});
down.setFunc( hop("y","-") );


const mockController = function(){
  const _mockController = new actorController();
  _mockController.addVerbs(right, left);//, up, down);
// _mockController.verbs.right.p = "pee";
  return _mockController;
};

module.exports = mockController;
