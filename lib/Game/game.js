import ActorManager from './actorManager.js';
import TimeManager from './timeManager.js';
import ModuleManager from '../module_manager.js';


import Renderer from './modules/renderer.js';
import gameController from './modules/gameController.js';
import physicsComponent from './modules/physicsComponent.js';


const EngineCore = () => {

  const _engine = new ModuleManager( {name:"game"} );
  _engine.addModules(
    new TimeManager(),
    new ActorManager()
  );
  return _engine;
};

const Game = () => {
  devLog.log("creating Game Engine");
  const _game = new EngineCore();

  _game.addModules(
    new gameController(),
    new physicsComponent(),    // new CollisionManager(),
    new Renderer()
  );
  devLog.log("game engine complete");
  return _game;
};





module.exports = Game;
