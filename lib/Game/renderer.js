
import merge from 'lodash/merge';

const Renderer = (options) => {

  options = merge({}, {
      width: 16 * 60,
      height: 16 * 40,
    }, options);

  return{
    ctx: options.ctx,
    view_width: options.width,
    view_height: options.height,

    testRender: function(){
      const ctx = this.ctx;
      ctx.clearRect(0, 0, this.view_width, this.view_height);
      ctx.fillStyle = ctx.fillStyle === "#0000ff" ? "ff000" : "#0000ff";
      ctx.fillRect(0, 0, this.view_width, this.view_height);
    },

    renderView: function(velocityScale){
      const ctx = this.ctx;
      ctx.clearRect(0, 0, this.view_width, this.view_height);
      ctx.fillStyle = ctx.fillStyle === "#000000";
      ctx.fillRect(0, 0, this.view_width, this.view_height);
    },

    animateFrame: function(time){

    },

  };
};


module.exports = Renderer;
