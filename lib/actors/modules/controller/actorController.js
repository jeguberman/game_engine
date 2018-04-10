import merge from 'lodash/merge';
import Verb from './verb';

const actorController = function(options){
  let _actorController = {
    name: "actorController",
    initialState: "idle",
    verbs: {},
    events: {},


    handleControllerAction: function(e){
      Object.values(this.verbs).forEach( (verb) => {
        verb.handleEvent(e);
      });
    },


    addVerb: function(newVerb){
      let neoVerb = Object.assign({},newVerb);
      if(!this.verbs[newVerb.name]){
        this.verbs[newVerb.name] = neoVerb;
      }else{
        throw{
          message: `Game Object ${this.name} tried to overwrite action`,
          data: { newVerb: newVerb.name, input: newVerb.input }
        };
      }
    },

    addVerbs: function(...newVerbs){
      newVerbs.forEach( newVerb => this.addVerb(newVerb) );
    },

    componentDidMount: function(){

      let verbs = Object.values(this.verbs);
      verbs.forEach( function(verb){
        verb.addTarget("owner",this);
      },this);

    },

    spawnVerb: function(options){
      _verb = new Verb.core(options);
      return _verb;
    },

    createVerb(options){
      this.addVerb(this.spawnVerb());
    },

    initializeActorController(){//this is a "componentDidMount" but it's not supposed to run until AFTER a new instance of the actor has been created. Will fix in v2.0 if not earlier
      const handleControllerAction = this.handleControllerAction.bind(this);
      document.addEventListener("controllerAction", handleControllerAction);
    },


  };


  merge( _actorController, options );
  return _actorController;
};

module.exports = actorController;
