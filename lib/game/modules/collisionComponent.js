import merge from 'lodash/merge';

const collisionComponent = (options) => {
  let _collisionComponent = {
    name: "collisionComponent",

    moduleStep: function(){
      let actors = this.actors.all;
      for(var collider of actors){
        for(var collidee of actors){

          if(collider === collidee){
            continue;
          }

          // console.log(collider.name, collidee.name);

          collider.checkCollision(collidee);
        }
      }
    }
  };

  merge(_collisionComponent, options);
  return _collisionComponent;
};

module.exports = collisionComponent;
