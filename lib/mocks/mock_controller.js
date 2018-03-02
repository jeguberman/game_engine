import objController from '../objects/modules/controller/objController.js';
import * as Verb from '../objects/modules/controller/verb';

const mockController = function(){
  const _mockController = new objController();
  // const v = new Verb.core({
  //   owner: _mockController,
  //   input: "d",
  //   // func: function(){
  //   //   debugger
  //   //   this.dx += 40;
  //   // },
  //   name: "moveRight"
  // });
  // _mockController.addVerb(v);

  // _mockController.addNewVerb(" ", function(){
  //   this.modules.objAnimator = this.modules.objAnimator === "Spin" ? "noSpin" : "Spin";
  // });


  return _mockController;
};

module.exports = mockController;
