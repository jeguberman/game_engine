// import dbSetUp from './lib/util/debugUtil';
import Game from './lib/game/game';
import mockGame from './lib/mocks/mock_game';
import merge from 'lodash/merge';
import { ggp, getid, getControllerById, attachControllerToWindow, miniControllerObject } from "./lib/util/controllerUtilities.js";
import * as gamepadMaps from "./lib/actors/modules/controller/controllerMaps.js";
import controllerFeedBack from "./lib/game/modules/controller/controllerDebug.js";


const trueGame = ()=>{
  const game = mockGame();
  game.startClock();//time Manager
  controllerFeedBack();


};

const negaGame = () => {
  //the negaGame is basically a larger false game for ideas which might even be their own side projects if creating new webpack projects wasn't such a pain in the buttottom.
  
  // attachControllerToWindow("xbox","Xbox One");
  // attachControllerToWindow("lcon","Joy-Con (L)");
  // attachControllerToWindow("rcon","Joy-Con (R)");
  //
  const xbox = miniControllerObject("Xbox One", 8);
  const lcon = miniControllerObject("Joy-Con (L)");
  const rcon = miniControllerObject("Joy-Con (R)");

  function theLoop(){
    console.clear();
    console.log(xbox().buttons[0]);
  }
  setInterval(theLoop,250);
};

const falseGame = ()=>{

  console.error("You're in false game, which is for testing small ideas, usually javascript fundamentals.");

};
const switcher = (n) => {
  switch(n){
    case 1:
    return trueGame;
    case 0:
    return falseGame;
    case -1:
    return negaGame;
  }

};

document.addEventListener('DOMContentLoaded', switcher(1));
