(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("PIXI"));
	else if(typeof define === 'function' && define.amd)
		define("typescript_intro", ["PIXI"], factory);
	else if(typeof exports === 'object')
		exports["typescript_intro"] = factory(require("PIXI"));
	else
		root["typescript_intro"] = factory(root["PIXI"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__10__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 124);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(82),
    baseKeysIn = __webpack_require__(147),
    isArrayLike = __webpack_require__(23);

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

var arrayLikeKeys = __webpack_require__(82),
    baseKeys = __webpack_require__(145),
    isArrayLike = __webpack_require__(23);

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
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
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = keys;


/***/ }),
/* 3 */
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
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(76);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var assignValue = __webpack_require__(30),
    baseAssignValue = __webpack_require__(21);

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
/* 6 */
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
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(3),
    isKey = __webpack_require__(51),
    stringToPath = __webpack_require__(152),
    toString = __webpack_require__(172);

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (isArray(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(toString(value));
}

module.exports = castPath;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var isSymbol = __webpack_require__(52);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = toKey;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var baseMatches = __webpack_require__(200),
    baseMatchesProperty = __webpack_require__(212),
    identity = __webpack_require__(22),
    isArray = __webpack_require__(3),
    property = __webpack_require__(214);

/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */
function baseIteratee(value) {
  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
  if (typeof value == 'function') {
    return value;
  }
  if (value == null) {
    return identity;
  }
  if (typeof value == 'object') {
    return isArray(value)
      ? baseMatchesProperty(value[0], value[1])
      : baseMatches(value);
  }
  return property(value);
}

module.exports = baseIteratee;


/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__10__;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var LinkedList = (function () {
    function LinkedList() {
        this.__length = 0;
    }
    Object.defineProperty(LinkedList.prototype, "length", {
        get: function () {
            return this.__length;
        },
        enumerable: true,
        configurable: true
    });
    LinkedList.prototype.add = function (node) {
        if (this.first == null) {
            this.first = this.last = node;
        }
        else {
            node.prev = this.last;
            this.last.next = node;
            this.last = node;
        }
        node.list = this;
        this.__length++;
        return this;
    };
    LinkedList.prototype.remove = function (node) {
        if (node.list == null) {
            return;
        }
        if (this.first === this.last) {
            this.first = this.last = null;
        }
        else if (this.__length > 0) {
            if (node === this.last) {
                node.prev.next = null;
                this.last = node.prev;
            }
            else if (node === this.first) {
                node.next.prev = null;
                this.first = node.next;
            }
            else {
                node.next.prev = node.prev;
                node.prev.next = node.next;
            }
        }
        node.next = node.prev = node.list = null;
        this.__length--;
        return this;
    };
    LinkedList.prototype.clear = function () {
        if (!this.first) {
            return;
        }
        var node = this.first;
        while (node) {
            var next = node.next;
            node.next = node.prev = node.list = null;
            node = next;
        }
        this.first = this.last = null;
    };
    LinkedList.prototype.toArray = function () {
        var ret = [];
        if (!this.first) {
            return ret;
        }
        var node = this.first;
        while (node) {
            ret.push(node);
            node = node.next;
        }
        return ret;
    };
    return LinkedList;
}());
exports.LinkedList = LinkedList;
var Node = (function () {
    function Node(data) {
        this.data = data;
    }
    Node.prototype.update = function (dt) {
    };
    Node.prototype.dispose = function () {
    };
    return Node;
}());
exports.Node = Node;
//# sourceMappingURL=LinkedList.js.map

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsNative = __webpack_require__(132),
    getValue = __webpack_require__(138);

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
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Rnd = (function () {
    function Rnd() {
    }
    Rnd.float = function (min, max) {
        return Math.random() * (max - min) + min;
    };
    Rnd.bool = function (chance) {
        if (chance === void 0) { chance = 0.5; }
        return Math.random() < chance;
    };
    Rnd.sign = function (chance) {
        if (chance === void 0) { chance = 0.5; }
        return Math.random() < chance ? 1 : -1;
    };
    Rnd.bit = function (chance) {
        if (chance === void 0) { chance = 0.5; }
        return Math.random() < chance ? 1 : 0;
    };
    Rnd.integer = function (min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    };
    return Rnd;
}());
exports.Rnd = Rnd;
//# sourceMappingURL=Rnd.js.map

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(15),
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
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(16),
    getRawTag = __webpack_require__(134),
    objectToString = __webpack_require__(135);

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
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(4);

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),
/* 17 */
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
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var baseRest = __webpack_require__(31),
    isIterateeCall = __webpack_require__(81);

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
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var baseFor = __webpack_require__(59),
    keys = __webpack_require__(2);

/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn(object, iteratee) {
  return object && baseFor(object, iteratee, keys);
}

module.exports = baseForOwn;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var identity = __webpack_require__(22);

/**
 * Casts `value` to `identity` if it's not a function.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Function} Returns cast function.
 */
function castFunction(value) {
  return typeof value == 'function' ? value : identity;
}

module.exports = castFunction;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(75);

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
/* 22 */
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
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(14),
    isLength = __webpack_require__(46);

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
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(4),
    stubFalse = __webpack_require__(143);

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(47)(module)))

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(7),
    toKey = __webpack_require__(8);

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = castPath(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

module.exports = baseGet;


/***/ }),
/* 26 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var DataView = __webpack_require__(191),
    Map = __webpack_require__(54),
    Promise = __webpack_require__(192),
    Set = __webpack_require__(193),
    WeakMap = __webpack_require__(194),
    baseGetTag = __webpack_require__(15),
    toSource = __webpack_require__(77);

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

module.exports = getTag;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var BaseEmitterCore = (function () {
    function BaseEmitterCore(type) {
        this.type = type;
        this._dx = 0;
        this._dy = 0;
        this._rotation = 0;
    }
    BaseEmitterCore.prototype.init = function (emitter) {
        this.emitter = emitter;
        this._settings = emitter.settings.core.params;
        this.x = this.__x = emitter.x;
        this.y = this.__y = emitter.y;
        this.rotation = emitter.rotation;
    };
    BaseEmitterCore.prototype.emit = function (particle) {
    };
    BaseEmitterCore.prototype.prepare = function (spawnCount) {
        this._posInterpolationStep = 1 / spawnCount;
        this._t = this._posInterpolationStep * 0.5;
    };
    BaseEmitterCore.prototype.step = function () {
        this.__x = this.x;
        this.__y = this.y;
    };
    BaseEmitterCore.prototype.recycle = function () {
        this.emitter = null;
        this._settings = null;
    };
    BaseEmitterCore.prototype.dispose = function () {
        this.recycle();
        this.emitter = null;
        this._settings = null;
    };
    Object.defineProperty(BaseEmitterCore.prototype, "rotation", {
        get: function () {
            return this._rotation;
        },
        set: function (value) {
            this._rotation = value;
            this._dx = Math.cos(value);
            this._dy = Math.sin(value);
        },
        enumerable: true,
        configurable: true
    });
    BaseEmitterCore.__TYPE_BOX = "box";
    BaseEmitterCore.__TYPE_CIRCLE = "circle";
    BaseEmitterCore.__TYPE_RING = "ring";
    return BaseEmitterCore;
}());
exports.BaseEmitterCore = BaseEmitterCore;
//# sourceMappingURL=BaseEmitterCore.js.map

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var LinkedList_1 = __webpack_require__(11);
var FXSignal = (function () {
    function FXSignal() {
        this.__hasCallback = false;
        this._list = new LinkedList_1.LinkedList();
    }
    FXSignal.prototype.add = function (callback, scope, callRate) {
        this._list.add(new LinkedList_1.Node(new FXSignalListener(callback, scope, false, callRate)));
        this.__hasCallback = true;
    };
    FXSignal.prototype.addOnce = function (callback, scope) {
        this._list.add(new LinkedList_1.Node(new FXSignalListener(callback, scope, true)));
        this.__hasCallback = true;
    };
    FXSignal.prototype.dispatch = function () {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        var list = this._list;
        var node = list.first;
        var next;
        while (node) {
            next = node.next;
            var call = true;
            var data = node.data;
            if (data.callRate) {
                if (data.calls % data.callRate !== 0) {
                    call = false;
                }
            }
            if (call) {
                data.callback.apply(data.scope, params);
                if (data.once) {
                    list.remove(node);
                }
            }
            node = next;
        }
        this.__hasCallback = list.__length > 0;
    };
    FXSignal.prototype.remove = function (callback) {
        var list = this._list;
        var node = list.first;
        var next;
        while (node) {
            next = node.next;
            if (node.data.callback === callback) {
                list.remove(node);
                return;
            }
            node = next;
        }
        this.__hasCallback = list.__length > 0;
    };
    FXSignal.prototype.removeAll = function () {
        this._list.clear();
        this.__hasCallback = false;
    };
    return FXSignal;
}());
exports.FXSignal = FXSignal;
var FXSignalListener = (function () {
    function FXSignalListener(callback, scope, once, callRate) {
        this.callback = callback;
        this.scope = scope;
        this.once = once;
        this.callRate = callRate;
        this.calls = 0;
    }
    return FXSignalListener;
}());
exports.FXSignalListener = FXSignalListener;
//# sourceMappingURL=FXSignal.js.map

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(21),
    eq = __webpack_require__(17);

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
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var identity = __webpack_require__(22),
    overRest = __webpack_require__(78),
    setToString = __webpack_require__(79);

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
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ }),
/* 33 */
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
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsArguments = __webpack_require__(142),
    isObjectLike = __webpack_require__(6);

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
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsTypedArray = __webpack_require__(144),
    baseUnary = __webpack_require__(48),
    nodeUtil = __webpack_require__(49);

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
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(12);

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var listCacheClear = __webpack_require__(162),
    listCacheDelete = __webpack_require__(163),
    listCacheGet = __webpack_require__(164),
    listCacheHas = __webpack_require__(165),
    listCacheSet = __webpack_require__(166);

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
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(17);

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
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var isKeyable = __webpack_require__(168);

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
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(37),
    stackClear = __webpack_require__(181),
    stackDelete = __webpack_require__(182),
    stackGet = __webpack_require__(183),
    stackHas = __webpack_require__(184),
    stackSet = __webpack_require__(185);

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
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(83);

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);

module.exports = getPrototype;


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var assignValue = __webpack_require__(30),
    castPath = __webpack_require__(7),
    isIndex = __webpack_require__(32),
    isObject = __webpack_require__(1),
    toKey = __webpack_require__(8);

/**
 * The base implementation of `_.set`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @param {Function} [customizer] The function to customize path creation.
 * @returns {Object} Returns `object`.
 */
function baseSet(object, path, value, customizer) {
  if (!isObject(object)) {
    return object;
  }
  path = castPath(path, object);

  var index = -1,
      length = path.length,
      lastIndex = length - 1,
      nested = object;

  while (nested != null && ++index < length) {
    var key = toKey(path[index]),
        newValue = value;

    if (index != lastIndex) {
      var objValue = nested[key];
      newValue = customizer ? customizer(objValue, key, nested) : undefined;
      if (newValue === undefined) {
        newValue = isObject(objValue)
          ? objValue
          : (isIndex(path[index + 1]) ? [] : {});
      }
    }
    assignValue(nested, key, newValue);
    nested = nested[key];
  }
  return object;
}

