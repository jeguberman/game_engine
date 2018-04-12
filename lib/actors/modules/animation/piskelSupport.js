//a parasite is a type of wrapper. It's basically a module that attaches it's functions to the base class without taking advantage of the base class's integration procedures. It's fine for now, but it should indicate a need for redesign after creating something stable. Also saying I need to change it later helps me justify the delightful use of grotesque language to describe what's happening.

import merge from 'lodash/merge';
import { cel, AnimationCycle } from './animationCycle.js';

const piskelSupportParasite = function(owner){
  return {
    owner,
    animaFeed: [],
    celuloidFeed: [],
    payload: [],

    apoptosize: function(){
      for(var prop in this){
        if(prop !== "payload" && prop !== "owner"){
          delete this[prop];
        }
      }
    },

    addInfoFrame: function(options){
      this.animaFeed.push(
        {name:options.name, frames:options.frames}
      );
    },

    addInfoFrames: function(ary){
      for(var idx in ary){
        this.addInfoFrame(ary[idx]);
      }
    },

    piskelCel: function(options, frameCount){
      let _cel = {
        sX: options.x,
        sY: options.y,
        draw_width: options.w,
        draw_height: options.h,
        frameCount
      };
      return _cel;
    },

    piskelZip:function(){
      while( this.animaFeed.length > 0 && this.celuloidFeed.length > 0 ){
        //these should both be 0 when the cycle is over. If not add something to the devBootLog
        const anima = this.animaFeed.shift();
        let newAnimation = new AnimationCycle(anima.name);
        while(anima.frames.length > 0){
          const celuloid = this.celuloidFeed.shift();
          const newCel = this.piskelCel(celuloid, anima.frames.shift());
          newAnimation.addCel(newCel);
        }
        this.payload.push(newAnimation);
      }
    },

    piskelParse:function(json){//O(n*m) look up, make better?
      if(json.frames){
        json = json.frames;
      }
      for( var frame in json ){
        this.celuloidFeed.push(json[frame].frame);
      }
    },
  };
};



function piskelInfest(actorAnimator){
  merge(
    actorAnimator,
    {
      spawnPiskelLarva:function(){
        return new piskelSupportParasite(this);
      },
      reabsorbPiskelLarva:function(obj){
        if(obj.owner === this){
          this.addAnimations(obj.payload);
        }
      }
    }
  );
}



module.exports = piskelInfest;
