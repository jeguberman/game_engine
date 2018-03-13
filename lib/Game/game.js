import ActorManager from './actorManager.js';
import TimeManager from './timeManager.js';
import ModuleManager from '../module_manager.js';


import Renderer from './modules/renderer.js';
import gameController from './modules/gameController.js';
import PhysicsManager from './modules/physicsManager.js';


const EngineCore = () => {
  const _engine = new ModuleManager( {name:"game"} );
  _engine.addModules(
    new TimeManager(),
    // new EventManager(),
    new ActorManager()
  );
  return _engine;
};

const Game = () => {
  const _game = new EngineCore();

  _game.addModules(
    new gameController(),
    // new PhysicsManager(),
    // new CollisionManager(),
    new Renderer()
  );
  return _game;
};





module.exports = Game;