module.exports = baseSet;


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var pixi_js_1 = __webpack_require__(10);
var LinkedList_1 = __webpack_require__(11);
var BaseEffect = (function (_super) {
    __extends(BaseEffect, _super);
    function BaseEffect(componentId) {
        var _this = _super.call(this) || this;
        _this.componentId = componentId;
        _this.exhausted = false;
        _this.completed = false;
        _this._x = 0;
        _this._y = 0;
        _this._rotation = 0;
        _this._alpha = 0;
        _this._scale = new pixi_js_1.Point();
        _this._active = false;
        _this.__recycled = true;
        return _this;
    }
    BaseEffect.prototype.update = function (dt) {
    };
    BaseEffect.prototype.recycle = function () {
    };
    Object.defineProperty(BaseEffect.prototype, "active", {
        get: function () {
            return this._active;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseEffect.prototype, "scale", {
        get: function () {
            return this._scale;
        },
        set: function (value) {
            this._scale = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseEffect.prototype, "alpha", {
        get: function () {
            return this._alpha;
        },
        set: function (value) {
            this._alpha = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseEffect.prototype, "rotation", {
        get: function () {
            return this._rotation;
        },
        set: function (value) {
            this._rotation = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseEffect.prototype, "y", {
        get: function () {
            return this._y;
        },
        set: function (value) {
            this._y = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseEffect.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (value) {
            this._x = value;
        },
        enumerable: true,
        configurable: true
    });
    BaseEffect.prototype.__applySettings = function (value) {
    };
    return BaseEffect;
}(LinkedList_1.Node));
exports.BaseEffect = BaseEffect;
//# sourceMappingURL=BaseEffect.js.map

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var BaseEffect_1 = __webpack_require__(43);
var FXSignal_1 = __webpack_require__(29);
var LinkedList_1 = __webpack_require__(11);
var Rnd_1 = __webpack_require__(13);
var ParticleEmitter = (function (_super) {
    __extends(ParticleEmitter, _super);
    function ParticleEmitter(componentId) {
        var _this = _super.call(this, componentId) || this;
        _this.targetOffset = 0;
        _this.autoRecycleOnComplete = true;
        _this._particles = new LinkedList_1.LinkedList();
        _this._particleCount = 0;
        _this._childEmitters = [];
        _this._hasChildEmitters = false;
        _this._paused = false;
        _this.__adoptRotation = false;
        _this.__on = {
            started: new FXSignal_1.FXSignal(),
            completed: new FXSignal_1.FXSignal(),
            exhausted: new FXSignal_1.FXSignal(),
            particleUpdated: new FXSignal_1.FXSignal(),
            particleSpawned: new FXSignal_1.FXSignal(),
            particleBounced: new FXSignal_1.FXSignal(),
            particleDied: new FXSignal_1.FXSignal(),
        };
        return _this;
    }
    ParticleEmitter.prototype.init = function (container, autoStart, scaleMod) {
        if (autoStart === void 0) { autoStart = true; }
        if (scaleMod === void 0) { scaleMod = 1; }
        this.container = container;
        this.core.__scaleMod = this._scaleMod = scaleMod;
        if (autoStart) {
            this.start();
        }
        return this;
    };
    ParticleEmitter.prototype.start = function () {
        if (this._active) {
            return;
        }
        var t = Date.now();
        var s = this.settings;
        var RX = this.__fx;
        RX.emitterCount++;
        this.infinite = s.infinite;
        this._time = Number.MAX_VALUE;
        this.endTime = s.duration > 0 ? t + s.duration * 1000 : s.duration;
        this._nextSpawnTime = 0;
        this._particleCount = 0;
        this._active = true;
        this.exhausted = this.completed = false;
        RX.__addActiveEffect(this);
        var l = s.childs.length;
        this._hasChildEmitters = l > 0;
        if (this._hasChildEmitters) {
            while (--l > -1) {
                var def = s.childs[l];
                var em = RX.getParticleEmitterById(def.id);
                var container = RX.__containers[em.settings.containerId] || this.container;
                em.init(container, true, (def.scale || 1) * (this._scaleMod || 1));
                if (def.adoptRotation) {
                    em.rotation = this._rotation;
                    em.__adoptRotation = true;
                }
                em.__parent = this;
                this._childEmitters.push(em);
            }
        }
        this.rotation = this._rotation;
        if (this.__on.started.__hasCallback) {
            this.__on.started.dispatch(this);
        }
        return this;
    };
    ParticleEmitter.prototype.stop = function (waitForParticles) {
        if (waitForParticles === void 0) { waitForParticles = true; }
        if (waitForParticles) {
            this.exhausted = true;
            if (this._hasChildEmitters) {
                this.stopChildEmitters(true);
            }
        }
        else {
            if (this.__on.completed.__hasCallback) {
                this.__on.completed.dispatch(this);
            }
            if (this.autoRecycleOnComplete) {
                this.recycle();
            }
            else {
                this.recycleParticles();
                this.completed = true;
                this._active = false;
                this.__fx.__removeActiveEffect(this);
            }
        }
    };
    ParticleEmitter.prototype.update = function (dt) {
        if (!this._active) {
            return;
        }
        var t = Date.now();
        if (!this.exhausted) {
            if (this.settings.autoRotation !== 0) {
                this.rotation += this.settings.autoRotation * (dt / 0.016666);
            }
            if (this.target) {
                this.rotation = this.target.rotation;
                if (this.targetOffset === 0) {
                    this.x = this.target.x;
                    this.y = this.target.y;
                }
                else {
                    this.x = this.target.x + Math.cos(this._rotation) * this.targetOffset;
                    this.y = this.target.y + Math.sin(this._rotation) * this.targetOffset;
                }
            }
            if (this.endTime === 0 && !this.infinite) {
                this.spawn();
                this.exhausted = true;
            }
            else if (this.infinite || t < this.endTime) {
                this._time += dt;
                if (this._time >= this._nextSpawnTime) {
                    this._time = 0;
                    this.spawn();
                    this._nextSpawnTime = this._time + Rnd_1.Rnd.float(this.settings.spawnFrequencyMin, this.settings.spawnFrequencyMax);
                }
            }
            else {
                this.exhausted = true;
                if (this.__on.exhausted.__hasCallback) {
                    this.__on.exhausted.dispatch(this);
                }
            }
        }
        else {
            if (this._particleCount === 0) {
                this._active = false;
                this.completed = true;
                if (this.__on.completed.__hasCallback) {
                    this.__on.completed.dispatch(this);
                }
                this.__fx.__removeActiveEffect(this);
                if (this.autoRecycleOnComplete) {
                    this.recycle();
                }
            }
        }
        var list = this._particles;
        var node = list.first;
        var next;
        while (node) {
            next = node.next;
            node.update(dt);
            node = next;
        }
        return this;
    };
    ParticleEmitter.prototype.spawn = function () {
        if (this._paused) {
            return;
        }
        var s = this.settings;
        var fx = this.__fx;
        var n = Rnd_1.Rnd.integer(s.spawnCountMin, s.spawnCountMax) * fx.particleFac;
        this.core.prepare(n);
        while (--n > -1) {
            if (this._particleCount >= s.maxParticles || fx.particleCount >= fx.maxParticles) {
                return;
            }
            var ps = s.particleSettings;
            var p = fx.__getParticle();
            var component = void 0;
            switch (ps.componentType) {
                case 0:
                    p.componentId = ps.componentId;
                    component = fx.__getSprite(p.componentId);
                    break;
                case 1:
                    p.componentId = ps.componentId;
                    component = fx.__getMovieClip(p.componentId);
                    if (ps.componentParams) {
                        component.loop = ps.componentParams.loop;
                        component.animationSpeed = Rnd_1.Rnd.float(ps.componentParams.animationSpeedMin || 1, ps.componentParams.animationSpeedMax || 1);
                    }
                    component.gotoAndPlay(0);
                    break;
            }
            component.anchor.set(ps.componentParams.anchorX, ps.componentParams.anchorY);
            p.component = component;
            this.core.emit(p);
            p.init(this, ps, this._scaleMod);
            this._particles.add(p);
            this._particleCount++;
            fx.particleCount++;
        }
        this.core.step();
        this._nextSpawnTime = Rnd_1.Rnd.float(s.spawnFrequencyMin, s.spawnFrequencyMax);
        return this;
    };
    ParticleEmitter.prototype.recycle = function () {
        if (this.__recycled) {
            return;
        }
        if (this.__parent) {
            this.__parent.__removeChildEmitter(this);
            this.__parent = null;
        }
        this.recycleParticles();
        this.settings = null;
        this._active = false;
        this._paused = false;
        this.completed = true;
        this._x = this._y = this._rotation = 0;
        if (this._hasChildEmitters) {
            this.stopChildEmitters(true);
            this._childEmitters.length = 0;
            this._hasChildEmitters = false;
        }
        this.__fx.emitterCount--;
        this.__fx.__recycleEmitter(this);
        this.__recycled = true;
        this.__adoptRotation = false;
        this.core = null;
        this.target = null;
        this.name = null;
        var on = this.__on;
        if (on.completed.__hasCallback) {
            on.completed.removeAll();
        }
        if (on.started.__hasCallback) {
            on.started.removeAll();
        }
        if (on.exhausted.__hasCallback) {
            on.exhausted.removeAll();
        }
        if (on.particleBounced.__hasCallback) {
            on.particleBounced.removeAll();
        }
        if (on.particleDied.__hasCallback) {
            on.particleDied.removeAll();
        }
        if (on.particleSpawned.__hasCallback) {
            on.particleSpawned.removeAll();
        }
        if (on.particleUpdated.__hasCallback) {
            on.particleUpdated.removeAll();
        }
    };
    ParticleEmitter.prototype.dispose = function () {
        var list = this._particles;
        var node = list.first;
        var next;
        while (node) {
            next = node.next;
            node.recycle();
            node = next;
        }
        list.clear();
        this.__recycled = true;
        if (this._hasChildEmitters) {
            this.stopChildEmitters(false);
        }
        this.__fx.particleCount -= this._particleCount;
        this._particles = null;
        this.componentId = null;
        this.settings = null;
        this._active = false;
        this.completed = true;
        this._childEmitters = null;
        if (this.core) {
            this.core.dispose();
        }
        this.core = null;
        this.target = null;
        this.name = null;
        var on = this.__on;
        on.completed.removeAll();
        on.started.removeAll();
        on.exhausted.removeAll();
        on.particleBounced.removeAll();
        on.particleDied.removeAll();
        on.particleSpawned.removeAll();
        on.particleUpdated.removeAll();
        this.__parent = null;
        this.__fx.__removeActiveEffect(this);
        this.__fx = null;
    };
    Object.defineProperty(ParticleEmitter.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (value) {
            this._x = this.core.x = value;
            if (!this._xPosIntialized) {
                this.core.__x = value;
                this._xPosIntialized = true;
            }
            if (this._hasChildEmitters) {
                var childs = this._childEmitters;
                var l = childs.length;
                while (--l > -1) {
                    childs[l].x = value;
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ParticleEmitter.prototype, "y", {
        get: function () {
            return this._y;
        },
        set: function (value) {
            this._y = this.core.y = value;
            if (!this._yPosIntialized) {
                this.core.__y = value;
                this._yPosIntialized = true;
            }
            if (this._hasChildEmitters) {
                var childs = this._childEmitters;
                var l = childs.length;
                while (--l > -1) {
                    childs[l].y = value;
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ParticleEmitter.prototype, "rotation", {
        get: function () {
            return this._rotation;
        },
        set: function (value) {
            this._rotation = this.core.rotation = value;
            if (this._hasChildEmitters) {
                var childs = this._childEmitters;
                var l = childs.length;
                while (--l > -1) {
                    var child = childs[l];
                    if (child.__adoptRotation) {
                        child.rotation = child.settings.rotation + value;
                    }
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ParticleEmitter.prototype, "paused", {
        get: function () {
            return this._paused;
        },
        set: function (value) {
            this._paused = value;
            if (this._hasChildEmitters) {
                var childs = this._childEmitters;
                var l = childs.length;
                while (--l > -1) {
                    childs[l].paused = value;
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ParticleEmitter.prototype, "on", {
        get: function () {
            return this.__on;
        },
        enumerable: true,
        configurable: true
    });
    ParticleEmitter.prototype.recycleParticles = function () {
        var node = this._particles.first;
        var next;
        while (node) {
            next = node.next;
            node.recycle();
            node = next;
        }
        this._particles.clear();
        this.__fx.particleCount -= this._particleCount;
    };
    ParticleEmitter.prototype.stopChildEmitters = function (waitForParticles) {
        var childs = this._childEmitters;
        var l = childs.length;
        while (--l > -1) {
            childs[l].stop(waitForParticles);
        }
    };
    ParticleEmitter.prototype.__removeParticle = function (particle) {
        if (particle.useSpawns && this._spawnOnComplete) {
            this.__subSpawn(particle, this.settings.particleSettings.spawn.onComplete);
        }
        this._particles.remove(particle);
        this._particleCount--;
        this.__fx.particleCount--;
        particle.recycle();
    };
    ParticleEmitter.prototype.__removeChildEmitter = function (emitter) {
        var index = this._childEmitters.indexOf(emitter);
        if (index > -1) {
            this._childEmitters.splice(index, 1);
            if (this._childEmitters.length === 0) {
                this._hasChildEmitters = false;
            }
        }
    };
    ParticleEmitter.prototype.__subSpawn = function (particle, list) {
        var fx = this.__fx;
        if (list) {
            var l = list.length;
            while (--l > -1) {
                var def = list[l];
                var component = void 0;
                var container = void 0;
                switch (def.type) {
                    case 0:
                        component = fx.getParticleEmitterById(def.id);
                        container = fx.__containers[component.settings.containerId] || this.container;
                        component.init(container, true, (def.scale || 1) * this._scaleMod);
                        if (def.adoptRotation) {
                            component.rotation = particle.component.rotation + component.settings.rotation;
                            component.__adoptRotation = true;
                        }
                        else {
                            component.rotation = component.settings.rotation;
                        }
                        break;
                    case 1:
                        component = fx.getEffectSequenceById(def.id);
                        container = fx.__containers[component.settings.containerId] || this.container;
                        component.init(container, 0, true, (def.scale || 1) * this._scaleMod);
                        if (def.adoptRotation) {
                            component.rotation = particle.component.rotation;
                        }
                        break;
                }
                component.x = particle.component.x;
                component.y = particle.component.y;
            }
        }
    };
    ParticleEmitter.prototype.__applySettings = function (value) {
        var fx = this.__fx;
        this.__recycled = this._xPosIntialized = this._yPosIntialized = false;
        this.settings = value;
        this.core = fx.__getEmitterCore(value.core.type, this);
        this.core.init(this);
        this.rotation = value.rotation;
        this.name = value.name;
        this._spawnOnComplete = value.particleSettings.spawn.onComplete.length > 0;
        this._childEmitters.length = 0;
    };
    ParticleEmitter.prototype.__setCore = function (type) {
        this.core = this.__fx.__getEmitterCore(type, this);
        this.core.init(this);
        this.core.__scaleMod = this._scaleMod;
        this._xPosIntialized = this._yPosIntialized = false;
    };
    return ParticleEmitter;
}(BaseEffect_1.BaseEffect));
exports.ParticleEmitter = ParticleEmitter;
//# sourceMappingURL=ParticleEmitter.js.map

/***/ }),
/* 45 */
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
/* 46 */
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
/* 47 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
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
/* 48 */
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
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(76);

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(47)(module)))

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(25);

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

module.exports = get;


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(3),
    isSymbol = __webpack_require__(52);

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

module.exports = isKey;


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(15),
    isObjectLike = __webpack_require__(6);

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var mapCacheClear = __webpack_require__(155),
    mapCacheDelete = __webpack_require__(167),
    mapCacheGet = __webpack_require__(169),
    mapCacheHas = __webpack_require__(170),
    mapCacheSet = __webpack_require__(171);

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
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(12),
    root = __webpack_require__(4);

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var flatten = __webpack_require__(174),
    overRest = __webpack_require__(78),
    setToString = __webpack_require__(79);

/**
 * A specialized version of `baseRest` which flattens the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @returns {Function} Returns the new function.
 */
function flatRest(func) {
  return setToString(overRest(func, undefined, flatten), func + '');
}

module.exports = flatRest;


/***/ }),
/* 56 */
/***/ (function(module, exports) {

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

module.exports = arrayPush;


/***/ }),
/* 57 */
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
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(40),
    assignMergeValue = __webpack_require__(87),
    baseFor = __webpack_require__(59),
    baseMergeDeep = __webpack_require__(186),
    isObject = __webpack_require__(1),
    keysIn = __webpack_require__(0),
    safeGet = __webpack_require__(95);

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
    stack || (stack = new Stack);
    if (isObject(srcValue)) {
      baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
    }
    else {
      var newValue = customizer
        ? customizer(safeGet(object, key), srcValue, (key + ''), object, source, stack)
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
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

var createBaseFor = __webpack_require__(88);

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
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

var Uint8Array = __webpack_require__(91);

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
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

var arrayFilter = __webpack_require__(106),
    stubArray = __webpack_require__(107);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

module.exports = getSymbols;


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

var baseHasIn = __webpack_require__(213),
    hasPath = __webpack_require__(110);

/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */
function hasIn(object, path) {
  return object != null && hasPath(object, path, baseHasIn);
}

module.exports = hasIn;


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__(105),
    getSymbolsIn = __webpack_require__(118),
    keysIn = __webpack_require__(0);

/**
 * Creates an array of own and inherited enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeysIn(object) {
  return baseGetAllKeys(object, keysIn, getSymbolsIn);
}

module.exports = getAllKeysIn;


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var FX_1 = __webpack_require__(65);
exports.FX = FX_1.FX;
var BaseEffect_1 = __webpack_require__(43);
exports.BaseEffect = BaseEffect_1.BaseEffect;
var EffectSequence_1 = __webpack_require__(69);
exports.EffectSequence = EffectSequence_1.EffectSequence;
var MovieClip_1 = __webpack_require__(70);
exports.MovieClip = MovieClip_1.MovieClip;
var Particle_1 = __webpack_require__(71);
exports.Particle = Particle_1.Particle;
var ParticleEmitter_1 = __webpack_require__(44);
exports.ParticleEmitter = ParticleEmitter_1.ParticleEmitter;
var Sprite_1 = __webpack_require__(74);
exports.Sprite = Sprite_1.Sprite;
var BaseEmitterCore_1 = __webpack_require__(28);
exports.BaseEmitterCore = BaseEmitterCore_1.BaseEmitterCore;
var BoxEmitterCore_1 = __webpack_require__(66);
exports.BoxEmitterCore = BoxEmitterCore_1.BoxEmitterCore;
var CircleEmitterCore_1 = __webpack_require__(67);
exports.CircleEmitterCore = CircleEmitterCore_1.CircleEmitterCore;
var RingEmitterCore_1 = __webpack_require__(68);
exports.RingEmitterCore = RingEmitterCore_1.RingEmitterCore;
var Color_1 = __webpack_require__(72);
exports.Color = Color_1.Color;
var Easing_1 = __webpack_require__(73);
exports.Easing = Easing_1.Easing;
var LinkedList_1 = __webpack_require__(11);
exports.LinkedList = LinkedList_1.LinkedList;
var Rnd_1 = __webpack_require__(13);
exports.Rnd = Rnd_1.Rnd;
var FXSignal_1 = __webpack_require__(29);
exports.FXSignal = FXSignal_1.FXSignal;
//# sourceMappingURL=index.js.map

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var pixi_js_1 = __webpack_require__(10);
var BoxEmitterCore_1 = __webpack_require__(66);
var CircleEmitterCore_1 = __webpack_require__(67);
var RingEmitterCore_1 = __webpack_require__(68);
var EffectSequence_1 = __webpack_require__(69);
var MovieClip_1 = __webpack_require__(70);
var Particle_1 = __webpack_require__(71);
var ParticleEmitter_1 = __webpack_require__(44);
var Sanitizer_1 = __webpack_require__(128);
var Sprite_1 = __webpack_require__(74);
var LinkedList_1 = __webpack_require__(11);
var ComponentType;
(function (ComponentType) {
    ComponentType[ComponentType["Sprite"] = 0] = "Sprite";
    ComponentType[ComponentType["MovieClip"] = 1] = "MovieClip";
})(ComponentType || (ComponentType = {}));
var EffectSequenceComponentType;
(function (EffectSequenceComponentType) {
    EffectSequenceComponentType[EffectSequenceComponentType["Sprite"] = 0] = "Sprite";
    EffectSequenceComponentType[EffectSequenceComponentType["MovieClip"] = 1] = "MovieClip";
    EffectSequenceComponentType[EffectSequenceComponentType["Emitter"] = 2] = "Emitter";
    EffectSequenceComponentType[EffectSequenceComponentType["Trigger"] = 3] = "Trigger";
})(EffectSequenceComponentType || (EffectSequenceComponentType = {}));
var FX = (function () {
    function FX() {
        this.useBlendModes = true;
        this.particleCount = 0;
        this.emitterCount = 0;
        this.effectSequenceCount = 0;
        this.maxParticles = 5000;
        this.particleFac = 1;
        this._active = false;
        this._effects = new LinkedList_1.LinkedList();
        this.__containers = {};
        this.clearCache();
        this.start();
    }
    FX.prototype.start = function () {
        this._active = true;
        this._timeElapsed = Date.now();
    };
    FX.prototype.pause = function () {
        this._active = false;
    };
    FX.prototype.update = function (delta) {
        if (!this.active) {
            return;
        }
        var t = Date.now();
        var dt = (t - this._timeElapsed) * 0.001;
        if (delta !== undefined) {
            dt *= delta;
        }
        var list = this._effects;
        var node = list.first;
        var next;
        while (node) {
            next = node.next;
            node.update(dt);
            node = next;
        }
        this._timeElapsed = t;
    };
    FX.prototype.clearCache = function () {
        this._cache = {
            particles: [],
            mcs: [],
            sprites: [],
            effectSequences: [],
            emitters: [],
            cores: {},
        };
        this._settingsCache = {
            mcs: {},
            sprites: {},
            emitters: {},
            effectSequences: {},
        };
        this._nameMaps = {
            emitters: {},
            effectSequences: {},
        };
    };
    FX.prototype.setFloorY = function (value) {
        var s = this._settingsCache.emitters;
        for (var _i = 0, _a = Object.keys(s); _i < _a.length; _i++) {
            var n = _a[_i];
            s[n].floorY = value;
        }
    };
    FX.prototype.dispose = function () {
        var list = this._effects;
        var node = list.first;
        while (node) {
            node.dispose();
            node = node.next;
        }
        list.clear();
        this.clearCache();
    };
    FX.prototype.loadBundleFiles = function (bundleSettingsUrl, spritesheetUrl, spritesheetFilter, additionalAssets) {
        var _this = this;
        if (spritesheetFilter === void 0) { spritesheetFilter = ""; }
        return new Promise(function (resolve, reject) {
            var loader = new pixi_js_1.Loader();
            loader.onError.add(function (err) {
                reject(err);
            });
            loader
                .add("rfx_spritesheet", spritesheetUrl)
                .add("rfx_bundleSettings", bundleSettingsUrl);
            if (additionalAssets) {
                for (var _i = 0, additionalAssets_1 = additionalAssets; _i < additionalAssets_1.length; _i++) {
                    var arg = additionalAssets_1[_i];
                    if (arg.hasOwnProperty("name") && arg.hasOwnProperty("url")) {
                        loader.add(arg.name, arg.url);
                    }
                    else {
                        loader.add(arg);
                    }
                }
            }
            loader.load(function (l, d) {
                resolve(_this.initBundle(d.rfx_bundleSettings.data, d.rfx_spritesheet.spritesheet));
            });
        });
    };
    FX.prototype.loadBundleZip = function (zipUrl, jszipInstance, additionalAssets) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (jszipInstance == null) {
                reject("JSZip instance not provided.");
                return;
            }
            var loader = new pixi_js_1.Loader();
            loader.add("zip", zipUrl, { xhrType: pixi_js_1.LoaderResource.XHR_RESPONSE_TYPE.BLOB });
            if (additionalAssets) {
                for (var _i = 0, additionalAssets_2 = additionalAssets; _i < additionalAssets_2.length; _i++) {
                    var arg = additionalAssets_2[_i];
                    if (arg.hasOwnProperty("name") && arg.hasOwnProperty("url")) {
                        loader.add(arg.name, arg.url);
                    }
                    else {
                        loader.add(arg);
                    }
                }
            }
            loader.load(function (l, d) { return __awaiter(_this, void 0, void 0, function () {
                var spritesheetImageData, spritesheetDef, settingsDef_1, list_2, _i, list_1, entry, base64, s, def, texture, spritesheet_1, err_1;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 8, , 9]);
                            spritesheetImageData = void 0;
                            spritesheetDef = void 0;
                            return [4, jszipInstance.loadAsync(d.zip.data)];
                        case 1:
                            _a.sent();
                            list_2 = [];
                            jszipInstance.forEach(function (path, entry) {
                                list_2.push(entry);
                            });
                            _i = 0, list_1 = list_2;
                            _a.label = 2;
                        case 2:
                            if (!(_i < list_1.length)) return [3, 7];
                            entry = list_1[_i];
                            if (!(entry.name.indexOf(".png") !== -1)) return [3, 4];
                            return [4, entry.async("base64")];
                        case 3:
                            base64 = _a.sent();
                            spritesheetImageData = "data:image/png;base64," + base64;
                            return [3, 6];
                        case 4:
                            if (!(entry.name.indexOf(".json") !== -1)) return [3, 6];
                            return [4, entry.async("string")];
                        case 5:
                            s = _a.sent();
                            def = JSON.parse(s);
                            if (def.__h) {
                                if (def.__h !== FX._bundleHash) {
                                    reject("Invalid settings file.");
                                    return [2];
                                }
                                settingsDef_1 = def;
                            }
                            else if (def.frames) {
                                spritesheetDef = def;
                            }
                            _a.label = 6;
                        case 6:
                            _i++;
                            return [3, 2];
                        case 7:
                            texture = pixi_js_1.Texture.from(spritesheetImageData);
                            spritesheet_1 = new pixi_js_1.Spritesheet(texture.baseTexture, spritesheetDef);
                            spritesheet_1.parse(function () {
                                setTimeout(function () {
                                    resolve(_this.initBundle(settingsDef_1, spritesheet_1, true));
                                }, 100);
                            });
                            return [3, 9];
                        case 8:
                            err_1 = _a.sent();
                            reject(err_1.toString());
                            return [3, 9];
                        case 9: return [2];
                    }
                });
            }); });
        });
    };
    FX.prototype.initBundle = function (bundleSettings, spritesheet, clearCache) {
        if (bundleSettings.__h !== FX._bundleHash) {
            throw new Error("Invalid settings file.");
        }
        if (bundleSettings.__v !== FX.settingsVersion) {
            throw new Error("Settings version mismatch.");
        }
        Sanitizer_1.Sanitizer.sanitizeBundle(bundleSettings);
        if (clearCache) {
            this.clearCache();
        }
        for (var _i = 0, _a = bundleSettings.emitters; _i < _a.length; _i++) {
            var preset = _a[_i];
            this.addParticleEmitter(preset.id, preset);
        }
        for (var _b = 0, _c = bundleSettings.sequences; _b < _c.length; _b++) {
            var preset = _c[_b];
            this.addEffectSequence(preset.id, preset);
        }
        this.useBlendModes = bundleSettings.useBlendModes;
        this.maxParticles = bundleSettings.maxParticles;
        return this.parseSpriteSheet(spritesheet, bundleSettings.spritesheetFilter);
    };
    FX.prototype.addParticleEmitter = function (componentId, settings) {
        if (this._settingsCache.emitters[componentId]) {
            throw new Error("ComponentId '" + componentId + "' already exists.");
        }
        this._settingsCache.emitters[componentId] = settings;
        this._nameMaps.emitters[settings.name] = settings;
        return this;
    };
    FX.prototype.addEffectSequence = function (componentId, settings) {
        if (this._settingsCache.effectSequences[componentId]) {
            throw new Error("ComponentId '" + componentId + "' already exists.");
        }
        this._settingsCache.effectSequences[componentId] = settings;
        this._nameMaps.effectSequences[settings.name] = settings;
        return this;
    };
    FX.prototype.initSprite = function (componentId, settings) {
        if (this._settingsCache.sprites[componentId]) {
            throw new Error("ComponentId '" + componentId + "' already exists.");
        }
        this._settingsCache.sprites[componentId] = settings;
        return this;
    };
    FX.prototype.initMovieClip = function (componentId, settings) {
        if (this._settingsCache.mcs[componentId]) {
            throw new Error("ComponentId '" + componentId + "' already exists.");
        }
        this._settingsCache.mcs[componentId] = settings;
        return this;
    };
    FX.prototype.getMovieClips = function () {
        return this._settingsCache.mcs;
    };
    FX.prototype.getSprites = function () {
        return this._settingsCache.sprites;
    };
    FX.prototype.addContainer = function (key, container) {
        this.__containers[key] = container;
    };
    FX.prototype.getEffectSequence = function (name) {
        var settings = this._nameMaps.effectSequences[name];
        if (!settings) {
            throw new Error("Settings not defined for '" + name + "'");
        }
        return this.getEffectSequenceById(settings.id);
    };
    FX.prototype.getEffectSequenceById = function (componentId) {
        var pool = this._cache.effectSequences;
        var effectSequence;
        var settings = this._settingsCache.effectSequences[componentId];
        if (!settings) {
            throw new Error("Settings not defined for '" + componentId + "'");
        }
        if (pool.length === 0) {
            effectSequence = new EffectSequence_1.EffectSequence(componentId);
            effectSequence.__fx = this;
        }
        else {
            effectSequence = pool.pop();
        }
        effectSequence.__applySettings(settings);
        return effectSequence;
    };
    FX.prototype.getParticleEmitter = function (name, autoRecycleOnComplete, cloneSettings) {
        if (autoRecycleOnComplete === void 0) { autoRecycleOnComplete = true; }
        if (cloneSettings === void 0) { cloneSettings = false; }
        var settings = this._nameMaps.emitters[name];
        if (!settings) {
            throw new Error("Settings not defined for '" + name + "'");
        }
        return this.getParticleEmitterById(settings.id, autoRecycleOnComplete, cloneSettings);
    };
    FX.prototype.getParticleEmitterById = function (componentId, autoRecycleOnComplete, cloneSettings) {
        if (autoRecycleOnComplete === void 0) { autoRecycleOnComplete = true; }
        if (cloneSettings === void 0) { cloneSettings = false; }
        var pool = this._cache.emitters;
        var emitter;
        var settings = this._settingsCache.emitters[componentId];
        if (!settings) {
            throw new Error("Settings not defined for '" + componentId + "'");
        }
        if (pool.length === 0) {
            emitter = new ParticleEmitter_1.ParticleEmitter(componentId);
            emitter.__fx = this;
        }
        else {
            emitter = pool.pop();
        }
        if (cloneSettings) {
            settings = JSON.parse(JSON.stringify(settings));
        }
        emitter.autoRecycleOnComplete = autoRecycleOnComplete;
        emitter.__applySettings(settings);
        return emitter;
    };
    FX.prototype.stopEmitter = function (emitter, dispose) {
        if (dispose === void 0) { dispose = false; }
        if (emitter.list === this._effects) {
            this._effects.remove(emitter);
        }
        if (dispose) {
            emitter.dispose();
        }
        else {
            this.__recycleEmitter(emitter);
        }
    };
    FX.prototype.stopAllEffects = function () {
        var list = this._effects.toArray();
        for (var _i = 0, list_3 = list; _i < list_3.length; _i++) {
            var node = list_3[_i];
            node.recycle();
        }
    };
    FX.prototype.parseSpriteSheet = function (spriteSheet, filter) {
        return this.parseObject(spriteSheet.data.frames, filter);
    };
    FX.prototype.parseTextureCache = function (filter) {
        return this.parseObject(pixi_js_1.utils.TextureCache, filter);
    };
    Object.defineProperty(FX.prototype, "active", {
        get: function () {
            return this._active;
        },
        enumerable: true,
        configurable: true
    });
    FX.prototype.__addActiveEffect = function (effect) {
        this._effects.add(effect);
    };
    FX.prototype.__removeActiveEffect = function (effect) {
        this._effects.remove(effect);
    };
    FX.prototype.__getSprite = function (componentId) {
        var cache = this._cache.sprites;
        var pool = cache[componentId];
        if (!pool) {
            pool = cache[componentId] = [];
        }
        if (pool.length === 0) {
            var settings = this._settingsCache.sprites[componentId];
            if (settings == null) {
                throw new Error("Settings not defined for '" + componentId + "'");
            }
            var sprite = new Sprite_1.Sprite(componentId, settings.texture, settings.anchorX, settings.anchorY);
            sprite.__fx = this;
            return sprite;
        }
        return pool.pop();
    };
    FX.prototype.__getMovieClip = function (componentId) {
        var cache = this._cache.mcs;
        var pool = cache[componentId];
        if (!pool) {
            pool = cache[componentId] = [];
        }
        if (pool.length === 0) {
            var settings = this._settingsCache.mcs[componentId];
            if (settings == null) {
                throw new Error("Settings not defined for '" + componentId + "'");
            }
            var mc = new MovieClip_1.MovieClip(componentId, settings.textures, settings.anchorX, settings.anchorY);
            mc.__fx = this;
            return mc;
        }
        return pool.pop();
    };
    FX.prototype.__getParticle = function () {
        var cache = this._cache;
        var pool = cache.particles;
        if (pool.length === 0) {
            var particle = new Particle_1.Particle();
            particle.__fx = this;
            return particle;
        }
        return pool.pop();
    };
    FX.prototype.__getEmitterCore = function (type, emitter) {
        var cache = this._cache.cores;
        var pool = cache[type];
        if (!pool) {
            pool = cache[type] = [];
        }
        if (pool.length === 0) {
            return new FX.__emitterCores[type](type);
        }
        return pool.pop();
    };
    FX.prototype.__recycleParticle = function (particle) {
        this._cache.particles.push(particle);
    };
    FX.prototype.__recycleSprite = function (componentId, object) {
        this._cache.sprites[componentId].push(object);
    };
    FX.prototype.__recycleMovieClip = function (componentId, object) {
        this._cache.mcs[componentId].push(object);
    };
    FX.prototype.__recycleEmitter = function (emitter) {
        this._effects.remove(emitter);
        this.__recycleEmitterCore(emitter.core);
        this._cache.emitters.push(emitter);
    };
    FX.prototype.__recycleEffectSequence = function (effectSequence) {
        this._effects.remove(effectSequence);
        this._cache.effectSequences.push(effectSequence);
    };
    FX.prototype.__recycleEmitterCore = function (core) {
        this._cache.cores[core.type].push(core);
    };
    FX.prototype.parseObject = function (object, filter) {
        var frames = object;
        var mcs = {};
        var result = { sprites: [], movieClips: [] };
        for (var _i = 0, _a = Object.keys(frames); _i < _a.length; _i++) {
            var key = _a[_i];
            if (filter && key.indexOf(filter) === -1) {
                continue;
            }
            this.initSprite(key, { texture: key, anchorX: 0.5, anchorY: 0.5 });
            result.sprites.push(key);
            if (key.substr(0, 3) === "mc_") {
                var parts = key.split("_");
                var group = parts[1];
                if (mcs[group]) {
                    mcs[group].push(key);
                }
                else {
                    mcs[group] = [key];
                }
            }
        }
        for (var _b = 0, _c = Object.keys(mcs); _b < _c.length; _b++) {
            var group = _c[_b];
            var textures = mcs[group].sort();
            result.movieClips.push(group);
            this.initMovieClip(group, { textures: textures, anchorX: 0.5, anchorY: 0.5 });
        }
        return result;
    };
    FX.settingsVersion = 0;
    FX._bundleHash = "80c6df7fb0d3d898f34ce0031c037fef";
    FX.EffectSequenceComponentType = EffectSequenceComponentType;
    FX.__emitterCores = {
        circle: CircleEmitterCore_1.CircleEmitterCore,
        box: BoxEmitterCore_1.BoxEmitterCore,
        ring: RingEmitterCore_1.RingEmitterCore,
    };
    return FX;
}());
exports.FX = FX;
//# sourceMappingURL=FX.js.map

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var __1 = __webpack_require__(64);
var BaseEmitterCore_1 = __webpack_require__(28);
var BoxEmitterCore = (function (_super) {
    __extends(BoxEmitterCore, _super);
    function BoxEmitterCore() {
        return _super.call(this, BaseEmitterCore_1.BaseEmitterCore.__TYPE_BOX) || this;
    }
    BoxEmitterCore.prototype.emit = function (particle) {
        var settings = this._settings;
        var emitter = this.emitter;
        var w2 = settings.width * 0.5 * this.__scaleMod;
        var h2 = settings.height * 0.5 * this.__scaleMod;
        var angle = emitter.rotation;
        var x = __1.Rnd.float(-w2, w2);
        var y = __1.Rnd.float(-h2, h2);
        if (angle !== 0) {
            particle.component.transform.position.x = (this.__x + this._t * (this.x - this.__x)) + x * Math.cos(angle) - y * Math.sin(angle);
            particle.component.transform.position.y = (this.__y + this._t * (this.y - this.__y)) + x * Math.sin(angle) + y * Math.cos(angle);
        }
        else {
            particle.component.transform.position.x = this.__x + this._t * (this.x - this.__x) + x;
            particle.component.transform.position.y = this.__y + this._t * (this.y - this.__y) + y;
        }
        if (settings.radial) {
            angle += Math.atan2(y, x);
            particle.dx = Math.cos(angle);
            particle.dy = Math.sin(angle);
        }
        else {
            particle.dx = this._dx;
            particle.dy = this._dy;
        }
        particle.component.transform.rotation = angle;
        this._t += this._posInterpolationStep;
    };
    return BoxEmitterCore;
}(BaseEmitterCore_1.BaseEmitterCore));
exports.BoxEmitterCore = BoxEmitterCore;
//# sourceMappingURL=BoxEmitterCore.js.map

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Rnd_1 = __webpack_require__(13);
var BaseEmitterCore_1 = __webpack_require__(28);
var CircleEmitterCore = (function (_super) {
    __extends(CircleEmitterCore, _super);
    function CircleEmitterCore() {
        return _super.call(this, BaseEmitterCore_1.BaseEmitterCore.__TYPE_CIRCLE) || this;
    }
    CircleEmitterCore.prototype.emit = function (particle) {
        var settings = this._settings;
        var emitter = this.emitter;
        var angle;
        angle = settings.angle
            ? Rnd_1.Rnd.float(-settings.angle * 0.5, settings.angle * 0.5) + emitter.rotation
            : Rnd_1.Rnd.float(0, 6.28319) + emitter.rotation;
        if (settings.radius > 0) {
            var r = Rnd_1.Rnd.float(0, settings.radius) * this.__scaleMod;
            particle.component.transform.position.x = (this.__x + this._t * (this.x - this.__x)) + Math.cos(angle) * r;
            particle.component.transform.position.y = (this.__y + this._t * (this.y - this.__y)) + Math.sin(angle) * r;
        }
        else {
            particle.component.x = this.__x + this._t * (this.x - this.__x);
            particle.component.y = this.__y + this._t * (this.y - this.__y);
        }
        if (settings.radial) {
            particle.dx = Math.cos(angle);
            particle.dy = Math.sin(angle);
            particle.component.transform.rotation = angle;
        }
        else {
            particle.dx = this._dx;
            particle.dy = this._dy;
            particle.component.transform.rotation = emitter.rotation;
        }
        this._t += this._posInterpolationStep;
    };
    return CircleEmitterCore;
}(BaseEmitterCore_1.BaseEmitterCore));
exports.CircleEmitterCore = CircleEmitterCore;
//# sourceMappingURL=CircleEmitterCore.js.map

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var BaseEmitterCore_1 = __webpack_require__(28);
var Rnd_1 = __webpack_require__(13);
var RingEmitterCore = (function (_super) {
    __extends(RingEmitterCore, _super);
    function RingEmitterCore() {
        return _super.call(this, BaseEmitterCore_1.BaseEmitterCore.__TYPE_RING) || this;
    }
    RingEmitterCore.prototype.prepare = function (spawnCount) {
        _super.prototype.prepare.call(this, spawnCount);
        var angle = this._settings.angle;
        if (2 * Math.PI - angle < 0.1) {
            this._uniformStep = angle / (spawnCount);
            this._angle = angle;
        }
        else {
            this._uniformStep = angle / (spawnCount - 1);
            this._angle = -angle * 0.5;
        }
    };
    RingEmitterCore.prototype.emit = function (particle) {
        var settings = this._settings;
        var emitter = this.emitter;
        var angle;
        if (settings.uniform) {
            angle = this._angle + emitter.rotation;
            this._angle += this._uniformStep;
        }
        else {
            angle = Rnd_1.Rnd.float(-settings.angle * 0.5, settings.angle * 0.5) + emitter.rotation;
        }
        var r = settings.radius * this.__scaleMod;
        particle.component.transform.position.x = (this.__x + this._t * (this.x - this.__x)) + Math.cos(angle) * r;
        particle.component.transform.position.y = (this.__y + this._t * (this.y - this.__y)) + Math.sin(angle) * r;
        if (settings.radial) {
            particle.dx = Math.cos(angle);
            particle.dy = Math.sin(angle);
            particle.component.transform.rotation = angle;
        }
        else {
            particle.dx = this._dx;
            particle.dy = this._dy;
            particle.component.transform.rotation = emitter.rotation;
        }
        this._t += this._posInterpolationStep;
    };
    return RingEmitterCore;
}(BaseEmitterCore_1.BaseEmitterCore));
exports.RingEmitterCore = RingEmitterCore;
//# sourceMappingURL=RingEmitterCore.js.map

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var BaseEffect_1 = __webpack_require__(43);
var FX_1 = __webpack_require__(65);
var ParticleEmitter_1 = __webpack_require__(44);
var FXSignal_1 = __webpack_require__(29);
var LinkedList_1 = __webpack_require__(11);
var Rnd_1 = __webpack_require__(13);
var EffectSequence = (function (_super) {
    __extends(EffectSequence, _super);
    function EffectSequence(componentId) {
        var _this = _super.call(this, componentId) || this;
        _this._elements = new LinkedList_1.LinkedList();
        _this.__on = {
            started: new FXSignal_1.FXSignal(),
            completed: new FXSignal_1.FXSignal(),
            exhausted: new FXSignal_1.FXSignal(),
            effectSpawned: new FXSignal_1.FXSignal(),
            triggerActivated: new FXSignal_1.FXSignal(),
        };
        return _this;
    }
    EffectSequence.prototype.init = function (container, delay, autoStart, scaleMod) {
        if (delay === void 0) { delay = 0; }
        if (autoStart === void 0) { autoStart = true; }
        if (scaleMod === void 0) { scaleMod = 1; }
        this.container = container;
        this._scaleMod = scaleMod;
        this._delay = delay * 1000;
        if (autoStart) {
            this.start();
        }
        return this;
    };
    EffectSequence.prototype.start = function () {
        if (this._active) {
            return;
        }
        this._startTime = Date.now() + (this.settings.delay ? this.settings.delay * 1000 : 0) + this._delay;
        this._index = 0;
        if (this._list.length === 0) {
            this._active = false;
            if (this.__on.exhausted.__hasCallback) {
                this.__on.exhausted.dispatch(this);
            }
            if (this.__on.completed.__hasCallback) {
                this.__on.completed.dispatch(this);
            }
            this.recycle();
            return this;
        }
        this.exhausted = this.completed = false;
        this.setNextEffect();
        this.__fx.effectSequenceCount++;
        this.__fx.__addActiveEffect(this);
        if (this.__on.started.__hasCallback) {
            this.__on.started.dispatch(this);
        }
        return this;
    };
    EffectSequence.prototype.update = function (dt) {
        var t = Date.now();
        if (t < this._startTime) {
            return;
        }
        this._time += dt;
        if (!this.exhausted && t >= this._effectStartTime) {
            var fx = this.__fx;
            var def = this._nextEffectSettings;
            var effect = void 0;
            var node_1;
            var container = void 0;
            switch (def.componentType) {
                case FX_1.FX.EffectSequenceComponentType.Sprite:
                    effect = fx.__getSprite(def.componentId);
                    container = fx.__containers[def.containerId] || this.container;
                    container.addChild(effect);
                    effect.blendMode = fx.useBlendModes ? def.blendMode : 0;
                    effect.tint = def.tint;
                    effect.scale.set(Rnd_1.Rnd.float(def.scaleMin, def.scaleMax) * Rnd_1.Rnd.float(this.settings.scaleMin, this.settings.scaleMax) * this._scaleMod);
                    effect.alpha = Rnd_1.Rnd.float(def.alphaMin, def.alphaMax);
                    effect.anchor.set(def.componentParams.anchorX, def.componentParams.anchorY);
                    node_1 = new LinkedList_1.Node({ component: effect, endTime: t + (def.duration) * 1000 });
                    this._elements.add(node_1);
                    effect.x = this._x;
                    effect.y = this._y;
                    effect.rotation = this._rotation + Rnd_1.Rnd.float(def.rotationMin, def.rotationMax);
                    if (this.__on.effectSpawned.__hasCallback) {
                        this.__on.effectSpawned.dispatch(FX_1.FX.EffectSequenceComponentType.Sprite, effect);
                    }
                    break;
                case FX_1.FX.EffectSequenceComponentType.MovieClip:
                    effect = fx.__getMovieClip(def.componentId);
                    if (def.componentParams.loop) {
                        effect.animationSpeed = Rnd_1.Rnd.float(def.componentParams.animationSpeedMin || 1, def.componentParams.animationSpeedMax || 1);
                        effect.loop = def.componentParams.loop || false;
                    }
                    else {
                        var speed = def.duration;
                    }
                    effect.anchor.set(def.componentParams.anchorX, def.componentParams.anchorY);
                    effect.gotoAndPlay(0);
                    container = fx.__containers[def.containerId] || this.container;
                    container.addChild(effect);
                    effect.blendMode = fx.useBlendModes ? def.blendMode : 0;
                    effect.tint = def.tint;
                    effect.scale.set(Rnd_1.Rnd.float(def.scaleMin, def.scaleMax) * Rnd_1.Rnd.float(this.settings.scaleMin, this.settings.scaleMax) * this._scaleMod);
                    effect.alpha = Rnd_1.Rnd.float(def.alphaMin, def.alphaMax);
                    node_1 = new LinkedList_1.Node({ component: effect, endTime: t + (def.duration) * 1000 });
                    this._elements.add(node_1);
                    effect.x = this._x;
                    effect.y = this._y;
                    effect.rotation = this._rotation + Rnd_1.Rnd.float(def.rotationMin, def.rotationMax);
                    if (this.__on.effectSpawned.__hasCallback) {
                        this.__on.effectSpawned.dispatch(FX_1.FX.EffectSequenceComponentType.MovieClip, effect);
                    }
                    break;
                case FX_1.FX.EffectSequenceComponentType.Emitter:
                    effect = fx.getParticleEmitterById(def.componentId);
                    container = fx.__containers[def.containerId] || this.container;
                    effect.init(container, true, Rnd_1.Rnd.float(def.scaleMin, def.scaleMax) * Rnd_1.Rnd.float(this.settings.scaleMin, this.settings.scaleMax) * this._scaleMod);
                    node_1 = new LinkedList_1.Node({ component: effect, endTime: effect.endTime });
                    this._elements.add(node_1);
                    effect.x = this._x;
                    effect.y = this._y;
                    effect.rotation = this._rotation + effect.settings.rotation;
                    if (this.__on.effectSpawned.__hasCallback) {
                        this.__on.effectSpawned.dispatch(FX_1.FX.EffectSequenceComponentType.Emitter, effect);
                    }
                    break;
                case FX_1.FX.EffectSequenceComponentType.Trigger:
                    if (this.__on.triggerActivated.__hasCallback) {
                        this.__on.triggerActivated.dispatch(def.triggerValue);
                    }
                    break;
            }
            if (this._index === this._list.length) {
                this.exhausted = true;
                if (this.__on.exhausted.__hasCallback) {
                    this.__on.exhausted.dispatch(this);
                }
            }
            else {
                this.setNextEffect();
            }
        }
        var list = this._elements;
        var node = list.first;
        while (node) {
            node.update(dt);
            if (t > node.data.endTime) {
                var component = node.data.component;
                if (component instanceof ParticleEmitter_1.ParticleEmitter) {
                    if (component.completed) {
                        list.remove(node);
                    }
                }
                else {
                    list.remove(node);
                    component.recycle();
                }
            }
            node = node.next;
        }
        if (this.exhausted && list.length === 0) {
            this._active = false;
            this.completed = true;
            if (this.__on.completed.__hasCallback) {
                this.__on.completed.dispatch(this);
            }
            this.recycle();
        }
    };
    EffectSequence.prototype.stop = function () {
        this.recycle();
    };
    EffectSequence.prototype.recycle = function () {
        if (this.__recycled) {
            return;
        }
        var list = this._elements;
        var node = list.first;
        var next;
        while (node) {
            next = node.next;
            node.data.component.recycle();
            node = next;
        }
        var on = this.__on;
        if (on.completed.__hasCallback) {
            on.completed.removeAll();
        }
        if (on.started.__hasCallback) {
            on.started.removeAll();
        }
        if (on.exhausted.__hasCallback) {
            on.exhausted.removeAll();
        }
        if (on.effectSpawned.__hasCallback) {
            on.effectSpawned.removeAll();
        }
        if (on.triggerActivated.__hasCallback) {
            on.triggerActivated.removeAll();
        }
        list.clear();
        this.__recycled = true;
        this._x = this._y = this._rotation = 0;
        this.__fx.effectSequenceCount--;
        this.__fx.__recycleEffectSequence(this);
    };
    EffectSequence.prototype.dispose = function () {
        this._elements.clear();
        this.__fx = null;
        var on = this.__on;
        on.completed = on.started = on.exhausted = on.effectSpawned = on.triggerActivated = null;
    };
    Object.defineProperty(EffectSequence.prototype, "rotation", {
        get: function () {
            return this._rotation;
        },
        set: function (value) {
            this._rotation = value;
            var list = this._elements;
            var node = list.first;
            var next;
            while (node) {
                next = node.next;
                node.data.rotation = value;
                node = next;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EffectSequence.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (value) {
            this._x = value;
            var list = this._elements;
            var node = list.first;
            var next;
            while (node) {
                next = node.next;
                node.data.x = value;
                node = next;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EffectSequence.prototype, "y", {
        get: function () {
            return this._y;
        },
        set: function (value) {
            this._y = value;
            var list = this._elements;
            var node = list.first;
            var next;
            while (node) {
                next = node.next;
                node.data.y = value;
                node = next;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EffectSequence.prototype, "on", {
        get: function () {
            return this.__on;
        },
        enumerable: true,
        configurable: true
    });
    EffectSequence.prototype.setNextEffect = function () {
        if (this.exhausted) {
            return;
        }
        var def = this._nextEffectSettings = this._list[this._index++];
        this._effectStartTime = this._startTime + def.delay * 1000;
    };
    EffectSequence.prototype.__applySettings = function (value) {
        this.settings = value;
        this.name = value.name;
        this._list = value.effects.slice();
        this.__recycled = false;
    };
    return EffectSequence;
}(BaseEffect_1.BaseEffect));
exports.EffectSequence = EffectSequence;
//# sourceMappingURL=EffectSequence.js.map

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var pixi_js_1 = __webpack_require__(10);
var MovieClip = (function (_super) {
    __extends(MovieClip, _super);
    function MovieClip(componentId, textures, anchorX, anchorY) {
        var _this = this;
        var t = [];
        var l = textures.length;
        for (var i = 0; i < l; i++) {
            t.push(pixi_js_1.Texture.from(textures[i]));
        }
        _this = _super.call(this, t) || this;
        _this.componentId = componentId;
        _this.anchor.set(0.5, 0.5);
        _this.loop = false;
        _this.__sequenceEndTime = 0;
        return _this;
    }
    MovieClip.prototype.recycle = function () {
        this.alpha = 1;
        this.tint = 0xffffff;
        this.transform.rotation = 0;
        this.transform.scale.set(1);
        if (this.parent) {
            this.parent.removeChild(this);
        }
        this.gotoAndStop(0);
        this.__fx.__recycleMovieClip(this.componentId, this);
    };
    MovieClip.prototype.dispose = function () {
        if (this.parent) {
            this.parent.removeChild(this);
        }
        this.__fx = null;
        this.gotoAndStop(0);
        this.destroy();
    };
    return MovieClip;
}(pixi_js_1.AnimatedSprite));
exports.MovieClip = MovieClip;
//# sourceMappingURL=MovieClip.js.map

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Color_1 = __webpack_require__(72);
var Easing_1 = __webpack_require__(73);
var FXSignal_1 = __webpack_require__(29);
var LinkedList_1 = __webpack_require__(11);
var Rnd_1 = __webpack_require__(13);
var Particle = (function (_super) {
    __extends(Particle, _super);
    function Particle() {
        var _this = _super.call(this) || this;
        _this.dx = 0;
        _this.dy = 0;
        _this._childEmitters = [];
        _this._hasChildEmitters = false;
        _this._spawnOnHalfway = false;
        _this.__recycled = true;
        _this.__on = {
            died: new FXSignal_1.FXSignal(),
            bounced: new FXSignal_1.FXSignal(),
            updated: new FXSignal_1.FXSignal(),
        };
        _this._color = new Color_1.Color();
        return _this;
    }
    Particle.prototype.init = function (emitter, settings, scaleMod) {
        var component = this.component;
        var transform = component.transform;
        var fx = this.__fx;
        this.emitter = emitter;
        this.settings = settings;
        var duration = this.duration = Rnd_1.Rnd.float(settings.durationMin, settings.durationMax) * scaleMod;
        this._dt = 1 / this.duration;
        this.time = 0;
        this.__recycled = false;
        settings.addOnTop ? emitter.container.addChild(component) : emitter.container.addChildAt(component, 0);
        component.blendMode = fx.useBlendModes ? (settings.blendMode) : 0;
        this.startX = transform.position.x;
        this.startY = transform.position.y;
        this.useGravity = emitter.settings.useGravity;
        this.useScale = settings.useScale;
        this.useRotation = settings.useRotation;
        this.useAlpha = settings.useAlpha;
        this.useTint = settings.useTint;
        this.useSpawns = settings.useSpawns;
        this.useChilds = settings.useChilds;
        this.useMotion = settings.useMotion;
        if (this.useGravity) {
            this.gravity = emitter.settings.gravity;
            this.useFloor = emitter.settings.useFloor;
            this.floorY = emitter.settings.floorY;
            this.bounceFac = Rnd_1.Rnd.float(settings.bounceFacMin, settings.bounceFacMax) * scaleMod;
            this.friction = 1 - Rnd_1.Rnd.float(settings.frictionMin, settings.frictionMax) * scaleMod;
            this._spawnOnBounce = settings.spawn.onBounce.length > 0;
            this.useAlign = settings.align;
            if (settings.useMotion) {
                var speed = Rnd_1.Rnd.float(settings.moveSpeedMin, settings.moveSpeedMax);
                this.moveSpeedX = speed * this.dx * scaleMod;
                this.moveSpeedY = speed * this.dy * scaleMod;
            }
            else {
                this.moveSpeedX = this.moveSpeedY = 0;
            }
        }
        else {
            if (settings.useMotion) {
                var d = this.distance = Rnd_1.Rnd.integer(settings.distanceMin, settings.distanceMax) * 0.8 * scaleMod;
                this.deltaX = ((transform.position.x + d * this.dx) - this.startX) * 0.8;
                this.deltaY = ((transform.position.y + d * this.dy) - this.startY) * 0.8;
                this.distanceEase = Easing_1.Easing[settings.distanceEase];
                this.useAlign = false;
            }
            else {
                transform.position.x = this.startX;
                transform.position.y = this.startY;
            }
        }
        if (settings.useRotation && settings.randomStartRotation && !this.useAlign) {
            transform.rotation = Rnd_1.Rnd.float(0, 6.28319);
        }
        if (settings.useAlpha) {
            this.alphaStart = component.alpha = Rnd_1.Rnd.float(settings.alphaStartMin, settings.alphaStartMax);
            this.alphaDelta = Rnd_1.Rnd.float(settings.alphaEndMin, settings.alphaEndMax) - this.alphaStart;
            this.alphaEase = Easing_1.Easing[settings.alphaEase] || null;
            this.useFadeIn = settings.fadeIn;
            if (settings.fadeIn) {
                this.alphaDuration = duration * (1 - settings.fadeInDurationFac);
                this.fadeInDuration = duration * settings.fadeInDurationFac;
                this.fadeInEase = Easing_1.Easing[settings.fadeInEase || "easeInSine"];
            }
        }
        if (settings.useScale) {
            this.uniformScale = settings.uniformScale;
            this.useScaleIn = settings.scaleIn;
            if (settings.useScale) {
                this.uniformScale = settings.uniformScale;
                this.scaleEase = Easing_1.Easing[settings.scaleEase];
                if (settings.uniformScale) {
                    this.scaleStart = transform.scale.x = transform.scale.y = Rnd_1.Rnd.float(settings.scaleStartMin, settings.scaleStartMax) * scaleMod;
                    this.scaleDelta = (Rnd_1.Rnd.float(settings.scaleEndMin, settings.scaleEndMax) - this.scaleStart) * scaleMod;
                }
                else {
                    this.scaleXStart = transform.scale.x = Rnd_1.Rnd.float(settings.scaleXStartMin, settings.scaleXStartMax) * scaleMod;
                    this.scaleXDelta = (Rnd_1.Rnd.float(settings.scaleXEndMin, settings.scaleXEndMax) - this.scaleXStart) * scaleMod;
                    this.scaleXEase = Easing_1.Easing[settings.scaleXEase];
                    this.scaleYStart = transform.scale.y = Rnd_1.Rnd.float(settings.scaleYStartMin, settings.scaleYStartMax) * scaleMod;
                    this.scaleYDelta = (Rnd_1.Rnd.float(settings.scaleYEndMin, settings.scaleYEndMax) - this.scaleYStart) * scaleMod;
                    this.scaleYEase = Easing_1.Easing[settings.scaleYEase];
                }
                if (settings.scaleIn) {
                    this.scaleDuration = duration * (1 - settings.scaleInDurationFac);
                    this.scaleInDuration = duration * settings.scaleInDurationFac;
                    this.scaleInEase = Easing_1.Easing[settings.scaleInEase || "easeInSine"];
                }
            }
            else {
                if (settings.uniformScale) {
                    transform.scale.x = settings.scaleStartMin;
                    transform.scale.y = settings.scaleStartMin;
                }
                else {
                    transform.scale.x = settings.scaleXStartMin;
                    transform.scale.y = settings.scaleYStartMin;
                }
            }
        }
        if (settings.useRotation) {
            this.rotationSpeed = Rnd_1.Rnd.float(settings.rotationSpeedMin, settings.rotationSpeedMax) * scaleMod;
            if (settings.randomRotationDirection) {
                this.rotationSpeed *= Rnd_1.Rnd.sign();
            }
        }
        if (settings.useTint) {
            this.tintEase = Easing_1.Easing[settings.tintEase];
            this._color.setRgb(settings.tintStart, settings.tintEnd);
        }
        if (settings.useChilds) {
            this._childEmitters.length = 0;
            var l = settings.childs.length;
            this._hasChildEmitters = l > 0;
            if (this._childEmitters) {
                while (--l > -1) {
                    var def = settings.childs[l];
                    var em = fx.getParticleEmitterById(def.id);
                    em.init(emitter.container, true, (def.scale || 1) * (scaleMod || 1));
                    if (def.adoptRotation) {
                        em.rotation = transform.rotation;
                        em.__adoptRotation = true;
                    }
                    em.__parent = this;
                    this._childEmitters.push(em);
                }
            }
        }
        if (settings.useSpawns) {
            if (settings.spawn.onStart.length > 0) {
                emitter.__subSpawn(this, settings.spawn.onStart);
            }
            this._spawnOnHalfway = settings.spawn.onHalfway.length > 0;
        }
        if (emitter.__on.particleSpawned.__hasCallback) {
            emitter.__on.particleSpawned.dispatch(this);
        }
        return this;
    };
    Particle.prototype.update = function (dt) {
        var t = this.time += dt;
        var duration = this.duration;
        if (t >= duration) {
            this.emitter.__removeParticle(this);
            return;
        }
        var component = this.component;
        var transform = component.transform;
        var mod = t * dt;
        if (this.useGravity) {
            var dt2 = dt / 0.0166666;
            transform.position.x += this.moveSpeedX * dt2;
            transform.position.y += this.moveSpeedY * dt2;
            this.moveSpeedY += this.gravity * dt2;
            if (this.useAlign) {
                transform.rotation = Math.atan2(this.moveSpeedY, this.moveSpeedX);
            }
            if (this.useFloor && this.floorY > 0) {
                if (transform.position.y > this.floorY) {
                    transform.position.y = this.floorY;
                    this.moveSpeedY *= -this.bounceFac;
                    this.moveSpeedX *= this.friction;
                    if (this.useSpawns && this._spawnOnBounce) {
                        this.emitter.__subSpawn(this, this.settings.spawn.onBounce);
                    }
                    var emitter = this.emitter;
                    if (emitter.__on.particleBounced.__hasCallback) {
                        emitter.__on.particleBounced.dispatch(this);
                    }
                    if (this.__on.bounced.__hasCallback) {
                        this.__on.bounced.dispatch(this);
                    }
                    if (this.settings.stopOnBounce) {
                        emitter.__removeParticle(this);
                    }
                    return;
                }
            }
        }
        else if (this.useMotion) {
            if (this.distanceEase) {
                transform.position.x = this.distanceEase(t, this.startX, this.deltaX, duration);
                transform.position.y = this.distanceEase(t, this.startY, this.deltaY, duration);
            }
            else {
                transform.position.x = this.deltaX * mod + this.startX;
                transform.position.y = this.deltaY * mod + this.startY;
            }
        }
        if (this.useAlpha) {
            component.alpha = this.useFadeIn
                ? t < this.fadeInDuration
                    ? this.fadeInEase(t, 0, this.alphaStart, this.fadeInDuration)
                    : this.alphaEase(t - this.fadeInDuration, this.alphaStart, this.alphaDelta, this.alphaDuration)
                : this.alphaEase
                    ? this.alphaEase(t, this.alphaStart, this.alphaDelta, duration)
                    : (this.alphaDelta) * mod + this.alphaStart;
        }
        if (this.useRotation) {
            transform.rotation += this.rotationSpeed;
        }
        if (this.useScale) {
            if (this.uniformScale) {
                if (this.useScaleIn) {
                    transform.scale.x = t < this.scaleInDuration
                        ? (transform.scale.y = this.scaleInEase(t, 0, this.scaleStart, this.scaleInDuration))
                        : (transform.scale.y = this.scaleEase(t - this.scaleInDuration, this.scaleStart, this.scaleDelta, this.scaleDuration));
                }
                else {
                    if (this.scaleEase) {
                        transform.scale.x = this.scaleEase(t, this.scaleStart, this.scaleDelta, duration);
                        transform.scale.y = this.scaleEase(t, this.scaleStart, this.scaleDelta, duration);
                    }
                    else {
                        transform.scale.x = transform.scale.y = this.scaleDelta * mod + this.scaleStart;
                    }
                }
            }
            else {
                if (this.useScaleIn) {
                    if (t < this.scaleInDuration) {
                        transform.scale.x = this.scaleInEase(t, 0, this.scaleXStart, this.scaleInDuration);
                        transform.scale.y = this.scaleInEase(t, 0, this.scaleYStart, this.scaleInDuration);
                    }
                    else {
                        transform.scale.x = this.scaleEase(t - this.scaleInDuration, this.scaleXStart, this.scaleXDelta, this.scaleDuration);
                        transform.scale.y = this.scaleEase(t - this.scaleInDuration, this.scaleYStart, this.scaleYDelta, this.scaleDuration);
                    }
                }
                else {
                    transform.scale.x = this.scaleXEase
                        ? this.scaleXEase(t, this.scaleXStart, this.scaleXDelta, duration)
                        : this.scaleXDelta * mod + this.scaleXStart;
                    transform.scale.y = this.scaleYEase
                        ? this.scaleYEase(t, this.scaleYStart, this.scaleYDelta, duration)
                        : this.scaleYDelta * mod + this.scaleYStart;
                }
            }
        }
        if (this.useTint) {
            component.tint = this._color.tween(this.tintEase, t, duration);
        }
        if (this._spawnOnHalfway) {
            if (t >= 0.5) {
                this._spawnOnHalfway = false;
                this.emitter.__subSpawn(this, this.settings.spawn.onHalfway);
            }
        }
        if (this.useChilds && this._hasChildEmitters) {
            var childs = this._childEmitters;
            var l = childs.length;
            while (--l > -1) {
                var child = childs[l];
                if (child.__recycled) {
                    continue;
                }
                child.x = component.position.x;
                child.y = transform.position.y;
                if (child.__adoptRotation) {
                    child.rotation = transform.rotation;
                }
            }
        }
        if (this.emitter.__on.particleUpdated.__hasCallback) {
            this.emitter.__on.particleUpdated.dispatch(this);
        }
        if (this.__on.updated.__hasCallback) {
            this.__on.updated.dispatch(this);
        }
    };
    Particle.prototype.stop = function () {
        this.time = this.duration;
    };
    Particle.prototype.recycle = function () {
        if (this.emitter.__on.particleDied.__hasCallback) {
            this.emitter.__on.particleDied.dispatch(this);
        }
        var on = this.__on;
        if (on.died.__hasCallback) {
            on.died.dispatch(this);
            on.died.removeAll();
        }
        if (on.updated.__hasCallback) {
            on.updated.removeAll();
        }
        if (on.bounced.__hasCallback) {
            on.bounced.removeAll();
        }
        if (this._hasChildEmitters) {
            var childs = this._childEmitters;
            var l = childs.length;
            while (--l > -1) {
                childs[l].stop(true);
            }
            this._childEmitters.length = 0;
            this._hasChildEmitters = false;
        }
        this.component.recycle();
        this.__fx.__recycleParticle(this);
        this.dx = this.dy = this.deltaX = this.deltaY = 0;
        this.component = null;
        this.emitter = null;
        this.settings = null;
        this.__recycled = true;
    };
    Particle.prototype.dispose = function () {
        this.recycle();
        this.__fx = null;
    };
    Object.defineProperty(Particle.prototype, "x", {
        get: function () {
            return this.component.x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Particle.prototype, "y", {
        get: function () {
            return this.component.y;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Particle.prototype, "on", {
        get: function () {
            return this.__on;
        },
        enumerable: true,
        configurable: true
    });
    Particle.prototype.__removeChildEmitter = function (emitter) {
        var index = this._childEmitters.indexOf(emitter);
        if (index > -1) {
            this._childEmitters.splice(index, 1);
            if (this._childEmitters.length === 0) {
                this._hasChildEmitters = false;
            }
        }
    };
    return Particle;
}(LinkedList_1.Node));
exports.Particle = Particle;
//# sourceMappingURL=Particle.js.map

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Color = (function () {
    function Color() {
    }
    Color.prototype.setRgb = function (startRgb, targetRgb) {
        this.startRgb = this.rgb = startRgb;
        this.r = this.sR = (startRgb >> 16) & 0xff;
        this.g = this.sG = (startRgb >> 8) & 0xff;
        this.b = this.sB = startRgb & 0xff;
        this.targetRgb = targetRgb;
        this.dR = ((targetRgb >> 16) & 0xff) - this.r;
        this.dG = ((targetRgb >> 8) & 0xff) - this.g;
        this.dB = (targetRgb & 0xff) - this.b;
    };
    Color.prototype.tween = function (ease, time, duration) {
        if (ease) {
            this.r = ease(time, this.sR, this.dR, duration);
            this.g = ease(time, this.sG, this.dG, duration);
            this.b = ease(time, this.sB, this.dB, duration);
        }
        else {
            time /= duration;
            this.r = this.dR * time + this.sR;
            this.g = this.dG * time + this.sG;
            this.b = this.dB * time + this.sB;
        }
        this.rgb = (this.r << 16) | (this.g << 8) | this.b;
        return this.rgb;
    };
    return Color;
}());
exports.Color = Color;
//# sourceMappingURL=Color.js.map

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Easing = (function () {
    function Easing() {
    }
    Easing.linear = function (t, b, c, d) {
        return c * t / d + b;
    };
    Easing.easeInQuad = function (t, b, c, d) {
        return c * (t /= d) * t + b;
    };
    Easing.easeOutQuad = function (t, b, c, d) {
        return -c * (t /= d) * (t - 2) + b;
    };
    Easing.easeInOutQuad = function (t, b, c, d) {
        if ((t /= d / 2) < 1) {
            return c / 2 * t * t + b;
        }
        else {
            return -c / 2 * ((--t) * (t - 2) - 1) + b;
        }
    };
    Easing.easeInCubic = function (t, b, c, d) {
        return c * (t /= d) * t * t + b;
    };
    Easing.easeOutCubic = function (t, b, c, d) {
        return c * ((t = t / d - 1) * t * t + 1) + b;
    };
    Easing.easeInOutCubic = function (t, b, c, d) {
        if ((t /= d / 2) < 1) {
            return c / 2 * t * t * t + b;
        }
        else {
            return c / 2 * ((t -= 2) * t * t + 2) + b;
        }
    };
    Easing.easeInQuart = function (t, b, c, d) {
        return c * (t /= d) * t * t * t + b;
    };
    Easing.easeOutQuart = function (t, b, c, d) {
        return -c * ((t = t / d - 1) * t * t * t - 1) + b;
    };
    Easing.easeInOutQuart = function (t, b, c, d) {
        if ((t /= d / 2) < 1) {
            return c / 2 * t * t * t * t + b;
        }
        else {
            return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
        }
    };
    Easing.easeInQuint = function (t, b, c, d) {
        return c * (t /= d) * t * t * t * t + b;
    };
    Easing.easeOutQuint = function (t, b, c, d) {
        return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
    };
    Easing.easeInOutQuint = function (t, b, c, d) {
        if ((t /= d / 2) < 1) {
            return c / 2 * t * t * t * t * t + b;
        }
        else {
            return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
        }
    };
    Easing.easeInSine = function (t, b, c, d) {
        return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
    };
    Easing.easeOutSine = function (t, b, c, d) {
        return c * Math.sin(t / d * (Math.PI / 2)) + b;
    };
    Easing.easeInOutSine = function (t, b, c, d) {
        return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
    };
    Easing.easeInExpo = function (t, b, c, d) {
        if (t === 0) {
            return b;
        }
        else {
            return c * Math.pow(2, 10 * (t / d - 1)) + b;
        }
    };
    Easing.easeOutExpo = function (t, b, c, d) {
        if (t === d) {
            return b + c;
        }
        else {
            return c * (-Math.pow(2, -10 * t / d) + 1) + b;
        }
    };
    Easing.easeInOutExpo = function (t, b, c, d) {
        if (t === 0) {
            return b;
        }
        if (t === d) {
            return b + c;
        }
        if ((t /= d / 2) < 1) {
            return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
        }
        else {
            return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
        }
    };
    Easing.easeInCirc = function (t, b, c, d) {
        return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
    };
    Easing.easeOutCirc = function (t, b, c, d) {
        return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
    };
    Easing.easeInOutCirc = function (t, b, c, d) {
        if ((t /= d / 2) < 1) {
            return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
        }
        else {
            return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
        }
    };
    Easing.easeInElastic = function (t, b, c, d) {
        var a = c;
        var p = 0;
        var s = 1.70158;
        if (t === 0) {
            return b;
        }
        else if ((t /= d) === 1) {
            return b + c;
        }
        if (!p) {
            p = d * .3;
        }
        if (a < Math.abs(c)) {
            a = c;
            s = p / 4;
        }
        else {
            s = p / (2 * Math.PI) * Math.asin(c / a);
        }
        return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
    };
    Easing.easeOutElastic = function (t, b, c, d) {
        var a = c;
        var p = 0;
        var s = 1.70158;
        if (t === 0) {
            return b;
        }
        else if ((t /= d) === 1) {
            return b + c;
        }
        if (!p) {
            p = d * .3;
        }
        if (a < Math.abs(c)) {
            a = c;
            s = p / 4;
        }
        else {
            s = p / (2 * Math.PI) * Math.asin(c / a);
        }
        return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
    };
    Easing.easeInOutElastic = function (t, b, c, d) {
        var a = c;
        var p = 0;
        var s = 1.70158;
        if (t === 0) {
            return b;
        }
        else if ((t /= d / 2) === 2) {
            return b + c;
        }
        if (!p) {
            p = d * (.3 * 1.5);
        }
        if (a < Math.abs(c)) {
            a = c;
            s = p / 4;
        }
        else {
            s = p / (2 * Math.PI) * Math.asin(c / a);
        }
        if (t < 1) {
            return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
        }
        else {
            return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b;
        }
    };
    Easing.easeInBack = function (t, b, c, d, s) {
        if (s === void 0) {
            s = 1.70158;
        }
        return c * (t /= d) * t * ((s + 1) * t - s) + b;
    };
    Easing.easeOutBack = function (t, b, c, d, s) {
        if (s === void 0) {
            s = 1.70158;
        }
        return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
    };
    Easing.easeInOutBack = function (t, b, c, d, s) {
        if (s === void 0) {
            s = 1.70158;
        }
        if ((t /= d / 2) < 1) {
            return c / 2 * (t * t * (((s *= 1.525) + 1) * t - s)) + b;
        }
        else {
            return c / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + b;
        }
    };
    Easing.easeInBounce = function (t, b, c, d) {
        var v;
        v = Easing.easeOutBounce(d - t, 0, c, d);
        return c - v + b;
    };
    Easing.easeOutBounce = function (t, b, c, d) {
        if ((t /= d) < 1 / 2.75) {
            return c * (7.5625 * t * t) + b;
        }
        else if (t < 2 / 2.75) {
            return c * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + b;
        }
        else if (t < 2.5 / 2.75) {
            return c * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + b;
        }
        else {
            return c * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + b;
        }
    };
    Easing.easeInOutBounce = function (t, b, c, d) {
        var v;
        if (t < d / 2) {
            v = Easing.easeInBounce(t * 2, 0, c, d);
            return v * .5 + b;
        }
        else {
            v = Easing.easeOutBounce(t * 2 - d, 0, c, d);
            return v * .5 + c * .5 + b;
        }
    };
    return Easing;
}());
exports.Easing = Easing;
//# sourceMappingURL=Easing.js.map

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var pixi_js_1 = __webpack_require__(10);
var Sprite = (function (_super) {
    __extends(Sprite, _super);
    function Sprite(componentId, texture, anchorX, anchorY) {
        var _this = _super.call(this, pixi_js_1.Texture.from(texture)) || this;
        _this.componentId = componentId;
        _this.anchor.set(anchorX || 0.5, anchorY || 0.5);
        _this.__sequenceEndTime = null;
        return _this;
    }
    Sprite.prototype.recycle = function () {
        this.tint = 0xffffff;
        this.alpha = 1;
        this.transform.rotation = 0;
        this.transform.scale.set(1);
        if (this.parent) {
            this.parent.removeChild(this);
        }
        this.__fx.__recycleSprite(this.componentId, this);
    };
    Sprite.prototype.dispose = function () {
        this.__fx = null;
        this.recycle();
        this.destroy();
    };
    return Sprite;
}(pixi_js_1.Sprite));
exports.Sprite = Sprite;
//# sourceMappingURL=Sprite.js.map

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(12);

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

module.exports = defineProperty;


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(133)))

/***/ }),
/* 77 */
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
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

var apply = __webpack_require__(45);

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
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

var baseSetToString = __webpack_require__(139),
    shortOut = __webpack_require__(140);

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
/* 80 */
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
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(17),
    isArrayLike = __webpack_require__(23),
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
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

var baseTimes = __webpack_require__(141),
    isArguments = __webpack_require__(34),
    isArray = __webpack_require__(3),
    isBuffer = __webpack_require__(24),
    isIndex = __webpack_require__(32),
    isTypedArray = __webpack_require__(35);

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
/* 83 */
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
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(5),
    createAssigner = __webpack_require__(18),
    keysIn = __webpack_require__(0);

/**
 * This method is like `_.assign` except that it iterates over own and
 * inherited source properties.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @alias extend
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @see _.assign
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * function Bar() {
 *   this.c = 3;
 * }
 *
 * Foo.prototype.b = 2;
 * Bar.prototype.d = 4;
 *
 * _.assignIn({ 'a': 0 }, new Foo, new Bar);
 * // => { 'a': 1, 'b': 2, 'c': 3, 'd': 4 }
 */
var assignIn = createAssigner(function(object, source) {
  copyObject(source, keysIn(source), object);
});

module.exports = assignIn;


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(5),
    createAssigner = __webpack_require__(18),
    keysIn = __webpack_require__(0);

/**
 * This method is like `_.assignIn` except that it accepts `customizer`
 * which is invoked to produce the assigned values. If `customizer` returns
 * `undefined`, assignment is handled by the method instead. The `customizer`
 * is invoked with five arguments: (objValue, srcValue, key, object, source).
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @alias extendWith
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} sources The source objects.
 * @param {Function} [customizer] The function to customize assigned values.
 * @returns {Object} Returns `object`.
 * @see _.assignWith
 * @example
 *
 * function customizer(objValue, srcValue) {
 *   return _.isUndefined(objValue) ? srcValue : objValue;
 * }
 *
 * var defaults = _.partialRight(_.assignInWith, customizer);
 *
 * defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
 * // => { 'a': 1, 'b': 2 }
 */
var assignInWith = createAssigner(function(object, source, srcIndex, customizer) {
  copyObject(source, keysIn(source), object, customizer);
});

module.exports = assignInWith;


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(5),
    keys = __webpack_require__(2);

/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign(object, source) {
  return object && copyObject(source, keys(source), object);
}

module.exports = baseAssign;


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(21),
    eq = __webpack_require__(17);

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
/* 88 */
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
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(4);

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(47)(module)))

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(60);

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
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(4);

/** Built-in value references. */
var Uint8Array = root.Uint8Array;

module.exports = Uint8Array;


/***/ }),
/* 92 */
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
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

var baseCreate = __webpack_require__(57),
    getPrototype = __webpack_require__(41),
    isPrototype = __webpack_require__(33);

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
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(15),
    getPrototype = __webpack_require__(41),
    isObjectLike = __webpack_require__(6);

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
/* 95 */
/***/ (function(module, exports) {

/**
 * Gets the value at `key`, unless `key` is "__proto__" or "constructor".
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function safeGet(object, key) {
  if (key === 'constructor' && typeof object[key] === 'function') {
    return;
  }

  if (key == '__proto__') {
    return;
  }

  return object[key];
}

module.exports = safeGet;


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

var baseMerge = __webpack_require__(58),
    createAssigner = __webpack_require__(18);

/**
 * This method is like `_.merge` except that it accepts `customizer` which
 * is invoked to produce the merged values of the destination and source
 * properties. If `customizer` returns `undefined`, merging is handled by the
 * method instead. The `customizer` is invoked with six arguments:
 * (objValue, srcValue, key, object, source, stack).
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} sources The source objects.
 * @param {Function} customizer The function to customize assigned values.
 * @returns {Object} Returns `object`.
 * @example
 *
 * function customizer(objValue, srcValue) {
 *   if (_.isArray(objValue)) {
 *     return objValue.concat(srcValue);
 *   }
 * }
 *
 * var object = { 'a': [1], 'b': [2] };
 * var other = { 'a': [3], 'b': [4] };
 *
 * _.mergeWith(object, other, customizer);
 * // => { 'a': [1, 3], 'b': [2, 4] }
 */
var mergeWith = createAssigner(function(object, source, srcIndex, customizer) {
  baseMerge(object, source, srcIndex, customizer);
});

module.exports = mergeWith;


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

var createToPairs = __webpack_require__(98),
    keys = __webpack_require__(2);

/**
 * Creates an array of own enumerable string keyed-value pairs for `object`
 * which can be consumed by `_.fromPairs`. If `object` is a map or set, its
 * entries are returned.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @alias entries
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the key-value pairs.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.toPairs(new Foo);
 * // => [['a', 1], ['b', 2]] (iteration order is not guaranteed)
 */
var toPairs = createToPairs(keys);

module.exports = toPairs;


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

var baseToPairs = __webpack_require__(190),
    getTag = __webpack_require__(27),
    mapToArray = __webpack_require__(99),
    setToPairs = __webpack_require__(195);

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    setTag = '[object Set]';

/**
 * Creates a `_.toPairs` or `_.toPairsIn` function.
 *
 * @private
 * @param {Function} keysFunc The function to get the keys of a given object.
 * @returns {Function} Returns the new pairs function.
 */
function createToPairs(keysFunc) {
  return function(object) {
    var tag = getTag(object);
    if (tag == mapTag) {
      return mapToArray(object);
    }
    if (tag == setTag) {
      return setToPairs(object);
    }
    return baseToPairs(object, keysFunc(object));
  };
}

module.exports = createToPairs;


/***/ }),
/* 99 */
/***/ (function(module, exports) {

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

module.exports = mapToArray;


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

var createToPairs = __webpack_require__(98),
    keysIn = __webpack_require__(0);

/**
 * Creates an array of own and inherited enumerable string keyed-value pairs
 * for `object` which can be consumed by `_.fromPairs`. If `object` is a map
 * or set, its entries are returned.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @alias entriesIn
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the key-value pairs.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.toPairsIn(new Foo);
 * // => [['a', 1], ['b', 2], ['c', 3]] (iteration order is not guaranteed)
 */
var toPairsIn = createToPairs(keysIn);

module.exports = toPairsIn;


/***/ }),
/* 101 */
/***/ (function(module, exports) {

/**
 * The base implementation of methods like `_.findKey` and `_.findLastKey`,
 * without support for iteratee shorthands, which iterates over `collection`
 * using `eachFunc`.
 *
 * @private
 * @param {Array|Object} collection The collection to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {Function} eachFunc The function to iterate over `collection`.
 * @returns {*} Returns the found element or its key, else `undefined`.
 */
function baseFindKey(collection, predicate, eachFunc) {
  var result;
  eachFunc(collection, function(value, key, collection) {
    if (predicate(value, key, collection)) {
      result = key;
      return false;
    }
  });
  return result;
}

module.exports = baseFindKey;


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqualDeep = __webpack_require__(202),
    isObjectLike = __webpack_require__(6);

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

module.exports = baseIsEqual;


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

var SetCache = __webpack_require__(203),
    arraySome = __webpack_require__(206),
    cacheHas = __webpack_require__(207);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(array);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function(othValue, othIndex) {
            if (!cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

module.exports = equalArrays;


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__(105),
    getSymbols = __webpack_require__(61),
    keys = __webpack_require__(2);

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

module.exports = getAllKeys;


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(56),
    isArray = __webpack_require__(3);

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

module.exports = baseGetAllKeys;


/***/ }),
/* 106 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

module.exports = arrayFilter;


/***/ }),
/* 107 */
/***/ (function(module, exports) {

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

module.exports = stubArray;


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(1);

/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */
function isStrictComparable(value) {
  return value === value && !isObject(value);
}

module.exports = isStrictComparable;


/***/ }),
/* 109 */
/***/ (function(module, exports) {

/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function matchesStrictComparable(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue &&
      (srcValue !== undefined || (key in Object(object)));
  };
}

module.exports = matchesStrictComparable;


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(7),
    isArguments = __webpack_require__(34),
    isArray = __webpack_require__(3),
    isIndex = __webpack_require__(32),
    isLength = __webpack_require__(46),
    toKey = __webpack_require__(8);

/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath(object, path, hasFunc) {
  path = castPath(path, object);

  var index = -1,
      length = path.length,
      result = false;

  while (++index < length) {
    var key = toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength(length) && isIndex(key, length) &&
    (isArray(object) || isArguments(object));
}

module.exports = hasPath;


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

var baseForRight = __webpack_require__(112),
    keys = __webpack_require__(2);

/**
 * The base implementation of `_.forOwnRight` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwnRight(object, iteratee) {
  return object && baseForRight(object, iteratee, keys);
}

module.exports = baseForOwnRight;


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

var createBaseFor = __webpack_require__(88);

/**
 * This function is like `baseFor` except that it iterates over properties
 * in the opposite order.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseForRight = createBaseFor(true);

module.exports = baseForRight;


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

var arrayFilter = __webpack_require__(106),
    isFunction = __webpack_require__(14);

/**
 * The base implementation of `_.functions` which creates an array of
 * `object` function property names filtered from `props`.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Array} props The property names to filter.
 * @returns {Array} Returns the function names.
 */
function baseFunctions(object, props) {
  return arrayFilter(props, function(key) {
    return isFunction(object[key]);
  });
}

module.exports = baseFunctions;


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

var baseInverter = __webpack_require__(227);

/**
 * Creates a function like `_.invertBy`.
 *
 * @private
 * @param {Function} setter The function to set accumulator values.
 * @param {Function} toIteratee The function to resolve iteratees.
 * @returns {Function} Returns the new inverter function.
 */
function createInverter(setter, toIteratee) {
  return function(object, iteratee) {
    return baseInverter(object, setter, toIteratee(iteratee), {});
  };
}

module.exports = createInverter;


/***/ }),
/* 115 */
/***/ (function(module, exports) {

/**
 * Gets the last element of `array`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to query.
 * @returns {*} Returns the last element of `array`.
 * @example
 *
 * _.last([1, 2, 3]);
 * // => 3
 */
function last(array) {
  var length = array == null ? 0 : array.length;
  return length ? array[length - 1] : undefined;
}

module.exports = last;


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(25),
    baseSlice = __webpack_require__(231);

/**
 * Gets the parent value at `path` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} path The path to get the parent value of.
 * @returns {*} Returns the parent value.
 */
function parent(object, path) {
  return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1));
}

module.exports = parent;


/***/ }),
/* 117 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

module.exports = arrayEach;


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(56),
    getPrototype = __webpack_require__(41),
    getSymbols = __webpack_require__(61),
    stubArray = __webpack_require__(107);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own and inherited enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
  var result = [];
  while (object) {
    arrayPush(result, getSymbols(object));
    object = getPrototype(object);
  }
  return result;
};

module.exports = getSymbolsIn;


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(7),
    last = __webpack_require__(115),
    parent = __webpack_require__(116),
    toKey = __webpack_require__(8);

/**
 * The base implementation of `_.unset`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The property path to unset.
 * @returns {boolean} Returns `true` if the property is deleted, else `false`.
 */
function baseUnset(object, path) {
  path = castPath(path, object);
  object = parent(object, path);
  return object == null || delete object[toKey(last(path))];
}

module.exports = baseUnset;


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

var arrayMap = __webpack_require__(26),
    baseIteratee = __webpack_require__(9),
    basePickBy = __webpack_require__(121),
    getAllKeysIn = __webpack_require__(63);

/**
 * Creates an object composed of the `object` properties `predicate` returns
 * truthy for. The predicate is invoked with two arguments: (value, key).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The source object.
 * @param {Function} [predicate=_.identity] The function invoked per property.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.pickBy(object, _.isNumber);
 * // => { 'a': 1, 'c': 3 }
 */
function pickBy(object, predicate) {
  if (object == null) {
    return {};
  }
  var props = arrayMap(getAllKeysIn(object), function(prop) {
    return [prop];
  });
  predicate = baseIteratee(predicate);
  return basePickBy(object, props, function(value, path) {
    return predicate(value, path[0]);
  });
}

module.exports = pickBy;


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(25),
    baseSet = __webpack_require__(42),
    castPath = __webpack_require__(7);

/**
 * The base implementation of  `_.pickBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The source object.
 * @param {string[]} paths The property paths to pick.
 * @param {Function} predicate The function invoked per property.
 * @returns {Object} Returns the new object.
 */
function basePickBy(object, paths, predicate) {
  var index = -1,
      length = paths.length,
      result = {};

  while (++index < length) {
    var path = paths[index],
        value = baseGet(object, path);

    if (predicate(value, path)) {
      baseSet(result, castPath(path, object), value);
    }
  }
  return result;
}

module.exports = basePickBy;


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(25),
    baseSet = __webpack_require__(42);

/**
 * The base implementation of `_.update`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to update.
 * @param {Function} updater The function to produce the updated value.
 * @param {Function} [customizer] The function to customize path creation.
 * @returns {Object} Returns `object`.
 */
function baseUpdate(object, path, updater, customizer) {
  return baseSet(object, path, updater(baseGet(object, path)), customizer);
}

module.exports = baseUpdate;


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

var arrayMap = __webpack_require__(26);

/**
 * The base implementation of `_.values` and `_.valuesIn` which creates an
 * array of `object` property values corresponding to the property names
 * of `props`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} props The property names to get values for.
 * @returns {Object} Returns the array of property values.
 */
function baseValues(object, props) {
  return arrayMap(props, function(key) {
    return object[key];
  });
}

module.exports = baseValues;


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(125);


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Game_1 = __importDefault(__webpack_require__(126));
document.addEventListener('DOMContentLoaded', function () {
    //Game starts from here
    var game = new Game_1.default().load();
}, false);


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var pixi_js_1 = __webpack_require__(10);
var Stage_1 = __importDefault(__webpack_require__(127));
var BACKGROUND_COLOR = 0x64b0ff;
var Game = /** @class */ (function () {
    /**
     * Game Constructor
     * @returns {Game}
     */
    function Game() {
        this.spritesheet = './assets/spritesheetcollection.json';
        this.loader = PIXI.Loader.shared;
        this.renderer = pixi_js_1.autoDetectRenderer({
            width: window.innerWidth,
            height: window.innerHeight,
            backgroundColor: BACKGROUND_COLOR,
            antialias: true
        });
        return this;
    }
    Game.prototype.load = function () {
        var _this = this;
        this.loader
            .add('fx_settings', './assets/default-bundle.json')
            .add('fx_spritesheet', './assets/revoltfx-spritesheet.json')
            .add(this.spritesheet)
            .load(function (loader, resources) {
            document.body.appendChild(_this.renderer.view);
            _this.timer = 0;
            _this.stage = new Stage_1.default({
                spritesheet: _this.spritesheet
            });
            _this.resizeWindow();
            _this.initFX(resources);
            _this.bindEvents();
            _this.update();
        });
    };
    Game.prototype.initFX = function (resources) {
        this.stage.fx.initBundle(resources.fx_settings.data, resources.fx_spritesheet);
    };
    Game.prototype.bindEvents = function () {
        window.addEventListener('resize', this.resizeWindow.bind(this));
    };
    Game.prototype.resizeWindow = function () {
        this.renderer.resize(window.innerWidth, window.innerHeight);
    };
    Game.prototype.update = function () {
        this.renderer.render(this.stage);
        if (this.stage.ticker.started) {
            this.stage.setFPSText('FPS: ' + Math.floor(this.stage.ticker.FPS));
            this.timer += this.stage.ticker.elapsedMS;
            this.stage.animate();
            this.stage.tickTask2Timer();
            if (this.timer >= 1000) {
                this.timer = 0;
                this.stage.addSpriteToReversedArray();
            }
        }
        requestAnimationFrame(this.update.bind(this));
    };
    return Game;
}());
exports.default = Game;


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var pixi_js_1 = __webpack_require__(10);
var lib_1 = __webpack_require__(64);
var Hud_1 = __importDefault(__webpack_require__(129));
var Card_1 = __importDefault(__webpack_require__(263));
var MAX_X = window.innerWidth;
var MAX_Y = window.innerHeight;
var HUD_POSITIONS = {
    RIGHT_TOP_CORNER: new pixi_js_1.Point(MAX_X - 125, 20),
    RIGHT_BOTTOM_CORNER: new pixi_js_1.Point(MAX_X - 10, MAX_Y - 20),
    CENTER: new pixi_js_1.Point(MAX_X * 0.50, MAX_Y * 0.50),
    CENTER_TOP: new pixi_js_1.Point(MAX_X * 0.50 - 200, 10),
    TASK1_BUTTON: new pixi_js_1.Point(MAX_X * 0.50 - 125, MAX_Y * 0.35),
    TASK2_BUTTON: new pixi_js_1.Point(MAX_X * 0.50 - 125, MAX_Y * 0.50),
    TASK3_BUTTON: new pixi_js_1.Point(MAX_X * 0.50 - 125, MAX_Y * 0.65),
    LEFT_TOP_CORNER: new pixi_js_1.Point(MAX_X * 0.01, 20),
    LEFT_BOTTOM_CORNER: new pixi_js_1.Point(10, MAX_Y * 0.95)
};
var Stage = /** @class */ (function (_super) {
    __extends(Stage, _super);
    /**
     * Stage Constructor
     * Container for the game
     * @param opts
     * @param opts.spritesheet - The path to the spritesheet file
     */
    function Stage(opts) {
        var _this = _super.call(this) || this;
        _this.spritesheet = opts.spritesheet;
        _this.hud = new Hud_1.default();
        _this.fx = new lib_1.FX();
        _this.ticker = PIXI.Ticker.shared;
        _this.ticker.start();
        _this.ticker.add(function (delta) {
            _this.fx.update();
        });
        _this.loader = PIXI.Loader.shared;
        _this.refreshStage = _this.refreshStage.bind(_this);
        _this.addBackToMenuButton = _this.addBackToMenuButton.bind(_this);
        _this.onBackToMenuButton = _this.onBackToMenuButton.bind(_this);
        _this.addTaskButtons = _this.addTaskButtons.bind(_this);
        _this.onTask1ButtonDown = _this.onTask1ButtonDown.bind(_this);
        _this.onTask2ButtonDown = _this.onTask2ButtonDown.bind(_this);
        _this.onTask3ButtonDown = _this.onTask3ButtonDown.bind(_this);
        _this.removeAllTaskButtons = _this.removeAllTaskButtons.bind(_this);
        _this.startTask1 = _this.startTask1.bind(_this);
        _this.stopTask1 = _this.stopTask1.bind(_this);
        _this.startTask2 = _this.startTask2.bind(_this);
        _this.stopTask2 = _this.stopTask2.bind(_this);
        _this.startTask3 = _this.startTask3.bind(_this);
        _this.stopTask3 = _this.stopTask3.bind(_this);
        _this.addSpriteToReversedArray = _this.addSpriteToReversedArray.bind(_this);
        _this.animate = _this.animate.bind(_this);
        _this.tickTask2Timer = _this.tickTask2Timer.bind(_this);
        _this._initStage();
        return _this;
    }
    /**
     * _initStage
     * Private method that adds all of the elements to the scene
     * @private
     */
    Stage.prototype._initStage = function () {
        this.addChild(this.hud);
        this.selectedTask = -1;
        this.hud.addText('welcome', {
            text: 'Pixi.js Typescript Tasks',
            textStyle: {
                fontFamily: 'Arial',
                fontSize: '18px',
                align: 'center',
                fill: 'white'
            },
            position: HUD_POSITIONS.CENTER_TOP,
            anchor: {
                x: -0.5,
                y: 0
            }
        });
        this.addFPSText();
        this.addTaskButtons();
    };
    Stage.prototype.refreshStage = function () {
        this.hud.removeChildren(0);
        this.removeChildren(0);
        this._initStage();
    };
    Stage.prototype.addFPSText = function () {
        this.hud.addText('fps', {
            textStyle: {
                fontFamily: 'Arial',
                fontSize: '32px',
                align: 'left',
                fill: 'white'
            },
            position: HUD_POSITIONS.LEFT_TOP_CORNER,
            anchor: {
                x: 0,
                y: 0
            }
        });
    };
    Stage.prototype.setFPSText = function (val) {
        if (this.hud.fpsTextBox)
            this.hud.fpsTextBox.text = val;
    };
    Stage.prototype.addBackToMenuButton = function () {
        this.hud.addButtonContainer('returnBack', {
            spriteName: 'dieRed6.png',
            spritesheet: this.spritesheet,
            position: HUD_POSITIONS.RIGHT_TOP_CORNER,
            text: 'Back to Menu',
            anchor: {
                x: 0.5,
                y: 0
            },
            textStyle: {
                fontFamily: 'Arial',
                fontSize: '25px',
                align: 'left',
                fill: 'white'
            },
            textMargin: 0,
            textAllignment: -1
        }, this.onBackToMenuButton);
    };
    Stage.prototype.onBackToMenuButton = function () {
        switch (this.selectedTask) {
            case 1:
                this.stopTask1();
                break;
            case 2:
                this.stopTask2();
                break;
            case 2:
                this.stopTask3();
                break;
            default:
                break;
        }
        this.refreshStage();
    };
    Stage.prototype.addTaskButtons = function () {
        this.hud.addButtonContainer('task1', {
            spriteName: 'dieWhite1.png',
            spritesheet: this.spritesheet,
            position: HUD_POSITIONS.TASK1_BUTTON,
            text: 'Task 1',
            anchor: {
                x: 0.5,
                y: 0.5
            },
            textStyle: {
                fontFamily: 'Arial',
                fontSize: '25px',
                align: 'left',
                fill: 'black'
            }
        }, this.onTask1ButtonDown);
        this.hud.addButtonContainer('task2', {
            spriteName: 'dieWhite2.png',
            spritesheet: this.spritesheet,
            position: HUD_POSITIONS.TASK2_BUTTON,
            text: 'Task 2',
            anchor: {
                x: 0.5,
                y: 0.5
            },
            textStyle: {
                fontFamily: 'Arial',
                fontSize: '25px',
                align: 'left',
                fill: 'black'
            }
        }, this.onTask2ButtonDown);
        this.hud.addButtonContainer('task3', {
            spriteName: 'dieWhite3.png',
            spritesheet: this.spritesheet,
            position: HUD_POSITIONS.TASK3_BUTTON,
            text: 'Task 3',
            anchor: {
                x: 0.5,
                y: 0.5
            },
            textStyle: {
                fontFamily: 'Arial',
                fontSize: '25px',
                align: 'left',
                fill: 'black'
            }
        }, this.onTask3ButtonDown);
    };
    Stage.prototype.onTask1ButtonDown = function () {
        this.removeAllTaskButtons();
        this.addBackToMenuButton();
        this.startTask1();
    };
    Stage.prototype.onTask2ButtonDown = function () {
        this.removeAllTaskButtons();
        this.addBackToMenuButton();
        this.startTask2();
    };
    Stage.prototype.onTask3ButtonDown = function () {
        this.removeAllTaskButtons();
        this.addBackToMenuButton();
        this.startTask3();
    };
    Stage.prototype.removeAllTaskButtons = function () {
        this.hud.removeChildren(0);
        this.hud.removeChildren(0);
        this.hud.removeChildren(0);
    };
    Stage.prototype.startTask1 = function () {
        this.selectedTask = 1;
        this.sprites = [];
        this.reversedSprites = [];
        this.spritePositions = [];
        this.cardCollection = [];
        var spritePadding = 0;
        //create 144 sprites and store in sprites array
        for (var i = 0; i < 144; i++) {
            //there aren't 144 different images, return back to starting positions in every 53 icons
            var index = (i > 52 ? i - 53 : i);
            index = (index > 52 ? index - 53 : index);
            var sprite = new PIXI.Sprite(this.loader.resources[this.spritesheet].textures['card' + index + '.png']);
            sprite.position.set(150, 50 + spritePadding);
            sprite.anchor.set(0.5, 0);
            spritePadding += 5; // add some padding
            this.sprites.push(sprite);
            this.spritePositions.push(sprite.position);
            this.addChild(sprite);
        }
        this.spritePositions.reverse(); //reverse all positions because reversed array will use this positions
    };
    Stage.prototype.addSpriteToReversedArray = function () {
        if (this.sprites) {
            if (this.sprites.length > 0) {
                var lastSprite = this.sprites[this.sprites.length - 1];
                //store last sprite from first sprite array in Card object
                //the card object includes startPosition and expectedPosition for move animation with move duration
                var card = new Card_1.default();
                card.sprite = lastSprite;
                card.startPosition = lastSprite.position;
                card.expectedPosition = new pixi_js_1.Point(MAX_X, this.spritePositions[this.reversedSprites.length].y);
                card.moveDuration = 2 * 1000;
                this.cardCollection.push(card);
                this.sprites.pop();
                this.reversedSprites.push(lastSprite);
                this.addChild(lastSprite);
            }
        }
    };
    Stage.prototype.animate = function () {
        if (this.cardCollection) {
            for (var _i = 0, _a = this.cardCollection; _i < _a.length; _i++) {
                var card = _a[_i];
                card.move(this.ticker.elapsedMS);
            }
        }
    };
    Stage.prototype.stopTask1 = function () {
        this.selectedTask = -1;
        this.sprites = [];
        this.reversedSprites = [];
        this.spritePositions = [];
        this.cardCollection = [];
    };
    Stage.prototype.startTask2 = function () {
        this.selectedTask = 2;
        this.randomContainerTimer = 0;
        this.randomContainerDuration = (Math.random() + 1) * 1000;
        if (this.hud.randomContainer)
            this.hud.randomContainer.removeChildren(0);
        this.hud.addRandomContainer("random", {
            spritesheet: this.spritesheet,
            position: HUD_POSITIONS.CENTER
        });
    };
    Stage.prototype.tickTask2Timer = function () {
        if (this.randomContainerDuration > 0) {
            this.randomContainerTimer += this.ticker.elapsedMS;
            if (this.randomContainerTimer >= this.randomContainerDuration) {
                this.startTask2();
            }
        }
    };
    Stage.prototype.stopTask2 = function () {
        this.selectedTask = -1;
        this.randomContainerTimer = 0;
        this.randomContainerDuration = 0;
        this.hud.randomContainer.removeChildren(0);
    };
    Stage.prototype.startTask3 = function () {
        var content = new PIXI.Container();
        content.x = window.innerWidth * 0.5;
        content.y = window.innerHeight * 0.5;
        this.addChild(content);
        var graphics = new PIXI.Graphics();
        graphics.lineStyle(2, 0x64b0ff, 1);
        graphics.beginFill(0x383838, 1);
        graphics.drawRect(-1 * MAX_X * 0.35, -1 * MAX_Y * 0.4, MAX_X * 0.7, MAX_Y * 0.8);
        content.addChild(graphics);
        //add fire-arc fx from RevoltFX library
        //changed variables in assets/defult-bundle.json using the editor at https://editor.revoltfx.electronauts.net/
        var emitter = this.fx.getParticleEmitter('fire-arc', true, true);
        emitter.settings.autoRotation = false;
        emitter.init(content);
    };
    Stage.prototype.stopTask3 = function () {
        this.selectedTask = -1;
    };
    return Stage;
}(pixi_js_1.Container));
exports.default = Stage;


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Sanitizer = (function () {
    function Sanitizer() {
    }
    Sanitizer.sanitizeBundle = function (bundle) {
        for (var _i = 0, _a = bundle.emitters; _i < _a.length; _i++) {
            var emitter = _a[_i];
            var structure = Sanitizer._presetStructure.emitter;
            Sanitizer.parse(emitter, structure, Sanitizer._presetStructure.emitterSpawn);
        }
        for (var _b = 0, _c = bundle.sequences; _b < _c.length; _b++) {
            var sequence = _c[_b];
            var structure = Sanitizer._presetStructure.sequence;
            Sanitizer.parse(sequence, structure, Sanitizer._presetStructure.sequenceEffect);
        }
    };
    Sanitizer.parse = function (bundleObject, structureObject, spawnStructureObject) {
        for (var _i = 0, _a = Object.keys(structureObject); _i < _a.length; _i++) {
            var propName = _a[_i];
            if (bundleObject[propName] == null) {
                bundleObject[propName] = structureObject[propName];
            }
            else {
                var bundleProp = bundleObject[propName];
                if (typeof bundleProp !== "object") {
                    continue;
                }
                var structureProp = structureObject[propName];
                if (!bundleProp.hasOwnProperty("length")) {
                    Sanitizer.parse(bundleProp, structureProp, spawnStructureObject);
                }
                else {
                    for (var _b = 0, bundleProp_1 = bundleProp; _b < bundleProp_1.length; _b++) {
                        var spawn = bundleProp_1[_b];
                        for (var _c = 0, _d = Object.keys(spawnStructureObject); _c < _d.length; _c++) {
                            var spawnPropName = _d[_c];
                            if (spawn[spawnPropName] == null) {
                                spawn[spawnPropName] = spawnStructureObject[spawnPropName];
                            }
                        }
                    }
                }
            }
        }
    };
    Sanitizer._presetStructure = {
        sequence: {
            id: 0,
            name: "",
            type: 1,
            delay: 0,
            scaleMin: 1,
            scaleMax: 1,
            effects: [],
        },
        sequenceEffect: {
            id: 0,
            componentId: null,
            componentType: 0,
            delay: 0,
            componentParams: {
                animationSpeedMin: 1,
                animationSpeedMax: 1,
                anchorX: 0.5,
                anchorY: 0.5,
                loop: false,
            },
            scaleMin: 1,
            scaleMax: 1,
            alphaMin: 1,
            alphaMax: 1,
            rotationMin: 0,
            rotationMax: 0,
            blendMode: 0,
            duration: 0.1,
            tint: 0xffffff,
            containerId: "",
            triggerValue: "",
        },
        emitter: {
            id: 0,
            name: "",
            type: 0,
            core: {
                type: "circle",
                params: {
                    radius: 100,
                    radial: true,
                    angle: 6.28318530718,
                    uniform: false,
                    width: 100,
                    height: 100,
                },
            },
            spawnFrequencyMin: 0.1,
            spawnFrequencyMax: 0.1,
            maxParticles: 1000,
            spawnCountMin: 1,
            spawnCountMax: 1,
            duration: 0,
            infinite: true,
            useGravity: false,
            gravity: 0,
            useFloor: false,
            floorY: 700,
            rotation: 0,
            autoRotation: 0,
            particleSettings: {
                componentType: 0,
                componentId: "",
                componentParams: {
                    animationSpeedMin: 1,
                    animationSpeedMax: 1,
                    anchorX: 0.5,
                    anchorY: 0.5,
                    loop: false,
                },
                durationMin: 1,
                durationMax: 2,
                distanceMin: 0,
                distanceMax: 0,
                distanceEase: "linear",
                moveSpeedMin: 0,
                moveSpeedMax: 0,
                bounceFacMin: 0,
                bounceFacMax: 0,
                frictionMin: 0,
                frictionMax: 0,
                useMotion: false,
                useRotation: false,
                useAlpha: false,
                useScale: false,
                useTint: false,
                useChilds: false,
                useSpawns: false,
                stopOnBounce: false,
                align: false,
                blendMode: 1,
                addOnTop: true,
                rotationSpeedMin: 0,
                rotationSpeedMax: 0,
                randomRotationDirection: false,
                randomStartRotation: false,
                fadeIn: true,
                fadeInDurationFac: 0.1,
                fadeInEase: "linear",
                alphaStartMin: 0.7,
                alphaStartMax: 0.9,
                alphaEndMin: 0.7,
                alphaEndMax: 0.8,
                alphaEase: "linear",
                tintStart: 0xffffff,
                tintEnd: 0xffffff,
                tintEase: "linear",
                scaleIn: false,
                scaleInDurationFac: 0.2,
                scaleInEase: "linear",
                uniformScale: true,
                scaleXStartMin: 1,
                scaleXStartMax: 1,
                scaleXEndMin: 1,
                scaleXEndMax: 1,
                scaleXEase: "linear",
                scaleYStartMin: 1,
                scaleYStartMax: 1,
                scaleYEndMin: 1,
                scaleYEndMax: 1,
                scaleYEase: "linear",
                scaleStartMin: 1,
                scaleStartMax: 1,
                scaleEndMin: 1,
                scaleEndMax: 1,
                scaleEase: "linear",
                childs: [],
                spawn: {
                    onComplete: [],
                    onBounce: [],
                    onHalfway: [],
                    onStart: [],
                },
            },
            childs: [],
        },
        emitterSpawn: {
            type: 0,
            id: 0,
            scale: 1,
            adoptRotation: true,
            containerId: "",
        },
    };
    return Sanitizer;
}());
exports.Sanitizer = Sanitizer;
//# sourceMappingURL=Sanitizer.js.map

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var pixi_js_1 = __webpack_require__(10);
var object_1 = __webpack_require__(130);
var Hud = /** @class */ (function (_super) {
    __extends(Hud, _super);
    /**
     * Hud Constructor
     */
    function Hud() {
        var _this = _super.call(this) || this;
        _this.loader = PIXI.Loader.shared;
        return _this;
    }
    /**
     * addText for adding PIXI.Text object to the scene with options
     * @param name string - This name becomes accessable the PIXI.Text element on the Hud object
     * @param opts object - Object to text style, text, position, anchor point, etc of the text box
     */
    Hud.prototype.addText = function (name, opts) {
        // set defaults, and allow them to be overwritten with _extend
        var options = object_1.assign({
            text: '',
            textStyle: {
                fontFamily: 'Arial',
                fontSize: '18px',
                align: 'left',
                fill: 'white'
            },
            position: new pixi_js_1.Point(0, 0),
            anchor: {
                x: 0.5,
                y: 0.5
            }
        }, opts);
        this[name + 'TextBox'] = new pixi_js_1.Text('', options.textStyle);
        var textBox = this[name + 'TextBox'];
        textBox.position.set(options.position.x, options.position.y);
        textBox.anchor.set(options.anchor.x, options.anchor.y);
        textBox.text = options.text;
        this.addChild(textBox);
    };
    /**
     * addButtonContainer for adding interactive and clickable Container which includes Sprite and Text
     * @param name string - This name becomes accessable the PIXI.Container and PIXI.Text element on the Hud object
     * @param opts object - Object to text style, text, text allignment (1=right,-1=left), text margin, position, anchor point, spritesheet etc of the text box and button
     * @param pointerdown function - Function to callback after clicking the button at pointerdown event
     */
    Hud.prototype.addButtonContainer = function (name, opts, pointerdown) {
        var options = object_1.assign({
            spriteName: '',
            text: '',
            textAllignment: 1,
            textMargin: 10,
            spritesheet: '',
            position: new pixi_js_1.Point(0, 0),
            textStyle: {
                fontFamily: 'Arial',
                fontSize: '18px',
                align: 'left',
                fill: 'white'
            },
            anchor: {
                x: 0.5,
                y: 0.5
            }
        }, opts);
        this[name + 'Container'] = new pixi_js_1.Container();
        var container = this[name + 'Container'];
        container.position.set(options.position.x, options.position.y);
        var button = new PIXI.Sprite(this.loader.resources[options.spritesheet].textures[options.spriteName]);
        button.position.set(button.width, 0);
        button.anchor.set(options.anchor.x, options.anchor.y);
        container.addChild(button);
        this[name + 'TextBox'] = new pixi_js_1.Text(options.text, options.textStyle);
        var textBox = this[name + 'TextBox'];
        textBox.position.set((button.width + textBox.width + options.textMargin) * options.textAllignment, 0);
        textBox.anchor.set(options.anchor.x * options.textAllignment, 0.5 * options.textAllignment);
        container.addChild(textBox);
        container.interactive = true;
        container.buttonMode = true;
        container.on('pointerdown', pointerdown);
        this.addChild(container);
    };
    /**
     * addRandomContainer for adding Mixed Text and Images in an easy way (image + text + image, image + image + image, image + image + text, etc) and a random font size
     * @param name string - This name becomes accessable the PIXI.Container and PIXI.Text element on the Hud object
     * @param opts object - Object to text style, text, text margin, position, anchor point, spritesheet etc of the text box and sprite
     */
    Hud.prototype.addRandomContainer = function (name, opts) {
        var options = object_1.assign({
            spriteName: '',
            text: '',
            textMargin: 10,
            spritesheet: '',
            position: new pixi_js_1.Point(0, 0),
            textStyle: {
                fontFamily: 'Arial',
                fontSize: '18px',
                align: 'center',
                fill: 'white'
            },
            anchor: {
                x: 0.5,
                y: 0.5
            }
        }, opts);
        //select random font size between 12px and 48px
        var randomFontSize = this.randomInt(12, 48);
        options.textStyle.fontSize = randomFontSize + "px";
        this[name + 'Container'] = new pixi_js_1.Container();
        var container = this[name + 'Container'];
        var middleElementWidth = 0;
        //select 3 elements (image + text + image, image + image + image, image + image + text, etc)
        for (var i = 0; i < 3; i++) {
            var randomElement = this.randomInt(0, 1); //select random element text or sprite for each of them
            var element = void 0;
            if (randomElement == 0) {
                //select random sprites from the spritesheet
                options.spriteName = ((this.randomInt(0, 1) == 1 ? 'dieWhite_border' : 'dieRed_border') + this.randomInt(1, 6) + '.png');
                element = new PIXI.Sprite(this.loader.resources[options.spritesheet].textures[options.spriteName]);
            }
            else {
                //select random text values from the capital city of countries array
                options.text = this.randomText();
                this[name + 'TextBox'] = new pixi_js_1.Text(options.text, options.textStyle);
                element = this[name + 'TextBox'];
            }
            middleElementWidth = i == 0 ? element.width : middleElementWidth;
            var positionX = this.getPosition(i, middleElementWidth, element.width, options.textMargin);
            element.position.set(positionX, 0);
            element.anchor.set(options.anchor.x, options.anchor.y);
            container.addChild(element);
        }
        container.position.set(options.position.x, options.position.y);
        // Remove previous element before adding a new one
        this.removeChild(this.elementSupport);
        this.elementSupport = container;
        this.addChild(container);
    };
    /**
     * getPosition for text and sprite position x calculation in grid
     * @param i number - Number for index of element in grid
     * @param width number - If element is first in grid, it will be left side of container center,
     * otherwise if element is last in grid, it will calculate as to the second element.
     * @param margin number - Margin between texts or sprites
     */
    Hud.prototype.getPosition = function (i, widthCentEl, widthEl, margin) {
        switch (i) {
            case 0:
                return 0;
            case 1:
                return -1 * ((widthCentEl + widthEl) / 2 + margin);
            case 2:
                // return (3/2*width + margin);
                return ((widthCentEl + widthEl) / 2 + margin);
            default:
                break;
        }
    };
    Hud.prototype.randomText = function () {
        var capitalCityOfCountriesArray = ["Sukhumi", "Kabul", "Episkopi Cantonment", "Tirana", "Algiers", "Pago Pago", "Andorra la Vella", "Luanda", "The Valley", "St. John's", "Buenos Aires", "Yerevan", "Oranjestad", "Georgetown", "Canberra", "Vienna", "Baku", "Nassau", "Manama", "Dhaka", "Bridgetown", "Minsk", "Brussels", "Belmopan", "Porto-Novo", "Hamilton", "Thimphu", "Sucre", "La Paz", "Sarajevo", "Gaborone", "Brasília", "Road Town", "Bandar Seri Begawan", "Sofia", "Ouagadougou", "Bujumbura", "Phnom Penh", "Yaoundé", "Ottawa", "Praia", "George Town", "Bangui", "N'Djamena", "Santiago", "Beijing", "Flying Fish Cove", "West Island", "Bogotá", "Moroni", "Avarua", "San José", "Zagreb", "Havana", "Willemstad", "Nicosia", "Prague", "Yamoussoukro", "Kinshasa", "Copenhagen", "Djibouti", "Roseau", "Santo Domingo", "Dili", "Hanga Roa", "Quito", "Cairo", "San Salvador", "Malabo", "Asmara", "Tallinn", "Addis Ababa", "Stanley", "Tórshavn", "Palikir", "Suva", "Helsinki", "Paris", "Cayenne", "Papeete", "Libreville", "Banjul", "Tbilisi", "Berlin", "Accra", "Gibraltar", "Athens", "Nuuk", "St. George's", "Hagåtña", "Guatemala City", "St. Peter Port", "Conakry", "Bissau", "Georgetown", "Port-au-Prince", "Tegucigalpa", "Budapest", "Reykjavík", "New Delhi", "Jakarta", "Tehran", "Baghdad", "Dublin", "Douglas", "Jerusalem", "Rome", "Kingston", "Tokyo", "St. Helier", "Amman", "Astana", "Nairobi", "Tarawa", "Pristina", "Kuwait City", "Bishkek", "Vientiane", "Riga", "Beirut", "Maseru", "Monrovia", "Tripoli", "Vaduz", "Vilnius", "Luxembourg", "Skopje", "Antananarivo", "Lilongwe", "Kuala Lumpur", "Malé", "Bamako", "Valletta", "Majuro", "Nouakchott", "Port Louis", "Mexico City", "Chisinau", "Monaco", "Ulaanbaatar", "Podgorica", "Plymouth", "Rabat", "Maputo", "Naypyidaw", "Stepanakert", "Windhoek", "Yaren", "Kathmandu", "Amsterdam", "Nouméa", "Wellington", "Managua", "Niamey", "Abuja", "Alofi", "Kingston", "Pyongyang", "Nicosia", "Belfast", "Saipan", "Oslo", "Muscat", "Islamabad", "Ngerulmud", "Jerusalem", "Panama City", "Port Moresby", "Asunción", "Lima", "Manila", "Adamstown", "Warsaw", "Lisbon", "San Juan", "Doha", "Taipei", "Brazzaville", "Bucharest", "Moscow", "Kigali", "Gustavia", "Jamestown", "Basseterre", "Castries", "Marigot", "St. Pierre", "Kingstown", "Apia", "San Marino", "Riyadh", "Edinburgh", "Dakar", "Belgrade", "Victoria", "Freetown", "Singapore", "Philipsburg", "Bratislava", "Ljubljana", "Honiara", "Mogadishu", "Hargeisa", "Pretoria", "Grytviken", "Seoul", "Tskhinvali", "Juba", "Madrid", "Sri Jayawardenapura Kotte", "Khartoum", "Paramaribo", "Mbabane", "Stockholm", "Bern", "Damascus", "São Tomé", "Dushanbe", "Dodoma", "Bangkok", "Lomé", "Nuku'alofa", "Tiraspol", "Port of Spain", "Edinburgh of the Seven Seas", "Tunis", "Ankara", "Ashgabat", "Cockburn Town", "Funafuti", "Kampala", "Kiev", "Abu Dhabi", "London", "Washington, D.C.", "Charlotte Amalie", "Montevideo", "Tashkent", "Port Vila", "Vatican City", "Caracas", "Hanoi", "Cardiff", "Mata-Utu", "Laayoune", "San'a", "Lusaka", "Harare"];
        var randomCapitalCityIndex = this.randomInt(0, capitalCityOfCountriesArray.length - 1);
        var beginChars = ["{", "[", "|", "<"];
        var endChars = ["}", "]", "|", ">"];
        var randomCharIndex = this.randomInt(0, beginChars.length - 1);
        return beginChars[randomCharIndex] + capitalCityOfCountriesArray[randomCapitalCityIndex] + endChars[randomCharIndex];
    };
    /**
     * randomInt - The helper function for creating random integer value includes min and max value
     * @param min number - Minimum number of randomization
     * @param max number - Maximum number of randomization
     */
    Hud.prototype.randomInt = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    return Hud;
}(pixi_js_1.Container));
exports.default = Hud;


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  'assign': __webpack_require__(131),
  'assignIn': __webpack_require__(84),
  'assignInWith': __webpack_require__(85),
  'assignWith': __webpack_require__(149),
  'at': __webpack_require__(150),
  'create': __webpack_require__(177),
  'defaults': __webpack_require__(178),
  'defaultsDeep': __webpack_require__(179),
  'entries': __webpack_require__(189),
  'entriesIn': __webpack_require__(196),
  'extend': __webpack_require__(197),
  'extendWith': __webpack_require__(198),
  'findKey': __webpack_require__(199),
  'findLastKey': __webpack_require__(217),
  'forIn': __webpack_require__(218),
  'forInRight': __webpack_require__(219),
  'forOwn': __webpack_require__(220),
  'forOwnRight': __webpack_require__(221),
  'functions': __webpack_require__(222),
  'functionsIn': __webpack_require__(223),
  'get': __webpack_require__(50),
  'has': __webpack_require__(224),
  'hasIn': __webpack_require__(62),
  'invert': __webpack_require__(226),
  'invertBy': __webpack_require__(228),
  'invoke': __webpack_require__(229),
  'keys': __webpack_require__(2),
  'keysIn': __webpack_require__(0),
  'mapKeys': __webpack_require__(232),
  'mapValues': __webpack_require__(233),
  'merge': __webpack_require__(234),
  'mergeWith': __webpack_require__(96),
  'omit': __webpack_require__(235),
  'omitBy': __webpack_require__(250),
  'pick': __webpack_require__(252),
  'pickBy': __webpack_require__(120),
  'result': __webpack_require__(254),
  'set': __webpack_require__(255),
  'setWith': __webpack_require__(256),
  'toPairs': __webpack_require__(97),
  'toPairsIn': __webpack_require__(100),
  'transform': __webpack_require__(257),
  'unset': __webpack_require__(258),
  'update': __webpack_require__(259),
  'updateWith': __webpack_require__(260),
  'values': __webpack_require__(261),
  'valuesIn': __webpack_require__(262)
};


/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

var assignValue = __webpack_require__(30),
    copyObject = __webpack_require__(5),
    createAssigner = __webpack_require__(18),
    isArrayLike = __webpack_require__(23),
    isPrototype = __webpack_require__(33),
    keys = __webpack_require__(2);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns own enumerable string keyed properties of source objects to the
 * destination object. Source objects are applied from left to right.
 * Subsequent sources overwrite property assignments of previous sources.
 *
 * **Note:** This method mutates `object` and is loosely based on
 * [`Object.assign`](https://mdn.io/Object/assign).
 *
 * @static
 * @memberOf _
 * @since 0.10.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @see _.assignIn
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * function Bar() {
 *   this.c = 3;
 * }
 *
 * Foo.prototype.b = 2;
 * Bar.prototype.d = 4;
 *
 * _.assign({ 'a': 0 }, new Foo, new Bar);
 * // => { 'a': 1, 'c': 3 }
 */
var assign = createAssigner(function(object, source) {
  if (isPrototype(source) || isArrayLike(source)) {
    copyObject(source, keys(source), object);
    return;
  }
  for (var key in source) {
    if (hasOwnProperty.call(source, key)) {
      assignValue(object, key, source[key]);
    }
  }
});

module.exports = assign;


/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(14),
    isMasked = __webpack_require__(136),
    isObject = __webpack_require__(1),
    toSource = __webpack_require__(77);

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
/* 133 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(16);

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
/* 135 */
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
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

var coreJsData = __webpack_require__(137);

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
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(4);

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),
/* 138 */
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
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

var constant = __webpack_require__(80),
    defineProperty = __webpack_require__(75),
    identity = __webpack_require__(22);

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
/* 140 */
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
/* 141 */
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
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(15),
    isObjectLike = __webpack_require__(6);

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
/* 143 */
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
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(15),
    isLength = __webpack_require__(46),
    isObjectLike = __webpack_require__(6);

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
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

var isPrototype = __webpack_require__(33),
    nativeKeys = __webpack_require__(146);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeys;


/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(83);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(1),
    isPrototype = __webpack_require__(33),
    nativeKeysIn = __webpack_require__(148);

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
/* 148 */
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
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(5),
    createAssigner = __webpack_require__(18),
    keys = __webpack_require__(2);

/**
 * This method is like `_.assign` except that it accepts `customizer`
 * which is invoked to produce the assigned values. If `customizer` returns
 * `undefined`, assignment is handled by the method instead. The `customizer`
 * is invoked with five arguments: (objValue, srcValue, key, object, source).
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} sources The source objects.
 * @param {Function} [customizer] The function to customize assigned values.
 * @returns {Object} Returns `object`.
 * @see _.assignInWith
 * @example
 *
 * function customizer(objValue, srcValue) {
 *   return _.isUndefined(objValue) ? srcValue : objValue;
 * }
 *
 * var defaults = _.partialRight(_.assignWith, customizer);
 *
 * defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
 * // => { 'a': 1, 'b': 2 }
 */
var assignWith = createAssigner(function(object, source, srcIndex, customizer) {
  copyObject(source, keys(source), object, customizer);
});

module.exports = assignWith;


/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

var baseAt = __webpack_require__(151),
    flatRest = __webpack_require__(55);

/**
 * Creates an array of values corresponding to `paths` of `object`.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Object
 * @param {Object} object The object to iterate over.
 * @param {...(string|string[])} [paths] The property paths to pick.
 * @returns {Array} Returns the picked values.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
 *
 * _.at(object, ['a[0].b.c', 'a[1]']);
 * // => [3, 4]
 */
var at = flatRest(baseAt);

module.exports = at;


/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

var get = __webpack_require__(50);

/**
 * The base implementation of `_.at` without support for individual paths.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {string[]} paths The property paths to pick.
 * @returns {Array} Returns the picked elements.
 */
function baseAt(object, paths) {
  var index = -1,
      length = paths.length,
      result = Array(length),
      skip = object == null;

  while (++index < length) {
    result[index] = skip ? undefined : get(object, paths[index]);
  }
  return result;
}

module.exports = baseAt;


/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

var memoizeCapped = __webpack_require__(153);

/** Used to match property names within property paths. */
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46 /* . */) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

module.exports = stringToPath;


/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

var memoize = __webpack_require__(154);

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

module.exports = memoizeCapped;


/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(53);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = MapCache;

module.exports = memoize;


/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

var Hash = __webpack_require__(156),
    ListCache = __webpack_require__(37),
    Map = __webpack_require__(54);

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
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

var hashClear = __webpack_require__(157),
    hashDelete = __webpack_require__(158),
    hashGet = __webpack_require__(159),
    hashHas = __webpack_require__(160),
    hashSet = __webpack_require__(161);

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
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(36);

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
/* 158 */
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
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(36);

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
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(36);

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
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(36);

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
/* 162 */
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
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(38);

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
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(38);

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
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(38);

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
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(38);

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
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(39);

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
/* 168 */
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
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(39);

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
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(39);

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
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(39);

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
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

var baseToString = __webpack_require__(173);

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

module.exports = toString;


/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(16),
    arrayMap = __webpack_require__(26),
    isArray = __webpack_require__(3),
    isSymbol = __webpack_require__(52);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = baseToString;


/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

var baseFlatten = __webpack_require__(175);

/**
 * Flattens `array` a single level deep.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to flatten.
 * @returns {Array} Returns the new flattened array.
 * @example
 *
 * _.flatten([1, [2, [3, [4]], 5]]);
 * // => [1, 2, [3, [4]], 5]
 */
function flatten(array) {
  var length = array == null ? 0 : array.length;
  return length ? baseFlatten(array, 1) : [];
}

module.exports = flatten;


/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(56),
    isFlattenable = __webpack_require__(176);

/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1,
      length = array.length;

  predicate || (predicate = isFlattenable);
  result || (result = []);

  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}

module.exports = baseFlatten;


/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(16),
    isArguments = __webpack_require__(34),
    isArray = __webpack_require__(3);

/** Built-in value references. */
var spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;

/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */
function isFlattenable(value) {
  return isArray(value) || isArguments(value) ||
    !!(spreadableSymbol && value && value[spreadableSymbol]);
}

module.exports = isFlattenable;


/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

var baseAssign = __webpack_require__(86),
    baseCreate = __webpack_require__(57);

/**
 * Creates an object that inherits from the `prototype` object. If a
 * `properties` object is given, its own enumerable string keyed properties
 * are assigned to the created object.
 *
 * @static
 * @memberOf _
 * @since 2.3.0
 * @category Object
 * @param {Object} prototype The object to inherit from.
 * @param {Object} [properties] The properties to assign to the object.
 * @returns {Object} Returns the new object.
 * @example
 *
 * function Shape() {
 *   this.x = 0;
 *   this.y = 0;
 * }
 *
 * function Circle() {
 *   Shape.call(this);
 * }
 *
 * Circle.prototype = _.create(Shape.prototype, {
 *   'constructor': Circle
 * });
 *
 * var circle = new Circle;
 * circle instanceof Circle;
 * // => true
 *
 * circle instanceof Shape;
 * // => true
 */
function create(prototype, properties) {
  var result = baseCreate(prototype);
  return properties == null ? result : baseAssign(result, properties);
}

module.exports = create;


/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

var baseRest = __webpack_require__(31),
    eq = __webpack_require__(17),
    isIterateeCall = __webpack_require__(81),
    keysIn = __webpack_require__(0);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns own and inherited enumerable string keyed properties of source
 * objects to the destination object for all destination properties that
 * resolve to `undefined`. Source objects are applied from left to right.
 * Once a property is set, additional values of the same property are ignored.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @see _.defaultsDeep
 * @example
 *
 * _.defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
 * // => { 'a': 1, 'b': 2 }
 */
var defaults = baseRest(function(object, sources) {
  object = Object(object);

  var index = -1;
  var length = sources.length;
  var guard = length > 2 ? sources[2] : undefined;

  if (guard && isIterateeCall(sources[0], sources[1], guard)) {
    length = 1;
  }

  while (++index < length) {
    var source = sources[index];
    var props = keysIn(source);
    var propsIndex = -1;
    var propsLength = props.length;

    while (++propsIndex < propsLength) {
      var key = props[propsIndex];
      var value = object[key];

      if (value === undefined ||
          (eq(value, objectProto[key]) && !hasOwnProperty.call(object, key))) {
        object[key] = source[key];
      }
    }
  }

  return object;
});

module.exports = defaults;


/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

var apply = __webpack_require__(45),
    baseRest = __webpack_require__(31),
    customDefaultsMerge = __webpack_require__(180),
    mergeWith = __webpack_require__(96);

/**
 * This method is like `_.defaults` except that it recursively assigns
 * default properties.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 3.10.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @see _.defaults
 * @example
 *
 * _.defaultsDeep({ 'a': { 'b': 2 } }, { 'a': { 'b': 1, 'c': 3 } });
 * // => { 'a': { 'b': 2, 'c': 3 } }
 */
var defaultsDeep = baseRest(function(args) {
  args.push(undefined, customDefaultsMerge);
  return apply(mergeWith, undefined, args);
});

module.exports = defaultsDeep;


/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

var baseMerge = __webpack_require__(58),
    isObject = __webpack_require__(1);

/**
 * Used by `_.defaultsDeep` to customize its `_.merge` use to merge source
 * objects into destination objects that are passed thru.
 *
 * @private
 * @param {*} objValue The destination value.
 * @param {*} srcValue The source value.
 * @param {string} key The key of the property to merge.
 * @param {Object} object The parent object of `objValue`.
 * @param {Object} source The parent object of `srcValue`.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 * @returns {*} Returns the value to assign.
 */
function customDefaultsMerge(objValue, srcValue, key, object, source, stack) {
  if (isObject(objValue) && isObject(srcValue)) {
    // Recursively merge objects and arrays (susceptible to call stack limits).
    stack.set(srcValue, objValue);
    baseMerge(objValue, srcValue, undefined, customDefaultsMerge, stack);
    stack['delete'](srcValue);
  }
  return objValue;
}

module.exports = customDefaultsMerge;


/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(37);

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
/* 182 */
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
/* 183 */
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
/* 184 */
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
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(37),
    Map = __webpack_require__(54),
    MapCache = __webpack_require__(53);

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
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

var assignMergeValue = __webpack_require__(87),
    cloneBuffer = __webpack_require__(89),
    cloneTypedArray = __webpack_require__(90),
    copyArray = __webpack_require__(92),
    initCloneObject = __webpack_require__(93),
    isArguments = __webpack_require__(34),
    isArray = __webpack_require__(3),
    isArrayLikeObject = __webpack_require__(187),
    isBuffer = __webpack_require__(24),
    isFunction = __webpack_require__(14),
    isObject = __webpack_require__(1),
    isPlainObject = __webpack_require__(94),
    isTypedArray = __webpack_require__(35),
    safeGet = __webpack_require__(95),
    toPlainObject = __webpack_require__(188);

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
  var objValue = safeGet(object, key),
      srcValue = safeGet(source, key),
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
      else if (!isObject(objValue) || isFunction(objValue)) {
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
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

var isArrayLike = __webpack_require__(23),
    isObjectLike = __webpack_require__(6);

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
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(5),
    keysIn = __webpack_require__(0);

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
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(97);


/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

var arrayMap = __webpack_require__(26);

/**
 * The base implementation of `_.toPairs` and `_.toPairsIn` which creates an array
 * of key-value pairs for `object` corresponding to the property names of `props`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} props The property names to get values for.
 * @returns {Object} Returns the key-value pairs.
 */
function baseToPairs(object, props) {
  return arrayMap(props, function(key) {
    return [key, object[key]];
  });
}

module.exports = baseToPairs;


/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(12),
    root = __webpack_require__(4);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView');

module.exports = DataView;


/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(12),
    root = __webpack_require__(4);

/* Built-in method references that are verified to be native. */
var Promise = getNative(root, 'Promise');

module.exports = Promise;


/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(12),
    root = __webpack_require__(4);

/* Built-in method references that are verified to be native. */
var Set = getNative(root, 'Set');

module.exports = Set;


/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(12),
    root = __webpack_require__(4);

/* Built-in method references that are verified to be native. */
var WeakMap = getNative(root, 'WeakMap');

module.exports = WeakMap;


/***/ }),
/* 195 */
/***/ (function(module, exports) {

/**
 * Converts `set` to its value-value pairs.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the value-value pairs.
 */
function setToPairs(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = [value, value];
  });
  return result;
}

module.exports = setToPairs;


/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(100);


/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(84);


/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(85);


/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

var baseFindKey = __webpack_require__(101),
    baseForOwn = __webpack_require__(19),
    baseIteratee = __webpack_require__(9);

/**
 * This method is like `_.find` except that it returns the key of the first
 * element `predicate` returns truthy for instead of the element itself.
 *
 * @static
 * @memberOf _
 * @since 1.1.0
 * @category Object
 * @param {Object} object The object to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @returns {string|undefined} Returns the key of the matched element,
 *  else `undefined`.
 * @example
 *
 * var users = {
 *   'barney':  { 'age': 36, 'active': true },
 *   'fred':    { 'age': 40, 'active': false },
 *   'pebbles': { 'age': 1,  'active': true }
 * };
 *
 * _.findKey(users, function(o) { return o.age < 40; });
 * // => 'barney' (iteration order is not guaranteed)
 *
 * // The `_.matches` iteratee shorthand.
 * _.findKey(users, { 'age': 1, 'active': true });
 * // => 'pebbles'
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.findKey(users, ['active', false]);
 * // => 'fred'
 *
 * // The `_.property` iteratee shorthand.
 * _.findKey(users, 'active');
 * // => 'barney'
 */
function findKey(object, predicate) {
  return baseFindKey(object, baseIteratee(predicate, 3), baseForOwn);
}

module.exports = findKey;


/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsMatch = __webpack_require__(201),
    getMatchData = __webpack_require__(211),
    matchesStrictComparable = __webpack_require__(109);

/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatches(source) {
  var matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || baseIsMatch(object, source, matchData);
  };
}

module.exports = baseMatches;


/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(40),
    baseIsEqual = __webpack_require__(102);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */
function baseIsMatch(object, source, matchData, customizer) {
  var index = matchData.length,
      length = index,
      noCustomizer = !customizer;

  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if ((noCustomizer && data[2])
          ? data[1] !== object[data[0]]
          : !(data[0] in object)
        ) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0],
        objValue = object[key],
        srcValue = data[1];

    if (noCustomizer && data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      var stack = new Stack;
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === undefined
            ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack)
            : result
          )) {
        return false;
      }
    }
  }
  return true;
}

module.exports = baseIsMatch;


/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(40),
    equalArrays = __webpack_require__(103),
    equalByTag = __webpack_require__(208),
    equalObjects = __webpack_require__(210),
    getTag = __webpack_require__(27),
    isArray = __webpack_require__(3),
    isBuffer = __webpack_require__(24),
    isTypedArray = __webpack_require__(35);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    objectTag = '[object Object]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = objIsArr ? arrayTag : getTag(object),
      othTag = othIsArr ? arrayTag : getTag(other);

  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;

  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack);
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

