webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/category/category.module.scss":
/*!******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./components/category/category.module.scss ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"/* Colors */\\n/* Yellow */\\n/* Blue */\\n/* Colors */\\n/* Yellow */\\n/* Blue */\\n.category_category__2rlrf {\\n  font-size: 1.563rem;\\n  line-height: 1.16;\\n  grid-column-end: span 12;\\n  border-top: 1px solid #4E4E4E;\\n  margin-top: 3rem;\\n  margin-bottom: 2rem;\\n  padding-top: 0.625rem;\\n}\\n@media screen and (min-width: 40rem) {\\n  .category_category__2rlrf {\\n    font-size: 1.563rem;\\n    line-height: 1.16;\\n  }\\n}\\n\\n.category_category__word-wrapper__3JJTh {\\n  position: relative;\\n}\\n.category_category__word-wrapper__3JJTh::before {\\n  content: \\\"\\\";\\n  position: absolute;\\n  left: 0;\\n  right: -0.25rem;\\n  top: -0.5rem;\\n  height: 0.5rem;\\n  background-color: #FFBA30;\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/variables.scss\",\"webpack://components/category/category.module.scss\",\"webpack://styles/typography.scss\",\"webpack://styles/mixins.scss\"],\"names\":[],\"mappings\":\"AAWA,WAAA;AAOA,WAAA;AAIA,SAAA;AAXA,WAAA;AAOA,WAAA;AAIA,SAAA;ACnBA;ECqCE,mBAAA;EACA,iBAAA;EDpCA,wBAAA;EAEA,6BAAA;EACA,gBAAA;EACA,mBAAA;EACA,qBAAA;AAIF;AEXE;EFAF;ICyCI,mBAAA;IACA,iBAAA;ED1BF;AACF;;AAPA;EACE,kBAAA;AAUF;AARE;EACE,WAAA;EACA,kBAAA;EACA,OAAA;EACA,eAAA;EACA,YAAA;EACA,cAAA;EACA,yBDJM;ACcV\",\"sourcesContent\":[\"$breakpoints: (\\n  small: 0rem,\\n  medium: (640 / 16) * 1rem,\\n  large: (1024 / 16) * 1rem,\\n);\\n\\n$max-width: 1024 / 16 * 1rem;\\n\\n$grid-gutter-x: 30 / 16 * 1rem;\\n\\n\\n/* Colors */\\n$black: #000000;\\n$white: #ffffff;\\n$gallery: #efefef;\\n$mercury: #E1E1E1;\\n$tundora: #4E4E4E;\\n\\n/* Yellow */\\n$sunglow: #FFBA30;\\n$gamboge: #EDA515;\\n\\n/* Blue */\\n$cobalt: #0040A1;\\n\",\"@import \\\"../../styles/typography\\\";\\n@import \\\"../../styles/variables\\\";\\n\\n.category {\\n  @include font-styles(\\\"h2\\\");\\n  grid-column-end: span 12;\\n\\n  border-top: 1px solid $tundora;\\n  margin-top: 3rem;\\n  margin-bottom: 2rem;\\n  padding-top: 0.625rem;\\n}\\n\\n.category__word-wrapper {\\n  position: relative;\\n\\n  &::before {\\n    content: '';\\n    position: absolute;\\n    left: 0;\\n    right: -.25rem;\\n    top: -0.5rem;\\n    height: .5rem;\\n    background-color: $sunglow;\\n  }\\n}\",\"@import \\\"./mixins\\\";\\n\\n$font-family-body: 'Source Sans Pro', sans-serif;\\n$font-family-heading: 'Source Serif Pro', serif;\\n\\n$font-size-root: 16px;\\n\\n$font-sizes-small: (\\n  \\\"h1\\\": 1.953rem,\\n  \\\"h2\\\": 1.563rem,\\n  \\\"h3\\\": 1.25rem,\\n  \\\"body\\\": 1rem,\\n  \\\"small\\\": 0.85rem,\\n);\\n\\n$font-sizes: (\\n  \\\"h1\\\": 2.1rem,\\n  \\\"h2\\\": 1.563rem,\\n  \\\"h3\\\": 1.375rem,\\n  \\\"body\\\": 1.125rem,\\n  \\\"small\\\": 0.9rem\\n);\\n\\n$line-heights-small: (\\n  \\\"h1\\\": 1.16,\\n  \\\"h2\\\": 1.16,\\n  \\\"h3\\\": 1.16,\\n  \\\"body\\\": 1.45,\\n  \\\"small\\\": 1.5\\n);\\n\\n$line-heights: (\\n  \\\"h1\\\": 1.16,\\n  \\\"h2\\\": 1.16,\\n  \\\"h3\\\": 1.16,\\n  \\\"body\\\": 1.45,\\n  \\\"small\\\": 1.5\\n);\\n\\n@mixin font-styles($key) {\\n  font-size: map-get($font-sizes-small, $key);\\n  line-height: map-get($line-heights-small, $key);\\n\\n  @include breakpoint(\\\"medium\\\") {\\n    font-size: map-get($font-sizes, $key);\\n    line-height: map-get($line-heights, $key);\\n  }\\n}\\n\",\"@import \\\"./variables\\\";\\n\\n@mixin breakpoint($size) {\\n  @media screen and (min-width: #{map-get($breakpoints, $size)}) {\\n    @content;\\n  }\\n}\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"category\": \"category_category__2rlrf\",\n\t\"category__word-wrapper\": \"category_category__word-wrapper__3JJTh\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jYXRlZ29yeS9jYXRlZ29yeS5tb2R1bGUuc2Nzcz8yYmVhIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsd0dBQW1EO0FBQzdGO0FBQ0E7QUFDQSw4QkFBOEIsUUFBUyw4R0FBOEcsd0JBQXdCLHNCQUFzQiw2QkFBNkIsa0NBQWtDLHFCQUFxQix3QkFBd0IsMEJBQTBCLEdBQUcsd0NBQXdDLCtCQUErQiwwQkFBMEIsd0JBQXdCLEtBQUssR0FBRyw2Q0FBNkMsdUJBQXVCLEdBQUcsbURBQW1ELGtCQUFrQix1QkFBdUIsWUFBWSxvQkFBb0IsaUJBQWlCLG1CQUFtQiw4QkFBOEIsR0FBRyxPQUFPLGtOQUFrTixVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxZQUFZLFdBQVcsWUFBWSxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxLQUFLLFlBQVksV0FBVyxNQUFNLE1BQU0sS0FBSyxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLHdIQUF3SCxpQ0FBaUMsbUNBQW1DLG9DQUFvQyxrQkFBa0Isb0JBQW9CLG9CQUFvQixvQkFBb0Isb0NBQW9DLG9CQUFvQixpQ0FBaUMseUNBQXlDLHFDQUFxQyxlQUFlLGlDQUFpQyw2QkFBNkIscUNBQXFDLHFCQUFxQix3QkFBd0IsMEJBQTBCLEdBQUcsNkJBQTZCLHVCQUF1QixpQkFBaUIsa0JBQWtCLHlCQUF5QixjQUFjLHFCQUFxQixtQkFBbUIsb0JBQW9CLGlDQUFpQyxLQUFLLEdBQUcsd0JBQXdCLHFEQUFxRCxrREFBa0QsMEJBQTBCLG9JQUFvSSwrSEFBK0gsc0hBQXNILGdIQUFnSCw4QkFBOEIsZ0RBQWdELG9EQUFvRCx1Q0FBdUMsNENBQTRDLGdEQUFnRCxLQUFLLEdBQUcsNkJBQTZCLDhCQUE4QixvQ0FBb0MsNkJBQTZCLEdBQUcsZUFBZSxLQUFLLEdBQUcsbUJBQW1CO0FBQ3JuRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2luZGV4LmpzPyEuL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/IS4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL2NvbXBvbmVudHMvY2F0ZWdvcnkvY2F0ZWdvcnkubW9kdWxlLnNjc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBDb2xvcnMgKi9cXG4vKiBZZWxsb3cgKi9cXG4vKiBCbHVlICovXFxuLyogQ29sb3JzICovXFxuLyogWWVsbG93ICovXFxuLyogQmx1ZSAqL1xcbi5jYXRlZ29yeV9jYXRlZ29yeV9fMnJscmYge1xcbiAgZm9udC1zaXplOiAxLjU2M3JlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjE2O1xcbiAgZ3JpZC1jb2x1bW4tZW5kOiBzcGFuIDEyO1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM0RTRFNEU7XFxuICBtYXJnaW4tdG9wOiAzcmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG4gIHBhZGRpbmctdG9wOiAwLjYyNXJlbTtcXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDByZW0pIHtcXG4gIC5jYXRlZ29yeV9jYXRlZ29yeV9fMnJscmYge1xcbiAgICBmb250LXNpemU6IDEuNTYzcmVtO1xcbiAgICBsaW5lLWhlaWdodDogMS4xNjtcXG4gIH1cXG59XFxuXFxuLmNhdGVnb3J5X2NhdGVnb3J5X193b3JkLXdyYXBwZXJfXzNKSlRoIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLmNhdGVnb3J5X2NhdGVnb3J5X193b3JkLXdyYXBwZXJfXzNKSlRoOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IC0wLjI1cmVtO1xcbiAgdG9wOiAtMC41cmVtO1xcbiAgaGVpZ2h0OiAwLjVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZCQTMwO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3R5bGVzL3ZhcmlhYmxlcy5zY3NzXCIsXCJ3ZWJwYWNrOi8vY29tcG9uZW50cy9jYXRlZ29yeS9jYXRlZ29yeS5tb2R1bGUuc2Nzc1wiLFwid2VicGFjazovL3N0eWxlcy90eXBvZ3JhcGh5LnNjc3NcIixcIndlYnBhY2s6Ly9zdHlsZXMvbWl4aW5zLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBV0EsV0FBQTtBQU9BLFdBQUE7QUFJQSxTQUFBO0FBWEEsV0FBQTtBQU9BLFdBQUE7QUFJQSxTQUFBO0FDbkJBO0VDcUNFLG1CQUFBO0VBQ0EsaUJBQUE7RURwQ0Esd0JBQUE7RUFFQSw2QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQUlGO0FFWEU7RUZBRjtJQ3lDSSxtQkFBQTtJQUNBLGlCQUFBO0VEMUJGO0FBQ0Y7O0FBUEE7RUFDRSxrQkFBQTtBQVVGO0FBUkU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EseUJESk07QUNjVlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIkYnJlYWtwb2ludHM6IChcXG4gIHNtYWxsOiAwcmVtLFxcbiAgbWVkaXVtOiAoNjQwIC8gMTYpICogMXJlbSxcXG4gIGxhcmdlOiAoMTAyNCAvIDE2KSAqIDFyZW0sXFxuKTtcXG5cXG4kbWF4LXdpZHRoOiAxMDI0IC8gMTYgKiAxcmVtO1xcblxcbiRncmlkLWd1dHRlci14OiAzMCAvIDE2ICogMXJlbTtcXG5cXG5cXG4vKiBDb2xvcnMgKi9cXG4kYmxhY2s6ICMwMDAwMDA7XFxuJHdoaXRlOiAjZmZmZmZmO1xcbiRnYWxsZXJ5OiAjZWZlZmVmO1xcbiRtZXJjdXJ5OiAjRTFFMUUxO1xcbiR0dW5kb3JhOiAjNEU0RTRFO1xcblxcbi8qIFllbGxvdyAqL1xcbiRzdW5nbG93OiAjRkZCQTMwO1xcbiRnYW1ib2dlOiAjRURBNTE1O1xcblxcbi8qIEJsdWUgKi9cXG4kY29iYWx0OiAjMDA0MEExO1xcblwiLFwiQGltcG9ydCBcXFwiLi4vLi4vc3R5bGVzL3R5cG9ncmFwaHlcXFwiO1xcbkBpbXBvcnQgXFxcIi4uLy4uL3N0eWxlcy92YXJpYWJsZXNcXFwiO1xcblxcbi5jYXRlZ29yeSB7XFxuICBAaW5jbHVkZSBmb250LXN0eWxlcyhcXFwiaDJcXFwiKTtcXG4gIGdyaWQtY29sdW1uLWVuZDogc3BhbiAxMjtcXG5cXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAkdHVuZG9yYTtcXG4gIG1hcmdpbi10b3A6IDNyZW07XFxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbiAgcGFkZGluZy10b3A6IDAuNjI1cmVtO1xcbn1cXG5cXG4uY2F0ZWdvcnlfX3dvcmQtd3JhcHBlciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFxuICAmOjpiZWZvcmUge1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogLS4yNXJlbTtcXG4gICAgdG9wOiAtMC41cmVtO1xcbiAgICBoZWlnaHQ6IC41cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc3VuZ2xvdztcXG4gIH1cXG59XCIsXCJAaW1wb3J0IFxcXCIuL21peGluc1xcXCI7XFxuXFxuJGZvbnQtZmFtaWx5LWJvZHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xcbiRmb250LWZhbWlseS1oZWFkaW5nOiAnU291cmNlIFNlcmlmIFBybycsIHNlcmlmO1xcblxcbiRmb250LXNpemUtcm9vdDogMTZweDtcXG5cXG4kZm9udC1zaXplcy1zbWFsbDogKFxcbiAgXFxcImgxXFxcIjogMS45NTNyZW0sXFxuICBcXFwiaDJcXFwiOiAxLjU2M3JlbSxcXG4gIFxcXCJoM1xcXCI6IDEuMjVyZW0sXFxuICBcXFwiYm9keVxcXCI6IDFyZW0sXFxuICBcXFwic21hbGxcXFwiOiAwLjg1cmVtLFxcbik7XFxuXFxuJGZvbnQtc2l6ZXM6IChcXG4gIFxcXCJoMVxcXCI6IDIuMXJlbSxcXG4gIFxcXCJoMlxcXCI6IDEuNTYzcmVtLFxcbiAgXFxcImgzXFxcIjogMS4zNzVyZW0sXFxuICBcXFwiYm9keVxcXCI6IDEuMTI1cmVtLFxcbiAgXFxcInNtYWxsXFxcIjogMC45cmVtXFxuKTtcXG5cXG4kbGluZS1oZWlnaHRzLXNtYWxsOiAoXFxuICBcXFwiaDFcXFwiOiAxLjE2LFxcbiAgXFxcImgyXFxcIjogMS4xNixcXG4gIFxcXCJoM1xcXCI6IDEuMTYsXFxuICBcXFwiYm9keVxcXCI6IDEuNDUsXFxuICBcXFwic21hbGxcXFwiOiAxLjVcXG4pO1xcblxcbiRsaW5lLWhlaWdodHM6IChcXG4gIFxcXCJoMVxcXCI6IDEuMTYsXFxuICBcXFwiaDJcXFwiOiAxLjE2LFxcbiAgXFxcImgzXFxcIjogMS4xNixcXG4gIFxcXCJib2R5XFxcIjogMS40NSxcXG4gIFxcXCJzbWFsbFxcXCI6IDEuNVxcbik7XFxuXFxuQG1peGluIGZvbnQtc3R5bGVzKCRrZXkpIHtcXG4gIGZvbnQtc2l6ZTogbWFwLWdldCgkZm9udC1zaXplcy1zbWFsbCwgJGtleSk7XFxuICBsaW5lLWhlaWdodDogbWFwLWdldCgkbGluZS1oZWlnaHRzLXNtYWxsLCAka2V5KTtcXG5cXG4gIEBpbmNsdWRlIGJyZWFrcG9pbnQoXFxcIm1lZGl1bVxcXCIpIHtcXG4gICAgZm9udC1zaXplOiBtYXAtZ2V0KCRmb250LXNpemVzLCAka2V5KTtcXG4gICAgbGluZS1oZWlnaHQ6IG1hcC1nZXQoJGxpbmUtaGVpZ2h0cywgJGtleSk7XFxuICB9XFxufVxcblwiLFwiQGltcG9ydCBcXFwiLi92YXJpYWJsZXNcXFwiO1xcblxcbkBtaXhpbiBicmVha3BvaW50KCRzaXplKSB7XFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAje21hcC1nZXQoJGJyZWFrcG9pbnRzLCAkc2l6ZSl9KSB7XFxuICAgIEBjb250ZW50O1xcbiAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJjYXRlZ29yeVwiOiBcImNhdGVnb3J5X2NhdGVnb3J5X18ycmxyZlwiLFxuXHRcImNhdGVnb3J5X193b3JkLXdyYXBwZXJcIjogXCJjYXRlZ29yeV9jYXRlZ29yeV9fd29yZC13cmFwcGVyX18zSkpUaFwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/category/category.module.scss\n");

/***/ })

})