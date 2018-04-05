import merge from 'lodash/merge';

export function cel(options){
  return merge(
    {sX: 0, sY: 0, draw_width: 16, draw_height: 16, frameCount: 5},
    options
  );
}

export const AnimationCycle = (name = undefined) => {
  return{
    cels: [],
    celIdx: 0,
    frameIdx: 0,
    name,
    rightFace: true,

    push: function(newCel){ this.cels.push(newCel); },

    addCel: function(newCel){ this.cels.push(newCel); },

    currentCel: function(){
      return this.cels[this.celIdx];
    },

    incrementIndex:function(){
      this.frameIdx += 1;
      if (this.frameIdx > this.currentCel().frameCount){
        this.frameIdx = 0;
        this.celIdx += 1;
        if(this.celIdx > this.cels.length-1){
          this.celIdx = 0;
        }
      }
    },

    advance:function(){
      this.incrementIndex();
      return this.currentCel();
    },

    spawnCel:function(options = {}){
      return cel(options);
    },

    createCel:function(options = {}){
      this.addCel(cel(options));
    },

    piskelCel: function(options){
      return spawnCel({
        sX: options.x,
        sY: options.y,
        draw_width: options.w,
        draw_height: options.h
      })
    },

    // piskel: function(json){//O(n*m) look up, make better?
    //   if(json.frames){
    //     json = json.frames
    //   }
    //   frames = {};
    //   let i = 0;
    //   for( var frame in json ){
    //     Object.assign(frames, {[frame]: json[frame].frame});
    //   }
    //   debugger
    //
    // }

  };

}

// AnimationCycle.prototype.piskel = function(json){//O(n*m) look up, make better?
//     if(json.frames){
//       json = json.frames
//     }
//     frames = {};
//     let i = 0;
//     for( var frame in json ){
//       Object.assign(frames, {[frame]: json[frame].frame});
//     }
//     debugger
//
//   }



// module.exports = AnimationCycle;
// export default
