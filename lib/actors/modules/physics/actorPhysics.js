import merge from 'lodash/merge';

const actorPhysics = function(options){
  const _actorPhysics = {
    name: "actorPhysics",
    des: {x:0,y:0},
    acc: {x:0,y:0},
    vel: {x:0,y:0},
    max: {x:10,y:10},
    terminal: 10,//velocity max
    friction: 0.1,
    // environment: "air", //current environments

    applyFriction: function(axis){
      var vel = this.vel[axis];
      var mod = 0;
      switch(vel){
        case vel < 0:
        mod = 1;
        break;
        case vel > 0:
        mod = -1;
        break;
        case vel === 0:
        mod = 0;
        break;
      }

      vel = vel + this.fiction * mod;
    },

    applyAccToVel: function(axis, n = 1){
      if(["x","y"].some( (x)=> x === axis )){
        this.vel[axis] += this.acc[axis] * n;
      }else{
        throw "no axis passed to function";
      }
      if (this.vel[axis] > Math.max(this.max[axis], this.terminal)){
        this.vel[axis] = Math.max(this.max[axis], this.terminal);
      }
    },

    applyVelToDes: function(axis){
      if(["x","y"].some( (x)=>x === axis )){
        this.des[axis] += this.vel[axis];
      }else{
        throw "no axis passed to function";
      }
    },

    moduleStep: function(){
      const axes = ["x","y"];
      if(this.whatever){debugger}
      axes.forEach( axis => { //you think fat arrow means you don't have to bind this as the second argument to forEach, but you weren't sure, so you made a note
        this.applyFriction(axis);
        this.applyAccToVel(axis,1);
        this.applyVelToDes(axis);
      });
    }
  };
  merge(_actorPhysics,options);
  return _actorPhysics;
};

module.exports = actorPhysics;