module.exports = baseIsEqualDeep;


/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(53),
    setCacheAdd = __webpack_require__(204),
    setCacheHas = __webpack_require__(205);

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

module.exports = SetCache;


/***/ }),
/* 204 */
/***/ (function(module, exports) {

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

module.exports = setCacheAdd;


/***/ }),
/* 205 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

module.exports = setCacheHas;


/***/ }),
/* 206 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

module.exports = arraySome;


/***/ }),
/* 207 */
/***/ (function(module, exports) {

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

module.exports = cacheHas;


/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(16),
    Uint8Array = __webpack_require__(91),
    eq = __webpack_require__(17),
    equalArrays = __webpack_require__(103),
    mapToArray = __webpack_require__(99),
    setToArray = __webpack_require__(209);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]';

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

module.exports = equalByTag;


/***/ }),
/* 209 */
/***/ (function(module, exports) {

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

module.exports = setToArray;


/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

var getAllKeys = __webpack_require__(104);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(object);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

module.exports = equalObjects;


/***/ }),
/* 211 */
/***/ (function(module, exports, __webpack_require__) {

var isStrictComparable = __webpack_require__(108),
    keys = __webpack_require__(2);

/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */
function getMatchData(object) {
  var result = keys(object),
      length = result.length;

  while (length--) {
    var key = result[length],
        value = object[key];

    result[length] = [key, value, isStrictComparable(value)];
  }
  return result;
}

module.exports = getMatchData;


/***/ }),
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqual = __webpack_require__(102),
    get = __webpack_require__(50),
    hasIn = __webpack_require__(62),
    isKey = __webpack_require__(51),
    isStrictComparable = __webpack_require__(108),
    matchesStrictComparable = __webpack_require__(109),
    toKey = __webpack_require__(8);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatchesProperty(path, srcValue) {
  if (isKey(path) && isStrictComparable(srcValue)) {
    return matchesStrictComparable(toKey(path), srcValue);
  }
  return function(object) {
    var objValue = get(object, path);
    return (objValue === undefined && objValue === srcValue)
      ? hasIn(object, path)
      : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
  };
}

