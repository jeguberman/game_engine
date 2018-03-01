import merge from 'lodash/merge';

const objController = function(options){
  let _objController = {
    name: "objController",
    controlState: "idle",
    // state: "idle",
    verbs: {},
    moduleStep: function(){
      this.globalEvents.inputs.forEach(
        function(el){
          // debugger
          this.verbs[el]();
        }
      );
    },
    addNewVerb: function(input,callback){
      if(!this.verbs.input){
        this.verbs[input] = callback.bind(this);
      }else{
        throw {message: "Game Object " + this.name + " tried to overwrite action " + input};
      }
    }
  };
  _objController = merge(_objController,options);
  return _objController;
};

module.exports = objController;
