//breadcrumbs: Elise said something about a single source of truth for state. Currently the sprite is just a store of animation data. I think what elise is getting at is closer to a redux cycle.

//that is to say, the gameSpaceObject knows what the current frame and frame data is, passes that information to the sprite, and the sprite returns the frame data for the next state.

import merge from 'lodash/merge';

const Sprite = (options) => {

  let image = new Image();
  image.src = options.src;
  let animations = {};

  return {
    image,
    animations,
    draw: function(ctx){
      this.step();
      ctx.save();
      ctx.fillStyle = "red";
      ctx.fillRect(this.pos[0], this.pos[1], this.width, this.height);
      ctx.drawImage(this.image, this.sX, this.sY, this.width, this.height, this.pos[0], this.pos[1], this.width, this.height);
      ctx.restore();
    },

    add:function(cycle){this.animations[cycle.name] = cycle;},
    get:function(string){return this.animations[string];},

    step:function(){
      let currentCel = this.animations[this.state].advance();
      merge(this, currentCel);
    },
  };
};

export default Sprite;
