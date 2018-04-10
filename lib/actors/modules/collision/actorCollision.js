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
    state: "collisionState",
    collisionType: "box",
    responses: {},
    collisions: [],

    checkCollision: function(otherObj){
      if(otherObj.collisionType === "box"){
        return this.boxCollision(otherObj);
      }else if(otherObj.collisionType === "circle"){
        return this.circleCollision(otherObj);
      }
    },
    //
    // addCollisionResponse(objName, func, zone = "any"){
    //   this.collisions[objName][zone] = func;
    // },
    //
    boxCollision: function(otherObj){
      let headIn = this.otherHeadIn(otherObj);
      let footIn = this.otherFootIn(otherObj);

      if(this.name === "coin0"){
        if(headIn){
          
        }
      }

    },

    otherHeadIn: function(otherObj){
      let oHead = otherObj.des.y;
      if( oHead <= this.des.y && oHead >= this.des.y + this.collision_height){
        return true;
      }
      return false;
    },

    otherFootIn: function(otherObj){
      let oFoot = otherObj.des.y + otherObj.collision_height;
      if( oFoot <= this.des.y && oFoot >= this.des.y + this.collision_height){
        return true;
      }
      return false;
    },
    //
    // otherLeftIn: function(otherObj){
    //   let oLeft = otherObj.des.y;
    //   if( oLeft <= this.des.y && oLeft >= this.des.y + this.collision_height){
    //     return true;
    //   }
    //   return false;
    // },
    //
    // otherRightIn: function(otherObj){
    //   let oFoot = otherObj.des.y + otherObj.collision_height;
    //   if( oFoot <= this.des.y && oLeft >= this.des.y + this.collision_height){
    //     return true;
    //   }
    //   return false;
    // },



    upCollision:function(otherObj){

    },




    // moduleStep: function(){
    //   this.checkCollision();
    //   // this.collisions = {};
    // }
  };

  merge(_actorCollision, options);

  return _actorCollision;
};

module.exports = actorCollision;
