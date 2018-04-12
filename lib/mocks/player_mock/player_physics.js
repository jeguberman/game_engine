import actorPhysics from '../../actors/modules/physics/actorPhysics.js';
function mockPhysics(){
  const _mockPhysics = new actorPhysics();
  _mockPhysics.state = {
    block: {
      up: false,
      down: false,
      left: false,
      right: false
    }
  };

  return _mockPhysics;
}


module.exports = mockPhysics;
