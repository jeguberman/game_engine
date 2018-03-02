import merge from 'lodash/merge';
import { OptionsException } from '../../../util/exceptions';

//abstractly, a verb is the action which is performed when the player presses a button. https://www.youtube.com/watch?v=7daTGyVZ60I

export const core = function(options = {}){
  // debugger

  if (!options.hasOwnProperty("owner")){
    throw OptionsException(options, "no owner provided to new verb");
  }

  if (options.fullFunc){
    throw OptionsException.bind(this)(options, "can not override function wrapper fullFunc");
  }

  const _core = merge(
    {
      name: "unamedVerb",
      input: "Escape",
      type: "core",
      elligible: true,

      func: ()=>{
        console.log("from func")
        debugger

        throw {message: `No function was provided to verb ${this.name}`};
      },

      fullFunc: ()=>{
        // debugger
        console.log("from full funcA")
        if(!this.elligible){ //wtf: see below
          console.log("hi elise")
          // debugger
          this.func.bind(this.owner)();
        }
      }
    },
    options
  );
  return _core;
};


//wtf this.elligible is true, check it in the debugger if you don't believe me. But this function only works if we add the not modifier. As far as I'm aware, this is
//if(false){
//  console.log("foo");
//} => "foo"
