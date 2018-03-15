// import dbSetUp from './lib/util/debugUtil';
import Game from './lib/game/game';
import mockGame from './lib/mocks/mock_game';
import merge from 'lodash/merge';

const trueGame = ()=>{
  const game = mockGame();
  game.startClock();//time Manager
};

const negaGame = () => {

  function ggp(){
    return navigator.getGamepads();
  }




  function getid(idstring, endSlice){
    var gp = Array.from(ggp());
    for( var i in gp ){
      if(gp[i] && gp[i].id.slice(0, endSlice) === idstring){
        return i;
      }
    }
  }

  function getController(idstring,endSlice){
    return ggp()[getid(idstring,endSlice)];
  }




  function attachControllerToWindow(varName,id,slice){
    window[varName] = getGetControllerFunction(id, slice);
  }


  function getGetControllerFunction(id,slice){
    const _cont = ()=>getController(id,slice);
    _cont.buttons = ()=>getController(id,slice).buttons.map(b=>b.pressed);
    _cont.axes = ()=>getController(id,slice).axes;
    return _cont;
  }



  attachControllerToWindow("xbox","Xbox One", 8);
  attachControllerToWindow("lcon","Joy-Con (L)", 11);
  attachControllerToWindow("rcon","Joy-Con (R)", 11);

  const xbox = getGetControllerFunction("Xbox One", 8);
  const lcon = getGetControllerFunction("Joy-Con (L)", 11);
  const rcon = getGetControllerFunction("Joy-Con (R)", 11);

  function getJoyConVals(){
    let _vals = new Set ();
    return function _getJoyConVals(value){
      _vals.add(value);
      if(_vals.size < 9){
        // console.log(_vals);
        // console.log(_vals.size)
        return _getJoyConVals;
      }else{
        console.log(_vals);
        return "break";
      }
    };
  }

  let lconvals = new getJoyConVals();

  function theLoop(){
    let g = lconvals(
      lcon.axes()[Array.from(lcon.axes()).length-1]
    );
    // console.clear();
    // console.log(lcon.buttons());
    // console.log(lcon.axes());
    // console.log( Date.now() );
  }
  //
  //
  setInterval(
    theLoop,
     250
  );



  // console.log(ggp()[0]);

  //   document.addEventListener("gamepadconnected", (e)=>{
  //     console.log(e);
  //     // debugger
  //   });
  //   document.addEventListener("gamepaddisconnected", (e)=>{
  // console.log(e);
  // });


  // const gamepads = Array.from(navigator.getGamepads());
  // const gamepads = navigator.getGamepads();
  //
  // let lcon = gamepads[ getid("Joy-Con (L)",11) ];
  // let rcon = gamepads[ getid("Joy-Con (R)",11) ];
  // let lcons = ["Joy-Con (L)",8];
  // let rcons = ["Joy-Con (R)",8];
  // let xboxs = ["Xbox One",11];
  //
  //
  // merge(window,{lcon, rcon, xbox});
  //
  // function controllerStatsToLog(gps){
  //   // console.log(gamepad);
  //   let gp = navigator.getGamepads()[getid(...xboxs)];
  //   console.log(
  //     gp.buttons.map( button => button.pressed )
  //   );
  //   console.log( gamepad.axes );
  //
  // }
  //
  // // function getJoyConButtons(){
  // //
  // // }
  //


};

const falseGame = ()=>{


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
