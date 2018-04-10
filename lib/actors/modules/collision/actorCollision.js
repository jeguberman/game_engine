import merge from 'lodash/merge';

//for now, we're only going to do box collision. Eventually actorCollision will require a type variable to be passed, and it will return the appropriate collision component, but for now everything is box.
//
// const collisionZone = {
//   left: [],
//   right
// };

const actorCollision = function(options){
  const _actorCollision = {
    name: "actorCollision",
    collision_width: 32,
    collision_height: 32,
    initialState: "collisionState",
    collisionType: "box",
    collisionResponses: {
      any: {any: function(){}}
    },
    collisions: {

    },

    moduleStep: function(){
      if(Object.keys(this.collisions).length === 0){
        this.collisionResponses.any.any();
      }else{
        for(var otherName in this.collisions){
          this.handleCollisionResponse(otherName);
        }
      }
      this.collisions = {};
    },

    moduleDidMount: function(){
      this.initializeActorCollision();
    },

    checkCollision: function(otherObj){

      // if(otherObj.collisionType === "box"){
        return this.boxCollision(otherObj);
      // }else if(otherObj.collisionType === "circle"){
        // return this.circleCollision(otherObj);
      // }
    },

    addCollisionResponse(objName, zone, func){
      // Object.assign(this.collisionResponses,{[objName]:{[zone]:func}});
      if(!this.collisionResponses[objName]){
        this.collisionResponses[objName] = {};
      }
      if(!this.collisionResponses[objName][zone]){
        this.collisionResponses[objName][zone] = func;
      }
    },

    changeDefaultCollisionResponse(func){
      this.collisionResponses.any.any = func;
    },


    handleCollisionResponse: function(otherName){
      // debugger
      if(this.collisionResponses[otherName] && this.collisionResponses[otherName][this.collisions[otherName]]){
        this.collisionResponses[otherName][this.collisions[otherName]]();
      }
    },

    initializeActorCollision: function(){
      for(var response in this.collisionResponses){
        for(var zone in this.collisionResponses[response]){
          this.collisionResponses[response][zone] = this.collisionResponses[response][zone].bind(this);
        }
      }
    },

    boxCollision: function(otherObj){

      if(this.footCollision(otherObj)){ //if otherObj collides with my foot
        this.collisions[otherObj.name] = "foot";
      }
      if(this.headCollision(otherObj)){ //if otherObj collides with my head
        this.collisions[otherObj.name] = "head";
      }
      if(this.leftCollision(otherObj)){ //if otherObj collides with my left
        this.collisions[otherObj.name] = "left";
      }
      if(this.rightCollision(otherObj)){ //if otherObj collides with my right
        this.collisions[otherObj.name] = "right";
      }
    },

    //various directional methods

    footCollision: function(otherObj){
      if(
        ( this.leftLine() <= otherObj.rightLine() ) &&
        ( this.rightLine() >= otherObj.leftLine() ) &&
        ( this.footLine() >= otherObj.headLine() )&&
        ( this.footLine() <= otherObj.neckLine() )
      ){
        return true;
      }
      return false;
    },

    headCollision: function(otherObj){
      if(
        ( this.leftLine() <= otherObj.rightLine() ) &&
        ( this.rightLine() >= otherObj.leftLine() ) &&
        ( this.headLine() <= otherObj.footLine() ) &&
        ( this.headLine() >= otherObj.ankleLine() )
      ){
        return true;
      }
      return false;
    },

    rightCollision: function(otherObj){
      if(
        ( this.headLine() <= otherObj.footLine() )&&
        ( this.footLine() >= otherObj.headLine() ) &&
        ( this.rightLine() >= otherObj.leftLine() ) &&
        ( this.rightLine() <= otherObj.leftWrist() )
      ){
        return true;
      }
      return false;
    },

    leftCollision: function(otherObj){
      if(
        ( this.headLine() <= otherObj.footLine() )&&
        ( this.footLine() >= otherObj.headLine() ) &&
        ( this.leftLine() <= otherObj.rightLine() ) &&
        ( this.leftLine() >= otherObj.rightWrist() )
      ){
        return true;
      }
      return false;
    },


    headLine: function(){
      return this.des.y;
    },

    neckLine: function(){
      return this.des.y + 15;
    },

    footLine: function(){
      return this.des.y + this.collision_height;
    },

    ankleLine: function(){
      return (this.des.y + this.collision_height) - 15;
    },

    leftLine: function(){
      return this.des.x;
    },

    leftWrist: function(){
      return this.des.x + 15;
    },

    rightLine: function(){
      return this.des.x + this.collision_width;
    },

    rightWrist: function(){
      return (this.des.x + this.collision_width) - 15;
    }


  };

  merge(_actorCollision, options);

  return _actorCollision;
};

module.exports = actorCollision;
