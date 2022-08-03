/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/beverage.js":
/*!*************************!*\
  !*** ./src/beverage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ renderBeverage)\n/* harmony export */ });\nfunction renderBeverage()\n{\n    \n}\n\n//# sourceURL=webpack://restaurant-spa/./src/beverage.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction renderHome()\n{\n\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderHome);\n\n//# sourceURL=webpack://restaurant-spa/./src/home.js?");

/***/ }),

/***/ "./src/ice-cream.js":
/*!**************************!*\
  !*** ./src/ice-cream.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ renderIceCream)\n/* harmony export */ });\nfunction renderIceCream()\n{\n    \n}\n\n//# sourceURL=webpack://restaurant-spa/./src/ice-cream.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _vini__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vini */ \"./src/vini.js\");\n/* harmony import */ var _ice_cream__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ice-cream */ \"./src/ice-cream.js\");\n/* harmony import */ var _beverage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./beverage */ \"./src/beverage.js\");\n/* harmony import */ var _info__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./info */ \"./src/info.js\");\n\n\n\n\n\nconst app = (function (){\n    let menu = null;\n    let target = null;\n\n    function setTargetMenu(id)\n    {\n        menu = document.getElementById(id);\n    }\n    function setTarget(id)\n    {\n        target = document.getElementById(id);\n    }\n    const renderPage = (event) =>\n    {\n        const itemClicked = event.target.id;\n\n        switch(itemClicked)\n        {\n            case 'home':\n                (0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n                break;\n            case 'wines':\n                (0,_vini__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n                break;\n            case 'ice-cream':\n                (0,_ice_cream__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n                break;\n            case 'beverage':\n                (0,_beverage__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n                break;\n            case 'contact-info':\n                (0,_info__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n                break;\n            default:\n                console.log('Unexpected nav menu item selected!');\n                break;\n        }\n        console.log(event.target);\n        target.style.background = 'none';\n        target.innerHTML = ``;\n        target.textContent = `PAGE RENDERED!`;\n        const links = [...document.querySelectorAll('a')];\n\n       links.forEach((link) =>{\n        link.classList.remove('nav-link-active');\n       });\n        event.target.classList.add('nav-link-active');\n    }\n\n    function setupListeners()\n    {\n       const links = [...document.querySelectorAll('a')];\n\n       links.forEach((link) =>{\n        link.onclick = renderPage;\n       });\n    }\n\n    setupListeners();\n    return {setTargetMenu, setTarget};\n})();\n\napp.setTargetMenu('menu-list');\napp.setTarget('main');\n\n//# sourceURL=webpack://restaurant-spa/./src/index.js?");

/***/ }),

/***/ "./src/info.js":
/*!*********************!*\
  !*** ./src/info.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ renderInfo)\n/* harmony export */ });\nfunction renderInfo()\n{\n    \n}\n\n//# sourceURL=webpack://restaurant-spa/./src/info.js?");

/***/ }),

/***/ "./src/vini.js":
/*!*********************!*\
  !*** ./src/vini.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction renderWines()\n{\n\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderWines);\n\n//# sourceURL=webpack://restaurant-spa/./src/vini.js?");

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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;