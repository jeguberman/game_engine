import Game from '../game/game.js';
// import * as Objects from './drawn_object.js';
import mockObj from './mock_obj.js';

function mockGame(){
  const view = document.getElementById('view');

  const game = new Game();

  game.setContext(view.getContext('2d'));
  view.width = game.view_width;
  view.height = game.view_height;

  game.addObject(mockObj.a);
  // game.addObject(mockObj);

  return game.startClock();
}



export default mockGame;
