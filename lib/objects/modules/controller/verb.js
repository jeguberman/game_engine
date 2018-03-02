import merge from 'lodash/merge';
// import { OptionsException } from '../../../util/exceptions';

//abstractly, a verb is the action which is performed when the player presses a button. https://www.youtube.com/watch?v=7daTGyVZ60I





export const core = (options = {}) => {


  function funcWrapper(callBack){
    function _funcWrapper(){

      // let eligible = true;
      // if(eligible){
      //   try{
          callBack.call(this);
      //   }
      //   catch(err){
      //     console.err("something")
      //   }
      // }
    };
    return _funcWrapper;
  }

  const setFunc = ()=>{
    if(options.hasOwnProperty("func")){
      options.func = funcWrapper(options.func);
    }else{
      console.error("No function was provided to verb.");
      console.trace();
    }
  }

  let func = setFunc();


  const _core = {
      name: "unamedVerb",
      input: "Escape",
      type: "verbCore",
      eligible: true
    };
    merge(_core,options);


  return _core;
};
