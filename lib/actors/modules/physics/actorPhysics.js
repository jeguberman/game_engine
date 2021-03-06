import merge from 'lodash/merge';

const actorPhysics = function(options){
  const _actorPhysics = {
    name: "actorPhysics",
    des: {x:0,y:0},
    acc: {x:0,y:0},
    vel: {x:0,y:0},
    max: {x:10,y:10},
    terminal: 10,//velocity max
    friction: 0.09,
    // environment: "air", //current environments

    applyFriction: function(axis){
      // if(this.vel[axis] > 9.7){debugger}
      // console.log("hit")
      this.vel[axis] = this.vel[axis] - this.vel[axis] * this.friction;
      if ( this.vel[axis] > 0 && this.vel[axis] < 0.2 ){ this.vel[axis] = 0;}
      if ( this.vel[axis] < 0 && this.vel[axis] > -0.2 ){ this.vel[axis] = 0;}
    },

    applyAccToVel: function(axis, n = 1){
        this.vel[axis] = this.vel[axis] + (this.acc[axis] * n);
      if (this.vel[axis] > Math.min(this.max[axis], this.terminal)){
        this.vel[axis] = Math.min(this.max[axis], this.terminal);
      }
      if (this.vel[axis] < -1 * Math.min(this.max[axis], this.terminal)){
        this.vel[axis] = -1 * Math.min(this.max[axis], this.terminal);
      }
      // this.acc[axis] = 0;
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
      axes.forEach( axis => {
        this.boundaryLoopBack(axis);
        this.applyAccToVel(axis,1);
        this.applyFriction(axis);
        this.applyVelToDes(axis);
      }, this);
    },

    boundaryLoopBack(axis){
      if(this.des.x < 0){this.des.x = this.des.x + 960 - this.collision_width;}
      if(this.des.x > 960){this.des.x = this.des.x - 960;}
      if(this.des.y < 0){this.des.y = this.des.y + 640 - this.collision_height;}
      if(this.des.y > 640){this.des.y = this.des.y - 640;}
    }
  };
  merge(_actorPhysics,options);
  return _actorPhysics;
};

module.exports = actorPhysics;
