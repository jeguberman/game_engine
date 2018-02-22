
import merge from 'lodash/merge';

const Renderer = (options) => {

  options = merge({
      width: 16 * 60,
      height: 16 * 40,
      ctx: null,
    }, options);

  return{
    name: "renderer",
    ctx: options.ctx,
    view_width: options.width,
    view_height: options.height,

    testRender: function(){
      const ctx = this.ctx;
      ctx.clearRect(0, 0, this.view_width, this.view_height);
      ctx.fillStyle = ctx.fillStyle === "#0000ff" ? "ff000" : "#0000ff";
      ctx.fillRect(0, 0, this.view_width, this.view_height);
    },

    render: function(){
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
      this.allObjects.forEach( (obj) => obj.draw(this.ctx));
    },

    setContext: function(context){
      this.ctx = context;
    }

  };
};


module.exports = Renderer;
