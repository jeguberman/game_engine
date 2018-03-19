import merge from 'lodash/merge';
import {comparerSets} from '../../../util/util.js';
// import KeyboardSupport from './keyboard_support.js';
import XBoxSupport from './xbox_support.js';
import * as Maps from './controllerMaps.js';

const virtualController = function(options){
  const _virtualController = {
    name: "virtualController",
    state: {
      buttons:{
        a:false,
        b:false,
        x:false,
        y:false,

        lb:false,
        rb:false,
        lt:false,
        rt:false,

        select:false,
        start:false,

        lclick:false,
        rclick:false,

        up:false,
        down:false,
        left:false,
        right:false,

        home:false
      },
      axes:{
        leftx:0,
        lefty:0,
        ltrigger:0,
        rightx:0,
        righty:0,
        rtrigger:0
      },
      frames: 0
    },
    listeners: [],

    controllerLog: {
      stateLog: [],
      changelog: [],
    },





    appendHistory(newFrame){
    //   // if( newFrame.size === 0 ){
    //   //   this.stateLog[this.stateLog.length - 1].frames += 1;
    //   //   return;
    //   // }
    //   // if(
    //     // this.controllerLog.stateLog && this.controllerLog.stateLog.buttons.some(
    //   //     (e)=>{e === true;}
    //   //   )
    //   // ){
    //     // debugger
    //   // }
    //
      this.controllerLog.stateLog.push(merge({}, this.state));
    //
    },

    bindKeys(){
      document.addEventListener(
        'keydown', this.handleKeyDown.bind(this)
      );
      document.addEventListener(
        'keyup', this.handleKeyUp.bind(this)
      );
    },

    handleKeyDown(e){
      if(Maps.KeyToXbox[e.key]){
        this.state.buttons[ Maps.KeyToXbox[e.key] ] = true;
      }
    },

    handleKeyUp(e){
      if(Maps.KeyToXbox[e.key]){
        this.state.buttons[ Maps.KeyToXbox[e.key] ] = false;
      }
    },

    pushControllerHistory(){
      const newFrame = new Set();
      this.state.buttons.forEach( (el) => {
        newFrame.add(el);
      });
      if (newFrame.size === 0){ newFrame.add("~"); }

      let lastFrame = this.controllerHistory.state[this.controllerHistory.state.length - 1];

      if(compareSets(newFrame,lastFrame.frameSlice)){
        lastFrame.frameCount += 1;
      }else{
        this.controllerHistory.push({frameSlice: newFrame, frameCount: 1});
      }
    },



    compareControllerHistory: function(){
      let lastFrame = this.controllerLog.stateLog[this.controllerLog.stateLog.length - 1];
      let changeRecord = {};
      const keys = Object.keys(this.state.buttons);

      keys.forEach( (key) => {
        if( this.state.buttons[key] === true && lastFrame.buttons[key] === false ){
          changeRecord.pressdown = key;
        }
        if( this.state.buttons[key] === false && lastFrame.buttons[key] === true ){
          changeRecord.pressup = key;
        }
      });
      return changeRecord;
    },


    dispatchControllerEvent(detail){
      // console.log("dispatching controller event %s", detail);
      document.dispatchEvent( new CustomEvent(
        'controllerAction',
        { detail }
      ));
    },

    moduleStep(){
      let changeFrame = this.compareControllerHistory();
      // console.log(changeFrame.size);
      this.appendHistory();//changeFrame);
      // if(Object.keys(changeFrame).length > 0){debugger}
      for( var changeEvent in changeFrame ){
        this.dispatchControllerEvent({[changeEvent]: changeFrame[changeEvent]});
      }
    },

  };
  _virtualController.appendHistory();
  // _virtualController.bindKeys();

  return merge(_virtualController, options);
};



module.exports = virtualController;
