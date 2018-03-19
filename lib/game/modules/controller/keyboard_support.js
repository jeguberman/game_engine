import * as Maps from './controllerMaps.js';

function KeyboardSupport(){
{
  bindKeys(){
    document.addEventListener(
      'keydown', this.handleKeyDown.bind(this)
    );
    document.addEventListener(
      'keyup', this.handleKeyUp.bind(this)
    );
  },

  handleKeyDown(e){
    if(Maps.KeyToXbox[e.key]){
      this.state.buttons[ Maps.KeyToXbox[e.key] ] = true;
    }
  },

  handleKeyUp(e){
    if(Maps.KeyToXbox[e.key]){
      this.state.buttons[ Maps.KeyToXbox[e.key] ] = false;
    }
  },

}
}


module.exports = KeyboardSupport;
