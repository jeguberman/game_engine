import Renderer from './renderer.js';
import Controller from './controller.js';
import ObjectManager from './objectManager.js';
import PhysicsManager from './physicsManager.js';
import TimeManager from './timeManager.js';
import merge from 'lodash/merge';
// import Player from './player/player';





class Game {

  constructor(options){
    this.modules = new Set();

    merge(
      this,
      new TimeManager(),
      new ObjectManager(),
      new PhysicsManager(),
      // new CollisionManager(),
      new Renderer({ctx: options.ctx}),
      new Controller()
    );
  }

  // start(){
  //   this.testRender();
  // }

  start(){
    this.startClock();
  }

}




module.exports = Game;
