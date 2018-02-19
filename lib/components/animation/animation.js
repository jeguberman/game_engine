import merge from 'lodash/merge';

export function cel(options){
  return merge({},
    { sX: 0, sY: 0, sW: 16, sH: 16, frameCount: 5 },
    options
  );
}

export class AnimationCycle{
  constructor(name = undefined){
    this.cels = [];
    this.celIdx = 0;
    this.frameIdx = 0;
    this.name = name;
    this.rightFace = true;
  }

  push(newCel){ this.cels.push(newCel); }

  add(newCel){ this.cels.push(newCel); }

  currentCel(){
    return this.cels[this.celIdx];
  }

  incrementIndex(){
    this.frameIdx += 1;
    if (this.frameIdx > this.currentCel().frameCount){
      this.frameIdx = 0;
      this.celIdx += 1;
      if(this.celIdx > this.cels.length-1){
        this.celIdx = 0;
      }
    }
  }

  advance(){

    this.incrementIndex();
    return this.currentCel();
  }

  spawnCel(options = {}){
    return cel(options);
  }

  createCel(options = {}){
    this.add(cel(options));
  }



  giveFrame(){

  }

}
