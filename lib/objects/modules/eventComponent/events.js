import merge from 'lodash/merge';


export const event = function( options ){
  options = merge({
    type: null,
    lifespan: 1,
    payload: {}
  });

  const _event = {
    type: options.type,
    payload: {},
    lifeSpan: options.lifespan
  };

  return _event;
};

export const keyDown = function ( options ){
  merge(options, {type: "keyDown"});
  const _event = new Event(options);
  return _event;
};

export const keyUp = function ( options ){
  merge(options, {type: "keyUp"});
  const _event = new Event(options);
  return _event;
};
