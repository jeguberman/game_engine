import merge from 'lodash/merge';

const collisionComponent = (options) => {
  let _collisionComponent = {
    name: "collisionComponent",

    moduleStep: function(){
      let actors = this.actors.all;
      for(var collidant of actors){
        if(!collidant.modules["actorCollision"]){break;}
        for(var collidee of actors){
          if(collidant === collidee){
            continue;
          }

          // console.log(collidant.name, collidee.name);
          console.log(collidant.name);
          collidant.checkCollision(collidee);
        }
      }
    }
  };

  merge(_collisionComponent, options);
  return _collisionComponent;
};

module.exports = collisionComponent;
