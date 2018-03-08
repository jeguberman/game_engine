import merge from 'lodash/merge';
import Verb from './verb';

const actorController = function(options){
  let _actorController = {
    name: "actorController",
    initialState: "idle",
    verbs: {},
    events: {},



    addVerb: function(newVerb){
      if(!this.verbs[newVerb.name]){
        this.verbs[newVerb.name] = newVerb;
        verb.activateListeners();
      }else{
        throw{
          message: `Game Object ${this.name} tried to overwrite action`,
          data: {newVerb: newVerb.name, input: newVerb.input}
        };
      }
    },

    moduleStep: function(){
      this.globalEvents.inputs.forEach(function(input){
        if(this.verbs[input]){
          this.verbs[input].func.call(this);
        }
      }, this);
    },

    spawnVerb: function(options){
      _verb = new Verb.core(options);
      return _verb;
    },

    createVerb(options){
      this.addVerb(this.spawnVerb());
    },



  };


  merge(_actorController, options);
  return _actorController;
};

module.exports = objController;
