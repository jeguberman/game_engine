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
    name: name,
    rightFace: true,

    push: function(newCel){ this.cels.push(newCel); },

    add: function(newCel){ this.cels.push(newCel); },

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
      this.add(cel(options));
    }

  };
}