module.exports = baseMatchesProperty;


/***/ }),
/* 213 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}

module.exports = baseHasIn;


/***/ }),
/* 214 */
/***/ (function(module, exports, __webpack_require__) {

var baseProperty = __webpack_require__(215),
    basePropertyDeep = __webpack_require__(216),
    isKey = __webpack_require__(51),
    toKey = __webpack_require__(8);

/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */
function property(path) {
  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
}

module.exports = property;


/***/ }),
/* 215 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

module.exports = baseProperty;


/***/ }),
/* 216 */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(25);

/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyDeep(path) {
  return function(object) {
    return baseGet(object, path);
  };
}

module.exports = basePropertyDeep;


/***/ }),
/* 217 */
/***/ (function(module, exports, __webpack_require__) {

var baseFindKey = __webpack_require__(101),
    baseForOwnRight = __webpack_require__(111),
    baseIteratee = __webpack_require__(9);

/**
 * This method is like `_.findKey` except that it iterates over elements of
 * a collection in the opposite order.
 *
 * @static
 * @memberOf _
 * @since 2.0.0
 * @category Object
 * @param {Object} object The object to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @returns {string|undefined} Returns the key of the matched element,
 *  else `undefined`.
 * @example
 *
 * var users = {
 *   'barney':  { 'age': 36, 'active': true },
 *   'fred':    { 'age': 40, 'active': false },
 *   'pebbles': { 'age': 1,  'active': true }
 * };
 *
 * _.findLastKey(users, function(o) { return o.age < 40; });
 * // => returns 'pebbles' assuming `_.findKey` returns 'barney'
 *
 * // The `_.matches` iteratee shorthand.
 * _.findLastKey(users, { 'age': 36, 'active': true });
 * // => 'barney'
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.findLastKey(users, ['active', false]);
 * // => 'fred'
 *
 * // The `_.property` iteratee shorthand.
 * _.findLastKey(users, 'active');
 * // => 'pebbles'
 */
function findLastKey(object, predicate) {
  return baseFindKey(object, baseIteratee(predicate, 3), baseForOwnRight);
}

module.exports = findLastKey;


/***/ }),
/* 218 */
/***/ (function(module, exports, __webpack_require__) {

var baseFor = __webpack_require__(59),
    castFunction = __webpack_require__(20),
    keysIn = __webpack_require__(0);

/**
 * Iterates over own and inherited enumerable string keyed properties of an
 * object and invokes `iteratee` for each property. The iteratee is invoked
 * with three arguments: (value, key, object). Iteratee functions may exit
 * iteration early by explicitly returning `false`.
 *
 * @static
 * @memberOf _
 * @since 0.3.0
 * @category Object
 * @param {Object} object The object to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Object} Returns `object`.
 * @see _.forInRight
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.forIn(new Foo, function(value, key) {
 *   console.log(key);
 * });
 * // => Logs 'a', 'b', then 'c' (iteration order is not guaranteed).
 */
function forIn(object, iteratee) {
  return object == null
    ? object
    : baseFor(object, castFunction(iteratee), keysIn);
}

module.exports = forIn;


/***/ }),
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

