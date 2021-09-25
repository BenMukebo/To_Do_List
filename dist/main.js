/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --primary: rgb(71, 69, 69);\n  --secondary: #ccc;\n  --border: rgb(221, 219, 219);\n  --background: rgb(243, 243, 243);\n}\n\n* {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\n.d-flex {\n  display: flex;\n}\n\n.flex-center {\n  align-items: center;\n}\n\nbody {\n  width: 100%;\n  min-height: 100vh;\n  background-color: var(--background);\n  font-size: 1.4rem;\n}\n\ni {\n  cursor: pointer;\n  color: var(--secondary);\n}\n\nsection {\n  background-color: #fff;\n  width: 50%;\n  min-width: 300px;\n  box-shadow: 0 3px 10px rgb(0 0 0 / 20%);\n  border-radius: 6px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.header {\n  border-bottom: 1px solid var(--border);\n  padding: 1.2rem 1.5rem;\n  color: var(--primary);\n  justify-content: space-between;\n}\n\nform button {\n  background-color: transparent;\n  border: none;\n  padding: 0.6rem;\n}\n\nform button i {\n  transform: rotate(90deg);\n  font-size: 1rem;\n  font-weight: 400;\n}\n\n.header i {\n  transform: rotate(90deg);\n  font-size: 18px;\n}\n\nform > div {\n  border-bottom: 1px solid var(--border);\n  padding: 0.7rem 1.5rem;\n  justify-content: space-between;\n  width: 100%;\n}\n\nform input {\n  border: none;\n  outline: none;\n  min-width: 250px;\n  padding: 0.8rem 0;\n  flex: 1;\n}\n\nform input,\nform input::-webkit-input-placeholder {\n  font-size: 1.2rem;\n  font-family: 'Roboto', sans-serif;\n  font-style: italic;\n  font-weight: 100;\n  color: rgb(131, 130, 130);\n}\n\n.tasks-list {\n  min-width: 100%;\n}\n\n.tasks-list li {\n  width: 100%;\n  list-style: none;\n  border-bottom: 1px solid var(--border);\n  padding: 0.7rem 1.2rem;\n}\n\n/* .tasks-list li.active {\n  background-color: #faf3db;\n} */\n\n.tasks-list li label {\n  margin-left: 6px;\n  font-size: inherit;\n  color: var(--primary);\n  cursor: pointer;\n}\n\n/* .tasks-list li label.compeleted {\n  text-decoration: line-through;\n  font-style: italic;\n  color: var(--secondary);\n} */\n\n.tasks-list li i:hover {\n  color: var(--primary);\n  cursor: pointer;\n}\n\n.clear-btn button {\n  width: 100%;\n  font-size: inherit;\n  padding: 1.2rem;\n  border: none;\n  outline: none;\n  color: var(--secondary);\n  background-color: var(--background);\n  border-bottom-left-radius: 8px;\n  border-bottom-right-radius: 8px;\n  cursor: pointer;\n}\n\n/* .clear-btn button:active {\n  text-decoration: underline;\n} */\n\n.task-container .task-details {\n  flex: 1;\n  display: flex;\n  padding: 0 1rem;\n}\n\n.task-container .task-details span {\n  margin-left: 6px;\n  font-size: inherit;\n  color: var(--primary);\n}\n\n.task-container .task-details span.compeleted {\n  text-decoration: line-through;\n}\n\n.task-container .task-details input {\n  border: none;\n  font-size: inherit;\n  color: var(--primary);\n  outline: none;\n  flex: 1;\n  display: none;\n  background-color: transparent;\n}\n\n.task-container .task-action-btns button {\n  width: 2.2rem;\n  background-color: transparent;\n  border: none;\n  cursor: pointer;\n  padding: 0.6rem 0;\n}\n\n.task-container .task-action-btns button:last-child {\n  display: none;\n}\n\n.edit-task-form {\n  flex: 1;\n  display: flex;\n}\n\n.task-container .task-action-btns button i {\n  font-size: 1.2rem;\n}\n\n.task-container.edit-mode {\n  background-color: #faf3db;\n}\n\n.task-container.edit-mode .task-action-btns button:last-child {\n  display: block;\n}\n\n.task-details.completed span {\n  text-decoration: line-through;\n}\n\n.task-container.edit-mode .task-action-btns button:first-child {\n  display: none;\n}\n\n.task-container.edit-mode .task-details input {\n  display: block;\n}\n\n.task-container.edit-mode .task-details span {\n  display: none;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,0BAA0B;EAC1B,iBAAiB;EACjB,4BAA4B;EAC5B,gCAAgC;AAClC;;AAEA;EACE,sBAAsB;EACtB,UAAU;EACV,SAAS;AACX;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,iBAAiB;EACjB,mCAAmC;EACnC,iBAAiB;AACnB;;AAEA;EACE,eAAe;EACf,uBAAuB;AACzB;;AAEA;EACE,sBAAsB;EACtB,UAAU;EACV,gBAAgB;EAChB,uCAAuC;EACvC,kBAAkB;EAClB,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,gCAAgC;AAClC;;AAEA;EACE,sCAAsC;EACtC,sBAAsB;EACtB,qBAAqB;EACrB,8BAA8B;AAChC;;AAEA;EACE,6BAA6B;EAC7B,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,wBAAwB;EACxB,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,wBAAwB;EACxB,eAAe;AACjB;;AAEA;EACE,sCAAsC;EACtC,sBAAsB;EACtB,8BAA8B;EAC9B,WAAW;AACb;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,gBAAgB;EAChB,iBAAiB;EACjB,OAAO;AACT;;AAEA;;EAEE,iBAAiB;EACjB,iCAAiC;EACjC,kBAAkB;EAClB,gBAAgB;EAChB,yBAAyB;AAC3B;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,gBAAgB;EAChB,sCAAsC;EACtC,sBAAsB;AACxB;;AAEA;;GAEG;;AAEH;EACE,gBAAgB;EAChB,kBAAkB;EAClB,qBAAqB;EACrB,eAAe;AACjB;;AAEA;;;;GAIG;;AAEH;EACE,qBAAqB;EACrB,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,eAAe;EACf,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,mCAAmC;EACnC,8BAA8B;EAC9B,+BAA+B;EAC/B,eAAe;AACjB;;AAEA;;GAEG;;AAEH;EACE,OAAO;EACP,aAAa;EACb,eAAe;AACjB;;AAEA;EACE,gBAAgB;EAChB,kBAAkB;EAClB,qBAAqB;AACvB;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,YAAY;EACZ,kBAAkB;EAClB,qBAAqB;EACrB,aAAa;EACb,OAAO;EACP,aAAa;EACb,6BAA6B;AAC/B;;AAEA;EACE,aAAa;EACb,6BAA6B;EAC7B,YAAY;EACZ,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,OAAO;EACP,aAAa;AACf;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,aAAa;AACf","sourcesContent":[":root {\n  --primary: rgb(71, 69, 69);\n  --secondary: #ccc;\n  --border: rgb(221, 219, 219);\n  --background: rgb(243, 243, 243);\n}\n\n* {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\n.d-flex {\n  display: flex;\n}\n\n.flex-center {\n  align-items: center;\n}\n\nbody {\n  width: 100%;\n  min-height: 100vh;\n  background-color: var(--background);\n  font-size: 1.4rem;\n}\n\ni {\n  cursor: pointer;\n  color: var(--secondary);\n}\n\nsection {\n  background-color: #fff;\n  width: 50%;\n  min-width: 300px;\n  box-shadow: 0 3px 10px rgb(0 0 0 / 20%);\n  border-radius: 6px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.header {\n  border-bottom: 1px solid var(--border);\n  padding: 1.2rem 1.5rem;\n  color: var(--primary);\n  justify-content: space-between;\n}\n\nform button {\n  background-color: transparent;\n  border: none;\n  padding: 0.6rem;\n}\n\nform button i {\n  transform: rotate(90deg);\n  font-size: 1rem;\n  font-weight: 400;\n}\n\n.header i {\n  transform: rotate(90deg);\n  font-size: 18px;\n}\n\nform > div {\n  border-bottom: 1px solid var(--border);\n  padding: 0.7rem 1.5rem;\n  justify-content: space-between;\n  width: 100%;\n}\n\nform input {\n  border: none;\n  outline: none;\n  min-width: 250px;\n  padding: 0.8rem 0;\n  flex: 1;\n}\n\nform input,\nform input::-webkit-input-placeholder {\n  font-size: 1.2rem;\n  font-family: 'Roboto', sans-serif;\n  font-style: italic;\n  font-weight: 100;\n  color: rgb(131, 130, 130);\n}\n\n.tasks-list {\n  min-width: 100%;\n}\n\n.tasks-list li {\n  width: 100%;\n  list-style: none;\n  border-bottom: 1px solid var(--border);\n  padding: 0.7rem 1.2rem;\n}\n\n/* .tasks-list li.active {\n  background-color: #faf3db;\n} */\n\n.tasks-list li label {\n  margin-left: 6px;\n  font-size: inherit;\n  color: var(--primary);\n  cursor: pointer;\n}\n\n/* .tasks-list li label.compeleted {\n  text-decoration: line-through;\n  font-style: italic;\n  color: var(--secondary);\n} */\n\n.tasks-list li i:hover {\n  color: var(--primary);\n  cursor: pointer;\n}\n\n.clear-btn button {\n  width: 100%;\n  font-size: inherit;\n  padding: 1.2rem;\n  border: none;\n  outline: none;\n  color: var(--secondary);\n  background-color: var(--background);\n  border-bottom-left-radius: 8px;\n  border-bottom-right-radius: 8px;\n  cursor: pointer;\n}\n\n/* .clear-btn button:active {\n  text-decoration: underline;\n} */\n\n.task-container .task-details {\n  flex: 1;\n  display: flex;\n  padding: 0 1rem;\n}\n\n.task-container .task-details span {\n  margin-left: 6px;\n  font-size: inherit;\n  color: var(--primary);\n}\n\n.task-container .task-details span.compeleted {\n  text-decoration: line-through;\n}\n\n.task-container .task-details input {\n  border: none;\n  font-size: inherit;\n  color: var(--primary);\n  outline: none;\n  flex: 1;\n  display: none;\n  background-color: transparent;\n}\n\n.task-container .task-action-btns button {\n  width: 2.2rem;\n  background-color: transparent;\n  border: none;\n  cursor: pointer;\n  padding: 0.6rem 0;\n}\n\n.task-container .task-action-btns button:last-child {\n  display: none;\n}\n\n.edit-task-form {\n  flex: 1;\n  display: flex;\n}\n\n.task-container .task-action-btns button i {\n  font-size: 1.2rem;\n}\n\n.task-container.edit-mode {\n  background-color: #faf3db;\n}\n\n.task-container.edit-mode .task-action-btns button:last-child {\n  display: block;\n}\n\n.task-details.completed span {\n  text-decoration: line-through;\n}\n\n.task-container.edit-mode .task-action-btns button:first-child {\n  display: none;\n}\n\n.task-container.edit-mode .task-details input {\n  display: block;\n}\n\n.task-container.edit-mode .task-details span {\n  display: none;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var _i = 0; _i < this.length; _i++) {
        var id = this[_i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i2 = 0; _i2 < modules.length; _i2++) {
      var item = [].concat(modules[_i2]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/Task.js":
/*!*********************!*\
  !*** ./src/Task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Task {
  constructor() {
    this.tasks = [];
  }

  get() {
    return this.tasks;
  }

  add(task) {
    this.tasks.push(task);
  }

  update(taskId, task) {
    this.tasks[taskId] = task;
  }

  remove(taskId) {
    this.tasks = this.tasks.filter((task) => task.index.toString() !== taskId);
  }

  clearCompleted() {
    const newTasks = this.tasts.filter((task) => !task.completed);
    this.tasks = newTasks.map((task, index) => {
      task.index = index + 1;
      return task;
    });
  }
}

const task = new Task();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (task);

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _taskActions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskActions.js */ "./src/taskActions.js");


const tasksList = document.querySelector('.tasks-list');
const dom = (() => {
  const showTrashIcon = () => {
    const editBtns = document.querySelectorAll('.task-edit-btn');

    editBtns.forEach((editBtn) => {
      editBtn.addEventListener('click', (e) => {
        const tasksElements = document.querySelectorAll('.task-container');
        tasksElements.forEach((taskElm) => {
          taskElm.classList.remove('edit-mode');
        });
        const parent = e.target.parentNode.parentNode.parentNode;
        parent.classList.add('edit-mode');
      });
    });
  };

  const renderTasks = (tasks) => {
    tasksList.innerHTML = '';
    tasks.map((task) => {
      const taskItem = document.createElement('li');
      taskItem.classList.add('task-container', 'd-flex', 'flex-center');
      taskItem.innerHTML = `
              <div class="">
                <input type="checkbox" ${
  task.completed ? 'checked' : ''
  } data-task-id="${task.index}" class="task-checkbox"/>
              </div>
              <div class="${
  task.completed ? 'task-details completed' : 'task-details'
  }">
                <span>${task.description}</span>
                <form class="edit-task-form" data-task-id="${task.index}">
                  <input type="text" value="${
  task.description
  }" class="task-edit" />
                </form>
              </div>
              <div class="task-action-btns">
                <button class="task-edit-btn">
                  <i class="fas fa-ellipsis-v"></i>
                </button>
                <button class="task-delete-btn" data-task-id="${task.index}">
                  <i class="fas fa-trash-alt"></i>
                </button>
              </div>
            `;
      showTrashIcon();
      dom.deleteTaskHandler();
      dom.editTastSubmit();
      dom.completeTaskHandler();
      dom.clearCompletedHandler();
      return tasksList.appendChild(taskItem);
    });
  };

  const editTastSubmit = () => {
    const editTaskForms = document.querySelectorAll('.edit-task-form');
    editTaskForms.forEach((form) => {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const taskId = form.getAttribute('data-task-id');
        if (form.elements[0].value.trim() === '') return;
        const { tasks } = _taskActions_js__WEBPACK_IMPORTED_MODULE_0__["default"].updateTask(
          taskId,
          form.elements[0].value,
        );

        renderTasks(tasks);
      });
    });
  };

  const completeTaskHandler = () => {
    const checkboxes = document.querySelectorAll('.task-checkbox');
    checkboxes.forEach((checkbox) => {
      checkbox.addEventListener('change', (e) => {
        const taskId = e.target.getAttribute('data-task-id');
        const { tasks } = _taskActions_js__WEBPACK_IMPORTED_MODULE_0__["default"].completeTask(taskId, e.target.checked);
        renderTasks(tasks);
      });
    });
  };

  const deleteTaskHandler = () => {
    const deleteBtns = document.querySelectorAll('.task-delete-btn');
    deleteBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const taskId = btn.getAttribute('data-task-id');
        const tasks = _taskActions_js__WEBPACK_IMPORTED_MODULE_0__["default"].deleteTask(taskId);
        renderTasks(tasks);
      });
    });
  };

  const clearCompletedHandler = () => {
    const clearCompletedBtn = document.querySelector('.clear-completed-btn');
    clearCompletedBtn.addEventListener('click', () => {
      const tasks = _taskActions_js__WEBPACK_IMPORTED_MODULE_0__["default"].clearCompleted();
      renderTasks(tasks);
    });
  };

  const updateUI = (tasks) => {
    renderTasks(tasks);
  };

  return {
    renderTasks,
    editTastSubmit,
    showTrashIcon,
    updateUI,
    completeTaskHandler,
    deleteTaskHandler,
    clearCompletedHandler,
  };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dom);


