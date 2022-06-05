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

/***/ "./src/script5.js":
/*!************************!*\
  !*** ./src/script5.js ***!
  \************************/
/***/ (() => {

eval("checkStringAsPalindrome(prompt(\"Введите слово для проверки на палиндром\"));\r\n\r\nfunction checkStringAsPalindrome(str) {\r\n    str = str.toLowerCase().replace(/\\s/g, '');  //преобразование строки в нижний регистр и замена пробельных символов\r\n    alert(str === str.split('').reverse().join(''));\r\n}\n\n//# sourceURL=webpack://webpack-first/./src/script5.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/script5.js"]();
/******/ 	
/******/ })()
;