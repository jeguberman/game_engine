import {compareSets} from '../../util/util';

const gameController = ()=>{
  const controllerDOM = document.getElementById("controlDebug");
  controlDebug.innerHTML = "Inputs: ";
  let _controller = {
    name: "gameController",
    inputs: new Set(),
    controllerDOM,
    controllerHistory: [{frameSlice: new Set("~"), frameCount: 0}],


    bindKeys: function(){
      document.addEventListener('keydown',(e)=>{
        this.handleKeydown(e.key);
      });
      document.addEventListener('keyup', (e)=>{
        this.handleKeyup(e.key);
      });
    },



    handleKeydown: function(key){
      this.inputs.add(key);
      // this.globalEvents[`keyDown${key}`] = true;
    },

    handleKeyup:function(key){
      this.inputs.delete(key);
      // delete this.globalEvents[`keyDown${key}`];
      // this.globalEvents[`keyUp${key}`] = true;
    },

    moduleStep: function(){
      this.recordHistory();
      //filter globalEvents for any keyUp events
      this.controllerDOM.innerHTML = "Inputs: <br>" + this.getHistoryTailAsString(5) + "<br/>";
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

    getEvents: function(){
      return {inputs:this.inputs};
    },
  };
  _controller.bindKeys();
  return _controller;

};

module.exports = gameController;
