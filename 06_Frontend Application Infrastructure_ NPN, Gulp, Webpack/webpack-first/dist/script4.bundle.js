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

/***/ "./src/script4.js":
/*!************************!*\
  !*** ./src/script4.js ***!
  \************************/
/***/ (() => {

eval("let array = [];\r\nfor (let i = 1; i <= 100; i++) {\r\n    array.push(i);\r\n}\r\nconsole.log(array);\r\n\r\nfizzBuzz(array);\r\n\r\nfunction fizzBuzz(array) {\r\n\r\n    for (let i = 0; i < array.length; i++) {\r\n\r\n        if (array[i] % 15 === 0) {\r\n            console.log(\"FizzBuzz\");\r\n        } else if (array[i] % 3 === 0) {\r\n            console.log(\"Fizz\");\r\n        } else if (array[i] % 5 === 0) {\r\n            console.log(\"Buzz\");\r\n        } else {\r\n            console.log(array[i]);\r\n        }\r\n    }\r\n}\n\n//# sourceURL=webpack://webpack-first/./src/script4.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/script4.js"]();
/******/ 	
/******/ })()
;