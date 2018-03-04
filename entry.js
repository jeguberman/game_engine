import dbSetUp from './lib/util/debugUtil';
import Game from './lib/game/game';
import mockGame from './lib/mocks/mock_game';
import merge from 'lodash/merge';

const trueGame = ()=>{
  const game = mockGame();
  dbAdd("game",game);
  game.startClock();
};

const falseGame = () => {

const thing = function(options){
  console.log(this.type)
  this.type = "basic";
  this.age = 21;
  this.mature = function (){
    this.age += 1;
  };
  merge(this,options);
}

const guy = new thing({age:4});

console.log(guy.age);
guy.mature();
console.log(guy.age);



};


const switcher = (n) => {
  if(n){
    return trueGame;
  }else{
    return falseGame;
  }
};

document.addEventListener('DOMContentLoaded', switcher(0));
