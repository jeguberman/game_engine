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

function devLog(){
  const devLog = [];

  this.log = function(message,type = null){
    const timeObj = new Date();
    var timeDiff;
    if(devLog.length > 0){
      timeDiff = timeObj - devLog[ devLog.length -1 ].timeObj;
    }
    devLog.push({
      message,
      type,
      timeObj,
      timeDiff
    });
    // console.log(`${string} @ ${timeObj.toLocaleTimeString()}; timeDiff = ${timeDiff/1000}ms`);
  };
  this.get = function(){
    return devLog;
  };
  this.print = function(){
    devLog.forEach( (entry) => {
      var toConsole = `${entry.message} @ ${entry.timeObj.toLocaleTimeString()}; timeDiff = ${entry.timeDiff/1000}ms`;
      if(entry.type === "warning"){
        console.error(toConsole);
      }else{
        console.log(toConsole);
      }
    });
  };
  this.warnings = function(){
    devLog.forEach( (entry) => {
      if(entry.type === "warning"){
        console.error(entry.message);
      }
    });
  };
}



window.devLog = new devLog();
// window.devLog.log.get = function(){console.log(window.devLog.log.devLog.log);};

function _warningLog(){
  const warningLog = [];
  window.getWarningLog = warningLog;
  return function(obj){
    warningLog.push(obj);
  };
}


dbSetUp(1);


// module.exports = dbSetUp;
