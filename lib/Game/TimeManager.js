const TimeManager = () => {
  return {
    lastTime: 0,
    idealDelta: 1000/60,
    framesInASecond: 1/60,

    startClock: function(){
      this.resetClock();
      requestAnimationFrame(this.updateGameState.bind(this));
    },

    updateGameState: function(time){
      this.timeDelta = time - this.lastTime;
      this.physicsContainer(time);
      this.rendererContainer();
      this.lastTime = time;
      requestAnimationFrame(this.updateGameState.bind(this));
    },

    physicsContainer(time){
      let now;
      while( now - time >= this.framesInASecond ){
        this.calculatePhysics();
        now = Date.now;
      }
    },

    rendererContainer(){
      this.renderView();
    },


    // helper methods

    velocityScale: function(){
      return( this.timeDelta / this.idealDelta );
    },

    resetClock: function(){
      this.lastTime = 0;
    }

  };
};

module.exports = TimeManager;
