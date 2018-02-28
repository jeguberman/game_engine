import {compareSets} from '../../util/util';

const gameController = ()=>{
  const controllerDOM = document.getElementById("controlDebug");
  controlDebug.innerHTML = "Inputs: ";
  let _controller = {
    name: "gameController",
    inputs: new Set(),
    controllerDOM,
    controllerHistory: [{frameSlice: new Set("~"), frameCount: 0}],

    // curateControllerHistory: function(){
    //   if()
    //   if(controllerHistory.length === 0){}
    // },

    bindKeys: function(){
      document.addEventListener('keydown',(e)=>{
        this.handleKeydown(e.key);
      });
      document.addEventListener('keyup', (e)=>{
        this.handleKeyup(e.key);
      });
    },

    getEvents: function(){
      return {inputs:this.inputs};
    },

    handleKeydown: function(key){
      this.inputs.add(key);
    },

    handleKeyup:function(key){
      this.inputs.delete(key);
    },

    moduleStep: function(){
      this.recordHistory();
      this.controllerDOM.innerHTML = "Inputs: <br>" + this.getHistoryTailAsString(5) + "<br/>";
      // this.controllerDOM.innerHTML = "Inputs:<br/>" + this.inputFrameAsString(this.inputs) + "<br/>";
    },

    recordHistory(){
      const newFrame = new Set();
      this.inputs.forEach((el) => newFrame.add(el));
      if (newFrame.size === 0){
        newFrame.add("~");
      }

      let lastFrame = this.controllerHistory[this.controllerHistory.length - 1];
      // if(this.inputs.size > 0){debugger}

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

    inputFrameAsString: function(frame){
      let str = "";
      if (frame.size > 0){
        frame.forEach( (key)=>{
          if(key === " "){key = "space";}
          str = str + key + ",";
        });
      }
      str = str.slice(0, -1) + "<br>";
      return str;
    }
  };
  _controller.bindKeys();
  return _controller;

};

module.exports = gameController;