var baseForRight = __webpack_require__(112),
    castFunction = __webpack_require__(20),
    keysIn = __webpack_require__(0);

/**
 * This method is like `_.forIn` except that it iterates over properties of
 * `object` in the opposite order.
 *
 * @static
 * @memberOf _
 * @since 2.0.0
 * @category Object
 * @param {Object} object The object to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Object} Returns `object`.
 * @see _.forIn
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.forInRight(new Foo, function(value, key) {
 *   console.log(key);
 * });
 * // => Logs 'c', 'b', then 'a' assuming `_.forIn` logs 'a', 'b', then 'c'.
 */
function forInRight(object, iteratee) {
  return object == null
    ? object
    : baseForRight(object, castFunction(iteratee), keysIn);
}

module.exports = forInRight;


/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

var baseForOwn = __webpack_require__(19),
    castFunction = __webpack_require__(20);

/**
 * Iterates over own enumerable string keyed properties of an object and
 * invokes `iteratee` for each property. The iteratee is invoked with three
 * arguments: (value, key, object). Iteratee functions may exit iteration
 * early by explicitly returning `false`.
 *
 * @static
 * @memberOf _
 * @since 0.3.0
 * @category Object
 * @param {Object} object The object to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Object} Returns `object`.
 * @see _.forOwnRight
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.forOwn(new Foo, function(value, key) {
 *   console.log(key);
 * });
 * // => Logs 'a' then 'b' (iteration order is not guaranteed).
 */
