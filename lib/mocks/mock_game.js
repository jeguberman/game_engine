import Game from '../game/game.js';
import * as Mock from './mock_actor.js';



function mockGame(){
  const view = document.getElementById('view');

  const game = new Game();
  game.bindKeys();


  game.setContext(view.getContext('2d'));
  view.width = game.view_width;
  view.height = game.view_height;




  // game.addActor(new Mock.mockObj(0,0));
  // game.addActor(new mockObj(1,1));
  // game.addActor(new mockObj(0,2));
  // game.addActor(new mockObj(2,0));
  // game.addActor(new mockObj(2,2));
  // game.addActor(new mockObj(1,3));
  // game.addActor(new mockObj(3,1));
  // game.addActor(new mockObj(3,3));
  // game.addActor(new mockObj(4,0));
  // game.addActor(new mockObj(0,4));
  // game.addActor(new mockObj(2,4));
  // game.addActor(new mockObj(4,2));
  // game.addActor(new Mock.mockObj(4,4));
  game.addActor(new Mock.featureMock(4,4));


  dbAdd("feature",game.allActors[0]);
  dbAdd("game",game);


  return game;
}



export default mockGame;
