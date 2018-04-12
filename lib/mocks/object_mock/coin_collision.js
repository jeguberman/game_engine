import actorCollision from '../../actors/modules/collision/actorCollision';

const coinCollision = function(){
  const _coinCollision = new actorCollision({
    collision_width: 40,
    collision_height: 40
  });
  return _coinCollision;

};

module.exports = coinCollision;