function forOwn(object, iteratee) {
  return object && baseForOwn(object, castFunction(iteratee));
}

module.exports = forOwn;


/***/ }),
/* 221 */
/***/ (function(module, exports, __webpack_require__) {

var baseForOwnRight = __webpack_require__(111),
    castFunction = __webpack_require__(20);

/**
 * This method is like `_.forOwn` except that it iterates over properties of
 * `object` in the opposite order.
 *
 * @static
 * @memberOf _
 * @since 2.0.0
 * @category Object
 * @param {Object} object The object to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Object} Returns `object`.
 * @see _.forOwn
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.forOwnRight(new Foo, function(value, key) {
 *   console.log(key);
 * });
 * // => Logs 'b' then 'a' assuming `_.forOwn` logs 'a' then 'b'.
 */
function forOwnRight(object, iteratee) {
  return object && baseForOwnRight(object, castFunction(iteratee));
}

module.exports = forOwnRight;


/***/ }),
/* 222 */
/***/ (function(module, exports, __webpack_require__) {

var baseFunctions = __webpack_require__(113),
    keys = __webpack_require__(2);

/**
 * Creates an array of function property names from own enumerable properties
 * of `object`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to inspect.
 * @returns {Array} Returns the function names.
 * @see _.functionsIn
 * @example
 *
 * function Foo() {
 *   this.a = _.constant('a');
 *   this.b = _.constant('b');
 * }
 *
 * Foo.prototype.c = _.constant('c');
 *
 * _.functions(new Foo);
 * // => ['a', 'b']
 */
function functions(object) {
  return object == null ? [] : baseFunctions(object, keys(object));
}

module.exports = functions;


/***/ }),
/* 223 */
/***/ (function(module, exports, __webpack_require__) {

var baseFunctions = __webpack_require__(113),
    keysIn = __webpack_require__(0);

/**
 * Creates an array of function property names from own and inherited
 * enumerable properties of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to inspect.
 * @returns {Array} Returns the function names.
 * @see _.functions
 * @example
 *
 * function Foo() {
 *   this.a = _.constant('a');
 *   this.b = _.constant('b');
 * }
 *
 * Foo.prototype.c = _.constant('c');
 *
 * _.functionsIn(new Foo);
 * // => ['a', 'b', 'c']
 */
function functionsIn(object) {
  return object == null ? [] : baseFunctions(object, keysIn(object));
}

module.exports = functionsIn;


/***/ }),
/* 224 */
/***/ (function(module, exports, __webpack_require__) {

var baseHas = __webpack_require__(225),
    hasPath = __webpack_require__(110);

/**
 * Checks if `path` is a direct property of `object`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = { 'a': { 'b': 2 } };
 * var other = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.has(object, 'a');
 * // => true
 *
 * _.has(object, 'a.b');
 * // => true
 *
 * _.has(object, ['a', 'b']);
 * // => true
 *
 * _.has(other, 'a');
 * // => false
 */
function has(object, path) {
  return object != null && hasPath(object, path, baseHas);
}

module.exports = has;


/***/ }),
/* 225 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.has` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHas(object, key) {
  return object != null && hasOwnProperty.call(object, key);
}

module.exports = baseHas;


/***/ }),
/* 226 */
/***/ (function(module, exports, __webpack_require__) {

var constant = __webpack_require__(80),
    createInverter = __webpack_require__(114),
    identity = __webpack_require__(22);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Creates an object composed of the inverted keys and values of `object`.
 * If `object` contains duplicate values, subsequent values overwrite
 * property assignments of previous values.
 *
 * @static
 * @memberOf _
 * @since 0.7.0
 * @category Object
 * @param {Object} object The object to invert.
 * @returns {Object} Returns the new inverted object.
 * @example
 *
 * var object = { 'a': 1, 'b': 2, 'c': 1 };
 *
 * _.invert(object);
 * // => { '1': 'c', '2': 'b' }
 */
var invert = createInverter(function(result, value, key) {
  if (value != null &&
      typeof value.toString != 'function') {
    value = nativeObjectToString.call(value);
  }

  result[value] = key;
}, constant(identity));

module.exports = invert;


/***/ }),
/* 227 */
/***/ (function(module, exports, __webpack_require__) {

var baseForOwn = __webpack_require__(19);

/**
 * The base implementation of `_.invert` and `_.invertBy` which inverts
 * `object` with values transformed by `iteratee` and set by `setter`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} setter The function to set `accumulator` values.
 * @param {Function} iteratee The iteratee to transform values.
 * @param {Object} accumulator The initial inverted object.
 * @returns {Function} Returns `accumulator`.
 */
function baseInverter(object, setter, iteratee, accumulator) {
  baseForOwn(object, function(value, key, object) {
    setter(accumulator, iteratee(value), key, object);
  });
  return accumulator;
}

module.exports = baseInverter;


/***/ }),
/* 228 */
/***/ (function(module, exports, __webpack_require__) {

var baseIteratee = __webpack_require__(9),
    createInverter = __webpack_require__(114);

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

/**
 * This method is like `_.invert` except that the inverted object is generated
 * from the results of running each element of `object` thru `iteratee`. The
 * corresponding inverted value of each inverted key is an array of keys
 * responsible for generating the inverted value. The iteratee is invoked
 * with one argument: (value).
 *
 * @static
 * @memberOf _
 * @since 4.1.0
 * @category Object
 * @param {Object} object The object to invert.
 * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
 * @returns {Object} Returns the new inverted object.
 * @example
 *
 * var object = { 'a': 1, 'b': 2, 'c': 1 };
 *
 * _.invertBy(object);
 * // => { '1': ['a', 'c'], '2': ['b'] }
 *
 * _.invertBy(object, function(value) {
 *   return 'group' + value;
 * });
 * // => { 'group1': ['a', 'c'], 'group2': ['b'] }
 */
var invertBy = createInverter(function(result, value, key) {
  if (value != null &&
      typeof value.toString != 'function') {
    value = nativeObjectToString.call(value);
  }

  if (hasOwnProperty.call(result, value)) {
    result[value].push(key);
  } else {
    result[value] = [key];
  }
}, baseIteratee);

module.exports = invertBy;


/***/ }),
/* 229 */
/***/ (function(module, exports, __webpack_require__) {

var baseInvoke = __webpack_require__(230),
    baseRest = __webpack_require__(31);

/**
 * Invokes the method at `path` of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the method to invoke.
 * @param {...*} [args] The arguments to invoke the method with.
 * @returns {*} Returns the result of the invoked method.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': [1, 2, 3, 4] } }] };
 *
 * _.invoke(object, 'a[0].b.c.slice', 1, 3);
 * // => [2, 3]
 */
var invoke = baseRest(baseInvoke);

module.exports = invoke;


/***/ }),
/* 230 */
/***/ (function(module, exports, __webpack_require__) {

var apply = __webpack_require__(45),
    castPath = __webpack_require__(7),
    last = __webpack_require__(115),
    parent = __webpack_require__(116),
    toKey = __webpack_require__(8);

/**
 * The base implementation of `_.invoke` without support for individual
 * method arguments.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the method to invoke.
 * @param {Array} args The arguments to invoke the method with.
 * @returns {*} Returns the result of the invoked method.
 */
function baseInvoke(object, path, args) {
  path = castPath(path, object);
  object = parent(object, path);
  var func = object == null ? object : object[toKey(last(path))];
  return func == null ? undefined : apply(func, object, args);
}

module.exports = baseInvoke;


/***/ }),
/* 231 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.slice` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */
function baseSlice(array, start, end) {
  var index = -1,
      length = array.length;

  if (start < 0) {
    start = -start > length ? 0 : (length + start);
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : ((end - start) >>> 0);
  start >>>= 0;

  var result = Array(length);
  while (++index < length) {
    result[index] = array[index + start];
  }
  return result;
}

module.exports = baseSlice;


/***/ }),
/* 232 */
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(21),
    baseForOwn = __webpack_require__(19),
    baseIteratee = __webpack_require__(9);

