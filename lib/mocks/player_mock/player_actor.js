import actor from '../../actors/actor.js';

import mockController from './player_controller';
import mockPhysics from './player_physics';
import guyAnimation from './player_animation';

import objFrameData from '../../actors/modules/debug/objFrameData';
import objData from '../../actors/modules/debug/objData';

const playerActor = () => {
  devLog.log(`ceating new player object`);

  const _playerActor = new actor({name: "player"});

  devLog.log(`adding modules to player`);
  _playerActor.addModules(
    new guyAnimation(),
    new mockPhysics(),
    new mockController()
  );

  devLog.log(`creating debug information for player`);
  _playerActor.addModules(
    new objData(),
    new objFrameData()
  );

  devLog.log(`initializing controller for player`);
  _playerActor.initializeActorController();

  return _playerActor;
};



module.exports = playerActor;
