import merge from 'lodash/merge';

const physicsComponent = (options) => {
  let _physicsComponent = {
    name: "physicsComponent",
    actorComponent: "actorPhysics",


    // moduleStep: function(){
    //   // this.actors.all.forEach( (actor)=>{
    //   //   actor.yAcc += this.gravity;
    //   // },this);
    // }


  };
  merge(_physicsComponent, options);
  return _physicsComponent;
};

module.exports = physicsComponent;
