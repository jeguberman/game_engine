export function compareSets(setA,setB){
  let bool = true;
  if(setA.size !== setB.size){bool = false;}

  // let record = {
  //   get: function(target, name) {
  //     return target.hasOwnProperty(name) ? target[name] : 0;
  //   }
  // };

  setA.forEach( (el) => {
    if(!setB.has(el)){bool = false;}
  });

  setB.forEach( (el) => {
    if(!setA.has(el)){bool = false;}
  });


  return bool;
}
