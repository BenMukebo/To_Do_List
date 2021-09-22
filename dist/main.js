/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/data.js":
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sortedTasks": () => (/* binding */ sortedTasks),
/* harmony export */   "getTask": () => (/* binding */ getTask)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utils.js");


const tasks = [
  {
    description: '1.List structure.',
    completed: false,
    index: 7,
  },
  {
    description: '2.Interactive list.',
    completed: false,
    index: 4,
  },
  {
    description: '3.Add and remove items.',
    completed: false,
    index: 2,
  },
];

const sortedTasks = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.sortItems)(tasks);



const taskList = document.querySelector('.task-container .tasks');

const getTask = (task) => {
    taskList.innerHTML += `<li class="book">
    <span class="left">
      <input id=${task.index} type="checkbox" />
      <label for=${task.index}>${task.description}</label>
    </span>
    <span class="right">
      <i class="fas fa-ellipsis-v"></i>
    </span>
  </li>`;
  // return taskList;
};




  

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sortItems": () => (/* binding */ sortItems)
/* harmony export */ });

const sortItems = (items) => {
  items.sort((a, b) => {
    return (a.index - b.index);
  });
}


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ "./src/data.js");


window.onload = () => {
console.log(_data__WEBPACK_IMPORTED_MODULE_0__.sortedTasks);
console.log('ke');
 _data__WEBPACK_IMPORTED_MODULE_0__.sortedTasks.forEach(task => {
    (0,_data__WEBPACK_IMPORTED_MODULE_0__.getTask)(task);
  });
}

window.addEventListener('load', () => {
  console.log('me');
})







})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQW9DOztBQUVwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVPLG9CQUFvQixpREFBUzs7OztBQUlwQzs7QUFFTztBQUNQO0FBQ0E7QUFDQSxrQkFBa0IsWUFBWTtBQUM5QixtQkFBbUIsV0FBVyxHQUFHLGlCQUFpQjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTs7Ozs7Ozs7Ozs7Ozs7O0FDekNPO0FBQ1A7QUFDQTtBQUNBLEdBQUc7QUFDSDs7Ozs7OztVQ0xBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOOEM7O0FBRTlDO0FBQ0EsWUFBWSw4Q0FBVztBQUN2QjtBQUNBLENBQUMsc0RBQW1CO0FBQ3BCLElBQUksOENBQU87QUFDWCxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Ub19Eb19MaXN0Ly4vc3JjL2RhdGEuanMiLCJ3ZWJwYWNrOi8vVG9fRG9fTGlzdC8uL3NyYy91dGlscy5qcyIsIndlYnBhY2s6Ly9Ub19Eb19MaXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL1RvX0RvX0xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL1RvX0RvX0xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9Ub19Eb19MaXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vVG9fRG9fTGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzb3J0SXRlbXMgfSBmcm9tICcuL3V0aWxzJztcblxuY29uc3QgdGFza3MgPSBbXG4gIHtcbiAgICBkZXNjcmlwdGlvbjogJzEuTGlzdCBzdHJ1Y3R1cmUuJyxcbiAgICBjb21wbGV0ZWQ6IGZhbHNlLFxuICAgIGluZGV4OiA3LFxuICB9LFxuICB7XG4gICAgZGVzY3JpcHRpb246ICcyLkludGVyYWN0aXZlIGxpc3QuJyxcbiAgICBjb21wbGV0ZWQ6IGZhbHNlLFxuICAgIGluZGV4OiA0LFxuICB9LFxuICB7XG4gICAgZGVzY3JpcHRpb246ICczLkFkZCBhbmQgcmVtb3ZlIGl0ZW1zLicsXG4gICAgY29tcGxldGVkOiBmYWxzZSxcbiAgICBpbmRleDogMixcbiAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBzb3J0ZWRUYXNrcyA9IHNvcnRJdGVtcyh0YXNrcyk7XG5cblxuXG5jb25zdCB0YXNrTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWNvbnRhaW5lciAudGFza3MnKTtcblxuZXhwb3J0IGNvbnN0IGdldFRhc2sgPSAodGFzaykgPT4ge1xuICAgIHRhc2tMaXN0LmlubmVySFRNTCArPSBgPGxpIGNsYXNzPVwiYm9va1wiPlxuICAgIDxzcGFuIGNsYXNzPVwibGVmdFwiPlxuICAgICAgPGlucHV0IGlkPSR7dGFzay5pbmRleH0gdHlwZT1cImNoZWNrYm94XCIgLz5cbiAgICAgIDxsYWJlbCBmb3I9JHt0YXNrLmluZGV4fT4ke3Rhc2suZGVzY3JpcHRpb259PC9sYWJlbD5cbiAgICA8L3NwYW4+XG4gICAgPHNwYW4gY2xhc3M9XCJyaWdodFwiPlxuICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtZWxsaXBzaXMtdlwiPjwvaT5cbiAgICA8L3NwYW4+XG4gIDwvbGk+YDtcbiAgLy8gcmV0dXJuIHRhc2tMaXN0O1xufTtcblxuXG5cblxuICAiLCJcbmV4cG9ydCBjb25zdCBzb3J0SXRlbXMgPSAoaXRlbXMpID0+IHtcbiAgaXRlbXMuc29ydCgoYSwgYikgPT4ge1xuICAgIHJldHVybiAoYS5pbmRleCAtIGIuaW5kZXgpO1xuICB9KTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgZ2V0VGFzaywgc29ydGVkVGFza3MgfSBmcm9tICcuL2RhdGEnO1xuXG53aW5kb3cub25sb2FkID0gKCkgPT4ge1xuY29uc29sZS5sb2coc29ydGVkVGFza3MpO1xuY29uc29sZS5sb2coJ2tlJyk7XG4gc29ydGVkVGFza3MuZm9yRWFjaCh0YXNrID0+IHtcbiAgICBnZXRUYXNrKHRhc2spO1xuICB9KTtcbn1cblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKCdtZScpO1xufSlcblxuXG5cblxuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==