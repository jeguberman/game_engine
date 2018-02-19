import Renderer from './renderer.js';
import Controller from './controller.js';
import ObjectManager from './objectManager.js';
import PhysicsManager from './physicsManager.js';
import merge from 'lodash/merge';
// import Player from './player/player';



class Game {

  constructor(options){
    merge(
      this,
      // new ObjectManager(),
      // new PhysicsManager(),
      // new CollisionManager(),
      new Renderer({ctx: options.ctx})
      // new Controller()
    );
  }

  start(){
    debugger
    this.testRender();
  }

}




module.exports = Game;
