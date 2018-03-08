import merge from 'lodash/merge';
import Verb from './verb';

const actorController = function(options){
  let _actorController = {
    name: "actorController",
    initialState: "idle",
    verbs: {},
    events: {},

    addListener:function(){
      // let func = this.handleGameAction.bind(this);
      // document.addEventListener("gameAction",func);
    },

    handleGameAction: function(e){
      verbs[e.detail].call(this);
    },


    addVerb: function(newVerb){
      if(!this.verbs[newVerb.name]){
        newVerb.addTarget("owner", this);
        this.verbs[newVerb.name] = newVerb;
        // newVerb.intitializeSubscriptions();
      }else{
        throw{
          message: `Game Object ${this.name} tried to overwrite action`,
          data: { newVerb: newVerb.name, input: newVerb.input }
        };
      }
    },

    // moduleStep: function(){
    //
    // },

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

module.exports = actorController;
