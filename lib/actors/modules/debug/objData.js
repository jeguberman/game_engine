import actor from '../../actor.js';

const objData = ()=>{

  const domElement = document.getElementById("objData");

  // debugger
  const start = Date.now();
  const _objData ={
    name: "objData",
    domElement,
    moduleStep: function(){
      // debugger
      this.domElement.innerHTML = `
      acc: ${JSON.stringify(this.acc)}<br>
      vel: ${JSON.stringify(this.vel)}<br>
      des: ${JSON.stringify(this.des)}<br>
      animationState: ${JSON.stringify(this.modules.actorAnimator)}<br>
      ~:${JSON.stringify("~")}<br>
    `;}
  };
  return _objData;
};

module.exports = objData;
