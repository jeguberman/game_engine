export function compareSets(setA,setB){
  let bool = true;
  if(setA.size !== setB.size){bool = false;}

  setA.forEach( (el) => {
    if(!setB.has(el)){bool = false;}
  });

  setB.forEach( (el) => {
    if(!setA.has(el)){bool = false;}
  });

  return bool;
}

export function CompareObjects(objA, objB){
  this.changeOverTime = function(past,future){

  };
}


export function swapKeysVals(obj){
  let newObj = {};

  let keys = Object.keys(obj);
  keys.forEach( (key)=>{
      newObj[obj[key]] = key;
  });

  this.JSON = JSON.stringify(newObj);
  return newObj;
}
