(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("prop-types"));
	else if(typeof define === 'function' && define.amd)
		define("ProgressBar", ["react", "prop-types"], factory);
	else if(typeof exports === 'object')
		exports["ProgressBar"] = factory(require("react"), require("prop-types"));
	else
		root["ProgressBar"] = factory(root["React"], root["PropTypes"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProgressBar = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var baseClass = {
  position: 'fixed',
  left: 0,
  transition: 'all 0.4s ease'
};

// eslint-disable-next-line import/prefer-default-export
var ProgressBar = function ProgressBar(props) {
  var _extends2;

  var position = props.position,
      progress = props.progress,
      lineHeight = props.lineHeight,
      lineColor = props.lineColor,
      zIndex = props.zIndex,
      customStyles = props.customStyles,
      rest = _objectWithoutProperties(props, ['position', 'progress', 'lineHeight', 'lineColor', 'zIndex', 'customStyles']);

  var customClass = _extends((_extends2 = {}, _defineProperty(_extends2, position, 0), _defineProperty(_extends2, 'width', progress + '%'), _defineProperty(_extends2, 'height', lineHeight + 'px'), _defineProperty(_extends2, 'background', lineColor), _defineProperty(_extends2, 'boxShadow', '0 0 10px ' + lineColor), _defineProperty(_extends2, 'opacity', progress === (0 || 100) ? 0 : 1), _defineProperty(_extends2, 'zIndex', zIndex), _extends2), customStyles);
  return _react2.default.createElement('div', _extends({
    className: 'progress-bar',
    style: _extends({}, baseClass, customClass)
  }, rest));
};

exports.ProgressBar = ProgressBar;
ProgressBar.propTypes = {
  position: _propTypes2.default.string,
  lineColor: _propTypes2.default.string,
  lineHeight: _propTypes2.default.number,
  progress: _propTypes2.default.number.isRequired,
  zIndex: _propTypes2.default.number,
  customStyles: _propTypes2.default.shape()
};

ProgressBar.defaultProps = {
  position: 'top',
  lineColor: '#77b6ff',
  lineHeight: 2,
  zIndex: 100,
  customStyles: {}
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(baseClass, 'baseClass', '/mnt/c/Users/munab/Documents/react-progressbar/src/components/ProgressBar/ProgressBar.jsx');

  __REACT_HOT_LOADER__.register(ProgressBar, 'ProgressBar', '/mnt/c/Users/munab/Documents/react-progressbar/src/components/ProgressBar/ProgressBar.jsx');
}();

;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ })
/******/ ]);
});