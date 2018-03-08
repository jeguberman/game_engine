import merge from 'lodash/merge';

const EventManager = function(){
  const _eventManager = {
    name: "eventManager",
    events:{},

    createEventType:function(type){
      this.events[type] = new CustomEvent(type);
    },

    dispatchGameEvent: function(){}


  };
  return _eventManager;
};
module.exports = EventManager;
