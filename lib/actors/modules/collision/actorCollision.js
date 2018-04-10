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
      any: {any: function(){console.log("defaultResponse");}}
    },
    collisions: {

    },

    moduleStep: function(){
      if(Object.keys(this.collisions).length === 0){
        this.collisionResponses.any.any();
      }else{
        debugger
        for(var otherName in this.collisions){
          this.handleCollisionResponse(otherName);
        }
      }
      this.collisions = {};
    },

    moduleDidMount: function(){
      debugger
      this.initializeActorCollision();
    },

    checkCollision: function(otherObj){
      if(otherObj.collisionType === "box"){
        return this.boxCollision(otherObj);
      }else if(otherObj.collisionType === "circle"){
        return this.circleCollision(otherObj);
      }
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
      let otherHeadIn = this.otherHeadIn(otherObj);
      let otherFootIn = this.otherFootIn(otherObj);
      let otherLeftIn = this.otherLeftIn(otherObj);
      let otherRightIn = this.otherRightIn(otherObj);
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
        ( this.otherLeftIn(otherObj) || this.otherRightIn(otherObj) ) &&
        ( (this.footLine() - 5) <= otherObj.headLine() )&&
        ( otherObj.headLine() <= this.footLine() )
      ){
        console.log(this.name, ":foot")
        return true;
      }
      return false;
    },

    headCollision: function(otherObj){
      if(
        ( this.otherLeftIn(otherObj) || this.otherRightIn(otherObj) ) &&
        ( this.headLine() <= otherObj.footLine() ) &&
        ( otherObj.footLine() <= (this.headLine() - 5) )
      ){
        return true;
      }
      return false;
    },

    rightCollision: function(otherObj){
      if(
        ( this.otherHeadIn(otherObj) || this.otherFootIn(otherObj) ) &&
        ( (this.rightLine() - 5) <= otherObj.leftLine() ) &&
        ( otherObj.leftLine() <= this.rightLine() )
      ){
        return true;
      }
      return false;
    },

    leftCollision: function(otherObj){
      if(
        ( this.otherHeadIn(otherObj) || this.otherFootIn(otherObj) ) &&
        ( this.leftLine() <= otherObj.rightLine() ) &&
        ( otherObj.rightLine() <= (this.leftLine() - 5) )
      ){
        return true;
      }
      return false;
    },


//these functions need a better name. It would also be nice to reduce the boiler plate but this is fine for now. These functions determine if the edge of otherObj falls between two points on the relevant axis of "this". That is to say, in otherHeadIn, if otherObj's head is between my head and my feet, the function returns true.

    otherHeadIn: function(otherObj){
      let oHead = otherObj.des.y;
      if( oHead >= this.des.y && oHead <= this.des.y + this.collision_height){
        return true;
      }
      return false;
    },

    otherFootIn: function(otherObj){
      let oFoot = otherObj.des.y + otherObj.collision_height;
      if( oFoot >= this.des.y && oFoot <= this.des.y + this.collision_height){
        return true;
      }
      return false;
    },

    otherLeftIn: function(otherObj){
      let oLeft = otherObj.des.x;
      if( oLeft >= this.des.x && oLeft <= this.des.x+this.collision_width){
        return true;
      }
      return false;
    },

    otherRightIn:function(otherObj){
      let oRight = otherObj.des.x + otherObj.collision_width;
      if( oRight <= this.des.x+this.collision_width && oRight >= this.des.x){
        return true;
      }
      return false;
    },

    headLine: function(){
      return this.des.y;
    },

    footLine: function(){
      return this.des.y + this.collision_height;
    },

    leftLine: function(){
      return this.des.x;
    },

    rightLine: function(){
      return this.des.x + this.collision_width;
    },


  };

  merge(_actorCollision, options);

  return _actorCollision;
};

module.exports = actorCollision;
