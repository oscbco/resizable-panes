!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react"),require("prop-types")):"function"==typeof define&&define.amd?define(["react","prop-types"],t):"object"==typeof exports?exports.ResizablePanes=t(require("react"),require("prop-types")):e.ResizablePanes=t(e.React,e.PropTypes)}(window,function(n,r){return u={},o.m=i=[function(e,t){e.exports=n},function(e,t,n){e.exports=n(2)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==p(e)&&"function"!=typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var n,r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(n in e){var i;Object.prototype.hasOwnProperty.call(e,n)&&((i=o?Object.getOwnPropertyDescriptor(e,n):null)&&(i.get||i.set)?Object.defineProperty(r,n,i):r[n]=e[n])}r.default=e,t&&t.set(e,r);return r}(n(0)),s=r(n(3)),c=r(n(5)),l="/home/darkcode/Projects/libraries/resizable-panes/source/TriplePane/TriplePane.js";function r(e){return e&&e.__esModule?e:{default:e}}function u(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(t,e){var n,r=Object.keys(t);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(t),e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)),r}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(i){var u=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t,n,r,o=m(i);return t=u?(e=m(this).constructor,Reflect.construct(o,arguments,e)):o.apply(this,arguments),n=this,!(r=t)||"object"!==p(r)&&"function"!=typeof r?b(n):r}}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var o=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(o,a.PureComponent);var e,t,n,r=h(o);function o(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),y(b(t=r.call(this,e)),"size",function(e){return e&&t.setState(e),{width:t.state.width,height:t.state.height}}),y(b(t),"getGrid",function(){return function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach(function(e){y(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}({gridTemplateColumns:"[start]"+t.state.width+"px [a] auto [end]",gridTemplateRows:"[start]"+t.state.height+"px [a] auto [end]"},t.props.style)}),y(b(t),"handlers",{m1:{a:[]},m2:{a:["e"],b:[]},m3:{a:["s"],b:[]},m4:{a:["e","s","se"],b:["s"],c:[]},m5:{a:["e"],b:["s","sw"],c:[]},m6:{a:["s"],b:[],c:["e","ne"]},m7:{a:["s","se"],b:["w"],c:[]}}),y(b(t),"shouldRender",function(e,t){return"m1"===e?"a"===t:"m2"!==e&&"m3"!==e||"c"!==t}),t.state={width:t.props.width,height:t.props.height},t}return e=o,(t=[{key:"render",value:function(){var e=this.props,t=e.mode,n=e.areaa,r=e.areab,o=e.areac,i=e.paneClassName,u=e.id;return a.default.createElement("div",{id:u,className:c.default.appcontent+" "+c.default[t],style:this.getGrid(),__source:{fileName:l,lineNumber:82,columnNumber:7}},this.shouldRender(t,n)?a.default.createElement(s.default,{className:c.default[n]+" "+i,handlers:this.handlers[t][n],size:this.size,debouncingFunction:this.props.debouncingFunction,__source:{fileName:l,lineNumber:83,columnNumber:43}},this.props.panea):null,this.shouldRender(t,r)?a.default.createElement(s.default,{className:c.default[r]+" "+i,handlers:this.handlers[t][r],size:this.size,parentId:c.default.appcontent,debouncingFunction:this.props.debouncingFunction,__source:{fileName:l,lineNumber:86,columnNumber:43}},this.props.paneb):null,this.shouldRender(t,o)?a.default.createElement(s.default,{className:c.default[o]+" "+i,handlers:this.handlers[t][o],size:this.size,parentId:c.default.appcontent,debouncingFunction:this.props.debouncingFunction,__source:{fileName:l,lineNumber:89,columnNumber:43}},this.props.panec):null)}}])&&f(e.prototype,t),n&&f(e,n),o}();(t.default=o).defaultProps={id:"",panec:null,areac:"c"}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,u=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==s(e)&&"function"!=typeof e)return{default:e};var t=a();if(t&&t.has(e))return t.get(e);var n,r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(n in e){var i;Object.prototype.hasOwnProperty.call(e,n)&&((i=o?Object.getOwnPropertyDescriptor(e,n):null)&&(i.get||i.set)?Object.defineProperty(r,n,i):r[n]=e[n])}r.default=e,t&&t.set(e,r);return r}(n(0)),o=(r=n(4))&&r.__esModule?r:{default:r},i="/home/darkcode/Projects/libraries/resizable-panes/source/Resizable/Resizable.js";function a(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return a=function(){return e},e}function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(i){var u=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t,n,r,o=d(i);return t=u?(e=d(this).constructor,Reflect.construct(o,arguments,e)):o.apply(this,arguments),n=this,!(r=t)||"object"!==s(r)&&"function"!=typeof r?f(n):r}}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var b=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(o,u.PureComponent);var e,t,n,r=p(o);function o(e){var i;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),h(f(i=r.call(this,e)),"handlerStyles",{e:{background:"transparent",position:"absolute",width:"10px",height:"100%",right:"-5px",cursor:"col-resize",zIndex:"6001"},s:{background:"transparent",position:"absolute",width:"100%",height:"10px",bottom:"-5px",left:"0px",cursor:"ns-resize",zIndex:"6002"},w:{background:"transparent",position:"absolute",width:"10px",height:"100%",left:"-5px",cursor:"col-resize",zIndex:"6003"},n:{background:"transparent",position:"absolute",width:"100%",height:"10px",top:"-5px",cursor:"row-resize",zIndex:"6004"},nw:{background:"transparent",position:"absolute",width:"10px",height:"10px",top:NaN,left:NaN,cursor:"nw-resize",zIndex:"6005"},ne:{background:"transparent",position:"absolute",width:"10px",height:"10px",top:"-5px",right:"-5px",cursor:"nesw-resize",zIndex:"6006"},sw:{background:"transparent",position:"absolute",width:"10px",height:"10px",left:"-5px",bottom:"-5px",cursor:"nesw-resize",zIndex:"6007"},se:{background:"transparent",position:"absolute",width:"10px",height:"10px",bottom:"-5px",right:"-5px",cursor:"nwse-resize",zIndex:"6008"}}),h(f(i),"minSize",{minWidth:70,minHeight:70}),h(f(i),"mouseDown",function(e,t){t.preventDefault();var n={x:t.clientX,y:t.clientY},r={width:i.props.size().width,height:i.props.size().height},o={width:i.resizableRef.current.parentNode.offsetWidth,height:i.resizableRef.current.parentNode.offsetHeight};i.bindedMouseMove=i.mouseMove.bind(f(i),e,n,r,o),document.addEventListener("mousemove",i.bindedMouseMove),document.addEventListener("mouseup",i.mouseUp)}),h(f(i),"mouseUp",function(){document.removeEventListener("mousemove",i.bindedMouseMove),document.removeEventListener("mouseup",i.mouseUp),document.body.classList.remove("notransition"),i.props.debouncingFunction(i.props.size().width,i.props.size().height)}),i.resizableRef=u.default.createRef(),i}return e=o,(t=[{key:"moveHandleE",value:function(e,t,n,r){var o=n.width+(e.clientX-t.x);o>=this.minSize.minWidth&&o<=r.width-this.minSize.minWidth&&this.props.size({width:o})}},{key:"moveHandleW",value:function(e,t,n,r){var o=n.width+(e.clientX-t.x);o>=this.minSize.minWidth&&o<=r.width-this.minSize.minWidth&&this.props.size({width:o})}},{key:"moveHandleS",value:function(e,t,n,r){var o=n.height+(e.clientY-t.y);o>=this.minSize.minHeight&&o<=r.height-this.minSize.minHeight&&this.props.size({height:o})}},{key:"moveHandleN",value:function(e,t,n,r){var o=n.height+(e.clientY-t.y);o>=this.minSize.minHeight&&o<=r.height-this.minSize.minHeight&&this.props.size({height:o})}},{key:"moveHandleSE",value:function(e,t,n,r){this.moveHandleE(e,t,n,r),this.moveHandleS(e,t,n,r)}},{key:"mouseMove",value:function(e,t,n,r,o){switch(e){case"e":this.moveHandleE(o,t,n,r);break;case"s":this.moveHandleS(o,t,n,r);break;case"w":this.moveHandleW(o,t,n,r);break;case"n":this.moveHandleN(o,t,n,r);break;case"nw":this.moveHandleN(o,t,n,r),this.moveHandleW(o,t,n,r);break;case"ne":this.moveHandleN(o,t,n,r),this.moveHandleE(o,t,n,r);break;case"sw":this.moveHandleS(o,t,n,r),this.moveHandleW(o,t,n,r);break;case"se":this.moveHandleS(o,t,n,r),this.moveHandleE(o,t,n,r)}}},{key:"render",value:function(){var t=this,e=this.props.handlers.map(function(e){return u.default.createElement("div",{key:e,style:t.handlerStyles[e],onMouseDown:t.mouseDown.bind(t,e),__source:{fileName:i,lineNumber:216,columnNumber:7}})});return u.default.createElement("div",{ref:this.resizableRef,className:this.props.className,__source:{fileName:i,lineNumber:220,columnNumber:7}},e,this.props.children)}}])&&c(e.prototype,t),n&&c(e,n),o}();h(t.default=b,"propTypes",{className:o.default.string.isRequired,handlers:o.default.array.isRequired,size:o.default.func.isRequired}),h(b,"defaultProps",{handlers:[]})},function(e,t){e.exports=r},function(e,t,n){e.exports={appcontent:"_1yeEJaXw8owuiH8CTiUho2",panea:"_3P6YIsdlEJs8x4rImeAJ9H",paneb:"O85TCE1ipEtdfa_Pc1Ldf",a:"_1MSRSelxhzHjFiQuTyT877",b:"_3p1dV6-Xd80HFUhR1L7juI",c:"_2fhGzHi0IcceSsSv6wXrJ8",m1:"w2e5YX6v_iN0CD4DgqX1I",m2:"_2gIM3PnFCXP4La5WhiC0Cm",m5:"_2bw3IpOGMG998vlBVG-Vnj",m7:"OfWne4g53NdH3anyePe7v",m3:"_39D2lUs6LkgwbwOVPkD8pE",m6:"_1uO_CaERs9Q9cJnaiD-LAx",m4:"_3fsMziFdfRxw_9_GWa41ta",panex:"_3--jUWm4lD6ep5bO5btg_R",paney:"_3BtFxUHabMf9wk-J4BaiC-",panez:"_1Y38OBnI4RBZUTnZoZzCAZ"}}],o.c=u,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="./",o(o.s=1);function o(e){if(u[e])return u[e].exports;var t=u[e]={i:e,l:!1,exports:{}};return i[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}var i,u});