/**
 * The opposite of `_.mapValues`; this method creates an object with the
 * same values as `object` and keys generated by running each own enumerable
 * string keyed property of `object` thru `iteratee`. The iteratee is invoked
 * with three arguments: (value, key, object).
 *
 * @static
 * @memberOf _
 * @since 3.8.0
 * @category Object
 * @param {Object} object The object to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Object} Returns the new mapped object.
 * @see _.mapValues
 * @example
 *
 * _.mapKeys({ 'a': 1, 'b': 2 }, function(value, key) {
 *   return key + value;
 * });
 * // => { 'a1': 1, 'b2': 2 }
 */
function mapKeys(object, iteratee) {
  var result = {};
  iteratee = baseIteratee(iteratee, 3);

  baseForOwn(object, function(value, key, object) {
    baseAssignValue(result, iteratee(value, key, object), value);
  });
  return result;
}

module.exports = mapKeys;


/***/ }),
/* 233 */
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(21),
    baseForOwn = __webpack_require__(19),
    baseIteratee = __webpack_require__(9);

/**
 * Creates an object with the same keys as `object` and values generated
 * by running each own enumerable string keyed property of `object` thru
 * `iteratee`. The iteratee is invoked with three arguments:
 * (value, key, object).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Object
 * @param {Object} object The object to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Object} Returns the new mapped object.
 * @see _.mapKeys
 * @example
 *
 * var users = {
 *   'fred':    { 'user': 'fred',    'age': 40 },
 *   'pebbles': { 'user': 'pebbles', 'age': 1 }
 * };
 *
 * _.mapValues(users, function(o) { return o.age; });
 * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
 *
 * // The `_.property` iteratee shorthand.
 * _.mapValues(users, 'age');
 * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
 */
