_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[7],{"/0+H":function(e,t,r){"use strict";t.__esModule=!0,t.isInAmpMode=c,t.useAmp=function(){return c(n.default.useContext(i.AmpStateContext))};var a,n=(a=r("q1tI"))&&a.__esModule?a:{default:a},i=r("lwAK");function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,r=void 0!==t&&t,a=e.hybrid,n=void 0!==a&&a,i=e.hasQuery,c=void 0!==i&&i;return r||n&&c}},"7W2i":function(e,t,r){var a=r("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)}},"8KBb":function(e,t,r){e.exports={like:"like_like__3R7eR",like__likes:"like_like__likes__3Gwih",like__icon:"like_like__icon__3AFFg","like--liked":"like_like--liked__3mCLB",heartbeat:"like_heartbeat__3aLmw",like__label:"like_like__label__1YyOC",like__checkbox:"like_like__checkbox__1eRJw"}},"8Kt/":function(e,t,r){"use strict";r("lSNA");t.__esModule=!0,t.defaultHead=u,t.default=void 0;var a,n=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var r={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var i=a?Object.getOwnPropertyDescriptor(e,n):null;i&&(i.get||i.set)?Object.defineProperty(r,n,i):r[n]=e[n]}r.default=e,t&&t.set(e,r);return r}(r("q1tI")),i=(a=r("Xuae"))&&a.__esModule?a:{default:a},c=r("lwAK"),o=r("FYa8"),l=r("/0+H");function s(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function u(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[n.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(n.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function _(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===n.default.Fragment?e.concat(n.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var f=["name","httpEquiv","charSet","itemProp"];function d(e,t){return e.reduce((function(e,t){var r=n.default.Children.toArray(t.props.children);return e.concat(r)}),[]).reduce(_,[]).reverse().concat(u(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,r=new Set,a={};return function(n){var i=!0;if(n.key&&"number"!==typeof n.key&&n.key.indexOf("$")>0){var c=n.key.slice(n.key.indexOf("$")+1);e.has(c)?i=!1:e.add(c)}switch(n.type){case"title":case"base":t.has(n.type)?i=!1:t.add(n.type);break;case"meta":for(var o=0,l=f.length;o<l;o++){var s=f[o];if(n.props.hasOwnProperty(s))if("charSet"===s)r.has(s)?i=!1:r.add(s);else{var u=n.props[s],_=a[s]||new Set;_.has(u)?i=!1:(_.add(u),a[s]=_)}}}return i}}()).reverse().map((function(e,t){var r=e.key||t;return n.default.cloneElement(e,{key:r})}))}function h(e){var t=e.children,r=(0,n.useContext)(c.AmpStateContext),a=(0,n.useContext)(o.HeadManagerContext);return n.default.createElement(i.default,{reduceComponentsToState:d,headManager:a,inAmpMode:(0,l.isInAmpMode)(r)},t)}h.rewind=function(){};var p=h;t.default=p},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},FYa8:function(e,t,r){"use strict";var a;t.__esModule=!0,t.HeadManagerContext=void 0;var n=((a=r("q1tI"))&&a.__esModule?a:{default:a}).default.createContext({});t.HeadManagerContext=n},GITI:function(e,t,r){e.exports={container:"Home_container__3sao-"}},Ijbi:function(e,t,r){var a=r("WkPL");e.exports=function(e){if(Array.isArray(e))return a(e)}},Nsbk:function(e,t){function r(t){return e.exports=r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},r(t)}e.exports=r},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},Qetd:function(e,t,r){"use strict";var a=Object.assign.bind(Object);e.exports=a,e.exports.default=e.exports},RIqP:function(e,t,r){var a=r("Ijbi"),n=r("EbDI"),i=r("ZhPi"),c=r("Bnag");e.exports=function(e){return a(e)||n(e)||i(e)||c()}},RNiq:function(e,t,r){"use strict";r.r(t),r.d(t,"__N_SSG",(function(){return z})),r.d(t,"default",(function(){return G}));var a=r("rePB");function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}function i(e){return function(e){if(Array.isArray(e))return e}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(e){if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var c=r("nKUr"),o=r("8Kt/"),l=r.n(o),s=r("GITI"),u=r.n(s),_=r("q1tI"),f=r.n(_),d=r("LvDl"),h=r("TSYQ"),p=r.n(h),j=["International","Corona","Schweiz","Wirtschaft","Sport","Z\xfcrich","Kultur"],b=r("pWeJ"),m=r.n(b);function O(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function x(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?O(Object(r),!0).forEach((function(t){Object(a.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):O(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var v=function(e){return Object(c.jsx)("button",x(x({},e),{},{className:p()(m.a["navigation__scroll-button"],m.a["navigation__scroll-button--left"]),children:Object(c.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:Object(c.jsx)("path",{xmlns:"http://www.w3.org/2000/svg",d:"M14.7071 5.29289C15.0976 5.68342 15.0976 6.31658 14.7071 6.70711L9.41421 12L14.7071 17.2929C15.0976 17.6834 15.0976 18.3166 14.7071 18.7071C14.3166 19.0976 13.6834 19.0976 13.2929 18.7071L7.29289 12.7071C6.90237 12.3166 6.90237 11.6834 7.29289 11.2929L13.2929 5.29289C13.6834 4.90237 14.3166 4.90237 14.7071 5.29289Z",fill:"#000"})})}))},g=function(e){return Object(c.jsx)("button",x(x({},e),{},{className:p()(m.a["navigation__scroll-button"],m.a["navigation__scroll-button--right"]),children:Object(c.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:Object(c.jsx)("path",{xmlns:"http://www.w3.org/2000/svg",d:"M9.29289 18.7071C8.90237 18.3166 8.90237 17.6834 9.29289 17.2929L14.5858 12L9.29289 6.70711C8.90237 6.31658 8.90237 5.68342 9.29289 5.29289C9.68342 4.90237 10.3166 4.90237 10.7071 5.29289L16.7071 11.2929C17.0976 11.6834 17.0976 12.3166 16.7071 12.7071L10.7071 18.7071C10.3166 19.0976 9.68342 19.0976 9.29289 18.7071Z",fill:"#000"})})}))},w=function(){var e,t=Object(_.useRef)(null),r=function(e){var t=Object(_.useState)({left:!1,right:!1}),r=t[0],a=t[1];return Object(_.useEffect)((function(){var t=e.current,r=function(){if(t){var e=t.scrollWidth,r=t.offsetWidth,n=t.scrollLeft;a({left:n>20,right:e>r+n+20})}},n=Object(d.debounce)((function(){r()}),500),i=Object(d.throttle)((function(){r()}),16.667);return window.addEventListener("resize",n),t&&t.addEventListener("scroll",i),function(){window.removeEventListener("resize",n),t&&t.removeEventListener("scroll",i)}}),[e,a]),r}(t),n=j,i=function(e){t.current&&t.current.scrollBy({left:t.current.offsetWidth*("left"===e?-1:1)*.9,behavior:"smooth"})},o=p()(m.a.navigation,(e={},Object(a.a)(e,m.a["navigation--scrollable-left"],r.left),Object(a.a)(e,m.a["navigation--scrollable-right"],r.right),e));return Object(c.jsxs)("nav",{className:o,children:[Object(c.jsx)(v,{onClick:function(){return i("left")}}),Object(c.jsxs)("ul",{ref:t,className:m.a.navigation__list,children:[Object(c.jsx)("li",{className:m.a.navigation__item,children:Object(c.jsx)("a",{href:"#aktuelles",className:p()(m.a.navigation__link,m.a["navigation__link--active"]),children:"Aktuelles"})}),n.map((function(e,t){return Object(c.jsx)("li",{className:m.a.navigation__item,children:Object(c.jsx)("a",{href:"#".concat(e),className:m.a.navigation__link,children:e})},e)}))]}),Object(c.jsx)(g,{onClick:function(){return i("right")}})]})},y=function(){return Object(c.jsxs)("header",{className:m.a.header,children:[Object(c.jsx)("h1",{className:m.a.header__title,children:"The News"}),Object(c.jsx)(w,{})]})},C=r("VmDL"),k=r.n(C),N=r("8KBb"),M=r.n(N),S=function(){return Object(c.jsx)("svg",{className:M.a.like__icon,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:Object(c.jsx)("path",{xmlns:"http://www.w3.org/2000/svg",d:"M12 4.52765C9.64418 2.41689 6.02125 2.49347 3.75736 4.75736C1.41421 7.1005 1.41421 10.8995 3.75736 13.2426L10.5858 20.0711C11.3668 20.8521 12.6332 20.8521 13.4142 20.0711L20.2426 13.2426C22.5858 10.8995 22.5858 7.1005 20.2426 4.75736C17.9787 2.49347 14.3558 2.41689 12 4.52765ZM10.8284 6.17157L11.2929 6.63604C11.6834 7.02656 12.3166 7.02656 12.7071 6.63604L13.1716 6.17157C14.7337 4.60948 17.2663 4.60948 18.8284 6.17157C20.3905 7.73367 20.3905 10.2663 18.8284 11.8284L12 18.6569L5.17157 11.8284C3.60948 10.2663 3.60948 7.73367 5.17157 6.17157C6.73367 4.60948 9.26633 4.60948 10.8284 6.17157Z"})})},P=function(e){var t=e.identifier,r=e.numOfLikes,n=Object(_.useState)(!1),i=n[0],o=n[1],l=p()(M.a.like,Object(a.a)({},M.a["like--liked"],i));return Object(c.jsxs)("div",{className:l,children:[Object(c.jsx)("span",{className:M.a.like__likes,children:r+(i?1:0)}),Object(c.jsx)("input",{type:"checkbox",id:"checkbox__"+t,onChange:function(){o((function(e){return!e}))},checked:i,className:M.a.like__checkbox}),Object(c.jsx)("label",{htmlFor:"checkbox__"+t,className:M.a.like__label,children:Object(c.jsx)(S,{})})]})},A=function(e){var t=new Date(e),r=t.getDate(),a=t.getMonth()+1,n=t.getFullYear();return"".concat(r,".").concat(a,".").concat(n)},L=function(e){var t=e.article;return Object(c.jsxs)("article",{className:p()(k.a.article,k.a["article--main"]),children:[Object(c.jsx)("div",{className:k.a["article__image-wrapper"],children:Object(c.jsx)("img",{alt:"",src:t.urlToImage,className:k.a.article__image})}),Object(c.jsx)("span",{className:k.a.article__label,children:t.category}),Object(c.jsx)("h2",{className:k.a.article__title,children:Object(c.jsx)("a",{href:t.url,children:t.title})}),Object(c.jsx)("p",{className:k.a.article__description,children:t.description}),Object(c.jsxs)("footer",{className:k.a.article__footer,children:[Object(c.jsxs)("p",{className:k.a.article__meta,children:[t.author," \u2022 ",Object(c.jsx)("time",{dateTime:t.publishedAt,children:A(t.publishedAt)})]}),Object(c.jsx)(P,{identifier:t.url,numOfLikes:t.likes})]})]})},D=function(e){var t=e.article;return Object(c.jsxs)("article",{className:p()(k.a.article,k.a["article--sub"]),children:[Object(c.jsx)("div",{className:k.a["article__image-wrapper"],children:Object(c.jsx)("img",{alt:"",src:t.urlToImage,className:k.a.article__image})}),Object(c.jsx)("span",{className:k.a.article__label,children:t.category}),Object(c.jsx)("h2",{className:k.a.article__title,children:Object(c.jsx)("a",{href:t.url,children:t.title})}),Object(c.jsx)("p",{className:k.a.article__description,children:t.description}),Object(c.jsxs)("footer",{className:k.a.article__footer,children:[Object(c.jsxs)("p",{className:k.a.article__meta,children:[t.author," \u2022 ",Object(c.jsx)("time",{dateTime:t.publishedAt,children:A(t.publishedAt)})]}),Object(c.jsx)(P,{identifier:t.url,numOfLikes:t.likes})]})]})},I=function(e){var t=e.article;return Object(c.jsxs)("article",{className:k.a.article,children:[Object(c.jsx)("h2",{className:k.a.article__title,children:Object(c.jsx)("a",{href:t.url,children:t.title})}),Object(c.jsx)("p",{className:k.a.article__description,children:t.description}),Object(c.jsxs)("footer",{className:k.a.article__footer,children:[Object(c.jsxs)("p",{className:k.a.article__meta,children:[t.author," \u2022 ",Object(c.jsx)("time",{dateTime:t.publishedAt,children:A(t.publishedAt)})]}),Object(c.jsx)(P,{identifier:t.url,numOfLikes:t.likes})]})]})},E=function(e){var t=e.article;return Object(c.jsxs)("article",{className:p()(k.a.article,k.a["article--column"]),children:[Object(c.jsx)("div",{className:k.a["article__image-wrapper"],children:Object(c.jsx)("img",{alt:"",src:t.urlToImage,className:k.a.article__image})}),Object(c.jsx)("span",{className:k.a.article__type,children:"Kolumne"}),Object(c.jsx)("h2",{className:k.a.article__title,children:Object(c.jsx)("a",{href:t.url,children:t.title})}),Object(c.jsxs)("footer",{className:k.a.article__footer,children:[Object(c.jsxs)("p",{className:k.a.article__meta,children:[t.author," \u2022 ",Object(c.jsx)("time",{dateTime:t.publishedAt,children:A(t.publishedAt)})]}),Object(c.jsx)(P,{identifier:t.url,numOfLikes:t.likes})]})]})},Z=function(e){var t=e.article;return Object(c.jsxs)("article",{className:p()(k.a.article,k.a["article--category-main"]),children:[Object(c.jsx)("div",{className:k.a["article__image-wrapper"],children:Object(c.jsx)("img",{alt:"",src:t.urlToImage,className:k.a.article__image})}),Object(c.jsx)("h2",{className:k.a.article__title,children:Object(c.jsx)("a",{href:t.url,children:t.title})}),Object(c.jsx)("p",{className:k.a.article__description,children:t.description}),Object(c.jsxs)("footer",{className:k.a.article__footer,children:[Object(c.jsxs)("p",{className:k.a.article__meta,children:[t.author," \u2022 ",Object(c.jsx)("time",{dateTime:t.publishedAt,children:A(t.publishedAt)})]}),Object(c.jsx)(P,{identifier:t.url,numOfLikes:t.likes})]})]})},T=r("WqkS"),H=r.n(T),R=function(e){var t=e.category,r=e.articles;r.slice(0,2);return Object(c.jsxs)(f.a.Fragment,{children:[Object(c.jsx)("h2",{className:H.a.category,id:t,children:Object(c.jsx)("span",{className:H.a["category__word-wrapper"],children:t})}),r.slice(0,2).map((function(e){return Object(c.jsx)(Z,{article:e},e.url)})),r.slice(2,5).map((function(e){return Object(c.jsx)(I,{article:e},e.url)}))]})},W=r("vnpv"),Y=r.n(W),B=function(e){var t=e.main,r=void 0!==t&&t;return Object(c.jsx)("svg",{className:p()(Y.a.weather__icon,Object(a.a)({},Y.a["weather__icon--main"],r)),xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:Object(c.jsx)("path",{xmlns:"http://www.w3.org/2000/svg",d:"M12 2C12.5523 2 13 2.44772 13 3V4C13 4.55228 12.5523 5 12 5C11.4477 5 11 4.55228 11 4V3C11 2.44772 11.4477 2 12 2ZM19.0711 4.92893C19.4616 5.31945 19.4616 5.95261 19.0711 6.34314L18.364 7.05025C17.9735 7.44077 17.3403 7.44077 16.9498 7.05025C16.5593 6.65972 16.5593 6.02656 16.9498 5.63603L17.6569 4.92893C18.0474 4.5384 18.6806 4.5384 19.0711 4.92893ZM4.92893 4.92893C5.31945 4.5384 5.95262 4.5384 6.34314 4.92893L7.05025 5.63603C7.44077 6.02656 7.44077 6.65972 7.05025 7.05025C6.65972 7.44077 6.02656 7.44077 5.63603 7.05025L4.92893 6.34314C4.5384 5.95262 4.5384 5.31945 4.92893 4.92893ZM12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8ZM6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12C18 15.3137 15.3137 18 12 18C8.68629 18 6 15.3137 6 12ZM2 12C2 11.4477 2.44772 11 3 11H4C4.55228 11 5 11.4477 5 12C5 12.5523 4.55228 13 4 13H3C2.44772 13 2 12.5523 2 12ZM19 12C19 11.4477 19.4477 11 20 11H21C21.5523 11 22 11.4477 22 12C22 12.5523 21.5523 13 21 13H20C19.4477 13 19 12.5523 19 12ZM5.63603 16.9497C6.02656 16.5592 6.65972 16.5592 7.05025 16.9497C7.44077 17.3403 7.44077 17.9734 7.05025 18.364L6.34314 19.0711C5.95262 19.4616 5.31945 19.4616 4.92893 19.0711C4.5384 18.6805 4.5384 18.0474 4.92893 17.6568L5.63603 16.9497ZM16.9498 18.364C16.5593 17.9734 16.5593 17.3403 16.9498 16.9497C17.3403 16.5592 17.9735 16.5592 18.364 16.9497L19.0711 17.6568C19.4616 18.0474 19.4616 18.6805 19.0711 19.0711C18.6806 19.4616 18.0474 19.4616 17.6569 19.0711L16.9498 18.364ZM12 19C12.5523 19 13 19.4477 13 20V21C13 21.5523 12.5523 22 12 22C11.4477 22 11 21.5523 11 21V20C11 19.4477 11.4477 19 12 19Z"})})},F={SUNNY:{icon:B,label:"Sonnig"},CLOUDY:{icon:function(){return Object(c.jsx)("svg",{className:Y.a.weather__icon,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:Object(c.jsx)("path",{xmlns:"http://www.w3.org/2000/svg",d:"M5 10C5 6.68629 7.68629 4 11 4C13.627 4 15.858 5.68745 16.6713 8.03713C19.669 8.37085 22 10.9132 22 14C22 17.3137 19.3137 20 16 20H7C4.23858 20 2 17.7614 2 15C2 12.9436 3.24073 11.1787 5.01385 10.4103C5.00466 10.2746 5 10.1378 5 10ZM11 6C8.79086 6 7 7.79086 7 10C7 10.3029 7.03348 10.5967 7.09656 10.8785C7.21716 11.4173 6.8783 11.9519 6.33958 12.0727C5.00015 12.3732 4 13.571 4 15C4 16.6569 5.34315 18 7 18H16C18.2091 18 20 16.2091 20 14C20 11.7909 18.2091 10 16 10C15.9732 10 15.9465 10.0003 15.9198 10.0008C15.4368 10.0102 15.0161 9.67312 14.9201 9.19971C14.5499 7.37395 12.9343 6 11 6Z"})})},label:"Bew\xf6lkt"}},q=function(e){var t=e.condition,r=e.temparatur,a=e.weekDay,n=t.icon,i=t.label;return Object(c.jsxs)("li",{className:Y.a.forecast__item,children:[Object(c.jsx)("span",{className:Y.a["forecast__week-day"],children:a}),Object(c.jsx)(n,{}),Object(c.jsxs)("span",{className:Y.a.forecast__temparatur,children:[r,"\xb0"]}),Object(c.jsx)("span",{className:Y.a.forecast__label,children:i})]})},J=function(e){e.article;return Object(c.jsxs)("article",{className:Y.a.weather,children:[Object(c.jsxs)("div",{className:Y.a.weather__today,children:[Object(c.jsx)("h3",{className:Y.a.weather__title,children:"Z\xfcrich"}),Object(c.jsx)(B,{main:!0}),Object(c.jsx)("div",{className:Y.a.weather__temparatur,children:"23\xb0"}),Object(c.jsx)("div",{className:Y.a.weather__condition,children:"Sonnig"})]}),Object(c.jsx)("div",{className:Y.a.weather__forecast,children:Object(c.jsxs)("ul",{className:Y.a.forecast,children:[Object(c.jsx)(q,{condition:F.SUNNY,temparatur:19,weekDay:"Mo"}),Object(c.jsx)(q,{condition:F.CLOUDY,temparatur:9,weekDay:"Di"}),Object(c.jsx)(q,{condition:F.SUNNY,temparatur:21,weekDay:"Mi"})]})})]})},X=r("oXzV"),K=r.n(X),U=function(){return Object(c.jsx)("article",{className:K.a.ad,children:Object(c.jsxs)("p",{children:[Object(c.jsx)("span",{className:K.a.ad__letter,children:"W"}),Object(c.jsx)("span",{className:K.a.ad__letter,children:"e"}),Object(c.jsx)("span",{className:K.a.ad__letter,children:"r"}),Object(c.jsx)("span",{className:K.a.ad__letter,children:"b"}),Object(c.jsx)("span",{className:K.a.ad__letter,children:"u"}),Object(c.jsx)("span",{className:K.a.ad__letter,children:"n"}),Object(c.jsx)("span",{className:K.a.ad__letter,children:"g"})]})})};function V(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}var z=!0;function G(e){var t=e.articlesByCategory,r=i(e.headlines),n=r[0],o=r[1],s=r[2],_=r.slice(3);return Object(c.jsxs)("div",{className:u.a.container,children:[Object(c.jsxs)(l.a,{children:[Object(c.jsx)("title",{children:"Create Next App"}),Object(c.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),Object(c.jsx)(y,{}),Object(c.jsx)("h2",{className:"show-for-sr",children:"Aktuelles"}),Object(c.jsx)(L,{article:n},n.url),Object(c.jsx)(D,{article:o},o.url),Object(c.jsx)(E,{article:s},s.url),Object(c.jsx)(J,{}),_.slice(0,3).map((function(e){return Object(c.jsx)(I,{article:e},e.url)})),Object(c.jsx)(U,{}),t.map((function(e){return Object(c.jsx)(R,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?V(Object(r),!0).forEach((function(t){Object(a.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):V(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e),e.category)}))]})}},SksO:function(e,t){function r(t,a){return e.exports=r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},r(t,a)}e.exports=r},TSYQ:function(e,t,r){var a;!function(){"use strict";var r={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var i=typeof a;if("string"===i||"number"===i)e.push(a);else if(Array.isArray(a)&&a.length){var c=n.apply(null,a);c&&e.push(c)}else if("object"===i)for(var o in a)r.call(a,o)&&a[o]&&e.push(o)}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(a=function(){return n}.apply(t,[]))||(e.exports=a)}()},VmDL:function(e,t,r){e.exports={article:"article_article__1Bbd7","article--main":"article_article--main__22vJx","article--sub":"article_article--sub__3u6DR","article--category-main":"article_article--category-main__3l_r0","article--column":"article_article--column__1Cus_",article__label:"article_article__label__7yhAl","article__image-wrapper":"article_article__image-wrapper__1MLwX",article__image:"article_article__image__1oz-X",article__title:"article_article__title__34pet",article__description:"article_article__description__2fEZl",article__footer:"article_article__footer__2AkDL",article__type:"article_article__type__rY6yZ"}},W8MJ:function(e,t){function r(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}e.exports=function(e,t,a){return t&&r(e.prototype,t),a&&r(e,a),e}},WkPL:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}},WqkS:function(e,t,r){e.exports={category:"category_category__2rlrf","category__word-wrapper":"category_category__word-wrapper__3JJTh"}},Xuae:function(e,t,r){"use strict";var a=r("RIqP"),n=r("lwsE"),i=r("W8MJ"),c=(r("PJYZ"),r("7W2i")),o=r("a1gu"),l=r("Nsbk");function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,a=l(e);if(t){var n=l(this).constructor;r=Reflect.construct(a,arguments,n)}else r=a.apply(this,arguments);return o(this,r)}}t.__esModule=!0,t.default=void 0;var u=r("q1tI"),_=function(e){c(r,e);var t=s(r);function r(e){var i;return n(this,r),(i=t.call(this,e))._hasHeadManager=void 0,i.emitChange=function(){i._hasHeadManager&&i.props.headManager.updateHead(i.props.reduceComponentsToState(a(i.props.headManager.mountedInstances),i.props))},i._hasHeadManager=i.props.headManager&&i.props.headManager.mountedInstances,i}return i(r,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),r}(u.Component);t.default=_},YuTi:function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},ZhPi:function(e,t,r){var a=r("WkPL");e.exports=function(e,t){if(e){if("string"===typeof e)return a(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?a(e,t):void 0}}},a1gu:function(e,t,r){var a=r("cDf5"),n=r("PJYZ");e.exports=function(e,t){return!t||"object"!==a(t)&&"function"!==typeof t?n(e):t}},cDf5:function(e,t){function r(t){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?e.exports=r=function(e){return typeof e}:e.exports=r=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(t)}e.exports=r},lSNA:function(e,t){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},lwAK:function(e,t,r){"use strict";var a;t.__esModule=!0,t.AmpStateContext=void 0;var n=((a=r("q1tI"))&&a.__esModule?a:{default:a}).default.createContext({});t.AmpStateContext=n},lwsE:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},oXzV:function(e,t,r){e.exports={ad:"ad_ad__1uGRB",ad__letter:"ad_ad__letter__2o3Fv","move-in-move-out":"ad_move-in-move-out__Fll73"}},pWeJ:function(e,t,r){e.exports={header:"header_header__3hRD-",header__title:"header_header__title__2zHP8",navigation:"header_navigation__1FCsx","navigation--scrollable-left":"header_navigation--scrollable-left__2nPcO","navigation--scrollable-right":"header_navigation--scrollable-right__1f9U0","navigation__scroll-button":"header_navigation__scroll-button__2y0f9","navigation__scroll-button--left":"header_navigation__scroll-button--left__2TYps","navigation__scroll-button--right":"header_navigation__scroll-button--right__3Dk0E",navigation__list:"header_navigation__list__8SYEG",navigation__item:"header_navigation__item__37Nlh",navigation__link:"header_navigation__link__ViPys","navigation__link--active":"header_navigation__link--active__3FXdX"}},rePB:function(e,t,r){"use strict";function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.d(t,"a",(function(){return a}))},vlRD:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r("RNiq")}])},vnpv:function(e,t,r){e.exports={weather:"weather_weather__3nkuA",weather__today:"weather_weather__today__2X39K",weather__forecast:"weather_weather__forecast__2ZNEk",weather__title:"weather_weather__title__1xxo1",weather__icon:"weather_weather__icon__2sA9F",forecast:"weather_forecast__2o4MC","weather__icon--main":"weather_weather__icon--main__1kx1y",weather__temparatur:"weather_weather__temparatur__3xlmm",weather__condition:"weather_weather__condition__3qDf3",forecast__item:"weather_forecast__item__1ys-F","forecast__week-day":"weather_forecast__week-day__34Htr",forecast__temparatur:"weather_forecast__temparatur__3XNck"}},yLpj:function(e,t){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(a){"object"===typeof window&&(r=window)}e.exports=r}},[["vlRD",0,1,3]]]);