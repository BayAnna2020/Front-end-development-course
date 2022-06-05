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

/***/ "./src/script0.js":
/*!************************!*\
  !*** ./src/script0.js ***!
  \************************/
/***/ (() => {

eval("let a = 5,\r\n    b = 6,\r\n    c;\r\n\r\nalert('До изменения: a = ' + (a) + \" b =\" + (b));\r\n\r\nc = a; //a=5 c=5\r\na = b; //a=6 b=6\r\nb = c; //b=5 c=5\r\n\r\nalert('C добавления новой переменной: a = ' + (a) + ' b = ' + (b));\r\n\r\nb = b + a; //5+6=11\r\na = b - a; //11-6=5\r\nb = b - a; //11-5=6\r\n\r\nalert('Без добавления новой переменной: a = ' + (a) + ' b = ' + (b));\r\n\r\n\n\n//# sourceURL=webpack://webpack-first/./src/script0.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/script0.js"]();
/******/ 	
/******/ })()
;