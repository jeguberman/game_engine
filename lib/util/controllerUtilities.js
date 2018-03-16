import * as gpMaps from "../actors/modules/controller/controllerMaps.js";

const gamepadIDs = {
  "Xbox One": 8,
  "Joy-Con (L)": 11,
  "Joy-Con (R)": 11,
};

export function ggp(){
  return navigator.getGamepads();
}

export function getControllerIndex(idstring, endSlice){
  var gamepads = Array.from(ggp());
  for( var i in gamepads ){
    if(gamepads[i] && gamepads[i].id.slice(0, endSlice) === idstring){
      return i;
    }
  }
  console.error("gamepad not found");
}

export function getController(idString){
  const id = gamepadIDs[idString];
  return ggp()[getControllerIndex(idString,gamepadIDs[idString])];
}

export function miniControllerObject(idString){
  const _cont = ()=>{
    return getController(idString);
  };
  _cont.buttons = ()=>getController(idString).buttons.map(b=>b.pressed);
  _cont.axes = ()=>getController(idString).axes;
  return _cont;
}

export function attachControllerToWindow(varName,idString){
  window[varName] = new miniControllerObject(idString);
}


//everything below this is disorganized, might be deleted


function getAxisVals(){
  let map = gpMaps.joyconDirectionToFloat;
  let neutral = map.neutral;
  let vals = ()=>{ Object.values(map); };
  let keys = Object.keys(map);
  keys.map(
    (key)=>{
      if(!vals.some(value=>value === map[key])){
        console.log(key);
        let val = neutral;
        while(val === neutral){
          val = lcon.axes()[9];
        }
        map[key] = val;
      }
    }
  );
  console.log(map);
}//used to get float values from analogue inputs on joycon
