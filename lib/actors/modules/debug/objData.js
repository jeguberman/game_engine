import actor from '../../actor.js';

const objData = ()=>{

  const domElement = document.getElementById("objData");

  // debugger
  const start = Date.now();
  const _objData ={
    name: "objData",
    objData:{
      animationFrames: [],
      animationFPS: 0,
      physicsFrames: [],
      physicsFPS: 0,
      lastUpdate: start,
      domElement
    },
    moduleStep: function(){
      // debugger
      this.objData.domElement.innerHTML = `x-coord: ${this.des.x}<br>
      y-cord: ${this.des.y}<br>
      animationState: ${this.modules.actorAnimator}`;
    }
  };
  return _objData;
};

module.exports = objData;
