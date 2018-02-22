import merge from 'lodash/merge';

const moduleManager = (options) => {
  const _moduleManager = {
    modules: new Set(),


    mergeWith:function(newObj){//merge with new object without making a record in modules, for late added options hashes, but whatever
      if(newObj){
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

    addModules: function(...newObjs){
      newObjs.forEach( (obj) => this.addModule(obj));
    },

    verifyModuleName:function(newObj){//verify newObj has property "name", or else throw an error
      if(!newObj.name){throw {message: "Module Manager " + this.name + " tried to receive unnamed object ", object: newObj};}
    },

    verifyModuleStep:function(newObj){//if module has a function called moduleStep, add it to the list of steps, or else do nothing
      if(newObj.moduleStep){
        this.moduleSteps.push(newObj.moduleStep);
      }
    }

  };
  _moduleManager.verifyModuleName(options);

  _moduleManager.mergeWith(options);
  return _moduleManager;
};

module.exports = moduleManager;
