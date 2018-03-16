/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 34);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var baseMerge = __webpack_require__(37),
    createAssigner = __webpack_require__(95);

/**
 * This method is like `_.assign` except that it recursively merges own and
 * inherited enumerable string keyed properties of source objects into the
 * destination object. Source properties that resolve to `undefined` are
 * skipped if a destination value exists. Array and plain object properties
 * are merged recursively. Other objects and value types are overridden by
 * assignment. Source objects are applied from left to right. Subsequent
 * sources overwrite property assignments of previous sources.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 0.5.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var object = {
 *   'a': [{ 'b': 2 }, { 'd': 4 }]
 * };
 *
 * var other = {
 *   'a': [{ 'c': 3 }, { 'e': 5 }]
 * };
 *
 * _.merge(object, other);
 * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
 */
var merge = createAssigner(function(object, source, srcIndex) {
  baseMerge(object, source, srcIndex);
});

module.exports = merge;


/***/ }),
/* 1 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(21);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var listCacheClear = __webpack_require__(39),
    listCacheDelete = __webpack_require__(40),
    listCacheGet = __webpack_require__(41),
    listCacheHas = __webpack_require__(42),
    listCacheSet = __webpack_require__(43);

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(6);

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;


/***/ }),
/* 6 */
/***/ (function(module, exports) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(20),
    getRawTag = __webpack_require__(51),
    objectToString = __webpack_require__(52);

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(10);

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var isKeyable = __webpack_require__(66);

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

module.exports = getMapData;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsNative = __webpack_require__(49),
    getValue = __webpack_require__(56);

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(7),
    isObject = __webpack_require__(1);

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(23);

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

module.exports = baseAssignValue;


/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(11),
    isLength = __webpack_require__(28);

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _merge = __webpack_require__(0);

var _merge2 = _interopRequireDefault(_merge);

var _module_manager = __webpack_require__(18);

var _module_manager2 = _interopRequireDefault(_module_manager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var actor = function actor(options) {

  options = (0, _merge2.default)({
    name: "actor",
    type: "actor"
  }, options);

  var _actor = new _module_manager2.default(options);

  _actor.mergeWith({
    collision_width: 32,
    collision_height: 32,
    state: "default",

    step: function step() {
      this.runModuleSteps();
      this.updateState();
    },

    updateState: function updateState() {
      // throw {message: "Individual Game Objects must contain custom definitions for updateState function. " + this.name, object: this, trueMessage: "No they don't, this is going to be separated into a state manager for physical game objects. This doesn't pertain to non-entities like the debug module"};
    }

  });

  return _actor;
};

module.exports = actor;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _merge = __webpack_require__(0);

var _merge2 = _interopRequireDefault(_merge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//abstractly, a verb is the action which is performed when the player presses a button. https://www.youtube.com/watch?v=7daTGyVZ60I

var Verb = function Verb(options) {

  var _verb = {

    name: "unnamedVerb",

    requirements: [],
    cooldown: false,
    func: function func() {},
    priority: 1,
    subscriptions: {},
    targets: {},

    setFunc: function setFunc(func) {
      this.func = func;
    },

    setTrigger: function setTrigger(func) {
      if (typeof func !== "function") {
        throw "Verb Triggers must be event handling functions";
      }
      this.requirements[0] = func;
    },

    getTrigger: function getTrigger() {
      return this.requirements[0];
    },

    newSubscription: function newSubscription(type) {
      var callBack = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.func;

      document.addEventListener(type, callBack.bind(this));
    }, //not every verb will be tied to the playerActor. Maybe, for example, if the user pressed printscreen, a component will begin recording screenshots for 1800 frames(30 seconds). This would be an example of a game level verb. Also... maybe the user wants to pause during  cutscene or something, to select the skip cutscene option, because unskippable cutscenes are the worst

    beginCoolDown: function beginCoolDown() {
      var ms = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;

      this.cooldown = true;
      var _cooldown = function () {
        this.cooldown = false;
      }.bind(this);
      setTimeout(_cooldown, ms);
    },

    addTarget: function addTarget(name, newTarget) {
      this.targets[name] = newTarget;
    },

    handleEvent: function handleEvent(e) {
      var _this = this;

      if (this.requirements.length === 0) {
        console.log("no requirements");
      }
      if (this.requirements.every(function (r) {
        return r.bind(_this)(e);
      })) {
        this.func.call(this);
      }
    },

    addRequirement: function addRequirement(func) {
      if (typeof func !== "function") {
        throw "requirements must be boolean functions";
      } else {
        this.requirements.push(func);
      }
    }

  };
  (0, _merge2.default)(_verb, options);
  return _verb;
};

module.exports = Verb;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _actorManager = __webpack_require__(35);

var _actorManager2 = _interopRequireDefault(_actorManager);

var _timeManager = __webpack_require__(36);

var _timeManager2 = _interopRequireDefault(_timeManager);

var _module_manager = __webpack_require__(18);

var _module_manager2 = _interopRequireDefault(_module_manager);

var _renderer = __webpack_require__(104);

var _renderer2 = _interopRequireDefault(_renderer);

var _gameController = __webpack_require__(105);

var _gameController2 = _interopRequireDefault(_gameController);

var _physicsComponent = __webpack_require__(107);

var _physicsComponent2 = _interopRequireDefault(_physicsComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EngineCore = function EngineCore() {

  var _engine = new _module_manager2.default({ name: "game" });
  _engine.addModules(new _timeManager2.default(), new _actorManager2.default());
  return _engine;
};

var Game = function Game() {
  devLog.log("creating Game Engine");
  var _game = new EngineCore();

  _game.addModules(new _gameController2.default(), new _physicsComponent2.default(), // new CollisionManager(),
  new _renderer2.default());
  devLog.log("game engine complete");
  return _game;
};

module.exports = Game;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _merge = __webpack_require__(0);

var _merge2 = _interopRequireDefault(_merge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ModuleManager = function ModuleManager(options) {
  devLog.log("creating new Module Manager: " + options.name);
  var _moduleManager = {
    modules: {},
    moduleSteps: [],
    moduleVerifications: [],

    mergeWith: function mergeWith(newObj) {
      //merge with new object without making a record in modules, for late added options hashes, but whatever
      if (newObj) {
        (0, _merge2.default)(this, newObj);
      }
    },

    addModule: function addModule(newObj) {
      //merge with object and add object name to modules list.
      devLog.log("[" + this.name + "] begins incorporating new module [" + newObj.name + "]");
      if (newObj) {
        //why???
        this.verifyModuleName(newObj);
        this.modules[newObj.name] = newObj.initialState;

        delete newObj.initialState;
        this.addModuleVerifications(newObj);
        this.runModuleVerifications(newObj);
        this.verifyModuleStep(newObj);
        this.ifComponentWillMount(newObj);
        var trueName = this.name;
        (0, _merge2.default)(this, newObj);
        this.name = trueName;
        this.ifComponentDidMount(newObj);
        devLog.log("[" + this.name + "] finishes incorporating new module [" + newObj.name + "]");
      }
    },

    ifComponentDidMount: function ifComponentDidMount(newObj) {
      if (newObj.componentDidMount) {
        this.componentDidMount();
      }
    },

    ifComponentWillMount: function ifComponentWillMount(newObj) {
      if (newObj.componentWillMount) {
        newObj.componentWillMount();
      }
    },


    addModules: function addModules() {
      var _this = this;

      for (var _len = arguments.length, newObjs = Array(_len), _key = 0; _key < _len; _key++) {
        newObjs[_key] = arguments[_key];
      }

      newObjs.forEach(function (obj) {
        return _this.addModule(obj);
      });
    },

    verifyModuleName: function verifyModuleName(newObj) {
      //verify newObj has property "name", or else throw an error
      if (!newObj.name) {
        throw { message: "Module Manager " + this.name + " tried to receive unnamed object ", object: newObj };
      }
    },

    addModuleVerifications: function addModuleVerifications(newObj) {
      if (newObj.newModuleVerification) {
        this.moduleVerifications.push(newObj.newModuleVerification);
        delete newObj.newModuleVerification;
      }
    },

    runModuleVerifications: function runModuleVerifications(newObj) {
      var _this2 = this;

      this.moduleVerifications.forEach(function (func) {
        func.bind(_this2)(newObj);
      });
    },

    verifyModuleStep: function verifyModuleStep(newObj) {
      //if module has a function called moduleStep, add it to the list of steps, or else do nothing
      if (newObj.moduleStep) {
        this.moduleSteps.push(newObj.moduleStep);
        delete newObj.moduleStep;
      }
    },

    runModuleSteps: function runModuleSteps() {
      var _this3 = this;

      this.moduleSteps.forEach(function (func) {
        // debugger
        func.call(_this3);
      });
    },

    moduleState: function moduleState(moduleName) {
      return this.modules[string];
    },

    stepDebug: function stepDebug(condition) {
      if (eval(condition)) {
        debugger;
      };
    }

  };

  _moduleManager.verifyModuleName(options);
  _moduleManager.mergeWith(options);
  return _moduleManager;
};

module.exports = ModuleManager;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(10),
    root = __webpack_require__(2);

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(2);

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(50)))

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(12),
    eq = __webpack_require__(6);

/**
 * This function is like `assignValue` except that it doesn't assign
 * `undefined` values.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignMergeValue(object, key, value) {
  if ((value !== undefined && !eq(object[key], value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignMergeValue;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(10);

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

module.exports = defineProperty;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(80);

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);

module.exports = getPrototype;


/***/ }),
/* 25 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = isPrototype;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsArguments = __webpack_require__(81),
    isObjectLike = __webpack_require__(3);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;


/***/ }),
/* 27 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),
/* 28 */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(2),
    stubFalse = __webpack_require__(83);

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(13)(module)))

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsTypedArray = __webpack_require__(85),
    baseUnary = __webpack_require__(86),
    nodeUtil = __webpack_require__(87);

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(91),
    baseKeysIn = __webpack_require__(93),
    isArrayLike = __webpack_require__(14);

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

