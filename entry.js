import dbSetUp from './lib/util/debugUtil';
import Game from './lib/game/game';
import mockGame from './lib/mocks/mock_game';
import merge from 'lodash/merge';

const trueGame = ()=>{
  const game = mockGame();
  game.startClock();//time Manager
};

const falseGame = () => {

  function SFillArray(val){
    var ar = [];
    return function _fillArray(val){
      ar.push(val);
      console.log(ar);
    };
  }

  var fillArray = new SFillArray();

  fillArray(1);
  fillArray(12);





};


const switcher = (n) => {
  if(n){
    return trueGame;
  }else{
    return falseGame;
  }
};

document.addEventListener('DOMContentLoaded', switcher(1));
