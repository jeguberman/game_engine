export const TimeManager = {
  lastTime: 0,
  idealDelta: 1000/60,

  startClock: function(){
    requestAnimationFrame(this.updateGameState.bind(this));
  },

  updateGameState: function(time){
    const timeDelta = time - this.lastTime;
    const velocityScale = timeDelta / this.idealDelta;
    this.updatePhysics();
    this.animateFrame();
    this.lastTime = time;
    requestAnimationFrame(this.updateGameState.bind(this));
  },



  updatePhysics: function(){
    this.postulate();
    this.checkCollisions();
    this.updatePositions();
  }

};
