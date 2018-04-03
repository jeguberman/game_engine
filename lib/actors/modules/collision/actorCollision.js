import merge from 'lodash/merge';

const collisionZone = {
  left: [],
  right
};

const actorCollision = function(options){
  const _actorCollision = {
    name: "actorCollision",
    collision_width: 32,
    collision_height: 32,
    state: "default",
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

    addCollisionResponse(objName, func, zone = "any"){
      this.collisions[objName][zone] = func;
    },

    boxCollision: function(otherObj){
      switch(otherObj){
        case this.upCollision(otherObj):
        this.collisions.push({zone:"up", detail: otherObj.name})
        case this.downCollision(otherObj):
        this.collisions.push({zone:"down", detail: otherObj.name})
        case this.leftCollision(otherObj):
        this.collisions.push({zone:"left", detail: otherObj.name})
        case this.rightCollision(otherObj):
        this.collisions.push({zone:"right", detail: otherObj.name})
      }

    },




    moduleStep: function(){
      this.checkCollision();
      this.collisions = {};
    }
  };
};