module.exports = keysIn;


/***/ }),
/* 32 */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ }),
/* 33 */
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _game = __webpack_require__(17);

var _game2 = _interopRequireDefault(_game);

var _mock_game = __webpack_require__(108);

var _mock_game2 = _interopRequireDefault(_mock_game);

var _merge = __webpack_require__(0);

var _merge2 = _interopRequireDefault(_merge);

var _controllerUtilities = __webpack_require__(119);

var _controllerMaps = __webpack_require__(120);

var gamepadMaps = _interopRequireWildcard(_controllerMaps);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var trueGame = function trueGame() {
  var game = (0, _mock_game2.default)();
  game.startClock(); //time Manager
}; // import dbSetUp from './lib/util/debugUtil';


var negaGame = function negaGame() {
  // attachControllerToWindow("xbox","Xbox One");
  // attachControllerToWindow("lcon","Joy-Con (L)");
  // attachControllerToWindow("rcon","Joy-Con (R)");
  //
  var xbox = (0, _controllerUtilities.miniControllerObject)("Xbox One", 8);
  var lcon = (0, _controllerUtilities.miniControllerObject)("Joy-Con (L)");
  var rcon = (0, _controllerUtilities.miniControllerObject)("Joy-Con (R)");

  function theLoop() {
    console.clear();
    console.log(xbox().buttons[0]);
  }
  setInterval(theLoop, 250);
};

var falseGame = function falseGame() {};
var switcher = function switcher(n) {
  switch (n) {
    case 1:
      return trueGame;
    case 0:
      return falseGame;
    case -1:
      return negaGame;
  }
};

document.addEventListener('DOMContentLoaded', switcher(1));

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ActorManager = function ActorManager() {

  return {
    name: "actorManager",
    actors: { all: [] },
    stepFunctions: [],

    addActor: function addActor(newActor) {
      var _this = this;

      if (newActor.type === "player") {
        this.actors.all.unshift(newActor);
      } else {
        this.actors.all.push(newActor);
      }
      Object.keys(newActor.modules).forEach(function (moduleName) {
        if (_this.actors[moduleName]) {
          _this.actors[moduleName].push(newActor);
        } else {
          devLog.log("no Game level module " + moduleName + " from " + newActor.name, 'warning');
        }
      });
    },

    moduleStep: function moduleStep() {
      this.actors.all.forEach(function (obj) {
        // this.stepFunctions.forEach( (func) => {
        //
        // });
        obj.step();
      });
    },

    newModuleVerification: function newModuleVerification(newModule) {
      if (newModule.actorComponent) {
        this.actors[newModule.actorComponent] = [];
      }
    }

  };
};

module.exports = ActorManager;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var TimeManager = function TimeManager() {
  return {
    name: "timeManager",
    lastTime: 0,
    idealDelta: 1000 / 60,
    framesInASecond: 1 / 60,

    startClock: function startClock() {
      devLog.log("starting Game Clock");
      this.resetClock();
      requestAnimationFrame(this.updateGameState.bind(this));
    },

    // updateGameState: function(time){
    //   this.timeDelta = time - this.lastTime;
    //   this.updateAllObjectStates();//objectManager
    //   // this.physicsContainer(time);
    //   this.rendererContainer();
    //   this.lastTime = time;
    //   requestAnimationFrame(this.updateGameState.bind(this));
    // },

    updateGameState: function updateGameState(time) {
      this.timeDelta = time - this.lastTime;
      this.runModuleSteps();
      this.lastTime = time;
      requestAnimationFrame(this.updateGameState.bind(this));
    },

    // physicsContainer(time){
    //   let now;
    //   while( now - time >= this.framesInASecond ){
    //     this.calculatePhysics();//physicsManager
    //     now = Date.now;
    //   }
    // },

    // rendererContainer(){
    //   this.render();//renderer
    // },


    // helper methods

    velocityScale: function velocityScale() {
      return this.timeDelta / this.idealDelta;
    }, //returns a multiplier to adjust physics calculations by how much time has actually passed compared to how much time was expected to pass as per the calculations

    resetClock: function resetClock() {
      this.lastTime = 0;
    }

  };
};