/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const storage = {
  //  function manupilate the local storage
  get: (key) => {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  },
  set: (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  },
  remove: (key) => {
    localStorage.removeItem(key);
  },
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (storage);

/***/ }),

/***/ "./src/taskActions.js":
/*!****************************!*\
  !*** ./src/taskActions.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage.js */ "./src/storage.js");


const taskActions = (() => {
  const addTask = (description) => {
    const tasks = _storage_js__WEBPACK_IMPORTED_MODULE_0__["default"].get('tasks');
    const task = {
      index: tasks.length + 1,
      completed: false,
      description,
    };
    tasks.push(task);
    _storage_js__WEBPACK_IMPORTED_MODULE_0__["default"].set('tasks', tasks);
    return task;
  };

  const updateTask = (index, description) => {
    const tasks = _storage_js__WEBPACK_IMPORTED_MODULE_0__["default"].get('tasks');
    const task = tasks[index - 1];
    task.description = description;
    _storage_js__WEBPACK_IMPORTED_MODULE_0__["default"].set('tasks', tasks);
    return { task, tasks };
  };

  const completeTask = (index, checked) => {
    const tasks = _storage_js__WEBPACK_IMPORTED_MODULE_0__["default"].get('tasks');
    const task = tasks[index - 1];
    task.completed = checked;
    _storage_js__WEBPACK_IMPORTED_MODULE_0__["default"].set('tasks', tasks);
    return { task, tasks };
  };

  const deleteTask = (index) => {
    let tasks = _storage_js__WEBPACK_IMPORTED_MODULE_0__["default"].get('tasks');
    tasks.splice(index - 1, 1);
    tasks = tasks.map((task, i) => {
      task.index = i + 1;
      return task;
    });
    _storage_js__WEBPACK_IMPORTED_MODULE_0__["default"].set('tasks', tasks);
    return tasks;
  };

  const clearCompleted = () => {
    const tasks = _storage_js__WEBPACK_IMPORTED_MODULE_0__["default"].get('tasks');
    let unCompletedTasks = tasks.filter((task) => !task.completed);
    unCompletedTasks = unCompletedTasks.map((task, index) => {
      task.index = index + 1;
      return task;
    });
    _storage_js__WEBPACK_IMPORTED_MODULE_0__["default"].set('tasks', unCompletedTasks);
    return unCompletedTasks;
  };

  return {
    addTask,
    updateTask,
    completeTask,
    deleteTask,
    clearCompleted,
  };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (taskActions);

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
/******/ 			id: moduleId,
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage.js */ "./src/storage.js");
/* harmony import */ var _taskActions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./taskActions.js */ "./src/taskActions.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dom.js */ "./src/dom.js");
/* harmony import */ var _Task_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Task.js */ "./src/Task.js");






