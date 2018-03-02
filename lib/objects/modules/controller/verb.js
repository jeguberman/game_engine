import merge from 'lodash/merge';
import { OptionsException } from '../../../util/exceptions';

//abstractly, a verb is the action which is performed when the player presses a button. https://www.youtube.com/watch?v=7daTGyVZ60I

export const core = (options = {})=>{


  if (!options.hasOwnProperty("owner")){
    // throw OptionsException(options, "no owner provided to new verb");
  }

  if (options.hasOwnProperty("fullFunc")){
    throw OptionsException(options, "can not override function wrapper fullFunc");
  }

  const _core = {
      name: "unamedVerb",
      input: "Escape",
      type: "core",
      elligible: true,

      func: function(){
        throw {message: `No function was provided to verb ${this.name}`};
      },

      fullFunc: function(){
        // debugger
        // dbAdd("verbFullFunc",this)
        // if(!this.elligible){ //wtf: see below
          this.func.call(this.owner);
        // }
      }
    };
    merge(_core,options);
    dbAdd("_core", _core);
  return _core;
};


//wtf this.elligible is true, check it in the debugger if you don't believe me. But this function only works if we add the not modifier. As far as I'm aware, this is
//if(false){
//  console.log("foo");
//} => "foo"
