import actor from '../../actors/actor.js';

import mockController from './player_controller';
import mockPhysics from './player_physics';
import guyAnimation from './player_animation';
import playerCollision from './player_collision';

import objFrameData from '../../actors/modules/debug/objFrameData';
import objData from '../../actors/modules/debug/objData';

const playerActor = (n = 0, m = 0) => {
  devLog.log(`ceating new player object`);

  const _playerActor = new actor({
    name: "player",
    des:{
      x: 0 + n * 32,
      y: 0 + n * 32
    }
  });

  devLog.log(`adding modules to player`);
  _playerActor.addModules(
    new guyAnimation(),
    new mockPhysics(),
    new mockController(),
    new playerCollision()
  );

  devLog.log(`creating debug information for player`);
  _playerActor.addModules(
    new objData(),
    new objFrameData()
  );

  devLog.log(`initializing controller for player`);
  _playerActor.flags = {};
  // _playerActor.initializeActorCollision();

  return _playerActor;
};



module.exports = playerActor;
