import Game from '../game/game.js';
import * as Mock from './mock_obj.js';



function mockGame(){
  const view = document.getElementById('view');

  const game = new Game();

  game.setContext(view.getContext('2d'));
  view.width = game.view_width;
  view.height = game.view_height;
  // game.bindKeys();



  // game.addObject(new Mock.mockObj(0,0));
  // game.addObject(new mockObj(1,1));
  // game.addObject(new mockObj(0,2));
  // game.addObject(new mockObj(2,0));
  // game.addObject(new mockObj(2,2));
  // game.addObject(new mockObj(1,3));
  // game.addObject(new mockObj(3,1));
  // game.addObject(new mockObj(3,3));
  // game.addObject(new mockObj(4,0));
  // game.addObject(new mockObj(0,4));
  // game.addObject(new mockObj(2,4));
  // game.addObject(new mockObj(4,2));
  // game.addObject(new Mock.mockObj(4,4));
  game.addObject(new Mock.featureMock());
  // document.addEventListener('keydown',(e)=>{
  //   game.allObjects[0].dx += 40;
  // });




  // game.addObject(mockObj);

  // return game.startClock();
  return game;
}



export default mockGame;
