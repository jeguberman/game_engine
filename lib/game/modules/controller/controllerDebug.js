// import {compareSets} from '../../util/util';

// const controllerDebug = ()=>{
function controllerFeedBack(){

  const controllerDOM = document.getElementById("controlDebug");
  controllerDOM.innerHTML ="Inputs: "


  const activeInputs = new Set();
  document.addEventListener('controllerAction', handleControllerAction);

  function inputFrameAsString(frame){ //converts a set to a string, specifically to be printed to the debug window
    let str = "";

    if (frame.size > 0){
      frame.forEach( (key)=>{
        if(key === " "){key = "space";}
        str = str + key + ",";
      });
    }
    str = str.slice(0, -1);
    return str;
  }




    function handleControllerAction(e){

      switch(e.detail.type){
        case "pressdown":
        activeInputs.add(e.detail.payload);
        break;
        case "pressup":
        activeInputs.delete(e.detail.payload);
        break;
      }
      let t = inputFrameAsString(activeInputs);
      controllerDOM.innerHTML = `Inputs:<br>${t}`;
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
}
module.exports = controllerFeedBack;
