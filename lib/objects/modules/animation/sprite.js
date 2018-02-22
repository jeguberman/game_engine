//breadcrumbs: Elise said something about a single source of truth for state. Currently the sprite is just a store of animation data. I think what elise is getting at is closer to a redux cycle.

//that is to say, the gameSpaceObject knows what the current frame and frame data is, passes that information to the sprite, and the sprite returns the frame data for the next state.

import merge from 'lodash/merge';

const Sprite = (options) => {

  let image = new Image();
  image.src = options.src;
  let animations = {};

  return {
    name:"sprite",
    image,
    animations,
    drawCollision: function(ctx){
      ctx.save();
      ctx.fillStyle = "#00eeff";
      ctx.fillRect(this.dx, this.dy, this.collision_width, this.collision_height);
      ctx.restore();
    },

    draw: function(ctx){

      this.drawCollision(ctx);
      ctx.save();
      ctx.translate(this.dx + this.collision_width*0.5, this.dy + this.collision_height*0.5);
      ctx.fillStyle = "red";
      ctx.fillRect((-this.draw_width * 0.5), (-this.draw_height * 0.5), this.draw_width, this.draw_height);
      ctx.drawImage(this.image, this.sX, this.sY, this.draw_width, this.draw_height, (-this.draw_width * 0.5), (-this.draw_height * 0.5), this.draw_width, this.draw_height);
      ctx.restore();
    },

    add:function(cycle){this.animations[cycle.name] = cycle;},
    get:function(string){return this.animations[string];},

    moduleStep:function(){
      let currentCel = this.animations[this.state].advance();
      merge(this, currentCel);
    },

    getAnimations:function(){
      return(this.animations.keys);
    }
  };
};

export default Sprite;
