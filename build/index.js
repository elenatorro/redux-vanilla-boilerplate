!function e(t,n,r){function o(i,c){if(!n[i]){if(!t[i]){var a="function"==typeof require&&require;if(!c&&a)return a(i,!0);if(u)return u(i,!0);var s=new Error("Cannot find module '"+i+"'");throw s.code="MODULE_NOT_FOUND",s}var f=n[i]={exports:{}};t[i][0].call(f.exports,function(e){var n=t[i][1][e];return o(n||e)},f,f.exports,e,t,n,r)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<r.length;i++)o(r[i]);return o}({1:[function(e,t,n){"use strict";var r=e("./src/store/configureStore"),o=function(e){return e&&e.__esModule?e:{default:e}}(r),u=e("./src/components/counter"),i=e("./src/action-creators/counter"),c=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(i),a=e("redux"),s=(0,o.default)(),f=(0,a.bindActionCreators)(c,s.dispatch);u.CounterComponent.init(s,f)},{"./src/action-creators/counter":24,"./src/components/counter":26,"./src/store/configureStore":29,redux:9}],2:[function(e,t,n){function r(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function u(e){if(d===setTimeout)return setTimeout(e,0);if((d===r||!d)&&setTimeout)return d=setTimeout,setTimeout(e,0);try{return d(e,0)}catch(t){try{return d.call(null,e,0)}catch(t){return d.call(this,e,0)}}}function i(e){if(l===clearTimeout)return clearTimeout(e);if((l===o||!l)&&clearTimeout)return l=clearTimeout,clearTimeout(e);try{return l(e)}catch(t){try{return l.call(null,e)}catch(t){return l.call(this,e)}}}function c(){v&&y&&(v=!1,y.length?h=y.concat(h):b=-1,h.length&&a())}function a(){if(!v){var e=u(c);v=!0;for(var t=h.length;t;){for(y=h,h=[];++b<t;)y&&y[b].run();b=-1,t=h.length}y=null,v=!1,i(e)}}function s(e,t){this.fun=e,this.array=t}function f(){}var d,l,p=t.exports={};!function(){try{d="function"==typeof setTimeout?setTimeout:r}catch(e){d=r}try{l="function"==typeof clearTimeout?clearTimeout:o}catch(e){l=o}}();var y,h=[],v=!1,b=-1;p.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];h.push(new s(e,t)),1!==h.length||v||u(a)},s.prototype.run=function(){this.fun.apply(null,this.array)},p.title="browser",p.browser=!0,p.env={},p.argv=[],p.version="",p.versions={},p.on=f,p.addListener=f,p.once=f,p.off=f,p.removeListener=f,p.removeAllListeners=f,p.emit=f,p.prependListener=f,p.prependOnceListener=f,p.listeners=function(e){return[]},p.binding=function(e){throw new Error("process.binding is not supported")},p.cwd=function(){return"/"},p.chdir=function(e){throw new Error("process.chdir is not supported")},p.umask=function(){return 0}},{}],3:[function(e,t,n){"use strict";function r(e){return function(t){var n=t.dispatch,r=t.getState;return function(t){return function(o){return"function"==typeof o?o(n,r,e):t(o)}}}}n.__esModule=!0;var o=r();o.withExtraArgument=r,n.default=o},{}],4:[function(e,t,n){"use strict";function r(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return function(n,r,u){var c=e(n,r,u),a=c.dispatch,s=[],f={getState:c.getState,dispatch:function(e){return a(e)}};return s=t.map(function(e){return e(f)}),a=i.default.apply(void 0,s)(c.dispatch),o({},c,{dispatch:a})}}}n.__esModule=!0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};n.default=r;var u=e("./compose"),i=function(e){return e&&e.__esModule?e:{default:e}}(u)},{"./compose":7}],5:[function(e,t,n){"use strict";function r(e,t){return function(){return t(e.apply(void 0,arguments))}}function o(e,t){if("function"==typeof e)return r(e,t);if("object"!=typeof e||null===e)throw new Error("bindActionCreators expected an object or a function, instead received "+(null===e?"null":typeof e)+'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');for(var n=Object.keys(e),o={},u=0;u<n.length;u++){var i=n[u],c=e[i];"function"==typeof c&&(o[i]=r(c,t))}return o}n.__esModule=!0,n.default=o},{}],6:[function(e,t,n){(function(t){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n=t&&t.type;return"Given action "+(n&&'"'+n.toString()+'"'||"an action")+', reducer "'+e+'" returned undefined. To ignore an action, you must explicitly return the previous state.'}function u(e,t,n,r){var o=Object.keys(t),u=n&&n.type===a.ActionTypes.INIT?"preloadedState argument passed to createStore":"previous state received by the reducer";if(0===o.length)return"Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.";if(!(0,f.default)(e))return"The "+u+' has unexpected type of "'+{}.toString.call(e).match(/\s([a-z|A-Z]+)/)[1]+'". Expected argument to be an object with the following keys: "'+o.join('", "')+'"';var i=Object.keys(e).filter(function(e){return!t.hasOwnProperty(e)&&!r[e]});return i.forEach(function(e){r[e]=!0}),i.length>0?"Unexpected "+(i.length>1?"keys":"key")+' "'+i.join('", "')+'" found in '+u+'. Expected to find one of the known reducer keys instead: "'+o.join('", "')+'". Unexpected keys will be ignored.':void 0}function i(e){Object.keys(e).forEach(function(t){var n=e[t];if(void 0===n(void 0,{type:a.ActionTypes.INIT}))throw new Error('Reducer "'+t+'" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.');if(void 0===n(void 0,{type:"@@redux/PROBE_UNKNOWN_ACTION_"+Math.random().toString(36).substring(7).split("").join(".")}))throw new Error('Reducer "'+t+"\" returned undefined when probed with a random type. Don't try to handle "+a.ActionTypes.INIT+' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.')})}function c(e){for(var n=Object.keys(e),r={},c=0;c<n.length;c++){var a=n[c];"production"!==t.env.NODE_ENV&&void 0===e[a]&&(0,l.default)('No reducer provided for key "'+a+'"'),"function"==typeof e[a]&&(r[a]=e[a])}var s=Object.keys(r);if("production"!==t.env.NODE_ENV)var f={};var d;try{i(r)}catch(e){d=e}return function(){var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],n=arguments[1];if(d)throw d;if("production"!==t.env.NODE_ENV){var i=u(e,r,n,f);i&&(0,l.default)(i)}for(var c=!1,a={},p=0;p<s.length;p++){var y=s[p],h=r[y],v=e[y],b=h(v,n);if(void 0===b){var m=o(y,n);throw new Error(m)}a[y]=b,c=c||b!==v}return c?a:e}}n.__esModule=!0,n.default=c;var a=e("./createStore"),s=e("lodash/isPlainObject"),f=r(s),d=e("./utils/warning"),l=r(d)}).call(this,e("_process"))},{"./createStore":8,"./utils/warning":10,_process:2,"lodash/isPlainObject":20}],7:[function(e,t,n){"use strict";function r(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];if(0===t.length)return function(e){return e};if(1===t.length)return t[0];var r=t[t.length-1],o=t.slice(0,-1);return function(){return o.reduceRight(function(e,t){return t(e)},r.apply(void 0,arguments))}}n.__esModule=!0,n.default=r},{}],8:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t,n){function r(){b===v&&(b=v.slice())}function u(){return h}function c(e){if("function"!=typeof e)throw new Error("Expected listener to be a function.");var t=!0;return r(),b.push(e),function(){if(t){t=!1,r();var n=b.indexOf(e);b.splice(n,1)}}}function f(e){if(!(0,i.default)(e))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if(void 0===e.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(m)throw new Error("Reducers may not dispatch actions.");try{m=!0,h=y(h,e)}finally{m=!1}for(var t=v=b,n=0;n<t.length;n++)t[n]();return e}function d(e){if("function"!=typeof e)throw new Error("Expected the nextReducer to be a function.");y=e,f({type:s.INIT})}function l(){var e,t=c;return e={subscribe:function(e){function n(){e.next&&e.next(u())}if("object"!=typeof e)throw new TypeError("Expected the observer to be an object.");return n(),{unsubscribe:t(n)}}},e[a.default]=function(){return this},e}var p;if("function"==typeof t&&void 0===n&&(n=t,t=void 0),void 0!==n){if("function"!=typeof n)throw new Error("Expected the enhancer to be a function.");return n(o)(e,t)}if("function"!=typeof e)throw new Error("Expected the reducer to be a function.");var y=e,h=t,v=[],b=v,m=!1;return f({type:s.INIT}),p={dispatch:f,subscribe:c,getState:u,replaceReducer:d},p[a.default]=l,p}n.__esModule=!0,n.ActionTypes=void 0,n.default=o;var u=e("lodash/isPlainObject"),i=r(u),c=e("symbol-observable"),a=r(c),s=n.ActionTypes={INIT:"@@redux/INIT"}},{"lodash/isPlainObject":20,"symbol-observable":21}],9:[function(e,t,n){(function(t){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(){}n.__esModule=!0,n.compose=n.applyMiddleware=n.bindActionCreators=n.combineReducers=n.createStore=void 0;var u=e("./createStore"),i=r(u),c=e("./combineReducers"),a=r(c),s=e("./bindActionCreators"),f=r(s),d=e("./applyMiddleware"),l=r(d),p=e("./compose"),y=r(p),h=e("./utils/warning"),v=r(h);"production"!==t.env.NODE_ENV&&"string"==typeof o.name&&"isCrushed"!==o.name&&(0,v.default)("You are currently using minified code outside of NODE_ENV === 'production'. This means that you are running a slower development build of Redux. You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) to ensure you have the correct code for your production build."),n.createStore=i.default,n.combineReducers=a.default,n.bindActionCreators=f.default,n.applyMiddleware=l.default,n.compose=y.default}).call(this,e("_process"))},{"./applyMiddleware":4,"./bindActionCreators":5,"./combineReducers":6,"./compose":7,"./createStore":8,"./utils/warning":10,_process:2}],10:[function(e,t,n){"use strict";function r(e){"undefined"!=typeof console&&"function"==typeof console.error&&console.error(e);try{throw new Error(e)}catch(e){}}n.__esModule=!0,n.default=r},{}],11:[function(e,t,n){var r=e("./_root"),o=r.Symbol;t.exports=o},{"./_root":18}],12:[function(e,t,n){function r(e){return null==e?void 0===e?a:c:s&&s in Object(e)?u(e):i(e)}var o=e("./_Symbol"),u=e("./_getRawTag"),i=e("./_objectToString"),c="[object Null]",a="[object Undefined]",s=o?o.toStringTag:void 0;t.exports=r},{"./_Symbol":11,"./_getRawTag":15,"./_objectToString":16}],13:[function(e,t,n){(function(e){var n="object"==typeof e&&e&&e.Object===Object&&e;t.exports=n}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],14:[function(e,t,n){var r=e("./_overArg"),o=r(Object.getPrototypeOf,Object);t.exports=o},{"./_overArg":17}],15:[function(e,t,n){function r(e){var t=i.call(e,a),n=e[a];try{e[a]=void 0;var r=!0}catch(e){}var o=c.call(e);return r&&(t?e[a]=n:delete e[a]),o}var o=e("./_Symbol"),u=Object.prototype,i=u.hasOwnProperty,c=u.toString,a=o?o.toStringTag:void 0;t.exports=r},{"./_Symbol":11}],16:[function(e,t,n){function r(e){return u.call(e)}var o=Object.prototype,u=o.toString;t.exports=r},{}],17:[function(e,t,n){function r(e,t){return function(n){return e(t(n))}}t.exports=r},{}],18:[function(e,t,n){var r=e("./_freeGlobal"),o="object"==typeof self&&self&&self.Object===Object&&self,u=r||o||Function("return this")();t.exports=u},{"./_freeGlobal":13}],19:[function(e,t,n){function r(e){return null!=e&&"object"==typeof e}t.exports=r},{}],20:[function(e,t,n){function r(e){if(!i(e)||o(e)!=c)return!1;var t=u(e);if(null===t)return!0;var n=d.call(t,"constructor")&&t.constructor;return"function"==typeof n&&n instanceof n&&f.call(n)==l}var o=e("./_baseGetTag"),u=e("./_getPrototype"),i=e("./isObjectLike"),c="[object Object]",a=Function.prototype,s=Object.prototype,f=a.toString,d=s.hasOwnProperty,l=f.call(Object);t.exports=r},{"./_baseGetTag":12,"./_getPrototype":14,"./isObjectLike":19}],21:[function(e,t,n){t.exports=e("./lib/index")},{"./lib/index":22}],22:[function(e,t,n){(function(r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o,u=e("./ponyfill"),i=function(e){return e&&e.__esModule?e:{default:e}}(u);o="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==r?r:void 0!==t?t:Function("return this")();var c=(0,i.default)(o);n.default=c}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./ponyfill":23}],23:[function(e,t,n){"use strict";function r(e){var t,n=e.Symbol;return"function"==typeof n?n.observable?t=n.observable:(t=n("observable"),n.observable=t):t="@@observable",t}Object.defineProperty(n,"__esModule",{value:!0}),n.default=r},{}],24:[function(e,t,n){"use strict";function r(){return function(e,t){var n=t(),r=n.counter.number+1;e({type:i.default.ADD,payload:{number:r}})}}function o(){return function(e,t){var n=t(),r=n.counter.number-1;e({type:i.default.SUBTRACT,payload:{number:r}})}}Object.defineProperty(n,"__esModule",{value:!0}),n.add=r,n.subtract=o;var u=e("../actions/counter"),i=function(e){return e&&e.__esModule?e:{default:e}}(u)},{"../actions/counter":25}],25:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=Object.freeze({ADD:"add",SUBTRACT:"subtract"})},{}],26:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.CounterComponent={init:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.store=e,this.actionCreatorsCounter=t,this.buttonAdd$=document.getElementById("counter-add"),this.buttonSubract$=document.getElementById("counter-subtract"),this.counterNumber$=document.getElementById("counter-number"),this.buttonAdd$.addEventListener("click",this.actionCreatorsCounter.add),this.buttonSubract$.addEventListener("click",this.actionCreatorsCounter.subtract),this.render()},render:function(){var e=this,t=this.store;t.subscribe(function(){var n=t.getState();e.counterNumber$.textContent=n.counter.number})}}},{}],27:[function(e,t,n){"use strict";function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments[1],n=t.type,r=t.payload;switch(n){case i.default.ADD:case i.default.SUBTRACT:return o({},e,r);default:return e}}Object.defineProperty(n,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};n.default=r;var u=e("../actions/counter.js"),i=function(e){return e&&e.__esModule?e:{default:e}}(u),c={number:0}},{"../actions/counter.js":25}],28:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=e("redux"),o=e("../reducers/counter"),u=function(e){return e&&e.__esModule?e:{default:e}}(o),i=(0,r.combineReducers)({counter:u.default});n.default=i},{"../reducers/counter":27,redux:9}],29:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e){return(0,u.createStore)(s.default,e,d)}Object.defineProperty(n,"__esModule",{value:!0}),n.default=o;var u=e("redux"),i=e("redux-thunk"),c=r(i),a=e("../reducers/index"),s=r(a),f=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||u.compose,d=f((0,u.applyMiddleware)(c.default))},{"../reducers/index":28,redux:9,"redux-thunk":3}]},{},[1]);
//# sourceMappingURL=maps/index.js.map
