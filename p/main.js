/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/html-tag-js/dist/tag.js":
/*!**********************************************!*\
  !*** ./node_modules/html-tag-js/dist/tag.js ***!
  \**********************************************/
/***/ (function(module) {

eval("!function (e, t) {\n   true ? module.exports = t() : 0;\n}(this, function () {\n  return function () {\n    \"use strict\";\n\n    var e = {\n        d: function (t, n) {\n          for (var r in n) e.o(n, r) && !e.o(t, r) && Object.defineProperty(t, r, {\n            enumerable: !0,\n            get: n[r]\n          });\n        },\n        o: function (e, t) {\n          return Object.prototype.hasOwnProperty.call(e, t);\n        }\n      },\n      t = {};\n    function n(e, t) {\n      (null == t || t > e.length) && (t = e.length);\n      for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];\n      return r;\n    }\n    function r(e) {\n      return function (e) {\n        if (Array.isArray(e)) return n(e);\n      }(e) || function (e) {\n        if (\"undefined\" != typeof Symbol && null != e[Symbol.iterator] || null != e[\"@@iterator\"]) return Array.from(e);\n      }(e) || function (e, t) {\n        if (e) {\n          if (\"string\" == typeof e) return n(e, t);\n          var r = Object.prototype.toString.call(e).slice(8, -1);\n          return \"Object\" === r && e.constructor && (r = e.constructor.name), \"Map\" === r || \"Set\" === r ? Array.from(e) : \"Arguments\" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? n(e, t) : void 0;\n        }\n      }(e) || function () {\n        throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n      }();\n    }\n    function o(e) {\n      return o = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (e) {\n        return typeof e;\n      } : function (e) {\n        return e && \"function\" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? \"symbol\" : typeof e;\n      }, o(e);\n    }\n    function i(e, t) {\n      t instanceof Node || (t = c.text(\"\".concat(t))), t instanceof Text && \"clone\" in t && (t = t.clone()), e.append(t);\n    }\n    function c(e) {\n      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};\n      return \"string\" == typeof t && (t = {\n        innerHTML: t\n      }), function (e) {\n        var t,\n          n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};\n        if (\"function\" == typeof e) return e(n, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : []);\n        if (e instanceof Node) t = e;else {\n          if (\"string\" != typeof e) throw new Error(\"Invalid tag, \", o(e));\n          t = document.createElement(e);\n        }\n        return Object.keys(n).forEach(function (e) {\n          var r = n[e];\n          if (void 0 !== r) switch (e) {\n            case \"child\":\n              i(t, r);\n              break;\n            case \"children\":\n              if (!Array.isArray(r)) throw new Error(\"children must be an array of Nodes\");\n              r.flat().forEach(function (e) {\n                i(t, e);\n              });\n              break;\n            case \"attr\":\n              Object.keys(r).forEach(function (e) {\n                var n = r[e];\n                void 0 !== n && t.setAttribute(e, n);\n              });\n              break;\n            case \"style\":\n            case \"dataset\":\n              Object.keys(r).forEach(function (n) {\n                var o = r[n];\n                void 0 !== o && (t[e][n] = o);\n              });\n              break;\n            case \"ref\":\n              r.instanceOfRef && (r.el = t);\n              break;\n            default:\n              t[e] = r;\n          }\n        }), t;\n      }(e, t, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : []);\n    }\n    return e.d(t, {\n      default: function () {\n        return c;\n      }\n    }), window && !window.tag && (window.tag = c), Object.defineProperties(c, {\n      get: {\n        value: function (e) {\n          return document.querySelector(e);\n        }\n      },\n      getAll: {\n        value: function (e) {\n          return r(document.querySelectorAll(e));\n        }\n      },\n      parse: {\n        value: function (e) {\n          var t = document.createElement(\"div\");\n          return t.innerHTML = e, 1 === t.childElementCount ? t.firstElementChild : r(t.children);\n        }\n      },\n      text: {\n        value: function (e) {\n          return document.createTextNode(e);\n        }\n      },\n      use: {\n        value: function () {\n          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : \"\",\n            t = e,\n            n = !1,\n            r = document.createTextNode(e),\n            o = [r];\n          return Object.defineProperty(r, \"value\", {\n            set: function (e) {\n              t = e, o.forEach(function (t) {\n                t.textContent = e;\n              });\n            },\n            get: function () {\n              return t;\n            }\n          }), Object.defineProperty(r, \"clone\", {\n            value: function () {\n              if (!n) return n = !0, r;\n              var e = r.cloneNode();\n              return o.push(e), e;\n            }\n          }), r;\n        }\n      }\n    }), t.default;\n  }();\n});\n\n//# sourceURL=webpack://responsive-tools/./node_modules/html-tag-js/dist/tag.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _plugin_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../plugin.json */ \"./plugin.json\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ \"./src/style.scss\");\n/* harmony import */ var html_tag_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! html-tag-js */ \"./node_modules/html-tag-js/dist/tag.js\");\n/* harmony import */ var html_tag_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(html_tag_js__WEBPACK_IMPORTED_MODULE_2__);\nconst selectionMenu=acode.require('selectionMenu');const toast=acode.require('toast');const prompt=acode.require('prompt');class AcodePlugin{async init($page){selectionMenu.add(this.run.bind(this),'Dubug','all');// editorManager.\neditorManager.editor.commands.addCommand({name:\"test1\",description:\"Responsive\",bindKey:{win:\"Ctrl-T\"},exec:this.run.bind(this)});// Initialising $page for plugin\n$page.id=\"responsiveTools\";$page.settitle(\"Responsive\");this.$page=$page;this.$runBtn=html_tag_js__WEBPACK_IMPORTED_MODULE_2___default()('span',{className:'icon play_circle_filled',attr:{action:'run'},onclick:this.run.bind(this)});// Adding custom styles to $page \nthis.$style=html_tag_js__WEBPACK_IMPORTED_MODULE_2___default()('style',{textContent:_style_scss__WEBPACK_IMPORTED_MODULE_1__[\"default\"]});this.$wrapper=html_tag_js__WEBPACK_IMPORTED_MODULE_2___default()('div',{className:'wrapper'});// Mobile 1\nthis.$iframeMobile=html_tag_js__WEBPACK_IMPORTED_MODULE_2___default()('iframe',{className:'iframeMobile',width:\"355\",height:\"480\"});// small tablet 2\nthis.$iframeSmallTablet=html_tag_js__WEBPACK_IMPORTED_MODULE_2___default()('iframe',{className:'iframeMobile',width:\"480\",height:\"640\"});// medium tablet 3\nthis.$iframeMediumTablet=html_tag_js__WEBPACK_IMPORTED_MODULE_2___default()('iframe',{className:'iframeMobile',width:\"665\",height:\"920\"});// tablet portrait 4\nthis.$iframeTabletPortrait=html_tag_js__WEBPACK_IMPORTED_MODULE_2___default()('iframe',{className:'iframeMobile',width:\"995\",height:\"1024\"});// tablet landscape 5\nthis.$iframeTabletLandscape=html_tag_js__WEBPACK_IMPORTED_MODULE_2___default()('iframe',{className:'iframeMobile',width:\"1024\",height:\"768\"});// desktop 6\nthis.$iframeDesktop=html_tag_js__WEBPACK_IMPORTED_MODULE_2___default()('iframe',{className:'iframeMobile',width:\"1200\",height:\"800\"});document.head.append(this.$style);this.$page.append(this.$wrapper);this.$wrapper.append(this.$iframeMobile);this.$wrapper.append(this.$iframeSmallTablet);this.$wrapper.append(this.$iframeMediumTablet);this.$wrapper.append(this.$iframeTabletPortrait);this.$wrapper.append(this.$iframeTabletLandscape);this.$wrapper.append(this.$iframeDesktop);this.checkRunnable();editorManager.on('switch-file',this.checkRunnable.bind(this));editorManager.on('rename-file',this.checkRunnable.bind(this));// remove and reset zoom, use the back arrow \n$page.querySelector(\".arrow_back\").addEventListener(\"click\",()=>{document.querySelector(\"[name='viewport']\").setAttribute(\"content\",\" width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\");$page.remove();});document.addEventListener(\"backbutton\",onBackKeyDown);function onBackKeyDown(){document.querySelector(\"[name='viewport']\").setAttribute(\"content\",\" width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\");$page.remove();}}async run(){const result=await prompt('Enter Url','','text',{required:true,placeholder:'Url'});// set src iframe\nif(result){this.$page.show();this.$iframeMobile.src=result;this.$iframeSmallTablet.src=result;this.$iframeMediumTablet.src=result;this.$iframeTabletPortrait.src=result;this.$iframeTabletLandscape.src=result;this.$iframeDesktop.src=result;document.querySelector(\"[name='viewport']\").setAttribute(\"content\",\"width=1024, height=768\");}}async destroy(){if(this.$runBtn){this.$runBtn.onclick=null;this.$runBtn.remove();}editorManager.off('switch-file',this.checkRunnable.bind(this));editorManager.off('rename-file',this.checkRunnable.bind(this));}checkRunnable(){const file=editorManager.activeFile;if(this.$runBtn.isConnected){this.$runBtn.remove();}if(file){var _$header$get;const $header=root.get('header');(_$header$get=$header.get('.icon.play_arrow'))===null||_$header$get===void 0?void 0:_$header$get.remove();$header.insertBefore(this.$runBtn,$header.lastChild);}}}if(window.acode){const acodePlugin=new AcodePlugin();acode.setPluginInit(_plugin_json__WEBPACK_IMPORTED_MODULE_0__.id,async(baseUrl,$page,_ref)=>{let{cacheFileUrl,cacheFile}=_ref;if(!baseUrl.endsWith('/')){baseUrl+='/';}acodePlugin.baseUrl=baseUrl;await acodePlugin.init($page,cacheFile,cacheFileUrl);});acode.setPluginUnmount(_plugin_json__WEBPACK_IMPORTED_MODULE_0__.id,()=>{acodePlugin.destroy();});}\n\n//# sourceURL=webpack://responsive-tools/./src/main.js?");

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"#responsiveTools {\\n  overflow-x: scroll;\\n  background: var(--primary-color);\\n}\\n#responsiveTools .wrapper {\\n  width: 5100px;\\n  overflow-y: scroll;\\n  transform: scale(0.25);\\n  transform-origin: 0 0;\\n}\\n#responsiveTools .wrapper iframe {\\n  border: 2px solid pink;\\n  margin: 30px 25px 20px 30px;\\n  float: left;\\n}\");\n\n//# sourceURL=webpack://responsive-tools/./src/style.scss?");

/***/ }),

/***/ "./plugin.json":
/*!*********************!*\
  !*** ./plugin.json ***!
  \*********************/
/***/ (function(module) {

"use strict";
eval("module.exports = JSON.parse('{\"id\":\"cubarabara.responsive\",\"name\":\"Responsive tools\",\"main\":\"dist/main.js\",\"version\":\"1.0.1\",\"readme\":\"readme.md\",\"icon\":\"icon.png\",\"files\":[],\"minVersionCode\":290,\"price\":0,\"author\":{\"name\":\"cubarabara\",\"email\":\"cubarabara@gmail.com\",\"github\":\"cubarabara\"}}');\n\n//# sourceURL=webpack://responsive-tools/./plugin.json?");

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;