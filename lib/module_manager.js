import merge from 'lodash/merge';

const ModuleManager = (options) => {
  devLog.log("creating new Module Manager: " + options.name);
  const _moduleManager = {
    modules: {},
    moduleSteps: [],
    moduleVerifications: [],

    mergeWith: function(newObj){//merge with new object without making a record in modules, for late added options hashes, but whatever
      if(newObj){
        merge(this,newObj);
      }
    },

    addModule: function(newObj){//merge with object and add object name to modules list.
      devLog.log(`[${this.name}] begins incorporating new module [${newObj.name}]`);
      if(newObj){//why???
        this.verifyModuleName(newObj);
        this.modules[newObj.name] = newObj.initialState;

        delete newObj.initialState;
        this.addModuleVerifications(newObj);
        this.runModuleVerifications(newObj);
        this.verifyModuleStep(newObj);
        this.ifComponentWillMount(newObj);
        const trueName = this.name;
        merge(this, newObj);
        this.name = trueName;
        this.ifComponentDidMount(newObj);
        devLog.log(`[${this.name}] finishes incorporating new module [${newObj.name}]`);
      }
    },

    verifyModuleFunctionsUnique: function(newObj){
      //this should definitely be doable I'm just lazy right now
    },

    ifComponentDidMount:function(newObj){
      if(newObj.componentDidMount){
        this.componentDidMount();
      }
    },

    ifComponentWillMount(newObj){
      if(newObj.componentWillMount){
        newObj.componentWillMount();
      }
    },

    addModules:function(...newObjs){
      newObjs.forEach( (obj) => this.addModule(obj));
    },

    verifyModuleName: function(newObj){//verify newObj has property "name", or else throw an error
      if(!newObj.name){throw {message: "Module Manager " + this.name + " tried to receive unnamed module ", object: newObj, trace:console.trace()};}
    },

    addModuleVerifications: function(newObj){
      if(newObj.newModuleVerification){
        this.moduleVerifications.push(newObj.newModuleVerification);
        delete newObj.newModuleVerification;
      }
    },

    runModuleVerifications: function(newObj){
      this.moduleVerifications.forEach( (func) => {
        func.bind(this)(newObj);
      });
    },

    verifyModuleStep: function(newObj){//if module has a function called moduleStep, add it to the list of steps, or else do nothing
      if(newObj.moduleStep){
        this.moduleSteps.push(newObj.moduleStep);
        delete newObj.moduleStep;
      }
    },

    runModuleSteps: function(){
      this.moduleSteps.forEach( (func) => {
        // debugger
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