module.exports = TimeManager;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(38),
    assignMergeValue = __webpack_require__(22),
    baseFor = __webpack_require__(70),
    baseMergeDeep = __webpack_require__(72),
    isObject = __webpack_require__(1),
    keysIn = __webpack_require__(31);

/**
 * The base implementation of `_.merge` without support for multiple sources.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} [customizer] The function to customize merged values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMerge(object, source, srcIndex, customizer, stack) {
  if (object === source) {
    return;
  }
  baseFor(source, function(srcValue, key) {
    if (isObject(srcValue)) {
      stack || (stack = new Stack);
      baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
    }
    else {
      var newValue = customizer
        ? customizer(object[key], srcValue, (key + ''), object, source, stack)
        : undefined;

      if (newValue === undefined) {
        newValue = srcValue;
      }
      assignMergeValue(object, key, newValue);
    }
  }, keysIn);
}

module.exports = baseMerge;


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(4),
    stackClear = __webpack_require__(44),
    stackDelete = __webpack_require__(45),
    stackGet = __webpack_require__(46),
    stackHas = __webpack_require__(47),
    stackSet = __webpack_require__(48);

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

module.exports = Stack;


/***/ }),
/* 39 */
/***/ (function(module, exports) {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(5);

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(5);

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(5);

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(5);

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(4);

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

module.exports = stackClear;


/***/ }),
/* 45 */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

module.exports = stackDelete;


/***/ }),
/* 46 */
/***/ (function(module, exports) {

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

module.exports = stackGet;


/***/ }),
/* 47 */
/***/ (function(module, exports) {

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

module.exports = stackHas;


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(4),
    Map = __webpack_require__(19),
    MapCache = __webpack_require__(57);

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

module.exports = stackSet;


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(11),
    isMasked = __webpack_require__(53),
    isObject = __webpack_require__(1),
    toSource = __webpack_require__(55);

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ }),
/* 50 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(20);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),
/* 52 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var coreJsData = __webpack_require__(54);

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(2);

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),
/* 55 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ }),
/* 56 */
/***/ (function(module, exports) {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

var mapCacheClear = __webpack_require__(58),
    mapCacheDelete = __webpack_require__(65),
    mapCacheGet = __webpack_require__(67),
    mapCacheHas = __webpack_require__(68),
    mapCacheSet = __webpack_require__(69);

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var Hash = __webpack_require__(59),
    ListCache = __webpack_require__(4),
    Map = __webpack_require__(19);

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

module.exports = mapCacheClear;


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

var hashClear = __webpack_require__(60),
    hashDelete = __webpack_require__(61),
    hashGet = __webpack_require__(62),
    hashHas = __webpack_require__(63),
    hashSet = __webpack_require__(64);

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(8);

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;


/***/ }),
/* 61 */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(8);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(8);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

module.exports = hashHas;


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(8);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(9);

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;


/***/ }),
/* 66 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

module.exports = isKeyable;


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(9);

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(9);

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(9);

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

var createBaseFor = __webpack_require__(71);

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

module.exports = baseFor;


/***/ }),
/* 71 */
/***/ (function(module, exports) {

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

module.exports = createBaseFor;


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

var assignMergeValue = __webpack_require__(22),
    cloneBuffer = __webpack_require__(73),
    cloneTypedArray = __webpack_require__(74),
    copyArray = __webpack_require__(77),
    initCloneObject = __webpack_require__(78),
    isArguments = __webpack_require__(26),
    isArray = __webpack_require__(27),
    isArrayLikeObject = __webpack_require__(82),
    isBuffer = __webpack_require__(29),
    isFunction = __webpack_require__(11),
    isObject = __webpack_require__(1),
    isPlainObject = __webpack_require__(84),
    isTypedArray = __webpack_require__(30),
    toPlainObject = __webpack_require__(88);

/**
 * A specialized version of `baseMerge` for arrays and objects which performs
 * deep merges and tracks traversed objects enabling objects with circular
 * references to be merged.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {string} key The key of the value to merge.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} mergeFunc The function to merge values.
 * @param {Function} [customizer] The function to customize assigned values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
  var objValue = object[key],
      srcValue = source[key],
      stacked = stack.get(srcValue);

  if (stacked) {
    assignMergeValue(object, key, stacked);
    return;
  }
  var newValue = customizer
    ? customizer(objValue, srcValue, (key + ''), object, source, stack)
    : undefined;

  var isCommon = newValue === undefined;

  if (isCommon) {
    var isArr = isArray(srcValue),
        isBuff = !isArr && isBuffer(srcValue),
        isTyped = !isArr && !isBuff && isTypedArray(srcValue);

    newValue = srcValue;
    if (isArr || isBuff || isTyped) {
      if (isArray(objValue)) {
        newValue = objValue;
      }
      else if (isArrayLikeObject(objValue)) {
        newValue = copyArray(objValue);
      }
      else if (isBuff) {
        isCommon = false;
        newValue = cloneBuffer(srcValue, true);
      }
      else if (isTyped) {
        isCommon = false;
        newValue = cloneTypedArray(srcValue, true);
      }
      else {
        newValue = [];
      }
    }
    else if (isPlainObject(srcValue) || isArguments(srcValue)) {
      newValue = objValue;
      if (isArguments(objValue)) {
        newValue = toPlainObject(objValue);
      }
      else if (!isObject(objValue) || (srcIndex && isFunction(objValue))) {
        newValue = initCloneObject(srcValue);
      }
    }
    else {
      isCommon = false;
    }
  }
  if (isCommon) {
    // Recursively merge objects and arrays (susceptible to call stack limits).
    stack.set(srcValue, newValue);
    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
    stack['delete'](srcValue);
  }
  assignMergeValue(object, key, newValue);
}

module.exports = baseMergeDeep;


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(2);

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

  buffer.copy(result);
  return result;
}

module.exports = cloneBuffer;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(13)(module)))

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(75);

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

module.exports = cloneTypedArray;


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

var Uint8Array = __webpack_require__(76);

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

module.exports = cloneArrayBuffer;


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(2);

/** Built-in value references. */
var Uint8Array = root.Uint8Array;

module.exports = Uint8Array;


/***/ }),
/* 77 */
/***/ (function(module, exports) {

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

module.exports = copyArray;


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

var baseCreate = __webpack_require__(79),
    getPrototype = __webpack_require__(24),
    isPrototype = __webpack_require__(25);

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !isPrototype(object))
    ? baseCreate(getPrototype(object))
    : {};
}

