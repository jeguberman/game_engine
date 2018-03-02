import merge from 'lodash/merge';

const EventManager = function(){
  const _eventManager = {
    name: "eventManager",
    globalEvents: {},
    newModuleVerification: function(newObj){
      //check for and implement subscriptions
      if(newObj.getEvents){
        this.globalEvents = merge(this.globalEvents,newObj.getEvents());
      }
    }

  };
  return _eventManager;
};
module.exports = EventManager;
