import actorCollision from '../../actors/modules/collision/actorCollision';

const playerCollision = function(){
  const _playerCollision = new actorCollision();
  _playerCollision.addCollisionResponse(
    "coin",
    "foot",
    function(){
      this.modules.actorAnimator = "collideDown";
    }
  );
  return _playerCollision;
};

module.exports = playerCollision;
