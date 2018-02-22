import merge from 'lodash/merge';

const baseObj = (options) => {
  options = merge(
    {
      name: "baseObj"
    },
    options
  );

  const _baseObj = {
    modules: new Set(),
    moduleSteps: [],
    dx: 0,
    dy: 0,
    collision_width: 32,
    collision_height: 32,
    state: "standRight",

    step:function(){
      this.updateState();
      this.runModuleSteps();
    },

    runModuleSteps: function(){
      // debugger
      this.moduleSteps.forEach( (func) => {
        func.bind(this)();
      });
    },

    updateState:function(){
      // throw {message: "Individual Game Objects must contain custom definitions for updateState function. " + this.name, object: this, trueMessage: "No they don't, this is going to be separated into a state manager for physical game objects. This doesn't pertain to non-entities like the debug module"};
    },

    mergeWith:function(newObj){//merge with new object without making a record in modules, for late added options hashes
      if(newObj){
        this.verifyModuleStep(newObj);
        merge(this,newObj);
      }
    },

    addModule: function(newObj){//merge with object and add object name to modules list.
      if(newObj){
        this.verifyModuleName(newObj);
        const trueName = this.name;
        this.modules.add(newObj.name);
        this.verifyModuleStep(newObj);
        merge(this, newObj);
        this.name = trueName;
      }
    },

    verifyModuleName:function(newObj){//verify newObj has property "name", or else throw an error
      if(!newObj.name){throw {message: "Game Object " + this.name + " tried to receive unnamed object ", object: newObj};}
    },

    verifyModuleStep:function(newObj){//if module has a function called moduleStep, add it to the list of steps, or else do nothing
      if(newObj.moduleStep){
        this.moduleSteps.push(newObj.moduleStep);
      }
    }

  };

  _baseObj.mergeWith(options);
  return _baseObj;
};

module.exports = baseObj;
