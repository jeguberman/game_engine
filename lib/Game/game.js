import ObjectManager from './objectManager.js';
import TimeManager from './timeManager.js';
import ModuleManager from '../module_manager.js';
import Renderer from './modules/renderer.js';
import Controller from './modules/controller.js';
import PhysicsManager from './modules/physicsManager.js';
import merge from 'lodash/merge';
// import Player from './player/player';

const EngineCore = () => {
  const _engine = new ModuleManager( {name:"game"} );
  _engine.mergeWith( new TimeManager() );
  _engine.mergeWith( new ObjectManager() );
  return _engine;
};

const Game = () => {
  const _game = new EngineCore();
  _game.addModules(
    new Renderer()
    // new PhysicsManager(),
    // new CollisionManager(),
    // new Controller()
  );
  return _game;
};





module.exports = Game;
