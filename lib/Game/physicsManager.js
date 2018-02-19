export const PhysicsManager = (refreshRate = 60) => {
  return {
    gravity: 0.0,


    startPhysics: function(){

    },

    requestPhysicsFrame: function(callback){
      callback();
      setTimeout()
    },

    postulate: function(){
      //calculate what the game will look like in the next physics frame
    }

    checkCollisions: function(){
      //calculate collisions, if colliions are unresolved, repostulate
    }

    updatePositions: function(){
      //actualize next physics state
    }


  };
};
