import baseObj from '../../base_object.js';

const objFrameData = ()=>{

  const domElement = document.getElementById("objFrameData");
  // debugger
  const start = Date.now();
  const _objFrameData ={
    name: "objFrameData",
    frameData:{
      animationFrames: [],
      animationFPS: 0,
      physicsFrames: [],
      physicsFPS: 0,
      lastUpdate: start,
      domElement
    },
    moduleStep: function(){
      const animationFrames = this.frameData.animationFrames;
      const now = Date.now();
      animationFrames.unshift(now);
      while(now - animationFrames[animationFrames.length-1] > 1000){
        animationFrames.pop();
      }
      this.frameData.domElement.innerHTML = "Animation Frames per Second: " + animationFrames.length;
    }
  };
  return _objFrameData;
};

module.exports = objFrameData;