module.exports = initCloneObject;


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(1);

/** Built-in value references. */
var objectCreate = Object.create;

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = (function() {
  function object() {}
  return function(proto) {
    if (!isObject(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object;
    object.prototype = undefined;
    return result;
  };
}());

module.exports = baseCreate;


/***/ }),
/* 80 */
/***/ (function(module, exports) {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(7),
    isObjectLike = __webpack_require__(3);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

var isArrayLike = __webpack_require__(14),
    isObjectLike = __webpack_require__(3);

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

module.exports = isArrayLikeObject;


/***/ }),
/* 83 */
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(7),
    getPrototype = __webpack_require__(24),
    isObjectLike = __webpack_require__(3);

/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

module.exports = isPlainObject;


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(7),
    isLength = __webpack_require__(28),
    isObjectLike = __webpack_require__(3);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;


/***/ }),
/* 86 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(21);

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(13)(module)))

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(89),
    keysIn = __webpack_require__(31);

/**
 * Converts `value` to a plain object flattening inherited enumerable string
 * keyed properties of `value` to own properties of the plain object.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {Object} Returns the converted plain object.
 * @example
 *
 * function Foo() {
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.assign({ 'a': 1 }, new Foo);
 * // => { 'a': 1, 'b': 2 }
 *
 * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
 * // => { 'a': 1, 'b': 2, 'c': 3 }
 */
function toPlainObject(value) {
  return copyObject(value, keysIn(value));
}

module.exports = toPlainObject;


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

var assignValue = __webpack_require__(90),
    baseAssignValue = __webpack_require__(12);

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}

module.exports = copyObject;


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(12),
    eq = __webpack_require__(6);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignValue;


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

var baseTimes = __webpack_require__(92),
    isArguments = __webpack_require__(26),
    isArray = __webpack_require__(27),
    isBuffer = __webpack_require__(29),
    isIndex = __webpack_require__(32),
    isTypedArray = __webpack_require__(30);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;


/***/ }),
/* 92 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(1),
    isPrototype = __webpack_require__(25),
    nativeKeysIn = __webpack_require__(94);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeysIn;


/***/ }),
/* 94 */
/***/ (function(module, exports) {

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

module.exports = nativeKeysIn;


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

var baseRest = __webpack_require__(96),
    isIterateeCall = __webpack_require__(103);

/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner(assigner) {
  return baseRest(function(object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;

    customizer = (assigner.length > 3 && typeof customizer == 'function')
      ? (length--, customizer)
      : undefined;

    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}

module.exports = createAssigner;


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

var identity = __webpack_require__(33),
    overRest = __webpack_require__(97),
    setToString = __webpack_require__(99);

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return setToString(overRest(func, start, identity), func + '');
}

module.exports = baseRest;


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

var apply = __webpack_require__(98);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}

module.exports = overRest;


/***/ }),
/* 98 */
/***/ (function(module, exports) {

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

module.exports = apply;


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

var baseSetToString = __webpack_require__(100),
    shortOut = __webpack_require__(102);

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = shortOut(baseSetToString);

module.exports = setToString;


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

var constant = __webpack_require__(101),
    defineProperty = __webpack_require__(23),
    identity = __webpack_require__(33);

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !defineProperty ? identity : function(func, string) {
  return defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(string),
    'writable': true
  });
};

module.exports = baseSetToString;


/***/ }),
/* 101 */
/***/ (function(module, exports) {

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

module.exports = constant;


/***/ }),
/* 102 */
/***/ (function(module, exports) {

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

module.exports = shortOut;


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(6),
    isArrayLike = __webpack_require__(14),
    isIndex = __webpack_require__(32),
    isObject = __webpack_require__(1);

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike(object) && isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq(object[index], value);
  }
  return false;
}

module.exports = isIterateeCall;


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _merge = __webpack_require__(0);

