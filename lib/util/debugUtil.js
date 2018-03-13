function logWarning(){
  console.error({message:"You forgot to remove a debug helper somewhere"});
}

function dbSetUp(n = 0){
  window.dblist = n ? new Set() : undefined;
  window.dbAdd = function(variable, obj){//creates a ref to obj called by window[variable]
    if(n){
      dblist.add(variable);
      window[variable] = obj;
    }else{
      logWarning();
    }
  };
  window.dbEval = function(string){
    if(n){
      eval(string);
    }else{
      logWarning();
    }
  };
  window.dbnotes = "";

  function addNote(string){dbnotes += string + "\n";}

}

function _bootLog(){
  const bootLog = [];
  window.getLog = bootLog;

  return function(string){
    const timeObj = new Date();
    var timeDiff;
    if(bootLog.length > 0){
      timeDiff = timeObj - bootLog[ bootLog.length -1 ].timeObj;
    }
    bootLog.push({
      string,
      timeObj,
      timeDiff
    }
    );
    // console.log(`${string} @ ${timeObj.toLocaleTimeString()}; timeDiff = ${timeDiff/1000}ms`);
  };
}



window.bootLog = new _bootLog();


dbSetUp(1);


// module.exports = dbSetUp;
