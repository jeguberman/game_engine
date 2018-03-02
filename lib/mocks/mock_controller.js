import objController from '../objects/modules/controller/objController.js';
import * as Verb from '../objects/modules/controller/verb';

const v = new Verb.core({
  // owner: _featureMock,
  input: "d",
  func: function(){
    console.log([this.name]);
    this.dx += 40;
  },
  name: "moveRight"
});

const mockController = function(){
  const _mockController = new objController();

  _mockController.addVerb(v);

  // _mockController.addNewVerb(" ", function(){
  //   this.modules.objAnimator = this.modules.objAnimator === "Spin" ? "noSpin" : "Spin";
  // });


  return _mockController;
};

module.exports = mockController;
