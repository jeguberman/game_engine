import merge from 'lodash/merge';
import ModuleManager from '../module_manager.js';

const baseObj = function(options){

  options = merge(
    {
      name: "baseObj",
      type: "baseObj"
    },
    options
  );

  const _baseObj = new ModuleManager(options);

  _baseObj.mergeWith(
    {
    dx: 0,
    dy: 0,
    collision_width: 32,
    collision_height: 32,
    state: "default",


    step:function(){
      this.runModuleSteps();
      this.updateState();
    },



    updateState:function(){
      // throw {message: "Individual Game Objects must contain custom definitions for updateState function. " + this.name, object: this, trueMessage: "No they don't, this is going to be separated into a state manager for physical game objects. This doesn't pertain to non-entities like the debug module"};
    },


  });

  return _baseObj;
};

module.exports = baseObj;
