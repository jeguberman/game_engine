const Controller = ()=>{
  return{
    bindKeys: function(){
      document.addEventListener('keydown',(e)=>{
        this.handleKeydown(e.key);
      });
      document.addEventListener('keyup', (e)=>{
        this.handleKeyup(e.key);
      });
    },

    handleKeyup:function(key){
      console.log("up " + key);
    },

    handleKeydown: function(key){
      console.log("down " + key);
    }
  };

};

module.exports = Controller;
