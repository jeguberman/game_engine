import MovingObject from '../moving_object';
// import Sprite from '../components/animation/sprite.js';
// import CelLib from '../components/cel_lib.js';
import merge from 'lodash/merge';
import PlayerSprite from './player_sprite';

const mario = {
  stand:{},
  walk:{},
  jump:{},
  fall:{},
  skid:{},
  crouch:{},
  dead:{},
  deflt:{}
};

class Player extends MovingObject{

  constructor(options){
    options = merge(
      {
        pos:[120,200],
        vel:[0,0],
        acc:[0,0],
        term: 100,

        color:"#ff33ff",
        name: "player"
      },
      options
    );
    super(options);
    this.state = "standRight";
    this.hook(PlayerSprite);

    this.jumpAcc = -15;
    this.walkAcc = 0.4;
    this.inJump = false;
    this.inWalk = false;
    this.Lbrake = true;
    this.Rbrake = true;
    this.breakConst = 0.75;



    this.deathFall = this.deathFall.bind(this);

  }

  hook(newThing){
    merge(this,newThing);
  }



  gameOver(){
    this.sprite = Images.marioDead;
    this.static = true;
    setTimeout(this.deathFall, 300);
  }

  deathFall(){
    this.static = false;
    this.vel[1] = -8;
    this.acc[1] = this.game.gravity;
  }

  verticalStop(obj){
    if(obj.name==="ground"){
      this.vel[1] = 0;
      this.acc[1] = 0;
      this.staticBlock(()=>{
        this.footCorrect(obj);
      });
    }
  }

  speedLessThanMaxGround(){
    if(this.vel[0] < this.maxGround && this.vel[0] > this.maxGround*-1){
      return true;
    }else{
      return false;
    }
  }

  footCheck(){
    const foot = this.pos[1]+this.height;
    return (foot < 321 && foot >319);
  }

  jump(){
    if(!this.inJump && this.footCheck()){
      this.vel[1] = this.vel[1]+this.jumpAcc;
      this.inJumpOn();
    }
  }

  inJumpOn(){
    this.inJump = true;

    this.changeSprite(Images.marioJumpRight);
  }

  outJump(){
    if ( this.vel[1] < 0 ) {
      this.vel[1] = 0;
    }
    this.inJump = false;
    this.changeSprite(Images.marioStandRight);
  }

  Lwalk(){
    // this.changeSprite(Images.marioStandLeft);
    // this.state ="standLeft";
    // if(this.speedLessThanMaxGround){
    //   if(this.vel[0] > 0){this.vel[0]=0.7;}
    //   this.acc[0] = (this.walkAcc * -1);
    // }
    // this.LbrakeOff();
  }

  LbrakeOff(){
    this.Lbrake=false;
  }

  LbrakeOn(){
    this.Lbrake = true;
  }

  Rwalk(){
    this.state ="standRight";
    // this.changeSprite(Images.marioStandRight);
    // if(this.speedLessThanMaxGround){
    //   if(this.vel[0] < 0){this.vel[0]=-0.7;}
    //   this.acc[0] = (this.walkAcc);
    // }
    this.RbrakeOff();
  }

  RbrakeOff(){
    this.Rbrake=false;
  }

  RbrakeOn(){
    this.Rbrake = true;
  }

  brakeCheck(){
    if(this.Lbrake && this.vel[0]<0){
      this.acc[0] = this.acc[0]*this.breakConst;
      this.vel[0] = this.vel[0]*this.breakConst;
    }
    if(this.Rbrake && this.vel[0]>0){
      this.acc[0] = this.acc[0]*this.breakConst;
      this.vel[0] = this.vel[0]*this.breakConst;
    }

  }

  terminalVelocity(){
    if(this.vel[1] > this.term){
      this.vel[1] = this.term;
    }
    if(this.vel[0] > this.maxGround){
      this.vel[0] = this.maxGround;
    }
    if(this.vel[1] < this.term * -1){
      this.vel[1] = this.term * -1;
    }
    if(this.vel[0] < this.maxGround * -1){
      this.vel[0] = this.maxGround * -1;
    }
  }

  move(delta){
    this.brakeCheck();
    this.vel = [(this.vel[0] + (delta * this.acc[0])), (this.vel[1] + (delta * this.acc[1]))];
    this.terminalVelocity();
    this.pos = [this.pos[0] + this.vel[0], this.pos[1] + this.vel[1]];
  }

  changeSprite(newImage){
    this.sprite = newImage;
  }

}
module.exports = Player;