function mapValues(object, iteratee) {
  var result = {};
  iteratee = baseIteratee(iteratee, 3);

  baseForOwn(object, function(value, key, object) {
    baseAssignValue(result, key, iteratee(value, key, object));
  });
  return result;
}

module.exports = mapValues;


/***/ }),
/* 234 */
/***/ (function(module, exports, __webpack_require__) {

var baseMerge = __webpack_require__(58),
    createAssigner = __webpack_require__(18);

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
/* 235 */
/***/ (function(module, exports, __webpack_require__) {

var arrayMap = __webpack_require__(26),
    baseClone = __webpack_require__(236),
    baseUnset = __webpack_require__(119),
    castPath = __webpack_require__(7),
    copyObject = __webpack_require__(5),
    customOmitClone = __webpack_require__(249),
    flatRest = __webpack_require__(55),
    getAllKeysIn = __webpack_require__(63);

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_FLAT_FLAG = 2,
    CLONE_SYMBOLS_FLAG = 4;

/**
 * The opposite of `_.pick`; this method creates an object composed of the
 * own and inherited enumerable property paths of `object` that are not omitted.
 *
 * **Note:** This method is considerably slower than `_.pick`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The source object.
 * @param {...(string|string[])} [paths] The property paths to omit.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.omit(object, ['a', 'c']);
 * // => { 'b': '2' }
 */
var omit = flatRest(function(object, paths) {
  var result = {};
  if (object == null) {
    return result;
  }
  var isDeep = false;
  paths = arrayMap(paths, function(path) {
    path = castPath(path, object);
    isDeep || (isDeep = path.length > 1);
    return path;
  });
  copyObject(object, getAllKeysIn(object), result);
  if (isDeep) {
    result = baseClone(result, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, customOmitClone);
  }
  var length = paths.length;
  while (length--) {
    baseUnset(result, paths[length]);
  }
  return result;
});

module.exports = omit;


/***/ }),
/* 236 */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(40),
    arrayEach = __webpack_require__(117),
    assignValue = __webpack_require__(30),
    baseAssign = __webpack_require__(86),
    baseAssignIn = __webpack_require__(237),
    cloneBuffer = __webpack_require__(89),
    copyArray = __webpack_require__(92),
    copySymbols = __webpack_require__(238),
    copySymbolsIn = __webpack_require__(239),
    getAllKeys = __webpack_require__(104),
    getAllKeysIn = __webpack_require__(63),
    getTag = __webpack_require__(27),
    initCloneArray = __webpack_require__(240),
    initCloneByTag = __webpack_require__(241),
    initCloneObject = __webpack_require__(93),
    isArray = __webpack_require__(3),
    isBuffer = __webpack_require__(24),
    isMap = __webpack_require__(245),
    isObject = __webpack_require__(1),
    isSet = __webpack_require__(247),
    keys = __webpack_require__(2);

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_FLAT_FLAG = 2,
    CLONE_SYMBOLS_FLAG = 4;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
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

/** Used to identify `toStringTag` values supported by `_.clone`. */
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] =
cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
cloneableTags[boolTag] = cloneableTags[dateTag] =
cloneableTags[float32Tag] = cloneableTags[float64Tag] =
cloneableTags[int8Tag] = cloneableTags[int16Tag] =
cloneableTags[int32Tag] = cloneableTags[mapTag] =
cloneableTags[numberTag] = cloneableTags[objectTag] =
cloneableTags[regexpTag] = cloneableTags[setTag] =
cloneableTags[stringTag] = cloneableTags[symbolTag] =
cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] =
cloneableTags[weakMapTag] = false;

/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Deep clone
 *  2 - Flatten inherited properties
 *  4 - Clone symbols
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */
function baseClone(value, bitmask, customizer, key, object, stack) {
  var result,
      isDeep = bitmask & CLONE_DEEP_FLAG,
      isFlat = bitmask & CLONE_FLAT_FLAG,
      isFull = bitmask & CLONE_SYMBOLS_FLAG;

  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== undefined) {
    return result;
  }
  if (!isObject(value)) {
    return value;
  }
  var isArr = isArray(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray(value, result);
    }
  } else {
    var tag = getTag(value),
        isFunc = tag == funcTag || tag == genTag;

    if (isBuffer(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
      result = (isFlat || isFunc) ? {} : initCloneObject(value);
      if (!isDeep) {
        return isFlat
          ? copySymbolsIn(value, baseAssignIn(result, value))
          : copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag, isDeep);
    }
  }
  // Check for circular references and return its corresponding clone.
  stack || (stack = new Stack);
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);

  if (isSet(value)) {
    value.forEach(function(subValue) {
      result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
    });
  } else if (isMap(value)) {
    value.forEach(function(subValue, key) {
      result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
    });
  }

  var keysFunc = isFull
    ? (isFlat ? getAllKeysIn : getAllKeys)
    : (isFlat ? keysIn : keys);

  var props = isArr ? undefined : keysFunc(value);
  arrayEach(props || value, function(subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    }
    // Recursively populate clone (susceptible to call stack limits).
    assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
  });
  return result;
}

module.exports = baseClone;


/***/ }),
/* 237 */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(5),
    keysIn = __webpack_require__(0);

/**
 * The base implementation of `_.assignIn` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssignIn(object, source) {
  return object && copyObject(source, keysIn(source), object);
}

module.exports = baseAssignIn;


/***/ }),
/* 238 */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(5),
    getSymbols = __webpack_require__(61);

/**
 * Copies own symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbols(source, object) {
  return copyObject(source, getSymbols(source), object);
}

module.exports = copySymbols;


/***/ }),
/* 239 */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(5),
    getSymbolsIn = __webpack_require__(118);

/**
 * Copies own and inherited symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbolsIn(source, object) {
  return copyObject(source, getSymbolsIn(source), object);
}

module.exports = copySymbolsIn;


/***/ }),
/* 240 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */
function initCloneArray(array) {
  var length = array.length,
      result = new array.constructor(length);

  // Add properties assigned by `RegExp#exec`.
  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}

module.exports = initCloneArray;


/***/ }),
/* 241 */
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(60),
    cloneDataView = __webpack_require__(242),
    cloneRegExp = __webpack_require__(243),
    cloneSymbol = __webpack_require__(244),
    cloneTypedArray = __webpack_require__(90);

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

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

/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneByTag(object, tag, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag:
      return cloneArrayBuffer(object);

    case boolTag:
    case dateTag:
      return new Ctor(+object);

    case dataViewTag:
      return cloneDataView(object, isDeep);

    case float32Tag: case float64Tag:
    case int8Tag: case int16Tag: case int32Tag:
    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
      return cloneTypedArray(object, isDeep);

    case mapTag:
      return new Ctor;

    case numberTag:
    case stringTag:
      return new Ctor(object);

    case regexpTag:
      return cloneRegExp(object);

    case setTag:
      return new Ctor;

    case symbolTag:
      return cloneSymbol(object);
  }
}

module.exports = initCloneByTag;


/***/ }),
/* 242 */
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(60);

/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}

module.exports = cloneDataView;


/***/ }),
/* 243 */
/***/ (function(module, exports) {

/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;

/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}

module.exports = cloneRegExp;


/***/ }),
/* 244 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(16);

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */
function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}

module.exports = cloneSymbol;


/***/ }),
/* 245 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsMap = __webpack_require__(246),
    baseUnary = __webpack_require__(48),
    nodeUtil = __webpack_require__(49);

/* Node.js helper references. */
var nodeIsMap = nodeUtil && nodeUtil.isMap;

/**
 * Checks if `value` is classified as a `Map` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 * @example
 *
 * _.isMap(new Map);
 * // => true
 *
 * _.isMap(new WeakMap);
 * // => false
 */
var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;

module.exports = isMap;


/***/ }),
/* 246 */
/***/ (function(module, exports, __webpack_require__) {

var getTag = __webpack_require__(27),
    isObjectLike = __webpack_require__(6);

/** `Object#toString` result references. */
var mapTag = '[object Map]';

/**
 * The base implementation of `_.isMap` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 */
function baseIsMap(value) {
  return isObjectLike(value) && getTag(value) == mapTag;
}

module.exports = baseIsMap;


/***/ }),
/* 247 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsSet = __webpack_require__(248),
    baseUnary = __webpack_require__(48),
    nodeUtil = __webpack_require__(49);

/* Node.js helper references. */
var nodeIsSet = nodeUtil && nodeUtil.isSet;

/**
 * Checks if `value` is classified as a `Set` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 * @example
 *
 * _.isSet(new Set);
 * // => true
 *
 * _.isSet(new WeakSet);
 * // => false
 */
var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;

module.exports = isSet;


/***/ }),
/* 248 */
/***/ (function(module, exports, __webpack_require__) {

var getTag = __webpack_require__(27),
    isObjectLike = __webpack_require__(6);

/** `Object#toString` result references. */
var setTag = '[object Set]';

/**
 * The base implementation of `_.isSet` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 */
function baseIsSet(value) {
  return isObjectLike(value) && getTag(value) == setTag;
}

module.exports = baseIsSet;


/***/ }),
/* 249 */
/***/ (function(module, exports, __webpack_require__) {

var isPlainObject = __webpack_require__(94);

/**
 * Used by `_.omit` to customize its `_.cloneDeep` use to only clone plain
 * objects.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {string} key The key of the property to inspect.
 * @returns {*} Returns the uncloned value or `undefined` to defer cloning to `_.cloneDeep`.
 */
function customOmitClone(value) {
  return isPlainObject(value) ? undefined : value;
}

module.exports = customOmitClone;


/***/ }),
/* 250 */
/***/ (function(module, exports, __webpack_require__) {

var baseIteratee = __webpack_require__(9),
    negate = __webpack_require__(251),
    pickBy = __webpack_require__(120);

/**
 * The opposite of `_.pickBy`; this method creates an object composed of
 * the own and inherited enumerable string keyed properties of `object` that
 * `predicate` doesn't return truthy for. The predicate is invoked with two
 * arguments: (value, key).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The source object.
 * @param {Function} [predicate=_.identity] The function invoked per property.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.omitBy(object, _.isNumber);
 * // => { 'b': '2' }
 */
function omitBy(object, predicate) {
  return pickBy(object, negate(baseIteratee(predicate)));
}

module.exports = omitBy;


/***/ }),
/* 251 */
/***/ (function(module, exports) {

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that negates the result of the predicate `func`. The
 * `func` predicate is invoked with the `this` binding and arguments of the
 * created function.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Function
 * @param {Function} predicate The predicate to negate.
 * @returns {Function} Returns the new negated function.
 * @example
 *
 * function isEven(n) {
 *   return n % 2 == 0;
 * }
 *
 * _.filter([1, 2, 3, 4, 5, 6], _.negate(isEven));
 * // => [1, 3, 5]
 */
function negate(predicate) {
  if (typeof predicate != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  return function() {
    var args = arguments;
    switch (args.length) {
      case 0: return !predicate.call(this);
      case 1: return !predicate.call(this, args[0]);
      case 2: return !predicate.call(this, args[0], args[1]);
      case 3: return !predicate.call(this, args[0], args[1], args[2]);
    }
    return !predicate.apply(this, args);
  };
}

module.exports = negate;


/***/ }),
/* 252 */
/***/ (function(module, exports, __webpack_require__) {

var basePick = __webpack_require__(253),
    flatRest = __webpack_require__(55);

/**
 * Creates an object composed of the picked `object` properties.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The source object.
 * @param {...(string|string[])} [paths] The property paths to pick.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.pick(object, ['a', 'c']);
 * // => { 'a': 1, 'c': 3 }
 */
var pick = flatRest(function(object, paths) {
  return object == null ? {} : basePick(object, paths);
});

module.exports = pick;


/***/ }),
/* 253 */
/***/ (function(module, exports, __webpack_require__) {

var basePickBy = __webpack_require__(121),
    hasIn = __webpack_require__(62);

/**
 * The base implementation of `_.pick` without support for individual
 * property identifiers.
 *
 * @private
 * @param {Object} object The source object.
 * @param {string[]} paths The property paths to pick.
 * @returns {Object} Returns the new object.
 */
function basePick(object, paths) {
  return basePickBy(object, paths, function(value, path) {
    return hasIn(object, path);
  });
}

module.exports = basePick;


/***/ }),
/* 254 */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(7),
    isFunction = __webpack_require__(14),
    toKey = __webpack_require__(8);

/**
 * This method is like `_.get` except that if the resolved value is a
 * function it's invoked with the `this` binding of its parent object and
 * its result is returned.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to resolve.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c1': 3, 'c2': _.constant(4) } }] };
 *
 * _.result(object, 'a[0].b.c1');
 * // => 3
 *
 * _.result(object, 'a[0].b.c2');
 * // => 4
 *
 * _.result(object, 'a[0].b.c3', 'default');
 * // => 'default'
 *
 * _.result(object, 'a[0].b.c3', _.constant('default'));
 * // => 'default'
 */
function result(object, path, defaultValue) {
  path = castPath(path, object);

  var index = -1,
      length = path.length;

  // Ensure the loop is entered when path is empty.
  if (!length) {
    length = 1;
    object = undefined;
  }
  while (++index < length) {
    var value = object == null ? undefined : object[toKey(path[index])];
    if (value === undefined) {
      index = length;
      value = defaultValue;
    }
    object = isFunction(value) ? value.call(object) : value;
  }
  return object;
}

module.exports = result;


/***/ }),
/* 255 */
/***/ (function(module, exports, __webpack_require__) {

var baseSet = __webpack_require__(42);

/**
 * Sets the value at `path` of `object`. If a portion of `path` doesn't exist,
 * it's created. Arrays are created for missing index properties while objects
 * are created for all other missing properties. Use `_.setWith` to customize
 * `path` creation.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.set(object, 'a[0].b.c', 4);
 * console.log(object.a[0].b.c);
 * // => 4
 *
 * _.set(object, ['x', '0', 'y', 'z'], 5);
 * console.log(object.x[0].y.z);
 * // => 5
 */
function set(object, path, value) {
  return object == null ? object : baseSet(object, path, value);
}

module.exports = set;


/***/ }),
/* 256 */
/***/ (function(module, exports, __webpack_require__) {

var baseSet = __webpack_require__(42);

/**
 * This method is like `_.set` except that it accepts `customizer` which is
 * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
 * path creation is handled by the method instead. The `customizer` is invoked
 * with three arguments: (nsValue, key, nsObject).
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @param {Function} [customizer] The function to customize assigned values.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var object = {};
 *
 * _.setWith(object, '[0][1]', 'a', Object);
 * // => { '0': { '1': 'a' } }
 */
function setWith(object, path, value, customizer) {
  customizer = typeof customizer == 'function' ? customizer : undefined;
  return object == null ? object : baseSet(object, path, value, customizer);
}

module.exports = setWith;


/***/ }),
/* 257 */
/***/ (function(module, exports, __webpack_require__) {

var arrayEach = __webpack_require__(117),
    baseCreate = __webpack_require__(57),
    baseForOwn = __webpack_require__(19),
    baseIteratee = __webpack_require__(9),
    getPrototype = __webpack_require__(41),
    isArray = __webpack_require__(3),
    isBuffer = __webpack_require__(24),
    isFunction = __webpack_require__(14),
    isObject = __webpack_require__(1),
    isTypedArray = __webpack_require__(35);

/**
 * An alternative to `_.reduce`; this method transforms `object` to a new
 * `accumulator` object which is the result of running each of its own
 * enumerable string keyed properties thru `iteratee`, with each invocation
 * potentially mutating the `accumulator` object. If `accumulator` is not
 * provided, a new object with the same `[[Prototype]]` will be used. The
 * iteratee is invoked with four arguments: (accumulator, value, key, object).
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @static
 * @memberOf _
 * @since 1.3.0
 * @category Object
 * @param {Object} object The object to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @param {*} [accumulator] The custom accumulator value.
 * @returns {*} Returns the accumulated value.
 * @example
 *
 * _.transform([2, 3, 4], function(result, n) {
 *   result.push(n *= n);
 *   return n % 2 == 0;
 * }, []);
 * // => [4, 9]
 *
 * _.transform({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
 *   (result[value] || (result[value] = [])).push(key);
 * }, {});
 * // => { '1': ['a', 'c'], '2': ['b'] }
 */
function transform(object, iteratee, accumulator) {
  var isArr = isArray(object),
      isArrLike = isArr || isBuffer(object) || isTypedArray(object);

  iteratee = baseIteratee(iteratee, 4);
  if (accumulator == null) {
    var Ctor = object && object.constructor;
    if (isArrLike) {
      accumulator = isArr ? new Ctor : [];
    }
    else if (isObject(object)) {
      accumulator = isFunction(Ctor) ? baseCreate(getPrototype(object)) : {};
    }
    else {
      accumulator = {};
    }
  }
  (isArrLike ? arrayEach : baseForOwn)(object, function(value, index, object) {
    return iteratee(accumulator, value, index, object);
  });
  return accumulator;
}

module.exports = transform;


/***/ }),
/* 258 */
/***/ (function(module, exports, __webpack_require__) {

var baseUnset = __webpack_require__(119);

/**
 * Removes the property at `path` of `object`.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to unset.
 * @returns {boolean} Returns `true` if the property is deleted, else `false`.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 7 } }] };
 * _.unset(object, 'a[0].b.c');
 * // => true
 *
 * console.log(object);
 * // => { 'a': [{ 'b': {} }] };
 *
 * _.unset(object, ['a', '0', 'b', 'c']);
 * // => true
 *
 * console.log(object);
 * // => { 'a': [{ 'b': {} }] };
 */
function unset(object, path) {
  return object == null ? true : baseUnset(object, path);
}

module.exports = unset;


/***/ }),
/* 259 */
/***/ (function(module, exports, __webpack_require__) {

var baseUpdate = __webpack_require__(122),
    castFunction = __webpack_require__(20);

/**
 * This method is like `_.set` except that accepts `updater` to produce the
 * value to set. Use `_.updateWith` to customize `path` creation. The `updater`
 * is invoked with one argument: (value).
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 4.6.0
 * @category Object
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {Function} updater The function to produce the updated value.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.update(object, 'a[0].b.c', function(n) { return n * n; });
 * console.log(object.a[0].b.c);
 * // => 9
 *
 * _.update(object, 'x[0].y.z', function(n) { return n ? n + 1 : 0; });
 * console.log(object.x[0].y.z);
 * // => 0
 */
function update(object, path, updater) {
  return object == null ? object : baseUpdate(object, path, castFunction(updater));
}

module.exports = update;


/***/ }),
/* 260 */
/***/ (function(module, exports, __webpack_require__) {

var baseUpdate = __webpack_require__(122),
    castFunction = __webpack_require__(20);

/**
 * This method is like `_.update` except that it accepts `customizer` which is
 * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
 * path creation is handled by the method instead. The `customizer` is invoked
 * with three arguments: (nsValue, key, nsObject).
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 4.6.0
 * @category Object
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {Function} updater The function to produce the updated value.
 * @param {Function} [customizer] The function to customize assigned values.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var object = {};
 *
 * _.updateWith(object, '[0][1]', _.constant('a'), Object);
 * // => { '0': { '1': 'a' } }
 */
function updateWith(object, path, updater, customizer) {
  customizer = typeof customizer == 'function' ? customizer : undefined;
  return object == null ? object : baseUpdate(object, path, castFunction(updater), customizer);
}

module.exports = updateWith;


/***/ }),
/* 261 */
/***/ (function(module, exports, __webpack_require__) {

var baseValues = __webpack_require__(123),
    keys = __webpack_require__(2);

/**
 * Creates an array of the own enumerable string keyed property values of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property values.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.values(new Foo);
 * // => [1, 2] (iteration order is not guaranteed)
 *
 * _.values('hi');
 * // => ['h', 'i']
 */
function values(object) {
  return object == null ? [] : baseValues(object, keys(object));
}

module.exports = values;


/***/ }),
/* 262 */
/***/ (function(module, exports, __webpack_require__) {

var baseValues = __webpack_require__(123),
    keysIn = __webpack_require__(0);

/**
 * Creates an array of the own and inherited enumerable string keyed property
 * values of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property values.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.valuesIn(new Foo);
 * // => [1, 2, 3] (iteration order is not guaranteed)
 */
function valuesIn(object) {
  return object == null ? [] : baseValues(object, keysIn(object));
}

module.exports = valuesIn;


/***/ }),
/* 263 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Card = /** @class */ (function () {
    /**
     * Card Constructor
     */
    function Card() {
        this.moveTime = 0;
    }
    Object.defineProperty(Card.prototype, "expectedPosition", {
        get: function () {
            return this._targetPosition;
        },
        set: function (val) {
            this._targetPosition = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Card.prototype, "moveDuration", {
        get: function () {
            return this._moveDuration;
        },
        set: function (val) {
            this._moveDuration = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Card.prototype, "sprite", {
        get: function () {
            return this._sprite;
        },
        set: function (val) {
            this._sprite = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Card.prototype, "startPosition", {
        get: function () {
            return this._startPosition;
        },
        set: function (val) {
            this._startPosition = val;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * move for moving card from the starting position to the expected position in move duration
     * @param elapsedTime number - Number of time elapsed in milliseconds from last frame to this frame
     */
    Card.prototype.move = function (elapsedTime) {
        this.moveTime += elapsedTime;
        if (this.moveTime >= this.moveDuration) {
            elapsedTime = 0;
        }
        if (elapsedTime > 0) {
            var stepSize = this.moveDuration / elapsedTime;
            //card should move to the expectedPosition but added some x value for good visual effect
            var resultX = (this.expectedPosition.x - this.sprite.width - 150);
            if (resultX > 0)
                this.sprite.position.x += resultX / stepSize;
            var resultY = (this.expectedPosition.y - this.startPosition.y);
            if (resultY > 0)
                this.sprite.position.y += resultY / stepSize;
        }
    };
    return Card;
}());
exports.default = Card;


/***/ })
/******/ ]);
});