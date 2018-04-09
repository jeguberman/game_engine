

const ActorManager = () => {

  return {
    name: "actorManager",
    actors: {all:[]},
    stepFunctions: [],


    addActor: function(newActor){
      if(newActor.type === "player"){
        this.actors.all.unshift(newActor);
      }else{
        this.actors.all.push(newActor);
      }
      // debugger
      Object.keys(newActor.modules).forEach(
        (moduleName) => {
          if(this.actors[moduleName]){
            this.actors[moduleName].push(newActor);
          }else{
            devLog.log(`no Game level module ${moduleName} from ${newActor.name}`,'warning');
          }
        }
      );
    },

    moduleStep: function(){
      this.actors.all.forEach( (obj) => {
        // this.stepFunctions.forEach( (func) => {
        //
        // });
        obj.step();
      });
    },

    newModuleVerification: function(newModule){
      if(newModule.actorComponent){
        this.actors[newModule.actorComponent] = [];
      }
    }

  };

};

module.exports = ActorManager;
