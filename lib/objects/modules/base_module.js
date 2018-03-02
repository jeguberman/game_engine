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
  //each Game Level Module should itself have modularity for interacting with other modules that are added to the trunk. For example, while all my modules will need to specify subscriptions to the event loop, someone else might not use the event loop.

  //so instead of the new module having it's own subscription algorithms under the assumption that there will be an event queue, especially an event queue implemented THIS SPECIFIC WAY, the event manager should include module modules that it can give to new incoming moduleStep

  //thusly, each module package or library I guess, shall be three components
  //A: Game Level Top Tier Component
  //B: Game Module Level Mid Tier Component
  //C: Object Level Low Tier Component
  
  // tier not actually representing importance or frequency, more like.... closeness to the base, which is the Game Level Module Manager

};
