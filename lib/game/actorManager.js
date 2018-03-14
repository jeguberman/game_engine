

const ActorManager = () => {

  return {
    actors: {all:[]},

    name: "objectsManager",

    addActor: function(newActor){
      if(newActor.type === "player"){
        this.actors.all.unshift(newActor);
      }else{
        this.actors.all.push(newActor);
      }
      Object.keys(newActor.modules).forEach(
        (moduleName) => {
          if(this.actors[moduleName]){
            this.actors[moduleName].push(newActor);
          }else{
            console.error(`no Game level module ${moduleName} from ${newActor.name}`);
          }
        }
      );
    },

    moduleStep: function(){
      this.actors.all.forEach( (obj) => {
        this.stepFunctions.forEach( (func) => {

        });
        obj.step();
      });
    }

  };

};

module.exports = ActorManager;
