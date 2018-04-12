//breadcrumbs: Elise said something about a single source of truth for state. Currently the sprite is just a store of animation data. I think what elise is getting at is closer to a redux cycle.

//that is to say, the gameSpaceObject knows what the current frame and frame data is, passes that information to the sprite, and the sprite returns the frame data for the next state.

import merge from 'lodash/merge';
import { cel, AnimationCycle } from './animationCycle';

const actorAnimator = (options) => {

  let image = new Image();
  image.src = options.src;
  let animations = {};

  return {
    name:"actorAnimator",
    state:{
      cycle: "idle",
      alphaOpacity: 1
    },
    image,
    animations,
    drawCollision: function(ctx){
      ctx.save();
      ctx.fillStyle = "#00eeff";
      ctx.fillRect(this.des.x, this.des.y, this.collision_width, this.collision_height);
      ctx.restore();
    },

    draw: function(ctx){

      this.drawCollision(ctx);
      ctx.save();
      // ctx.globalAlpha = this.state.actorAnimator.alphaOpacity;
      ctx.translate(this.des.x + this.collision_width*0.5, this.des.y + this.collision_height*0.5);
      ctx.fillStyle = "red";
      // ctx.fillRect((-this.draw_width * 0.5), (-this.draw_height * 0.5), this.draw_width, this.draw_height);
      ctx.drawImage(this.image, this.sX, this.sY, this.draw_width, this.draw_height, (-this.draw_width * 0.5), (-this.draw_height * 0.5), this.draw_width, this.draw_height);
      ctx.restore();
    },

    addAnimation:function(cycle){
      this.animations[cycle.name] = cycle;
    },

    addAnimations:function(animations){

      for(var cycle in animations){
        this.addAnimation(animations[cycle]);
      }

    },

    moduleStep:function(){
      let currentCel = this.animations[this.state.actorAnimator.cycle].advance();
      merge(this, currentCel);
      delete this.frameCount;
    },

    set:function(string){console.log("you should definitely not being seeing this");},

    get:function(string){return this.animations[string];},


    getAnimations:function(){
      return(this.animations.keys);
    },

    spawnAnimationCycle:function(name){
      return new AnimationCycle(name);
    },

    setInitialCycleState:function(string){
      if(this.state.cycle){
        this.state.cycle = string;
      }else if(this.state.actorAnimator.cycle){
        this.state.actorAnimator.cycle = string;
      }
    },

    changeAnimation: function(string){
      this.state.actorAnimator.cycle = string;
    },

    moduleDidMount: function(){

    }


  };
};

export default actorAnimator;
