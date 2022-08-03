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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _vini__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vini */ \"./src/vini.js\");\n/* harmony import */ var _ice_cream__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ice-cream */ \"./src/ice-cream.js\");\n/* harmony import */ var _beverage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./beverage */ \"./src/beverage.js\");\n/* harmony import */ var _info__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./info */ \"./src/info.js\");\n\n\n\n\n\n/*\n** Keep the application state variables in an IIFE to avoid\n** global scope pollution. To permit re-use of code the menu\n** element and the container where the SPA is rendered must be\n** specified through the setMenu and setContainer functions.\n*/\nconst app = (function (){\n    let menu = null;\n    let container = null;\n\n    /*\n    ** Retrieve the element containing the menu list\n    ** id: the id of the nav menu list element\n    */\n    function setMenu(id)\n    {\n        menu = document.getElementById(id);\n    }\n    /*\n    ** Set the container where the dynamic content will be rendered\n    ** id: the id of the container\n    */\n    function setContainer(id)\n    {\n       container = document.getElementById(id);\n    }\n    /*\n    ** Remove all the container's children and highlight\n    ** the selected menu item\n    */\n    function clearContainer()\n    {\n        if(container === null)\n        {\n            throw new Error('Container is null');\n        }\n        container.innerHTML = '';\n    }\n    /*\n    ** Reset all menu links appearance to the default\n    */\n   const resetMenuLinksAppearence = () =>\n   {\n        const links =  [...menu.querySelectorAll('a')];\n        links.forEach((link) =>\n        {\n            link.removeAttribute('class');\n            link.classList.add('nav-link');\n        });\n   }\n   /*\n   ** Set the clicked link as active changing its style\n   ** targertLink: the link element that must be set as active\n   */\n   const setMenuLinkActive = (targetLink) =>\n   {\n        targetLink.removeAttribute('class');\n        targetLink.classList.add('nav-link-active');\n   }\n    /*\n    ** When the user clicks on a menu item it \n    ** determines which page must be rendered and \n    ** call the appropriate function after removing\n    ** all the container children\n    */\n    const renderPage = (event) =>\n    {\n        const itemClicked = event.target.id;\n\n        clearContainer();\n        resetMenuLinksAppearence();\n        setMenuLinkActive(event.target);\n\n        switch(itemClicked)\n        {\n            case 'home':\n                (0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n                break;\n            case 'wines':\n                (0,_vini__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n                break;\n            case 'ice-cream':\n                (0,_ice_cream__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n                break;\n            case 'beverage':\n                (0,_beverage__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n                break;\n            case 'contact-info':\n                (0,_info__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n                break;\n            default:\n                console.log('Unexpected nav menu item selected!');\n                break;\n        }\n        \n    }\n\n    function setupListeners()\n    {\n       const links = [...document.querySelectorAll('a')];\n\n       links.forEach((link) =>{\n        link.onclick = renderPage;\n       });\n    }\n\n    setupListeners();\n    return {setMenu, setContainer};\n})();\n\napp.setMenu('menu-list');\napp.setContainer('main');\n\n//# sourceURL=webpack://restaurant-spa/./src/index.js?");

/***/ }),

/***/ "./src/info.js":
/*!*********************!*\
  !*** ./src/info.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ renderInfo)\n/* harmony export */ });\nfunction renderInfo()\n{\n\n}\n\n//# sourceURL=webpack://restaurant-spa/./src/info.js?");

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