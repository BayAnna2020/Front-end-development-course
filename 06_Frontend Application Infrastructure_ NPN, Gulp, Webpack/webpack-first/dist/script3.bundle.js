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

/***/ "./src/script3.js":
/*!************************!*\
  !*** ./src/script3.js ***!
  \************************/
/***/ (() => {

eval("\r\ndocument.querySelector('#sortByMaxButton').onclick = function () {\r\n    let length = document.querySelector('#length').value,\r\n        minValue = document.querySelector('#min').value,\r\n        maxValue = document.querySelector('#max').value,\r\n        array = [];\r\n    for (let i = 0; i < length; i++) {\r\n        array.push(getRandomInteger(minValue, maxValue));\r\n    }\r\n\r\n    bubbleSort(array);\r\n    console.log(array);\r\n    document.querySelector('#outAfter').innerHTML = array;\r\n    return array;\r\n}\r\n\r\nfunction getRandomInteger(min, max) {\r\n    // получить случайное число от (min-0.5) до (max+0.5)\r\n    let rand = min - 0.5 + Math.random() * (max - min + 1);\r\n    return Math.round(rand);\r\n}\r\n\r\n/*сортировка 1=====================*/\r\nfunction bubbleSort(array) {\r\n    console.log(array);\r\n    document.querySelector('#outBefore').innerHTML = array;\r\n\r\n    for (let n = 0; n < array.length; n++) {\r\n        for (let i = 0; i < array.length - 1; i++) {\r\n            if (array[i] > array[i + 1]) {\r\n                const buff = array[i];\r\n                array[i] = array[i + 1];\r\n                array[i + 1] = buff;\r\n            }\r\n        }\r\n    }\r\n}\r\n\r\n\r\n/*desc=================*/\r\ndocument.querySelector('#sortByMinButton').onclick = function () {\r\n    let length = document.querySelector('#length').value,\r\n        minValue = document.querySelector('#min').value,\r\n        maxValue = document.querySelector('#max').value,\r\n        array = [];\r\n    for (let i = 0; i < length; i++) {\r\n        array.push(getRandomInteger(minValue, maxValue));\r\n    }\r\n\r\n    /*сортировка 2=====================*/\r\n    bubbleSort(array);\r\n\r\n    function bubbleSort(array) {\r\n        console.log(array);\r\n        document.querySelector('#outBefore').innerHTML = array;\r\n\r\n        for (let n = 0; n < array.length - 1; n++) {\r\n            for (let i = n + 1; i < array.length; i++) {\r\n                if (array[n] < array[i]) {\r\n                    const buffer = array[i];\r\n                    array[i] = array[n];\r\n                    array[n] = buffer;\r\n                }\r\n            }\r\n        }\r\n    }\r\n\r\n    console.log(array);\r\n    document.querySelector('#outAfter').innerHTML = array;\r\n    return array;\r\n}\r\n\r\n/*sum =================*/\r\ndocument.querySelector('#sumOfSquaresOfOddNumbersButton').onclick = function () {\r\n    let length = document.querySelector('#length').value,\r\n        minValue = document.querySelector('#min').value,\r\n        maxValue = document.querySelector('#max').value,\r\n        array = [];\r\n    for (let i = 0; i < length; i++) {\r\n        array.push(getRandomInteger(minValue , maxValue));\r\n    }\r\n\r\n    /* сумма квадратов всех нечетных элементов ===============*/\r\n\r\n    let result = 0;\r\n    sumSquares(array);\r\n\r\n    function sumSquares(array) {\r\n        console.log(array);\r\n        document.querySelector('#outBefore').innerHTML = array;\r\n\r\n        for (let i = 0; i < array.length; i++) {\r\n            if (array[i] % 2 !== 0) {\r\n                result += array[i] * array[i];\r\n            }\r\n        }\r\n        console.log(array);\r\n    }\r\n\r\n    console.log(result);\r\n    document.querySelector('#outAfter').innerHTML = result;\r\n    return array;\r\n}\n\n//# sourceURL=webpack://webpack-first/./src/script3.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/script3.js"]();
/******/ 	
/******/ })()
;