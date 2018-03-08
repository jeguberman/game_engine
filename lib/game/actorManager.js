// import merge from 'lodash/merge';

// const ActorManager = (options) => {
//   options = merge({},{
//       complex: false, //no support
//       horizontalScrolling: false, //no support
//       verticalScrolling: false, //no support
//       playerSeparate: true,
//       manyPlayerActors: false
//     },
//     options);
//
//   const Actors = {};
  // const Complex = {
  //   playerActors: [], //objects that respond to inputs
  //   temporaryActors: [], //for projectiles, or other things that aren't on the screen for long, pick ups
  //   environmentActors: [], //ground and wall objects, not doors and chests
  //   actorActors: [], //enemies, allies, doors, chests, things that can be affected by other mobs
  // };

//   const simple = { allActors: [] };
//
//   const horizontalScrolling = {
//     rightActors: {}, //objects to the right of the view. This is a hashMap and not an array. The keys shall be the X position of the object to reduce time complexity of looking up what objects to bring into view
//     leftActors: {}
//   };
//
//
//
//
// };

const ActorManager = () => {
  return {
    allActors: [],
    name: "objectsManager",

    addActor: function(object){

      object.globalEvents = this.globalEvents;
      if(object.type === "player"){
        this.allActors.unshift(object);
      }else{
        this.allActors.push(object);
      }
    },

    moduleStep: function(){
      this.allActors.forEach( (obj) => {
        obj.step();
      });
    }
  };

};

module.exports = ActorManager;
