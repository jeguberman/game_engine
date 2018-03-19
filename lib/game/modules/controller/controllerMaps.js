export const KeyToXbox = {
  "k":"a",
  "l":"b",
  "j":"x",
  "i":"y",

  "u":"lb",
  "o":"rb",
  "7":"lt",
  "9":"rt",

  "`":"select",
  "Escape":"start",

  "-":"lclick",
  "=":"rclick",

  "w":"up",
  "s":"down",
  "a":"left",
  "d":"right"
};
export const XboxToKey = {
  "a":"k",
  "b":"l",
  "x":"j",
  "y":"i",

  "lb":"u",
  "rb":"o",
  "lt":"7",
  "rt":"9",

  "select":"`",
  "start":"Escape",

  "-":"lclick",
  "=":"rclick",

  "up":"w",
  "down":"s",
  "left":"a",
  "right":"d"
};
export const xboxIndexToKey = [
  "k", //1
  "l",//2
  "j",//3
  "i",//4

  "u",//5
  "o",//6
  "7",//7
  "9",//8

  "`",//9
  "Escape",//10

  "-",//11
  "=",//12

  "w",//13
  "s",//14
  "a",//15
  "d"//16
];
export const xboxIndexToButton = [
  "a",
  "b",
  "x",
  "y",

  "lb",//5
  "rb",//6
  "lt",//7
  "rt",//8

  "select",//9
  "start",//10

  "lclick",//11
  "rclick",//12

  "up",
  "down",
  "left",
  "right"
];

export const lconIndexToButton = [
  "left",
  "down",
  "up",
  "right",
  "sl",
  "sr",


  null,
  null,

  "-",
  null,

  "lclick",
  null,

  null,
  "capture",


  "lb",
  "zl"
];

export const rconIndexToButton = [
  "a",
  "b",
  "x",
  "y",
  "sl",
  "sr",


  null,
  null,

  null,
  "+",

  null,
  "rclick",

  "home",
  null,


  "rb",
  "zr"
];

export const joyconDirectionToFloatL = {
  right: -1,
  downright: -0.7142857313156128,
  down: -0.4285714030265808,
  downleft: -0.14285719394683838,
  neutral: 1.2857143878936768,
  upright: 1,
  up: 0.7142857313156128,
  upleft: 0.4285714626312256,
  left: 0.14285719394683838,
};

export const joyconFloatToDirectionL = {"1":"upright","1.2857143878936768":"neutral","0.7142857313156128":"up","-0.4285714030265808":"down","0.14285719394683838":"left","-1":"right","0.4285714626312256":"upleft","-0.1428571343421936":"downleft","-0.7142857313156128":"downright"};

export const joyconDirectionToFloatR = {
  neutral: 1.2857143878936768,
  up: -0.4285714030265808,
  down: 0.7142857313156128,
  left: -1,
  right: 0.14285719394683838,
  upleft: -0.7142857313156128,
  upright: -0.14285719394683838,
  downleft: 1,
  downright: 0.4285714626312256,
};

export const joyconFloatToDirectionR = {"1":"downleft","1.2857143878936768":"neutral","-0.4285714030265808":"up","0.7142857313156128":"down","-1":"left","0.14285719394683838":"right","-0.7142857313156128":"upleft","-0.1428571343421936":"upright","0.4285714626312256":"downright"};

export const generic = {
  lxaxis: true,
  lyaxis: true,
  ltrigger: true,
  xaxisr: true,
  yaxisr: true,
  rtrigger: true,
  lfaceu: true,
  lfaced: true,
  lfacel: true,
  lfacer: true,
  lclick: true,
  rfaceu: true,
  rfaced: true,
  rfacel: true,
  rfacer: true,
  rclick: true,
  lnav: true,
  rnav: true,
  lsystem: true,
  rsystem: true,

};
