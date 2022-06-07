/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/EasyString.ts":
/*!***************************!*\
  !*** ./src/EasyString.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\n/**\r\n * @package EasyString\r\n */\nvar EasyString = /*#__PURE__*/function () {\n  /**\r\n   *\r\n   * @param template String to be formatted.\r\n   */\n  function EasyString(template) {\n    _classCallCheck(this, EasyString);\n\n    this.rules = [{\n      test: /@var(.*?)/g,\n      callback: this.variable\n    }];\n  }\n\n  _createClass(EasyString, [{\n    key: \"render\",\n    value: function render() {\n      var formattedTemplate = String();\n      this.rules.forEach(function (rule) {});\n    }\n  }, {\n    key: \"variable\",\n    value: function variable(template) {}\n  }]);\n\n  return EasyString;\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EasyString);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvRWFzeVN0cmluZy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0lBQ01BO0VBQ0Y7QUFDSjtBQUNBO0FBQ0E7RUFDSSxvQkFBWUMsUUFBWixFQUFzQjtJQUFBOztJQUNsQixLQUFLQyxLQUFMLEdBQWEsQ0FDVDtNQUNJQyxJQUFJLEVBQUUsWUFEVjtNQUVJQyxRQUFRLEVBQUUsS0FBS0M7SUFGbkIsQ0FEUyxDQUFiO0VBTUg7Ozs7V0FDRCxrQkFBUztNQUNMLElBQU1DLGlCQUFpQixHQUFHQyxNQUFNLEVBQWhDO01BQ0EsS0FBS0wsS0FBTCxDQUFXTSxPQUFYLENBQW1CLFVBQUFDLElBQUksRUFBSSxDQUMxQixDQUREO0lBRUg7OztXQUNELGtCQUFTUixRQUFULEVBQW1CLENBQ2xCOzs7Ozs7QUFFTCxpRUFBZUQsVUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL2Vhc3ktc3RyaW5nLy4vc3JjL0Vhc3lTdHJpbmcudHM/NGVmNSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQHBhY2thZ2UgRWFzeVN0cmluZ1xyXG4gKi9cclxuY2xhc3MgRWFzeVN0cmluZyB7XHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gdGVtcGxhdGUgU3RyaW5nIHRvIGJlIGZvcm1hdHRlZC5cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IodGVtcGxhdGUpIHtcclxuICAgICAgICB0aGlzLnJ1bGVzID0gW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0ZXN0OiAvQHZhciguKj8pL2csXHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjazogdGhpcy52YXJpYWJsZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXTtcclxuICAgIH1cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCBmb3JtYXR0ZWRUZW1wbGF0ZSA9IFN0cmluZygpO1xyXG4gICAgICAgIHRoaXMucnVsZXMuZm9yRWFjaChydWxlID0+IHtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHZhcmlhYmxlKHRlbXBsYXRlKSB7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgRWFzeVN0cmluZztcclxuIl0sIm5hbWVzIjpbIkVhc3lTdHJpbmciLCJ0ZW1wbGF0ZSIsInJ1bGVzIiwidGVzdCIsImNhbGxiYWNrIiwidmFyaWFibGUiLCJmb3JtYXR0ZWRUZW1wbGF0ZSIsIlN0cmluZyIsImZvckVhY2giLCJydWxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/EasyString.ts\n");

/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _EasyString__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EasyString */ \"./src/EasyString.ts\");\n\n/**\r\n *\r\n * @param template\r\n * @constructor\r\n */\n\nfunction EasyString(template) {\n  var engine = new _EasyString__WEBPACK_IMPORTED_MODULE_0__[\"default\"](template);\n  return engine.render();\n}\n\nwindow.EasyString = EasyString;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWFpbi50cy5qcyIsIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxTQUFTQyxVQUFULENBQW9CQyxRQUFwQixFQUE4QjtFQUMxQixJQUFNQyxNQUFNLEdBQUcsSUFBSUgsbURBQUosQ0FBV0UsUUFBWCxDQUFmO0VBQ0EsT0FBT0MsTUFBTSxDQUFDQyxNQUFQLEVBQVA7QUFDSDs7QUFDREMsTUFBTSxDQUFDSixVQUFQLEdBQW9CQSxVQUFwQiIsInNvdXJjZXMiOlsid2VicGFjazovL2Vhc3ktc3RyaW5nLy4vc3JjL21haW4udHM/NWU2MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRW5naW5lIGZyb20gXCIuL0Vhc3lTdHJpbmdcIjtcclxuLyoqXHJcbiAqXHJcbiAqIEBwYXJhbSB0ZW1wbGF0ZVxyXG4gKiBAY29uc3RydWN0b3JcclxuICovXHJcbmZ1bmN0aW9uIEVhc3lTdHJpbmcodGVtcGxhdGUpIHtcclxuICAgIGNvbnN0IGVuZ2luZSA9IG5ldyBFbmdpbmUodGVtcGxhdGUpO1xyXG4gICAgcmV0dXJuIGVuZ2luZS5yZW5kZXIoKTtcclxufVxyXG53aW5kb3cuRWFzeVN0cmluZyA9IEVhc3lTdHJpbmc7XHJcbiJdLCJuYW1lcyI6WyJFbmdpbmUiLCJFYXN5U3RyaW5nIiwidGVtcGxhdGUiLCJlbmdpbmUiLCJyZW5kZXIiLCJ3aW5kb3ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/main.ts\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.ts");
/******/ 	
/******/ })()
;