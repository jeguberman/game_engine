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

    handleListener:function(e){

    },

    handleControllerAction: function(e){
      // verbs[e.detail].call(this);
      // debugger
      Object.values(this.verbs).forEach( (verb) => {
        verb.handleEvent(e);
      });
    },


    addVerb: function(newVerb){
      // debugger
      // var dbname = newVerb.name + "Mounted";
      // if(!this.verbs[dbname]){
      //   this.verbs[dbname] = newVerb;
      let neoVerb = Object.assign({},newVerb);
      // for(let verb in neoVerb.verbs){
      //   verb.func
      // }
      if(!this.verbs[newVerb.name]){
        this.verbs[newVerb.name] = neoVerb;
        // debugger
        // newVerb.intitializeSubscriptions();
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
      // debugger
      verbs.forEach( function(verb){
        // verb.func = verb.func.bind(this);
        verb.addTarget("owner",this);
      },this);
      // for(var verb in this.verbs){
      //   newVerb = this.verbs
      // }
    },

    spawnVerb: function(options){
      _verb = new Verb.core(options);
      return _verb;
    },

    createVerb(options){
      this.addVerb(this.spawnVerb());
    },

    initializeActorController(){
      const handleControllerAction = this.handleControllerAction.bind(this);
      document.addEventListener("controllerAction", handleControllerAction);
    },


  };


  merge( _actorController, options );
  _actorController.handleControllerAction.bind(_actorController);
  // document.addEventListener("controllerAction",_actorController.handleControllerAction.bind( _actorController ));
  return _actorController;
};

module.exports = actorController;
