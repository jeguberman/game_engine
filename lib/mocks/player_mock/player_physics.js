import actorPhysics from '../../actors/modules/physics/actorPhysics.js';
function mockPhysics(){
  const _mockPhysics = new actorPhysics();

  return _mockPhysics;
}


module.exports = mockPhysics;
