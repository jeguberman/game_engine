// import Game from './lib/Game/game';
import mockGame from './lib/mocks/mock_game';
import merge from 'lodash/merge';


const trueGame = ()=>{
  const view = document.getElementById('view');
  const game = new Game();
  game.setContext(view.getContext('2d'));
  view.width = game.view_width;
  view.height = game.view_height;
  game.start();

};

const falseGame = () => {
  mockGame();
};


const switcher = (n) => {
  if(n){
    return trueGame;
  }else{
    return falseGame;
  }
};

document.addEventListener('DOMContentLoaded', switcher(0));
