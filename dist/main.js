/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const app = (function (){\n    let menu = null;\n    let target = null;\n\n    function setTargetMenu(id)\n    {\n        menu = document.getElementById(id);\n    }\n    function setTarget(id)\n    {\n        target = document.getElementById(id);\n    }\n    const renderPage = (event) =>\n    {\n        target.style.background = 'none';\n        target.innerHTML = ``;\n        target.textContent = `PAGE RENDERED!`;\n        const links = [...document.querySelectorAll('a')];\n\n       links.forEach((link) =>{\n        link.classList.remove('nav-link-active');\n       });\n        event.target.classList.add('nav-link-active');\n    }\n\n    function setupListeners()\n    {\n       const links = [...document.querySelectorAll('a')];\n\n       links.forEach((link) =>{\n        link.onclick = renderPage;\n       });\n    }\n\n    setupListeners();\n    return {setTargetMenu, setTarget};\n})();\n\napp.setTargetMenu('menu-list');\napp.setTarget('main');\n\n//# sourceURL=webpack://restaurant-spa/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;