import merge from 'lodash/merge';
// import * as Verb from './verb';

const objController = function(options){
  let _objController = {
    name: "objController",
    initialState: "idle",
    verbs: {},

    moduleStep: function(){
      // this.stepDebug('this.globalEvents.inputs.size > 0');
      this.globalEvents.inputs.forEach(function(input){
        if(this.verbs[input]){
          this.verbs[input].func.call(this);
        }
      }, this);
    },

    spawnVerb: function(options){
      // merge(options,{owner:this});
      _verb = new Verb.core(options);
      return _verb;
    },

    createVerb(options){
      this.addVerb(this.spawnVerb());
    },

    addVerb: function(newVerb){
      if(!this.verbs[newVerb.input]){
        this.verbs[newVerb.input] = newVerb;//.fullFunc//.bind(newVerb);
      }else{
        throw{
          message: `Game Object ${this.name} tried to overwrite action`,
          data: {newVerb: newVerb.name, input: newVerb.input}
        };
      }
    },


  };


  _objController = merge(_objController, options);
  return _objController;
};

module.exports = objController;
