import merge from 'lodash/merge';

const ModuleManager = (options) => {
  devLog.log("creating new Module Manager: " + options.name);
  const _moduleManager = {
    modules: new Set(),
    state: {},
    moduleSteps: [],
    moduleVerifications: [],

    mergeWith: function(newObj){//merge with new object without making a record in modules, for late added options hashes, but whatever
      if(newObj){
        merge(this,newObj);
      }
    },

    addModule: function(newObj){//merge with object and add object name to modules list.
      devLog.log(`[${this.name}] begins incorporating new module [${newObj.name}]`);
      let newName = newObj.name;
      if(newObj){//why???
        this.newModuleWillMount(newObj);
        this.assimilateNewModuleStates(newObj);
        this.assimilateNewModuleName(newObj);

        this.assimilateNewModuleStep(newObj);
        merge(this, newObj);
        this.newModuleDidMount(newObj);
        devLog.log(`[${this.name}] finishes incorporating new module [${newName}]`);
      }
    },

    verifyModuleFunctionsUnique: function(newObj){
      //this should definitely be doable I'm just lazy right now
    },

    assimilateNewModuleStates(newObj){
      if(newObj.state){
        this.state[newObj.name] = newObj.state;
        delete newObj.state;
      }
    },

    newModuleWillMount(newObj){
      if(newObj.moduleWillMount){
        newObj.moduleWillMount();
        delete newObj.moduleWillMount;
      }
    },

    newModuleDidMount:function(newObj){
      if(newObj.moduleDidMount){
        this.moduleDidMount();
        delete this.moduleDidMount;
      }
    },

    addModules:function(...newObjs){
      newObjs.forEach( (obj) => this.addModule(obj));
    },

    assimilateNewModuleName: function(newObj){
      this.verifyModuleName(newObj);
      this.modules.add(newObj.name);
      delete newObj.name;
    },

    verifyModuleName: function(newObj){//verify newObj has property "name", or else throw an error
      if(!newObj.name){throw {message: "Module Manager " + this.name + " tried to receive unnamed module ", object: newObj, trace:console.trace()};}
    },


    assimilateNewModuleStep: function(newObj){//if module has a function called moduleStep, add it to the list of steps, or else do nothing
      if(newObj.moduleStep){
        this.moduleSteps.push(newObj.moduleStep);
        delete newObj.moduleStep;
      }
    },

    runModuleSteps: function(){
      this.moduleSteps.forEach( (func) => {
        func.call(this);
      });
    },

    moduleState: function(moduleName){
      return this.modules[string];
    },

    stepDebug: function(condition){if(eval(condition)){debugger};}

  };

  _moduleManager.verifyModuleName(options);
  _moduleManager.mergeWith(options);
  return _moduleManager;
};

module.exports = ModuleManager;
