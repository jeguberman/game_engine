import objController from '../objects/modules/controller/objController.js';

const mockController = function(){
  const _mockController = new objController();
  _mockController.addNewVerb("d", function(){
    // debugger
    this.dx += 40;
  });
  _mockController.addNewVerb("a", function(){this.dx -= 40;});
  _mockController.addNewVerb("space", function(){this.state = "noSpin";});


  return _mockController;
};

module.exports = mockController;
