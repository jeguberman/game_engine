import objController from '../objects/modules/controller/objController.js';

import * as Verb from '../objects/modules/controller/verb';


const mockController = function(){
  const _mockController = new objController();

  const v = new Verb.core({
    name: "moveRight",
    input: "d",

    func: function(){
      // debugger
      //alright buddy here's what you're doing next. Refactor the event queue. Currently it's broken up into slices, but it should be tuples, you hear me? Tuples. the first value is the KIND of event and the second is the payload. Anybody concerned with the events is looking at ALL the events.

      //now how should an event be structured?
      //a set of objects? {type, payload}
      //a single key value pair? {type: payload}, this won't work, you could only have one of each type or you'd basically be doing slices again
      //a parsable string? "type:[paylod]"
      //should the event queue be an array? A set? Array makes the most sense to me
      //because we're always going to be iterating, an array is best. the hash-tuple also seems to be what I want.
      //maybe the game object should automatically filter events, modules could have "subscriptions". This way the ENTIRE event queue only needs to be iterated over once, though the sub event queues would be once per object
      let evn = this.globalEvents;
      if(!evn.hasOwnProperty("eligible")){
        evn.eligible = true;
      }
      function eligibate(){evn.eligible = true;}
      function elgTimer(){

      }

      // debugger
      if (evn.eligible){

        console.log([this.name]);
        this.dx += 40;

        evn.eligible = false;

        setTimeout(
          eligibate,
          200
        );
      }
    }
  });
  _mockController.addVerb(v);




  return _mockController;
};

module.exports = mockController;
