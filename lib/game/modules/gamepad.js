function bindGamepad(){
  document.addEventListener('gamepadconnected', function(e){
    this.gamepadConnected = true;
  });

  document.addEventListener('gamepaddisconnected',function(e){
    if(navigator.getGamepads()[0]===null){
      this.gamepadConnected = false;
    }
  });
}
let thing = {
  getGamepadInputs: function(){}
};

  const xboxKeyBridge = [
    "k", "l", "j", "i", //a,b,x,y

    "u","o","7","9", //lb,rb,lt,rt

    "`","Escape",//select, start

    "-","=",//lclick,rclick

    "w", "s", "a", "d" //up, down, left, right
  ];

const KeyBridge = [
  "a",
  "b",
  "x",
  "y",

  "lb",
  "rb",
  "lt",
  "rt",

  "select",
  "start",

  "lclick",
  "rclick",

  "up",
  "down",
  "left",
  "right"
]
