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
    collisionResponses: {},
    collisions: {

    },

    checkCollision: function(otherObj){
      if(otherObj.collisionType === "box"){
        return this.boxCollision(otherObj);
      }else if(otherObj.collisionType === "circle"){
        return this.circleCollision(otherObj);
      }
    },
    //
    addCollisionResponse(objName, zone, func){
      Object.assign(this.collisionResponses,{[objName]:{[zone]:func}});
    },
    //
    boxCollision: function(otherObj){
      let headIn = this.otherHeadIn(otherObj);
      let footIn = this.otherFootIn(otherObj);
      let leftIn = this.otherLeftIn(otherObj);
      let rightIn = this.otherRightIn(otherObj);
      if(leftIn || rightIn){
        if(!footIn && headIn){
          this.collisions[otherObj.name] = "foot";
        }
      }
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

    handleCollisionResponse: function(event){
      // debugger
      if(this.collisionResponses[event]){
        this.collisionResponses[event][this.collisions[event]]();
      }
    },

    initializeActorCollision: function(){
      // this.handleCollisionResponse = this.handleCollisionResponse.bind(this);
      for(var response in this.collisionResponses){
        for(var zone in this.collisionResponses[response])
        this.collisionResponses[response][zone] = this.collisionResponses[response][zone].bind(this);
        // this.collisionResponses[response] =  this.collisionResponses[response].bind(this);
      }
    },

    moduleStep: function(){
      let g = this;
      for(var event in this.collisions){
        this.handleCollisionResponse(event);
      }
      this.collisions = {};
    }
  };

  merge(_actorCollision, options);

  return _actorCollision;
};

module.exports = actorCollision;
