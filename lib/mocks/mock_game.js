import Game from '../game/game.js';
import playerActor from './player_mock/player_actor.js';
import coinActor from './object_mock/coin_actor.js';



function mockGame(){
  const view = document.getElementById('view');

  const game = new Game();
  // debugger
  // game.bindKeys();


  game.setContext(view.getContext('2d'));
  view.width = game.view_width;
  view.height = game.view_height;//should these assignments be in the setContext method?


  game.addActor(new playerActor());
  // game.addActor(new coinActor(1,1));
  game.addActor(new coinActor(2,2));

  dbAdd("player",game.actors.all[0]);
  dbAdd("coin",game.actors.all[1]);
  dbAdd("game",game);


  return game;
}



export default mockGame;