const form = document.getElementById('form');
const todoTextInput = document.getElementById('add-book');

const getDefaultTasks = () => {
  const tasks = _Task_js__WEBPACK_IMPORTED_MODULE_4__["default"].get();
  const storedTasks = _storage_js__WEBPACK_IMPORTED_MODULE_1__["default"].get('tasks');
  if (storedTasks) {
    storedTasks.map((t) => _Task_js__WEBPACK_IMPORTED_MODULE_4__["default"].add(t));
    _dom_js__WEBPACK_IMPORTED_MODULE_3__["default"].renderTasks(storedTasks);
  } else {
    _storage_js__WEBPACK_IMPORTED_MODULE_1__["default"].set('tasks', tasks);
    _dom_js__WEBPACK_IMPORTED_MODULE_3__["default"].renderTasks(tasks);
  }
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const savedTask = _taskActions_js__WEBPACK_IMPORTED_MODULE_2__["default"].addTask(todoTextInput.value);
  _Task_js__WEBPACK_IMPORTED_MODULE_4__["default"].add(savedTask);
  const tasks = _Task_js__WEBPACK_IMPORTED_MODULE_4__["default"].get();
  _dom_js__WEBPACK_IMPORTED_MODULE_3__["default"].renderTasks(tasks);
});

getDefaultTasks();
_dom_js__WEBPACK_IMPORTED_MODULE_3__["default"].updateUI(_storage_js__WEBPACK_IMPORTED_MODULE_1__["default"].get('tasks'));
_dom_js__WEBPACK_IMPORTED_MODULE_3__["default"].showTrashIcon();
_dom_js__WEBPACK_IMPORTED_MODULE_3__["default"].editTastSubmit(_Task_js__WEBPACK_IMPORTED_MODULE_4__["default"]);
_dom_js__WEBPACK_IMPORTED_MODULE_3__["default"].completeTaskHandler();
_dom_js__WEBPACK_IMPORTED_MODULE_3__["default"].deleteTaskHandler();
_dom_js__WEBPACK_IMPORTED_MODULE_3__["default"].clearCompletedHandler();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOcUI7QUFDYztBQUNRO0FBQ2hCO0FBQ0U7O0FBRTdCO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0Isb0RBQVE7QUFDeEIsc0JBQXNCLHVEQUFXO0FBQ2pDO0FBQ0EsMkJBQTJCLG9EQUFRO0FBQ25DLElBQUksMkRBQWU7QUFDbkIsSUFBSTtBQUNKLElBQUksdURBQVc7QUFDZixJQUFJLDJEQUFlO0FBQ25CO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9CQUFvQiwrREFBbUI7QUFDdkMsRUFBRSxvREFBUTtBQUNWLGdCQUFnQixvREFBUTtBQUN4QixFQUFFLDJEQUFlO0FBQ2pCLENBQUM7O0FBRUQ7QUFDQSx3REFBWSxDQUFDLHVEQUFXO0FBQ3hCLDZEQUFpQjtBQUNqQiw4REFBa0IsQ0FBQyxnREFBSTtBQUN2QixtRUFBdUI7QUFDdkIsaUVBQXFCO0FBQ3JCLHFFQUF5QixHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vVG9fRG9fTGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vVG9fRG9fTGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vVG9fRG9fTGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL1RvX0RvX0xpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vVG9fRG9fTGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9Ub19Eb19MaXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9Ub19Eb19MaXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL1RvX0RvX0xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vVG9fRG9fTGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL1RvX0RvX0xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9Ub19Eb19MaXN0Ly4vc3JjL1Rhc2suanMiLCJ3ZWJwYWNrOi8vVG9fRG9fTGlzdC8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vVG9fRG9fTGlzdC8uL3NyYy9zdG9yYWdlLmpzIiwid2VicGFjazovL1RvX0RvX0xpc3QvLi9zcmMvdGFza0FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vVG9fRG9fTGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9Ub19Eb19MaXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL1RvX0RvX0xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL1RvX0RvX0xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9Ub19Eb19MaXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vVG9fRG9fTGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gIC0tcHJpbWFyeTogcmdiKDcxLCA2OSwgNjkpO1xcbiAgLS1zZWNvbmRhcnk6ICNjY2M7XFxuICAtLWJvcmRlcjogcmdiKDIyMSwgMjE5LCAyMTkpO1xcbiAgLS1iYWNrZ3JvdW5kOiByZ2IoMjQzLCAyNDMsIDI0Myk7XFxufVxcblxcbioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi5kLWZsZXgge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmZsZXgtY2VudGVyIHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmJvZHkge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQpO1xcbiAgZm9udC1zaXplOiAxLjRyZW07XFxufVxcblxcbmkge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XFxufVxcblxcbnNlY3Rpb24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIHdpZHRoOiA1MCU7XFxuICBtaW4td2lkdGg6IDMwMHB4O1xcbiAgYm94LXNoYWRvdzogMCAzcHggMTBweCByZ2IoMCAwIDAgLyAyMCUpO1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG59XFxuXFxuLmhlYWRlciB7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcXG4gIHBhZGRpbmc6IDEuMnJlbSAxLjVyZW07XFxuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbmZvcm0gYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgcGFkZGluZzogMC42cmVtO1xcbn1cXG5cXG5mb3JtIGJ1dHRvbiBpIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbi5oZWFkZXIgaSB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxuICBmb250LXNpemU6IDE4cHg7XFxufVxcblxcbmZvcm0gPiBkaXYge1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7XFxuICBwYWRkaW5nOiAwLjdyZW0gMS41cmVtO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbmZvcm0gaW5wdXQge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIG1pbi13aWR0aDogMjUwcHg7XFxuICBwYWRkaW5nOiAwLjhyZW0gMDtcXG4gIGZsZXg6IDE7XFxufVxcblxcbmZvcm0gaW5wdXQsXFxuZm9ybSBpbnB1dDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XFxuICBjb2xvcjogcmdiKDEzMSwgMTMwLCAxMzApO1xcbn1cXG5cXG4udGFza3MtbGlzdCB7XFxuICBtaW4td2lkdGg6IDEwMCU7XFxufVxcblxcbi50YXNrcy1saXN0IGxpIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xcbiAgcGFkZGluZzogMC43cmVtIDEuMnJlbTtcXG59XFxuXFxuLyogLnRhc2tzLWxpc3QgbGkuYWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWYzZGI7XFxufSAqL1xcblxcbi50YXNrcy1saXN0IGxpIGxhYmVsIHtcXG4gIG1hcmdpbi1sZWZ0OiA2cHg7XFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qIC50YXNrcy1saXN0IGxpIGxhYmVsLmNvbXBlbGV0ZWQge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcXG59ICovXFxuXFxuLnRhc2tzLWxpc3QgbGkgaTpob3ZlciB7XFxuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5jbGVhci1idG4gYnV0dG9uIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgcGFkZGluZzogMS4ycmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZCk7XFxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA4cHg7XFxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogOHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKiAuY2xlYXItYnRuIGJ1dHRvbjphY3RpdmUge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufSAqL1xcblxcbi50YXNrLWNvbnRhaW5lciAudGFzay1kZXRhaWxzIHtcXG4gIGZsZXg6IDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcGFkZGluZzogMCAxcmVtO1xcbn1cXG5cXG4udGFzay1jb250YWluZXIgLnRhc2stZGV0YWlscyBzcGFuIHtcXG4gIG1hcmdpbi1sZWZ0OiA2cHg7XFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XFxufVxcblxcbi50YXNrLWNvbnRhaW5lciAudGFzay1kZXRhaWxzIHNwYW4uY29tcGVsZXRlZCB7XFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuXFxuLnRhc2stY29udGFpbmVyIC50YXNrLWRldGFpbHMgaW5wdXQge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGZsZXg6IDE7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi50YXNrLWNvbnRhaW5lciAudGFzay1hY3Rpb24tYnRucyBidXR0b24ge1xcbiAgd2lkdGg6IDIuMnJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcGFkZGluZzogMC42cmVtIDA7XFxufVxcblxcbi50YXNrLWNvbnRhaW5lciAudGFzay1hY3Rpb24tYnRucyBidXR0b246bGFzdC1jaGlsZCB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uZWRpdC10YXNrLWZvcm0ge1xcbiAgZmxleDogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi50YXNrLWNvbnRhaW5lciAudGFzay1hY3Rpb24tYnRucyBidXR0b24gaSB7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuLnRhc2stY29udGFpbmVyLmVkaXQtbW9kZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmM2RiO1xcbn1cXG5cXG4udGFzay1jb250YWluZXIuZWRpdC1tb2RlIC50YXNrLWFjdGlvbi1idG5zIGJ1dHRvbjpsYXN0LWNoaWxkIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4udGFzay1kZXRhaWxzLmNvbXBsZXRlZCBzcGFuIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbn1cXG5cXG4udGFzay1jb250YWluZXIuZWRpdC1tb2RlIC50YXNrLWFjdGlvbi1idG5zIGJ1dHRvbjpmaXJzdC1jaGlsZCB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4udGFzay1jb250YWluZXIuZWRpdC1tb2RlIC50YXNrLWRldGFpbHMgaW5wdXQge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi50YXNrLWNvbnRhaW5lci5lZGl0LW1vZGUgLnRhc2stZGV0YWlscyBzcGFuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSwwQkFBMEI7RUFDMUIsaUJBQWlCO0VBQ2pCLDRCQUE0QjtFQUM1QixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsVUFBVTtFQUNWLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsbUNBQW1DO0VBQ25DLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7RUFDZix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQix1Q0FBdUM7RUFDdkMsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLHNDQUFzQztFQUN0QyxzQkFBc0I7RUFDdEIscUJBQXFCO0VBQ3JCLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxzQ0FBc0M7RUFDdEMsc0JBQXNCO0VBQ3RCLDhCQUE4QjtFQUM5QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsT0FBTztBQUNUOztBQUVBOztFQUVFLGlCQUFpQjtFQUNqQixpQ0FBaUM7RUFDakMsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixzQ0FBc0M7RUFDdEMsc0JBQXNCO0FBQ3hCOztBQUVBOztHQUVHOztBQUVIO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsZUFBZTtBQUNqQjs7QUFFQTs7OztHQUlHOztBQUVIO0VBQ0UscUJBQXFCO0VBQ3JCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQ0FBbUM7RUFDbkMsOEJBQThCO0VBQzlCLCtCQUErQjtFQUMvQixlQUFlO0FBQ2pCOztBQUVBOztHQUVHOztBQUVIO0VBQ0UsT0FBTztFQUNQLGFBQWE7RUFDYixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixhQUFhO0VBQ2IsT0FBTztFQUNQLGFBQWE7RUFDYiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLFlBQVk7RUFDWixlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsT0FBTztFQUNQLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtBQUNmXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gIC0tcHJpbWFyeTogcmdiKDcxLCA2OSwgNjkpO1xcbiAgLS1zZWNvbmRhcnk6ICNjY2M7XFxuICAtLWJvcmRlcjogcmdiKDIyMSwgMjE5LCAyMTkpO1xcbiAgLS1iYWNrZ3JvdW5kOiByZ2IoMjQzLCAyNDMsIDI0Myk7XFxufVxcblxcbioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi5kLWZsZXgge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmZsZXgtY2VudGVyIHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmJvZHkge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQpO1xcbiAgZm9udC1zaXplOiAxLjRyZW07XFxufVxcblxcbmkge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XFxufVxcblxcbnNlY3Rpb24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIHdpZHRoOiA1MCU7XFxuICBtaW4td2lkdGg6IDMwMHB4O1xcbiAgYm94LXNoYWRvdzogMCAzcHggMTBweCByZ2IoMCAwIDAgLyAyMCUpO1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG59XFxuXFxuLmhlYWRlciB7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcXG4gIHBhZGRpbmc6IDEuMnJlbSAxLjVyZW07XFxuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbmZvcm0gYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgcGFkZGluZzogMC42cmVtO1xcbn1cXG5cXG5mb3JtIGJ1dHRvbiBpIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbi5oZWFkZXIgaSB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxuICBmb250LXNpemU6IDE4cHg7XFxufVxcblxcbmZvcm0gPiBkaXYge1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7XFxuICBwYWRkaW5nOiAwLjdyZW0gMS41cmVtO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbmZvcm0gaW5wdXQge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIG1pbi13aWR0aDogMjUwcHg7XFxuICBwYWRkaW5nOiAwLjhyZW0gMDtcXG4gIGZsZXg6IDE7XFxufVxcblxcbmZvcm0gaW5wdXQsXFxuZm9ybSBpbnB1dDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XFxuICBjb2xvcjogcmdiKDEzMSwgMTMwLCAxMzApO1xcbn1cXG5cXG4udGFza3MtbGlzdCB7XFxuICBtaW4td2lkdGg6IDEwMCU7XFxufVxcblxcbi50YXNrcy1saXN0IGxpIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xcbiAgcGFkZGluZzogMC43cmVtIDEuMnJlbTtcXG59XFxuXFxuLyogLnRhc2tzLWxpc3QgbGkuYWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWYzZGI7XFxufSAqL1xcblxcbi50YXNrcy1saXN0IGxpIGxhYmVsIHtcXG4gIG1hcmdpbi1sZWZ0OiA2cHg7XFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qIC50YXNrcy1saXN0IGxpIGxhYmVsLmNvbXBlbGV0ZWQge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcXG59ICovXFxuXFxuLnRhc2tzLWxpc3QgbGkgaTpob3ZlciB7XFxuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5jbGVhci1idG4gYnV0dG9uIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgcGFkZGluZzogMS4ycmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZCk7XFxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA4cHg7XFxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogOHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKiAuY2xlYXItYnRuIGJ1dHRvbjphY3RpdmUge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufSAqL1xcblxcbi50YXNrLWNvbnRhaW5lciAudGFzay1kZXRhaWxzIHtcXG4gIGZsZXg6IDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcGFkZGluZzogMCAxcmVtO1xcbn1cXG5cXG4udGFzay1jb250YWluZXIgLnRhc2stZGV0YWlscyBzcGFuIHtcXG4gIG1hcmdpbi1sZWZ0OiA2cHg7XFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XFxufVxcblxcbi50YXNrLWNvbnRhaW5lciAudGFzay1kZXRhaWxzIHNwYW4uY29tcGVsZXRlZCB7XFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuXFxuLnRhc2stY29udGFpbmVyIC50YXNrLWRldGFpbHMgaW5wdXQge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGZsZXg6IDE7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi50YXNrLWNvbnRhaW5lciAudGFzay1hY3Rpb24tYnRucyBidXR0b24ge1xcbiAgd2lkdGg6IDIuMnJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcGFkZGluZzogMC42cmVtIDA7XFxufVxcblxcbi50YXNrLWNvbnRhaW5lciAudGFzay1hY3Rpb24tYnRucyBidXR0b246bGFzdC1jaGlsZCB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uZWRpdC10YXNrLWZvcm0ge1xcbiAgZmxleDogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi50YXNrLWNvbnRhaW5lciAudGFzay1hY3Rpb24tYnRucyBidXR0b24gaSB7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuLnRhc2stY29udGFpbmVyLmVkaXQtbW9kZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmM2RiO1xcbn1cXG5cXG4udGFzay1jb250YWluZXIuZWRpdC1tb2RlIC50YXNrLWFjdGlvbi1idG5zIGJ1dHRvbjpsYXN0LWNoaWxkIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4udGFzay1kZXRhaWxzLmNvbXBsZXRlZCBzcGFuIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbn1cXG5cXG4udGFzay1jb250YWluZXIuZWRpdC1tb2RlIC50YXNrLWFjdGlvbi1idG5zIGJ1dHRvbjpmaXJzdC1jaGlsZCB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4udGFzay1jb250YWluZXIuZWRpdC1tb2RlIC50YXNrLWRldGFpbHMgaW5wdXQge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi50YXNrLWNvbnRhaW5lci5lZGl0LW1vZGUgLnRhc2stZGV0YWlscyBzcGFuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCB0aGlzLmxlbmd0aDsgX2krKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW19pXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pMiA9IDA7IF9pMiA8IG1vZHVsZXMubGVuZ3RoOyBfaTIrKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaTJdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjbGFzcyBUYXNrIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy50YXNrcyA9IFtdO1xuICB9XG5cbiAgZ2V0KCkge1xuICAgIHJldHVybiB0aGlzLnRhc2tzO1xuICB9XG5cbiAgYWRkKHRhc2spIHtcbiAgICB0aGlzLnRhc2tzLnB1c2godGFzayk7XG4gIH1cblxuICB1cGRhdGUodGFza0lkLCB0YXNrKSB7XG4gICAgdGhpcy50YXNrc1t0YXNrSWRdID0gdGFzaztcbiAgfVxuXG4gIHJlbW92ZSh0YXNrSWQpIHtcbiAgICB0aGlzLnRhc2tzID0gdGhpcy50YXNrcy5maWx0ZXIoKHRhc2spID0+IHRhc2suaW5kZXgudG9TdHJpbmcoKSAhPT0gdGFza0lkKTtcbiAgfVxuXG4gIGNsZWFyQ29tcGxldGVkKCkge1xuICAgIGNvbnN0IG5ld1Rhc2tzID0gdGhpcy50YXN0cy5maWx0ZXIoKHRhc2spID0+ICF0YXNrLmNvbXBsZXRlZCk7XG4gICAgdGhpcy50YXNrcyA9IG5ld1Rhc2tzLm1hcCgodGFzaywgaW5kZXgpID0+IHtcbiAgICAgIHRhc2suaW5kZXggPSBpbmRleCArIDE7XG4gICAgICByZXR1cm4gdGFzaztcbiAgICB9KTtcbiAgfVxufVxuXG5jb25zdCB0YXNrID0gbmV3IFRhc2soKTtcblxuZXhwb3J0IGRlZmF1bHQgdGFzazsiLCJpbXBvcnQgdGFza0FjdGlvbnMgZnJvbSAnLi90YXNrQWN0aW9ucy5qcyc7XG5cbmNvbnN0IHRhc2tzTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrcy1saXN0Jyk7XG5jb25zdCBkb20gPSAoKCkgPT4ge1xuICBjb25zdCBzaG93VHJhc2hJY29uID0gKCkgPT4ge1xuICAgIGNvbnN0IGVkaXRCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhc2stZWRpdC1idG4nKTtcblxuICAgIGVkaXRCdG5zLmZvckVhY2goKGVkaXRCdG4pID0+IHtcbiAgICAgIGVkaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBjb25zdCB0YXNrc0VsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhc2stY29udGFpbmVyJyk7XG4gICAgICAgIHRhc2tzRWxlbWVudHMuZm9yRWFjaCgodGFza0VsbSkgPT4ge1xuICAgICAgICAgIHRhc2tFbG0uY2xhc3NMaXN0LnJlbW92ZSgnZWRpdC1tb2RlJyk7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBwYXJlbnQgPSBlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZTtcbiAgICAgICAgcGFyZW50LmNsYXNzTGlzdC5hZGQoJ2VkaXQtbW9kZScpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgcmVuZGVyVGFza3MgPSAodGFza3MpID0+IHtcbiAgICB0YXNrc0xpc3QuaW5uZXJIVE1MID0gJyc7XG4gICAgdGFza3MubWFwKCh0YXNrKSA9PiB7XG4gICAgICBjb25zdCB0YXNrSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICB0YXNrSXRlbS5jbGFzc0xpc3QuYWRkKCd0YXNrLWNvbnRhaW5lcicsICdkLWZsZXgnLCAnZmxleC1jZW50ZXInKTtcbiAgICAgIHRhc2tJdGVtLmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIlwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiAke1xuICB0YXNrLmNvbXBsZXRlZCA/ICdjaGVja2VkJyA6ICcnXG4gIH0gZGF0YS10YXNrLWlkPVwiJHt0YXNrLmluZGV4fVwiIGNsYXNzPVwidGFzay1jaGVja2JveFwiLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCIke1xuICB0YXNrLmNvbXBsZXRlZCA/ICd0YXNrLWRldGFpbHMgY29tcGxldGVkJyA6ICd0YXNrLWRldGFpbHMnXG4gIH1cIj5cbiAgICAgICAgICAgICAgICA8c3Bhbj4ke3Rhc2suZGVzY3JpcHRpb259PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzPVwiZWRpdC10YXNrLWZvcm1cIiBkYXRhLXRhc2staWQ9XCIke3Rhc2suaW5kZXh9XCI+XG4gICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT1cIiR7XG4gIHRhc2suZGVzY3JpcHRpb25cbiAgfVwiIGNsYXNzPVwidGFzay1lZGl0XCIgLz5cbiAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFzay1hY3Rpb24tYnRuc1wiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJ0YXNrLWVkaXQtYnRuXCI+XG4gICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1lbGxpcHNpcy12XCI+PC9pPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJ0YXNrLWRlbGV0ZS1idG5cIiBkYXRhLXRhc2staWQ9XCIke3Rhc2suaW5kZXh9XCI+XG4gICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS10cmFzaC1hbHRcIj48L2k+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgYDtcbiAgICAgIHNob3dUcmFzaEljb24oKTtcbiAgICAgIGRvbS5kZWxldGVUYXNrSGFuZGxlcigpO1xuICAgICAgZG9tLmVkaXRUYXN0U3VibWl0KCk7XG4gICAgICBkb20uY29tcGxldGVUYXNrSGFuZGxlcigpO1xuICAgICAgZG9tLmNsZWFyQ29tcGxldGVkSGFuZGxlcigpO1xuICAgICAgcmV0dXJuIHRhc2tzTGlzdC5hcHBlbmRDaGlsZCh0YXNrSXRlbSk7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgZWRpdFRhc3RTdWJtaXQgPSAoKSA9PiB7XG4gICAgY29uc3QgZWRpdFRhc2tGb3JtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5lZGl0LXRhc2stZm9ybScpO1xuICAgIGVkaXRUYXNrRm9ybXMuZm9yRWFjaCgoZm9ybSkgPT4ge1xuICAgICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IHRhc2tJZCA9IGZvcm0uZ2V0QXR0cmlidXRlKCdkYXRhLXRhc2staWQnKTtcbiAgICAgICAgaWYgKGZvcm0uZWxlbWVudHNbMF0udmFsdWUudHJpbSgpID09PSAnJykgcmV0dXJuO1xuICAgICAgICBjb25zdCB7IHRhc2tzIH0gPSB0YXNrQWN0aW9ucy51cGRhdGVUYXNrKFxuICAgICAgICAgIHRhc2tJZCxcbiAgICAgICAgICBmb3JtLmVsZW1lbnRzWzBdLnZhbHVlLFxuICAgICAgICApO1xuXG4gICAgICAgIHJlbmRlclRhc2tzKHRhc2tzKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGNvbXBsZXRlVGFza0hhbmRsZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgY2hlY2tib3hlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXNrLWNoZWNrYm94Jyk7XG4gICAgY2hlY2tib3hlcy5mb3JFYWNoKChjaGVja2JveCkgPT4ge1xuICAgICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGUpID0+IHtcbiAgICAgICAgY29uc3QgdGFza0lkID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXRhc2staWQnKTtcbiAgICAgICAgY29uc3QgeyB0YXNrcyB9ID0gdGFza0FjdGlvbnMuY29tcGxldGVUYXNrKHRhc2tJZCwgZS50YXJnZXQuY2hlY2tlZCk7XG4gICAgICAgIHJlbmRlclRhc2tzKHRhc2tzKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGRlbGV0ZVRhc2tIYW5kbGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGRlbGV0ZUJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFzay1kZWxldGUtYnRuJyk7XG4gICAgZGVsZXRlQnRucy5mb3JFYWNoKChidG4pID0+IHtcbiAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgdGFza0lkID0gYnRuLmdldEF0dHJpYnV0ZSgnZGF0YS10YXNrLWlkJyk7XG4gICAgICAgIGNvbnN0IHRhc2tzID0gdGFza0FjdGlvbnMuZGVsZXRlVGFzayh0YXNrSWQpO1xuICAgICAgICByZW5kZXJUYXNrcyh0YXNrcyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBjbGVhckNvbXBsZXRlZEhhbmRsZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgY2xlYXJDb21wbGV0ZWRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xlYXItY29tcGxldGVkLWJ0bicpO1xuICAgIGNsZWFyQ29tcGxldGVkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgY29uc3QgdGFza3MgPSB0YXNrQWN0aW9ucy5jbGVhckNvbXBsZXRlZCgpO1xuICAgICAgcmVuZGVyVGFza3ModGFza3MpO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IHVwZGF0ZVVJID0gKHRhc2tzKSA9PiB7XG4gICAgcmVuZGVyVGFza3ModGFza3MpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgcmVuZGVyVGFza3MsXG4gICAgZWRpdFRhc3RTdWJtaXQsXG4gICAgc2hvd1RyYXNoSWNvbixcbiAgICB1cGRhdGVVSSxcbiAgICBjb21wbGV0ZVRhc2tIYW5kbGVyLFxuICAgIGRlbGV0ZVRhc2tIYW5kbGVyLFxuICAgIGNsZWFyQ29tcGxldGVkSGFuZGxlcixcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbTtcbiIsImNvbnN0IHN0b3JhZ2UgPSB7XG4gIC8vICBmdW5jdGlvbiBtYW51cGlsYXRlIHRoZSBsb2NhbCBzdG9yYWdlXG4gIGdldDogKGtleSkgPT4ge1xuICAgIGNvbnN0IHZhbHVlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KTtcbiAgICByZXR1cm4gdmFsdWUgPyBKU09OLnBhcnNlKHZhbHVlKSA6IG51bGw7XG4gIH0sXG4gIHNldDogKGtleSwgdmFsdWUpID0+IHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIEpTT04uc3RyaW5naWZ5KHZhbHVlKSk7XG4gIH0sXG4gIHJlbW92ZTogKGtleSkgPT4ge1xuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGtleSk7XG4gIH0sXG59O1xuZXhwb3J0IGRlZmF1bHQgc3RvcmFnZTsiLCJpbXBvcnQgc3RvcmFnZSBmcm9tICcuL3N0b3JhZ2UuanMnO1xuXG5jb25zdCB0YXNrQWN0aW9ucyA9ICgoKSA9PiB7XG4gIGNvbnN0IGFkZFRhc2sgPSAoZGVzY3JpcHRpb24pID0+IHtcbiAgICBjb25zdCB0YXNrcyA9IHN0b3JhZ2UuZ2V0KCd0YXNrcycpO1xuICAgIGNvbnN0IHRhc2sgPSB7XG4gICAgICBpbmRleDogdGFza3MubGVuZ3RoICsgMSxcbiAgICAgIGNvbXBsZXRlZDogZmFsc2UsXG4gICAgICBkZXNjcmlwdGlvbixcbiAgICB9O1xuICAgIHRhc2tzLnB1c2godGFzayk7XG4gICAgc3RvcmFnZS5zZXQoJ3Rhc2tzJywgdGFza3MpO1xuICAgIHJldHVybiB0YXNrO1xuICB9O1xuXG4gIGNvbnN0IHVwZGF0ZVRhc2sgPSAoaW5kZXgsIGRlc2NyaXB0aW9uKSA9PiB7XG4gICAgY29uc3QgdGFza3MgPSBzdG9yYWdlLmdldCgndGFza3MnKTtcbiAgICBjb25zdCB0YXNrID0gdGFza3NbaW5kZXggLSAxXTtcbiAgICB0YXNrLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgc3RvcmFnZS5zZXQoJ3Rhc2tzJywgdGFza3MpO1xuICAgIHJldHVybiB7IHRhc2ssIHRhc2tzIH07XG4gIH07XG5cbiAgY29uc3QgY29tcGxldGVUYXNrID0gKGluZGV4LCBjaGVja2VkKSA9PiB7XG4gICAgY29uc3QgdGFza3MgPSBzdG9yYWdlLmdldCgndGFza3MnKTtcbiAgICBjb25zdCB0YXNrID0gdGFza3NbaW5kZXggLSAxXTtcbiAgICB0YXNrLmNvbXBsZXRlZCA9IGNoZWNrZWQ7XG4gICAgc3RvcmFnZS5zZXQoJ3Rhc2tzJywgdGFza3MpO1xuICAgIHJldHVybiB7IHRhc2ssIHRhc2tzIH07XG4gIH07XG5cbiAgY29uc3QgZGVsZXRlVGFzayA9IChpbmRleCkgPT4ge1xuICAgIGxldCB0YXNrcyA9IHN0b3JhZ2UuZ2V0KCd0YXNrcycpO1xuICAgIHRhc2tzLnNwbGljZShpbmRleCAtIDEsIDEpO1xuICAgIHRhc2tzID0gdGFza3MubWFwKCh0YXNrLCBpKSA9PiB7XG4gICAgICB0YXNrLmluZGV4ID0gaSArIDE7XG4gICAgICByZXR1cm4gdGFzaztcbiAgICB9KTtcbiAgICBzdG9yYWdlLnNldCgndGFza3MnLCB0YXNrcyk7XG4gICAgcmV0dXJuIHRhc2tzO1xuICB9O1xuXG4gIGNvbnN0IGNsZWFyQ29tcGxldGVkID0gKCkgPT4ge1xuICAgIGNvbnN0IHRhc2tzID0gc3RvcmFnZS5nZXQoJ3Rhc2tzJyk7XG4gICAgbGV0IHVuQ29tcGxldGVkVGFza3MgPSB0YXNrcy5maWx0ZXIoKHRhc2spID0+ICF0YXNrLmNvbXBsZXRlZCk7XG4gICAgdW5Db21wbGV0ZWRUYXNrcyA9IHVuQ29tcGxldGVkVGFza3MubWFwKCh0YXNrLCBpbmRleCkgPT4ge1xuICAgICAgdGFzay5pbmRleCA9IGluZGV4ICsgMTtcbiAgICAgIHJldHVybiB0YXNrO1xuICAgIH0pO1xuICAgIHN0b3JhZ2Uuc2V0KCd0YXNrcycsIHVuQ29tcGxldGVkVGFza3MpO1xuICAgIHJldHVybiB1bkNvbXBsZXRlZFRhc2tzO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgYWRkVGFzayxcbiAgICB1cGRhdGVUYXNrLFxuICAgIGNvbXBsZXRlVGFzayxcbiAgICBkZWxldGVUYXNrLFxuICAgIGNsZWFyQ29tcGxldGVkLFxuICB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgdGFza0FjdGlvbnM7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHN0b3JhZ2UgZnJvbSAnLi9zdG9yYWdlLmpzJztcbmltcG9ydCB0YXNrQWN0aW9ucyBmcm9tICcuL3Rhc2tBY3Rpb25zLmpzJztcbmltcG9ydCBkb20gZnJvbSAnLi9kb20uanMnO1xuaW1wb3J0IHRhc2sgZnJvbSAnLi9UYXNrLmpzJztcblxuY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtJyk7XG5jb25zdCB0b2RvVGV4dElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC1ib29rJyk7XG5cbmNvbnN0IGdldERlZmF1bHRUYXNrcyA9ICgpID0+IHtcbiAgY29uc3QgdGFza3MgPSB0YXNrLmdldCgpO1xuICBjb25zdCBzdG9yZWRUYXNrcyA9IHN0b3JhZ2UuZ2V0KCd0YXNrcycpO1xuICBpZiAoc3RvcmVkVGFza3MpIHtcbiAgICBzdG9yZWRUYXNrcy5tYXAoKHQpID0+IHRhc2suYWRkKHQpKTtcbiAgICBkb20ucmVuZGVyVGFza3Moc3RvcmVkVGFza3MpO1xuICB9IGVsc2Uge1xuICAgIHN0b3JhZ2Uuc2V0KCd0YXNrcycsIHRhc2tzKTtcbiAgICBkb20ucmVuZGVyVGFza3ModGFza3MpO1xuICB9XG59O1xuXG5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgY29uc3Qgc2F2ZWRUYXNrID0gdGFza0FjdGlvbnMuYWRkVGFzayh0b2RvVGV4dElucHV0LnZhbHVlKTtcbiAgdGFzay5hZGQoc2F2ZWRUYXNrKTtcbiAgY29uc3QgdGFza3MgPSB0YXNrLmdldCgpO1xuICBkb20ucmVuZGVyVGFza3ModGFza3MpO1xufSk7XG5cbmdldERlZmF1bHRUYXNrcygpO1xuZG9tLnVwZGF0ZVVJKHN0b3JhZ2UuZ2V0KCd0YXNrcycpKTtcbmRvbS5zaG93VHJhc2hJY29uKCk7XG5kb20uZWRpdFRhc3RTdWJtaXQodGFzayk7XG5kb20uY29tcGxldGVUYXNrSGFuZGxlcigpO1xuZG9tLmRlbGV0ZVRhc2tIYW5kbGVyKCk7XG5kb20uY2xlYXJDb21wbGV0ZWRIYW5kbGVyKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9