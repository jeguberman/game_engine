const PhysicsManager = () => {
  return {
    gravity: 0.0,
    termVel: 20,


    calculatePhysics: function(){
      this.postulate();
      this.checkCollisions();
      this.updatePositions();
    },

    postulate: function(){
      //calculate what the game will look like in the next physics frame
    },

    checkCollisions: function(){
      //calculate collisions, if colliions are unresolved, repostulate
    },

    updatePositions: function(){
      //actualize next physics state
    }


  };
};

module.exports = PhysicsManager;
