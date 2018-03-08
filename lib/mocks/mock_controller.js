import actorController from '../objects/modules/controller/actorController.js';

import Verb from '../objects/modules/controller/verb';

const mockController = function(){
  const _mockController = new actorController();
  
  // move.newSubscription("controllerAction");

  // _mockController.addVerb(move);
  // let right = new Verb();
  // right.setFunc(()=>{
  //   console.log("rightfunc");
  //   this.dx += 40;
  // });
  // right.func.bind(this);
  // right.newSubcription('keydown','d');

  // v.addRequirement("rightBound",()=>{
  //   return this.dx + Math.max(this.draw_width, this.collision_width) > window.game.view_width;
  // });

  return _mockController;
};


// const mockController = function(){
//   const _mockController = new objController();
//
//   const v = new Verb.core({
//     name: "moveRight",
//     input: "d",
//
//     func: function(){
//
//       let evn = this.globalEvents;
//       if(!evn.hasOwnProperty("eligible")){
//         evn.eligible = true;
//       }
//       function eligibate(){evn.eligible = true;}
//       function elgTimer(){
//
//       }
//
//       // debugger
//       if (evn.eligible){
//
//         console.log([this.name]);
//         this.dx += 40;
//
//         evn.eligible = false;
//
//         setTimeout(
//           eligibate,
//           200
//         );
//       }
//     }
//   });
//   _mockController.addVerb(v);
//
//
//
//
//   return _mockController;
// };

module.exports = mockController;
