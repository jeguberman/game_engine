import merge from 'lodash/merge';
// import { OptionsException } from '../../../util/exceptions';

//abstractly, a verb is the action which is performed when the player presses a button. https://www.youtube.com/watch?v=7daTGyVZ60I

const Verb = function(options){

  const _verb = {

    name: "unnamedVerb",

    requirements: {},
    eligible: false,
    func: function(){},
    priority: 1,
    subscriptions: {},
    targets: {},

    setFunc: function(func){this.func = func;},

    newSubscription: function(type, callBack = this.func){
      // this.subscriptions[key] = callBack;
      document.addEventListener(type,callBack.bind(this));
        // if(this.subscriptions[e.key]){}
    },

    addTarget:function(name, newTarget){
      this.targets[name] = newTarget;
    },

    go:function(){
      if(!this.checkRequirements()){return;}

    },

    initializeSubscriptions: function(){

    },

    addRequirement: function(requirement, state = true){

    },

    checkRequirements: function(name, func){

    },

  };
  merge(_verb,options);
return _verb;
};


module.exports = Verb;
