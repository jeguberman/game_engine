
import merge from 'lodash/merge';

const Renderer = (options) => {

  options = merge({
      width: 16 * 60,
      height: 16 * 40,
      ctx: null,
    }, options);

  return{
    name: "renderer",
    actorComponent: "actorAnimator",
    ctx: options.ctx,
    view_width: options.width,
    view_height: options.height,


    moduleStep: function(){
      this.renderView();
      this.renderFrame();
    },

    renderView: function(){
      const ctx = this.ctx;
      ctx.clearRect(0, 0, this.view_width, this.view_height);
      ctx.fillStyle = ctx.fillStyle === "#000000";
      ctx.fillRect(0, 0, this.view_width, this.view_height);
    },

    renderFrame: function(time){
      this.actors.all.forEach( (obj) => obj.draw(this.ctx));
    },

    setContext: function(context){
      this.ctx = context;
    }

  };
};


module.exports = Renderer;
