import merge from 'lodash/merge';
// import { OptionsException } from '../../../util/exceptions';

//abstractly, a verb is the action which is performed when the player presses a button. https://www.youtube.com/watch?v=7daTGyVZ60I

const Verb = function(options){

  const _verb = {

    name: "unnamedVerb",

    requirements: [function(){return false;}],
    cooldown: false,
    func: function(){},
    priority: 1,
    subscriptions: {},
    targets: {},



    // setFunc: function(func){this.func = func.bind(this);},
    setFunc: function(func){this.func = func;},
    setTrigger: function(func){
      if(typeof func !== "function"){
        throw "Verb Triggers must be event handling functions";
      }
      this.requirements[0] = func;

    },
    setKeydownTrigger: function(input){
      this.setTrigger(function(e){
        // debugger
        return e.detail.keydown===input;
      });
    },
    getTrigger: function(){return this.requirements[0];},
    newSubscription: function(type, callBack = this.func){
      // this.subscriptions[key] = callBack;
      document.addEventListener(type,callBack.bind(this));
        // if(this.subscriptions[e.key]){}
    },

    beginCoolDown: function(ms = 10){
      this.cooldown = true;
      var _cooldown = function(){this.cooldown = false;}.bind(this);
      setTimeout( _cooldown, ms );
    },

    addTarget:function(name, newTarget){
      this.targets[name] = newTarget;
    },

    handleEvent:function(e){
      if(!this.requirements.every( (r) => r(e) ) ){
        this.func.call(this);
      }
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
