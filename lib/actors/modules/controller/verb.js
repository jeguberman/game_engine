import merge from 'lodash/merge';

//abstractly, a verb is the action which is performed when the player presses a button. https://www.youtube.com/watch?v=7daTGyVZ60I

const Verb = function(options){

  const _verb = {

    name: "unnamedVerb",

    requirements: [],
    cooldown: false,
    func: function(){},
    priority: 1,
    subscriptions: {},
    targets: {},

    setFunc: function(func){this.func = func;},//this is what will happen when all requirements === true

    setTrigger: function(func){
      if(typeof func !== "function"){
        throw "Verb Triggers must be event handling functions";
      }
      this.requirements[0] = func;
    },//the first requirement. No reason to check other requirements if this requirement isn't true. Usually a button or collision event

    getTrigger: function(){return this.requirements[0];},

    newSubscription: function(type, callBack = this.func){
      document.addEventListener(type,callBack.bind(this));
    },//not every verb will be tied to the playerActor. Maybe, for example, if the user pressed printscreen, a component will begin recording screenshots for 1800 frames(30 seconds). This would be an example of a game level verb. Also... maybe the user wants to pause during  cutscene or something, to select the skip cutscene option, because unskippable cutscenes are the worst

    beginCoolDown: function(ms = 10){
      this.cooldown = true;
      var _cooldown = function(){this.cooldown = false;}.bind(this);
      setTimeout( _cooldown, ms );
    },

    addTarget:function(name, newTarget){
      this.targets[name] = newTarget;
    },

    handleEvent:function(e){
      // debugger
      
      if(this.requirements.length === 0){console.error(`no requirements given to verb ${this.name}`);}
      if(this.requirements.every( (req)=>req.call(this, e) ) ){
        this.func.call(this);
      }
    },

    addRequirement: function(func){
      if(typeof func !== "function"){
        throw "requirements must be boolean functions";
      }else{
        this.requirements.push(func);
      }
    } //add additional requirements past the trigger, like character must be on ground to jump.

  };
  merge(_verb,options);
return _verb;
};


module.exports = Verb;
