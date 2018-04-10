import actor from '../../actors/actor.js';
import coinAnimation from './coin_animation';
import coinCollision from './coin_collision';
import coinController from './coin_controller';

let i = 0;

const coinActor = (n = 0, m = 0) => {
  devLog.log(`ceating new coin object`);
  const options = {
    name: `coin`,
    des:{
      x: 0 + n * 40,
      y: 0 + m * 40
    }
  };
  const _coinActor = new actor(options);

  _coinActor.addModules(
    new coinAnimation(),
    // new coinCollision(),
    new coinController()
  );


  i += 1;
  _coinActor.initializeActorController();

  return _coinActor;
};



module.exports = coinActor;
