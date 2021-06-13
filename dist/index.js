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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/main.scss":
/*!********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/main.scss ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_AT_RULE_IMPORT_0___ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./customInputs.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/customInputs.css");
exports = ___CSS_LOADER_API_IMPORT___(false);
exports.i(___CSS_LOADER_AT_RULE_IMPORT_0___);
// Module
exports.push([module.i, "body, html {\n  width: 100%;\n  height: 100vh;\n  margin: 0;\n  background-color: #1c1c1c;\n  color: white;\n  font-family: 'Roboto', sans-serif; }\n\n#root {\n  display: flex;\n  height: 100%; }\n  #root > * {\n    height: 100%; }\n\n#control-panel {\n  width: 20%;\n  min-width: 500px;\n  border-right: 1px solid #707070;\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n  margin-bottom: 32px;\n  padding: 32px;\n  height: 100%;\n  box-sizing: border-box; }\n\n#settings {\n  display: flex;\n  grid-gap: 32px;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin-bottom: 32px; }\n  #settings > * > span {\n    font-size: 0.8em;\n    text-transform: uppercase; }\n\n#screenWrapper {\n  width: 80%;\n  display: flex;\n  flex-flow: column;\n  overflow-x: scroll; }\n\n#info {\n  padding: 24px;\n  border-bottom: 1px solid #707070; }\n\n#screen {\n  flex-grow: 1;\n  min-width: 750px; }\n\n#howItWorks {\n  margin-top: 32px; }\n\na {\n  text-decoration: none;\n  color: #1871D7; }\n\n.hidden {\n  display: none !important; }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/customInputs.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/customInputs.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "/* RADIO */\r\n.radio_container {\r\n    display: block;\r\n    position: relative;\r\n    cursor: pointer;\r\n    user-select: none;\r\n    padding-left: 28px;\r\n}\r\n\r\n.radio_container input{\r\n    position: absolute;\r\n    opacity: 0;\r\n    cursor: pointer;\r\n    height: 0;\r\n    width: 0;\r\n}\r\n\r\n.radio_container .checkmark{\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    height: 20px;\r\n    width: 20px;\r\n    background-color: #1c1c1c;\r\n    border: 2px solid #7A7A7A;\r\n    border-radius: 50%;\r\n}\r\n\r\n.radio_container:hover input ~ .checkmark {\r\n    border: 2px solid #9A9A9A;\r\n}\r\n\r\n.radio_container .checkmark:after{\r\n    content: \"\";\r\n    position: absolute;\r\n    display: none;\r\n}\r\n\r\n.radio_container input:checked ~ .checkmark:after{\r\n    display: block;\r\n}\r\n\r\n.radio_container .checkmark:after{\r\n    top: 2px;\r\n    left: 2px;\r\n    width: 10px;\r\n    height: 10px;\r\n    border-radius: 50%;\r\n    background-color: white;\r\n    border: 1px solid #7A7A7A;\r\n}\r\n\r\n/* Text/Password */\r\ninput[type=\"text\"], input[type=\"password\"]{\r\n    background-color: #1c1c1c;\r\n    border: 2px solid #7A7A7A;\r\n    padding: 6px;\r\n    color: white;\r\n    display: inline-block;\r\n}\r\n\r\ninput:focus{\r\n    outline: none;\r\n}\r\n\r\ninput:hover{\r\n    border-color: #9A9A9A;\r\n}\r\n\r\ninput::placeholder{\r\n    color: #9A9A9A;\r\n}\r\n\r\ninput[type=\"text\"].error, input[type=\"password\"].error{\r\n    border-color: #e53935;\r\n}\r\n\r\nlabel.input-label{\r\n    color: #FFF;\r\n    font-size: 12px;\r\n    font-weight: 500;\r\n}\r\n\r\n/* Drop down */\r\n.select_container {\r\n    position: relative;\r\n    display: inline-block;\r\n    user-select: none;\r\n}\r\n\r\n.select_container select{\r\n    display: none;\r\n}\r\n\r\n/* Main box */\r\n.select-selected {\r\n    background-color: #2E2E2E;\r\n    border: 2px solid #3D3D3D;\r\n    font-size: 13px;\r\n}\r\n\r\n.select-selected:hover{\r\n    border-color: #4D4D4D;\r\n}\r\n\r\n/* Closed arrow */\r\n.select-selected:after {\r\n    position: absolute;\r\n    content: \"\";\r\n    top: 10px;\r\n    right: 10px;\r\n    width: 6px;\r\n    height: 6px;\r\n    border: solid white;\r\n    border-width: 0 2px 2px 0;\r\n    transform: rotate(45deg);\r\n}\r\n\r\n/* Opened arrow */\r\n.select-selected.select-arrow-active:after{\r\n    transform: rotate(225deg);\r\n    top: 14px;\r\n}\r\n\r\n/* style the item_icon (options), including the selected item: */\r\n.select-item div,.select-selected {\r\n    color: #FFFFFF;\r\n    padding: 6px 6px;\r\n    cursor: pointer;\r\n}\r\n\r\n/* Style options */\r\n.select-item {\r\n    position: absolute;\r\n    background-color: #2E2E2E;\r\n    border: 2px solid #3D3D3D;\r\n    border-top: none;\r\n    font-size: 13px;\r\n    top: 100%;\r\n    left: 0;\r\n    right: 0;\r\n    z-index: 99;\r\n}\r\n\r\n/* Hide the item_icon when the select box is closed: */\r\n.select-hide {\r\n    display: none;\r\n}\r\n\r\n/* Hover */\r\n.select-item div:hover, .same-as-selected {\r\n    background-color: #434343;\r\n}\r\n\r\n/* Checkbox */\r\n.checkbox-container{\r\n    display: block;\r\n    position: relative;\r\n    padding-left: 26px;\r\n    height: 20px;\r\n    cursor: pointer;\r\n    user-select: none;\r\n    margin-bottom: 12px;\r\n}\r\n\r\n.checkbox-container input {\r\n    position: absolute;\r\n    opacity: 0;\r\n    cursor: pointer;\r\n    height: 0;\r\n    width: 0;\r\n}\r\n\r\n.checkbox-container .checkmark {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    height: 20px;\r\n    width: 20px;\r\n    background-color: #1C1C1C;\r\n    border: 2px solid #7A7A7A;\r\n}\r\n\r\n.checkmark:hover{\r\n    border-color: #9A9A9A;\r\n}\r\n\r\n.checkbox-container .checkmark:after{\r\n    content: \"\";\r\n    position: absolute;\r\n    display: none;\r\n}\r\n\r\n.checkbox-container input:checked ~ .checkmark:after {\r\n    display: block;\r\n}\r\n\r\n.checkbox-container .checkmark:after {\r\n    left: 5px;\r\n    top: 1px;\r\n    width: 4px;\r\n    height: 9px;\r\n    border: solid white;\r\n    border-width: 0 2px 2px 0;\r\n    transform: rotate(45deg);\r\n}\r\n\r\n/* Button */\r\nbutton{\r\n    background-color: #2E2E2E;\r\n    border: none;\r\n    outline: none;\r\n    padding: 8px 32px;\r\n    color: white;\r\n    text-transform: uppercase;\r\n}\r\n\r\nbutton:hover{\r\n    cursor: pointer;\r\n    background-color: #434343;\r\n}\r\n\r\nbutton:active{\r\n    background-color: #3d3d3d;\r\n}\r\n\r\nbutton.blue{\r\n    background-color: #1565C0;\r\n}\r\n\r\nbutton.blue:hover{\r\n    background-color: #1871D7;\r\n}\r\n\r\nbutton.blue:active{\r\n    background-color: #1259A9;\r\n}\r\n\r\nbutton.red{\r\n    background-color: #B80101;\r\n}\r\n\r\nbutton.red:hover{\r\n    background-color: #F70101;\r\n}\r\n\r\nbutton.red:active{\r\n    background-color: #AB0101;\r\n}\r\n\r\nbutton.green{\r\n    background-color: #4caf50;\r\n}\r\n\r\nbutton.green:hover{\r\n    background-color: #66bb6a;\r\n}\r\n\r\nbutton.green:active{\r\n    background-color: #43a047;\r\n}\r\n\r\n/* Scrollbar */\r\n/* width */\r\n::-webkit-scrollbar {\r\n    width: 3px;\r\n}\r\n\r\n/* Track */\r\n::-webkit-scrollbar-track {\r\n    background-color: #2E2E2E;\r\n}\r\n\r\n/* Handle */\r\n::-webkit-scrollbar-thumb {\r\n    background: #7A7A7A;\r\n}\r\n\r\n/* Handle on hover */\r\n::-webkit-scrollbar-thumb:hover {\r\n    background: #9A9A9A;\r\n}\r\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/ChaosGame.ts":
/*!**************************!*\
  !*** ./src/ChaosGame.ts ***!
  \**************************/
/*! no static exports found */
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
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _screen, _randomizer, _settings, _gameStopped, _player, _points;
Object.defineProperty(exports, "__esModule", { value: true });
const Randomizer_1 = __webpack_require__(/*! ./Randomizer */ "./src/Randomizer.ts");
class ChaosGame {
    constructor() {
        _screen.set(this, void 0);
        _randomizer.set(this, void 0);
        _settings.set(this, void 0);
        _gameStopped.set(this, void 0);
        _player.set(this, void 0);
        _points.set(this, void 0);
        __classPrivateFieldSet(this, _screen, document.querySelector("#screen"));
        __classPrivateFieldSet(this, _randomizer, new Randomizer_1.default());
        __classPrivateFieldSet(this, _gameStopped, true);
    }
    init() {
        this.addListeners();
    }
    addListeners() {
        document.querySelector("#startGame").addEventListener("click", () => {
            var _a;
            const player = (_a = document.querySelector("#player")) !== null && _a !== void 0 ? _a : false;
            const points = document.querySelectorAll(".point");
            if (points.length <= 1) {
                document.querySelector("#info").innerHTML = "You have to add at least two points to start game, please Left click on screen bellow";
            }
            else if (!player) {
                document.querySelector("#info").innerHTML = "You have to add player to start game, please Right click on screen bellow";
            }
            else {
                this.startGame();
            }
        });
        document.querySelector("#stopGame").addEventListener("click", () => {
            this.stopGame();
        });
        document.querySelector("#clearScreen").addEventListener("click", () => {
            this.stopGame();
            this.clearScreen();
            document.querySelector("#stopGame").classList.add("hidden");
            document.querySelector("#startGame").classList.remove("hidden");
        });
        document.querySelector("#screen").addEventListener("click", (ev) => {
            if (__classPrivateFieldGet(this, _gameStopped)) {
                this.addPoint(ev.offsetX.toString(), ev.offsetY.toString());
            }
        });
        document.querySelector("#screen").addEventListener("contextmenu", (ev) => {
            ev.preventDefault();
            const player = document.querySelector("#player");
            if (player === null) {
                this.addPlayer(ev);
            }
        });
        document.querySelector("#templateSelect").addEventListener("change", (ev) => {
            this.loadTemplate(ev.target.value);
        });
    }
    startGame() {
        return __awaiter(this, void 0, void 0, function* () {
            document.querySelector("#startGame").classList.add("hidden");
            document.querySelector("#stopGame").classList.remove("hidden");
            __classPrivateFieldSet(this, _settings, {
                timeBetweenJumps: +document.querySelector("#timeBetweenJumps").value * 1000,
                distanceToMove: +document.querySelector("#distanceToMove").value,
                canNotRepeatRoll: (document.querySelector("#notSameAsLast").value === 'true'),
                numberOfIterations: +document.querySelector("#numberOfIterations").value,
                sizeOfStamp: document.querySelector("#sizeOfStamp").value
            });
            __classPrivateFieldSet(this, _player, document.querySelector("#player"));
            __classPrivateFieldSet(this, _points, document.querySelectorAll(".point"));
            __classPrivateFieldSet(this, _gameStopped, false);
            let i = 0;
            while (!(__classPrivateFieldGet(this, _gameStopped) || i > __classPrivateFieldGet(this, _settings).numberOfIterations)) {
                this.tick();
                yield this.sleep(__classPrivateFieldGet(this, _settings).timeBetweenJumps);
                i++;
            }
        });
    }
    stopGame() {
        document.querySelector("#stopGame").classList.add("hidden");
        document.querySelector("#startGame").classList.remove("hidden");
        __classPrivateFieldSet(this, _gameStopped, true);
    }
    addPoint(x, y) {
        console.log("Adding point");
        const point = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
        point.setAttribute("cx", x);
        point.setAttribute("cy", y);
        point.setAttribute("r", "4");
        point.classList.add("point");
        point.style.fill = "#1565C0";
        __classPrivateFieldGet(this, _screen).appendChild(point);
    }
    addPlayer(ev) {
        let newElement = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
        newElement.setAttribute("cx", ev.offsetX.toString());
        newElement.setAttribute("cy", ev.offsetY.toString());
        newElement.setAttribute("r", "5");
        newElement.setAttribute("id", "player");
        newElement.style.fill = "#AB0101";
        __classPrivateFieldGet(this, _screen).appendChild(newElement);
    }
    tick() {
        this.addStamp();
        this.changeDotPosition();
    }
    changeDotPosition() {
        const random = __classPrivateFieldGet(this, _randomizer).getRandomNumber(__classPrivateFieldGet(this, _points).length, __classPrivateFieldGet(this, _settings).canNotRepeatRoll);
        const pointCoords = {
            x: +__classPrivateFieldGet(this, _points)[random].getAttribute("cx"),
            y: +__classPrivateFieldGet(this, _points)[random].getAttribute("cy")
        };
        const x1 = +__classPrivateFieldGet(this, _player).getAttribute("cx");
        const x2 = pointCoords.x;
        const y1 = +__classPrivateFieldGet(this, _player).getAttribute("cy");
        const y2 = pointCoords.y;
        const distanceBetweenPoints = Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2);
        const distanceToMove = eval(document.querySelector("#distanceToMove").value);
        const newPosX = x1 + (((distanceBetweenPoints * distanceToMove) / distanceBetweenPoints) * (x2 - x1));
        const newPosY = y1 + (((distanceBetweenPoints * distanceToMove) / distanceBetweenPoints) * (y2 - y1));
        __classPrivateFieldGet(this, _player).setAttribute("cx", newPosX.toString());
        __classPrivateFieldGet(this, _player).setAttribute("cy", newPosY.toString());
    }
    loadTemplate(templateName) {
        const templates = [
            {
                name: "carpet",
                distanceToMove: "2/3",
                canNotRepeatRoll: false,
                points: [
                    { x: 100, y: 100 },
                    { x: 400, y: 100 },
                    { x: 700, y: 100 },
                    { x: 100, y: 400 },
                    { x: 700, y: 400 },
                    { x: 100, y: 700 },
                    { x: 400, y: 700 },
                    { x: 700, y: 700 }
                ]
            },
            {
                name: "vicsek",
                distanceToMove: "2/3",
                canNotRepeatRoll: false,
                points: [
                    { x: 100, y: 100 },
                    { x: 700, y: 100 },
                    { x: 400, y: 400 },
                    { x: 100, y: 700 },
                    { x: 700, y: 700 }
                ]
            },
            {
                name: "triangle",
                distanceToMove: "1/2",
                canNotRepeatRoll: false,
                points: [
                    { x: 400, y: 100 },
                    { x: 100, y: 700 },
                    { x: 700, y: 700 }
                ]
            },
            {
                name: "pentagon",
                distanceToMove: "1/2",
                canNotRepeatRoll: true,
                points: [
                    { x: 350, y: 100 },
                    { x: 120, y: 270 },
                    { x: 581, y: 270 },
                    { x: 284, y: 448 },
                    { x: 451, y: 448 },
                ]
            }
        ];
        templates.forEach(template => {
            if (template.name === templateName) {
                this.stopGame();
                this.clearScreen();
                document.querySelector("#distanceToMove").value = template.distanceToMove;
                document.querySelector("#notSameAsLast").value = template.canNotRepeatRoll.toString();
                template.points.forEach(point => {
                    this.addPoint(point.x.toString(), point.y.toString());
                });
            }
        });
    }
    addStamp() {
        let playerCopy = __classPrivateFieldGet(this, _player).cloneNode(true);
        playerCopy.removeAttribute("id");
        playerCopy.style.fill = "#FFF";
        playerCopy.setAttribute("r", __classPrivateFieldGet(this, _settings).sizeOfStamp);
        __classPrivateFieldGet(this, _screen).appendChild(playerCopy);
    }
    clearScreen() {
        __classPrivateFieldGet(this, _screen).innerHTML = "";
    }
    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}
