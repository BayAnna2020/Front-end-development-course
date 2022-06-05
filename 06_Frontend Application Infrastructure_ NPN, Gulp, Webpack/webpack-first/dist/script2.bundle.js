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

/***/ "./src/script2.js":
/*!************************!*\
  !*** ./src/script2.js ***!
  \************************/
/***/ (() => {

eval("let name = prompt('Как вас зовут?'),\r\n    age,\r\n    flag = true;\r\n\r\nwhile (flag) {\r\n    age = parseInt(prompt('Сколько вам лет?'));\r\n\r\n    if (isNaN(age) || age <= 0) {\r\n        alert('Введите корректный возраст');\r\n    } else {\r\n        alert('Привет, ' + name + ' , тебе уже ' + age + ' лет!');\r\n        flag = false;\r\n    }\r\n}\n\n//# sourceURL=webpack://webpack-first/./src/script2.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/script2.js"]();
/******/ 	
/******/ })()
;