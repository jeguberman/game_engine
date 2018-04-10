import actorCollision from '../../actors/modules/collision/actorCollision';

const playerCollision = function(){
  const _playerCollision = new actorCollision();
  return _playerCollision;
};

module.exports = playerCollision;
