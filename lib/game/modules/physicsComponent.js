const globalPhysics = (options) => {
  let _globalPhysics = {
    name: "globalPhysics",
    gravity: 0.75,

    moduleStep: function(){
      this.actors.all.forEach( (actor)=>{
        actor.vAccel += this.gravity;
      },this);
    }


  };
  merge(_globalPhysics, options);
  return _globalPhysics;
};

module.exports = globalPhysics;
