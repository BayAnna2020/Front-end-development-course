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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _script1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./script1 */ \"./src/script1.js\");\n/* harmony import */ var _script2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./script2 */ \"./src/script2.js\");\n/* harmony import */ var _script2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_script2__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _script3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./script3 */ \"./src/script3.js\");\n/* harmony import */ var _script3__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_script3__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _script4__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./script4 */ \"./src/script4.js\");\n/* harmony import */ var _script4__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_script4__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _script5__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./script5 */ \"./src/script5.js\");\n/* harmony import */ var _script5__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_script5__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _script6__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./script6 */ \"./src/script6.js\");\n/* harmony import */ var _script6__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_script6__WEBPACK_IMPORTED_MODULE_5__);\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nlet a = 5,\r\n    b = 6,\r\n    c;\r\n\r\nalert('До изменения: a = ' + (a) + \" b =\" + (b));\r\n\r\nc = a; //a=5 c=5\r\na = b; //a=6 b=6\r\nb = c; //b=5 c=5\r\n\r\nalert('C добавления новой переменной: a = ' + (a) + ' b = ' + (b));\r\n\r\nb = b + a; //5+6=11\r\na = b - a; //11-6=5\r\nb = b - a; //11-5=6\r\n\r\nalert('Без добавления новой переменной: a = ' + (a) + ' b = ' + (b));\r\n\r\n\n\n//# sourceURL=webpack://webpack-setup/./src/script0.js?");

/***/ }),

/***/ "./src/script1.js":
/*!************************!*\
  !*** ./src/script1.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (alert ('Привет, JavaScript'));\n\n//# sourceURL=webpack://webpack-setup/./src/script1.js?");

/***/ }),

/***/ "./src/script2.js":
/*!************************!*\
  !*** ./src/script2.js ***!
  \************************/
/***/ (() => {

eval("let name = prompt('Как вас зовут?'),\r\n    age,\r\n    flag = true;\r\n\r\nwhile (flag) {\r\n    age = parseInt(prompt('Сколько вам лет?'));\r\n\r\n    if (isNaN(age) || age <= 0) {\r\n        alert('Введите корректный возраст');\r\n    } else {\r\n        alert('Привет, ' + name + ' , тебе уже ' + age + ' лет!');\r\n        flag = false;\r\n    }\r\n}\n\n//# sourceURL=webpack://webpack-setup/./src/script2.js?");

/***/ }),

/***/ "./src/script3.js":
/*!************************!*\
  !*** ./src/script3.js ***!
  \************************/
/***/ (() => {

eval("\r\ndocument.querySelector('#sortByMaxButton').onclick = function () {\r\n    let length = document.querySelector('#length').value,\r\n        minValue = document.querySelector('#min').value,\r\n        maxValue = document.querySelector('#max').value,\r\n        array = [];\r\n    for (let i = 0; i < length; i++) {\r\n        array.push(getRandomInteger(minValue, maxValue));\r\n    }\r\n\r\n    bubbleSort(array);\r\n    console.log(array);\r\n    document.querySelector('#outAfter').innerHTML = array;\r\n    return array;\r\n}\r\n\r\nfunction getRandomInteger(min, max) {\r\n    // получить случайное число от (min-0.5) до (max+0.5)\r\n    let rand = min - 0.5 + Math.random() * (max - min + 1);\r\n    return Math.round(rand);\r\n}\r\n\r\n/*сортировка 1=====================*/\r\nfunction bubbleSort(array) {\r\n    console.log(array);\r\n    document.querySelector('#outBefore').innerHTML = array;\r\n\r\n    for (let n = 0; n < array.length; n++) {\r\n        for (let i = 0; i < array.length - 1; i++) {\r\n            if (array[i] > array[i + 1]) {\r\n                const buff = array[i];\r\n                array[i] = array[i + 1];\r\n                array[i + 1] = buff;\r\n            }\r\n        }\r\n    }\r\n}\r\n\r\n\r\n/*desc=================*/\r\ndocument.querySelector('#sortByMinButton').onclick = function () {\r\n    let length = document.querySelector('#length').value,\r\n        minValue = document.querySelector('#min').value,\r\n        maxValue = document.querySelector('#max').value,\r\n        array = [];\r\n    for (let i = 0; i < length; i++) {\r\n        array.push(getRandomInteger(minValue, maxValue));\r\n    }\r\n\r\n    /*сортировка 2=====================*/\r\n    bubbleSort(array);\r\n\r\n    function bubbleSort(array) {\r\n        console.log(array);\r\n        document.querySelector('#outBefore').innerHTML = array;\r\n\r\n        for (let n = 0; n < array.length - 1; n++) {\r\n            for (let i = n + 1; i < array.length; i++) {\r\n                if (array[n] < array[i]) {\r\n                    const buffer = array[i];\r\n                    array[i] = array[n];\r\n                    array[n] = buffer;\r\n                }\r\n            }\r\n        }\r\n    }\r\n\r\n    console.log(array);\r\n    document.querySelector('#outAfter').innerHTML = array;\r\n    return array;\r\n}\r\n\r\n/*sum =================*/\r\ndocument.querySelector('#sumOfSquaresOfOddNumbersButton').onclick = function () {\r\n    let length = document.querySelector('#length').value,\r\n        minValue = document.querySelector('#min').value,\r\n        maxValue = document.querySelector('#max').value,\r\n        array = [];\r\n    for (let i = 0; i < length; i++) {\r\n        array.push(getRandomInteger(minValue , maxValue));\r\n    }\r\n\r\n    /* сумма квадратов всех нечетных элементов ===============*/\r\n\r\n    let result = 0;\r\n    sumSquares(array);\r\n\r\n    function sumSquares(array) {\r\n        console.log(array);\r\n        document.querySelector('#outBefore').innerHTML = array;\r\n\r\n        for (let i = 0; i < array.length; i++) {\r\n            if (array[i] % 2 !== 0) {\r\n                result += array[i] * array[i];\r\n            }\r\n        }\r\n        console.log(array);\r\n    }\r\n\r\n    console.log(result);\r\n    document.querySelector('#outAfter').innerHTML = result;\r\n    return array;\r\n}\n\n//# sourceURL=webpack://webpack-setup/./src/script3.js?");

/***/ }),

