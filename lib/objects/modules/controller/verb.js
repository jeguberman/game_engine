import merge from 'lodash/merge';
// import { OptionsException } from '../../../util/exceptions';

//abstractly, a verb is the action which is performed when the player presses a button. https://www.youtube.com/watch?v=7daTGyVZ60I

export const verb = function(finalInput){
  const _verb = {
    
    finalInput,
    name: "unnamedVerb",
    requirements: {},
    func: func,
    priority: 1,
    subscriptions: [],

    newListener: function(eventType, callBack){
      let func = this.checkRequirements.bind(this)(callback);
      this.subscriptions.push(
        () => document.addEventListener(eventType, func(e))
      );
    },

    initializeSubscriptions: function(){
      this.subscriptions.forEach((func)=>func());
    },

    addRequirement: function(requirement, state = true){
      if(typeof requirement !== "function"){throw "verb requirements must be boolean functions";}
      this.requirements.push(requirement);
    },

    checkRequirements: function(name, func){
      if( this.requirements.some( (req)=> req() === false) ){
        return null;
      }
      func();
    },

  };

};
