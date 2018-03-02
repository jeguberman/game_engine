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

const MM = {
    modules:{},
    addModule:function(newMod){
      this.modules[newMod.name]=newMod.state;
    },
    moduleState: function(moduleName){
      return this.modules[moduleName];
    }
};

MM.addModule({name:"test",state:"before"});

console.log(MM.modules.test);
MM.modules.test = "after";
console.log(MM.modules.test);
console.log(MM.moduleState("test"));



};


const switcher = (n) => {
  if(n){
    return trueGame;
  }else{
    return falseGame;
  }
};

document.addEventListener('DOMContentLoaded', switcher(1));