exports.ChaosGame = ChaosGame;
_screen = new WeakMap(), _randomizer = new WeakMap(), _settings = new WeakMap(), _gameStopped = new WeakMap(), _player = new WeakMap(), _points = new WeakMap();


/***/ }),

/***/ "./src/Randomizer.ts":
/*!***************************!*\
  !*** ./src/Randomizer.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _lastRandom;
Object.defineProperty(exports, "__esModule", { value: true });
class Randomizer {
    constructor() {
        _lastRandom.set(this, void 0);
        __classPrivateFieldSet(this, _lastRandom, 0);
    }
    getRandomNumber(maxRange, notSameAsLast) {
        let random;
        do {
            random = Math.floor(Math.random() * maxRange);
        } while (notSameAsLast && __classPrivateFieldGet(this, _lastRandom) === random);
        __classPrivateFieldSet(this, _lastRandom, random);
        return random;
    }
}
exports.default = Randomizer;
_lastRandom = new WeakMap();


/***/ }),

/***/ "./src/css/main.scss":
/*!***************************!*\
  !*** ./src/css/main.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/main.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! ./css/main.scss */ "./src/css/main.scss");
__webpack_require__(/*! ./Randomizer */ "./src/Randomizer.ts");
const ChaosGame_1 = __webpack_require__(/*! ./ChaosGame */ "./src/ChaosGame.ts");
const app = new ChaosGame_1.ChaosGame();
app.init();


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9tYWluLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9jdXN0b21JbnB1dHMuY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL3NyYy9DaGFvc0dhbWUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1JhbmRvbWl6ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9tYWluLnNjc3M/ZTlkYyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFD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QixtQkFBTyxDQUFDLDJNQUFvRzs7QUFFdEk7O0FBRUE7QUFDQSwwQkFBMEIsUUFBUztBQUNuQzs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOzs7O0FBSUEsMEI7Ozs7Ozs7Ozs7Ozs7O0FDcEJBLGtFQUF5QjtBQUN6QiwrREFBc0I7QUFDdEIsaUZBQXdDO0FBRXhDLE1BQU0sR0FBRyxHQUFHLElBQUkscUJBQVMsRUFBRSxDQUFDO0FBQzVCLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyA9IHJlcXVpcmUoXCItIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY3VzdG9tSW5wdXRzLmNzc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuZXhwb3J0cy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImJvZHksIGh0bWwge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgbWFyZ2luOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFjMWMxYztcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjsgfVxcblxcbiNyb290IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBoZWlnaHQ6IDEwMCU7IH1cXG4gICNyb290ID4gKiB7XFxuICAgIGhlaWdodDogMTAwJTsgfVxcblxcbiNjb250cm9sLXBhbmVsIHtcXG4gIHdpZHRoOiAyMCU7XFxuICBtaW4td2lkdGg6IDUwMHB4O1xcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzcwNzA3MDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWZsb3c6IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW4tYm90dG9tOiAzMnB4O1xcbiAgcGFkZGluZzogMzJweDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cXG5cXG4jc2V0dGluZ3Mge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdyaWQtZ2FwOiAzMnB4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW4tYm90dG9tOiAzMnB4OyB9XFxuICAjc2V0dGluZ3MgPiAqID4gc3BhbiB7XFxuICAgIGZvbnQtc2l6ZTogMC44ZW07XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IH1cXG5cXG4jc2NyZWVuV3JhcHBlciB7XFxuICB3aWR0aDogODAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZmxvdzogY29sdW1uO1xcbiAgb3ZlcmZsb3cteDogc2Nyb2xsOyB9XFxuXFxuI2luZm8ge1xcbiAgcGFkZGluZzogMjRweDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNzA3MDcwOyB9XFxuXFxuI3NjcmVlbiB7XFxuICBmbGV4LWdyb3c6IDE7XFxuICBtaW4td2lkdGg6IDc1MHB4OyB9XFxuXFxuI2hvd0l0V29ya3Mge1xcbiAgbWFyZ2luLXRvcDogMzJweDsgfVxcblxcbmEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6ICMxODcxRDc7IH1cXG5cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDsgfVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLyogUkFESU8gKi9cXHJcXG4ucmFkaW9fY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAyOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucmFkaW9fY29udGFpbmVyIGlucHV0e1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgaGVpZ2h0OiAwO1xcclxcbiAgICB3aWR0aDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLnJhZGlvX2NvbnRhaW5lciAuY2hlY2ttYXJre1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgICB3aWR0aDogMjBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFjMWMxYztcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgIzdBN0E3QTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbn1cXHJcXG5cXHJcXG4ucmFkaW9fY29udGFpbmVyOmhvdmVyIGlucHV0IH4gLmNoZWNrbWFyayB7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICM5QTlBOUE7XFxyXFxufVxcclxcblxcclxcbi5yYWRpb19jb250YWluZXIgLmNoZWNrbWFyazphZnRlcntcXHJcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnJhZGlvX2NvbnRhaW5lciBpbnB1dDpjaGVja2VkIH4gLmNoZWNrbWFyazphZnRlcntcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbi5yYWRpb19jb250YWluZXIgLmNoZWNrbWFyazphZnRlcntcXHJcXG4gICAgdG9wOiAycHg7XFxyXFxuICAgIGxlZnQ6IDJweDtcXHJcXG4gICAgd2lkdGg6IDEwcHg7XFxyXFxuICAgIGhlaWdodDogMTBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzdBN0E3QTtcXHJcXG59XFxyXFxuXFxyXFxuLyogVGV4dC9QYXNzd29yZCAqL1xcclxcbmlucHV0W3R5cGU9XFxcInRleHRcXFwiXSwgaW5wdXRbdHlwZT1cXFwicGFzc3dvcmRcXFwiXXtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFjMWMxYztcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgIzdBN0E3QTtcXHJcXG4gICAgcGFkZGluZzogNnB4O1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXQ6Zm9jdXN7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmlucHV0OmhvdmVye1xcclxcbiAgICBib3JkZXItY29sb3I6ICM5QTlBOUE7XFxyXFxufVxcclxcblxcclxcbmlucHV0OjpwbGFjZWhvbGRlcntcXHJcXG4gICAgY29sb3I6ICM5QTlBOUE7XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9XFxcInRleHRcXFwiXS5lcnJvciwgaW5wdXRbdHlwZT1cXFwicGFzc3dvcmRcXFwiXS5lcnJvcntcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiAjZTUzOTM1O1xcclxcbn1cXHJcXG5cXHJcXG5sYWJlbC5pbnB1dC1sYWJlbHtcXHJcXG4gICAgY29sb3I6ICNGRkY7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG59XFxyXFxuXFxyXFxuLyogRHJvcCBkb3duICovXFxyXFxuLnNlbGVjdF9jb250YWluZXIge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5zZWxlY3RfY29udGFpbmVyIHNlbGVjdHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLyogTWFpbiBib3ggKi9cXHJcXG4uc2VsZWN0LXNlbGVjdGVkIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJFMkUyRTtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgIzNEM0QzRDtcXHJcXG4gICAgZm9udC1zaXplOiAxM3B4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2VsZWN0LXNlbGVjdGVkOmhvdmVye1xcclxcbiAgICBib3JkZXItY29sb3I6ICM0RDRENEQ7XFxyXFxufVxcclxcblxcclxcbi8qIENsb3NlZCBhcnJvdyAqL1xcclxcbi5zZWxlY3Qtc2VsZWN0ZWQ6YWZ0ZXIge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgICB0b3A6IDEwcHg7XFxyXFxuICAgIHJpZ2h0OiAxMHB4O1xcclxcbiAgICB3aWR0aDogNnB4O1xcclxcbiAgICBoZWlnaHQ6IDZweDtcXHJcXG4gICAgYm9yZGVyOiBzb2xpZCB3aGl0ZTtcXHJcXG4gICAgYm9yZGVyLXdpZHRoOiAwIDJweCAycHggMDtcXHJcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBPcGVuZWQgYXJyb3cgKi9cXHJcXG4uc2VsZWN0LXNlbGVjdGVkLnNlbGVjdC1hcnJvdy1hY3RpdmU6YWZ0ZXJ7XFxyXFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDIyNWRlZyk7XFxyXFxuICAgIHRvcDogMTRweDtcXHJcXG59XFxyXFxuXFxyXFxuLyogc3R5bGUgdGhlIGl0ZW1faWNvbiAob3B0aW9ucyksIGluY2x1ZGluZyB0aGUgc2VsZWN0ZWQgaXRlbTogKi9cXHJcXG4uc2VsZWN0LWl0ZW0gZGl2LC5zZWxlY3Qtc2VsZWN0ZWQge1xcclxcbiAgICBjb2xvcjogI0ZGRkZGRjtcXHJcXG4gICAgcGFkZGluZzogNnB4IDZweDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBTdHlsZSBvcHRpb25zICovXFxyXFxuLnNlbGVjdC1pdGVtIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkUyRTJFO1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjM0QzRDNEO1xcclxcbiAgICBib3JkZXItdG9wOiBub25lO1xcclxcbiAgICBmb250LXNpemU6IDEzcHg7XFxyXFxuICAgIHRvcDogMTAwJTtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgcmlnaHQ6IDA7XFxyXFxuICAgIHotaW5kZXg6IDk5O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBIaWRlIHRoZSBpdGVtX2ljb24gd2hlbiB0aGUgc2VsZWN0IGJveCBpcyBjbG9zZWQ6ICovXFxyXFxuLnNlbGVjdC1oaWRlIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLyogSG92ZXIgKi9cXHJcXG4uc2VsZWN0LWl0ZW0gZGl2OmhvdmVyLCAuc2FtZS1hcy1zZWxlY3RlZCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0MzQzNDM7XFxyXFxufVxcclxcblxcclxcbi8qIENoZWNrYm94ICovXFxyXFxuLmNoZWNrYm94LWNvbnRhaW5lcntcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAyNnB4O1xcclxcbiAgICBoZWlnaHQ6IDIwcHg7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDEycHg7XFxyXFxufVxcclxcblxcclxcbi5jaGVja2JveC1jb250YWluZXIgaW5wdXQge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgaGVpZ2h0OiAwO1xcclxcbiAgICB3aWR0aDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmNoZWNrYm94LWNvbnRhaW5lciAuY2hlY2ttYXJrIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIGhlaWdodDogMjBweDtcXHJcXG4gICAgd2lkdGg6IDIwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxQzFDMUM7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICM3QTdBN0E7XFxyXFxufVxcclxcblxcclxcbi5jaGVja21hcms6aG92ZXJ7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogIzlBOUE5QTtcXHJcXG59XFxyXFxuXFxyXFxuLmNoZWNrYm94LWNvbnRhaW5lciAuY2hlY2ttYXJrOmFmdGVye1xcclxcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uY2hlY2tib3gtY29udGFpbmVyIGlucHV0OmNoZWNrZWQgfiAuY2hlY2ttYXJrOmFmdGVyIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbi5jaGVja2JveC1jb250YWluZXIgLmNoZWNrbWFyazphZnRlciB7XFxyXFxuICAgIGxlZnQ6IDVweDtcXHJcXG4gICAgdG9wOiAxcHg7XFxyXFxuICAgIHdpZHRoOiA0cHg7XFxyXFxuICAgIGhlaWdodDogOXB4O1xcclxcbiAgICBib3JkZXI6IHNvbGlkIHdoaXRlO1xcclxcbiAgICBib3JkZXItd2lkdGg6IDAgMnB4IDJweCAwO1xcclxcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxyXFxufVxcclxcblxcclxcbi8qIEJ1dHRvbiAqL1xcclxcbmJ1dHRvbntcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJFMkUyRTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICBwYWRkaW5nOiA4cHggMzJweDtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b246aG92ZXJ7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQzNDM0MztcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uOmFjdGl2ZXtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNkM2QzZDtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uLmJsdWV7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxNTY1QzA7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbi5ibHVlOmhvdmVye1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTg3MUQ3O1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24uYmx1ZTphY3RpdmV7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMjU5QTk7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbi5yZWR7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNCODAxMDE7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbi5yZWQ6aG92ZXJ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNzAxMDE7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbi5yZWQ6YWN0aXZle1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQUIwMTAxO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24uZ3JlZW57XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0Y2FmNTA7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbi5ncmVlbjpob3ZlcntcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzY2YmI2YTtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uLmdyZWVuOmFjdGl2ZXtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQzYTA0NztcXHJcXG59XFxyXFxuXFxyXFxuLyogU2Nyb2xsYmFyICovXFxyXFxuLyogd2lkdGggKi9cXHJcXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXHJcXG4gICAgd2lkdGg6IDNweDtcXHJcXG59XFxyXFxuXFxyXFxuLyogVHJhY2sgKi9cXHJcXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJFMkUyRTtcXHJcXG59XFxyXFxuXFxyXFxuLyogSGFuZGxlICovXFxyXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxyXFxuICAgIGJhY2tncm91bmQ6ICM3QTdBN0E7XFxyXFxufVxcclxcblxcclxcbi8qIEhhbmRsZSBvbiBob3ZlciAqL1xcclxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjOUE5QTlBO1xcclxcbn1cXHJcXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiBidG9hKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiaW1wb3J0IFJhbmRvbWl6ZXIgZnJvbSBcIi4vUmFuZG9taXplclwiO1xyXG5cclxuaW50ZXJmYWNlIENoYW9zR2FtZVNldHRpbmdzIHtcclxuICAgIHRpbWVCZXR3ZWVuSnVtcHM6IG51bWJlcjtcclxuICAgIGRpc3RhbmNlVG9Nb3ZlOiBudW1iZXI7XHJcbiAgICBjYW5Ob3RSZXBlYXRSb2xsOiBib29sZWFuO1xyXG4gICAgbnVtYmVyT2ZJdGVyYXRpb25zOiBudW1iZXI7XHJcbiAgICBzaXplT2ZTdGFtcDogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ2hhb3NHYW1lIHtcclxuICAgICNzY3JlZW46IFNWR0VsZW1lbnQ7XHJcbiAgICAjcmFuZG9taXplcjogUmFuZG9taXplcjtcclxuICAgICNzZXR0aW5nczogQ2hhb3NHYW1lU2V0dGluZ3M7XHJcbiAgICAjZ2FtZVN0b3BwZWQ6IGJvb2xlYW47XHJcbiAgICAjcGxheWVyOiBTVkdDaXJjbGVFbGVtZW50O1xyXG4gICAgI3BvaW50czogTm9kZUxpc3RPZjxTVkdDaXJjbGVFbGVtZW50PjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLiNzY3JlZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NjcmVlblwiKTtcclxuICAgICAgICB0aGlzLiNyYW5kb21pemVyID0gbmV3IFJhbmRvbWl6ZXIoKTtcclxuICAgICAgICB0aGlzLiNnYW1lU3RvcHBlZCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICB0aGlzLmFkZExpc3RlbmVycygpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZExpc3RlbmVycygpIHtcclxuICAgICAgICAvLyBTdGFydCBHYW1lXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzdGFydEdhbWVcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcGxheWVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwbGF5ZXJcIikgPz8gZmFsc2U7XHJcbiAgICAgICAgICAgIGNvbnN0IHBvaW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucG9pbnRcIik7XHJcblxyXG4gICAgICAgICAgICBpZihwb2ludHMubGVuZ3RoIDw9IDEpe1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNpbmZvXCIpLmlubmVySFRNTCA9IFwiWW91IGhhdmUgdG8gYWRkIGF0IGxlYXN0IHR3byBwb2ludHMgdG8gc3RhcnQgZ2FtZSwgcGxlYXNlIExlZnQgY2xpY2sgb24gc2NyZWVuIGJlbGxvd1wiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZighcGxheWVyKSB7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2luZm9cIikuaW5uZXJIVE1MID0gXCJZb3UgaGF2ZSB0byBhZGQgcGxheWVyIHRvIHN0YXJ0IGdhbWUsIHBsZWFzZSBSaWdodCBjbGljayBvbiBzY3JlZW4gYmVsbG93XCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydEdhbWUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIC8vIFN0b3AgR2FtZVxyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc3RvcEdhbWVcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zdG9wR2FtZSgpO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIC8vIENMZWFyIHNjcmVlblxyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2xlYXJTY3JlZW5cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zdG9wR2FtZSgpO1xyXG4gICAgICAgICAgICB0aGlzLmNsZWFyU2NyZWVuKCk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc3RvcEdhbWVcIikuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzdGFydEdhbWVcIikuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAvLyBBZGRzIFBvaW50c1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2NyZWVuXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXY6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgaWYodGhpcy4jZ2FtZVN0b3BwZWQpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hZGRQb2ludChldi5vZmZzZXRYLnRvU3RyaW5nKCkgLGV2Lm9mZnNldFkudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAvLyBBZGRzIFBsYXllclxyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2NyZWVuXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjb250ZXh0bWVudVwiLCAoZXY6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHBsYXllciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGxheWVyXCIpO1xyXG5cclxuICAgICAgICAgICAgaWYocGxheWVyID09PSBudWxsKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWRkUGxheWVyKGV2KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGVtcGxhdGVTZWxlY3RcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoZXYpID0+IHtcclxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSBDYW4gZmluZCBnb29kIEV2ZW50IHR5cGVcclxuICAgICAgICAgICAgdGhpcy5sb2FkVGVtcGxhdGUoZXYudGFyZ2V0LnZhbHVlKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgc3RhcnRHYW1lKCkge1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc3RhcnRHYW1lXCIpLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzdG9wR2FtZVwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xyXG4gICAgICAgIHRoaXMuI3NldHRpbmdzID0ge1xyXG4gICAgICAgICAgICB0aW1lQmV0d2Vlbkp1bXBzOlxyXG4gICAgICAgICAgICAgICAgKyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RpbWVCZXR3ZWVuSnVtcHNcIikgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUgKiAxMDAwLFxyXG4gICAgICAgICAgICBkaXN0YW5jZVRvTW92ZTpcclxuICAgICAgICAgICAgICAgICsoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkaXN0YW5jZVRvTW92ZVwiKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSxcclxuICAgICAgICAgICAgY2FuTm90UmVwZWF0Um9sbDpcclxuICAgICAgICAgICAgICAgICgoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNub3RTYW1lQXNMYXN0XCIpIGFzIEhUTUxTZWxlY3RFbGVtZW50KS52YWx1ZSA9PT0gJ3RydWUnKSxcclxuICAgICAgICAgICAgbnVtYmVyT2ZJdGVyYXRpb25zOlxyXG4gICAgICAgICAgICAgICAgKyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI251bWJlck9mSXRlcmF0aW9uc1wiKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSxcclxuICAgICAgICAgICAgc2l6ZU9mU3RhbXA6XHJcbiAgICAgICAgICAgIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NpemVPZlN0YW1wXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuI3BsYXllciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGxheWVyXCIpO1xyXG4gICAgICAgIHRoaXMuI3BvaW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucG9pbnRcIikgYXMgTm9kZUxpc3RPZjxTVkdDaXJjbGVFbGVtZW50PjtcclxuICAgICAgICB0aGlzLiNnYW1lU3RvcHBlZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICBsZXQgaSA9IDA7XHJcblxyXG4gICAgICAgIHdoaWxlKCEodGhpcy4jZ2FtZVN0b3BwZWQgfHwgaSA+IHRoaXMuI3NldHRpbmdzLm51bWJlck9mSXRlcmF0aW9ucykpIHtcclxuICAgICAgICAgICAgdGhpcy50aWNrKCk7XHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuc2xlZXAodGhpcy4jc2V0dGluZ3MudGltZUJldHdlZW5KdW1wcyk7XHJcbiAgICAgICAgICAgIGkrKztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RvcEdhbWUoKXtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3N0b3BHYW1lXCIpLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzdGFydEdhbWVcIikuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcclxuICAgICAgICB0aGlzLiNnYW1lU3RvcHBlZCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkUG9pbnQoeDogc3RyaW5nLCB5OiBzdHJpbmcpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiQWRkaW5nIHBvaW50XCIpXHJcbiAgICAgICAgY29uc3QgcG9pbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLCAnY2lyY2xlJyk7XHJcbiAgICAgICAgcG9pbnQuc2V0QXR0cmlidXRlKFwiY3hcIiwgeCk7XHJcbiAgICAgICAgcG9pbnQuc2V0QXR0cmlidXRlKFwiY3lcIiwgeSk7XHJcbiAgICAgICAgcG9pbnQuc2V0QXR0cmlidXRlKFwiclwiLCBcIjRcIik7XHJcbiAgICAgICAgcG9pbnQuY2xhc3NMaXN0LmFkZChcInBvaW50XCIpO1xyXG4gICAgICAgIHBvaW50LnN0eWxlLmZpbGwgPSBcIiMxNTY1QzBcIjsgLy9TZXQgc3Ryb2tlIGNvbG91clxyXG5cclxuICAgICAgICB0aGlzLiNzY3JlZW4uYXBwZW5kQ2hpbGQocG9pbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZFBsYXllcihldjogTW91c2VFdmVudCl7XHJcbiAgICAgICAgbGV0IG5ld0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLCAnY2lyY2xlJyk7XHJcbiAgICAgICAgbmV3RWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJjeFwiLCBldi5vZmZzZXRYLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgIG5ld0VsZW1lbnQuc2V0QXR0cmlidXRlKFwiY3lcIiwgZXYub2Zmc2V0WS50b1N0cmluZygpKTtcclxuICAgICAgICBuZXdFbGVtZW50LnNldEF0dHJpYnV0ZShcInJcIiwgXCI1XCIpO1xyXG4gICAgICAgIG5ld0VsZW1lbnQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwbGF5ZXJcIilcclxuICAgICAgICBuZXdFbGVtZW50LnN0eWxlLmZpbGwgPSBcIiNBQjAxMDFcIjsgLy9TZXQgc3Ryb2tlIGNvbG91clxyXG5cclxuICAgICAgICB0aGlzLiNzY3JlZW4uYXBwZW5kQ2hpbGQobmV3RWxlbWVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGljaygpe1xyXG4gICAgICAgIHRoaXMuYWRkU3RhbXAoKTtcclxuICAgICAgICB0aGlzLmNoYW5nZURvdFBvc2l0aW9uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlRG90UG9zaXRpb24oKXtcclxuICAgICAgICBjb25zdCByYW5kb20gPSB0aGlzLiNyYW5kb21pemVyLmdldFJhbmRvbU51bWJlcih0aGlzLiNwb2ludHMubGVuZ3RoLCB0aGlzLiNzZXR0aW5ncy5jYW5Ob3RSZXBlYXRSb2xsKTtcclxuXHJcbiAgICAgICAgY29uc3QgcG9pbnRDb29yZHMgPSB7XHJcbiAgICAgICAgICAgIHg6ICt0aGlzLiNwb2ludHNbcmFuZG9tXS5nZXRBdHRyaWJ1dGUoXCJjeFwiKSxcclxuICAgICAgICAgICAgeTogK3RoaXMuI3BvaW50c1tyYW5kb21dLmdldEF0dHJpYnV0ZShcImN5XCIpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCB4MSA9ICt0aGlzLiNwbGF5ZXIuZ2V0QXR0cmlidXRlKFwiY3hcIik7XHJcbiAgICAgICAgY29uc3QgeDIgPSBwb2ludENvb3Jkcy54O1xyXG5cclxuICAgICAgICBjb25zdCB5MSA9ICt0aGlzLiNwbGF5ZXIuZ2V0QXR0cmlidXRlKFwiY3lcIik7XHJcbiAgICAgICAgY29uc3QgeTIgPSBwb2ludENvb3Jkcy55O1xyXG5cclxuICAgICAgICBjb25zdCBkaXN0YW5jZUJldHdlZW5Qb2ludHMgPSBNYXRoLnBvdygoeDIgLSB4MSksIDIpICsgTWF0aC5wb3coKHkyIC0geTEpLCAyKVxyXG4gICAgICAgIGNvbnN0IGRpc3RhbmNlVG9Nb3ZlOiBudW1iZXIgPSBldmFsKChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Rpc3RhbmNlVG9Nb3ZlXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlKTtcclxuXHJcbiAgICAgICAgY29uc3QgbmV3UG9zWCA9IHgxICsgKCgoZGlzdGFuY2VCZXR3ZWVuUG9pbnRzICogZGlzdGFuY2VUb01vdmUpIC8gZGlzdGFuY2VCZXR3ZWVuUG9pbnRzKSAqICh4MiAtIHgxKSlcclxuICAgICAgICBjb25zdCBuZXdQb3NZID0geTEgKyAoKChkaXN0YW5jZUJldHdlZW5Qb2ludHMgKiBkaXN0YW5jZVRvTW92ZSkgLyBkaXN0YW5jZUJldHdlZW5Qb2ludHMpICogKHkyIC0geTEpKVxyXG5cclxuICAgICAgICB0aGlzLiNwbGF5ZXIuc2V0QXR0cmlidXRlKFwiY3hcIiwgbmV3UG9zWC50b1N0cmluZygpKVxyXG4gICAgICAgIHRoaXMuI3BsYXllci5zZXRBdHRyaWJ1dGUoXCJjeVwiLCBuZXdQb3NZLnRvU3RyaW5nKCkpXHJcbiAgICB9XHJcblxyXG4gICAgbG9hZFRlbXBsYXRlKHRlbXBsYXRlTmFtZTogc3RyaW5nKXtcclxuICAgICAgICAvKiBTY3JlZW4gPSAxMzc5eDg1NiAqL1xyXG4gICAgICAgIGNvbnN0IHRlbXBsYXRlcyA9IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogXCJjYXJwZXRcIixcclxuICAgICAgICAgICAgICAgIGRpc3RhbmNlVG9Nb3ZlOiBcIjIvM1wiLFxyXG4gICAgICAgICAgICAgICAgY2FuTm90UmVwZWF0Um9sbDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBwb2ludHM6IFtcclxuICAgICAgICAgICAgICAgICAgICB7eDogMTAwLCB5OiAxMDB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt4OiA0MDAsIHk6IDEwMH0sXHJcbiAgICAgICAgICAgICAgICAgICAge3g6IDcwMCwgeTogMTAwfSxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAge3g6IDEwMCwgeTogNDAwfSxcclxuICAgICAgICAgICAgICAgICAgICB7eDogNzAwLCB5OiA0MDB9LFxyXG5cclxuICAgICAgICAgICAgICAgICAgICB7eDogMTAwLCB5OiA3MDB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt4OiA0MDAsIHk6IDcwMH0sXHJcbiAgICAgICAgICAgICAgICAgICAge3g6IDcwMCwgeTogNzAwfVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcInZpY3Nla1wiLFxyXG4gICAgICAgICAgICAgICAgZGlzdGFuY2VUb01vdmU6IFwiMi8zXCIsXHJcbiAgICAgICAgICAgICAgICBjYW5Ob3RSZXBlYXRSb2xsOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHBvaW50czogW1xyXG4gICAgICAgICAgICAgICAgICAgIHt4OiAxMDAsIHk6IDEwMH0sXHJcbiAgICAgICAgICAgICAgICAgICAge3g6IDcwMCwgeTogMTAwfSxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAge3g6IDQwMCwgeTogNDAwfSxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAge3g6IDEwMCwgeTogNzAwfSxcclxuICAgICAgICAgICAgICAgICAgICB7eDogNzAwLCB5OiA3MDB9XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwidHJpYW5nbGVcIixcclxuICAgICAgICAgICAgICAgIGRpc3RhbmNlVG9Nb3ZlOiBcIjEvMlwiLFxyXG4gICAgICAgICAgICAgICAgY2FuTm90UmVwZWF0Um9sbDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBwb2ludHM6IFtcclxuICAgICAgICAgICAgICAgICAgICB7eDogNDAwLCB5OiAxMDB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt4OiAxMDAsIHk6IDcwMH0sXHJcbiAgICAgICAgICAgICAgICAgICAge3g6IDcwMCwgeTogNzAwfVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogXCJwZW50YWdvblwiLFxyXG4gICAgICAgICAgICAgICAgZGlzdGFuY2VUb01vdmU6IFwiMS8yXCIsXHJcbiAgICAgICAgICAgICAgICBjYW5Ob3RSZXBlYXRSb2xsOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgcG9pbnRzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge3g6IDM1MCwgeTogMTAwfSxcclxuICAgICAgICAgICAgICAgICAgICB7eDogMTIwLCB5OiAyNzB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHt4OiA1ODEsIHk6IDI3MH0sXHJcbiAgICAgICAgICAgICAgICAgICAge3g6IDI4NCwgeTogNDQ4fSxcclxuICAgICAgICAgICAgICAgICAgICB7eDogNDUxLCB5OiA0NDh9LFxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG5cclxuICAgICAgICB0ZW1wbGF0ZXMuZm9yRWFjaCh0ZW1wbGF0ZSA9PiB7XHJcbiAgICAgICAgICAgIGlmKHRlbXBsYXRlLm5hbWUgPT09IHRlbXBsYXRlTmFtZSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3BHYW1lKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsZWFyU2NyZWVuKCk7XHJcbiAgICAgICAgICAgICAgICAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkaXN0YW5jZVRvTW92ZVwiKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSA9IHRlbXBsYXRlLmRpc3RhbmNlVG9Nb3ZlO1xyXG4gICAgICAgICAgICAgICAgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbm90U2FtZUFzTGFzdFwiKSBhcyBIVE1MU2VsZWN0RWxlbWVudCkudmFsdWUgPSB0ZW1wbGF0ZS5jYW5Ob3RSZXBlYXRSb2xsLnRvU3RyaW5nKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGUucG9pbnRzLmZvckVhY2gocG9pbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkUG9pbnQocG9pbnQueC50b1N0cmluZygpLCBwb2ludC55LnRvU3RyaW5nKCkpXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBhZGRTdGFtcCgpe1xyXG4gICAgICAgIGxldCBwbGF5ZXJDb3B5ID0gKHRoaXMuI3BsYXllci5jbG9uZU5vZGUodHJ1ZSkgYXMgU1ZHQ2lyY2xlRWxlbWVudCk7XHJcblxyXG4gICAgICAgIHBsYXllckNvcHkucmVtb3ZlQXR0cmlidXRlKFwiaWRcIik7XHJcbiAgICAgICAgcGxheWVyQ29weS5zdHlsZS5maWxsID0gXCIjRkZGXCI7XHJcbiAgICAgICAgcGxheWVyQ29weS5zZXRBdHRyaWJ1dGUoXCJyXCIsIHRoaXMuI3NldHRpbmdzLnNpemVPZlN0YW1wKVxyXG5cclxuICAgICAgICB0aGlzLiNzY3JlZW4uYXBwZW5kQ2hpbGQocGxheWVyQ29weSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xlYXJTY3JlZW4oKSB7XHJcbiAgICAgICAgdGhpcy4jc2NyZWVuLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICB9XHJcblxyXG4gICAgc2xlZXAobXM6IG51bWJlcikge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpKTtcclxuICAgIH1cclxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFJhbmRvbWl6ZXIge1xyXG4gICAgI2xhc3RSYW5kb206IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLiNsYXN0UmFuZG9tID0gMDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRSYW5kb21OdW1iZXIobWF4UmFuZ2U6IG51bWJlciwgbm90U2FtZUFzTGFzdD86IGJvb2xlYW4pOiBudW1iZXJ7XHJcbiAgICAgICAgbGV0IHJhbmRvbTogbnVtYmVyO1xyXG5cclxuICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgIHJhbmRvbSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG1heFJhbmdlKTtcclxuICAgICAgICB9IHdoaWxlIChub3RTYW1lQXNMYXN0ICYmIHRoaXMuI2xhc3RSYW5kb20gPT09IHJhbmRvbSlcclxuXHJcbiAgICAgICAgdGhpcy4jbGFzdFJhbmRvbSA9IHJhbmRvbTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHJhbmRvbTtcclxuICAgIH1cclxufSIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyIsImltcG9ydCAnLi9jc3MvbWFpbi5zY3NzJztcclxuaW1wb3J0ICcuL1JhbmRvbWl6ZXInO1xyXG5pbXBvcnQgeyBDaGFvc0dhbWUgfSBmcm9tIFwiLi9DaGFvc0dhbWVcIjtcclxuXHJcbmNvbnN0IGFwcCA9IG5ldyBDaGFvc0dhbWUoKTtcclxuYXBwLmluaXQoKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==