import merge from 'lodash/merge';

const baseModule = function(options){
  let baseModule = {
    name: "baseModule",
    initialState: "default",
    moduleStep: function(){},
    newModuleVerification: function(){},
    moduleState: function(){
    }
  };
  baseModule.moduleState = function(){
    //must somehow update this.modules[this.moduleName] but because of my assery, that's not working
  }
  baseModule[options.storageName] = {};

};
