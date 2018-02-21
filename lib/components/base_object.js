import merge from 'lodash/merge';

const baseObj = (options) => {
  const _baseObj = {
    name: "baseObj",
    modules: new Set(),
    moduleSteps: [],
    dx: 0,
    dy: 0,
    collision_width: 32,
    collision_height: 32,
    state: "standRight",

    mergeWith:function(newObj){
      if(newObj){
        merge(this,newObj);
      }
    },//merge with new object without making a record in modules, for late added options hashes

    addModule: function(newObj){
      if(newObj){
        this.verifyModuleName(newObj);
        const trueName = this.name;
        this.modules.add(newObj.name);
        this.moduleSteps.push(newObj.step);
        merge(this, newObj);
        this.name = trueName;
      }
    },//merge with object and add object name to modules list.

    verifyModuleName:function(newObj){
      if(!newObj.name){throw {message: "Game Object " + this.name + " tried to receive unnamed object ", object: newObj};}
    }

  };

  _baseObj.mergeWith(options);
  return _baseObj;
};

module.exports = baseObj;
