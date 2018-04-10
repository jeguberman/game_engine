import actorCollision from '../../actors/modules/collision/actorCollision';

const playerCollision = function(){
  const _playerCollision = new actorCollision();
  
  _playerCollision.addCollisionResponse(
    "coin",
    "foot",
    function(){
      this.changeAnimation("collideDown");
      this.state.actorPhysics.block.down = true;
    }
  );

  _playerCollision.addCollisionResponse(
    "coin",
    "head",
    function(){
      this.changeAnimation("collideUp");
      this.state.actorPhysics.block.up = true;
    }
  );

  _playerCollision.addCollisionResponse(
    "coin",
    "left",
    function(){
      this.changeAnimation("collideLeft");
      this.state.actorPhysics.block.left = true;
    }
  );

  _playerCollision.addCollisionResponse(
    "coin",
    "right",
    function(){
      this.changeAnimation("collideRight");
      this.state.actorPhysics.block.right = true;
    }
  );

  _playerCollision.changeDefaultCollisionResponse(
    function(){
      this.state.actorAnimator.cycle = "idle";
      for(var block in this.state.actorPhysics.block){
        this.state.actorPhysics.block[block] = false;
      }
    }
  );
  return _playerCollision;
};

module.exports = playerCollision;
