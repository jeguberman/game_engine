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
