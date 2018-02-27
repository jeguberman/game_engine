import baseObj from '../objects/base_object.js';

const DebugInfo = ()=>{

  const domElement = document.getElementById("debug");
  const start = Date.now();
  const debug ={
    // start,
    animationFrames: [],
    animationFPS: 0,
    physicsFrames: [],
    physicsFPS: 0,
    lastUpdate: start,
    domElement
  };

  const _debugInfo = new baseObj({name: "debug"});
  _debugInfo.mergeWith(
    {
      debug,
      moduleStep: function(){
        const animationFrames = this.debug.animationFrames;
        const now = Date.now();
        animationFrames.unshift(now);
        while(now - animationFrames[animationFrames.length-1] > 1000){
          animationFrames.pop(); //assumes there are 1000 ticks in one second of Date.now object.
        }
        // if(now - this.debug.lastUpdate >= 200){
          this.debug.domElement.innerHTML = "Animation Frames per Second: " + animationFrames.length;
        // }
      },
      draw: function(){},
    }
  );
  return _debugInfo;
};

module.exports = DebugInfo;
