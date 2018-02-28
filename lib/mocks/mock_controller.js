import objController from '../objects/modules/controller/objController.js';

const mockController = function(){
  const _mockController = new objController();
  _mockController.addNewVerb("d", function(){
    // debugger
    this.dx += 40;
  });
  _mockController.addNewVerb("a", function(){this.dx -= 40;});
  _mockController.addNew
  you're tryig to make these functions get called with "this" bound to the gameObj at each module step
  Verb("space", function(){this.state = nSpin;});


  return _mockController;
};

module.exports = mockController;
