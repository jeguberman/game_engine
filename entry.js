import dbSetUp from './lib/util/debugUtil';
import Game from './lib/game/game';
import mockGame from './lib/mocks/mock_game';
import merge from 'lodash/merge';

const trueGame = ()=>{
  const game = mockGame();
  game.startClock();
};

const falseGame = () => {


let gp = navigator.getGamepads()[0];

function spaceFunc(e){
  console.log("anything");
  if(e.key===" ")
  {console.log("space");}
  if(e.key==="a")
  {console.log("a");}
}

document.addEventListener('keydown', spaceFunc);

setInterval(
  ()=>{
    if(navigator.getGamepads()[0].buttons[0].pressed){
      let i = new Event('keydown');
      let ii = new Event('keydown');
      i.key = " ";
      ii.key="a";
      document.dispatchEvent(i);
      console.log("middle");
      document.dispatchEvent(ii);
    }
  },
  100
);







};


const switcher = (n) => {
  if(n){
    return trueGame;
  }else{
    return falseGame;
  }
};

document.addEventListener('DOMContentLoaded', switcher(1));