var _merge2 = _interopRequireDefault(_merge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Renderer = function Renderer(options) {

  options = (0, _merge2.default)({
    width: 16 * 60,
    height: 16 * 40,
    ctx: null
  }, options);

  return {
    name: "renderer",
    actorComponent: "actorAnimator",
    ctx: options.ctx,
    view_width: options.width,
    view_height: options.height,

    moduleStep: function moduleStep() {
      this.renderView();
      this.renderFrame();
    },

    renderView: function renderView() {
      var ctx = this.ctx;
      ctx.clearRect(0, 0, this.view_width, this.view_height);
      ctx.fillStyle = ctx.fillStyle === "#000000";
      ctx.fillRect(0, 0, this.view_width, this.view_height);
    },

    renderFrame: function renderFrame(time) {
      var _this = this;

      this.actors.all.forEach(function (obj) {
        return obj.draw(_this.ctx);
      });
    },

    setContext: function setContext(context) {
      this.ctx = context;
    }

  };
};

module.exports = Renderer;

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _util = __webpack_require__(106);

var gameController = function gameController() {
  var KeyToButton = {
    "k": "a",
    "l": "b",
    "j": "x",
    "i": "y",

    "u": "lb",
    "o": "rb",
    "7": "lt",
    "9": "rt",

    "`": "select",
    "Escape": "start",

    "-": "lclick",
    "=": "rclick",

    "w": "up",
    "s": "down",
    "a": "left",
    "d": "right"
  };
  var ButtonToKey = {
    "a": "k",
    "b": "l",
    "x": "j",
    "y": "i",

    "lb": "u",
    "rb": "o",
    "lt": "7",
    "rt": "9",

    "select": "`",
    "start": "Escape",

    "-": "lclick",
    "=": "rclick",

    "up": "w",
    "down": "s",
    "left": "a",
    "right": "d"
  };
  var xboxIndexToKey = ["k", "l", "j", "i", "u", "o", "7", "9", "`", "Escape", "-", "=", "w", "s", "a", "d"];
  var xboxIndexToButton = ["a", "b", "x", "y", "lb", "rb", "lt", "rt", "select", "start", "lclick", "rclick", "up", "down", "left", "right"];
  var controllerDOM = document.getElementById("controlDebug");

  var _controller = {
    name: "gameController",
    actorComponent: "actorController",
    inputs: new Set(),
    controllerDOM: controllerDOM,
    controllerHistory: [{
      frameSlice: new Set("~"),
      frameCount: 0
    }],
    gamepadLastStep: new Set(),
    subscriptions: {},
    gamepadConnected: false,

    bindKeys: function bindKeys() {
      var _this = this;

      devLog.log(this.name + " sets key bindings");
      var self = this;
      document.addEventListener('keydown', function (e) {
        return _this.handleKeydown(e);
      });
      document.addEventListener('keyup', function (e) {
        return _this.handleKeyup(e);
      });
      window.addEventListener('gamepadconnected', function (e) {
        return _this.handleGamepadConnected(e);
      });

      window.addEventListener('gamepaddisconnected', function (e) {
        return _this.handleGamepadDisconnected(e);
      });
    },

    handleKeydown: function handleKeydown(e) {
      if (KeyToButton[e.key]) {
        this.inputs.add(KeyToButton[e.key]);
        this.dispatchControllerEvent({ keydown: KeyToButton[e.key] });
      }
    },

    dispatchControllerEvent: function dispatchControllerEvent(detail) {
      document.dispatchEvent(new CustomEvent('controllerAction', { detail: detail
        // well this won't work. you need to only dispatch events once per frame.
      }));
    },

    handleKeyup: function handleKeyup(e) {
      if (KeyToButton[e.key]) {
        this.inputs.delete(KeyToButton[e.key]);
        this.dispatchControllerEvent({ keyup: KeyToButton[e.key] });
      }
    },

    handleGamepadConnected: function handleGamepadConnected(e) {
      console.log("Gamepad connected at index %d: %s", e.gamepad.index, e.gamepad.id);
      this.gamepadConnected = true; //extremely unhappy about this use of global variables. More trouble binding this I suppose
    },
    handleGamepadDisconnected: function handleGamepadDisconnected(e) {
      console.log("Gamepad disconnected at index %d: %s", e.gamepad.index, e.gamepad.id);
      if (navigator.getGamepads()[0] === null) {
        this.gamepadConnected = false;
      }
    },
    recordHistory: function recordHistory() {
      var newFrame = new Set();
      this.inputs.forEach(function (el) {
        return newFrame.add(el);
      });
      if (newFrame.size === 0) {
        newFrame.add("~");
      }

      var lastFrame = this.controllerHistory[this.controllerHistory.length - 1];

      if ((0, _util.compareSets)(newFrame, lastFrame.frameSlice)) {
        lastFrame.frameCount += 1;
      } else {
        this.controllerHistory.push({ frameSlice: newFrame, frameCount: 1 });
      }
    },


    getHistoryTailAsString: function getHistoryTailAsString(n) {
      var _this2 = this;

      var history = this.controllerHistory.slice(-n).reverse();
      var str = "";
      history.map(function (frame) {
        str = str + _this2.inputFrameAsString(frame.frameSlice);
      });
      return str;
    },

    getHistoryTail: function getHistoryTail(n) {
      var history = this.controllerHistory.slice(-n).reverse;
    },

    inputFrameAsString: function inputFrameAsString(frame) {
      //converts a set to a string, specifically to be printed to the debug window
      var str = "";
      if (frame.size > 0) {
        frame.forEach(function (key) {
          if (key === " ") {
            key = "space";
          }
          str = str + key + ",";
        });
      }
      str = str.slice(0, -1) + "<br>";
      return str;
    },

    getGamepadInputs: function getGamepadInputs() {
      // console.log(this.gamepadConnected);
      if (this.gamepadConnected) {
        // let kd = new Event('keydown');
        // let ku = new Event('keyup');
        var buttons = navigator.getGamepads()[0].buttons;
        for (var i in buttons) {
          if (buttons[i].pressed) {
            console.log(i);
            // kd.key = xboxIndexToKey[i];
            this.gamepadLastStep.add(xboxIndexToButton[i]);
            // document.dispatchEvent(kd);
          } else {
            if (this.gamepadLastStep.has(xboxIndexToButton[i])) {
              this.gamepadLastStep.delete(xboxIndexToButton[i]);
              // ku.key = xboxIndexToKey[i];navigat
              // document.dispatchEvent(ku);
            }
          }
        }
      }
    },

    // onNewActor(actor){
    //   if(actor.modules.actorController){
    //     actor.initializeSubscriptions();
    //   }
    // },

    moduleStep: function moduleStep() {
      this.getGamepadInputs();
      this.recordHistory();
      this.controllerDOM.innerHTML = "Inputs: <br>" + this.getHistoryTailAsString(5) + "<br/>";
    }

  };
  // _controller.bindKeys();
  return _controller;
};

module.exports = gameController;

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.compareSets = compareSets;
exports.swapKeysVals = swapKeysVals;
function compareSets(setA, setB) {
  var bool = true;
  if (setA.size !== setB.size) {
    bool = false;
  }

  setA.forEach(function (el) {
    if (!setB.has(el)) {
      bool = false;
    }
  });

  setB.forEach(function (el) {
    if (!setA.has(el)) {
      bool = false;
    }
  });

  return bool;
}

function swapKeysVals(obj) {
  var newObj = {};

  var keys = Object.keys(obj);
  keys.forEach(function (key) {
    newObj[obj[key]] = key;
  });

  this.JSON = JSON.stringify(newObj);
  return newObj;
}

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _merge = __webpack_require__(0);

var _merge2 = _interopRequireDefault(_merge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var physicsComponent = function physicsComponent(options) {
  var _physicsComponent = {
    name: "physicsComponent",
    actorComponent: "actorPhysics"

    // moduleStep: function(){
    //   // this.actors.all.forEach( (actor)=>{
    //   //   actor.yAcc += this.gravity;
    //   // },this);
    // }


  };
  (0, _merge2.default)(_physicsComponent, options);
  return _physicsComponent;
};

module.exports = physicsComponent;

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _game = __webpack_require__(17);

var _game2 = _interopRequireDefault(_game);

var _mock_actor = __webpack_require__(109);

var Mock = _interopRequireWildcard(_mock_actor);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function mockGame() {
  var view = document.getElementById('view');

  var game = new _game2.default();
  game.bindKeys();

  game.setContext(view.getContext('2d'));
  view.width = game.view_width;
  view.height = game.view_height;

  // game.addActor(new Mock.mockObj(0,0));
  // game.addActor(new mockObj(1,1));
  // game.addActor(new mockObj(0,2));
  // game.addActor(new mockObj(2,0));
  // game.addActor(new mockObj(2,2));
  // game.addActor(new mockObj(1,3));
  // game.addActor(new mockObj(3,1));
  // game.addActor(new mockObj(3,3));
  // game.addActor(new mockObj(4,0));
  // game.addActor(new mockObj(0,4));
  // game.addActor(new mockObj(2,4));
  // game.addActor(new mockObj(4,2));
  // game.addActor(new Mock.mockObj(4,4));
  game.addActor(new Mock.featureMock(4, 4));

  dbAdd("feature", game.actors.all[0]);
  dbAdd("game", game);

  return game;
}

exports.default = mockGame;

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.featureMock = exports.mockObj = undefined;

var _actor = __webpack_require__(15);

var _actor2 = _interopRequireDefault(_actor);

var _objFrameData = __webpack_require__(110);

var _objFrameData2 = _interopRequireDefault(_objFrameData);

var _objData = __webpack_require__(111);

var _objData2 = _interopRequireDefault(_objData);

var _mock_obj_animation = __webpack_require__(112);

var _mock_obj_animation2 = _interopRequireDefault(_mock_obj_animation);

var _mock_controller = __webpack_require__(115);

var _mock_controller2 = _interopRequireDefault(_mock_controller);

var _mock_physics = __webpack_require__(117);

var _mock_physics2 = _interopRequireDefault(_mock_physics);

var _verb = __webpack_require__(16);

var _verb2 = _interopRequireDefault(_verb);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mockObj = exports.mockObj = function mockObj() {
  var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var m = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  devLog.log('ceating new mock object');
  var _mockObj = new _actor2.default();

  _mockObj.addModules(new _mock_obj_animation2.default(), new _mock_physics2.default());

  var options = {
    name: "mockObj",
    d: {
      x: 0 + n * 40,
      y: 0 + m * 40
    },
    collision_width: 40,
    collision_height: 40,
    state: "mockery"
  };

  _mockObj.mergeWith(options);
  return _mockObj;
};

var featureMock = exports.featureMock = function featureMock() {
  var xmod = 0;
  var ymod = 0;
  devLog.log('creating new feature mock');
  var _featureMock = new mockObj(xmod, ymod);
  devLog.log('changing name of ' + _featureMock.name + ' to [player]');
  _featureMock.name = "player";
  _featureMock.type = "player";

  _featureMock.addModules(new _mock_controller2.default(), new _objData2.default(), new _objFrameData2.default());

  _featureMock.initializeActorController();
  return _featureMock;
};

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _actor = __webpack_require__(15);

var _actor2 = _interopRequireDefault(_actor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var objFrameData = function objFrameData() {

  var domElement = document.getElementById("objFrameData");
  // debugger
  var start = Date.now();
  var _objFrameData = {
    name: "objFrameData",
    frameData: {
      animationFrames: [],
      animationFPS: 0,
      physicsFrames: [],
      physicsFPS: 0,
      lastUpdate: start,
      domElement: domElement
    },
    moduleStep: function moduleStep() {
      var animationFrames = this.frameData.animationFrames;
      var now = Date.now();
      animationFrames.unshift(now);
      while (now - animationFrames[animationFrames.length - 1] > 1000) {
        animationFrames.pop();
      }
      this.frameData.domElement.innerHTML = "Animation Frames per Second: " + animationFrames.length;
    }
  };
  return _objFrameData;
};

module.exports = objFrameData;

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _actor = __webpack_require__(15);

var _actor2 = _interopRequireDefault(_actor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var objData = function objData() {

  var domElement = document.getElementById("objData");

  // debugger
  var start = Date.now();
  var _objData = {
    name: "objData",
    objData: {
      animationFrames: [],
      animationFPS: 0,
      physicsFrames: [],
      physicsFPS: 0,
      lastUpdate: start,
      domElement: domElement
    },
    moduleStep: function moduleStep() {
      // debugger
      this.objData.domElement.innerHTML = "x-coord: " + this.des.x + "<br>\n      y-cord: " + this.des.y + "<br>\n      animationState: " + this.modules.actorAnimator;
    }
  };
  return _objData;
};

module.exports = objData;

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _actoranimator = __webpack_require__(113);

var _actoranimator2 = _interopRequireDefault(_actoranimator);

var _merge = __webpack_require__(0);

var _merge2 = _interopRequireDefault(_merge);

var _animation = __webpack_require__(114);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Spin = new _animation.AnimationCycle("Spin");
var noSpin = new _animation.AnimationCycle("noSpin");

noSpin.createCel({ sX: 400, sY: 0, draw_width: 40, draw_height: 40 }); //0

Spin.createCel({ sX: 400, sY: 0, draw_width: 40, draw_height: 40 }); //0
Spin.createCel({ sX: 5, sY: 0, draw_width: 37, draw_height: 40 }); //1
Spin.createCel({ sX: 51, sY: 0, draw_width: 31, draw_height: 40 }); //2
Spin.createCel({ sX: 101, sY: 0, draw_width: 21, draw_height: 40 }); //3
Spin.createCel({ sX: 149, sY: 0, draw_width: 13, draw_height: 40 }); //4
Spin.createCel({ sX: 196, sY: 0, draw_width: 8, draw_height: 40 }); //5
Spin.createCel({ sX: 238, sY: 0, draw_width: 13, draw_height: 40 }); //6
Spin.createCel({ sX: 277, sY: 0, draw_width: 22, draw_height: 40 }); //7
Spin.createCel({ sX: 317, sY: 0, draw_width: 31, draw_height: 40 }); //8
Spin.createCel({ sX: 357, sY: 0, draw_width: 38, draw_height: 40 }); //9

var fastSpin = new _animation.AnimationCycle("fastSpin");
Spin.cels.forEach(function (cel) {

  fastSpin.createCel((0, _merge2.default)({}, cel, { frameCount: 1 }));
});

var mockAnimator = function mockAnimator() {
  var _mockAnimator = new _actoranimator2.default({ src: './assets/coin_test.png' });
  _mockAnimator.add(Spin);
  _mockAnimator.initialState = "Spin";
  _mockAnimator.add(noSpin);
  _mockAnimator.add(fastSpin);
  return _mockAnimator;
};

module.exports = mockAnimator;

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _merge = __webpack_require__(0);

var _merge2 = _interopRequireDefault(_merge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var actorAnimator = function actorAnimator(options) {

  var image = new Image();
  image.src = options.src;
  var animations = {};

  return {
    name: "actorAnimator",
    initialState: "idle",
    image: image,
    animations: animations,
    drawCollision: function drawCollision(ctx) {
      ctx.save();
      ctx.fillStyle = "#00eeff";
      ctx.fillRect(this.des.x, this.des.y, this.collision_width, this.collision_height);
      ctx.restore();
    },

    draw: function draw(ctx) {

      this.drawCollision(ctx);
      ctx.save();
      ctx.translate(this.des.x + this.collision_width * 0.5, this.des.y + this.collision_height * 0.5);
      ctx.fillStyle = "red";
      // ctx.fillRect((-this.draw_width * 0.5), (-this.draw_height * 0.5), this.draw_width, this.draw_height);
      ctx.drawImage(this.image, this.sX, this.sY, this.draw_width, this.draw_height, -this.draw_width * 0.5, -this.draw_height * 0.5, this.draw_width, this.draw_height);
      ctx.restore();
    },

    add: function add(cycle) {
      this.animations[cycle.name] = cycle;
    },

    moduleStep: function moduleStep() {
      // debugger
      // if(!this.animations[this.modules.actoranimator]){
      //   throw {message: `frame advance error`, data: {this:this.name, state: this.modules.actoranimator, animations:this.animations}};
      // }
      // if(this.modules.actorAnimator === "fastSpin"){debugger}
      var currentCel = this.animations[this.modules.actorAnimator].advance();
      (0, _merge2.default)(this, currentCel);
      delete this.frameCount;
    },

    set: function set(string) {
      console.log("you should definitely not being seeing this");
    },
    get: function get(string) {
      return this.animations[string];
    },

    getAnimations: function getAnimations() {
      return this.animations.keys;
    }
  };
}; //breadcrumbs: Elise said something about a single source of truth for state. Currently the sprite is just a store of animation data. I think what elise is getting at is closer to a redux cycle.

//that is to say, the gameSpaceObject knows what the current frame and frame data is, passes that information to the sprite, and the sprite returns the frame data for the next state.

exports.default = actorAnimator;

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AnimationCycle = undefined;
exports.cel = cel;

var _merge = __webpack_require__(0);

var _merge2 = _interopRequireDefault(_merge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function cel(options) {
  return (0, _merge2.default)({ sX: 0, sY: 0, draw_width: 16, draw_height: 16, frameCount: 5 }, options);
}

var AnimationCycle = exports.AnimationCycle = function AnimationCycle() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;

  return {
    cels: [],
    celIdx: 0,
    frameIdx: 0,
    name: name,
    rightFace: true,

    push: function push(newCel) {
      this.cels.push(newCel);
    },

    add: function add(newCel) {
      this.cels.push(newCel);
    },

    currentCel: function currentCel() {
      return this.cels[this.celIdx];
    },

    incrementIndex: function incrementIndex() {
      this.frameIdx += 1;
      if (this.frameIdx > this.currentCel().frameCount) {
        this.frameIdx = 0;
        this.celIdx += 1;
        if (this.celIdx > this.cels.length - 1) {
          this.celIdx = 0;
        }
      }
    },

    advance: function advance() {
      this.incrementIndex();
      return this.currentCel();
    },

    spawnCel: function spawnCel() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      return cel(options);
    },

    createCel: function createCel() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      this.add(cel(options));
    }

  };
};

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _actorController = __webpack_require__(116);

var _actorController2 = _interopRequireDefault(_actorController);

var _verb = __webpack_require__(16);

var _verb2 = _interopRequireDefault(_verb);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function hop(coord, dir) {
  var cmd = 'this.targets.owner.des.' + coord + ' ' + dir + '= 40';
  return function () {
    // debugger
    if (!this.cooldown) {
      eval(cmd);
      this.beginCoolDown();
    }
  };
}

function move(axis, dir) {
  return function () {
    this.targets.owner.whatever = true;
    var acc = this.targets.owner.acc[axis];
    acc += 0.21 * dir;
  };
}

var moveVerb = function moveVerb(name, axis, dir) {
  var _v = new _verb2.default({ name: name });
  _v.setFunc(move(axis, dir));
  _v.setTrigger(function (e) {
    return e.detail.keydown === name;
  });
  return _v;
};

var right = new moveVerb("right", "x", "+");
right.addRequirement(function () {
  var owner = this.targets.owner;
  return owner.des.x + owner.collision_width < 960;
});

var left = new moveVerb("left", "x", "-");
left.addRequirement(function () {
  var owner = this.targets.owner;
  return owner.des.x > 0;
});

var down = new moveVerb("down", "y", "+");
down.addRequirement(function () {
  var owner = this.targets.owner;
  return owner.des.y + owner.collision_height < 640;
});

var up = new moveVerb("up", "y", "-");
up.addRequirement(function () {
  var owner = this.targets.owner;
  return owner.des.y > 0;
});

var spinFaster = new _verb2.default({ name: "spinFaster" });
spinFaster.setFunc(function (e) {
  this.targets.owner.modules.actorAnimator = "fastSpin";
});
spinFaster.setTrigger(function (e) {
  // debugger
  return e.detail.keydown === "a";
});

var spinSlower = new _verb2.default({ name: "spinSlower" });
spinSlower.setFunc(function (e) {
  this.targets.owner.modules.actorAnimator = "Spin";
});
spinSlower.setTrigger(function (e) {
  return e.detail.keyup === "a";
});

var mockController = function mockController() {
  var _mockController = new _actorController2.default();
  _mockController.addVerbs(right, left, up, down, spinFaster, spinSlower);
  return _mockController;
};

module.exports = mockController;

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _merge = __webpack_require__(0);

var _merge2 = _interopRequireDefault(_merge);

var _verb2 = __webpack_require__(16);

var _verb3 = _interopRequireDefault(_verb2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var actorController = function actorController(options) {
  var _actorController = {
    name: "actorController",
    initialState: "idle",
    verbs: {},
    events: {},

    handleControllerAction: function handleControllerAction(e) {
      Object.values(this.verbs).forEach(function (verb) {
        verb.handleEvent(e);
      });
    },

    addVerb: function addVerb(newVerb) {
      var neoVerb = Object.assign({}, newVerb);
      if (!this.verbs[newVerb.name]) {
        this.verbs[newVerb.name] = neoVerb;
      } else {
        throw {
          message: 'Game Object ' + this.name + ' tried to overwrite action',
          data: { newVerb: newVerb.name, input: newVerb.input }
        };
      }
    },

    addVerbs: function addVerbs() {
      var _this = this;

      for (var _len = arguments.length, newVerbs = Array(_len), _key = 0; _key < _len; _key++) {
        newVerbs[_key] = arguments[_key];
      }

      newVerbs.forEach(function (newVerb) {
        return _this.addVerb(newVerb);
      });
    },

    componentDidMount: function componentDidMount() {

      var verbs = Object.values(this.verbs);
      verbs.forEach(function (verb) {
        verb.addTarget("owner", this);
      }, this);
    },

    spawnVerb: function spawnVerb(options) {
      _verb = new _verb3.default.core(options);
      return _verb;
    },

    createVerb: function createVerb(options) {
      this.addVerb(this.spawnVerb());
    },
    initializeActorController: function initializeActorController() {
      var handleControllerAction = this.handleControllerAction.bind(this);
      document.addEventListener("controllerAction", handleControllerAction);
    }
  };

  (0, _merge2.default)(_actorController, options);
  return _actorController;
};

module.exports = actorController;

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _actorPhysics = __webpack_require__(118);

var _actorPhysics2 = _interopRequireDefault(_actorPhysics);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function mockPhysics() {
  var _mockPhysics = new _actorPhysics2.default();

  return _mockPhysics;
}

module.exports = mockPhysics;

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _merge = __webpack_require__(0);

var _merge2 = _interopRequireDefault(_merge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var actorPhysics = function actorPhysics(options) {
  var _actorPhysics = {
    name: "actorPhysics",
    des: { x: 0, y: 0 },
    acc: { x: 0, y: 0 },
    vel: { x: 0, y: 0 },
    max: { x: 10, y: 10 },
    terminal: 10, //velocity max
    friction: 0.1,
    // environment: "air", //current environments

    applyFriction: function applyFriction(axis) {
      var vel = this.vel[axis];
      var mod = 0;
      switch (vel) {
        case vel < 0:
          mod = 1;
          break;
        case vel > 0:
          mod = -1;
          break;
        case vel === 0:
          mod = 0;
          break;
      }

      vel = vel + this.fiction * mod;
    },

    applyAccToVel: function applyAccToVel(axis) {
      var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

      if (["x", "y"].some(function (x) {
        return x === axis;
      })) {
        this.vel[axis] += this.acc[axis] * n;
      } else {
        throw "no axis passed to function";
      }
      if (this.vel[axis] > Math.max(this.max[axis], this.terminal)) {
        this.vel[axis] = Math.max(this.max[axis], this.terminal);
      }
    },

    applyVelToDes: function applyVelToDes(axis) {
      if (["x", "y"].some(function (x) {
        return x === axis;
      })) {
        this.des[axis] += this.vel[axis];
      } else {
        throw "no axis passed to function";
      }
    },

    moduleStep: function moduleStep() {
      var _this = this;

      var axes = ["x", "y"];
      if (this.whatever) {
        debugger;
      }
      axes.forEach(function (axis) {
        //you think fat arrow means you don't have to bind this as the second argument to forEach, but you weren't sure, so you made a note
        _this.applyFriction(axis);
        _this.applyAccToVel(axis, 1);
        _this.applyVelToDes(axis);
      });
    }
  };
  (0, _merge2.default)(_actorPhysics, options);
  return _actorPhysics;
};

module.exports = actorPhysics;

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ggp = ggp;
exports.getControllerIndex = getControllerIndex;
exports.getController = getController;
exports.miniControllerObject = miniControllerObject;
exports.attachControllerToWindow = attachControllerToWindow;

var _controllerMaps = __webpack_require__(120);

var gpMaps = _interopRequireWildcard(_controllerMaps);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var gamepadIDs = {
  "Xbox One": 8,
  "Joy-Con (L)": 11,
  "Joy-Con (R)": 11
};

function ggp() {
  return navigator.getGamepads();
}

function getControllerIndex(idstring, endSlice) {
  var gamepads = Array.from(ggp());
  for (var i in gamepads) {
    if (gamepads[i] && gamepads[i].id.slice(0, endSlice) === idstring) {
      return i;
    }
  }
  console.error("gamepad not found");
}

function getController(idString) {
  var id = gamepadIDs[idString];
  return ggp()[getControllerIndex(idString, gamepadIDs[idString])];
}

function miniControllerObject(idString) {
  var _cont = function _cont() {
    return getController(idString);
  };
  _cont.buttons = function () {
    return getController(idString).buttons.map(function (b) {
      return b.pressed;
    });
  };
  _cont.axes = function () {
    return getController(idString).axes;
  };
  return _cont;
}

function attachControllerToWindow(varName, idString) {
  window[varName] = new miniControllerObject(idString);
}

//everything below this is disorganized, might be deleted


function getAxisVals() {
  var map = gpMaps.joyconDirectionToFloat;
  var neutral = map.neutral;
  var vals = function vals() {
    Object.values(map);
  };
  var keys = Object.keys(map);
  keys.map(function (key) {
    if (!vals.some(function (value) {
      return value === map[key];
    })) {
      console.log(key);
      var val = neutral;
      while (val === neutral) {
        val = lcon.axes()[9];
      }
      map[key] = val;
    }
  });
  console.log(map);
} //used to get float values from analogue inputs on joycon

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var KeyToXbox = exports.KeyToXbox = {
  "k": "a",
  "l": "b",
  "j": "x",
  "i": "y",

  "u": "lb",
  "o": "rb",
  "7": "lt",
  "9": "rt",

  "`": "select",
  "Escape": "start",

  "-": "lclick",
  "=": "rclick",

  "w": "up",
  "s": "down",
  "a": "left",
  "d": "right"
};
var XboxToKey = exports.XboxToKey = {
  "a": "k",
  "b": "l",
  "x": "j",
  "y": "i",

  "lb": "u",
  "rb": "o",
  "lt": "7",
  "rt": "9",

  "select": "`",
  "start": "Escape",

  "-": "lclick",
  "=": "rclick",

  "up": "w",
  "down": "s",
  "left": "a",
  "right": "d"
};
var xboxIndexToKey = exports.xboxIndexToKey = ["k", //1
"l", //2
"j", //3
"i", //4

"u", //5
"o", //6
"7", //7
"9", //8

"`", //9
"Escape", //10

"-", //11
"=", //12

"w", //13
"s", //14
"a", //15
"d" //16
];
var xboxIndexToButton = exports.xboxIndexToButton = ["a", "b", "x", "y", "lb", //5
"rb", //6
"lt", //7
"rt", //8

"select", //9
"start", //10

"lclick", //11
"rclick", //12

"up", "down", "left", "right"];

var lconIndexToButton = exports.lconIndexToButton = ["left", "down", "up", "right", "sl", "sr", null, null, "-", null, "lclick", null, null, "capture", "lb", "zl"];

var rconIndexToButton = exports.rconIndexToButton = ["a", "b", "x", "y", "sl", "sr", null, null, null, "+", null, "rclick", "home", null, "rb", "zr"];

var joyconDirectionToFloatL = exports.joyconDirectionToFloatL = {
  right: -1,
  downright: -0.7142857313156128,
  down: -0.4285714030265808,
  downleft: -0.14285719394683838,
  neutral: 1.2857143878936768,
  upright: 1,
  up: 0.7142857313156128,
  upleft: 0.4285714626312256,
  left: 0.14285719394683838
};

var joyconFloatToDirectionL = exports.joyconFloatToDirectionL = { "1": "upright", "1.2857143878936768": "neutral", "0.7142857313156128": "up", "-0.4285714030265808": "down", "0.14285719394683838": "left", "-1": "right", "0.4285714626312256": "upleft", "-0.1428571343421936": "downleft", "-0.7142857313156128": "downright" };

var joyconDirectionToFloatR = exports.joyconDirectionToFloatR = {
  neutral: 1.2857143878936768,
  up: -0.4285714030265808,
  down: 0.7142857313156128,
  left: -1,
  right: 0.14285719394683838,
  upleft: -0.7142857313156128,
  upright: -0.14285719394683838,
  downleft: 1,
  downright: 0.4285714626312256
};

var joyconFloatToDirectionR = exports.joyconFloatToDirectionR = { "1": "downleft", "1.2857143878936768": "neutral", "-0.4285714030265808": "up", "0.7142857313156128": "down", "-1": "left", "0.14285719394683838": "right", "-0.7142857313156128": "upleft", "-0.1428571343421936": "upright", "0.4285714626312256": "downright" };

var generic = exports.generic = {
  lxaxis: true,
  lyaxis: true,
  ltrigger: true,
  xaxisr: true,
  yaxisr: true,
  rtrigger: true,
  lfaceu: true,
  lfaced: true,
  lfacel: true,
  lfacer: true,
  lclick: true,
  rfaceu: true,
  rfaced: true,
  rfacel: true,
  rfacer: true,
  rclick: true,
  lnav: true,
  rnav: true,
  lsystem: true,
  rsystem: true

};

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map