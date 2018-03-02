function logWarning(){
  console.error({message:"You forgot to remove a debug helper somewhere"});
}


function dbSetUp(n = 0){
  window.dblist = n ? new Set() : undefined;
  window.dbAdd = function(variable, pointer){
    if(n){
      dblist.add(variable);
      window[variable] = pointer;
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
  // addNote("vc is a Verb.core object who's property owner.name should be player, exists only after button press");
  addNote("v is a verbCore instance  noted and edited before being added to featureMock");
  addNote("_featureMockA is a mockObj noted before adding the controller or the verb");
  addNote("_featureMockB is a mock Obj noted after adding the controller but before the verb");
  addNote("_core is the verb after definition before return from constructor");
  addNote("_featureMockC is a mockObj noted after adding the controller and the verb");
  addNote("game is the game");
}

dbSetUp(1);


// module.exports = dbSetUp;
