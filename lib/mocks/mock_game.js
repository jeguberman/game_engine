import Game from '../game/game.js';
import mockObj from './mock_obj.js';
import DebugInfo from  '../util/debugger.js';


function mockGame(){
  const view = document.getElementById('view');

  const game = new Game();

  game.setContext(view.getContext('2d'));
  view.width = game.view_width;
  view.height = game.view_height;

  game.addObject(new mockObj());
  game.addObject(new mockObj());
  game.addObject(new mockObj());
  game.addObject(new mockObj());
  game.addObject(new mockObj());
  game.addObject(new mockObj());
  game.addObject(new mockObj());
  game.addObject(new mockObj());
  game.addObject(new mockObj());

  game.addObject(new DebugInfo());
  const a = new mockObj();
  const b = new mockObj();

  debugger

  // game.addObject(mockObj);

  return game.startClock();
}



export default mockGame;
