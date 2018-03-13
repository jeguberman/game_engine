import {compareSets} from '../../util/util';

const gameController = ()=>{
  const KeyToButton = {
    "k":"a",
    "l":"b",
    "j":"x",
    "i":"y",

    "u":"lb",
    "o":"rb",
    "7":"lt",
    "9":"rt",

    "`":"select",
    "Escape":"start",

    "-":"lclick",
    "=":"rclick",

    "w":"up",
    "s":"down",
    "a":"left",
    "d":"right"
  };
  const ButtonToKey = {
    "a":"k",
    "b":"l",
    "x":"j",
    "y":"i",

    "lb":"u",
    "rb":"o",
    "lt":"7",
    "rt":"9",

    "select":"`",
    "start":"Escape",

    "-":"lclick",
    "=":"rclick",

    "up":"w",
    "down":"s",
    "left":"a",
    "right":"d"
  };
  const xboxIndexToKey = [
    "k",
    "l",
    "j",
    "i",

    "u",
    "o",
    "7",
    "9",

    "`",
    "Escape",

    "-",
    "=",

    "w",
    "s",
    "a",
    "d"
  ];
  const xboxIndexToButton = [
    "a",
    "b",
    "x",
    "y",

    "lb",
    "rb",
    "lt",
    "rt",

    "select",
    "start",

    "lclick",
    "rclick",

    "up",
    "down",
    "left",
    "right"
  ];
  const controllerDOM = document.getElementById("controlDebug");


  let _controller = {
    name: "gameController",
    inputs: new Set(),
    controllerDOM,
    controllerHistory: [{
      frameSlice: new Set("~"),
      frameCount: 0
    }],
    gamepadLastStep: new Set(),
    subscriptions:{},
    gamepadConnected: false,

    bindKeys: function(){
      bootLog(`${this.name} sets key bindings`);
      let self = this;
      document.addEventListener('keydown',
        (e)=>this.handleKeydown(e)
      );
      document.addEventListener('keyup',
        (e)=>this.handleKeyup(e)
      );
      window.addEventListener('gamepadconnected',
        (e)=>this.handleGamepadConnected(e)
      );

      window.addEventListener('gamepaddisconnected',
        (e)=>this.handleGamepadDisconnected(e)
      );
    },

    handleKeydown: function(e){
      if(KeyToButton[e.key]){
        this.inputs.add(KeyToButton[e.key]);
        this.dispatchControllerEvent({keydown:KeyToButton[e.key]});
      }
    },

    dispatchControllerEvent: function(detail){
      document.dispatchEvent( new CustomEvent(
        'controllerAction',
        { detail }
      ));
    },

    handleKeyup:function(e){
      if(KeyToButton[e.key]){
        this.inputs.delete(KeyToButton[e.key]);
        this.dispatchControllerEvent({keyup:KeyToButton[e.key]});
      }
    },

    handleGamepadConnected(e){
      console.log("Gamepad connected at index %d: %s",e.gamepad.index,e.gamepad.id);
      this.gamepadConnected = true;//extremely unhappy about this use of global variables. More trouble binding this I suppose
    },

    handleGamepadDisconnected(e){
      console.log("Gamepad disconnected at index %d: %s",e.gamepad.index,e.gamepad.id);
      if(navigator.getGamepads()[0]===null){
        this.gamepadConnected = false;
      }
    },

    recordHistory(){
      const newFrame = new Set();
      this.inputs.forEach((el) => newFrame.add(el));
      if (newFrame.size === 0){newFrame.add("~");}

      let lastFrame = this.controllerHistory[this.controllerHistory.length - 1];

      if(compareSets(newFrame,lastFrame.frameSlice)){
        lastFrame.frameCount += 1;
      }else{
        this.controllerHistory.push({frameSlice: newFrame, frameCount: 1});
      }
    },



    getHistoryTailAsString:function(n){
      let history = this.controllerHistory.slice(-n).reverse();
      let str = "";
      history.map( (frame) => {
        str = str + this.inputFrameAsString(frame.frameSlice);
      });
      return str;
    },

    getHistoryTail:function(n){
      let history = this.controllerHistory.slice(-n).reverse;
    },

    inputFrameAsString: function(frame){ //converts a set to a string, specifically to be printed to the debug window
      let str = "";
      if (frame.size > 0){
        frame.forEach( (key)=>{
          if(key === " "){key = "space";}
          str = str + key + ",";
        });
      }
      str = str.slice(0, -1) + "<br>";
      return str;
    },

    getGamepadInputs: function(){

      if(this.gamepadConnected){
        let kd = new Event('keydown');
        let ku = new Event('keyup');
        let buttons = navigator.getGamepads()[0].buttons;
        for(var i in buttons){
          if(buttons[i].pressed){
            kd.key = xboxIndexToKey[i];
            this.gamepadLastStep.add(xboxIndexToButton[i]);
            document.dispatchEvent(kd);
          } else {
            if(this.gamepadLastStep.has(xboxIndexToButton[i]) ){
              this.gamepadLastStep.delete(xboxIndexToButton[i]);
              ku.key = xboxIndexToKey[i];
              document.dispatchEvent(ku);
            }
          }
        }
      }
    },



    onNewActor(actor){
      if(actor.modules.actorController){
        actor.initializeSubscriptions();
      }
    },

    moduleStep: function(){
      this.getGamepadInputs();
      this.recordHistory();
      this.controllerDOM.innerHTML = "Inputs: <br>" + this.getHistoryTailAsString(5) + "<br/>";
    },



  };
  // _controller.bindKeys();
  return _controller;

};

module.exports = gameController;
