webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/category/category.module.scss":
/*!******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./components/category/category.module.scss ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"/* Colors */\\n/* Yellow */\\n/* Blue */\\n/* Colors */\\n/* Yellow */\\n/* Blue */\\n.category_category__2rlrf {\\n  font-size: 1.563rem;\\n  line-height: 1.16;\\n  grid-column-end: span 12;\\n  border-top: 1px solid #4E4E4E;\\n  margin-top: 3rem;\\n  margin-bottom: 2rem;\\n  padding-top: 0.625rem;\\n}\\n@media screen and (min-width: 40rem) {\\n  .category_category__2rlrf {\\n    font-size: 1.563rem;\\n    line-height: 1.16;\\n  }\\n}\\n\\n.category_category__word-wrapper__3JJTh {\\n  position: relative;\\n  display: inline-block;\\n}\\n.category_category__word-wrapper__3JJTh::before {\\n  content: \\\"\\\";\\n  position: absolute;\\n  left: 0;\\n  right: -0.25rem;\\n  top: -0.75rem;\\n  height: 0.5rem;\\n  background-color: #FFBA30;\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/variables.scss\",\"webpack://components/category/category.module.scss\",\"webpack://styles/typography.scss\",\"webpack://styles/mixins.scss\"],\"names\":[],\"mappings\":\"AAWA,WAAA;AAOA,WAAA;AAIA,SAAA;AAXA,WAAA;AAOA,WAAA;AAIA,SAAA;ACnBA;ECqCE,mBAAA;EACA,iBAAA;EDpCA,wBAAA;EAEA,6BAAA;EACA,gBAAA;EACA,mBAAA;EACA,qBAAA;AAIF;AEXE;EFAF;ICyCI,mBAAA;IACA,iBAAA;ED1BF;AACF;;AAPA;EACE,kBAAA;EACA,qBAAA;AAUF;AARE;EACE,WAAA;EACA,kBAAA;EACA,OAAA;EACA,eAAA;EACA,aAAA;EACA,cAAA;EACA,yBDLM;ACeV\",\"sourcesContent\":[\"$breakpoints: (\\n  small: 0rem,\\n  medium: (640 / 16) * 1rem,\\n  large: (1024 / 16) * 1rem,\\n);\\n\\n$max-width: 1024 / 16 * 1rem;\\n\\n$grid-gutter-x: 30 / 16 * 1rem;\\n\\n\\n/* Colors */\\n$black: #000000;\\n$white: #ffffff;\\n$gallery: #efefef;\\n$mercury: #E1E1E1;\\n$tundora: #4E4E4E;\\n\\n/* Yellow */\\n$sunglow: #FFBA30;\\n$gamboge: #EDA515;\\n\\n/* Blue */\\n$cobalt: #0040A1;\\n\",\"@import \\\"../../styles/typography\\\";\\n@import \\\"../../styles/variables\\\";\\n\\n.category {\\n  @include font-styles(\\\"h2\\\");\\n  grid-column-end: span 12;\\n\\n  border-top: 1px solid $tundora;\\n  margin-top: 3rem;\\n  margin-bottom: 2rem;\\n  padding-top: 0.625rem;\\n}\\n\\n.category__word-wrapper {\\n  position: relative;\\n  display: inline-block;\\n\\n  &::before {\\n    content: '';\\n    position: absolute;\\n    left: 0;\\n    right: -.25rem;\\n    top: -0.75rem;\\n    height: .5rem;\\n    background-color: $sunglow;\\n  }\\n}\",\"@import \\\"./mixins\\\";\\n\\n$font-family-body: 'Source Sans Pro', sans-serif;\\n$font-family-heading: 'Source Serif Pro', serif;\\n\\n$font-size-root: 16px;\\n\\n$font-sizes-small: (\\n  \\\"h1\\\": 1.953rem,\\n  \\\"h2\\\": 1.563rem,\\n  \\\"h3\\\": 1.25rem,\\n  \\\"body\\\": 1rem,\\n  \\\"small\\\": 0.85rem,\\n);\\n\\n$font-sizes: (\\n  \\\"h1\\\": 2.1rem,\\n  \\\"h2\\\": 1.563rem,\\n  \\\"h3\\\": 1.375rem,\\n  \\\"body\\\": 1.125rem,\\n  \\\"small\\\": 0.9rem\\n);\\n\\n$line-heights-small: (\\n  \\\"h1\\\": 1.16,\\n  \\\"h2\\\": 1.16,\\n  \\\"h3\\\": 1.16,\\n  \\\"body\\\": 1.45,\\n  \\\"small\\\": 1.5\\n);\\n\\n$line-heights: (\\n  \\\"h1\\\": 1.16,\\n  \\\"h2\\\": 1.16,\\n  \\\"h3\\\": 1.16,\\n  \\\"body\\\": 1.45,\\n  \\\"small\\\": 1.5\\n);\\n\\n@mixin font-styles($key) {\\n  font-size: map-get($font-sizes-small, $key);\\n  line-height: map-get($line-heights-small, $key);\\n\\n  @include breakpoint(\\\"medium\\\") {\\n    font-size: map-get($font-sizes, $key);\\n    line-height: map-get($line-heights, $key);\\n  }\\n}\\n\",\"@import \\\"./variables\\\";\\n\\n@mixin breakpoint($size) {\\n  @media screen and (min-width: #{map-get($breakpoints, $size)}) {\\n    @content;\\n  }\\n}\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"category\": \"category_category__2rlrf\",\n\t\"category__word-wrapper\": \"category_category__word-wrapper__3JJTh\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jYXRlZ29yeS9jYXRlZ29yeS5tb2R1bGUuc2Nzcz8yYmVhIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsd0dBQW1EO0FBQzdGO0FBQ0E7QUFDQSw4QkFBOEIsUUFBUyw4R0FBOEcsd0JBQXdCLHNCQUFzQiw2QkFBNkIsa0NBQWtDLHFCQUFxQix3QkFBd0IsMEJBQTBCLEdBQUcsd0NBQXdDLCtCQUErQiwwQkFBMEIsd0JBQXdCLEtBQUssR0FBRyw2Q0FBNkMsdUJBQXVCLDBCQUEwQixHQUFHLG1EQUFtRCxrQkFBa0IsdUJBQXVCLFlBQVksb0JBQW9CLGtCQUFrQixtQkFBbUIsOEJBQThCLEdBQUcsT0FBTyxrTkFBa04sVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sWUFBWSxXQUFXLFlBQVksV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssS0FBSyxZQUFZLFdBQVcsTUFBTSxNQUFNLEtBQUssV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLHdIQUF3SCxpQ0FBaUMsbUNBQW1DLG9DQUFvQyxrQkFBa0Isb0JBQW9CLG9CQUFvQixvQkFBb0Isb0NBQW9DLG9CQUFvQixpQ0FBaUMseUNBQXlDLHFDQUFxQyxlQUFlLGlDQUFpQyw2QkFBNkIscUNBQXFDLHFCQUFxQix3QkFBd0IsMEJBQTBCLEdBQUcsNkJBQTZCLHVCQUF1QiwwQkFBMEIsaUJBQWlCLGtCQUFrQix5QkFBeUIsY0FBYyxxQkFBcUIsb0JBQW9CLG9CQUFvQixpQ0FBaUMsS0FBSyxHQUFHLHdCQUF3QixxREFBcUQsa0RBQWtELDBCQUEwQixvSUFBb0ksK0hBQStILHNIQUFzSCxnSEFBZ0gsOEJBQThCLGdEQUFnRCxvREFBb0QsdUNBQXVDLDRDQUE0QyxnREFBZ0QsS0FBSyxHQUFHLDZCQUE2Qiw4QkFBOEIsb0NBQW9DLDZCQUE2QixHQUFHLGVBQWUsS0FBSyxHQUFHLG1CQUFtQjtBQUN0ckc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/IS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9pbmRleC5qcz8hLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPyEuL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9jb21wb25lbnRzL2NhdGVnb3J5L2NhdGVnb3J5Lm1vZHVsZS5zY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogQ29sb3JzICovXFxuLyogWWVsbG93ICovXFxuLyogQmx1ZSAqL1xcbi8qIENvbG9ycyAqL1xcbi8qIFllbGxvdyAqL1xcbi8qIEJsdWUgKi9cXG4uY2F0ZWdvcnlfY2F0ZWdvcnlfXzJybHJmIHtcXG4gIGZvbnQtc2l6ZTogMS41NjNyZW07XFxuICBsaW5lLWhlaWdodDogMS4xNjtcXG4gIGdyaWQtY29sdW1uLWVuZDogc3BhbiAxMjtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjNEU0RTRFO1xcbiAgbWFyZ2luLXRvcDogM3JlbTtcXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XFxuICBwYWRkaW5nLXRvcDogMC42MjVyZW07XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQwcmVtKSB7XFxuICAuY2F0ZWdvcnlfY2F0ZWdvcnlfXzJybHJmIHtcXG4gICAgZm9udC1zaXplOiAxLjU2M3JlbTtcXG4gICAgbGluZS1oZWlnaHQ6IDEuMTY7XFxuICB9XFxufVxcblxcbi5jYXRlZ29yeV9jYXRlZ29yeV9fd29yZC13cmFwcGVyX18zSkpUaCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcbi5jYXRlZ29yeV9jYXRlZ29yeV9fd29yZC13cmFwcGVyX18zSkpUaDo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAtMC4yNXJlbTtcXG4gIHRvcDogLTAuNzVyZW07XFxuICBoZWlnaHQ6IDAuNXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkJBMzA7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zdHlsZXMvdmFyaWFibGVzLnNjc3NcIixcIndlYnBhY2s6Ly9jb21wb25lbnRzL2NhdGVnb3J5L2NhdGVnb3J5Lm1vZHVsZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vc3R5bGVzL3R5cG9ncmFwaHkuc2Nzc1wiLFwid2VicGFjazovL3N0eWxlcy9taXhpbnMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFXQSxXQUFBO0FBT0EsV0FBQTtBQUlBLFNBQUE7QUFYQSxXQUFBO0FBT0EsV0FBQTtBQUlBLFNBQUE7QUNuQkE7RUNxQ0UsbUJBQUE7RUFDQSxpQkFBQTtFRHBDQSx3QkFBQTtFQUVBLDZCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FBSUY7QUVYRTtFRkFGO0lDeUNJLG1CQUFBO0lBQ0EsaUJBQUE7RUQxQkY7QUFDRjs7QUFQQTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7QUFVRjtBQVJFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLHlCRExNO0FDZVZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiJGJyZWFrcG9pbnRzOiAoXFxuICBzbWFsbDogMHJlbSxcXG4gIG1lZGl1bTogKDY0MCAvIDE2KSAqIDFyZW0sXFxuICBsYXJnZTogKDEwMjQgLyAxNikgKiAxcmVtLFxcbik7XFxuXFxuJG1heC13aWR0aDogMTAyNCAvIDE2ICogMXJlbTtcXG5cXG4kZ3JpZC1ndXR0ZXIteDogMzAgLyAxNiAqIDFyZW07XFxuXFxuXFxuLyogQ29sb3JzICovXFxuJGJsYWNrOiAjMDAwMDAwO1xcbiR3aGl0ZTogI2ZmZmZmZjtcXG4kZ2FsbGVyeTogI2VmZWZlZjtcXG4kbWVyY3VyeTogI0UxRTFFMTtcXG4kdHVuZG9yYTogIzRFNEU0RTtcXG5cXG4vKiBZZWxsb3cgKi9cXG4kc3VuZ2xvdzogI0ZGQkEzMDtcXG4kZ2FtYm9nZTogI0VEQTUxNTtcXG5cXG4vKiBCbHVlICovXFxuJGNvYmFsdDogIzAwNDBBMTtcXG5cIixcIkBpbXBvcnQgXFxcIi4uLy4uL3N0eWxlcy90eXBvZ3JhcGh5XFxcIjtcXG5AaW1wb3J0IFxcXCIuLi8uLi9zdHlsZXMvdmFyaWFibGVzXFxcIjtcXG5cXG4uY2F0ZWdvcnkge1xcbiAgQGluY2x1ZGUgZm9udC1zdHlsZXMoXFxcImgyXFxcIik7XFxuICBncmlkLWNvbHVtbi1lbmQ6IHNwYW4gMTI7XFxuXFxuICBib3JkZXItdG9wOiAxcHggc29saWQgJHR1bmRvcmE7XFxuICBtYXJnaW4tdG9wOiAzcmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG4gIHBhZGRpbmctdG9wOiAwLjYyNXJlbTtcXG59XFxuXFxuLmNhdGVnb3J5X193b3JkLXdyYXBwZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcblxcbiAgJjo6YmVmb3JlIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IC0uMjVyZW07XFxuICAgIHRvcDogLTAuNzVyZW07XFxuICAgIGhlaWdodDogLjVyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRzdW5nbG93O1xcbiAgfVxcbn1cIixcIkBpbXBvcnQgXFxcIi4vbWl4aW5zXFxcIjtcXG5cXG4kZm9udC1mYW1pbHktYm9keTogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XFxuJGZvbnQtZmFtaWx5LWhlYWRpbmc6ICdTb3VyY2UgU2VyaWYgUHJvJywgc2VyaWY7XFxuXFxuJGZvbnQtc2l6ZS1yb290OiAxNnB4O1xcblxcbiRmb250LXNpemVzLXNtYWxsOiAoXFxuICBcXFwiaDFcXFwiOiAxLjk1M3JlbSxcXG4gIFxcXCJoMlxcXCI6IDEuNTYzcmVtLFxcbiAgXFxcImgzXFxcIjogMS4yNXJlbSxcXG4gIFxcXCJib2R5XFxcIjogMXJlbSxcXG4gIFxcXCJzbWFsbFxcXCI6IDAuODVyZW0sXFxuKTtcXG5cXG4kZm9udC1zaXplczogKFxcbiAgXFxcImgxXFxcIjogMi4xcmVtLFxcbiAgXFxcImgyXFxcIjogMS41NjNyZW0sXFxuICBcXFwiaDNcXFwiOiAxLjM3NXJlbSxcXG4gIFxcXCJib2R5XFxcIjogMS4xMjVyZW0sXFxuICBcXFwic21hbGxcXFwiOiAwLjlyZW1cXG4pO1xcblxcbiRsaW5lLWhlaWdodHMtc21hbGw6IChcXG4gIFxcXCJoMVxcXCI6IDEuMTYsXFxuICBcXFwiaDJcXFwiOiAxLjE2LFxcbiAgXFxcImgzXFxcIjogMS4xNixcXG4gIFxcXCJib2R5XFxcIjogMS40NSxcXG4gIFxcXCJzbWFsbFxcXCI6IDEuNVxcbik7XFxuXFxuJGxpbmUtaGVpZ2h0czogKFxcbiAgXFxcImgxXFxcIjogMS4xNixcXG4gIFxcXCJoMlxcXCI6IDEuMTYsXFxuICBcXFwiaDNcXFwiOiAxLjE2LFxcbiAgXFxcImJvZHlcXFwiOiAxLjQ1LFxcbiAgXFxcInNtYWxsXFxcIjogMS41XFxuKTtcXG5cXG5AbWl4aW4gZm9udC1zdHlsZXMoJGtleSkge1xcbiAgZm9udC1zaXplOiBtYXAtZ2V0KCRmb250LXNpemVzLXNtYWxsLCAka2V5KTtcXG4gIGxpbmUtaGVpZ2h0OiBtYXAtZ2V0KCRsaW5lLWhlaWdodHMtc21hbGwsICRrZXkpO1xcblxcbiAgQGluY2x1ZGUgYnJlYWtwb2ludChcXFwibWVkaXVtXFxcIikge1xcbiAgICBmb250LXNpemU6IG1hcC1nZXQoJGZvbnQtc2l6ZXMsICRrZXkpO1xcbiAgICBsaW5lLWhlaWdodDogbWFwLWdldCgkbGluZS1oZWlnaHRzLCAka2V5KTtcXG4gIH1cXG59XFxuXCIsXCJAaW1wb3J0IFxcXCIuL3ZhcmlhYmxlc1xcXCI7XFxuXFxuQG1peGluIGJyZWFrcG9pbnQoJHNpemUpIHtcXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICN7bWFwLWdldCgkYnJlYWtwb2ludHMsICRzaXplKX0pIHtcXG4gICAgQGNvbnRlbnQ7XFxuICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcImNhdGVnb3J5XCI6IFwiY2F0ZWdvcnlfY2F0ZWdvcnlfXzJybHJmXCIsXG5cdFwiY2F0ZWdvcnlfX3dvcmQtd3JhcHBlclwiOiBcImNhdGVnb3J5X2NhdGVnb3J5X193b3JkLXdyYXBwZXJfXzNKSlRoXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/category/category.module.scss\n");

/***/ })

})