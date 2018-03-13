import dbSetUp from './lib/util/debugUtil';
import Game from './lib/game/game';
import mockGame from './lib/mocks/mock_game';
import merge from 'lodash/merge';

const trueGame = ()=>{
  const game = mockGame();
  game.startClock();
};

const falseGame = () => {



};


const switcher = (n) => {
  if(n){
    return trueGame;
  }else{
    return falseGame;
  }
};

document.addEventListener('DOMContentLoaded', switcher(1));
