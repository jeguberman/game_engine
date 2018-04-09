import actor from '../../actors/actor.js';
import coinAnimation from './coin_animation';

let i = 0;

const coinActor = (n = 0, m = 0) => {
  devLog.log(`ceating new coin object`);
  const options = {
    name: `coin${i}`,
    des:{
      x: 0 + n * 40,
      y: 0 + m * 40
    },
    collision_width: 40,
    collision_height: 40,
    state: "coinish"
  };
  const _coinActor = new actor(options);
  console.log(_coinActor.collision_width);

  _coinActor.addModule(
    new coinAnimation()
  );

  dbAdd(_coinActor.name, _coinActor);
  i += 1;

  return _coinActor;
};



module.exports = coinActor;
