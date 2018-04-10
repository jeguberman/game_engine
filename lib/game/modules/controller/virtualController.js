import merge from 'lodash/merge';
import {
  comparerSets
} from '../../../util/util.js';
// import KeyboardSupport from './keyboard_support.js';
// import XBoxSupport from './xbox_support.js';
import * as Maps from './controllerMaps.js';

const virtualController = function(options) {
  const _virtualController = {
    name: "virtualController",
    state: {
      buttons: {
        a: false,
        b: false,
        x: false,
        y: false,

        lb: false,
        rb: false,
        lt: false,
        rt: false,

        select: false,
        start: false,

        lclick: false,
        rclick: false,

        up: false,
        down: false,
        left: false,
        right: false,

        home: false
      },
      axes: {
        leftx: 0,
        lefty: 0,
        ltrigger: 0,
        rightx: 0,
        righty: 0,
        rtrigger: 0
      },
      frames: 0
    },
    listeners: [],

    controllerLog: {
      stateLog: [],
      changelog: [],
    },





    appendHistory(){
        this.controllerLog.stateLog.push(merge({}, this.state.virtualController));
    },

    moduleWillMount(){
      this.controllerLog.stateLog.push(merge({}, this.state));
    },

    bindKeys(){
      //keyboard
      document.addEventListener(
        'keydown', this.handleKeyDown.bind(this)
      );
      document.addEventListener(
        'keyup', this.handleKeyUp.bind(this)
      );
      //xbox
      window.addEventListener(
        'gamepadconnected', this.handleGamepadConnected.bind(this)
      );
      window.addEventListener(
        'gamepaddisconnected', this.handleGamepadDisconnected.bind(this)
      );

    },

    handleKeyDown(e) {
      if (Maps.KeyToXbox[e.key]) {
        this.state.virtualController.buttons[Maps.KeyToXbox[e.key]] = true;
      }
    },

    handleKeyUp(e) {
      if (Maps.KeyToXbox[e.key]) {
        this.state.virtualController.buttons[Maps.KeyToXbox[e.key]] = false;
      }
    },

    handleGamepadConnected(e) {
      this.gamepadConnected = true;
      console.log("gamepadConnected; id:%s; index:%d", e.gamepad.id, e.gamepad.index);
      devLog.log("gamepadConnected; id:%s; index:%d", e.gamepad.id, e.gamepad.index);
    },

    handleGamepadDisconnected(e) {
      this.gamepadConnected = false;
      console.log("gamepadDisconnected; id:%s; index:%d", e.gamepad.id, e.gamepad.index);
      devLog.log("gamepadDisconnected; id:%s; index:%d", e.gamepad.id, e.gamepad.index);
    },


    compareControllerHistory: function() {
      let lastFrame = this.controllerLog.stateLog[this.controllerLog.stateLog.length - 1];
      let changeRecord = [];
      const keys = Object.keys(this.state.virtualController.buttons);

      keys.forEach((key) => {
        try{
          // debugger
          if (this.state.virtualController.buttons[key] === true && lastFrame.buttons[key] === false) {
            changeRecord.push({
              type: "pressdown",
              payload: key
            });
          }

          if (this.state.virtualController.buttons[key] === false &&
          lastFrame.buttons[key] === true) {
            changeRecord.push({
              type: "pressup",
              payload: key
            });
          }

        }catch(error){
          debugger
        }
      },this);
      return changeRecord;
    },


    dispatchControllerEvent(detail) {
      document.dispatchEvent(new CustomEvent(
        'controllerAction', {
          detail
        }
      ));
    },

    pollGamePads() {

      let buttons = navigator.getGamepads()[0].buttons;

      for (var i in buttons) {
        if (buttons[i].pressed) {
          this.state.virtualController.buttons[Maps.xboxIndexToButton[i]] = true;
        } else {
          this.state.virtualController.buttons[Maps.xboxIndexToButton[i]] = false;
        }
      }

    },

    moduleStep() {
      if (this.gamepadConnected) {
        this.pollGamePads();
      }
      let changeFrame = this.compareControllerHistory();
      // console.log(changeFrame.size)Frame
      this.appendHistory(); //changeFrame);
      // if(Object.keys(changeFrame).length > 0){debugger}
      for (var i in changeFrame) {
        this.dispatchControllerEvent(changeFrame[i]);
      }
    },


  };
  // _virtualController.appendHistory();
  // _virtualController.bindKeys();

  return merge(_virtualController, options);
};



module.exports = virtualController;
