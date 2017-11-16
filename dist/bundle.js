/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: /home/slaymance/hackReactor/HiR/recast.ly/src/index.jsx: Unexpected token (5:2)\n  3 | \n  4 | ReactDOM.render(\n> 5 |   <App />,\n    |   ^\n  6 |   document.getElementById('app'),\n  7 | )\n  8 | \n    at Parser.raise (/home/slaymance/hackReactor/HiR/recast.ly/node_modules/@babel/core/node_modules/babylon/lib/index.js:830:15)\n    at Parser.unexpected (/home/slaymance/hackReactor/HiR/recast.ly/node_modules/@babel/core/node_modules/babylon/lib/index.js:2255:16)\n    at Parser.parseExprAtom (/home/slaymance/hackReactor/HiR/recast.ly/node_modules/@babel/core/node_modules/babylon/lib/index.js:3375:20)\n    at Parser.parseExprSubscripts (/home/slaymance/hackReactor/HiR/recast.ly/node_modules/@babel/core/node_modules/babylon/lib/index.js:3015:21)\n    at Parser.parseMaybeUnary (/home/slaymance/hackReactor/HiR/recast.ly/node_modules/@babel/core/node_modules/babylon/lib/index.js:2993:21)\n    at Parser.parseExprOps (/home/slaymance/hackReactor/HiR/recast.ly/node_modules/@babel/core/node_modules/babylon/lib/index.js:2898:21)\n    at Parser.parseMaybeConditional (/home/slaymance/hackReactor/HiR/recast.ly/node_modules/@babel/core/node_modules/babylon/lib/index.js:2868:21)\n    at Parser.parseMaybeAssign (/home/slaymance/hackReactor/HiR/recast.ly/node_modules/@babel/core/node_modules/babylon/lib/index.js:2824:21)\n    at Parser.parseExprListItem (/home/slaymance/hackReactor/HiR/recast.ly/node_modules/@babel/core/node_modules/babylon/lib/index.js:4078:18)\n    at Parser.parseCallExpressionArguments (/home/slaymance/hackReactor/HiR/recast.ly/node_modules/@babel/core/node_modules/babylon/lib/index.js:3177:22)\n    at Parser.parseSubscript (/home/slaymance/hackReactor/HiR/recast.ly/node_modules/@babel/core/node_modules/babylon/lib/index.js:3111:32)\n    at Parser.parseSubscripts (/home/slaymance/hackReactor/HiR/recast.ly/node_modules/@babel/core/node_modules/babylon/lib/index.js:3034:19)\n    at Parser.parseExprSubscripts (/home/slaymance/hackReactor/HiR/recast.ly/node_modules/@babel/core/node_modules/babylon/lib/index.js:3025:17)\n    at Parser.parseMaybeUnary (/home/slaymance/hackReactor/HiR/recast.ly/node_modules/@babel/core/node_modules/babylon/lib/index.js:2993:21)\n    at Parser.parseExprOps (/home/slaymance/hackReactor/HiR/recast.ly/node_modules/@babel/core/node_modules/babylon/lib/index.js:2898:21)\n    at Parser.parseMaybeConditional (/home/slaymance/hackReactor/HiR/recast.ly/node_modules/@babel/core/node_modules/babylon/lib/index.js:2868:21)\n    at Parser.parseMaybeAssign (/home/slaymance/hackReactor/HiR/recast.ly/node_modules/@babel/core/node_modules/babylon/lib/index.js:2824:21)\n    at Parser.parseExpression (/home/slaymance/hackReactor/HiR/recast.ly/node_modules/@babel/core/node_modules/babylon/lib/index.js:2775:21)\n    at Parser.parseStatementContent (/home/slaymance/hackReactor/HiR/recast.ly/node_modules/@babel/core/node_modules/babylon/lib/index.js:4350:21)\n    at Parser.parseStatement (/home/slaymance/hackReactor/HiR/recast.ly/node_modules/@babel/core/node_modules/babylon/lib/index.js:4236:17)\n    at Parser.parseBlockOrModuleBlockBody (/home/slaymance/hackReactor/HiR/recast.ly/node_modules/@babel/core/node_modules/babylon/lib/index.js:4792:23)\n    at Parser.parseBlockBody (/home/slaymance/hackReactor/HiR/recast.ly/node_modules/@babel/core/node_modules/babylon/lib/index.js:4778:10)\n    at Parser.parseTopLevel (/home/slaymance/hackReactor/HiR/recast.ly/node_modules/@babel/core/node_modules/babylon/lib/index.js:4204:10)\n    at Parser.parse (/home/slaymance/hackReactor/HiR/recast.ly/node_modules/@babel/core/node_modules/babylon/lib/index.js:5635:17)\n    at parse (/home/slaymance/hackReactor/HiR/recast.ly/node_modules/@babel/core/node_modules/babylon/lib/index.js:10501:38)\n    at parser (/home/slaymance/hackReactor/HiR/recast.ly/node_modules/@babel/core/lib/transformation/normalize-file.js:104:33)\n    at normalizeFile (/home/slaymance/hackReactor/HiR/recast.ly/node_modules/@babel/core/lib/transformation/normalize-file.js:51:11)\n    at runSync (/home/slaymance/hackReactor/HiR/recast.ly/node_modules/@babel/core/lib/transformation/index.js:34:41)\n    at transformSync (/home/slaymance/hackReactor/HiR/recast.ly/node_modules/@babel/core/lib/transform-sync.js:15:38)\n    at Object.transform (/home/slaymance/hackReactor/HiR/recast.ly/node_modules/@babel/core/lib/transform.js:20:65)");

/***/ })
/******/ ]);