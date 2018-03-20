import {compareSets} from '../../util/util';

// const controllerDebug = ()=>{

  const controllerDOM = document.getElementById("controlDebug");



  events = new Set();



  document.addEventListener('controllerAction',handleControllerAction);

  function handleControllerAction(e){
    
  }



//     getGamepadInputs: function(){
//       // console.log(this.gamepadConnected);
//       if(this.gamepadConnected){
//         // let kd = new Event('keydown');
//         // let ku = new Event('keyup');
//         let buttons = navigator.getGamepads()[0].buttons;
//         for(var i in buttons){
//           if(buttons[i].pressed){
//             console.log(i);
//             // kd.key = xboxIndexToKey[i];
//             this.gamepadLastStep.add(xboxIndexToButton[i]);
//             // document.dispatchEvent(kd);
//           } else {
//             if(this.gamepadLastStep.has(xboxIndexToButton[i]) ){
//               this.gamepadLastStep.delete(xboxIndexToButton[i]);
//               // ku.key = xboxIndexToKey[i];navigat
//               // document.dispatchEvent(ku);
//             }
//           }
//         }
//       }
//     },
//
//
//
//     // onNewActor(actor){
//     //   if(actor.modules.actorController){
//     //     actor.initializeSubscriptions();
//     //   }
//     // },
//
//     moduleStep: function(){
//       this.getGamepadInputs();
//       this.recordHistory();
      // this.controllerDOM.innerHTML = "Inputs: <br>" +
       // this.getHistoryTailAsString(5) + "<br/>";
//     },
//
//
//
//   };
//   // _controller.bindKeys();
//   return _controller;
//
// };

// module.exports = gameController;