/***/ "./src/script4.js":
/*!************************!*\
  !*** ./src/script4.js ***!
  \************************/
/***/ (() => {

eval("let array = [];\r\nfor (let i = 1; i <= 100; i++) {\r\n    array.push(i);\r\n}\r\nconsole.log(array);\r\n\r\nfizzBuzz(array);\r\n\r\nfunction fizzBuzz(array) {\r\n\r\n    for (let i = 0; i < array.length; i++) {\r\n\r\n        if (array[i] % 15 === 0) {\r\n            console.log(\"FizzBuzz\");\r\n        } else if (array[i] % 3 === 0) {\r\n            console.log(\"Fizz\");\r\n        } else if (array[i] % 5 === 0) {\r\n            console.log(\"Buzz\");\r\n        } else {\r\n            console.log(array[i]);\r\n        }\r\n    }\r\n}\n\n//# sourceURL=webpack://webpack-setup/./src/script4.js?");

/***/ }),

/***/ "./src/script5.js":
/*!************************!*\
  !*** ./src/script5.js ***!
  \************************/
/***/ (() => {

eval("checkStringAsPalindrome(prompt(\"Введите слово для проверки на палиндром\"));\r\n\r\nfunction checkStringAsPalindrome(str) {\r\n    str = str.toLowerCase().replace(/\\s/g, '');  //преобразование строки в нижний регистр и замена пробельных символов\r\n    alert(str === str.split('').reverse().join(''));\r\n}\n\n//# sourceURL=webpack://webpack-setup/./src/script5.js?");

/***/ }),

/***/ "./src/script6.js":
/*!************************!*\
  !*** ./src/script6.js ***!
  \************************/
/***/ (() => {

eval("let game = document.getElementById(\"game\"),\r\n    startButton = document.getElementById(\"startButton\");\r\n\r\nstartButton.addEventListener(\"click\", () => {\r\n    game.style.display = \"block\";\r\n    startButton.style.display = \"none\";\r\n})\r\n\r\nlet enigmaNumber,\r\n    guesses = 0;\r\nenigmaNumber = Math.floor((Math.random() * 1000) + 1);\r\nconsole.log(enigmaNumber);\r\n\r\n\r\nfunction comparisonOfGuessAndEnigmaNumbers() {\r\n    let guessNumber,\r\n        outline;\r\n\r\n    guessNumber = parseInt(document.querySelector(\"#guessNumber\").value);\r\n    outline = document.querySelector(\"#outline\");\r\n\r\n    if (guessNumber === enigmaNumber) {\r\n        guesses += 1;\r\n        let stats = \"Вы угадали! Количество попыток: \" + guesses + \". Начать заново? \";\r\n        if (confirm(stats)) {\r\n            location.reload();\r\n        }\r\n    } else if (guessNumber > enigmaNumber) {\r\n        guesses += 1;\r\n        outline.innerHTML = \"Попытка № \" + guesses + \" - искомое число меньше!\";\r\n\r\n    } else {\r\n        guesses += 1;\r\n        outline.innerHTML = \"Попытка № \" + guesses + \" - искомое число больше!\";\r\n    }\r\n}\n\n//# sourceURL=webpack://webpack-setup/./src/script6.js?");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/script0.js");
/******/ 	
/******/ })()
;