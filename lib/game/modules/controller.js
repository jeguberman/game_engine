const Controller = ()=>{
  const controlDebug = document.getElementById("controlDebug");
  controlDebug.innerHTML = "Inputs: ";
  let _controller = {
    name: "controller",
    inputs: new Set(),
    controlDebug,



    bindKeys: function(){
      document.addEventListener('keydown',(e)=>{
        this.handleKeydown(e.key);
      });
      document.addEventListener('keyup', (e)=>{
        this.handleKeyup(e.key);
      });
    },

    handleKeydown: function(key){
      this.inputs.add(key);
    },

    handleKeyup:function(key){
      this.inputs.delete(key);
    },

    moduleStep: function(){
        this.controlDebug.innerHTML = "Inputs: " + this.inputsAsString();
    },

    inputsAsString: function(){
      let str = "";
      if (this.inputs.size > 0){
        this.inputs.forEach( (key)=>{
          if(key === " "){key = "space";}
          str = str + key + ",";
        });
      }
      return str;
    }
  };
  _controller.bindKeys();
  return _controller;

};

module.exports = Controller;
