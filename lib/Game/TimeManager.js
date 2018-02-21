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
      this.updateAllObjectStates();//objectManager
      this.physicsContainer(time);
      this.rendererContainer();
      this.lastTime = time;
      requestAnimationFrame(this.updateGameState.bind(this));
    },

    physicsContainer(time){
      let now;
      while( now - time >= this.framesInASecond ){
        this.calculatePhysics();//physicsManager
        now = Date.now;
      }
    },

    rendererContainer(){
      this.render();//renderer
    },


    // helper methods

    velocityScale: function(){
      return( this.timeDelta / this.idealDelta );
    },//returns a multiplier to adjust physics calculations by how much time has actually passed compared to how much time was expected to pass as per the calculations

    resetClock: function(){
      this.lastTime = 0;
    }

  };
};

module.exports = TimeManager;
