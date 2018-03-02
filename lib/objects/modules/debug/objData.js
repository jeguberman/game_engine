import baseObj from '../../base_object.js';

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
      this.objData.domElement.innerHTML = `x-coord: ${this.dx}`;
    },
    boxos:function(){
      this.dx += 40;
    }
  };
  return _objData;
};

module.exports = objData;
