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

/***/ "./src/script6.js":
/*!************************!*\
  !*** ./src/script6.js ***!
  \************************/
/***/ (() => {

eval("let game = document.getElementById(\"game\"),\r\n    startButton = document.getElementById(\"startButton\");\r\n\r\nstartButton.addEventListener(\"click\", () => {\r\n    game.style.display = \"block\";\r\n    startButton.style.display = \"none\";\r\n})\r\n\r\nlet enigmaNumber,\r\n    guesses = 0;\r\nenigmaNumber = Math.floor((Math.random() * 1000) + 1);\r\nconsole.log(enigmaNumber);\r\n\r\n\r\nfunction comparisonOfGuessAndEnigmaNumbers() {\r\n    let guessNumber,\r\n        outline;\r\n\r\n    guessNumber = parseInt(document.querySelector(\"#guessNumber\").value);\r\n    outline = document.querySelector(\"#outline\");\r\n\r\n    if (guessNumber === enigmaNumber) {\r\n        guesses += 1;\r\n        let stats = \"Вы угадали! Количество попыток: \" + guesses + \". Начать заново? \";\r\n        if (confirm(stats)) {\r\n            location.reload();\r\n        }\r\n    } else if (guessNumber > enigmaNumber) {\r\n        guesses += 1;\r\n        outline.innerHTML = \"Попытка № \" + guesses + \" - искомое число меньше!\";\r\n\r\n    } else {\r\n        guesses += 1;\r\n        outline.innerHTML = \"Попытка № \" + guesses + \" - искомое число больше!\";\r\n    }\r\n}\n\n//# sourceURL=webpack://webpack-first/./src/script6.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/script6.js"]();
/******/ 	
/******/ })()
;