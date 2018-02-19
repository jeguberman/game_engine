
import merge from 'lodash/merge';

const Renderer = (options) => {

  options = merge({}, {
      width: 900,
      height: 600
    }, options);

  return{
    ctx: options.ctx,
    width: options.view_width,
    height: options.view_height,

    testRender: function(){
      const ctx = this.ctx;
      ctx.clearRect(0, 0, this.width, this.height);
      ctx.fillStyle = "blue";
      ctx.fillRect(0, 0, this.width, this.height);
    },

    renderGame: function(velocityScale){
      this.game.step(velocityScale);
    },

    startAnimation: function(){
      this.lastTime = 0;
      requestAnimationFrame(this.animate.bind(this));
    },

    animateFrame: function(time){
      const ctx = this.ctx;
      const timeDelta = time - this.lastTime;
      const idealDelta = 1000/60;
      const velocityScale = timeDelta / idealDelta;
      this.lastTime = time;
    },

  };
};


module.exports = Renderer;
