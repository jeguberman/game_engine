// import merge from 'lodash/merge';

// const ObjectManager = (options) => {
//   options = merge({},{
//       complex: false, //no support
//       horizontalScrolling: false, //no support
//       verticalScrolling: false, //no support
//       playerSeparate: true,
//       manyPlayerObjects: false
//     },
//     options);
//
//   const Objects = {};
  // const Complex = {
  //   playerObjects: [], //objects that respond to inputs
  //   temporaryObjects: [], //for projectiles, or other things that aren't on the screen for long, pick ups
  //   environmentObjects: [], //ground and wall objects, not doors and chests
  //   actorObjects: [], //enemies, allies, doors, chests, things that can be affected by other mobs
  // };

//   const simple = { allObjects: [] };
//
//   const horizontalScrolling = {
//     rightObjects: {}, //objects to the right of the view. This is a hashMap and not an array. The keys shall be the X position of the object to reduce time complexity of looking up what objects to bring into view
//     leftObjects: {}
//   };
//
//
//
//
// };

const ObjectManager = () => {
  return {
    allObjects: [],
    name: "objectsManager",


    addObject: function(object){
      object.events = this.events;
      if(object.type === "player"){
        this.allObjects.unshift(object);
      }else{
        this.allObjects.push(object);
      }
    },

    moduleStep: function(){
      this.allObjects.forEach( (obj) => {
        obj.step();
      });
    }
  };

};

module.exports = ObjectManager;
