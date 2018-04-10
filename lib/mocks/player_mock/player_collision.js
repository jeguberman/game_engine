import actorCollision from '../../actors/modules/collision/actorCollision';

const playerCollision = function(){
  const _playerCollision = new actorCollision();
  _playerCollision.addCollisionResponse(
    "coin",
    "foot",
    function(){
      this.modules.actorAnimator = "collideDown";
      this.flags.blockDown = true;
    }
  );
  _playerCollision.addCollisionResponse(
    "coin",
    "head",
    function(){
      this.modules.actorAnimator = "collideUp";
      this.flags.blockUp = true;
    }
  );
  _playerCollision.addCollisionResponse(
    "coin",
    "left",
    function(){
      this.modules.actorAnimator = "collideLeft";
      this.flags.blockLeft = true;
    }
  );
  _playerCollision.addCollisionResponse(
    "coin",
    "right",
    function(){
      this.modules.actorAnimator = "collideRight";
      this.flags.blockRight = true;
    }
  );
  _playerCollision.changeDefaultCollisionResponse(
    function(){
      this.state.actorAnimator.cycle = "idle";
    }
  );
  return _playerCollision;
};

module.exports = playerCollision;
