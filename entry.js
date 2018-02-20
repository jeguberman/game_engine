import Game from './lib/Game/game';
import merge from 'lodash/merge';


const trueGame = ()=>{
  const view = document.getElementById('view');
  let ctx = view.getContext('2d');
  const game = new Game({ctx});
  // debugger
  view.width = game.view_width;
  view.height = game.view_height;
  game.start();


};

const falseGame = () => {


  const BThing = () => {
    return {
      BVAL: 2,
      func: function(){
        console.log("from B");
      },

      Bfunc: function(){
        console.log(this.BVAL);
      },

      otherFunc: function(){
        this.Afunc();
      }
    };
  };

  const AThing = () => {
    return {
      AVAL: "A",
      func: function(){
        console.log("from A");
      },

      Afunc: function(){
        console.log(this.AVAL);
      }
    };
  };

  let a = new AThing();
  let b = new BThing();
  let ab = merge({},a,b);
  // ab.__proto__ = merge({},a.__proto__,b.__proto__);
  let ap = a.__proto__;
  let bp = b.__proto__;
  let abp = Object.create({},ap,bp);
  // ab.func();
};


const switcher = (n) => {
  if(n){
    return trueGame;
  }else{
    return falseGame;
  }
};

document.addEventListener('DOMContentLoaded', switcher(1));
