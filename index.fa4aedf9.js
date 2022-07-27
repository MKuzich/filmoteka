!function(){function e(e,t,r,n){Object.defineProperty(e,t,{get:r,set:n,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},o=r.parcelRequired76b;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in i){var t=i[e];delete i[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){i[e]=t},r.parcelRequired76b=o),o.register("euqRf",(function(e,t){var r=o("b7JqP");o("6Urw1");var n=o("MjY8E");o("3SEMc");var i=o("ewipB"),a=o("e7S07"),s=o("cRUDO"),u=o("a43B7"),c=o("jSiUv"),l=((0,n.initializeApp)({apiKey:"AIzaSyD975WMSA04Q-mjdqQUXdyvcH4cQe4txRg",authDomain:"filmoteka-1bdfd.firebaseapp.com",projectId:"filmoteka-1bdfd",storageBucket:"filmoteka-1bdfd.appspot.com",messagingSenderId:"873079027017",appId:"1:873079027017:web:dadfb10493f9c7b3e51698"}),(0,i.n)());document.querySelector("[data-signup-form]").addEventListener("submit",(function(e){e.preventDefault();var t=document.querySelector("#btnSignUp"),n=document.querySelector("#spinnersignup");(0,r.enableSpinnerOn)(t,n);var o=e.target.elements.email.value,s=e.target.elements.password.value;(0,i.a5)(l,o,s).then((function(i){i.user;e.target.reset(),(0,r.disableSpinnerOn)(t,n),(0,a.closeSignupModal)(),(0,c.notificationLaunch)(d(1))})).catch((function(e){(0,r.disableSpinnerOn)(t,n);var i=e.code;(0,c.notificationLaunch)(i)}))})),document.querySelector("[data-logout]").addEventListener("click",(function(e){(0,i.y)(l).then((function(){(0,c.notificationLaunch)(d(2))})).catch((function(e){var t=e.code;(0,c.notificationLaunch)(t)}))})),document.querySelector("[data-login-form]").addEventListener("submit",(function(e){e.preventDefault();var t=document.querySelector("#logInBtn"),n=document.querySelector("#spinnerlogin");(0,r.enableSpinnerOn)(t,n);var o=e.target.elements.email.value,a=e.target.elements.password.value;(0,i.a6)(l,o,a).then((function(i){i.user;e.target.reset(),(0,r.disableSpinnerOn)(t,n),(0,s.closeLoginModal)(),(0,c.notificationLaunch)(d(3))})).catch((function(e){(0,r.disableSpinnerOn)(t,n);var i=e.code;(0,c.notificationLaunch)(i)}))}));var f=null;function d(e){if("en"===localStorage.getItem("localLang")){if(1===e)return"You have successfully registered and logged into your account! Enjoy watching.";if(2===e)return"You are logged out. Now you cannot use the library.";if(3===e)return"You are logged in. You can now use the library."}else{if(1===e)return"Ви успішно зареєструвалися та увійшли у свій обліковий запис! Приємного перегляду.";if(2===e)return"Ви вийшли з системи. Тепер ви не можете користуватися бібліотекою.";if(3===e)return"Ви увійшли в систему. Тепер ви можете користуватися бібліотекою."}}(0,i.v)(l,(function(e){f=e,e&&e.uid,(0,u.enableUserInterface)(e)})),document.querySelector("#checkbox").addEventListener("input",(function(){(0,u.enableUserInterface)(f)}))})),o.register("b7JqP",(function(t,r){function n(e,t){e.disabled=!0,t.classList.remove("submit-spinner_hide")}function i(e,t){e.disabled=!1,t.classList.add("submit-spinner_hide")}function o(){var e=document.querySelector("#spinnersearch"),t=document.querySelector(".search__button-icon");e.classList.remove("submit-spinner_hide"),t.classList.add("submit-spinner_hide")}function a(){var e=document.querySelector("#spinnersearch"),t=document.querySelector(".search__button-icon");e.classList.add("submit-spinner_hide"),t.classList.remove("submit-spinner_hide")}e(t.exports,"enableSpinnerOn",(function(){return n})),e(t.exports,"disableSpinnerOn",(function(){return i})),e(t.exports,"enableSpinnerSearch",(function(){return o})),e(t.exports,"disableSpinnerSearch",(function(){return a}))})),o.register("6Urw1",(function(t,r){e(t.exports,"initializeApp",(function(){return o("MjY8E").initializeApp})),e(t.exports,"registerVersion",(function(){return o("MjY8E").registerVersion}));o("MjY8E");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,o("MjY8E").registerVersion)("firebase","9.9.0","app")})),o.register("MjY8E",(function(r,n){e(r.exports,"_registerComponent",(function(){return S})),e(r.exports,"_getProvider",(function(){return T})),e(r.exports,"SDK_VERSION",(function(){return A})),e(r.exports,"initializeApp",(function(){return L})),e(r.exports,"getApp",(function(){return P})),e(r.exports,"registerVersion",(function(){return N}));var i=o("bpxeT"),a=o("8MBJY"),s=o("a2hTj"),u=o("hKHmD"),c=o("8nrFW"),l=o("2TvXO"),f=o("6ExWU"),d=o("kZfxc"),h=o("2xDiJ"),p=o("ajgRO"),v=(h=o("2xDiJ"),function(){"use strict";function e(r){t(a)(this,e),this.container=r}return t(s)(e,[{key:"getPlatformInfoString",value:function(){return this.container.getProviders().map((function(e){if(function(e){var t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){var t=e.getImmediate();return"".concat(t.library,"/").concat(t.version)}return null})).filter((function(e){return e})).join(" ")}}]),e}());var m,g,y="@firebase/app",b="0.7.28",k=new(0,d.Logger)("@firebase/app"),w="[DEFAULT]",x=(m={},t(u)(m,y,"fire-core"),t(u)(m,"@firebase/app-compat","fire-core-compat"),t(u)(m,"@firebase/analytics","fire-analytics"),t(u)(m,"@firebase/analytics-compat","fire-analytics-compat"),t(u)(m,"@firebase/app-check","fire-app-check"),t(u)(m,"@firebase/app-check-compat","fire-app-check-compat"),t(u)(m,"@firebase/auth","fire-auth"),t(u)(m,"@firebase/auth-compat","fire-auth-compat"),t(u)(m,"@firebase/database","fire-rtdb"),t(u)(m,"@firebase/database-compat","fire-rtdb-compat"),t(u)(m,"@firebase/functions","fire-fn"),t(u)(m,"@firebase/functions-compat","fire-fn-compat"),t(u)(m,"@firebase/installations","fire-iid"),t(u)(m,"@firebase/installations-compat","fire-iid-compat"),t(u)(m,"@firebase/messaging","fire-fcm"),t(u)(m,"@firebase/messaging-compat","fire-fcm-compat"),t(u)(m,"@firebase/performance","fire-perf"),t(u)(m,"@firebase/performance-compat","fire-perf-compat"),t(u)(m,"@firebase/remote-config","fire-rc"),t(u)(m,"@firebase/remote-config-compat","fire-rc-compat"),t(u)(m,"@firebase/storage","fire-gcs"),t(u)(m,"@firebase/storage-compat","fire-gcs-compat"),t(u)(m,"@firebase/firestore","fire-fst"),t(u)(m,"@firebase/firestore-compat","fire-fst-compat"),t(u)(m,"fire-js","fire-js"),t(u)(m,"firebase","fire-js-all"),m),_=new Map,E=new Map;function I(e,t){try{e.container.addComponent(t)}catch(r){k.debug("Component ".concat(t.name," failed to register with FirebaseApp ").concat(e.name),r)}}function S(e){var t=e.name;if(E.has(t))return k.debug("There were multiple attempts to register component ".concat(t,".")),!1;E.set(t,e);var r=!0,n=!1,i=void 0;try{for(var o,a=_.values()[Symbol.iterator]();!(r=(o=a.next()).done);r=!0){I(o.value,e)}}catch(e){n=!0,i=e}finally{try{r||null==a.return||a.return()}finally{if(n)throw i}}return!0}function T(e,t){var r=e.container.getProvider("heartbeat").getImmediate({optional:!0});return r&&r.triggerHeartbeat(),e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var O=(g={},t(u)(g,"no-app","No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()"),t(u)(g,"bad-app-name","Illegal App name: '{$appName}"),t(u)(g,"duplicate-app","Firebase App named '{$appName}' already exists with different options or config"),t(u)(g,"app-deleted","Firebase App named '{$appName}' already deleted"),t(u)(g,"invalid-app-argument","firebase.{$appName}() takes either no argument or a Firebase App instance."),t(u)(g,"invalid-log-argument","First argument to `onLog` must be null or a function."),t(u)(g,"storage-open","Error thrown when opening storage. Original error: {$originalErrorMessage}."),t(u)(g,"storage-get","Error thrown when reading from storage. Original error: {$originalErrorMessage}."),t(u)(g,"storage-set","Error thrown when writing to storage. Original error: {$originalErrorMessage}."),t(u)(g,"storage-delete","Error thrown when deleting from storage. Original error: {$originalErrorMessage}."),g),C=new(0,h.ErrorFactory)("app","Firebase",O),R=function(){"use strict";function e(r,n,i){var o=this;t(a)(this,e),this._isDeleted=!1,this._options=Object.assign({},r),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new(0,f.Component)("app",(function(){return o}),"PUBLIC"))}return t(s)(e,[{key:"automaticDataCollectionEnabled",get:function(){return this.checkDestroyed(),this._automaticDataCollectionEnabled},set:function(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}},{key:"name",get:function(){return this.checkDestroyed(),this._name}},{key:"options",get:function(){return this.checkDestroyed(),this._options}},{key:"config",get:function(){return this.checkDestroyed(),this._config}},{key:"container",get:function(){return this._container}},{key:"isDeleted",get:function(){return this._isDeleted},set:function(e){this._isDeleted=e}},{key:"checkDestroyed",value:function(){if(this.isDeleted)throw C.create("app-deleted",{appName:this._name})}}]),e}(),A="9.9.0";function L(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if("object"!=typeof t){var r=t;t={name:r}}var n=Object.assign({name:w,automaticDataCollectionEnabled:!1},t),i=n.name;if("string"!=typeof i||!i)throw C.create("bad-app-name",{appName:String(i)});var o=_.get(i);if(o){if((0,h.deepEqual)(e,o.options)&&(0,h.deepEqual)(n,o.config))return o;throw C.create("duplicate-app",{appName:i})}var a=new(0,f.ComponentContainer)(i),s=!0,u=!1,c=void 0;try{for(var l,d=E.values()[Symbol.iterator]();!(s=(l=d.next()).done);s=!0){var p=l.value;a.addComponent(p)}}catch(e){u=!0,c=e}finally{try{s||null==d.return||d.return()}finally{if(u)throw c}}var v=new R(e,n,a);return _.set(i,v),v}function P(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=_.get(e);if(!t)throw C.create("no-app",{appName:e});return t}function N(e,t,r){var n,i=null!==(n=x[e])&&void 0!==n?n:e;r&&(i+="-".concat(r));var o=i.match(/\s|\//),a=t.match(/\s|\//);if(o||a){var s=['Unable to register library "'.concat(i,'" with version "').concat(t,'":')];return o&&s.push('library name "'.concat(i,'" contains illegal characters (whitespace or "/")')),o&&a&&s.push("and"),a&&s.push('version name "'.concat(t,'" contains illegal characters (whitespace or "/")')),void k.warn(s.join(" "))}S(new(0,f.Component)("".concat(i,"-version"),(function(){return{library:i,version:t}}),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var M="firebase-heartbeat-store",D=null;function U(){return D||(D=(0,p.openDB)("firebase-heartbeat-database",1,{upgrade:function(e,t){if(0===t)e.createObjectStore(M)}}).catch((function(e){throw C.create("storage-open",{originalErrorMessage:e.message})}))),D}function B(e){return j.apply(this,arguments)}function j(){return(j=t(i)(t(l).mark((function e(r){var n,i;return t(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=1,e.next=4,U();case 4:return i=e.sent,e.abrupt("return",i.transaction(M).objectStore(M).get(W(r)));case 8:throw e.prev=8,e.t0=e.catch(1),C.create("storage-get",{originalErrorMessage:null===(n=e.t0)||void 0===n?void 0:n.message});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}function F(e,t){return q.apply(this,arguments)}function q(){return(q=t(i)(t(l).mark((function e(r,n){var i,o,a,s;return t(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=1,e.next=4,U();case 4:return o=e.sent,a=o.transaction(M,"readwrite"),s=a.objectStore(M),e.next=9,s.put(n,W(r));case 9:return e.abrupt("return",a.done);case 12:throw e.prev=12,e.t0=e.catch(1),C.create("storage-set",{originalErrorMessage:null===(i=e.t0)||void 0===i?void 0:i.message});case 15:case"end":return e.stop()}}),e,null,[[1,12]])})))).apply(this,arguments)}function W(e){return"".concat(e.name,"!").concat(e.options.appId)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var V=function(){"use strict";function e(r){var n=this;t(a)(this,e),this.container=r,this._heartbeatsCache=null;var i=this.container.getProvider("app").getImmediate();this._storage=new K(i),this._heartbeatsCachePromise=this._storage.read().then((function(e){return n._heartbeatsCache=e,e}))}return t(s)(e,[{key:"triggerHeartbeat",value:function(){var e=this;return t(i)(t(l).mark((function r(){var n,i,o;return t(l).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e.container.getProvider("platform-logger").getImmediate(),i=n.getPlatformInfoString(),o=H(),null!==e._heartbeatsCache){t.next=7;break}return t.next=6,e._heartbeatsCachePromise;case 6:e._heartbeatsCache=t.sent;case 7:if(e._heartbeatsCache.lastSentHeartbeatDate!==o&&!e._heartbeatsCache.heartbeats.some((function(e){return e.date===o}))){t.next=11;break}return t.abrupt("return");case 11:e._heartbeatsCache.heartbeats.push({date:o,agent:i});case 12:return e._heartbeatsCache.heartbeats=e._heartbeatsCache.heartbeats.filter((function(e){var t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),t.abrupt("return",e._storage.overwrite(e._heartbeatsCache));case 14:case"end":return t.stop()}}),r)})))()}},{key:"getHeartbeatsHeader",value:function(){var e=this;return t(i)(t(l).mark((function r(){var n,i,o,a,s;return t(l).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null!==e._heartbeatsCache){t.next=3;break}return t.next=3,e._heartbeatsCachePromise;case 3:if(null!==e._heartbeatsCache&&0!==e._heartbeatsCache.heartbeats.length){t.next=5;break}return t.abrupt("return","");case 5:if(n=H(),i=z(e._heartbeatsCache.heartbeats),o=i.heartbeatsToSend,a=i.unsentEntries,s=(0,h.base64urlEncodeWithoutPadding)(JSON.stringify({version:2,heartbeats:o})),e._heartbeatsCache.lastSentHeartbeatDate=n,!(a.length>0)){t.next=15;break}return e._heartbeatsCache.heartbeats=a,t.next=13,e._storage.overwrite(e._heartbeatsCache);case 13:t.next=16;break;case 15:e._heartbeatsCache.heartbeats=[],e._storage.overwrite(e._heartbeatsCache);case 16:return t.abrupt("return",s);case 17:case"end":return t.stop()}}),r)})))()}}]),e}();function H(){return(new Date).toISOString().substring(0,10)}function z(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1024,r=[],n=e.slice(),i=!0,o=!1,a=void 0;try{for(var s,u=function(e,i){var o=i.value,a=r.find((function(e){return e.agent===o.agent}));if(a){if(a.dates.push(o.date),G(r)>t)return a.dates.pop(),"break"}else if(r.push({agent:o.agent,dates:[o.date]}),G(r)>t)return r.pop(),"break";n=n.slice(1)},c=e[Symbol.iterator]();!(i=(s=c.next()).done);i=!0){var l=u(c,s);if("break"===l)break}}catch(e){o=!0,a=e}finally{try{i||null==c.return||c.return()}finally{if(o)throw a}}return{heartbeatsToSend:r,unsentEntries:n}}var J,K=function(){"use strict";function e(r){t(a)(this,e),this.app=r,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}return t(s)(e,[{key:"runIndexedDBEnvironmentCheck",value:function(){return t(i)(t(l).mark((function e(){return t(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((0,h.isIndexedDBAvailable)()){e.next=4;break}return e.abrupt("return",!1);case 4:return e.abrupt("return",(0,h.validateIndexedDBOpenable)().then((function(){return!0})).catch((function(){return!1})));case 5:case"end":return e.stop()}}),e)})))()}},{key:"read",value:function(){var e=this;return t(i)(t(l).mark((function r(){var n;return t(l).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e._canUseIndexedDBPromise;case 2:if(t.sent){t.next=7;break}return t.abrupt("return",{heartbeats:[]});case 7:return t.next=9,B(e.app);case 9:return n=t.sent,t.abrupt("return",n||{heartbeats:[]});case 11:case"end":return t.stop()}}),r)})))()}},{key:"overwrite",value:function(e){var r=this;return t(i)(t(l).mark((function n(){var i,o;return t(l).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=3,r._canUseIndexedDBPromise;case 3:if(t.sent){t.next=8;break}return t.abrupt("return");case 8:return t.next=10,r.read();case 10:return o=t.sent,t.abrupt("return",F(r.app,{lastSentHeartbeatDate:null!==(i=e.lastSentHeartbeatDate)&&void 0!==i?i:o.lastSentHeartbeatDate,heartbeats:e.heartbeats}));case 12:case"end":return t.stop()}}),n)})))()}},{key:"add",value:function(e){var r=this;return t(i)(t(l).mark((function n(){var i,o;return t(l).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=3,r._canUseIndexedDBPromise;case 3:if(n.sent){n.next=8;break}return n.abrupt("return");case 8:return n.next=10,r.read();case 10:return o=n.sent,n.abrupt("return",F(r.app,{lastSentHeartbeatDate:null!==(i=e.lastSentHeartbeatDate)&&void 0!==i?i:o.lastSentHeartbeatDate,heartbeats:t(c)(o.heartbeats).concat(t(c)(e.heartbeats))}));case 12:case"end":return n.stop()}}),n)})))()}}]),e}();function G(e){return(0,h.base64urlEncodeWithoutPadding)(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */J="",S(new(0,f.Component)("platform-logger",(function(e){return new v(e)}),"PRIVATE")),S(new(0,f.Component)("heartbeat",(function(e){return new V(e)}),"PRIVATE")),N(y,b,J),N(y,b,"esm2017"),N("fire-js","")})),o.register("bpxeT",(function(e,t){"use strict";function r(e,t,r,n,i,o,a){try{var s=e[o](a),u=s.value}catch(e){return void r(e)}s.done?t(u):Promise.resolve(u).then(n,i)}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return function(){var t=this,n=arguments;return new Promise((function(i,o){var a=e.apply(t,n);function s(e){r(a,i,o,s,u,"next",e)}function u(e){r(a,i,o,s,u,"throw",e)}s(void 0)}))}}})),o.register("8MBJY",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}})),o.register("a2hTj",(function(e,t){"use strict";function r(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){t&&r(e.prototype,t);n&&r(e,n);return e}})),o.register("hKHmD",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r;return e}})),o.register("8nrFW",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return r.default(e)||n.default(e)||a.default(e)||i.default()};var r=s(o("kMC0W")),n=s(o("7AJDX")),i=s(o("8CtQK")),a=s(o("auk6i"));function s(e){return e&&e.__esModule?e:{default:e}}})),o.register("kMC0W",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return n.default(e)};var r,n=(r=o("8NIkP"))&&r.__esModule?r:{default:r}})),o.register("8NIkP",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}})),o.register("7AJDX",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}})),o.register("8CtQK",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),o.register("auk6i",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!e)return;if("string"==typeof e)return n.default(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n.default(e,t)};var r,n=(r=o("8NIkP"))&&r.__esModule?r:{default:r}})),o.register("2TvXO",(function(e,t){var r=function(e){"use strict";var t,r=Object.prototype,n=r.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function c(e,t,r,n){var i=t&&t.prototype instanceof m?t:m,o=Object.create(i.prototype),a=new O(n||[]);return o._invoke=function(e,t,r){var n=f;return function(i,o){if(n===h)throw new Error("Generator is already running");if(n===p){if("throw"===i)throw o;return R()}for(r.method=i,r.arg=o;;){var a=r.delegate;if(a){var s=I(a,r);if(s){if(s===v)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=h;var u=l(e,t,r);if("normal"===u.type){if(n=r.done?p:d,u.arg===v)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=p,r.method="throw",r.arg=u.arg)}}}(e,r,a),o}function l(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=c;var f="suspendedStart",d="suspendedYield",h="executing",p="completed",v={};function m(){}function g(){}function y(){}var b={};u(b,o,(function(){return this}));var k=Object.getPrototypeOf,w=k&&k(k(C([])));w&&w!==r&&n.call(w,o)&&(b=w);var x=y.prototype=m.prototype=Object.create(b);function _(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function E(e,t){function r(i,o,a,s){var u=l(e[i],e,o);if("throw"!==u.type){var c=u.arg,f=c.value;return f&&"object"==typeof f&&n.call(f,"__await")?t.resolve(f.__await).then((function(e){r("next",e,a,s)}),(function(e){r("throw",e,a,s)})):t.resolve(f).then((function(e){c.value=e,a(c)}),(function(e){return r("throw",e,a,s)}))}s(u.arg)}var i;this._invoke=function(e,n){function o(){return new t((function(t,i){r(e,n,t,i)}))}return i=i?i.then(o,o):o()}}function I(e,r){var n=e.iterator[r.method];if(n===t){if(r.delegate=null,"throw"===r.method){if(e.iterator.return&&(r.method="return",r.arg=t,I(e,r),"throw"===r.method))return v;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var i=l(n,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,v;var o=i.arg;return o?o.done?(r[e.resultName]=o.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,v):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function S(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function T(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(S,this),this.reset(!0)}function C(e){if(e){var r=e[o];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,a=function r(){for(;++i<e.length;)if(n.call(e,i))return r.value=e[i],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}return{next:R}}function R(){return{value:t,done:!0}}return g.prototype=y,u(x,"constructor",y),u(y,"constructor",g),g.displayName=u(y,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===g||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,u(e,s,"GeneratorFunction")),e.prototype=Object.create(x),e},e.awrap=function(e){return{__await:e}},_(E.prototype),u(E.prototype,a,(function(){return this})),e.AsyncIterator=E,e.async=function(t,r,n,i,o){void 0===o&&(o=Promise);var a=new E(c(t,r,n,i),o);return e.isGeneratorFunction(r)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},_(x),u(x,s,"Generator"),u(x,o,(function(){return this})),u(x,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=C,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(T),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function i(n,i){return s.type="throw",s.arg=e,r.next=n,i&&(r.method="next",r.arg=t),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),c=n.call(a,"finallyLoc");if(u&&c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=e,a.arg=t,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),T(r),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;T(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:C(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),v}},e}(e.exports);try{regeneratorRuntime=r}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}})),o.register("6ExWU",(function(r,n){e(r.exports,"Component",(function(){return d})),e(r.exports,"ComponentContainer",(function(){return v}));var i=o("bpxeT"),a=o("8MBJY"),s=o("a2hTj"),u=o("1t1Wn"),c=o("8nrFW"),l=o("2TvXO"),f=o("2xDiJ"),d=function(){"use strict";function e(r,n,i){t(a)(this,e),this.name=r,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return t(s)(e,[{key:"setInstantiationMode",value:function(e){return this.instantiationMode=e,this}},{key:"setMultipleInstances",value:function(e){return this.multipleInstances=e,this}},{key:"setServiceProps",value:function(e){return this.serviceProps=e,this}},{key:"setInstanceCreatedCallback",value:function(e){return this.onInstanceCreated=e,this}}]),e}(),h="[DEFAULT]",p=function(){"use strict";function e(r,n){t(a)(this,e),this.name=r,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}return t(s)(e,[{key:"get",value:function(e){var t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){var r=new(0,f.Deferred);if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{var n=this.getOrInitializeService({instanceIdentifier:t});n&&r.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}},{key:"getImmediate",value:function(e){var t,r=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),n=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(r)&&!this.shouldAutoInitialize()){if(n)return null;throw Error("Service ".concat(this.name," is not available"))}try{return this.getOrInitializeService({instanceIdentifier:r})}catch(e){if(n)return null;throw e}}},{key:"getComponent",value:function(){return this.component}},{key:"setComponent",value:function(e){if(e.name!==this.name)throw Error("Mismatching Component ".concat(e.name," for Provider ").concat(this.name,"."));if(this.component)throw Error("Component for ".concat(this.name," has already been provided"));if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e))try{this.getOrInitializeService({instanceIdentifier:h})}catch(e){}var r=!0,n=!1,i=void 0;try{for(var o,a=this.instancesDeferred.entries()[Symbol.iterator]();!(r=(o=a.next()).done);r=!0){var s=t(u)(o.value,2),c=s[0],l=s[1],f=this.normalizeInstanceIdentifier(c);try{var d=this.getOrInitializeService({instanceIdentifier:f});l.resolve(d)}catch(e){}}}catch(e){n=!0,i=e}finally{try{r||null==a.return||a.return()}finally{if(n)throw i}}}}},{key:"clearInstance",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h;this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}},{key:"delete",value:function(){var e=this;return t(i)(t(l).mark((function r(){var n;return t(l).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=Array.from(e.instances.values()),r.next=3,Promise.all(t(c)(n.filter((function(e){return"INTERNAL"in e})).map((function(e){return e.INTERNAL.delete()}))).concat(t(c)(n.filter((function(e){return"_delete"in e})).map((function(e){return e._delete()})))));case 3:case"end":return r.stop()}}),r)})))()}},{key:"isComponentSet",value:function(){return null!=this.component}},{key:"isInitialized",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h;return this.instances.has(e)}},{key:"getOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h;return this.instancesOptions.get(e)||{}}},{key:"initialize",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.options,n=void 0===r?{}:r,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error("".concat(this.name,"(").concat(i,") has already been initialized"));if(!this.isComponentSet())throw Error("Component ".concat(this.name," has not been registered yet"));var o=this.getOrInitializeService({instanceIdentifier:i,options:n}),a=!0,s=!1,c=void 0;try{for(var l,f=this.instancesDeferred.entries()[Symbol.iterator]();!(a=(l=f.next()).done);a=!0){var d=t(u)(l.value,2),h=d[0],p=d[1],v=this.normalizeInstanceIdentifier(h);i===v&&p.resolve(o)}}catch(e){s=!0,c=e}finally{try{a||null==f.return||f.return()}finally{if(s)throw c}}return o}},{key:"onInit",value:function(e,t){var r,n=this.normalizeInstanceIdentifier(t),i=null!==(r=this.onInitCallbacks.get(n))&&void 0!==r?r:new Set;i.add(e),this.onInitCallbacks.set(n,i);var o=this.instances.get(n);return o&&e(o,n),function(){i.delete(e)}}},{key:"invokeOnInitCallbacks",value:function(e,t){var r=this.onInitCallbacks.get(t);if(r){var n=!0,i=!1,o=void 0;try{for(var a,s=r[Symbol.iterator]();!(n=(a=s.next()).done);n=!0){var u=a.value;try{u(e,t)}catch(e){}}}catch(e){i=!0,o=e}finally{try{n||null==s.return||s.return()}finally{if(i)throw o}}}}},{key:"getOrInitializeService",value:function(e){var t,r=e.instanceIdentifier,n=e.options,i=void 0===n?{}:n,o=this.instances.get(r);if(!o&&this.component&&(o=this.component.instanceFactory(this.container,{instanceIdentifier:(t=r,t===h?void 0:t),options:i}),this.instances.set(r,o),this.instancesOptions.set(r,i),this.invokeOnInitCallbacks(o,r),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,r,o)}catch(e){}return o||null}},{key:"normalizeInstanceIdentifier",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h;return this.component?this.component.multipleInstances?e:h:e}},{key:"shouldAutoInitialize",value:function(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}]),e}();var v=function(){"use strict";function e(r){t(a)(this,e),this.name=r,this.providers=new Map}return t(s)(e,[{key:"addComponent",value:function(e){var t=this.getProvider(e.name);if(t.isComponentSet())throw new Error("Component ".concat(e.name," has already been registered with ").concat(this.name));t.setComponent(e)}},{key:"addOrOverwriteComponent",value:function(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}},{key:"getProvider",value:function(e){if(this.providers.has(e))return this.providers.get(e);var t=new p(e,this);return this.providers.set(e,t),t}},{key:"getProviders",value:function(){return Array.from(this.providers.values())}}]),e}()})),o.register("1t1Wn",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return r.default(e)||n.default(e,t)||a.default(e,t)||i.default()};var r=s(o("8slrw")),n=s(o("7AJDX")),i=s(o("ifqQW")),a=s(o("auk6i"));function s(e){return e&&e.__esModule?e:{default:e}}})),o.register("8slrw",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return e}})),o.register("ifqQW",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),o.register("2xDiJ",(function(r,n){e(r.exports,"base64urlEncodeWithoutPadding",(function(){return p})),e(r.exports,"base64Decode",(function(){return v})),e(r.exports,"Deferred",(function(){return m})),e(r.exports,"getUA",(function(){return g})),e(r.exports,"isMobileCordova",(function(){return y})),e(r.exports,"isBrowserExtension",(function(){return b})),e(r.exports,"isReactNative",(function(){return k})),e(r.exports,"isIE",(function(){return w})),e(r.exports,"isIndexedDBAvailable",(function(){return x})),e(r.exports,"validateIndexedDBOpenable",(function(){return _})),e(r.exports,"FirebaseError",(function(){return E})),e(r.exports,"ErrorFactory",(function(){return I})),e(r.exports,"isEmpty",(function(){return O})),e(r.exports,"deepEqual",(function(){return C})),e(r.exports,"querystring",(function(){return A})),e(r.exports,"querystringDecode",(function(){return L})),e(r.exports,"extractQuerystring",(function(){return P})),e(r.exports,"createSubscribe",(function(){return N})),e(r.exports,"getModularInstance",(function(){return U}));var i=o("ds8z5"),a=o("8MBJY"),s=o("a2hTj"),u=o("eYQtU"),c=o("1t1Wn"),l=(o("8nrFW"),o("4c7YB")),f=o("2MbLg"),d=function(e){for(var t=[],r=0,n=0;n<e.length;n++){var i=e.charCodeAt(n);i<128?t[r++]=i:i<2048?(t[r++]=i>>6|192,t[r++]=63&i|128):55296==(64512&i)&&n+1<e.length&&56320==(64512&e.charCodeAt(n+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++n)),t[r++]=i>>18|240,t[r++]=i>>12&63|128,t[r++]=i>>6&63|128,t[r++]=63&i|128):(t[r++]=i>>12|224,t[r++]=i>>6&63|128,t[r++]=63&i|128)}return t},h={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray:function(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();for(var r=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[],i=0;i<e.length;i+=3){var o=e[i],a=i+1<e.length,s=a?e[i+1]:0,u=i+2<e.length,c=u?e[i+2]:0,l=o>>2,f=(3&o)<<4|s>>4,d=(15&s)<<2|c>>6,h=63&c;u||(h=64,a||(d=64)),n.push(r[l],r[f],r[d],r[h])}return n.join("")},encodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(d(e),t)},decodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){for(var t=[],r=0,n=0;r<e.length;){var i=e[r++];if(i<128)t[n++]=String.fromCharCode(i);else if(i>191&&i<224){var o=e[r++];t[n++]=String.fromCharCode((31&i)<<6|63&o)}else if(i>239&&i<365){var a=((7&i)<<18|(63&e[r++])<<12|(63&e[r++])<<6|63&e[r++])-65536;t[n++]=String.fromCharCode(55296+(a>>10)),t[n++]=String.fromCharCode(56320+(1023&a))}else{var s=e[r++],u=e[r++];t[n++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&u)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray:function(e,t){this.init_();for(var r=t?this.charToByteMapWebSafe_:this.charToByteMap_,n=[],i=0;i<e.length;){var o=r[e.charAt(i++)],a=i<e.length?r[e.charAt(i)]:0,s=++i<e.length?r[e.charAt(i)]:64,u=++i<e.length?r[e.charAt(i)]:64;if(++i,null==o||null==a||null==s||null==u)throw Error();var c=o<<2|a>>4;if(n.push(c),64!==s){var l=a<<4&240|s>>2;if(n.push(l),64!==u){var f=s<<6&192|u;n.push(f)}}}return n},init_:function(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(var e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},p=function(e){return function(e){var t=d(e);return h.encodeByteArray(t,!0)}(e).replace(/\./g,"")},v=function(e){try{return h.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var m=function(){"use strict";function e(){var r=this;t(a)(this,e),this.reject=function(){},this.resolve=function(){},this.promise=new Promise((function(e,t){r.resolve=e,r.reject=t}))}return t(s)(e,[{key:"wrapCallback",value:function(e){var t=this;return function(r,n){r?t.reject(r):t.resolve(n),"function"==typeof e&&(t.promise.catch((function(){})),1===e.length?e(r):e(r,n))}}}]),e}();
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function g(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function y(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(g())}function b(){var e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function k(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function w(){var e=g();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function x(){return"object"==typeof indexedDB}function _(){return new Promise((function(e,t){try{var r=!0,n="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(n);i.onsuccess=function(){i.result.close(),r||self.indexedDB.deleteDatabase(n),e(!0)},i.onupgradeneeded=function(){r=!1},i.onerror=function(){var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var E=function(e){"use strict";t(u)(n,e);var r=t(f)(n);function n(e,o,s){var u;return t(a)(this,n),(u=r.call(this,o)).code=e,u.customData=s,u.name="FirebaseError",Object.setPrototypeOf(t(i)(u),n.prototype),Error.captureStackTrace&&Error.captureStackTrace(t(i)(u),I.prototype.create),u}return n}(t(l)(Error)),I=function(){"use strict";function e(r,n,i){t(a)(this,e),this.service=r,this.serviceName=n,this.errors=i}return t(s)(e,[{key:"create",value:function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];var i=r[0]||{},o="".concat(this.service,"/").concat(e),a=this.errors[e],s=a?S(a,i):"Error",u="".concat(this.serviceName,": ").concat(s," (").concat(o,")."),c=new E(o,u,i);return c}}]),e}();function S(e,t){return e.replace(T,(function(e,r){var n=t[r];return null!=n?String(n):"<".concat(r,"?>")}))}var T=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(e){for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function C(e,t){if(e===t)return!0;var r=Object.keys(e),n=Object.keys(t),i=!0,o=!1,a=void 0;try{for(var s,u=r[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){var c=s.value;if(!n.includes(c))return!1;var l=e[c],f=t[c];if(R(l)&&R(f)){if(!C(l,f))return!1}else if(l!==f)return!1}}catch(e){o=!0,a=e}finally{try{i||null==u.return||u.return()}finally{if(o)throw a}}var d=!0,h=!1,p=void 0;try{for(var v,m=n[Symbol.iterator]();!(d=(v=m.next()).done);d=!0){var g=v.value;if(!r.includes(g))return!1}}catch(e){h=!0,p=e}finally{try{d||null==m.return||m.return()}finally{if(h)throw p}}return!0}function R(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function A(e){var r=[],n=!0,i=!1,o=void 0;try{for(var a,s=function(e,n){var i=t(c)(n.value,2),o=i[0],a=i[1];Array.isArray(a)?a.forEach((function(e){r.push(encodeURIComponent(o)+"="+encodeURIComponent(e))})):r.push(encodeURIComponent(o)+"="+encodeURIComponent(a))},u=Object.entries(e)[Symbol.iterator]();!(n=(a=u.next()).done);n=!0)s(0,a)}catch(e){i=!0,o=e}finally{try{n||null==u.return||u.return()}finally{if(i)throw o}}return r.length?"&"+r.join("&"):""}function L(e){var r={};return e.replace(/^\?/,"").split("&").forEach((function(e){if(e){var n=t(c)(e.split("="),2),i=n[0],o=n[1];r[decodeURIComponent(i)]=decodeURIComponent(o)}})),r}function P(e){var t=e.indexOf("?");if(!t)return"";var r=e.indexOf("#",t);return e.substring(t,r>0?r:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N(e,t){var r=new M(e,t);return r.subscribe.bind(r)}var M=function(){"use strict";function e(r,n){var i=this;t(a)(this,e),this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then((function(){r(i)})).catch((function(e){i.error(e)}))}return t(s)(e,[{key:"next",value:function(e){this.forEachObserver((function(t){t.next(e)}))}},{key:"error",value:function(e){this.forEachObserver((function(t){t.error(e)})),this.close(e)}},{key:"complete",value:function(){this.forEachObserver((function(e){e.complete()})),this.close()}},{key:"subscribe",value:function(e,t,r){var n,i=this;if(void 0===e&&void 0===t&&void 0===r)throw new Error("Missing Observer.");void 0===(n=function(e,t){if("object"!=typeof e||null===e)return!1;var r=!0,n=!1,i=void 0;try{for(var o,a=t[Symbol.iterator]();!(r=(o=a.next()).done);r=!0){var s=o.value;if(s in e&&"function"==typeof e[s])return!0}}catch(e){n=!0,i=e}finally{try{r||null==a.return||a.return()}finally{if(n)throw i}}return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:r}).next&&(n.next=D),void 0===n.error&&(n.error=D),void 0===n.complete&&(n.complete=D);var o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((function(){try{i.finalError?n.error(i.finalError):n.complete()}catch(e){}})),this.observers.push(n),o}},{key:"unsubscribeOne",value:function(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}},{key:"forEachObserver",value:function(e){if(!this.finalized)for(var t=0;t<this.observers.length;t++)this.sendOne(t,e)}},{key:"sendOne",value:function(e,t){var r=this;this.task.then((function(){if(void 0!==r.observers&&void 0!==r.observers[e])try{t(r.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}},{key:"close",value:function(e){var t=this;this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((function(){t.observers=void 0,t.onNoObservers=void 0})))}}]),e}();function D(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function U(e){return e&&e._delegate?e._delegate:e}})),o.register("ds8z5",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}})),o.register("eYQtU",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n.default(e,t)};var r,n=(r=o("gD1JV"))&&r.__esModule?r:{default:r}})),o.register("gD1JV",(function(e,t){"use strict";function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return r(e,t)}})),o.register("4c7YB",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return u(e)};var r=s(o("ge8co")),n=s(o("cZGw3")),i=s(o("fVNic")),a=s(o("gD1JV"));function s(e){return e&&e.__esModule?e:{default:e}}function u(e){var t="function"==typeof Map?new Map:void 0;return u=function(e){if(null===e||!n.default(e))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,o)}function o(){return r.default(e,arguments,i.default(this).constructor)}return o.prototype=Object.create(e.prototype,{constructor:{value:o,enumerable:!1,writable:!0,configurable:!0}}),a.default(o,e)},u(e)}})),o.register("ge8co",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,r){return a.apply(null,arguments)};var r,n=(r=o("gD1JV"))&&r.__esModule?r:{default:r};function i(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function a(e,t,r){return(a=i()?Reflect.construct:function(e,t,r){var i=[null];i.push.apply(i,t);var o=new(Function.bind.apply(e,i));return r&&n.default(o,r.prototype),o}).apply(null,arguments)}})),o.register("cZGw3",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return-1!==Function.toString.call(e).indexOf("[native code]")}})),o.register("fVNic",(function(e,t){"use strict";function r(e){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return r(e)}})),o.register("2MbLg",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){var t=r.default();return function(){var r,o=n.default(e);if(t){var a=n.default(this).constructor;r=Reflect.construct(o,arguments,a)}else r=o.apply(this,arguments);return i.default(this,r)}};var r=a(o("aTHs7")),n=a(o("fVNic")),i=a(o("jmhxu"));function a(e){return e&&e.__esModule?e:{default:e}}})),o.register("aTHs7",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}})),o.register("jmhxu",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return!t||"object"!==n.default(t)&&"function"!=typeof t?r.default(e):t};var r=i(o("ds8z5")),n=i(o("l5bVx"));function i(e){return e&&e.__esModule?e:{default:e}}})),o.register("l5bVx",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e}})),o.register("kZfxc",(function(r,n){e(r.exports,"LogLevel",(function(){return i})),e(r.exports,"Logger",(function(){return g})),e(r.exports,"setLogLevel",(function(){return y})),e(r.exports,"setUserLogHandler",(function(){return b}));var i,a,s=o("8MBJY"),u=o("a2hTj"),c=o("hKHmD"),l=o("8nrFW"),f=[];(a=i||(i={}))[a.DEBUG=0]="DEBUG",a[a.VERBOSE=1]="VERBOSE",a[a.INFO=2]="INFO",a[a.WARN=3]="WARN",a[a.ERROR=4]="ERROR",a[a.SILENT=5]="SILENT";var d,h={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},p=i.INFO,v=(d={},t(c)(d,i.DEBUG,"log"),t(c)(d,i.VERBOSE,"log"),t(c)(d,i.INFO,"info"),t(c)(d,i.WARN,"warn"),t(c)(d,i.ERROR,"error"),d),m=function(e,r){for(var n=arguments.length,i=new Array(n>2?n-2:0),o=2;o<n;o++)i[o-2]=arguments[o];var a;if(!(r<e.logLevel)){var s=(new Date).toISOString(),u=v[r];if(!u)throw new Error("Attempted to log a message with an invalid logType (value: ".concat(r,")"));(a=console)[u].apply(a,["[".concat(s,"]  ").concat(e.name,":")].concat(t(l)(i)))}},g=function(){"use strict";function e(r){t(s)(this,e),this.name=r,this._logLevel=p,this._logHandler=m,this._userLogHandler=null,f.push(this)}return t(u)(e,[{key:"logLevel",get:function(){return this._logLevel},set:function(e){if(!(e in i))throw new TypeError('Invalid value "'.concat(e,'" assigned to `logLevel`'));this._logLevel=e}},{key:"setLogLevel",value:function(e){this._logLevel="string"==typeof e?h[e]:e}},{key:"logHandler",get:function(){return this._logHandler},set:function(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}},{key:"userLogHandler",get:function(){return this._userLogHandler},set:function(e){this._userLogHandler=e}},{key:"debug",value:function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,[this,i.DEBUG].concat(t(l)(r))),this._logHandler.apply(this,[this,i.DEBUG].concat(t(l)(r)))}},{key:"log",value:function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,[this,i.VERBOSE].concat(t(l)(r))),this._logHandler.apply(this,[this,i.VERBOSE].concat(t(l)(r)))}},{key:"info",value:function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,[this,i.INFO].concat(t(l)(r))),this._logHandler.apply(this,[this,i.INFO].concat(t(l)(r)))}},{key:"warn",value:function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,[this,i.WARN].concat(t(l)(r))),this._logHandler.apply(this,[this,i.WARN].concat(t(l)(r)))}},{key:"error",value:function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,[this,i.ERROR].concat(t(l)(r))),this._logHandler.apply(this,[this,i.ERROR].concat(t(l)(r)))}}]),e}();function y(e){f.forEach((function(t){t.setLogLevel(e)}))}function b(e,t){var r=!0,n=!1,o=void 0;try{for(var a,s=f[Symbol.iterator]();!(r=(a=s.next()).done);r=!0){var u=a.value,c=null;t&&t.level&&(c=h[t.level]),u.userLogHandler=null===e?null:function(t,r){for(var n=arguments.length,o=new Array(n>2?n-2:0),a=2;a<n;a++)o[a-2]=arguments[a];var s=o.map((function(e){if(null==e)return null;if("string"==typeof e)return e;if("number"==typeof e||"boolean"==typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(e){return null}})).filter((function(e){return e})).join(" ");r>=(null!=c?c:t.logLevel)&&e({level:i[r].toLowerCase(),message:s,args:o,type:t.name})}}}catch(e){n=!0,o=e}finally{try{r||null==s.return||s.return()}finally{if(n)throw o}}}})),o.register("ajgRO",(function(r,n){e(r.exports,"openDB",(function(){return l}));var i=o("bpxeT"),a=o("dDDEV"),s=o("8nrFW"),u=o("2TvXO"),c=o("kKOTz");c=o("kKOTz");function l(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=r.blocked,i=r.upgrade,o=r.blocking,a=r.terminated,s=indexedDB.open(e,t),u=(0,c.w)(s);return i&&s.addEventListener("upgradeneeded",(function(e){i((0,c.w)(s.result),e.oldVersion,e.newVersion,(0,c.w)(s.transaction))})),n&&s.addEventListener("blocked",(function(){return n()})),u.then((function(e){a&&e.addEventListener("close",(function(){return a()})),o&&e.addEventListener("versionchange",(function(){return o()}))})).catch((function(){})),u}var f=["get","getKey","getAll","getAllKeys","count"],d=["put","add","delete","clear"],h=new Map;function p(e,r){if(e instanceof IDBDatabase&&!(r in e)&&"string"==typeof r){if(h.get(r))return h.get(r);var n=r.replace(/FromIndex$/,""),o=r!==n,a=d.includes(n);if(n in(o?IDBIndex:IDBObjectStore).prototype&&(a||f.includes(n))){var c,l=(c=t(i)(t(u).mark((function e(r){var i,c,l,f,d,h,p=arguments;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(i=p.length,c=new Array(i>1?i-1:0),l=1;l<i;l++)c[l-1]=p[l];return d=this.transaction(r,a?"readwrite":"readonly"),h=d.store,o&&(h=h.index(c.shift())),e.next=7,Promise.all([(f=h)[n].apply(f,t(s)(c)),a&&d.done]);case 7:return e.abrupt("return",e.sent[0]);case 8:case"end":return e.stop()}}),e,this)}))),function(e){return c.apply(this,arguments)});return h.set(r,l),l}}}(0,c.r)((function(e){return t(a)({},e,{get:function(t,r,n){return p(t,r)||e.get(t,r,n)},has:function(t,r){return!!p(t,r)||e.has(t,r)}})}))})),o.register("dDDEV",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},i=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),i.forEach((function(t){n.default(e,t,r[t])}))}return e};var r,n=(r=o("hKHmD"))&&r.__esModule?r:{default:r}})),o.register("kKOTz",(function(r,n){e(r.exports,"w",(function(){return g})),e(r.exports,"r",(function(){return p}));var i,a,s=o("8nrFW");var u=new WeakMap,c=new WeakMap,l=new WeakMap,f=new WeakMap,d=new WeakMap;var h={get:function(e,t,r){if(e instanceof IDBTransaction){if("done"===t)return c.get(e);if("objectStoreNames"===t)return e.objectStoreNames||l.get(e);if("store"===t)return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return g(e[t])},set:function(e,t,r){return e[t]=r,!0},has:function(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function p(e){h=e(h)}function v(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(a||(a=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return e.apply(y(this),r),g(u.get(this))}:function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return g(e.apply(y(this),r))}:function(r){for(var n=arguments.length,i=new Array(n>1?n-1:0),o=1;o<n;o++)i[o-1]=arguments[o];var a,u=(a=e).call.apply(a,[y(this),r].concat(t(s)(i)));return l.set(u,r.sort?r.sort():[r]),g(u)}}function m(e){return"function"==typeof e?v(e):(e instanceof IDBTransaction&&function(e){if(!c.has(e)){var t=new Promise((function(t,r){var n=function(){e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=function(){t(),n()},o=function(){r(e.error||new DOMException("AbortError","AbortError")),n()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)}));c.set(e,t)}}(e),t=e,(i||(i=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((function(e){return t instanceof e}))?new Proxy(e,h):e);var t}function g(e){if(e instanceof IDBRequest)return t=e,(r=new Promise((function(e,r){var n=function(){t.removeEventListener("success",i),t.removeEventListener("error",o)},i=function(){e(g(t.result)),n()},o=function(){r(t.error),n()};t.addEventListener("success",i),t.addEventListener("error",o)}))).then((function(e){e instanceof IDBCursor&&u.set(e,t)})).catch((function(){})),d.set(r,t),r;var t,r;if(f.has(e))return f.get(e);var n=m(e);return n!==e&&(f.set(e,n),d.set(n,e)),n}var y=function(e){return d.get(e)}})),o.register("3SEMc",(function(t,r){e(t.exports,"getAuth",(function(){return o("ewipB").n})),e(t.exports,"createUserWithEmailAndPassword",(function(){return o("ewipB").a5})),e(t.exports,"signOut",(function(){return o("ewipB").y})),e(t.exports,"signInWithEmailAndPassword",(function(){return o("ewipB").a6})),e(t.exports,"onAuthStateChanged",(function(){return o("ewipB").v})),o("eMcUM")})),o.register("eMcUM",(function(t,r){e(t.exports,"createUserWithEmailAndPassword",(function(){return o("ewipB").a5})),e(t.exports,"getAuth",(function(){return o("ewipB").n})),e(t.exports,"onAuthStateChanged",(function(){return o("ewipB").v})),e(t.exports,"signInWithEmailAndPassword",(function(){return o("ewipB").a6})),e(t.exports,"signOut",(function(){return o("ewipB").y})),o("2xDiJ"),o("MjY8E"),o("kZfxc"),o("6ExWU");o("ewipB")})),o.register("ewipB",(function(r,n){e(r.exports,"a5",(function(){return Nt})),e(r.exports,"a6",(function(){return Dt})),e(r.exports,"v",(function(){return Ut})),e(r.exports,"y",(function(){return Bt})),e(r.exports,"n",(function(){return xn}));var i=o("ds8z5"),a=o("bpxeT"),s=o("8MBJY"),u=o("a2hTj"),c=o("hKHmD"),l=o("jh8P3"),f=o("fVNic"),d=o("eYQtU"),h=o("1t1Wn"),p=o("8nrFW"),v=o("2MbLg"),m=o("2TvXO"),g=o("2xDiJ"),y=o("MjY8E"),b=o("4tSb9"),k=o("kZfxc"),w=o("6ExWU");function x(){return t(c)({},"dependent-sdk-initialized-before-auth","Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.")}var _=x,E=new(0,g.ErrorFactory)("auth","Firebase",x()),I=new(0,k.Logger)("@firebase/auth");function S(e){for(var r=arguments.length,n=new Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];var o;I.logLevel<=k.LogLevel.ERROR&&(o=I).error.apply(o,["Auth (".concat(y.SDK_VERSION,"): ").concat(e)].concat(t(p)(n)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T(e){for(var r=arguments.length,n=new Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];throw R.apply(void 0,[e].concat(t(p)(n)))}function O(e){for(var r=arguments.length,n=new Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];return R.apply(void 0,[e].concat(t(p)(n)))}function C(e,r,n){var i=Object.assign(Object.assign({},_()),t(c)({},r,n));return new(0,g.ErrorFactory)("auth","Firebase",i).create(r,{appName:e.name})}function R(e){for(var r=arguments.length,n=new Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];var o;if("string"!=typeof e){var a,s=n[0],u=t(p)(n.slice(1));return u[0]&&(u[0].appName=e.name),(a=e._errorFactory).create.apply(a,[s].concat(t(p)(u)))}return(o=E).create.apply(o,[e].concat(t(p)(n)))}function A(e,r){for(var n=arguments.length,i=new Array(n>2?n-2:0),o=2;o<n;o++)i[o-2]=arguments[o];if(!e)throw R.apply(void 0,[r].concat(t(p)(i)))}function L(e){var t="INTERNAL ASSERTION FAILED: "+e;throw S(t),new Error(t)}function P(e,t){e||L(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var N=new Map;function M(e){P(e instanceof Function,"Expected a class definition");var t=N.get(e);return t?(P(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,N.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D(e,t){var r=(0,y._getProvider)(e,"auth");if(r.isInitialized()){var n=r.getImmediate(),i=r.getOptions();if((0,g.deepEqual)(i,null!=t?t:{}))return n;T(n,"already-initialized")}return r.initialize({options:t})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function U(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function B(){return"http:"===j()||"https:"===j()}function j(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var F=function(){"use strict";function e(r,n){t(s)(this,e),this.shortDelay=r,this.longDelay=n,P(n>r,"Short delay should be less than long delay!"),this.isMobile=(0,g.isMobileCordova)()||(0,g.isReactNative)()}return t(u)(e,[{key:"get",value:function(){return"undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(B()||(0,g.isBrowserExtension)()||"connection"in navigator)&&!navigator.onLine?Math.min(5e3,this.shortDelay):this.isMobile?this.longDelay:this.shortDelay}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q(e,t){P(e.emulator,"Emulator should always be set here");var r=e.emulator.url;return t?"".concat(r).concat(t.startsWith("/")?t.slice(1):t):r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var W,V=function(){"use strict";function e(){t(s)(this,e)}return t(u)(e,null,[{key:"initialize",value:function(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}},{key:"fetch",value:function(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void L("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}},{key:"headers",value:function(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void L("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}},{key:"response",value:function(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void L("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}]),e}(),H=(W={},t(c)(W,"CREDENTIAL_MISMATCH","custom-token-mismatch"),t(c)(W,"MISSING_CUSTOM_TOKEN","internal-error"),t(c)(W,"INVALID_IDENTIFIER","invalid-email"),t(c)(W,"MISSING_CONTINUE_URI","internal-error"),t(c)(W,"INVALID_PASSWORD","wrong-password"),t(c)(W,"MISSING_PASSWORD","internal-error"),t(c)(W,"EMAIL_EXISTS","email-already-in-use"),t(c)(W,"PASSWORD_LOGIN_DISABLED","operation-not-allowed"),t(c)(W,"INVALID_IDP_RESPONSE","invalid-credential"),t(c)(W,"INVALID_PENDING_TOKEN","invalid-credential"),t(c)(W,"FEDERATED_USER_ID_ALREADY_LINKED","credential-already-in-use"),t(c)(W,"MISSING_REQ_TYPE","internal-error"),t(c)(W,"EMAIL_NOT_FOUND","user-not-found"),t(c)(W,"RESET_PASSWORD_EXCEED_LIMIT","too-many-requests"),t(c)(W,"EXPIRED_OOB_CODE","expired-action-code"),t(c)(W,"INVALID_OOB_CODE","invalid-action-code"),t(c)(W,"MISSING_OOB_CODE","internal-error"),t(c)(W,"CREDENTIAL_TOO_OLD_LOGIN_AGAIN","requires-recent-login"),t(c)(W,"INVALID_ID_TOKEN","invalid-user-token"),t(c)(W,"TOKEN_EXPIRED","user-token-expired"),t(c)(W,"USER_NOT_FOUND","user-token-expired"),t(c)(W,"TOO_MANY_ATTEMPTS_TRY_LATER","too-many-requests"),t(c)(W,"INVALID_CODE","invalid-verification-code"),t(c)(W,"INVALID_SESSION_INFO","invalid-verification-id"),t(c)(W,"INVALID_TEMPORARY_PROOF","invalid-credential"),t(c)(W,"MISSING_SESSION_INFO","missing-verification-id"),t(c)(W,"SESSION_EXPIRED","code-expired"),t(c)(W,"MISSING_ANDROID_PACKAGE_NAME","missing-android-pkg-name"),t(c)(W,"UNAUTHORIZED_DOMAIN","unauthorized-continue-uri"),t(c)(W,"INVALID_OAUTH_CLIENT_ID","invalid-oauth-client-id"),t(c)(W,"ADMIN_ONLY_OPERATION","admin-restricted-operation"),t(c)(W,"INVALID_MFA_PENDING_CREDENTIAL","invalid-multi-factor-session"),t(c)(W,"MFA_ENROLLMENT_NOT_FOUND","multi-factor-info-not-found"),t(c)(W,"MISSING_MFA_ENROLLMENT_ID","missing-multi-factor-info"),t(c)(W,"MISSING_MFA_PENDING_CREDENTIAL","missing-multi-factor-session"),t(c)(W,"SECOND_FACTOR_EXISTS","second-factor-already-in-use"),t(c)(W,"SECOND_FACTOR_LIMIT_EXCEEDED","maximum-second-factor-count-exceeded"),t(c)(W,"BLOCKING_FUNCTION_ERROR_RESPONSE","internal-error"),W),z=new F(3e4,6e4);function J(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}function K(e,t,r,n){return G.apply(this,arguments)}function G(){return G=t(a)(t(m).mark((function e(r,n,i,o){var s,u=arguments;return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=u.length>4&&void 0!==u[4]?u[4]:{},e.abrupt("return",Y(r,s,t(a)(t(m).mark((function e(){var a,s,u,c;return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={},s={},o&&("GET"===n?s=o:a={body:JSON.stringify(o)}),u=(0,g.querystring)(Object.assign({key:r.config.apiKey},s)).slice(1),e.next=6,r._getAdditionalHeaders();case 6:return(c=e.sent)["Content-Type"]="application/json",r.languageCode&&(c["X-Firebase-Locale"]=r.languageCode),e.abrupt("return",V.fetch()($(r,r.config.apiHost,i,u),Object.assign({method:n,headers:c,referrerPolicy:"no-referrer"},a)));case 10:case"end":return e.stop()}}),e)})))));case 2:case"end":return e.stop()}}),e)}))),G.apply(this,arguments)}function Y(e,t,r){return X.apply(this,arguments)}function X(){return(X=t(a)(t(m).mark((function e(r,n,i){var o,a,s,u,c,l,f,d,p;return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r._canInitEmulator=!1,o=Object.assign(Object.assign({},H),n),e.prev=2,a=new ee(r),e.next=6,Promise.race([i(),a.promise]);case 6:return s=e.sent,a.clearNetworkTimeout(),e.next=10,s.json();case 10:if(!("needConfirmation"in(u=e.sent))){e.next=13;break}throw te(r,"account-exists-with-different-credential",u);case 13:if(!s.ok||"errorMessage"in u){e.next=17;break}return e.abrupt("return",u);case 17:if(c=s.ok?u.errorMessage:u.error.message,l=t(h)(c.split(" : "),2),f=l[0],d=l[1],"FEDERATED_USER_ID_ALREADY_LINKED"!==f){e.next=23;break}throw te(r,"credential-already-in-use",u);case 23:if("EMAIL_EXISTS"!==f){e.next=27;break}throw te(r,"email-already-in-use",u);case 27:if("USER_DISABLED"!==f){e.next=29;break}throw te(r,"user-disabled",u);case 29:if(p=o[f]||f.toLowerCase().replace(/[_\s]+/g,"-"),!d){e.next=34;break}throw C(r,p,d);case 34:T(r,p);case 35:e.next=42;break;case 37:if(e.prev=37,e.t0=e.catch(2),!(e.t0 instanceof g.FirebaseError)){e.next=41;break}throw e.t0;case 41:T(r,"network-request-failed");case 42:case"end":return e.stop()}}),e,null,[[2,37]])})))).apply(this,arguments)}function Z(e,t,r,n){return Q.apply(this,arguments)}function Q(){return Q=t(a)(t(m).mark((function e(r,n,i,o){var a,s,u=arguments;return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=u.length>4&&void 0!==u[4]?u[4]:{},e.next=3,K(r,n,i,o,a);case 3:return"mfaPendingCredential"in(s=e.sent)&&T(r,"multi-factor-auth-required",{_serverResponse:s}),e.abrupt("return",s);case 6:case"end":return e.stop()}}),e)}))),Q.apply(this,arguments)}function $(e,t,r,n){var i="".concat(t).concat(r,"?").concat(n);return e.config.emulator?q(e.config,i):"".concat(e.config.apiScheme,"://").concat(i)}var ee=function(){"use strict";function e(r){var n=this;t(s)(this,e),this.auth=r,this.timer=null,this.promise=new Promise((function(e,t){var r=n;n.timer=setTimeout((function(){return t(O(r.auth,"network-request-failed"))}),z.get())}))}return t(u)(e,[{key:"clearNetworkTimeout",value:function(){clearTimeout(this.timer)}}]),e}();function te(e,t,r){var n={appName:e.name};r.email&&(n.email=r.email),r.phoneNumber&&(n.phoneNumber=r.phoneNumber);var i=O(e,t,n);return i.customData._tokenResponse=r,i}function re(e,t){return ne.apply(this,arguments)}function ne(){return(ne=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(a)(t(m).mark((function e(r,n){return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",K(r,"POST","/v1/accounts:delete",n));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ie(e,t){return oe.apply(this,arguments)}function oe(){return(oe=t(a)(t(m).mark((function e(r,n){return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",K(r,"POST","/v1/accounts:lookup",n));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ae(e){if(e)try{var t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function se(){return se=t(a)(t(m).mark((function e(r){var n,i,o,a,s,u,c=arguments;return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=c.length>1&&void 0!==c[1]&&c[1],i=(0,g.getModularInstance)(r),e.next=4,i.getIdToken(n);case 4:return o=e.sent,A((a=ce(o))&&a.exp&&a.auth_time&&a.iat,i.auth,"internal-error"),s="object"==typeof a.firebase?a.firebase:void 0,u=null==s?void 0:s.sign_in_provider,e.abrupt("return",{claims:a,token:o,authTime:ae(ue(a.auth_time)),issuedAtTime:ae(ue(a.iat)),expirationTime:ae(ue(a.exp)),signInProvider:u||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null});case 10:case"end":return e.stop()}}),e)}))),se.apply(this,arguments)}function ue(e){return 1e3*Number(e)}function ce(e){var r,n=t(h)(e.split("."),3),i=n[0],o=n[1],a=n[2];if(void 0===i||void 0===o||void 0===a)return S("JWT malformed, contained fewer than 3 sections"),null;try{var s=(0,g.base64Decode)(o);return s?JSON.parse(s):(S("Failed to decode base64 JWT payload"),null)}catch(e){return S("Caught error parsing JWT payload as JSON",null===(r=e)||void 0===r?void 0:r.toString()),null}}function le(e,t){return fe.apply(this,arguments)}function fe(){return fe=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(a)(t(m).mark((function e(r,n){var i=arguments;return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(i.length>2&&void 0!==i[2]&&i[2])){e.next=3;break}return e.abrupt("return",n);case 3:return e.prev=3,e.next=6,n;case 6:return e.abrupt("return",e.sent);case 9:if(e.prev=9,e.t0=e.catch(3),!(e.t0 instanceof g.FirebaseError&&de(e.t0))){e.next=15;break}if(r.auth.currentUser!==r){e.next=15;break}return e.next=15,r.auth.signOut();case 15:throw e.t0;case 16:case"end":return e.stop()}}),e,null,[[3,9]])}))),fe.apply(this,arguments)}function de(e){var t=e.code;return"auth/user-disabled"===t||"auth/user-token-expired"===t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var he=function(){"use strict";function e(r){t(s)(this,e),this.user=r,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}return t(u)(e,[{key:"_start",value:function(){this.isRunning||(this.isRunning=!0,this.schedule())}},{key:"_stop",value:function(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}},{key:"getInterval",value:function(e){var t;if(e){var r=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),r}this.errorBackoff=3e4;var n=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,n)}},{key:"schedule",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(this.isRunning){var r=this.getInterval(e),n=this;this.timerId=setTimeout(t(a)(t(m).mark((function e(){return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.iteration();case 2:case"end":return e.stop()}}),e)}))),r)}}},{key:"iteration",value:function(){var e=this;return t(a)(t(m).mark((function r(){var n;return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=1,t.next=4,e.user.getIdToken(!0);case 4:t.next=10;break;case 6:return t.prev=6,t.t0=t.catch(1),"auth/network-request-failed"===(null===(n=t.t0)||void 0===n?void 0:n.code)&&e.schedule(!0),t.abrupt("return");case 10:e.schedule();case 11:case"end":return t.stop()}}),r,null,[[1,6]])})))()}}]),e}(),pe=function(){"use strict";function e(r,n){t(s)(this,e),this.createdAt=r,this.lastLoginAt=n,this._initializeTime()}return t(u)(e,[{key:"_initializeTime",value:function(){this.lastSignInTime=ae(this.lastLoginAt),this.creationTime=ae(this.createdAt)}},{key:"_copy",value:function(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}},{key:"toJSON",value:function(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ve(e){return me.apply(this,arguments)}function me(){return(me=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(a)(t(m).mark((function e(r){var n,i,o,a,s,u,c,l,f,d,h;return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=r.auth,e.next=4,r.getIdToken();case 4:return o=e.sent,e.next=7,le(r,ie(i,{idToken:o}));case 7:A(null==(a=e.sent)?void 0:a.users.length,i,"internal-error"),s=a.users[0],r._notifyReloadListener(s),u=(null===(n=s.providerUserInfo)||void 0===n?void 0:n.length)?be(s.providerUserInfo):[],c=ye(r.providerData,u),l=r.isAnonymous,f=!(r.email&&s.passwordHash||(null==c?void 0:c.length)),d=!!l&&f,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:c,metadata:new pe(s.createdAt,s.lastLoginAt),isAnonymous:d},Object.assign(r,h);case 18:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ge(){return(ge=t(a)(t(m).mark((function e(r){var n;return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=(0,g.getModularInstance)(r),e.next=3,ve(n);case 3:return e.next=5,n.auth._persistUserIfCurrent(n);case 5:n.auth._notifyListenersIfCurrent(n);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ye(e,r){var n=e.filter((function(e){return!r.some((function(t){return t.providerId===e.providerId}))}));return t(p)(n).concat(t(p)(r))}function be(e){return e.map((function(e){var t=e.providerId,r=(0,b.__rest)(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}}))}function ke(e,t){return we.apply(this,arguments)}function we(){return(we=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(a)(t(m).mark((function e(r,n){var i;return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Y(r,{},t(a)(t(m).mark((function e(){var i,o,a,s,u,c;return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=(0,g.querystring)({grant_type:"refresh_token",refresh_token:n}).slice(1),o=r.config,a=o.tokenApiHost,s=o.apiKey,u=$(r,a,"/v1/token","key=".concat(s)),e.next=5,r._getAdditionalHeaders();case 5:return(c=e.sent)["Content-Type"]="application/x-www-form-urlencoded",e.abrupt("return",V.fetch()(u,{method:"POST",headers:c,body:i}));case 8:case"end":return e.stop()}}),e)}))));case 2:return i=e.sent,e.abrupt("return",{accessToken:i.access_token,expiresIn:i.expires_in,refreshToken:i.refresh_token});case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var xe=function(){"use strict";function e(){t(s)(this,e),this.refreshToken=null,this.accessToken=null,this.expirationTime=null}return t(u)(e,[{key:"isExpired",get:function(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}},{key:"updateFromServerResponse",value:function(e){A(e.idToken,"internal-error"),A(void 0!==e.idToken,"internal-error"),A(void 0!==e.refreshToken,"internal-error");var t,r,n="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):(t=e.idToken,A(r=ce(t),"internal-error"),A(void 0!==r.exp,"internal-error"),A(void 0!==r.iat,"internal-error"),Number(r.exp)-Number(r.iat));this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}},{key:"getToken",value:function(e){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this;return t(a)(t(m).mark((function i(){return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(A(!n.accessToken||n.refreshToken,e,"user-token-expired"),r||!n.accessToken||n.isExpired){t.next=3;break}return t.abrupt("return",n.accessToken);case 3:if(!n.refreshToken){t.next=7;break}return t.next=6,n.refresh(e,n.refreshToken);case 6:return t.abrupt("return",n.accessToken);case 7:return t.abrupt("return",null);case 8:case"end":return t.stop()}}),i)})))()}},{key:"clearRefreshToken",value:function(){this.refreshToken=null}},{key:"refresh",value:function(e,r){var n=this;return t(a)(t(m).mark((function i(){var o,a,s,u;return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ke(e,r);case 2:o=t.sent,a=o.accessToken,s=o.refreshToken,u=o.expiresIn,n.updateTokensAndExpiration(a,s,Number(u));case 7:case"end":return t.stop()}}),i)})))()}},{key:"updateTokensAndExpiration",value:function(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*r}},{key:"toJSON",value:function(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}},{key:"_assign",value:function(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}},{key:"_clone",value:function(){return Object.assign(new e,this.toJSON())}},{key:"_performRefresh",value:function(){return L("not implemented")}}],[{key:"fromJSON",value:function(t,r){var n=r.refreshToken,i=r.accessToken,o=r.expirationTime,a=new e;return n&&(A("string"==typeof n,"internal-error",{appName:t}),a.refreshToken=n),i&&(A("string"==typeof i,"internal-error",{appName:t}),a.accessToken=i),o&&(A("number"==typeof o,"internal-error",{appName:t}),a.expirationTime=o),a}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _e(e,t){A("string"==typeof e||void 0===e,"internal-error",{appName:t})}var Ee=function(){"use strict";function e(r){t(s)(this,e);var n=r.uid,i=r.auth,o=r.stsTokenManager,a=(0,b.__rest)(r,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new he(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?t(p)(a.providerData):[],this.metadata=new pe(a.createdAt||void 0,a.lastLoginAt||void 0)}return t(u)(e,[{key:"getIdToken",value:function(e){var r=this;return t(a)(t(m).mark((function n(){var i;return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,le(r,r.stsTokenManager.getToken(r.auth,e));case 2:if(A(i=t.sent,r.auth,"internal-error"),r.accessToken===i){t.next=9;break}return r.accessToken=i,t.next=8,r.auth._persistUserIfCurrent(r);case 8:r.auth._notifyListenersIfCurrent(r);case 9:return t.abrupt("return",i);case 10:case"end":return t.stop()}}),n)})))()}},{key:"getIdTokenResult",value:function(e){return function(e){return se.apply(this,arguments)}(this,e)}},{key:"reload",value:function(){return function(e){return ge.apply(this,arguments)}(this)}},{key:"_assign",value:function(e){this!==e&&(A(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((function(e){return Object.assign({},e)})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}},{key:"_clone",value:function(t){return new e(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}))}},{key:"_onReload",value:function(e){A(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}},{key:"_notifyReloadListener",value:function(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}},{key:"_startProactiveRefresh",value:function(){this.proactiveRefresh._start()}},{key:"_stopProactiveRefresh",value:function(){this.proactiveRefresh._stop()}},{key:"_updateTokensIfNecessary",value:function(e){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this;return t(a)(t(m).mark((function i(){var o;return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(o=!1,e.idToken&&e.idToken!==n.stsTokenManager.accessToken&&(n.stsTokenManager.updateFromServerResponse(e),o=!0),!r){t.next=5;break}return t.next=5,ve(n);case 5:return t.next=7,n.auth._persistUserIfCurrent(n);case 7:o&&n.auth._notifyListenersIfCurrent(n);case 8:case"end":return t.stop()}}),i)})))()}},{key:"delete",value:function(){var e=this;return t(a)(t(m).mark((function r(){var n;return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getIdToken();case 2:return n=t.sent,t.next=5,le(e,re(e.auth,{idToken:n}));case 5:return e.stsTokenManager.clearRefreshToken(),t.abrupt("return",e.auth.signOut());case 7:case"end":return t.stop()}}),r)})))()}},{key:"toJSON",value:function(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((function(e){return Object.assign({},e)})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}},{key:"refreshToken",get:function(){return this.stsTokenManager.refreshToken||""}}],[{key:"_fromJSON",value:function(t,r){var n,i,o,a,s,u,c,l,f=null!==(n=r.displayName)&&void 0!==n?n:void 0,d=null!==(i=r.email)&&void 0!==i?i:void 0,h=null!==(o=r.phoneNumber)&&void 0!==o?o:void 0,p=null!==(a=r.photoURL)&&void 0!==a?a:void 0,v=null!==(s=r.tenantId)&&void 0!==s?s:void 0,m=null!==(u=r._redirectEventId)&&void 0!==u?u:void 0,g=null!==(c=r.createdAt)&&void 0!==c?c:void 0,y=null!==(l=r.lastLoginAt)&&void 0!==l?l:void 0,b=r.uid,k=r.emailVerified,w=r.isAnonymous,x=r.providerData,_=r.stsTokenManager;A(b&&_,t,"internal-error");var E=xe.fromJSON(this.name,_);A("string"==typeof b,t,"internal-error"),_e(f,t.name),_e(d,t.name),A("boolean"==typeof k,t,"internal-error"),A("boolean"==typeof w,t,"internal-error"),_e(h,t.name),_e(p,t.name),_e(v,t.name),_e(m,t.name),_e(g,t.name),_e(y,t.name);var I=new e({uid:b,auth:t,email:d,emailVerified:k,displayName:f,isAnonymous:w,photoURL:p,phoneNumber:h,tenantId:v,stsTokenManager:E,createdAt:g,lastLoginAt:y});return x&&Array.isArray(x)&&(I.providerData=x.map((function(e){return Object.assign({},e)}))),m&&(I._redirectEventId=m),I}},{key:"_fromIdTokenResponse",value:function(r,n){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return t(a)(t(m).mark((function o(){var a,s;return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(a=new xe).updateFromServerResponse(n),s=new e({uid:n.localId,auth:r,stsTokenManager:a,isAnonymous:i}),t.next=5,ve(s);case 5:return t.abrupt("return",s);case 6:case"end":return t.stop()}}),o)})))()}}]),e}(),Ie=function(){"use strict";function e(){t(s)(this,e),this.type="NONE",this.storage={}}return t(u)(e,[{key:"_isAvailable",value:function(){return t(a)(t(m).mark((function e(){return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",!0);case 1:case"end":return e.stop()}}),e)})))()}},{key:"_set",value:function(e,r){var n=this;return t(a)(t(m).mark((function i(){return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n.storage[e]=r;case 1:case"end":return t.stop()}}),i)})))()}},{key:"_get",value:function(e){var r=this;return t(a)(t(m).mark((function n(){var i;return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=r.storage[e],t.abrupt("return",void 0===i?null:i);case 2:case"end":return t.stop()}}),n)})))()}},{key:"_remove",value:function(e){var r=this;return t(a)(t(m).mark((function n(){return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:delete r.storage[e];case 1:case"end":return t.stop()}}),n)})))()}},{key:"_addListener",value:function(e,t){}},{key:"_removeListener",value:function(e,t){}}]),e}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ie.type="NONE";var Se=Ie;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Te(e,t,r){return"firebase:".concat(e,":").concat(t,":").concat(r)}var Oe=function(){"use strict";function e(r,n,i){t(s)(this,e),this.persistence=r,this.auth=n,this.userKey=i;var o=this.auth,a=o.config,u=o.name;this.fullUserKey=Te(this.userKey,a.apiKey,u),this.fullPersistenceKey=Te("persistence",a.apiKey,u),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}return t(u)(e,[{key:"setCurrentUser",value:function(e){return this.persistence._set(this.fullUserKey,e.toJSON())}},{key:"getCurrentUser",value:function(){var e=this;return t(a)(t(m).mark((function r(){var n;return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.persistence._get(e.fullUserKey);case 2:return n=t.sent,t.abrupt("return",n?Ee._fromJSON(e.auth,n):null);case 4:case"end":return t.stop()}}),r)})))()}},{key:"removeCurrentUser",value:function(){return this.persistence._remove(this.fullUserKey)}},{key:"savePersistenceForRedirect",value:function(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}},{key:"setPersistence",value:function(e){var r=this;return t(a)(t(m).mark((function n(){var i;return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r.persistence!==e){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,r.getCurrentUser();case 4:return i=t.sent,t.next=7,r.removeCurrentUser();case 7:if(r.persistence=e,!i){t.next=10;break}return t.abrupt("return",r.setCurrentUser(i));case 10:case"end":return t.stop()}}),n)})))()}},{key:"delete",value:function(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}}],[{key:"create",value:function(r,n){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"authUser";return t(a)(t(m).mark((function o(){var s,u,c,l,f,d,h,p,v,g,y,b,k;return t(m).wrap((function(o){for(;;)switch(o.prev=o.next){case 0:if(n.length){o.next=2;break}return o.abrupt("return",new e(M(Se),r,i));case 2:return o.next=4,Promise.all(n.map(function(){var e=t(a)(t(m).mark((function e(r){return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r._isAvailable();case 2:if(!e.sent){e.next=4;break}return e.abrupt("return",r);case 4:return e.abrupt("return",void 0);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 4:s=o.sent.filter((function(e){return e})),u=s[0]||M(Se),c=Te(i,r.config.apiKey,r.name),l=null,f=!0,d=!1,h=void 0,o.prev=9,p=n[Symbol.iterator]();case 11:if(f=(v=p.next()).done){o.next=29;break}return g=v.value,o.prev=13,o.next=16,g._get(c);case 16:if(!(y=o.sent)){o.next=22;break}return b=Ee._fromJSON(r,y),g!==u&&(l=b),u=g,o.abrupt("break",29);case 22:o.next=26;break;case 24:o.prev=24,o.t0=o.catch(13);case 26:f=!0,o.next=11;break;case 29:o.next=35;break;case 31:o.prev=31,o.t1=o.catch(9),d=!0,h=o.t1;case 35:o.prev=35,o.prev=36,f||null==p.return||p.return();case 38:if(o.prev=38,!d){o.next=41;break}throw h;case 41:return o.finish(38);case 42:return o.finish(35);case 43:if(k=s.filter((function(e){return e._shouldAllowMigration})),u._shouldAllowMigration&&k.length){o.next=46;break}return o.abrupt("return",new e(u,r,i));case 46:if(u=k[0],!l){o.next=50;break}return o.next=50,u._set(c,l.toJSON());case 50:return o.next=52,Promise.all(n.map(function(){var e=t(a)(t(m).mark((function e(r){return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r===u){e.next=8;break}return e.prev=1,e.next=4,r._remove(c);case 4:e.next=8;break;case 6:e.prev=6,e.t0=e.catch(1);case 8:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(t){return e.apply(this,arguments)}}()));case 52:return o.abrupt("return",new e(u,r,i));case 53:case"end":return o.stop()}}),o,null,[[9,31,35,43],[13,24],[36,,38,42]])})))()}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ce(e){var t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Pe(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Re(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Me(t))return"Blackberry";if(De(t))return"Webos";if(Ae(t))return"Safari";if((t.includes("chrome/")||Le(t))&&!t.includes("edge/"))return"Chrome";if(Ne(t))return"Android";var r=e.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/);return 2===(null==r?void 0:r.length)?r[1]:"Other"}function Re(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,g.getUA)();return/firefox\//i.test(e)}function Ae(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,g.getUA)(),t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Le(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,g.getUA)();return/crios\//i.test(e)}function Pe(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,g.getUA)();return/iemobile/i.test(e)}function Ne(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,g.getUA)();return/android/i.test(e)}function Me(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,g.getUA)();return/blackberry/i.test(e)}function De(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,g.getUA)();return/webos/i.test(e)}function Ue(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,g.getUA)();return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Be(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,g.getUA)();return Ue(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}function je(){return(0,g.isIE)()&&10===document.documentMode}function Fe(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,g.getUA)();return Ue(e)||Ne(e)||De(e)||Me(e)||/windows phone/i.test(e)||Pe(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function qe(e){var t,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];switch(e){case"Browser":t=Ce((0,g.getUA)());break;case"Worker":t="".concat(Ce((0,g.getUA)()),"-").concat(e);break;default:t=e}var n=r.length?r.join(","):"FirebaseCore-web";return"".concat(t,"/","JsCore","/").concat(y.SDK_VERSION,"/").concat(n)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var We=function(){"use strict";function e(r){t(s)(this,e),this.auth=r,this.queue=[]}return t(u)(e,[{key:"pushCallback",value:function(e,t){var r=this,n=function(t){return new Promise((function(r,n){try{r(e(t))}catch(e){n(e)}}))};n.onAbort=t,this.queue.push(n);var i=this.queue.length-1;return function(){r.queue[i]=function(){return Promise.resolve()}}}},{key:"runMiddleware",value:function(e){var r=this;return t(a)(t(m).mark((function n(){var i,o,a,s,u,c,l,f,d,h,p,v,g,y;return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r.auth.currentUser!==e){t.next=3;break}return t.abrupt("return");case 3:o=[],t.prev=4,a=!0,s=!1,u=void 0,t.prev=6,c=r.queue[Symbol.iterator]();case 8:if(a=(l=c.next()).done){t.next=16;break}return f=l.value,t.next=12,f(e);case 12:f.onAbort&&o.push(f.onAbort);case 13:a=!0,t.next=8;break;case 16:t.next=22;break;case 18:t.prev=18,t.t0=t.catch(6),s=!0,u=t.t0;case 22:t.prev=22,t.prev=23,a||null==c.return||c.return();case 25:if(t.prev=25,!s){t.next=28;break}throw u;case 28:return t.finish(25);case 29:return t.finish(22);case 30:t.next=53;break;case 32:for(t.prev=32,t.t1=t.catch(4),o.reverse(),d=!0,h=!1,p=void 0,t.prev=36,v=o[Symbol.iterator]();!(d=(g=v.next()).done);d=!0){y=g.value;try{y()}catch(e){}}t.next=44;break;case 40:t.prev=40,t.t2=t.catch(36),h=!0,p=t.t2;case 44:t.prev=44,t.prev=45,d||null==v.return||v.return();case 47:if(t.prev=47,!h){t.next=50;break}throw p;case 50:return t.finish(47);case 51:return t.finish(44);case 52:throw r.auth._errorFactory.create("login-blocked",{originalMessage:null===(i=t.t1)||void 0===i?void 0:i.message});case 53:case"end":return t.stop()}}),n,null,[[4,32],[6,18,22,30],[23,,25,29],[36,40,44,52],[45,,47,51]])})))()}}]),e}(),Ve=function(){"use strict";function e(r,n,i){t(s)(this,e),this.app=r,this.heartbeatServiceProvider=n,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ze(this),this.idTokenSubscription=new ze(this),this.beforeStateQueue=new We(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=E,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=r.name,this.clientVersion=i.sdkClientVersion}return t(u)(e,[{key:"_initializeWithPersistence",value:function(e,r){r&&(this._popupRedirectResolver=M(r));var n=this;return this._initializationPromise=this.queue(t(a)(t(m).mark((function i(){var o,a;return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n._deleted){t.next=3;break}return t.abrupt("return");case 3:return t.next=5,Oe.create(n,e);case 5:if(n.persistenceManager=t.sent,!n._deleted){t.next=8;break}return t.abrupt("return");case 8:if(!(null===(o=n._popupRedirectResolver)||void 0===o?void 0:o._shouldInitProactively)){t.next=16;break}return t.prev=9,t.next=12,n._popupRedirectResolver._initialize(n);case 12:t.next=16;break;case 14:t.prev=14,t.t0=t.catch(9);case 16:return t.next=18,n.initializeCurrentUser(r);case 18:if(n.lastNotifiedUid=(null===(a=n.currentUser)||void 0===a?void 0:a.uid)||null,!n._deleted){t.next=21;break}return t.abrupt("return");case 21:n._isInitialized=!0;case 22:case"end":return t.stop()}}),i,null,[[9,14]])})))),this._initializationPromise}},{key:"_onStorageEvent",value:function(){var e=this;return t(a)(t(m).mark((function r(){var n;return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e._deleted){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,e.assertedPersistence.getCurrentUser();case 4:if(n=t.sent,e.currentUser||n){t.next=7;break}return t.abrupt("return");case 7:if(!e.currentUser||!n||e.currentUser.uid!==n.uid){t.next=12;break}return e._currentUser._assign(n),t.next=11,e.currentUser.getIdToken();case 11:return t.abrupt("return");case 12:return t.next=14,e._updateCurrentUser(n,!0);case 14:case"end":return t.stop()}}),r)})))()}},{key:"initializeCurrentUser",value:function(e){var r=this;return t(a)(t(m).mark((function n(){var i,o,a,s,u,c,l;return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=3,r.assertedPersistence.getCurrentUser();case 3:if(o=t.sent,a=o,s=!1,!e||!r.config.authDomain){t.next=15;break}return t.next=9,r.getOrInitRedirectPersistenceManager();case 9:return u=null===(i=r.redirectUser)||void 0===i?void 0:i._redirectEventId,c=null==a?void 0:a._redirectEventId,t.next=13,r.tryRedirectSignIn(e);case 13:l=t.sent,u&&u!==c||!(null==l?void 0:l.user)||(a=l.user,s=!0);case 15:if(a){t.next=17;break}return t.abrupt("return",r.directlySetCurrentUser(null));case 17:if(a._redirectEventId){t.next=33;break}if(!s){t.next=28;break}return t.prev=19,t.next=22,r.beforeStateQueue.runMiddleware(a);case 22:t.next=28;break;case 24:t.prev=24,t.t0=t.catch(19),a=o,r._popupRedirectResolver._overrideRedirectResult(r,(function(){return Promise.reject(t.t0)}));case 28:if(!a){t.next=32;break}return t.abrupt("return",r.reloadAndSetCurrentUserOrClear(a));case 32:return t.abrupt("return",r.directlySetCurrentUser(null));case 33:return A(r._popupRedirectResolver,r,"argument-error"),t.next=36,r.getOrInitRedirectPersistenceManager();case 36:if(!r.redirectUser||r.redirectUser._redirectEventId!==a._redirectEventId){t.next=38;break}return t.abrupt("return",r.directlySetCurrentUser(a));case 38:return t.abrupt("return",r.reloadAndSetCurrentUserOrClear(a));case 39:case"end":return t.stop()}}),n,null,[[19,24]])})))()}},{key:"tryRedirectSignIn",value:function(e){var r=this;return t(a)(t(m).mark((function n(){var i;return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=null,t.prev=1,t.next=4,r._popupRedirectResolver._completeRedirectFn(r,e,!0);case 4:i=t.sent,t.next=11;break;case 7:return t.prev=7,t.t0=t.catch(1),t.next=11,r._setRedirectUser(null);case 11:return t.abrupt("return",i);case 12:case"end":return t.stop()}}),n,null,[[1,7]])})))()}},{key:"reloadAndSetCurrentUserOrClear",value:function(e){var r=this;return t(a)(t(m).mark((function n(){var i;return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=1,t.next=4,ve(e);case 4:t.next=10;break;case 6:if(t.prev=6,t.t0=t.catch(1),"auth/network-request-failed"===(null===(i=t.t0)||void 0===i?void 0:i.code)){t.next=10;break}return t.abrupt("return",r.directlySetCurrentUser(null));case 10:return t.abrupt("return",r.directlySetCurrentUser(e));case 11:case"end":return t.stop()}}),n,null,[[1,6]])})))()}},{key:"useDeviceLanguage",value:function(){this.languageCode=function(){if("undefined"==typeof navigator)return null;var e=navigator;return e.languages&&e.languages[0]||e.language||null}()}},{key:"_delete",value:function(){var e=this;return t(a)(t(m).mark((function r(){return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e._deleted=!0;case 1:case"end":return t.stop()}}),r)})))()}},{key:"updateCurrentUser",value:function(e){var r=this;return t(a)(t(m).mark((function n(){var i;return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(i=e?(0,g.getModularInstance)(e):null)&&A(i.auth.config.apiKey===r.config.apiKey,r,"invalid-user-token"),t.abrupt("return",r._updateCurrentUser(i&&i._clone(r)));case 3:case"end":return t.stop()}}),n)})))()}},{key:"_updateCurrentUser",value:function(e){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this;return t(a)(t(m).mark((function i(){return t(m).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(!n._deleted){i.next=2;break}return i.abrupt("return");case 2:if(e&&A(n.tenantId===e.tenantId,n,"tenant-id-mismatch"),r){i.next=6;break}return i.next=6,n.beforeStateQueue.runMiddleware(e);case 6:return i.abrupt("return",n.queue(t(a)(t(m).mark((function r(){return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.directlySetCurrentUser(e);case 2:n.notifyAuthListeners();case 3:case"end":return t.stop()}}),r)})))));case 7:case"end":return i.stop()}}),i)})))()}},{key:"signOut",value:function(){var e=this;return t(a)(t(m).mark((function r(){return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.beforeStateQueue.runMiddleware(null);case 2:if(!e.redirectPersistenceManager&&!e._popupRedirectResolver){t.next=5;break}return t.next=5,e._setRedirectUser(null);case 5:return t.abrupt("return",e._updateCurrentUser(null,!0));case 6:case"end":return t.stop()}}),r)})))()}},{key:"setPersistence",value:function(e){var r=this;return this.queue(t(a)(t(m).mark((function n(){return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.assertedPersistence.setPersistence(M(e));case 2:case"end":return t.stop()}}),n)}))))}},{key:"_getPersistence",value:function(){return this.assertedPersistence.persistence.type}},{key:"_updateErrorMap",value:function(e){this._errorFactory=new(0,g.ErrorFactory)("auth","Firebase",e())}},{key:"onAuthStateChanged",value:function(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}},{key:"beforeAuthStateChanged",value:function(e,t){return this.beforeStateQueue.pushCallback(e,t)}},{key:"onIdTokenChanged",value:function(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}},{key:"toJSON",value:function(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}},{key:"_setRedirectUser",value:function(e,r){var n=this;return t(a)(t(m).mark((function i(){var o;return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.getOrInitRedirectPersistenceManager(r);case 2:return o=t.sent,t.abrupt("return",null===e?o.removeCurrentUser():o.setCurrentUser(e));case 4:case"end":return t.stop()}}),i)})))()}},{key:"getOrInitRedirectPersistenceManager",value:function(e){var r=this;return t(a)(t(m).mark((function n(){var i;return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r.redirectPersistenceManager){t.next=9;break}return A(i=e&&M(e)||r._popupRedirectResolver,r,"argument-error"),t.next=5,Oe.create(r,[M(i._redirectPersistence)],"redirectUser");case 5:return r.redirectPersistenceManager=t.sent,t.next=8,r.redirectPersistenceManager.getCurrentUser();case 8:r.redirectUser=t.sent;case 9:return t.abrupt("return",r.redirectPersistenceManager);case 10:case"end":return t.stop()}}),n)})))()}},{key:"_redirectUserForId",value:function(e){var r=this;return t(a)(t(m).mark((function n(){var i,o;return t(m).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!r._isInitialized){n.next=4;break}return n.next=4,r.queue(t(a)(t(m).mark((function e(){return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)}))));case 4:if((null===(i=r._currentUser)||void 0===i?void 0:i._redirectEventId)!==e){n.next=6;break}return n.abrupt("return",r._currentUser);case 6:if((null===(o=r.redirectUser)||void 0===o?void 0:o._redirectEventId)!==e){n.next=8;break}return n.abrupt("return",r.redirectUser);case 8:return n.abrupt("return",null);case 9:case"end":return n.stop()}}),n)})))()}},{key:"_persistUserIfCurrent",value:function(e){var r=this;return t(a)(t(m).mark((function n(){return t(m).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e!==r.currentUser){n.next=2;break}return n.abrupt("return",r.queue(t(a)(t(m).mark((function n(){return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",r.directlySetCurrentUser(e));case 1:case"end":return t.stop()}}),n)})))));case 2:case"end":return n.stop()}}),n)})))()}},{key:"_notifyListenersIfCurrent",value:function(e){e===this.currentUser&&this.notifyAuthListeners()}},{key:"_key",value:function(){return"".concat(this.config.authDomain,":").concat(this.config.apiKey,":").concat(this.name)}},{key:"_startProactiveRefresh",value:function(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}},{key:"_stopProactiveRefresh",value:function(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}},{key:"_currentUser",get:function(){return this.currentUser}},{key:"notifyAuthListeners",value:function(){var e,t;if(this._isInitialized){this.idTokenSubscription.next(this.currentUser);var r=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}}},{key:"registerStateListener",value:function(e,t,r,n){var i=this;if(this._deleted)return function(){};var o="function"==typeof t?t:t.next.bind(t),a=this._isInitialized?Promise.resolve():this._initializationPromise;return A(a,this,"internal-error"),a.then((function(){return o(i.currentUser)})),"function"==typeof t?e.addObserver(t,r,n):e.addObserver(t)}},{key:"directlySetCurrentUser",value:function(e){var r=this;return t(a)(t(m).mark((function n(){return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r.currentUser&&r.currentUser!==e&&(r._currentUser._stopProactiveRefresh(),e&&r.isProactiveRefreshEnabled&&e._startProactiveRefresh()),r.currentUser=e,!e){t.next=7;break}return t.next=5,r.assertedPersistence.setCurrentUser(e);case 5:t.next=9;break;case 7:return t.next=9,r.assertedPersistence.removeCurrentUser();case 9:case"end":return t.stop()}}),n)})))()}},{key:"queue",value:function(e){return this.operations=this.operations.then(e,e),this.operations}},{key:"assertedPersistence",get:function(){return A(this.persistenceManager,this,"internal-error"),this.persistenceManager}},{key:"_logFramework",value:function(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=qe(this.config.clientPlatform,this._getFrameworks()))}},{key:"_getFrameworks",value:function(){return this.frameworks}},{key:"_getAdditionalHeaders",value:function(){var e=this;return t(a)(t(m).mark((function r(){var n,i,o;return t(m).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return i=t(c)({},"X-Client-Version",e.clientVersion),e.app.options.appId&&(i["X-Firebase-gmpid"]=e.app.options.appId),r.next=5,null===(n=e.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===n?void 0:n.getHeartbeatsHeader();case 5:return(o=r.sent)&&(i["X-Firebase-Client"]=o),r.abrupt("return",i);case 8:case"end":return r.stop()}}),r)})))()}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function He(e){return(0,g.getModularInstance)(e)}var ze=function(){"use strict";function e(r){var n=this;t(s)(this,e),this.auth=r,this.observer=null,this.addObserver=(0,g.createSubscribe)((function(e){return n.observer=e}))}return t(u)(e,[{key:"next",get:function(){return A(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Je=function(){"use strict";function e(r,n){t(s)(this,e),this.providerId=r,this.signInMethod=n}return t(u)(e,[{key:"toJSON",value:function(){return L("not implemented")}},{key:"_getIdTokenResponse",value:function(e){return L("not implemented")}},{key:"_linkToIdToken",value:function(e,t){return L("not implemented")}},{key:"_getReauthenticationResolver",value:function(e){return L("not implemented")}}]),e}();function Ke(e,t){return Ge.apply(this,arguments)}function Ge(){return(Ge=t(a)(t(m).mark((function e(r,n){return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",K(r,"POST","/v1/accounts:update",n));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Ye(e,t){return Xe.apply(this,arguments)}function Xe(){return(Xe=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(a)(t(m).mark((function e(r,n){return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Z(r,"POST","/v1/accounts:signInWithPassword",J(r,n)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Ze(e,t){return Qe.apply(this,arguments)}function Qe(){return(Qe=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(a)(t(m).mark((function e(r,n){return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Z(r,"POST","/v1/accounts:signInWithEmailLink",J(r,n)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function $e(e,t){return et.apply(this,arguments)}function et(){return(et=t(a)(t(m).mark((function e(r,n){return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Z(r,"POST","/v1/accounts:signInWithEmailLink",J(r,n)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var tt=function(e){"use strict";t(d)(n,e);var r=t(v)(n);function n(e,i,o){var a,u=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return t(s)(this,n),(a=r.call(this,"password",o))._email=e,a._password=i,a._tenantId=u,a}return t(u)(n,[{key:"toJSON",value:function(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}},{key:"_getIdTokenResponse",value:function(e){var r=this;return t(a)(t(m).mark((function n(){return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:t.t0=r.signInMethod,t.next="password"===t.t0?3:"emailLink"===t.t0?4:5;break;case 3:return t.abrupt("return",Ye(e,{returnSecureToken:!0,email:r._email,password:r._password}));case 4:return t.abrupt("return",Ze(e,{email:r._email,oobCode:r._password}));case 5:T(e,"internal-error");case 6:case"end":return t.stop()}}),n)})))()}},{key:"_linkToIdToken",value:function(e,r){var n=this;return t(a)(t(m).mark((function i(){return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:t.t0=n.signInMethod,t.next="password"===t.t0?3:"emailLink"===t.t0?4:5;break;case 3:return t.abrupt("return",Ke(e,{idToken:r,returnSecureToken:!0,email:n._email,password:n._password}));case 4:return t.abrupt("return",$e(e,{idToken:r,email:n._email,oobCode:n._password}));case 5:T(e,"internal-error");case 6:case"end":return t.stop()}}),i)})))()}},{key:"_getReauthenticationResolver",value:function(e){return this._getIdTokenResponse(e)}}],[{key:"_fromEmailAndPassword",value:function(e,t){return new n(e,t,"password")}},{key:"_fromEmailAndCode",value:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return new n(e,t,"emailLink",r)}},{key:"fromJSON",value:function(e){var t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}}]),n}(Je);function rt(e,t){return nt.apply(this,arguments)}function nt(){return(nt=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(a)(t(m).mark((function e(r,n){return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Z(r,"POST","/v1/accounts:signInWithIdp",J(r,n)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var it=function(e){"use strict";t(d)(n,e);var r=t(v)(n);function n(){var e;return t(s)(this,n),(e=r.call.apply(r,[this].concat(Array.prototype.slice.call(arguments)))).pendingToken=null,e}return t(u)(n,[{key:"toJSON",value:function(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}},{key:"_getIdTokenResponse",value:function(e){return rt(e,this.buildRequest())}},{key:"_linkToIdToken",value:function(e,t){var r=this.buildRequest();return r.idToken=t,rt(e,r)}},{key:"_getReauthenticationResolver",value:function(e){var t=this.buildRequest();return t.autoCreate=!1,rt(e,t)}},{key:"buildRequest",value:function(){var e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{var t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=(0,g.querystring)(t)}return e}}],[{key:"_fromParams",value:function(e){var t=new n(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):T("argument-error"),t}},{key:"fromJSON",value:function(e){var t="string"==typeof e?JSON.parse(e):e,r=t.providerId,i=t.signInMethod,o=(0,b.__rest)(t,["providerId","signInMethod"]);if(!r||!i)return null;var a=new n(r,i);return a.idToken=o.idToken||void 0,a.accessToken=o.accessToken||void 0,a.secret=o.secret,a.nonce=o.nonce,a.pendingToken=o.pendingToken||null,a}}]),n}(Je);function ot(e,t){return at.apply(this,arguments)}function at(){return(at=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(a)(t(m).mark((function e(r,n){return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",K(r,"POST","/v1/accounts:sendVerificationCode",J(r,n)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function st(){return(st=t(a)(t(m).mark((function e(r,n){return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Z(r,"POST","/v1/accounts:signInWithPhoneNumber",J(r,n)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ut(){return(ut=t(a)(t(m).mark((function e(r,n){var i;return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Z(r,"POST","/v1/accounts:signInWithPhoneNumber",J(r,n));case 2:if(!(i=e.sent).temporaryProof){e.next=5;break}throw te(r,"account-exists-with-different-credential",i);case 5:return e.abrupt("return",i);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var ct=t(c)({},"USER_NOT_FOUND","user-not-found");function lt(){return(lt=t(a)(t(m).mark((function e(r,n){var i;return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=Object.assign(Object.assign({},n),{operation:"REAUTH"}),e.abrupt("return",Z(r,"POST","/v1/accounts:signInWithPhoneNumber",J(r,i),ct));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ft=function(e){"use strict";t(d)(n,e);var r=t(v)(n);function n(e){var i;return t(s)(this,n),(i=r.call(this,"phone","phone")).params=e,i}return t(u)(n,[{key:"_getIdTokenResponse",value:function(e){return function(e,t){return st.apply(this,arguments)}(e,this._makeVerificationRequest())}},{key:"_linkToIdToken",value:function(e,t){return function(e,t){return ut.apply(this,arguments)}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}},{key:"_getReauthenticationResolver",value:function(e){return function(e,t){return lt.apply(this,arguments)}(e,this._makeVerificationRequest())}},{key:"_makeVerificationRequest",value:function(){var e=this.params,t=e.temporaryProof,r=e.phoneNumber,n=e.verificationId,i=e.verificationCode;return t&&r?{temporaryProof:t,phoneNumber:r}:{sessionInfo:n,code:i}}},{key:"toJSON",value:function(){var e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}}],[{key:"_fromVerification",value:function(e,t){return new n({verificationId:e,verificationCode:t})}},{key:"_fromTokenResponse",value:function(e,t){return new n({phoneNumber:e,temporaryProof:t})}},{key:"fromJSON",value:function(e){"string"==typeof e&&(e=JSON.parse(e));var t=e.verificationId,r=e.verificationCode,i=e.phoneNumber,o=e.temporaryProof;return r||t||i||o?new n({verificationId:t,verificationCode:r,phoneNumber:i,temporaryProof:o}):null}}]),n}(Je);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var dt=function(){"use strict";function e(r){var n,i,o,a,u,c;t(s)(this,e);var l=(0,g.querystringDecode)((0,g.extractQuerystring)(r)),f=null!==(n=l.apiKey)&&void 0!==n?n:null,d=null!==(i=l.oobCode)&&void 0!==i?i:null,h=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(o=l.mode)&&void 0!==o?o:null);A(f&&d&&h,"argument-error"),this.apiKey=f,this.operation=h,this.code=d,this.continueUrl=null!==(a=l.continueUrl)&&void 0!==a?a:null,this.languageCode=null!==(u=l.languageCode)&&void 0!==u?u:null,this.tenantId=null!==(c=l.tenantId)&&void 0!==c?c:null}return t(u)(e,null,[{key:"parseLink",value:function(t){var r=function(e){var t=(0,g.querystringDecode)((0,g.extractQuerystring)(e)).link,r=t?(0,g.querystringDecode)((0,g.extractQuerystring)(t)).deep_link_id:null,n=(0,g.querystringDecode)((0,g.extractQuerystring)(e)).deep_link_id;return(n?(0,g.querystringDecode)((0,g.extractQuerystring)(n)).link:null)||n||r||t||e}(t);try{return new e(r)}catch(e){return null}}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ht=function(){"use strict";function e(){t(s)(this,e),this.providerId=e.PROVIDER_ID}return t(u)(e,null,[{key:"credential",value:function(e,t){return tt._fromEmailAndPassword(e,t)}},{key:"credentialWithLink",value:function(e,t){var r=dt.parseLink(t);return A(r,"argument-error"),tt._fromEmailAndCode(e,r.code,r.tenantId)}}]),e}();ht.PROVIDER_ID="password",ht.EMAIL_PASSWORD_SIGN_IN_METHOD="password",ht.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var pt=function(){"use strict";function e(r){t(s)(this,e),this.providerId=r,this.defaultLanguageCode=null,this.customParameters={}}return t(u)(e,[{key:"setDefaultLanguage",value:function(e){this.defaultLanguageCode=e}},{key:"setCustomParameters",value:function(e){return this.customParameters=e,this}},{key:"getCustomParameters",value:function(){return this.customParameters}}]),e}(),vt=function(e){"use strict";t(d)(n,e);var r=t(v)(n);function n(){var e;return t(s)(this,n),(e=r.call.apply(r,[this].concat(Array.prototype.slice.call(arguments)))).scopes=[],e}return t(u)(n,[{key:"addScope",value:function(e){return this.scopes.includes(e)||this.scopes.push(e),this}},{key:"getScopes",value:function(){return t(p)(this.scopes)}}]),n}(pt),mt=function(e){"use strict";t(d)(n,e);var r=t(v)(n);function n(){return t(s)(this,n),r.call(this,"facebook.com")}return t(u)(n,null,[{key:"credential",value:function(e){return it._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}},{key:"credentialFromResult",value:function(e){return n.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return n.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return n.credential(t.oauthAccessToken)}catch(e){return null}}}]),n}(vt);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */mt.FACEBOOK_SIGN_IN_METHOD="facebook.com",mt.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var gt=function(e){"use strict";t(d)(n,e);var r=t(v)(n);function n(){var e;return t(s)(this,n),(e=r.call(this,"google.com")).addScope("profile"),e}return t(u)(n,null,[{key:"credential",value:function(e,t){return it._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}},{key:"credentialFromResult",value:function(e){return n.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return n.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var r=t.oauthIdToken,i=t.oauthAccessToken;if(!r&&!i)return null;try{return n.credential(r,i)}catch(e){return null}}}]),n}(vt);gt.GOOGLE_SIGN_IN_METHOD="google.com",gt.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var yt=function(e){"use strict";t(d)(n,e);var r=t(v)(n);function n(){return t(s)(this,n),r.call(this,"github.com")}return t(u)(n,null,[{key:"credential",value:function(e){return it._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.GITHUB_SIGN_IN_METHOD,accessToken:e})}},{key:"credentialFromResult",value:function(e){return n.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return n.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return n.credential(t.oauthAccessToken)}catch(e){return null}}}]),n}(vt);yt.GITHUB_SIGN_IN_METHOD="github.com",yt.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var bt=function(e){"use strict";t(d)(n,e);var r=t(v)(n);function n(){return t(s)(this,n),r.call(this,"twitter.com")}return t(u)(n,null,[{key:"credential",value:function(e,t){return it._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}},{key:"credentialFromResult",value:function(e){return n.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return n.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var r=t.oauthAccessToken,i=t.oauthTokenSecret;if(!r||!i)return null;try{return n.credential(r,i)}catch(e){return null}}}]),n}(vt);function kt(e,t){return wt.apply(this,arguments)}function wt(){return(wt=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(a)(t(m).mark((function e(r,n){return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Z(r,"POST","/v1/accounts:signUp",J(r,n)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */bt.TWITTER_SIGN_IN_METHOD="twitter.com",bt.PROVIDER_ID="twitter.com";var xt=function(){"use strict";function e(r){t(s)(this,e),this.user=r.user,this.providerId=r.providerId,this._tokenResponse=r._tokenResponse,this.operationType=r.operationType}return t(u)(e,null,[{key:"_fromIdTokenResponse",value:function(r,n,i){var o=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return t(a)(t(m).mark((function a(){var s,u,c;return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Ee._fromIdTokenResponse(r,i,o);case 2:return s=t.sent,u=_t(i),c=new e({user:s,providerId:u,_tokenResponse:i,operationType:n}),t.abrupt("return",c);case 6:case"end":return t.stop()}}),a)})))()}},{key:"_forOperation",value:function(r,n,i){return t(a)(t(m).mark((function o(){var a;return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r._updateTokensIfNecessary(i,!0);case 2:return a=_t(i),t.abrupt("return",new e({user:r,providerId:a,_tokenResponse:i,operationType:n}));case 4:case"end":return t.stop()}}),o)})))()}}]),e}();function _t(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Et=function(e){"use strict";t(d)(n,e);var r=t(v)(n);function n(e,o,a,u){var c,l;return t(s)(this,n),(c=r.call(this,o.code,o.message)).operationType=a,c.user=u,Object.setPrototypeOf(t(i)(c),n.prototype),c.customData={appName:e.name,tenantId:null!==(l=e.tenantId)&&void 0!==l?l:void 0,_serverResponse:o.customData._serverResponse,operationType:a},c}return t(u)(n,null,[{key:"_fromErrorAndOperation",value:function(e,t,r,i){return new n(e,t,r,i)}}]),n}(g.FirebaseError);function It(e,t,r,n){return("reauthenticate"===t?r._getReauthenticationResolver(e):r._getIdTokenResponse(e)).catch((function(r){if("auth/multi-factor-auth-required"===r.code)throw Et._fromErrorAndOperation(e,r,t,n);throw r}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function St(e,t){return Tt.apply(this,arguments)}function Tt(){return Tt=t(a)(t(m).mark((function e(r,n){var i,o,a=arguments;return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=a.length>2&&void 0!==a[2]&&a[2],e.t0=le,e.t1=r,e.t2=n,e.t3=r.auth,e.next=7,r.getIdToken();case 7:return e.t4=e.sent,e.t5=e.t2._linkToIdToken.call(e.t2,e.t3,e.t4),e.t6=i,e.next=12,(0,e.t0)(e.t1,e.t5,e.t6);case 12:return o=e.sent,e.abrupt("return",xt._forOperation(r,"link",o));case 14:case"end":return e.stop()}}),e)}))),Tt.apply(this,arguments)}function Ot(e,t){return Ct.apply(this,arguments)}function Ct(){return Ct=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(a)(t(m).mark((function e(r,n){var i,o,a,s,u,c,l,f=arguments;return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=f.length>2&&void 0!==f[2]&&f[2],a=r.auth,s="reauthenticate",e.prev=4,e.next=7,le(r,It(a,s,n,r),i);case 7:return A((u=e.sent).idToken,a,"internal-error"),A(c=ce(u.idToken),a,"internal-error"),l=c.sub,A(r.uid===l,a,"user-mismatch"),e.abrupt("return",xt._forOperation(r,s,u));case 16:throw e.prev=16,e.t0=e.catch(4),"auth/user-not-found"===(null===(o=e.t0)||void 0===o?void 0:o.code)&&T(a,"user-mismatch"),e.t0;case 20:case"end":return e.stop()}}),e,null,[[4,16]])}))),Ct.apply(this,arguments)}function Rt(e,t){return At.apply(this,arguments)}function At(){return At=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(a)(t(m).mark((function e(r,n){var i,o,a,s,u=arguments;return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=u.length>2&&void 0!==u[2]&&u[2],o="signIn",e.next=4,It(r,o,n);case 4:return a=e.sent,e.next=7,xt._fromIdTokenResponse(r,o,a);case 7:if(s=e.sent,i){e.next=11;break}return e.next=11,r._updateCurrentUser(s.user);case 11:return e.abrupt("return",s);case 12:case"end":return e.stop()}}),e)}))),At.apply(this,arguments)}function Lt(e,t){return Pt.apply(this,arguments)}function Pt(){return(Pt=t(a)(t(m).mark((function e(r,n){return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Rt(He(r),n));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Nt(e,t,r){return Mt.apply(this,arguments)}function Mt(){return(Mt=t(a)(t(m).mark((function e(r,n,i){var o,a,s;return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=He(r),e.next=3,kt(o,{returnSecureToken:!0,email:n,password:i});case 3:return a=e.sent,e.next=6,xt._fromIdTokenResponse(o,"signIn",a);case 6:return s=e.sent,e.next=9,o._updateCurrentUser(s.user);case 9:return e.abrupt("return",s);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Dt(e,t,r){return Lt((0,g.getModularInstance)(e),ht.credential(t,r))}function Ut(e,t,r,n){return(0,g.getModularInstance)(e).onAuthStateChanged(t,r,n)}function Bt(e){return(0,g.getModularInstance)(e).signOut()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function jt(e,t){return K(e,"POST","/v2/accounts/mfaEnrollment:start",J(e,t))}new WeakMap;var Ft="__sak",qt=function(){"use strict";function e(r,n){t(s)(this,e),this.storageRetriever=r,this.type=n}return t(u)(e,[{key:"_isAvailable",value:function(){try{return this.storage?(this.storage.setItem(Ft,"1"),this.storage.removeItem(Ft),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}},{key:"_set",value:function(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}},{key:"_get",value:function(e){var t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}},{key:"_remove",value:function(e){return this.storage.removeItem(e),Promise.resolve()}},{key:"storage",get:function(){return this.storageRetriever()}}]),e}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Wt=function(e){"use strict";t(d)(n,e);var r=t(v)(n);function n(){var e,i;return t(s)(this,n),(e=r.call(this,(function(){return window.localStorage}),"LOCAL")).boundEventHandler=function(t,r){return e.onStorageEvent(t,r)},e.listeners={},e.localCache={},e.pollTimer=null,e.safariLocalStorageNotSynced=(Ae(i=(0,g.getUA)())||Ue(i))&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),e.fallbackToPolling=Fe(),e._shouldAllowMigration=!0,e}return t(u)(n,[{key:"forAllChangedKeys",value:function(e){var t=!0,r=!1,n=void 0;try{for(var i,o=Object.keys(this.listeners)[Symbol.iterator]();!(t=(i=o.next()).done);t=!0){var a=i.value,s=this.storage.getItem(a),u=this.localCache[a];s!==u&&e(a,u,s)}}catch(e){r=!0,n=e}finally{try{t||null==o.return||o.return()}finally{if(r)throw n}}}},{key:"onStorageEvent",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this;if(e.key){var n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){var i=this.storage.getItem(n);if(e.newValue!==i)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}var o=function(){var e=r.storage.getItem(n);(t||r.localCache[n]!==e)&&r.notifyListeners(n,e)},a=this.storage.getItem(n);je()&&a!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,10):o()}else{var s=this;this.forAllChangedKeys((function(e,t,r){s.notifyListeners(e,r)}))}}},{key:"notifyListeners",value:function(e,t){this.localCache[e]=t;var r=this.listeners[e],n=!0,i=!1,o=void 0;if(r)try{for(var a,s=Array.from(r)[Symbol.iterator]();!(n=(a=s.next()).done);n=!0){(0,a.value)(t?JSON.parse(t):t)}}catch(e){i=!0,o=e}finally{try{n||null==s.return||s.return()}finally{if(i)throw o}}}},{key:"startPolling",value:function(){var e=this;this.stopPolling(),this.pollTimer=setInterval((function(){var t=e;e.forAllChangedKeys((function(e,r,n){t.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:r,newValue:n}),!0)}))}),1e3)}},{key:"stopPolling",value:function(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}},{key:"attachListener",value:function(){window.addEventListener("storage",this.boundEventHandler)}},{key:"detachListener",value:function(){window.removeEventListener("storage",this.boundEventHandler)}},{key:"_addListener",value:function(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}},{key:"_removeListener",value:function(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}},{key:"_set",value:function(e,r){var i=this,o=this;return t(a)(t(m).mark((function a(){return t(m).wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,t(l)(t(f)(n.prototype),"_set",i).call(o,e,r);case 2:o.localCache[e]=JSON.stringify(r);case 3:case"end":return a.stop()}}),a)})))()}},{key:"_get",value:function(e){var r=this,i=this;return t(a)(t(m).mark((function o(){var a;return t(m).wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,t(l)(t(f)(n.prototype),"_get",r).call(i,e);case 2:return a=o.sent,i.localCache[e]=JSON.stringify(a),o.abrupt("return",a);case 5:case"end":return o.stop()}}),o)})))()}},{key:"_remove",value:function(e){var r=this,i=this;return t(a)(t(m).mark((function o(){return t(m).wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,t(l)(t(f)(n.prototype),"_remove",r).call(i,e);case 2:delete i.localCache[e];case 3:case"end":return o.stop()}}),o)})))()}}]),n}(qt);Wt.type="LOCAL";var Vt=Wt,Ht=function(e){"use strict";t(d)(n,e);var r=t(v)(n);function n(){return t(s)(this,n),r.call(this,(function(){return window.sessionStorage}),"SESSION")}return t(u)(n,[{key:"_addListener",value:function(e,t){}},{key:"_removeListener",value:function(e,t){}}]),n}(qt);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ht.type="SESSION";var zt=Ht;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jt(e){return Promise.all(e.map((r=t(a)(t(m).mark((function e(r){var n;return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r;case 3:return n=e.sent,e.abrupt("return",{fulfilled:!0,value:n});case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",{fulfilled:!1,reason:e.t0});case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),function(e){return r.apply(this,arguments)})));var r}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Kt=function(){"use strict";function e(r){t(s)(this,e),this.eventTarget=r,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}return t(u)(e,[{key:"isListeningto",value:function(e){return this.eventTarget===e}},{key:"handleEvent",value:function(e){var r=this;return t(a)(t(m).mark((function n(){var i,o,s,u,c,l,f,d;return t(m).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(o=(i=e).data,s=o.eventId,u=o.eventType,c=o.data,null==(l=r.handlersMap[u])?void 0:l.size){n.next=5;break}return n.abrupt("return");case 5:return i.ports[0].postMessage({status:"ack",eventId:s,eventType:u}),f=Array.from(l).map(function(){var e=t(a)(t(m).mark((function e(r){return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",r(i.origin,c));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),n.next=9,Jt(f);case 9:d=n.sent,i.ports[0].postMessage({status:"done",eventId:s,eventType:u,response:d});case 11:case"end":return n.stop()}}),n)})))()}},{key:"_subscribe",value:function(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}},{key:"_unsubscribe",value:function(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}],[{key:"_getInstance",value:function(t){var r=this.receivers.find((function(e){return e.isListeningto(t)}));if(r)return r;var n=new e(t);return this.receivers.push(n),n}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Gt(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,r="",n=0;n<t;n++)r+=Math.floor(10*Math.random());return e+r}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Kt.receivers=[];var Yt=function(){"use strict";function e(r){t(s)(this,e),this.target=r,this.handlers=new Set}return t(u)(e,[{key:"removeMessageHandler",value:function(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}},{key:"_send",value:function(e,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:50,i=this;return t(a)(t(m).mark((function o(){var a,s,u;return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a="undefined"!=typeof MessageChannel?new MessageChannel:null){t.next=3;break}throw new Error("connection_unavailable");case 3:return t.abrupt("return",new Promise((function(t,o){var c=Gt("",20);a.port1.start();var l=setTimeout((function(){o(new Error("unsupported_event"))}),n);u={messageChannel:a,onMessage:function(e){var r=e;if(r.data.eventId===c)switch(r.data.status){case"ack":clearTimeout(l),s=setTimeout((function(){o(new Error("timeout"))}),3e3);break;case"done":clearTimeout(s),t(r.data.response);break;default:clearTimeout(l),clearTimeout(s),o(new Error("invalid_response"))}}},i.handlers.add(u),a.port1.addEventListener("message",u.onMessage),i.target.postMessage({eventType:e,eventId:c,data:r},[a.port2])})).finally((function(){u&&i.removeMessageHandler(u)})));case 6:case"end":return t.stop()}}),o)})))()}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xt(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Zt(){return void 0!==Xt().WorkerGlobalScope&&"function"==typeof Xt().importScripts}function Qt(){return $t.apply(this,arguments)}function $t(){return($t=t(a)(t(m).mark((function e(){var r;return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===navigator||void 0===navigator?void 0:navigator.serviceWorker){e.next=2;break}return e.abrupt("return",null);case 2:return e.prev=2,e.next=5,navigator.serviceWorker.ready;case 5:return r=e.sent,e.abrupt("return",r.active);case 9:return e.prev=9,e.t0=e.catch(2),e.abrupt("return",null);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var er="firebaseLocalStorageDb",tr="firebaseLocalStorage",rr="fbase_key",nr=function(){"use strict";function e(r){t(s)(this,e),this.request=r}return t(u)(e,[{key:"toPromise",value:function(){var e=this;return new Promise((function(t,r){var n=e;e.request.addEventListener("success",(function(){t(n.request.result)})),e.request.addEventListener("error",(function(){r(n.request.error)}))}))}}]),e}();function ir(e,t){return e.transaction([tr],t?"readwrite":"readonly").objectStore(tr)}function or(){var e=indexedDB.deleteDatabase(er);return new nr(e).toPromise()}function ar(){var e=indexedDB.open(er,1);return new Promise((function(r,n){e.addEventListener("error",(function(){n(e.error)})),e.addEventListener("upgradeneeded",(function(){var t=e.result;try{t.createObjectStore(tr,{keyPath:rr})}catch(e){n(e)}})),e.addEventListener("success",t(a)(t(m).mark((function n(){var i;return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if((i=e.result).objectStoreNames.contains(tr)){t.next=12;break}return i.close(),t.next=5,or();case 5:return t.t0=r,t.next=8,ar();case 8:t.t1=t.sent,(0,t.t0)(t.t1),t.next=13;break;case 12:r(i);case 13:case"end":return t.stop()}}),n)}))))}))}function sr(e,t,r){return ur.apply(this,arguments)}function ur(){return(ur=t(a)(t(m).mark((function e(r,n,i){var o,a;return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=ir(r,!0).put((o={},t(c)(o,rr,n),t(c)(o,"value",i),o)),e.abrupt("return",new nr(a).toPromise());case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function cr(e,t){return lr.apply(this,arguments)}function lr(){return(lr=t(a)(t(m).mark((function e(r,n){var i,o;return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=ir(r,!1).get(n),e.next=3,new nr(i).toPromise();case 3:return o=e.sent,e.abrupt("return",void 0===o?null:o.value);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function fr(e,t){var r=ir(e,!0).delete(t);return new nr(r).toPromise()}var dr=function(){"use strict";function e(){t(s)(this,e),this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((function(){}),(function(){}))}return t(u)(e,[{key:"_openDb",value:function(){var e=this;return t(a)(t(m).mark((function r(){return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.db){t.next=2;break}return t.abrupt("return",e.db);case 2:return t.next=4,ar();case 4:return e.db=t.sent,t.abrupt("return",e.db);case 6:case"end":return t.stop()}}),r)})))()}},{key:"_withRetries",value:function(e){var r=this;return t(a)(t(m).mark((function n(){var i,o;return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:i=0;case 1:return t.prev=2,t.next=5,r._openDb();case 5:return o=t.sent,t.next=8,e(o);case 8:return t.abrupt("return",t.sent);case 11:if(t.prev=11,t.t0=t.catch(2),!(i++>3)){t.next=15;break}throw t.t0;case 15:r.db&&(r.db.close(),r.db=void 0);case 16:t.next=1;break;case 18:case"end":return t.stop()}}),n,null,[[2,11]])})))()}},{key:"initializeServiceWorkerMessaging",value:function(){var e=this;return t(a)(t(m).mark((function r(){return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Zt()?e.initializeReceiver():e.initializeSender());case 1:case"end":return t.stop()}}),r)})))()}},{key:"initializeReceiver",value:function(){var e=this;return t(a)(t(m).mark((function r(){return t(m).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:e.receiver=Kt._getInstance(Zt()?self:null),e.receiver._subscribe("keyChanged",function(){var r=t(a)(t(m).mark((function r(n,i){var o;return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e._poll();case 2:return o=t.sent,t.abrupt("return",{keyProcessed:o.includes(i.key)});case 4:case"end":return t.stop()}}),r)})));return function(e,t){return r.apply(this,arguments)}}()),e.receiver._subscribe("ping",function(){var e=t(a)(t(m).mark((function e(r,n){return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",["keyChanged"]);case 1:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}());case 3:case"end":return r.stop()}}),r)})))()}},{key:"initializeSender",value:function(){var e=this;return t(a)(t(m).mark((function r(){var n,i,o;return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=3,Qt();case 3:if(e.activeServiceWorker=t.sent,e.activeServiceWorker){t.next=6;break}return t.abrupt("return");case 6:return e.sender=new Yt(e.activeServiceWorker),t.next=9,e.sender._send("ping",{},800);case 9:if(o=t.sent){t.next=12;break}return t.abrupt("return");case 12:(null===(n=o[0])||void 0===n?void 0:n.fulfilled)&&(null===(i=o[0])||void 0===i?void 0:i.value.includes("keyChanged"))&&(e.serviceWorkerReceiverAvailable=!0);case 13:case"end":return t.stop()}}),r)})))()}},{key:"notifyServiceWorker",value:function(e){var r=this;return t(a)(t(m).mark((function n(){return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r.sender&&r.activeServiceWorker&&(n=void 0,((null===(n=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===n?void 0:n.controller)||null)===r.activeServiceWorker)){t.next=2;break}return t.abrupt("return");case 2:return t.prev=2,t.next=5,r.sender._send("keyChanged",{key:e},r.serviceWorkerReceiverAvailable?800:50);case 5:t.next=9;break;case 7:t.prev=7,t.t0=t.catch(2);case 9:case"end":return t.stop()}var n}),n,null,[[2,7]])})))()}},{key:"_isAvailable",value:function(){return t(a)(t(m).mark((function e(){var r;return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,indexedDB){e.next=3;break}return e.abrupt("return",!1);case 3:return e.next=5,ar();case 5:return r=e.sent,e.next=8,sr(r,Ft,"1");case 8:return e.next=10,fr(r,Ft);case 10:return e.abrupt("return",!0);case 13:e.prev=13,e.t0=e.catch(0);case 15:return e.abrupt("return",!1);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})))()}},{key:"_withPendingWrite",value:function(e){var r=this;return t(a)(t(m).mark((function n(){return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r.pendingWrites++,t.prev=1,t.next=4,e();case 4:return t.prev=4,r.pendingWrites--,t.finish(4);case 7:case"end":return t.stop()}}),n,null,[[1,,4,7]])})))()}},{key:"_set",value:function(e,r){var n=this;return t(a)(t(m).mark((function i(){return t(m).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",n._withPendingWrite(t(a)(t(m).mark((function i(){return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n._withRetries((function(t){return sr(t,e,r)}));case 2:return n.localCache[e]=r,t.abrupt("return",n.notifyServiceWorker(e));case 4:case"end":return t.stop()}}),i)})))));case 1:case"end":return i.stop()}}),i)})))()}},{key:"_get",value:function(e){var r=this;return t(a)(t(m).mark((function n(){var i;return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r._withRetries((function(t){return cr(t,e)}));case 2:return i=t.sent,r.localCache[e]=i,t.abrupt("return",i);case 5:case"end":return t.stop()}}),n)})))()}},{key:"_remove",value:function(e){var r=this;return t(a)(t(m).mark((function n(){return t(m).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",r._withPendingWrite(t(a)(t(m).mark((function n(){return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r._withRetries((function(t){return fr(t,e)}));case 2:return delete r.localCache[e],t.abrupt("return",r.notifyServiceWorker(e));case 4:case"end":return t.stop()}}),n)})))));case 1:case"end":return n.stop()}}),n)})))()}},{key:"_poll",value:function(){var e=this;return t(a)(t(m).mark((function r(){var n,i,o,a,s,u,c,l,f,d,h,p,v,g,y,b,k;return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e._withRetries((function(e){var t=ir(e,!1).getAll();return new nr(t).toPromise()}));case 2:if(n=t.sent){t.next=5;break}return t.abrupt("return",[]);case 5:if(0===e.pendingWrites){t.next=7;break}return t.abrupt("return",[]);case 7:for(i=[],o=new Set,a=!0,s=!1,u=void 0,t.prev=10,c=n[Symbol.iterator]();!(a=(l=c.next()).done);a=!0)f=l.value,d=f.fbase_key,h=f.value,o.add(d),JSON.stringify(e.localCache[d])!==JSON.stringify(h)&&(e.notifyListeners(d,h),i.push(d));t.next=18;break;case 14:t.prev=14,t.t0=t.catch(10),s=!0,u=t.t0;case 18:t.prev=18,t.prev=19,a||null==c.return||c.return();case 21:if(t.prev=21,!s){t.next=24;break}throw u;case 24:return t.finish(21);case 25:return t.finish(18);case 26:for(p=!0,v=!1,g=void 0,t.prev=27,y=Object.keys(e.localCache)[Symbol.iterator]();!(p=(b=y.next()).done);p=!0)k=b.value,e.localCache[k]&&!o.has(k)&&(e.notifyListeners(k,null),i.push(k));t.next=35;break;case 31:t.prev=31,t.t1=t.catch(27),v=!0,g=t.t1;case 35:t.prev=35,t.prev=36,p||null==y.return||y.return();case 38:if(t.prev=38,!v){t.next=41;break}throw g;case 41:return t.finish(38);case 42:return t.finish(35);case 43:return t.abrupt("return",i);case 44:case"end":return t.stop()}}),r,null,[[10,14,18,26],[19,,21,25],[27,31,35,43],[36,,38,42]])})))()}},{key:"notifyListeners",value:function(e,t){this.localCache[e]=t;var r=this.listeners[e],n=!0,i=!1,o=void 0;if(r)try{for(var a,s=Array.from(r)[Symbol.iterator]();!(n=(a=s.next()).done);n=!0){(0,a.value)(t)}}catch(e){i=!0,o=e}finally{try{n||null==s.return||s.return()}finally{if(i)throw o}}}},{key:"startPolling",value:function(){this.stopPolling();var e=this;this.pollTimer=setInterval(t(a)(t(m).mark((function r(){return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e._poll());case 1:case"end":return t.stop()}}),r)}))),800)}},{key:"stopPolling",value:function(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}},{key:"_addListener",value:function(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}},{key:"_removeListener",value:function(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}]),e}();dr.type="LOCAL";var hr=dr;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pr(e,t){return K(e,"POST","/v2/accounts/mfaSignIn:start",J(e,t))}function vr(e){return new Promise((function(t,r){var n,i,o=document.createElement("script");o.setAttribute("src",e),o.onload=t,o.onerror=function(e){var t=O("internal-error");t.customData=e,r(t)},o.type="text/javascript",o.charset="UTF-8",(null!==(i=null===(n=document.getElementsByTagName("head"))||void 0===n?void 0:n[0])&&void 0!==i?i:document).appendChild(o)}))}function mr(e){return"__".concat(e).concat(Math.floor(1e6*Math.random()))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
mr("rcb"),new F(3e4,6e4);var gr="recaptcha";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yr(e,t,r){return br.apply(this,arguments)}function br(){return(br=t(a)(t(m).mark((function e(r,n,i){var o,a,s,u,c,l,f,d;return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,i.verify();case 3:if(a=e.sent,e.prev=4,A("string"==typeof a,r,"argument-error"),A(i.type===gr,r,"argument-error"),!("session"in(s="string"==typeof n?{phoneNumber:n}:n))){e.next=28;break}if(u=s.session,!("phoneNumber"in s)){e.next=19;break}return A("enroll"===u.type,r,"internal-error"),e.next=15,jt(r,{idToken:u.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:a}});case 15:return c=e.sent,e.abrupt("return",c.phoneSessionInfo.sessionInfo);case 19:return A("signin"===u.type,r,"internal-error"),A(l=(null===(o=s.multiFactorHint)||void 0===o?void 0:o.uid)||s.multiFactorUid,r,"missing-multi-factor-info"),e.next=24,pr(r,{mfaPendingCredential:u.credential,mfaEnrollmentId:l,phoneSignInInfo:{recaptchaToken:a}});case 24:return f=e.sent,e.abrupt("return",f.phoneResponseInfo.sessionInfo);case 26:e.next=32;break;case 28:return e.next=30,ot(r,{phoneNumber:s.phoneNumber,recaptchaToken:a});case 30:return d=e.sent.sessionInfo,e.abrupt("return",d);case 32:return e.prev=32,i._reset(),e.finish(32);case 35:case"end":return e.stop()}}),e,null,[[4,,32,35]])})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var kr=function(){"use strict";function e(r){t(s)(this,e),this.providerId=e.PROVIDER_ID,this.auth=He(r)}return t(u)(e,[{key:"verifyPhoneNumber",value:function(e,t){return yr(this.auth,e,(0,g.getModularInstance)(t))}}],[{key:"credential",value:function(e,t){return ft._fromVerification(e,t)}},{key:"credentialFromResult",value:function(t){var r=t;return e.credentialFromTaggedObject(r)}},{key:"credentialFromError",value:function(t){return e.credentialFromTaggedObject(t.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var r=t.phoneNumber,n=t.temporaryProof;return r&&n?ft._fromTokenResponse(r,n):null}}]),e}();
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function wr(e,t){return t?M(t):(A(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */kr.PROVIDER_ID="phone",kr.PHONE_SIGN_IN_METHOD="phone";var xr=function(e){"use strict";t(d)(n,e);var r=t(v)(n);function n(e){var i;return t(s)(this,n),(i=r.call(this,"custom","custom")).params=e,i}return t(u)(n,[{key:"_getIdTokenResponse",value:function(e){return rt(e,this._buildIdpRequest())}},{key:"_linkToIdToken",value:function(e,t){return rt(e,this._buildIdpRequest(t))}},{key:"_getReauthenticationResolver",value:function(e){return rt(e,this._buildIdpRequest())}},{key:"_buildIdpRequest",value:function(e){var t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}]),n}(Je);function _r(e){return Rt(e.auth,new xr(e),e.bypassAuthState)}function Er(e){var t=e.auth,r=e.user;return A(r,t,"internal-error"),Ot(r,new xr(e),e.bypassAuthState)}function Ir(e){return Sr.apply(this,arguments)}function Sr(){return(Sr=t(a)(t(m).mark((function e(r){var n,i;return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.auth,A(i=r.user,n,"internal-error"),e.abrupt("return",St(i,new xr(r),r.bypassAuthState));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Tr=function(){"use strict";function e(r,n,i,o){var a=arguments.length>4&&void 0!==arguments[4]&&arguments[4];t(s)(this,e),this.auth=r,this.resolver=i,this.user=o,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}return t(u)(e,[{key:"execute",value:function(){var e,r=this;return new Promise((e=t(a)(t(m).mark((function e(n,i){return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.pendingPromise={resolve:n,reject:i},e.prev=1,e.next=4,r.resolver._initialize(r.auth);case 4:return r.eventManager=e.sent,e.next=7,r.onExecution();case 7:r.eventManager.registerConsumer(r),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),r.reject(e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,10]])}))),function(t,r){return e.apply(this,arguments)}))}},{key:"onAuthEvent",value:function(e){var r=this;return t(a)(t(m).mark((function n(){var i,o,a,s,u,c,l;return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(i=e.urlResponse,o=e.sessionId,a=e.postBody,s=e.tenantId,u=e.error,c=e.type,!u){t.next=4;break}return r.reject(u),t.abrupt("return");case 4:return l={auth:r.auth,requestUri:i,sessionId:o,tenantId:s||void 0,postBody:a||void 0,user:r.user,bypassAuthState:r.bypassAuthState},t.prev=5,t.t0=r,t.next=9,r.getIdpTask(c)(l);case 9:t.t1=t.sent,t.t0.resolve.call(t.t0,t.t1),t.next=16;break;case 13:t.prev=13,t.t2=t.catch(5),r.reject(t.t2);case 16:case"end":return t.stop()}}),n,null,[[5,13]])})))()}},{key:"onError",value:function(e){this.reject(e)}},{key:"getIdpTask",value:function(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return _r;case"linkViaPopup":case"linkViaRedirect":return Ir;case"reauthViaPopup":case"reauthViaRedirect":return Er;default:T(this.auth,"internal-error")}}},{key:"resolve",value:function(e){P(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}},{key:"reject",value:function(e){P(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}},{key:"unregisterAndCleanUp",value:function(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}]),e}(),Or=new F(2e3,1e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Cr=function(e){"use strict";t(d)(n,e);var r=t(v)(n);function n(e,o,a,u,c){var l;return t(s)(this,n),(l=r.call(this,e,o,u,c)).provider=a,l.authWindow=null,l.pollId=null,n.currentPopupAction&&n.currentPopupAction.cancel(),n.currentPopupAction=t(i)(l),l}return t(u)(n,[{key:"executeNotNull",value:function(){var e=this;return t(a)(t(m).mark((function r(){var n;return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.execute();case 2:return A(n=t.sent,e.auth,"internal-error"),t.abrupt("return",n);case 5:case"end":return t.stop()}}),r)})))()}},{key:"onExecution",value:function(){var e=this;return t(a)(t(m).mark((function r(){var n;return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return P(1===e.filter.length,"Popup operations only handle one event"),n=Gt(),t.next=4,e.resolver._openPopup(e.auth,e.provider,e.filter[0],n);case 4:e.authWindow=t.sent,e.authWindow.associatedEvent=n,e.resolver._originValidation(e.auth).catch((function(t){e.reject(t)})),e.resolver._isIframeWebStorageSupported(e.auth,(function(t){t||e.reject(O(e.auth,"web-storage-unsupported"))})),e.pollUserCancellation();case 9:case"end":return t.stop()}}),r)})))()}},{key:"eventId",get:function(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}},{key:"cancel",value:function(){this.reject(O(this.auth,"cancelled-popup-request"))}},{key:"cleanUp",value:function(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,n.currentPopupAction=null}},{key:"pollUserCancellation",value:function(){var e=this,t=function(){var r,n;if(null===(n=null===(r=e.authWindow)||void 0===r?void 0:r.window)||void 0===n?void 0:n.closed){var i=e;e.pollId=window.setTimeout((function(){i.pollId=null,i.reject(O(i.auth,"popup-closed-by-user"))}),2e3)}else e.pollId=window.setTimeout(t,Or.get())};t()}}]),n}(Tr);Cr.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Rr=new Map,Ar=function(e){"use strict";t(d)(n,e);var r=t(v)(n);function n(e,i){var o,a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return t(s)(this,n),(o=r.call(this,e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],i,void 0,a)).eventId=null,o}return t(u)(n,[{key:"execute",value:function(){var e=this,r=this;return t(a)(t(m).mark((function i(){var o,a;return t(m).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(o=Rr.get(r.auth._key())){i.next=21;break}return i.prev=2,i.next=5,Lr(r.resolver,r.auth);case 5:if(!i.sent){i.next=12;break}return i.next=9,t(l)(t(f)(n.prototype),"execute",e).call(r);case 9:i.t0=i.sent,i.next=13;break;case 12:i.t0=null;case 13:a=i.t0,o=function(){return Promise.resolve(a)},i.next=20;break;case 17:i.prev=17,i.t1=i.catch(2),o=function(){return Promise.reject(i.t1)};case 20:Rr.set(r.auth._key(),o);case 21:return r.bypassAuthState||Rr.set(r.auth._key(),(function(){return Promise.resolve(null)})),i.abrupt("return",o());case 23:case"end":return i.stop()}}),i,null,[[2,17]])})))()}},{key:"onAuthEvent",value:function(e){var r=this,i=this,o=function(){return t(l)(t(f)(n.prototype),"onAuthEvent",r)};return t(a)(t(m).mark((function r(){var n;return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("signInViaRedirect"!==e.type){t.next=4;break}return t.abrupt("return",o().call(i,e));case 4:if("unknown"!==e.type){t.next=7;break}return i.resolve(null),t.abrupt("return");case 7:if(!e.eventId){t.next=17;break}return t.next=10,i.auth._redirectUserForId(e.eventId);case 10:if(!(n=t.sent)){t.next=16;break}return i.user=n,t.abrupt("return",o().call(i,e));case 16:i.resolve(null);case 17:case"end":return t.stop()}}),r)})))()}},{key:"onExecution",value:function(){return t(a)(t(m).mark((function e(){return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()}},{key:"cleanUp",value:function(){}}]),n}(Tr);function Lr(e,t){return Pr.apply(this,arguments)}function Pr(){return(Pr=t(a)(t(m).mark((function e(r,n){var i,o,a;return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=Dr(n),o=Mr(r),e.next=4,o._isAvailable();case 4:if(e.sent){e.next=6;break}return e.abrupt("return",!1);case 6:return e.next=8,o._get(i);case 8:return e.t0=e.sent,a="true"===e.t0,e.next=12,o._remove(i);case 12:return e.abrupt("return",a);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Nr(e,t){Rr.set(e._key(),t)}function Mr(e){return M(e._redirectPersistence)}function Dr(e){return Te("pendingRedirect",e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ur(e,t){return Br.apply(this,arguments)}function Br(){return Br=t(a)(t(m).mark((function e(r,n){var i,o,a,s,u,c=arguments;return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=c.length>2&&void 0!==c[2]&&c[2],o=He(r),a=wr(o,n),s=new Ar(o,a,i),e.next=6,s.execute();case 6:if(!(u=e.sent)||i){e.next=13;break}return delete u.user._redirectEventId,e.next=11,o._persistUserIfCurrent(u.user);case 11:return e.next=13,o._setRedirectUser(null,n);case 13:return e.abrupt("return",u);case 14:case"end":return e.stop()}}),e)}))),Br.apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var jr=function(){"use strict";function e(r){t(s)(this,e),this.auth=r,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}return t(u)(e,[{key:"registerConsumer",value:function(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}},{key:"unregisterConsumer",value:function(e){this.consumers.delete(e)}},{key:"onEvent",value:function(e){var t=this;if(this.hasEventBeenHandled(e))return!1;var r=!1;return this.consumers.forEach((function(n){t.isEventForConsumer(e,n)&&(r=!0,t.sendToConsumer(e,n),t.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return qr(e);default:return!1}}(e)||(this.hasHandledPotentialRedirect=!0,r||(this.queuedRedirectEvent=e,r=!0)),r}},{key:"sendToConsumer",value:function(e,t){var r;if(e.error&&!qr(e)){var n=(null===(r=e.error.code)||void 0===r?void 0:r.split("auth/")[1])||"internal-error";t.onError(O(this.auth,n))}else t.onAuthEvent(e)}},{key:"isEventForConsumer",value:function(e,t){var r=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}},{key:"hasEventBeenHandled",value:function(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(Fr(e))}},{key:"saveEventToCache",value:function(e){this.cachedEventUids.add(Fr(e)),this.lastProcessedEventTime=Date.now()}}]),e}();function Fr(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((function(e){return e})).join("-")}function qr(e){var t=e.type,r=e.error;return"unknown"===t&&"auth/no-auth-event"===(null==r?void 0:r.code)}function Wr(e){return Vr.apply(this,arguments)}function Vr(){return Vr=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(a)(t(m).mark((function e(r){var n,i=arguments;return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=i.length>1&&void 0!==i[1]?i[1]:{},e.abrupt("return",K(r,"GET","/v1/projects",n));case 2:case"end":return e.stop()}}),e)}))),Vr.apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Hr=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,zr=/^https?/;function Jr(){return(Jr=t(a)(t(m).mark((function e(r){var n,i,o,a,s,u,c;return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!r.config.emulator){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,Wr(r);case 4:n=e.sent.authorizedDomains,i=!0,o=!1,a=void 0,e.prev=6,s=n[Symbol.iterator]();case 8:if(i=(u=s.next()).done){e.next=20;break}if(c=u.value,e.prev=10,!Kr(c)){e.next=13;break}return e.abrupt("return");case 13:e.next=17;break;case 15:e.prev=15,e.t0=e.catch(10);case 17:i=!0,e.next=8;break;case 20:e.next=26;break;case 22:e.prev=22,e.t1=e.catch(6),o=!0,a=e.t1;case 26:e.prev=26,e.prev=27,i||null==s.return||s.return();case 29:if(e.prev=29,!o){e.next=32;break}throw a;case 32:return e.finish(29);case 33:return e.finish(26);case 34:T(r,"unauthorized-domain");case 35:case"end":return e.stop()}}),e,null,[[6,22,26,34],[10,15],[27,,29,33]])})))).apply(this,arguments)}function Kr(e){var t=U(),r=new URL(t),n=r.protocol,i=r.hostname;if(e.startsWith("chrome-extension://")){var o=new URL(e);return""===o.hostname&&""===i?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&o.hostname===i}if(!zr.test(n))return!1;if(Hr.test(e))return i===e;var a=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+a+"|"+a+")$","i").test(i)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Gr=new F(3e4,6e4);function Yr(){var e=Xt().___jsl,r=!0,n=!1,i=void 0;if(null==e?void 0:e.H)try{for(var o,a=Object.keys(e.H)[Symbol.iterator]();!(r=(o=a.next()).done);r=!0){var s=o.value;if(e.H[s].r=e.H[s].r||[],e.H[s].L=e.H[s].L||[],e.H[s].r=t(p)(e.H[s].L),e.CP)for(var u=0;u<e.CP.length;u++)e.CP[u]=null}}catch(e){n=!0,i=e}finally{try{r||null==a.return||a.return()}finally{if(n)throw i}}}var Xr=null;function Zr(e){return Xr=Xr||function(e){return new Promise((function(t,r){var n,i,o;function a(){Yr(),gapi.load("gapi.iframes",{callback:function(){t(gapi.iframes.getContext())},ontimeout:function(){Yr(),r(O(e,"network-request-failed"))},timeout:Gr.get()})}if(null===(i=null===(n=Xt().gapi)||void 0===n?void 0:n.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(o=Xt().gapi)||void 0===o?void 0:o.load)){var s=mr("iframefcb");return Xt()[s]=function(){gapi.load?a():r(O(e,"network-request-failed"))},vr("https://apis.google.com/js/api.js?onload=".concat(s)).catch((function(e){return r(e)}))}a()}})).catch((function(e){throw Xr=null,e}))}(e),Xr}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Qr=new F(5e3,15e3),$r={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},en=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function tn(e){var t=e.config;A(t.authDomain,e,"auth-domain-config-required");var r=t.emulator?q(t,"emulator/auth/iframe"):"https://".concat(e.config.authDomain,"/").concat("__/auth/iframe"),n={apiKey:t.apiKey,appName:e.name,v:y.SDK_VERSION},i=en.get(e.config.apiHost);i&&(n.eid=i);var o=e._getFrameworks();return o.length&&(n.fw=o.join(",")),"".concat(r,"?").concat((0,g.querystring)(n).slice(1))}function rn(e){return nn.apply(this,arguments)}function nn(){return nn=t(a)(t(m).mark((function e(r){var n,i;return t(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Zr(r);case 2:return n=e.sent,A(i=Xt().gapi,r,"internal-error"),e.abrupt("return",n.open({where:document.body,url:tn(r),messageHandlersFilter:i.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:$r,dontclear:!0},(function(e){return new Promise((n=t(a)(t(m).mark((function n(i,o){var a,s,u;return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return u=function(){Xt().clearTimeout(s),i(e)},t.next=3,e.restyle({setHideOnLeave:!1});case 3:a=O(r,"network-request-failed"),s=Xt().setTimeout((function(){o(a)}),Qr.get()),e.ping(u).then(u,(function(){o(a)}));case 7:case"end":return t.stop()}}),n)}))),function(e,t){return n.apply(this,arguments)}));var n})));case 6:case"end":return e.stop()}}),e)}))),nn.apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var on={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},an="_blank",sn="http://localhost",un=function(){"use strict";function e(r){t(s)(this,e),this.window=r,this.associatedEvent=null}return t(u)(e,[{key:"close",value:function(){if(this.window)try{this.window.close()}catch(e){}}}]),e}();function cn(e,r,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:500,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:600,a=Math.max((window.screen.availHeight-o)/2,0).toString(),s=Math.max((window.screen.availWidth-i)/2,0).toString(),u="",c=Object.assign(Object.assign({},on),{width:i.toString(),height:o.toString(),top:a,left:s}),l=(0,g.getUA)().toLowerCase();n&&(u=Le(l)?an:n),Re(l)&&(r=r||sn,c.scrollbars="yes");var f=Object.entries(c).reduce((function(e,r){var n=t(h)(r,2),i=n[0],o=n[1];return"".concat(e).concat(i,"=").concat(o,",")}),"");if(Be(l)&&"_self"!==u)return ln(r||"",u),new un(null);var d=window.open(r||"",u,f);A(d,e,"popup-blocked");try{d.focus()}catch(e){}return new un(d)}function ln(e,t){var r=document.createElement("a");r.href=e,r.target=t;var n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),r.dispatchEvent(n)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var fn="__/auth/handler",dn="emulator/auth/handler";function hn(e,r,n,i,o,a){A(e.config.authDomain,e,"auth-domain-config-required"),A(e.config.apiKey,e,"invalid-api-key");var s={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:i,v:y.SDK_VERSION,eventId:o};if(r instanceof pt){r.setDefaultLanguage(e.languageCode),s.providerId=r.providerId||"",(0,g.isEmpty)(r.getCustomParameters())||(s.customParameters=JSON.stringify(r.getCustomParameters()));var u=!0,c=!1,l=void 0;try{for(var f,d=Object.entries(a||{})[Symbol.iterator]();!(u=(f=d.next()).done);u=!0){var p=t(h)(f.value,2),v=p[0],m=p[1];s[v]=m}}catch(e){c=!0,l=e}finally{try{u||null==d.return||d.return()}finally{if(c)throw l}}}if(r instanceof vt){var b=r.getScopes().filter((function(e){return""!==e}));b.length>0&&(s.scopes=b.join(","))}e.tenantId&&(s.tid=e.tenantId);var k,w,x=s,_=!0,E=!1,I=void 0;try{for(var S,T=Object.keys(x)[Symbol.iterator]();!(_=(S=T.next()).done);_=!0){var O=S.value;void 0===x[O]&&delete x[O]}}catch(e){E=!0,I=e}finally{try{_||null==T.return||T.return()}finally{if(E)throw I}}return"".concat((k=e,w=k.config,w.emulator?q(w,dn):"https://".concat(w.authDomain,"/").concat(fn)),"?").concat((0,g.querystring)(x).slice(1))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var pn="webStorageSupport",vn=function(){"use strict";function e(){t(s)(this,e),this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=zt,this._completeRedirectFn=Ur,this._overrideRedirectResult=Nr}return t(u)(e,[{key:"_openPopup",value:function(e,r,n,i){var o=this;return t(a)(t(m).mark((function a(){var s,u;return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return P(null===(s=o.eventManagers[e._key()])||void 0===s?void 0:s.manager,"_initialize() not called before _openPopup()"),u=hn(e,r,n,U(),i),t.abrupt("return",cn(e,u,Gt()));case 4:case"end":return t.stop()}}),a)})))()}},{key:"_openRedirect",value:function(e,r,n,i){var o=this;return t(a)(t(m).mark((function a(){return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o._originValidation(e);case 2:return a=hn(e,r,n,U(),i),Xt().location.href=a,t.abrupt("return",new Promise((function(){})));case 4:case"end":return t.stop()}var a}),a)})))()}},{key:"_initialize",value:function(e){var t=this,r=e._key();if(this.eventManagers[r]){var n=this.eventManagers[r],i=n.manager,o=n.promise;return i?Promise.resolve(i):(P(o,"If manager is not set, promise should be"),o)}var a=this.initAndGetManager(e);return this.eventManagers[r]={promise:a},a.catch((function(){delete t.eventManagers[r]})),a}},{key:"initAndGetManager",value:function(e){var r=this;return t(a)(t(m).mark((function n(){var i,o;return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,rn(e);case 2:return i=t.sent,o=new jr(e),i.register("authEvent",(function(t){return A(null==t?void 0:t.authEvent,e,"invalid-auth-event"),{status:o.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),r.eventManagers[e._key()]={manager:o},r.iframes[e._key()]=i,t.abrupt("return",o);case 8:case"end":return t.stop()}}),n)})))()}},{key:"_isIframeWebStorageSupported",value:function(e,t){this.iframes[e._key()].send(pn,{type:pn},(function(r){var n,i=null===(n=null==r?void 0:r[0])||void 0===n?void 0:n.webStorageSupport;void 0!==i&&t(!!i),T(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}},{key:"_originValidation",value:function(e){var t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=function(e){return Jr.apply(this,arguments)}(e)),this.originValidationPromises[t]}},{key:"_shouldInitProactively",get:function(){return Fe()||Ae()||Ue()}}]),e}(),mn=vn,gn=function(e){"use strict";t(d)(n,e);var r=t(v)(n);function n(e){var i;return t(s)(this,n),(i=r.call(this,"phone")).credential=e,i}return t(u)(n,[{key:"_finalizeEnroll",value:function(e,t,r){return function(e,t){return K(e,"POST","/v2/accounts/mfaEnrollment:finalize",J(e,t))}(e,{idToken:t,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}},{key:"_finalizeSignIn",value:function(e,t){return function(e,t){return K(e,"POST","/v2/accounts/mfaSignIn:finalize",J(e,t))}(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}],[{key:"_fromCredential",value:function(e){return new n(e)}}]),n}(function(){"use strict";function e(r){t(s)(this,e),this.factorId=r}return t(u)(e,[{key:"_process",value:function(e,t,r){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,r);case"signin":return this._finalizeSignIn(e,t.credential);default:return L("unexpected MultiFactorSessionType")}}}]),e}());(function(){"use strict";function e(){t(s)(this,e)}return t(u)(e,null,[{key:"assertion",value:function(e){return gn._fromCredential(e)}}]),e}()).FACTOR_ID="phone";var yn,bn="@firebase/auth",kn="0.20.5",wn=function(){"use strict";function e(r){t(s)(this,e),this.auth=r,this.internalListeners=new Map}return t(u)(e,[{key:"getUid",value:function(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}},{key:"getToken",value:function(e){var r=this;return t(a)(t(m).mark((function n(){var i;return t(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r.assertAuthConfigured(),t.next=3,r.auth._initializationPromise;case 3:if(r.auth.currentUser){t.next=5;break}return t.abrupt("return",null);case 5:return t.next=7,r.auth.currentUser.getIdToken(e);case 7:return i=t.sent,t.abrupt("return",{accessToken:i});case 9:case"end":return t.stop()}}),n)})))()}},{key:"addAuthTokenListener",value:function(e){if(this.assertAuthConfigured(),!this.internalListeners.has(e)){var t=this.auth.onIdTokenChanged((function(t){var r;e((null===(r=t)||void 0===r?void 0:r.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}}},{key:"removeAuthTokenListener",value:function(e){this.assertAuthConfigured();var t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}},{key:"assertAuthConfigured",value:function(){A(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}},{key:"updateProactiveRefresh",value:function(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}]),e}();
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function xn(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,y.getApp)(),t=(0,y._getProvider)(e,"auth");return t.isInitialized()?t.getImmediate():D(e,{popupRedirectResolver:mn,persistence:[hr,Vt,zt]})}yn="Browser",(0,y._registerComponent)(new(0,w.Component)("auth",(function(e,t){var r=t.options,n=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),o=n.options,a=o.apiKey,s=o.authDomain;return function(e,t){A(a&&!a.includes(":"),"invalid-api-key",{appName:e.name}),A(!(null==s?void 0:s.includes(":")),"argument-error",{appName:e.name});var n={apiKey:a,authDomain:s,clientPlatform:yn,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:qe(yn)},i=new Ve(e,t,n);return function(e,t){var r=(null==t?void 0:t.persistence)||[],n=(Array.isArray(r)?r:[r]).map(M);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(n,null==t?void 0:t.popupRedirectResolver)}(i,r),i}(n,i)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((function(e,t,r){e.getProvider("auth-internal").initialize()}))),(0,y._registerComponent)(new(0,w.Component)("auth-internal",(function(e){var t=He(e.getProvider("auth").getImmediate());return new wn(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,y.registerVersion)(bn,kn,
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(yn)),(0,y.registerVersion)(bn,kn,"esm2017")})),o.register("jh8P3",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,r){return i(e,t,r)};var r,n=(r=o("2mz0K"))&&r.__esModule?r:{default:r};function i(e,t,r){return(i="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var i=n.default(e,t);if(i){var o=Object.getOwnPropertyDescriptor(i,t);return o.get?o.get.call(r||e):o.value}})(e,t,r)}})),o.register("2mz0K",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=n.default(e)););return e};var r,n=(r=o("fVNic"))&&r.__esModule?r:{default:r}})),o.register("4tSb9",(function(t,r){e(t.exports,"__rest",(function(){return n}));function n(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])}return r}Object.create;Object.create})),o.register("e7S07",(function(t,r){e(t.exports,"closeSignupModal",(function(){return a}));var n={openModalBtn:document.querySelector("[data-signup-modal-open]"),closeModalBtn:document.querySelector("[data-signup-modal-close]"),modal:document.querySelector("[data-signup-modal]")};function i(e){e.target.classList.contains("backdrop")&&a()}function o(e){"Escape"===e.key&&a()}function a(){document.body.classList.remove("modal-open"),n.modal.classList.add("is-hidden"),document.removeEventListener("keydown",o),n.modal.removeEventListener("click",i)}n.openModalBtn.addEventListener("click",(function(){document.body.classList.add("modal-open"),n.modal.classList.remove("is-hidden"),document.addEventListener("keydown",o),n.modal.addEventListener("click",i)})),n.closeModalBtn.addEventListener("click",a)})),o.register("cRUDO",(function(t,r){e(t.exports,"closeLoginModal",(function(){return a}));var n={openModalBtn:document.querySelector("[data-login-modal-open]"),closeModalBtn:document.querySelector("[data-login-modal-close]"),modal:document.querySelector("[data-login-modal]"),title:document.querySelector(".signup-modal")};function i(e){e.target.classList.contains("backdrop")&&a()}function o(e){"Escape"===e.key&&a()}function a(){document.body.classList.remove("modal-open"),n.modal.classList.add("is-hidden"),document.removeEventListener("keydown",o),n.modal.removeEventListener("click",i)}n.openModalBtn.addEventListener("click",(function(){document.body.classList.add("modal-open"),n.modal.classList.remove("is-hidden"),document.addEventListener("keydown",o),n.modal.addEventListener("click",i)})),n.closeModalBtn.addEventListener("click",a)})),o.register("a43B7",(function(t,r){e(t.exports,"enableUserInterface",(function(){return a}));var n=document.querySelector(".logout-wrapper"),i=document.querySelector(".login-wrapper"),o=n.querySelector(".logout-wrapper__text");function a(e){e?(i.classList.add("is-hidden"),n.classList.remove("is-hidden"),document.querySelector("#checkbox").checked?o.innerHTML='Привіт, <span class="logout-wrapper__text--accent">'.concat(s(e.email),"</span>"):o.innerHTML='Hello, dear <span class="logout-wrapper__text--accent">'.concat(s(e.email),"</span>")):(i.classList.remove("is-hidden"),n.classList.add("is-hidden"),o.innerHTML="")}function s(e){var t=e.split("@");return t[0].length>12?t[0].slice(0,11)+"...":t[0]}})),o.register("jSiUv",(function(t,r){e(t.exports,"notificationLaunch",(function(){return i}));var n={modal:document.querySelector("[data-notification-modal]"),message:document.querySelector(".notification-modal__message")};function i(e){document.body.classList.add("modal-open"),n.modal.classList.remove("is-hidden"),function(e){n.message.textContent=e}(e);var t=40*e.length;setTimeout((function(){document.body.classList.remove("modal-open"),n.modal.classList.add("is-hidden")}),t)}})),o.register("gXYlT",(function(r,n){e(r.exports,"fetchTrendingMovies",(function(){return s}));var i=o("dIxxU"),a="".concat("https://api.themoviedb.org/3","/trending/").concat("movie","/");function s(e,r,n){return t(i).get("".concat(a).concat(e,"?api_key=").concat("0d2fc6d2597c3f501e7437cf40d08b03","&page=").concat(r,"&language=").concat(n))}})),o.register("dIxxU",(function(e,t){e.exports=o("ke5Oc")})),o.register("ke5Oc",(function(e,t){"use strict";var r=o("c4C4W"),n=o("lGmLA"),i=o("9jbh3"),a=o("knWMA");var s=function e(t){var o=new i(t),s=n(i.prototype.request,o);return r.extend(s,i.prototype,o),r.extend(s,o),s.create=function(r){return e(a(t,r))},s}(o("c74ni"));s.Axios=i,s.CanceledError=o("dW1zJ"),s.CancelToken=o("77MZz"),s.isCancel=o("lXDKh"),s.VERSION=o("kLR29").version,s.toFormData=o("12Kat"),s.AxiosError=o("5TB86"),s.Cancel=s.CanceledError,s.all=function(e){return Promise.all(e)},s.spread=o("9BdDr"),s.isAxiosError=o("kv87N"),e.exports=s,e.exports.default=s})),o.register("c4C4W",(function(e,t){"use strict";var r,n=o("lGmLA"),i=Object.prototype.toString,a=(r=Object.create(null),function(e){var t=i.call(e);return r[t]||(r[t]=t.slice(8,-1).toLowerCase())});function s(e){return e=e.toLowerCase(),function(t){return a(t)===e}}function u(e){return Array.isArray(e)}function c(e){return void 0===e}var l=s("ArrayBuffer");function f(e){return null!==e&&"object"==typeof e}function d(e){if("object"!==a(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}var h=s("Date"),p=s("File"),v=s("Blob"),m=s("FileList");function g(e){return"[object Function]"===i.call(e)}var y=s("URLSearchParams");function b(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),u(e))for(var r=0,n=e.length;r<n;r++)t.call(null,e[r],r,e);else for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.call(null,e[i],i,e)}var k,w=(k="undefined"!=typeof Uint8Array&&Object.getPrototypeOf(Uint8Array),function(e){return k&&e instanceof k});e.exports={isArray:u,isArrayBuffer:l,isBuffer:function(e){return null!==e&&!c(e)&&null!==e.constructor&&!c(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){var t="[object FormData]";return e&&("function"==typeof FormData&&e instanceof FormData||i.call(e)===t||g(e.toString)&&e.toString()===t)},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&l(e.buffer)},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:f,isPlainObject:d,isUndefined:c,isDate:h,isFile:p,isBlob:v,isFunction:g,isStream:function(e){return f(e)&&g(e.pipe)},isURLSearchParams:y,isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:b,merge:function e(){var t={};function r(r,n){d(t[n])&&d(r)?t[n]=e(t[n],r):d(r)?t[n]=e({},r):u(r)?t[n]=r.slice():t[n]=r}for(var n=0,i=arguments.length;n<i;n++)b(arguments[n],r);return t},extend:function(e,t,r){return b(t,(function(t,i){e[i]=r&&"function"==typeof t?n(t,r):t})),e},trim:function(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e},inherits:function(e,t,r,n){e.prototype=Object.create(t.prototype,n),e.prototype.constructor=e,r&&Object.assign(e.prototype,r)},toFlatObject:function(e,t,r){var n,i,o,a={};t=t||{};do{for(i=(n=Object.getOwnPropertyNames(e)).length;i-- >0;)a[o=n[i]]||(t[o]=e[o],a[o]=!0);e=Object.getPrototypeOf(e)}while(e&&(!r||r(e,t))&&e!==Object.prototype);return t},kindOf:a,kindOfTest:s,endsWith:function(e,t,r){e=String(e),(void 0===r||r>e.length)&&(r=e.length),r-=t.length;var n=e.indexOf(t,r);return-1!==n&&n===r},toArray:function(e){if(!e)return null;var t=e.length;if(c(t))return null;for(var r=new Array(t);t-- >0;)r[t]=e[t];return r},isTypedArray:w,isFileList:m}})),o.register("lGmLA",(function(e,t){"use strict";e.exports=function(e,t){return function(){for(var r=new Array(arguments.length),n=0;n<r.length;n++)r[n]=arguments[n];return e.apply(t,r)}}})),o.register("9jbh3",(function(e,t){"use strict";var r=o("c4C4W"),n=o("6d5Pb"),i=o("JRZh2"),a=o("k04r0"),s=o("knWMA"),u=o("gYMA1"),c=o("9SeBc"),l=c.validators;function f(e){this.defaults=e,this.interceptors={request:new i,response:new i}}f.prototype.request=function(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{},(t=s(this.defaults,t)).method?t.method=t.method.toLowerCase():this.defaults.method?t.method=this.defaults.method.toLowerCase():t.method="get";var r=t.transitional;void 0!==r&&c.assertOptions(r,{silentJSONParsing:l.transitional(l.boolean),forcedJSONParsing:l.transitional(l.boolean),clarifyTimeoutError:l.transitional(l.boolean)},!1);var n=[],i=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(i=i&&e.synchronous,n.unshift(e.fulfilled,e.rejected))}));var o,u=[];if(this.interceptors.response.forEach((function(e){u.push(e.fulfilled,e.rejected)})),!i){var f=[a,void 0];for(Array.prototype.unshift.apply(f,n),f=f.concat(u),o=Promise.resolve(t);f.length;)o=o.then(f.shift(),f.shift());return o}for(var d=t;n.length;){var h=n.shift(),p=n.shift();try{d=h(d)}catch(e){p(e);break}}try{o=a(d)}catch(e){return Promise.reject(e)}for(;u.length;)o=o.then(u.shift(),u.shift());return o},f.prototype.getUri=function(e){e=s(this.defaults,e);var t=u(e.baseURL,e.url);return n(t,e.params,e.paramsSerializer)},r.forEach(["delete","get","head","options"],(function(e){f.prototype[e]=function(t,r){return this.request(s(r||{},{method:e,url:t,data:(r||{}).data}))}})),r.forEach(["post","put","patch"],(function(e){function t(t){return function(r,n,i){return this.request(s(i||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:r,data:n}))}}f.prototype[e]=t(),f.prototype[e+"Form"]=t(!0)})),e.exports=f})),o.register("6d5Pb",(function(e,t){"use strict";var r=o("c4C4W");function n(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,i){if(!t)return e;var o;if(i)o=i(t);else if(r.isURLSearchParams(t))o=t.toString();else{var a=[];r.forEach(t,(function(e,t){null!=e&&(r.isArray(e)?t+="[]":e=[e],r.forEach(e,(function(e){r.isDate(e)?e=e.toISOString():r.isObject(e)&&(e=JSON.stringify(e)),a.push(n(t)+"="+n(e))})))})),o=a.join("&")}if(o){var s=e.indexOf("#");-1!==s&&(e=e.slice(0,s)),e+=(-1===e.indexOf("?")?"?":"&")+o}return e}})),o.register("JRZh2",(function(e,t){"use strict";var r=o("c4C4W");function n(){this.handlers=[]}n.prototype.use=function(e,t,r){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!r&&r.synchronous,runWhen:r?r.runWhen:null}),this.handlers.length-1},n.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},n.prototype.forEach=function(e){r.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=n})),o.register("k04r0",(function(e,t){"use strict";var r=o("c4C4W"),n=o("jrAxF"),i=o("lXDKh"),a=o("c74ni"),s=o("dW1zJ");function u(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new s}e.exports=function(e){return u(e),e.headers=e.headers||{},e.data=n.call(e,e.data,e.headers,e.transformRequest),e.headers=r.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),r.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||a.adapter)(e).then((function(t){return u(e),t.data=n.call(e,t.data,t.headers,e.transformResponse),t}),(function(t){return i(t)||(u(e),t&&t.response&&(t.response.data=n.call(e,t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}})),o.register("jrAxF",(function(e,t){"use strict";var r=o("c4C4W"),n=o("c74ni");e.exports=function(e,t,i){var o=this||n;return r.forEach(i,(function(r){e=r.call(o,e,t)})),e}})),o.register("c74ni",(function(e,t){"use strict";var r=o("6qd2L"),n=o("c4C4W"),i=o("h8JMh"),a=o("5TB86"),s=o("gWbUy"),u=o("12Kat"),c={"Content-Type":"application/x-www-form-urlencoded"};function l(e,t){!n.isUndefined(e)&&n.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var f,d={transitional:s,adapter:(("undefined"!=typeof XMLHttpRequest||void 0!==r&&"[object process]"===Object.prototype.toString.call(r))&&(f=o("btSY7")),f),transformRequest:[function(e,t){if(i(t,"Accept"),i(t,"Content-Type"),n.isFormData(e)||n.isArrayBuffer(e)||n.isBuffer(e)||n.isStream(e)||n.isFile(e)||n.isBlob(e))return e;if(n.isArrayBufferView(e))return e.buffer;if(n.isURLSearchParams(e))return l(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString();var r,o=n.isObject(e),a=t&&t["Content-Type"];if((r=n.isFileList(e))||o&&"multipart/form-data"===a){var s=this.env&&this.env.FormData;return u(r?{"files[]":e}:e,s&&new s)}return o||"application/json"===a?(l(t,"application/json"),function(e,t,r){if(n.isString(e))try{return(t||JSON.parse)(e),n.trim(e)}catch(e){if("SyntaxError"!==e.name)throw e}return(r||JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){var t=this.transitional||d.transitional,r=t&&t.silentJSONParsing,i=t&&t.forcedJSONParsing,o=!r&&"json"===this.responseType;if(o||i&&n.isString(e)&&e.length)try{return JSON.parse(e)}catch(e){if(o){if("SyntaxError"===e.name)throw a.from(e,a.ERR_BAD_RESPONSE,this,null,this.response);throw e}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:o("beknR")},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};n.forEach(["delete","get","head"],(function(e){d.headers[e]={}})),n.forEach(["post","put","patch"],(function(e){d.headers[e]=n.merge(c)})),e.exports=d})),o.register("6qd2L",(function(e,t){var r,n,i=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function s(e){if(r===setTimeout)return setTimeout(e,0);if((r===o||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:o}catch(e){r=o}try{n="function"==typeof clearTimeout?clearTimeout:a}catch(e){n=a}}();var u,c=[],l=!1,f=-1;function d(){l&&u&&(l=!1,u.length?c=u.concat(c):f=-1,c.length&&h())}function h(){if(!l){var e=s(d);l=!0;for(var t=c.length;t;){for(u=c,c=[];++f<t;)u&&u[f].run();f=-1,t=c.length}u=null,l=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===a||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function v(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];c.push(new p(e,t)),1!==c.length||l||s(h)},p.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=v,i.addListener=v,i.once=v,i.off=v,i.removeListener=v,i.removeAllListeners=v,i.emit=v,i.prependListener=v,i.prependOnceListener=v,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}})),o.register("h8JMh",(function(e,t){"use strict";var r=o("c4C4W");e.exports=function(e,t){r.forEach(e,(function(r,n){n!==t&&n.toUpperCase()===t.toUpperCase()&&(e[t]=r,delete e[n])}))}})),o.register("5TB86",(function(e,t){"use strict";var r=o("c4C4W");function n(e,t,r,n,i){Error.call(this),this.message=e,this.name="AxiosError",t&&(this.code=t),r&&(this.config=r),n&&(this.request=n),i&&(this.response=i)}r.inherits(n,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var i=n.prototype,a={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED"].forEach((function(e){a[e]={value:e}})),Object.defineProperties(n,a),Object.defineProperty(i,"isAxiosError",{value:!0}),n.from=function(e,t,o,a,s,u){var c=Object.create(i);return r.toFlatObject(e,c,(function(e){return e!==Error.prototype})),n.call(c,e.message,t,o,a,s),c.name=e.name,u&&Object.assign(c,u),c},e.exports=n})),o.register("gWbUy",(function(e,t){"use strict";e.exports={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1}})),o.register("12Kat",(function(e,t){"use strict";var r=o("3aNd6").Buffer,n=o("c4C4W");e.exports=function(e,t){t=t||new FormData;var i=[];function o(e){return null===e?"":n.isDate(e)?e.toISOString():n.isArrayBuffer(e)||n.isTypedArray(e)?"function"==typeof Blob?new Blob([e]):r.from(e):e}return function e(r,a){if(n.isPlainObject(r)||n.isArray(r)){if(-1!==i.indexOf(r))throw Error("Circular reference detected in "+a);i.push(r),n.forEach(r,(function(r,i){if(!n.isUndefined(r)){var s,u=a?a+"."+i:i;if(r&&!a&&"object"==typeof r)if(n.endsWith(i,"{}"))r=JSON.stringify(r);else if(n.endsWith(i,"[]")&&(s=n.toArray(r)))return void s.forEach((function(e){!n.isUndefined(e)&&t.append(u,o(e))}));e(r,u)}})),i.pop()}else t.append(a,o(r))}(e),t}})),o.register("3aNd6",(function(r,n){e(r.exports,"Buffer",(function(){return i}),(function(e){return i=e})),e(r.exports,"INSPECT_MAX_BYTES",(function(){return a}),(function(e){return a=e}));var i,a,s=o("ds8z5"),u=o("8MBJY"),c=o("a2hTj"),l=o("eYQtU"),f=o("l5bVx"),d=o("2MbLg"),h=o("5d11t"),p=o("7rddL"),v="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;i=y,a=50;var m=2147483647;function g(e){if(e>m)throw new RangeError('The value "'+e+'" is invalid for option "size"');var t=new Uint8Array(e);return Object.setPrototypeOf(t,y.prototype),t}function y(e,t,r){if("number"==typeof e){if("string"==typeof t)throw new TypeError('The "string" argument must be of type string. Received type number');return w(e)}return b(e,t,r)}function b(e,r,n){if("string"==typeof e)return function(e,t){"string"==typeof t&&""!==t||(t="utf8");if(!y.isEncoding(t))throw new TypeError("Unknown encoding: "+t);var r=0|I(e,t),n=g(r),i=n.write(e,t);i!==r&&(n=n.slice(0,i));return n}(e,r);if(ArrayBuffer.isView(e))return function(e){if(oe(e,Uint8Array)){var t=new Uint8Array(e);return _(t.buffer,t.byteOffset,t.byteLength)}return x(e)}(e);if(null==e)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+(void 0===e?"undefined":t(f)(e)));if(oe(e,ArrayBuffer)||e&&oe(e.buffer,ArrayBuffer))return _(e,r,n);if("undefined"!=typeof SharedArrayBuffer&&(oe(e,SharedArrayBuffer)||e&&oe(e.buffer,SharedArrayBuffer)))return _(e,r,n);if("number"==typeof e)throw new TypeError('The "value" argument must not be of type number. Received type number');var i=e.valueOf&&e.valueOf();if(null!=i&&i!==e)return y.from(i,r,n);var o=function(e){if(y.isBuffer(e)){var t=0|E(e.length),r=g(t);return 0===r.length||e.copy(r,0,0,t),r}if(void 0!==e.length)return"number"!=typeof e.length||ae(e.length)?g(0):x(e);if("Buffer"===e.type&&Array.isArray(e.data))return x(e.data)}(e);if(o)return o;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof e[Symbol.toPrimitive])return y.from(e[Symbol.toPrimitive]("string"),r,n);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+(void 0===e?"undefined":t(f)(e)))}function k(e){if("number"!=typeof e)throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function w(e){return k(e),g(e<0?0:0|E(e))}function x(e){for(var t=e.length<0?0:0|E(e.length),r=g(t),n=0;n<t;n+=1)r[n]=255&e[n];return r}function _(e,t,r){if(t<0||e.byteLength<t)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(r||0))throw new RangeError('"length" is outside of buffer bounds');var n;return n=void 0===t&&void 0===r?new Uint8Array(e):void 0===r?new Uint8Array(e,t):new Uint8Array(e,t,r),Object.setPrototypeOf(n,y.prototype),n}function E(e){if(e>=m)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+m.toString(16)+" bytes");return 0|e}function I(e,r){if(y.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||oe(e,ArrayBuffer))return e.byteLength;if("string"!=typeof e)throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+(void 0===e?"undefined":t(f)(e)));var n=e.length,i=arguments.length>2&&!0===arguments[2];if(!i&&0===n)return 0;for(var o=!1;;)switch(r){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":return re(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*n;case"hex":return n>>>1;case"base64":return ne(e).length;default:if(o)return i?-1:re(e).length;r=(""+r).toLowerCase(),o=!0}}function S(e,t,r){var n=!1;if((void 0===t||t<0)&&(t=0),t>this.length)return"";if((void 0===r||r>this.length)&&(r=this.length),r<=0)return"";if((r>>>=0)<=(t>>>=0))return"";for(e||(e="utf8");;)switch(e){case"hex":return F(this,t,r);case"utf8":case"utf-8":return D(this,t,r);case"ascii":return B(this,t,r);case"latin1":case"binary":return j(this,t,r);case"base64":return M(this,t,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return q(this,t,r);default:if(n)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),n=!0}}function T(e,t,r){var n=e[t];e[t]=e[r],e[r]=n}function O(e,t,r,n,i){if(0===e.length)return-1;if("string"==typeof r?(n=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),ae(r=+r)&&(r=i?0:e.length-1),r<0&&(r=e.length+r),r>=e.length){if(i)return-1;r=e.length-1}else if(r<0){if(!i)return-1;r=0}if("string"==typeof t&&(t=y.from(t,n)),y.isBuffer(t))return 0===t.length?-1:C(e,t,r,n,i);if("number"==typeof t)return t&=255,"function"==typeof Uint8Array.prototype.indexOf?i?Uint8Array.prototype.indexOf.call(e,t,r):Uint8Array.prototype.lastIndexOf.call(e,t,r):C(e,[t],r,n,i);throw new TypeError("val must be string, number or Buffer")}function C(e,t,r,n,i){var o,a=1,s=e.length,u=t.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(e.length<2||t.length<2)return-1;a=2,s/=2,u/=2,r/=2}function c(e,t){return 1===a?e[t]:e.readUInt16BE(t*a)}if(i){var l=-1;for(o=r;o<s;o++)if(c(e,o)===c(t,-1===l?0:o-l)){if(-1===l&&(l=o),o-l+1===u)return l*a}else-1!==l&&(o-=o-l),l=-1}else for(r+u>s&&(r=s-u),o=r;o>=0;o--){for(var f=!0,d=0;d<u;d++)if(c(e,o+d)!==c(t,d)){f=!1;break}if(f)return o}return-1}function R(e,t,r,n){r=Number(r)||0;var i=e.length-r;n?(n=Number(n))>i&&(n=i):n=i;var o,a=t.length;for(n>a/2&&(n=a/2),o=0;o<n;++o){var s=parseInt(t.substr(2*o,2),16);if(ae(s))return o;e[r+o]=s}return o}function A(e,t,r,n){return ie(re(t,e.length-r),e,r,n)}function L(e,t,r,n){return ie(function(e){for(var t=[],r=0;r<e.length;++r)t.push(255&e.charCodeAt(r));return t}(t),e,r,n)}function P(e,t,r,n){return ie(ne(t),e,r,n)}function N(e,t,r,n){return ie(function(e,t){for(var r,n,i,o=[],a=0;a<e.length&&!((t-=2)<0);++a)n=(r=e.charCodeAt(a))>>8,i=r%256,o.push(i),o.push(n);return o}(t,e.length-r),e,r,n)}function M(e,t,r){return 0===t&&r===e.length?h.fromByteArray(e):h.fromByteArray(e.slice(t,r))}function D(e,t,r){r=Math.min(e.length,r);for(var n=[],i=t;i<r;){var o=e[i],a=null,s=o>239?4:o>223?3:o>191?2:1;if(i+s<=r){var u=void 0,c=void 0,l=void 0,f=void 0;switch(s){case 1:o<128&&(a=o);break;case 2:128==(192&(u=e[i+1]))&&(f=(31&o)<<6|63&u)>127&&(a=f);break;case 3:u=e[i+1],c=e[i+2],128==(192&u)&&128==(192&c)&&(f=(15&o)<<12|(63&u)<<6|63&c)>2047&&(f<55296||f>57343)&&(a=f);break;case 4:u=e[i+1],c=e[i+2],l=e[i+3],128==(192&u)&&128==(192&c)&&128==(192&l)&&(f=(15&o)<<18|(63&u)<<12|(63&c)<<6|63&l)>65535&&f<1114112&&(a=f)}}null===a?(a=65533,s=1):a>65535&&(a-=65536,n.push(a>>>10&1023|55296),a=56320|1023&a),n.push(a),i+=s}return function(e){var t=e.length;if(t<=U)return String.fromCharCode.apply(String,e);var r="",n=0;for(;n<t;)r+=String.fromCharCode.apply(String,e.slice(n,n+=U));return r}(n)}y.TYPED_ARRAY_SUPPORT=function(){try{var e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),42===e.foo()}catch(e){return!1}}(),y.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(y.prototype,"parent",{enumerable:!0,get:function(){if(y.isBuffer(this))return this.buffer}}),Object.defineProperty(y.prototype,"offset",{enumerable:!0,get:function(){if(y.isBuffer(this))return this.byteOffset}}),y.poolSize=8192,y.from=function(e,t,r){return b(e,t,r)},Object.setPrototypeOf(y.prototype,Uint8Array.prototype),Object.setPrototypeOf(y,Uint8Array),y.alloc=function(e,t,r){return function(e,t,r){return k(e),e<=0?g(e):void 0!==t?"string"==typeof r?g(e).fill(t,r):g(e).fill(t):g(e)}(e,t,r)},y.allocUnsafe=function(e){return w(e)},y.allocUnsafeSlow=function(e){return w(e)},y.isBuffer=function(e){return null!=e&&!0===e._isBuffer&&e!==y.prototype},y.compare=function(e,t){if(oe(e,Uint8Array)&&(e=y.from(e,e.offset,e.byteLength)),oe(t,Uint8Array)&&(t=y.from(t,t.offset,t.byteLength)),!y.isBuffer(e)||!y.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;for(var r=e.length,n=t.length,i=0,o=Math.min(r,n);i<o;++i)if(e[i]!==t[i]){r=e[i],n=t[i];break}return r<n?-1:n<r?1:0},y.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},y.concat=function(e,t){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return y.alloc(0);var r;if(void 0===t)for(t=0,r=0;r<e.length;++r)t+=e[r].length;var n=y.allocUnsafe(t),i=0;for(r=0;r<e.length;++r){var o=e[r];if(oe(o,Uint8Array))i+o.length>n.length?(y.isBuffer(o)||(o=y.from(o)),o.copy(n,i)):Uint8Array.prototype.set.call(n,o,i);else{if(!y.isBuffer(o))throw new TypeError('"list" argument must be an Array of Buffers');o.copy(n,i)}i+=o.length}return n},y.byteLength=I,y.prototype._isBuffer=!0,y.prototype.swap16=function(){var e=this.length;if(e%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var t=0;t<e;t+=2)T(this,t,t+1);return this},y.prototype.swap32=function(){var e=this.length;if(e%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var t=0;t<e;t+=4)T(this,t,t+3),T(this,t+1,t+2);return this},y.prototype.swap64=function(){var e=this.length;if(e%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var t=0;t<e;t+=8)T(this,t,t+7),T(this,t+1,t+6),T(this,t+2,t+5),T(this,t+3,t+4);return this},y.prototype.toString=function(){var e=this.length;return 0===e?"":0===arguments.length?D(this,0,e):S.apply(this,arguments)},y.prototype.toLocaleString=y.prototype.toString,y.prototype.equals=function(e){if(!y.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e||0===y.compare(this,e)},y.prototype.inspect=function(){var e="",t=a;return e=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(e+=" ... "),"<Buffer "+e+">"},v&&(y.prototype[v]=y.prototype.inspect),y.prototype.compare=function(e,r,n,i,o){if(oe(e,Uint8Array)&&(e=y.from(e,e.offset,e.byteLength)),!y.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+(void 0===e?"undefined":t(f)(e)));if(void 0===r&&(r=0),void 0===n&&(n=e?e.length:0),void 0===i&&(i=0),void 0===o&&(o=this.length),r<0||n>e.length||i<0||o>this.length)throw new RangeError("out of range index");if(i>=o&&r>=n)return 0;if(i>=o)return-1;if(r>=n)return 1;if(this===e)return 0;for(var a=(o>>>=0)-(i>>>=0),s=(n>>>=0)-(r>>>=0),u=Math.min(a,s),c=this.slice(i,o),l=e.slice(r,n),d=0;d<u;++d)if(c[d]!==l[d]){a=c[d],s=l[d];break}return a<s?-1:s<a?1:0},y.prototype.includes=function(e,t,r){return-1!==this.indexOf(e,t,r)},y.prototype.indexOf=function(e,t,r){return O(this,e,t,r,!0)},y.prototype.lastIndexOf=function(e,t,r){return O(this,e,t,r,!1)},y.prototype.write=function(e,t,r,n){if(void 0===t)n="utf8",r=this.length,t=0;else if(void 0===r&&"string"==typeof t)n=t,r=this.length,t=0;else{if(!isFinite(t))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");t>>>=0,isFinite(r)?(r>>>=0,void 0===n&&(n="utf8")):(n=r,r=void 0)}var i=this.length-t;if((void 0===r||r>i)&&(r=i),e.length>0&&(r<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var o=!1;;)switch(n){case"hex":return R(this,e,t,r);case"utf8":case"utf-8":return A(this,e,t,r);case"ascii":case"latin1":case"binary":return L(this,e,t,r);case"base64":return P(this,e,t,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return N(this,e,t,r);default:if(o)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),o=!0}},y.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};var U=4096;function B(e,t,r){var n="";r=Math.min(e.length,r);for(var i=t;i<r;++i)n+=String.fromCharCode(127&e[i]);return n}function j(e,t,r){var n="";r=Math.min(e.length,r);for(var i=t;i<r;++i)n+=String.fromCharCode(e[i]);return n}function F(e,t,r){var n=e.length;(!t||t<0)&&(t=0),(!r||r<0||r>n)&&(r=n);for(var i="",o=t;o<r;++o)i+=se[e[o]];return i}function q(e,t,r){for(var n=e.slice(t,r),i="",o=0;o<n.length-1;o+=2)i+=String.fromCharCode(n[o]+256*n[o+1]);return i}function W(e,t,r){if(e%1!=0||e<0)throw new RangeError("offset is not uint");if(e+t>r)throw new RangeError("Trying to access beyond buffer length")}function V(e,t,r,n,i,o){if(!y.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(t>i||t<o)throw new RangeError('"value" argument is out of bounds');if(r+n>e.length)throw new RangeError("Index out of range")}function H(e,t,r,n,i){Q(t,n,i,e,r,7);var o=Number(t&BigInt(4294967295));e[r++]=o,o>>=8,e[r++]=o,o>>=8,e[r++]=o,o>>=8,e[r++]=o;var a=Number(t>>BigInt(32)&BigInt(4294967295));return e[r++]=a,a>>=8,e[r++]=a,a>>=8,e[r++]=a,a>>=8,e[r++]=a,r}function z(e,t,r,n,i){Q(t,n,i,e,r,7);var o=Number(t&BigInt(4294967295));e[r+7]=o,o>>=8,e[r+6]=o,o>>=8,e[r+5]=o,o>>=8,e[r+4]=o;var a=Number(t>>BigInt(32)&BigInt(4294967295));return e[r+3]=a,a>>=8,e[r+2]=a,a>>=8,e[r+1]=a,a>>=8,e[r]=a,r+8}function J(e,t,r,n,i,o){if(r+n>e.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("Index out of range")}function K(e,t,r,n,i){return t=+t,r>>>=0,i||J(e,0,r,4),p.write(e,t,r,n,23,4),r+4}function G(e,t,r,n,i){return t=+t,r>>>=0,i||J(e,0,r,8),p.write(e,t,r,n,52,8),r+8}y.prototype.slice=function(e,t){var r=this.length;(e=~~e)<0?(e+=r)<0&&(e=0):e>r&&(e=r),(t=void 0===t?r:~~t)<0?(t+=r)<0&&(t=0):t>r&&(t=r),t<e&&(t=e);var n=this.subarray(e,t);return Object.setPrototypeOf(n,y.prototype),n},y.prototype.readUintLE=y.prototype.readUIntLE=function(e,t,r){e>>>=0,t>>>=0,r||W(e,t,this.length);for(var n=this[e],i=1,o=0;++o<t&&(i*=256);)n+=this[e+o]*i;return n},y.prototype.readUintBE=y.prototype.readUIntBE=function(e,t,r){e>>>=0,t>>>=0,r||W(e,t,this.length);for(var n=this[e+--t],i=1;t>0&&(i*=256);)n+=this[e+--t]*i;return n},y.prototype.readUint8=y.prototype.readUInt8=function(e,t){return e>>>=0,t||W(e,1,this.length),this[e]},y.prototype.readUint16LE=y.prototype.readUInt16LE=function(e,t){return e>>>=0,t||W(e,2,this.length),this[e]|this[e+1]<<8},y.prototype.readUint16BE=y.prototype.readUInt16BE=function(e,t){return e>>>=0,t||W(e,2,this.length),this[e]<<8|this[e+1]},y.prototype.readUint32LE=y.prototype.readUInt32LE=function(e,t){return e>>>=0,t||W(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},y.prototype.readUint32BE=y.prototype.readUInt32BE=function(e,t){return e>>>=0,t||W(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},y.prototype.readBigUInt64LE=ue((function(e){$(e>>>=0,"offset");var t=this[e],r=this[e+7];void 0!==t&&void 0!==r||ee(e,this.length-8);var n=t+256*this[++e]+65536*this[++e]+this[++e]*Math.pow(2,24),i=this[++e]+256*this[++e]+65536*this[++e]+r*Math.pow(2,24);return BigInt(n)+(BigInt(i)<<BigInt(32))})),y.prototype.readBigUInt64BE=ue((function(e){$(e>>>=0,"offset");var t=this[e],r=this[e+7];void 0!==t&&void 0!==r||ee(e,this.length-8);var n=t*Math.pow(2,24)+65536*this[++e]+256*this[++e]+this[++e],i=this[++e]*Math.pow(2,24)+65536*this[++e]+256*this[++e]+r;return(BigInt(n)<<BigInt(32))+BigInt(i)})),y.prototype.readIntLE=function(e,t,r){e>>>=0,t>>>=0,r||W(e,t,this.length);for(var n=this[e],i=1,o=0;++o<t&&(i*=256);)n+=this[e+o]*i;return n>=(i*=128)&&(n-=Math.pow(2,8*t)),n},y.prototype.readIntBE=function(e,t,r){e>>>=0,t>>>=0,r||W(e,t,this.length);for(var n=t,i=1,o=this[e+--n];n>0&&(i*=256);)o+=this[e+--n]*i;return o>=(i*=128)&&(o-=Math.pow(2,8*t)),o},y.prototype.readInt8=function(e,t){return e>>>=0,t||W(e,1,this.length),128&this[e]?-1*(255-this[e]+1):this[e]},y.prototype.readInt16LE=function(e,t){e>>>=0,t||W(e,2,this.length);var r=this[e]|this[e+1]<<8;return 32768&r?4294901760|r:r},y.prototype.readInt16BE=function(e,t){e>>>=0,t||W(e,2,this.length);var r=this[e+1]|this[e]<<8;return 32768&r?4294901760|r:r},y.prototype.readInt32LE=function(e,t){return e>>>=0,t||W(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},y.prototype.readInt32BE=function(e,t){return e>>>=0,t||W(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},y.prototype.readBigInt64LE=ue((function(e){$(e>>>=0,"offset");var t=this[e],r=this[e+7];void 0!==t&&void 0!==r||ee(e,this.length-8);var n=this[e+4]+256*this[e+5]+65536*this[e+6]+(r<<24);return(BigInt(n)<<BigInt(32))+BigInt(t+256*this[++e]+65536*this[++e]+this[++e]*Math.pow(2,24))})),y.prototype.readBigInt64BE=ue((function(e){$(e>>>=0,"offset");var t=this[e],r=this[e+7];void 0!==t&&void 0!==r||ee(e,this.length-8);var n=(t<<24)+65536*this[++e]+256*this[++e]+this[++e];return(BigInt(n)<<BigInt(32))+BigInt(this[++e]*Math.pow(2,24)+65536*this[++e]+256*this[++e]+r)})),y.prototype.readFloatLE=function(e,t){return e>>>=0,t||W(e,4,this.length),p.read(this,e,!0,23,4)},y.prototype.readFloatBE=function(e,t){return e>>>=0,t||W(e,4,this.length),p.read(this,e,!1,23,4)},y.prototype.readDoubleLE=function(e,t){return e>>>=0,t||W(e,8,this.length),p.read(this,e,!0,52,8)},y.prototype.readDoubleBE=function(e,t){return e>>>=0,t||W(e,8,this.length),p.read(this,e,!1,52,8)},y.prototype.writeUintLE=y.prototype.writeUIntLE=function(e,t,r,n){(e=+e,t>>>=0,r>>>=0,n)||V(this,e,t,r,Math.pow(2,8*r)-1,0);var i=1,o=0;for(this[t]=255&e;++o<r&&(i*=256);)this[t+o]=e/i&255;return t+r},y.prototype.writeUintBE=y.prototype.writeUIntBE=function(e,t,r,n){(e=+e,t>>>=0,r>>>=0,n)||V(this,e,t,r,Math.pow(2,8*r)-1,0);var i=r-1,o=1;for(this[t+i]=255&e;--i>=0&&(o*=256);)this[t+i]=e/o&255;return t+r},y.prototype.writeUint8=y.prototype.writeUInt8=function(e,t,r){return e=+e,t>>>=0,r||V(this,e,t,1,255,0),this[t]=255&e,t+1},y.prototype.writeUint16LE=y.prototype.writeUInt16LE=function(e,t,r){return e=+e,t>>>=0,r||V(this,e,t,2,65535,0),this[t]=255&e,this[t+1]=e>>>8,t+2},y.prototype.writeUint16BE=y.prototype.writeUInt16BE=function(e,t,r){return e=+e,t>>>=0,r||V(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=255&e,t+2},y.prototype.writeUint32LE=y.prototype.writeUInt32LE=function(e,t,r){return e=+e,t>>>=0,r||V(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e,t+4},y.prototype.writeUint32BE=y.prototype.writeUInt32BE=function(e,t,r){return e=+e,t>>>=0,r||V(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},y.prototype.writeBigUInt64LE=ue((function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return H(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))})),y.prototype.writeBigUInt64BE=ue((function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return z(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))})),y.prototype.writeIntLE=function(e,t,r,n){if(e=+e,t>>>=0,!n){var i=Math.pow(2,8*r-1);V(this,e,t,r,i-1,-i)}var o=0,a=1,s=0;for(this[t]=255&e;++o<r&&(a*=256);)e<0&&0===s&&0!==this[t+o-1]&&(s=1),this[t+o]=(e/a>>0)-s&255;return t+r},y.prototype.writeIntBE=function(e,t,r,n){if(e=+e,t>>>=0,!n){var i=Math.pow(2,8*r-1);V(this,e,t,r,i-1,-i)}var o=r-1,a=1,s=0;for(this[t+o]=255&e;--o>=0&&(a*=256);)e<0&&0===s&&0!==this[t+o+1]&&(s=1),this[t+o]=(e/a>>0)-s&255;return t+r},y.prototype.writeInt8=function(e,t,r){return e=+e,t>>>=0,r||V(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=255&e,t+1},y.prototype.writeInt16LE=function(e,t,r){return e=+e,t>>>=0,r||V(this,e,t,2,32767,-32768),this[t]=255&e,this[t+1]=e>>>8,t+2},y.prototype.writeInt16BE=function(e,t,r){return e=+e,t>>>=0,r||V(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=255&e,t+2},y.prototype.writeInt32LE=function(e,t,r){return e=+e,t>>>=0,r||V(this,e,t,4,2147483647,-2147483648),this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},y.prototype.writeInt32BE=function(e,t,r){return e=+e,t>>>=0,r||V(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},y.prototype.writeBigInt64LE=ue((function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return H(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),y.prototype.writeBigInt64BE=ue((function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return z(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),y.prototype.writeFloatLE=function(e,t,r){return K(this,e,t,!0,r)},y.prototype.writeFloatBE=function(e,t,r){return K(this,e,t,!1,r)},y.prototype.writeDoubleLE=function(e,t,r){return G(this,e,t,!0,r)},y.prototype.writeDoubleBE=function(e,t,r){return G(this,e,t,!1,r)},y.prototype.copy=function(e,t,r,n){if(!y.isBuffer(e))throw new TypeError("argument should be a Buffer");if(r||(r=0),n||0===n||(n=this.length),t>=e.length&&(t=e.length),t||(t=0),n>0&&n<r&&(n=r),n===r)return 0;if(0===e.length||0===this.length)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),e.length-t<n-r&&(n=e.length-t+r);var i=n-r;return this===e&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(t,r,n):Uint8Array.prototype.set.call(e,this.subarray(r,n),t),i},y.prototype.fill=function(e,t,r,n){if("string"==typeof e){if("string"==typeof t?(n=t,t=0,r=this.length):"string"==typeof r&&(n=r,r=this.length),void 0!==n&&"string"!=typeof n)throw new TypeError("encoding must be a string");if("string"==typeof n&&!y.isEncoding(n))throw new TypeError("Unknown encoding: "+n);if(1===e.length){var i=e.charCodeAt(0);("utf8"===n&&i<128||"latin1"===n)&&(e=i)}}else"number"==typeof e?e&=255:"boolean"==typeof e&&(e=Number(e));if(t<0||this.length<t||this.length<r)throw new RangeError("Out of range index");if(r<=t)return this;var o;if(t>>>=0,r=void 0===r?this.length:r>>>0,e||(e=0),"number"==typeof e)for(o=t;o<r;++o)this[o]=e;else{var a=y.isBuffer(e)?e:y.from(e,n),s=a.length;if(0===s)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(o=0;o<r-t;++o)this[o+t]=a[o%s]}return this};var Y={};function X(e,r,n){Y[e]=function(n){t(l)(o,n);var i=t(d)(o);function o(){var n;return t(u)(this,o),n=i.call(this),Object.defineProperty(t(s)(n),"message",{value:r.apply(t(s)(n),arguments),writable:!0,configurable:!0}),n.name="".concat(n.name," [").concat(e,"]"),n.stack,delete n.name,n}return t(c)(o,[{key:"code",get:function(){return e},set:function(e){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:e,writable:!0})}},{key:"toString",value:function(){return"".concat(this.name," [").concat(e,"]: ").concat(this.message)}}]),o}(n)}function Z(e){for(var t="",r=e.length,n="-"===e[0]?1:0;r>=n+4;r-=3)t="_".concat(e.slice(r-3,r)).concat(t);return"".concat(e.slice(0,r)).concat(t)}function Q(e,r,n,i,o,a){if(e>n||e<r){var s,u="bigint"===(void 0===r?"undefined":t(f)(r))?"n":"";throw s=a>3?0===r||r===BigInt(0)?">= 0".concat(u," and < 2").concat(u," ** ").concat(8*(a+1)).concat(u):">= -(2".concat(u," ** ").concat(8*(a+1)-1).concat(u,") and < 2 ** ")+"".concat(8*(a+1)-1).concat(u):">= ".concat(r).concat(u," and <= ").concat(n).concat(u),new Y.ERR_OUT_OF_RANGE("value",s,e)}!function(e,t,r){$(t,"offset"),void 0!==e[t]&&void 0!==e[t+r]||ee(t,e.length-(r+1))}(i,o,a)}function $(e,t){if("number"!=typeof e)throw new Y.ERR_INVALID_ARG_TYPE(t,"number",e)}function ee(e,t,r){if(Math.floor(e)!==e)throw $(e,r),new Y.ERR_OUT_OF_RANGE(r||"offset","an integer",e);if(t<0)throw new Y.ERR_BUFFER_OUT_OF_BOUNDS;throw new Y.ERR_OUT_OF_RANGE(r||"offset",">= ".concat(r?1:0," and <= ").concat(t),e)}X("ERR_BUFFER_OUT_OF_BOUNDS",(function(e){return e?"".concat(e," is outside of buffer bounds"):"Attempt to access memory outside buffer bounds"}),RangeError),X("ERR_INVALID_ARG_TYPE",(function(e,r){return'The "'.concat(e,'" argument must be of type number. Received type ').concat(void 0===r?"undefined":t(f)(r))}),TypeError),X("ERR_OUT_OF_RANGE",(function(e,r,n){var i='The value of "'.concat(e,'" is out of range.'),o=n;return Number.isInteger(n)&&Math.abs(n)>Math.pow(2,32)?o=Z(String(n)):"bigint"===(void 0===n?"undefined":t(f)(n))&&(o=String(n),(n>Math.pow(BigInt(2),BigInt(32))||n<-Math.pow(BigInt(2),BigInt(32)))&&(o=Z(o)),o+="n"),i+=" It must be ".concat(r,". Received ").concat(o)}),RangeError);var te=/[^+/0-9A-Za-z-_]/g;function re(e,t){var r;t=t||1/0;for(var n=e.length,i=null,o=[],a=0;a<n;++a){if((r=e.charCodeAt(a))>55295&&r<57344){if(!i){if(r>56319){(t-=3)>-1&&o.push(239,191,189);continue}if(a+1===n){(t-=3)>-1&&o.push(239,191,189);continue}i=r;continue}if(r<56320){(t-=3)>-1&&o.push(239,191,189),i=r;continue}r=65536+(i-55296<<10|r-56320)}else i&&(t-=3)>-1&&o.push(239,191,189);if(i=null,r<128){if((t-=1)<0)break;o.push(r)}else if(r<2048){if((t-=2)<0)break;o.push(r>>6|192,63&r|128)}else if(r<65536){if((t-=3)<0)break;o.push(r>>12|224,r>>6&63|128,63&r|128)}else{if(!(r<1114112))throw new Error("Invalid code point");if((t-=4)<0)break;o.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}}return o}function ne(e){return h.toByteArray(function(e){if((e=(e=e.split("=")[0]).trim().replace(te,"")).length<2)return"";for(;e.length%4!=0;)e+="=";return e}(e))}function ie(e,t,r,n){var i;for(i=0;i<n&&!(i+r>=t.length||i>=e.length);++i)t[i+r]=e[i];return i}function oe(e,t){return e instanceof t||null!=e&&null!=e.constructor&&null!=e.constructor.name&&e.constructor.name===t.name}function ae(e){return e!=e}var se=function(){for(var e="0123456789abcdef",t=new Array(256),r=0;r<16;++r)for(var n=16*r,i=0;i<16;++i)t[n+i]=e[r]+e[i];return t}();function ue(e){return"undefined"==typeof BigInt?ce:e}function ce(){throw new Error("BigInt not supported")}})),o.register("5d11t",(function(t,r){var n,i;e(t.exports,"toByteArray",(function(){return n}),(function(e){return n=e})),e(t.exports,"fromByteArray",(function(){return i}),(function(e){return i=e})),n=function(e){var t,r,n=f(e),i=n[0],o=n[1],u=new s(function(e,t,r){return 3*(t+r)/4-r}(0,i,o)),c=0,l=o>0?i-4:i;for(r=0;r<l;r+=4)t=a[e.charCodeAt(r)]<<18|a[e.charCodeAt(r+1)]<<12|a[e.charCodeAt(r+2)]<<6|a[e.charCodeAt(r+3)],u[c++]=t>>16&255,u[c++]=t>>8&255,u[c++]=255&t;2===o&&(t=a[e.charCodeAt(r)]<<2|a[e.charCodeAt(r+1)]>>4,u[c++]=255&t);1===o&&(t=a[e.charCodeAt(r)]<<10|a[e.charCodeAt(r+1)]<<4|a[e.charCodeAt(r+2)]>>2,u[c++]=t>>8&255,u[c++]=255&t);return u},i=function(e){for(var t,r=e.length,n=r%3,i=[],a=16383,s=0,u=r-n;s<u;s+=a)i.push(d(e,s,s+a>u?u:s+a));1===n?(t=e[r-1],i.push(o[t>>2]+o[t<<4&63]+"==")):2===n&&(t=(e[r-2]<<8)+e[r-1],i.push(o[t>>10]+o[t>>4&63]+o[t<<2&63]+"="));return i.join("")};for(var o=[],a=[],s="undefined"!=typeof Uint8Array?Uint8Array:Array,u="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",c=0,l=u.length;c<l;++c)o[c]=u[c],a[u.charCodeAt(c)]=c;function f(e){var t=e.length;if(t%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var r=e.indexOf("=");return-1===r&&(r=t),[r,r===t?0:4-r%4]}function d(e,t,r){for(var n,i,a=[],s=t;s<r;s+=3)n=(e[s]<<16&16711680)+(e[s+1]<<8&65280)+(255&e[s+2]),a.push(o[(i=n)>>18&63]+o[i>>12&63]+o[i>>6&63]+o[63&i]);return a.join("")}a["-".charCodeAt(0)]=62,a["_".charCodeAt(0)]=63})),o.register("7rddL",(function(t,r){
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */var n,i;e(t.exports,"read",(function(){return n}),(function(e){return n=e})),e(t.exports,"write",(function(){return i}),(function(e){return i=e})),n=function(e,t,r,n,i){var o,a,s=8*i-n-1,u=(1<<s)-1,c=u>>1,l=-7,f=r?i-1:0,d=r?-1:1,h=e[t+f];for(f+=d,o=h&(1<<-l)-1,h>>=-l,l+=s;l>0;o=256*o+e[t+f],f+=d,l-=8);for(a=o&(1<<-l)-1,o>>=-l,l+=n;l>0;a=256*a+e[t+f],f+=d,l-=8);if(0===o)o=1-c;else{if(o===u)return a?NaN:1/0*(h?-1:1);a+=Math.pow(2,n),o-=c}return(h?-1:1)*a*Math.pow(2,o-n)},i=function(e,t,r,n,i,o){var a,s,u,c=8*o-i-1,l=(1<<c)-1,f=l>>1,d=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,h=n?0:o-1,p=n?1:-1,v=t<0||0===t&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(s=isNaN(t)?1:0,a=l):(a=Math.floor(Math.log(t)/Math.LN2),t*(u=Math.pow(2,-a))<1&&(a--,u*=2),(t+=a+f>=1?d/u:d*Math.pow(2,1-f))*u>=2&&(a++,u/=2),a+f>=l?(s=0,a=l):a+f>=1?(s=(t*u-1)*Math.pow(2,i),a+=f):(s=t*Math.pow(2,f-1)*Math.pow(2,i),a=0));i>=8;e[r+h]=255&s,h+=p,s/=256,i-=8);for(a=a<<i|s,c+=i;c>0;e[r+h]=255&a,h+=p,a/=256,c-=8);e[r+h-p]|=128*v}})),o.register("btSY7",(function(e,t){"use strict";var r=o("c4C4W"),n=o("j97bH"),i=o("jFG8L"),a=o("6d5Pb"),s=o("gYMA1"),u=o("1nUSP"),c=o("9jFfm"),l=o("gWbUy"),f=o("5TB86"),d=o("dW1zJ"),h=o("4ULKu");e.exports=function(e){return new Promise((function(t,o){var p,v=e.data,m=e.headers,g=e.responseType;function y(){e.cancelToken&&e.cancelToken.unsubscribe(p),e.signal&&e.signal.removeEventListener("abort",p)}r.isFormData(v)&&r.isStandardBrowserEnv()&&delete m["Content-Type"];var b=new XMLHttpRequest;if(e.auth){var k=e.auth.username||"",w=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";m.Authorization="Basic "+btoa(k+":"+w)}var x=s(e.baseURL,e.url);function _(){if(b){var r="getAllResponseHeaders"in b?u(b.getAllResponseHeaders()):null,i={data:g&&"text"!==g&&"json"!==g?b.response:b.responseText,status:b.status,statusText:b.statusText,headers:r,config:e,request:b};n((function(e){t(e),y()}),(function(e){o(e),y()}),i),b=null}}if(b.open(e.method.toUpperCase(),a(x,e.params,e.paramsSerializer),!0),b.timeout=e.timeout,"onloadend"in b?b.onloadend=_:b.onreadystatechange=function(){b&&4===b.readyState&&(0!==b.status||b.responseURL&&0===b.responseURL.indexOf("file:"))&&setTimeout(_)},b.onabort=function(){b&&(o(new f("Request aborted",f.ECONNABORTED,e,b)),b=null)},b.onerror=function(){o(new f("Network Error",f.ERR_NETWORK,e,b,b)),b=null},b.ontimeout=function(){var t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",r=e.transitional||l;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),o(new f(t,r.clarifyTimeoutError?f.ETIMEDOUT:f.ECONNABORTED,e,b)),b=null},r.isStandardBrowserEnv()){var E=(e.withCredentials||c(x))&&e.xsrfCookieName?i.read(e.xsrfCookieName):void 0;E&&(m[e.xsrfHeaderName]=E)}"setRequestHeader"in b&&r.forEach(m,(function(e,t){void 0===v&&"content-type"===t.toLowerCase()?delete m[t]:b.setRequestHeader(t,e)})),r.isUndefined(e.withCredentials)||(b.withCredentials=!!e.withCredentials),g&&"json"!==g&&(b.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&b.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&b.upload&&b.upload.addEventListener("progress",e.onUploadProgress),(e.cancelToken||e.signal)&&(p=function(e){b&&(o(!e||e&&e.type?new d:e),b.abort(),b=null)},e.cancelToken&&e.cancelToken.subscribe(p),e.signal&&(e.signal.aborted?p():e.signal.addEventListener("abort",p))),v||(v=null);var I=h(x);I&&-1===["http","https","file"].indexOf(I)?o(new f("Unsupported protocol "+I+":",f.ERR_BAD_REQUEST,e)):b.send(v)}))}})),o.register("j97bH",(function(e,t){"use strict";var r=o("5TB86");e.exports=function(e,t,n){var i=n.config.validateStatus;n.status&&i&&!i(n.status)?t(new r("Request failed with status code "+n.status,[r.ERR_BAD_REQUEST,r.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):e(n)}})),o.register("jFG8L",(function(e,t){"use strict";var r=o("c4C4W");e.exports=r.isStandardBrowserEnv()?{write:function(e,t,n,i,o,a){var s=[];s.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),r.isString(i)&&s.push("path="+i),r.isString(o)&&s.push("domain="+o),!0===a&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}})),o.register("gYMA1",(function(e,t){"use strict";var r=o("7xjuH"),n=o("ftRZn");e.exports=function(e,t){return e&&!r(t)?n(e,t):t}})),o.register("7xjuH",(function(e,t){"use strict";e.exports=function(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}})),o.register("ftRZn",(function(e,t){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}})),o.register("1nUSP",(function(e,t){"use strict";var r=o("c4C4W"),n=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,i,o,a={};return e?(r.forEach(e.split("\n"),(function(e){if(o=e.indexOf(":"),t=r.trim(e.substr(0,o)).toLowerCase(),i=r.trim(e.substr(o+1)),t){if(a[t]&&n.indexOf(t)>=0)return;a[t]="set-cookie"===t?(a[t]?a[t]:[]).concat([i]):a[t]?a[t]+", "+i:i}})),a):a}})),o.register("9jFfm",(function(e,t){"use strict";var r=o("c4C4W");e.exports=r.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function i(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=i(window.location.href),function(t){var n=r.isString(t)?i(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return!0}})),o.register("dW1zJ",(function(e,t){"use strict";var r=o("5TB86");function n(e){r.call(this,null==e?"canceled":e,r.ERR_CANCELED),this.name="CanceledError"}o("c4C4W").inherits(n,r,{__CANCEL__:!0}),e.exports=n})),o.register("4ULKu",(function(e,t){"use strict";e.exports=function(e){var t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}})),o.register("beknR",(function(e,t){e.exports=null})),o.register("lXDKh",(function(e,t){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}})),o.register("knWMA",(function(e,t){"use strict";var r=o("c4C4W");e.exports=function(e,t){t=t||{};var n={};function i(e,t){return r.isPlainObject(e)&&r.isPlainObject(t)?r.merge(e,t):r.isPlainObject(t)?r.merge({},t):r.isArray(t)?t.slice():t}function o(n){return r.isUndefined(t[n])?r.isUndefined(e[n])?void 0:i(void 0,e[n]):i(e[n],t[n])}function a(e){if(!r.isUndefined(t[e]))return i(void 0,t[e])}function s(n){return r.isUndefined(t[n])?r.isUndefined(e[n])?void 0:i(void 0,e[n]):i(void 0,t[n])}function u(r){return r in t?i(e[r],t[r]):r in e?i(void 0,e[r]):void 0}var c={url:a,method:a,data:a,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:u};return r.forEach(Object.keys(e).concat(Object.keys(t)),(function(e){var t=c[e]||o,i=t(e);r.isUndefined(i)&&t!==u||(n[e]=i)})),n}})),o.register("9SeBc",(function(e,r){var n=o("l5bVx"),i=o("kLR29").version,a=o("5TB86"),s={};["object","boolean","number","function","string","symbol"].forEach((function(e,r){s[e]=function(i){return(void 0===i?"undefined":t(n)(i))===e||"a"+(r<1?"n ":" ")+e}}));var u={};s.transitional=function(e,t,r){function n(e,t){return"[Axios v"+i+"] Transitional option '"+e+"'"+t+(r?". "+r:"")}return function(r,i,o){if(!1===e)throw new a(n(i," has been removed"+(t?" in "+t:"")),a.ERR_DEPRECATED);return t&&!u[i]&&(u[i]=!0,console.warn(n(i," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(r,i,o)}},e.exports={assertOptions:function(e,t,r){if("object"!=typeof e)throw new a("options must be an object",a.ERR_BAD_OPTION_VALUE);for(var n=Object.keys(e),i=n.length;i-- >0;){var o=n[i],s=t[o];if(s){var u=e[o],c=void 0===u||s(u,o,e);if(!0!==c)throw new a("option "+o+" must be "+c,a.ERR_BAD_OPTION_VALUE)}else if(!0!==r)throw new a("Unknown option "+o,a.ERR_BAD_OPTION)}},validators:s}})),o.register("kLR29",(function(e,t){e.exports={version:"0.27.2"}})),o.register("77MZz",(function(e,t){"use strict";var r=o("dW1zJ");function n(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var n=this;this.promise.then((function(e){if(n._listeners){var t,r=n._listeners.length;for(t=0;t<r;t++)n._listeners[t](e);n._listeners=null}})),this.promise.then=function(e){var t,r=new Promise((function(e){n.subscribe(e),t=e})).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e((function(e){n.reason||(n.reason=new r(e),t(n.reason))}))}n.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},n.prototype.subscribe=function(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]},n.prototype.unsubscribe=function(e){if(this._listeners){var t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}},n.source=function(){var e;return{token:new n((function(t){e=t})),cancel:e}},e.exports=n})),o.register("9BdDr",(function(e,t){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}})),o.register("kv87N",(function(e,t){"use strict";var r=o("c4C4W");e.exports=function(e){return r.isObject(e)&&!0===e.isAxiosError}})),o.register("2ZaIc",(function(r,n){e(r.exports,"fetchMovieGenres",(function(){return f}));var i=o("bpxeT"),a=o("2TvXO"),s=o("dIxxU"),u="0d2fc6d2597c3f501e7437cf40d08b03",c="".concat("https://api.themoviedb.org/3","/genre/movie/list"),l="";function f(){return d.apply(this,arguments)}function d(){return(d=t(i)(t(a).mark((function e(){var r,n;return t(a).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r=document.querySelector("#checkbox"),l=r.checked?"uk":"en",e.next=5,t(s).get("".concat(c,"?api_key=").concat(u,"&language=").concat(l));case 5:n=e.sent.data,localStorage.setItem("genres",JSON.stringify("")),localStorage.setItem("genres",JSON.stringify(n.genres)),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}})),o.register("hsNhQ",(function(t,r){function n(e){var t=localStorage.getItem("genres"),r=JSON.parse(t),n=[];return e.map((function(e){r.map((function(t){t.id===e&&n.push(t.name)}))})),n}e(t.exports,"moviesGenresConvertation",(function(){return n}))})),o.register("70uTk",(function(t,r){function n(e){return e.length>35?e.slice(0,28)+"...":e}function i(e){var t=localStorage.getItem("localLang");return 0===e.length?"".concat("en"===t?"Unknown genres":"Невідомі жанри"):e.length>3?"".concat(e[0],", ").concat(e[1],", ").concat("en"===t?"Other":"Інші"):e.join(", ")}e(t.exports,"titleSrinking",(function(){return n})),e(t.exports,"genresSrinking",(function(){return i}))})),o.register("2dZGR",(function(t,r){function n(e){return e?e.slice(0,4):""}e(t.exports,"dateConvertation",(function(){return n}))})),o.register("1wRKO",(function(t,r){function n(e){return null===e?"https://subscribenow.com.au/time/asia/Solo/Content/Images/noCover.gif":"https://image.tmdb.org/t/p/original/"+e}e(t.exports,"posterRender",(function(){return n}))})),o.register("2eh48",(function(t,r){e(t.exports,"logInUk",(function(){return u})),e(t.exports,"logInEn",(function(){return c}));var n=document.querySelector("#logInTitle"),i=document.querySelector("#logInEmail"),o=document.querySelector("#logInPassword"),a=document.querySelector("#logInBtn"),s=document.querySelector("[data-login-modal-open]");function u(){s.textContent="Вхід",n.textContent="Введіть електронну скриньку та пароль для входу",i.textContent="Електронна скринька",o.textContent="Пароль",a.innerHTML='<span class="submit-spinner submit-spinner_hide" id="spinnerlogin"></span>Вхід'}function c(){s.textContent="Log in",n.textContent="Enter your email and password for log in",i.textContent="Email",o.textContent="Password",a.innerHTML='<span class="submit-spinner submit-spinner_hide" id="spinnerlogin"></span>Log in'}})),o.register("2EUDM",(function(t,r){e(t.exports,"signUpEn",(function(){return u})),e(t.exports,"signUpUk",(function(){return c}));var n=document.querySelector("#signUpTitle"),i=document.querySelector("#signUpEmail"),o=document.querySelector("#signUpPasswoerd"),a=document.querySelector("#btnSignUp"),s=document.querySelector("[data-signup-modal-open]");function u(){s.textContent="Sign up",n.textContent="Enter your email and password for sign up",i.textContent="Email",o.textContent="Password",a.innerHTML='<span class="submit-spinner submit-spinner_hide" id="spinnersignup"></span>Sign up'}function c(){s.textContent="Реєстрація",n.textContent="Введіть електрону скриньку та пароль для реєстрації",i.textContent="Електронна скринька",o.textContent="Пароль",a.innerHTML='<span class="submit-spinner submit-spinner_hide" id="spinnersignup"></span>Зареєструватися'}})),o.register("jf5Po",(function(t,r){e(t.exports,"footerEn",(function(){return s})),e(t.exports,"footerUk",(function(){return u}));var n=document.querySelector("#footerRight"),i=document.querySelector("#developText"),o=document.querySelector("#footerText"),a=document.querySelector("#footerStudent");function s(){n.textContent="© 2022 | All Rights Reserved |",i.textContent="Developed with",o.textContent="by",a.textContent="GoIT Students"}function u(){n.textContent="© 2022 | Всі права захищено |",i.textContent="Розроблено зі",o.textContent="",a.textContent="Cтудентами GoIt"}})),o.register("2buvE",(function(t,r){e(t.exports,"languege",(function(){return n})),e(t.exports,"setLocalLang",(function(){return i}));var n=document.querySelector("html");function i(){localStorage.setItem("localLang",n.getAttribute("lang"))}})),o.register("4F07H",(function(e,r){var n=o("8MBJY"),i=o("a2hTj"),a=o("8nrFW"),s=o("aAeQa"),u={openModal:document.querySelector(".footer__link"),closeModal:document.querySelector("[data-footer-modal-close]"),modalWindow:document.querySelector("[data-footer-modal]"),modalContainer:document.querySelector(".modal__container")};function c(){document.body.classList.remove("modal-open"),u.modalWindow.classList.add("is-hidden"),document.removeEventListener("keydown",f),u.modalWindow.removeEventListener("click",l)}function l(e){e.target.classList.contains("footer__backdrop")&&c()}function f(e){"Escape"===e.key&&c()}u.openModal.addEventListener("click",(function(){document.body.classList.add("modal-open"),"uk"===localStorage.getItem("localLang")?(0,s.footerModalUa)():(0,s.footerModalEn)();u.modalWindow.classList.remove("is-hidden"),document.addEventListener("keydown",f),u.modalWindow.addEventListener("click",l)})),u.closeModal.addEventListener("click",c);var d=[].slice.call(document.querySelectorAll("li"),0),h={0:"top",1:"right",2:"bottom",3:"left"},p=["in","out"].map((function(e){return Object.values(h).map((function(t){return"".concat(e,"-").concat(t)}))})).reduce((function(e,t){return e.concat(t)})),v=function(){"use strict";function e(r){var i=this;t(n)(this,e),this.element=r,this.element.addEventListener("mouseover",(function(e){return i.update(e,"in")})),this.element.addEventListener("mouseout",(function(e){return i.update(e,"out")}))}return t(i)(e,[{key:"update",value:function(e,r){var n;(n=this.element.classList).remove.apply(n,t(a)(p)),this.element.classList.add("".concat(r,"-").concat(h[function(e,t){var r=t.getBoundingClientRect(),n=r.width,i=r.height,o=r.top,a=r.left,s=e.pageX-(a+window.pageXOffset)-n/2*(n>i?i/n:1),u=e.pageY-(o+window.pageYOffset)-i/2*(i>n?n/i:1);return Math.round(Math.atan2(u,s)/1.57079633+5)%4}(e,this.element)]))}}]),e}();d.forEach((function(e){return new v(e)}))})),o.register("aAeQa",(function(t,r){e(t.exports,"footerModalUa",(function(){return A})),e(t.exports,"footerModalEn",(function(){return L}));var n=document.querySelector(".footer-modal__title"),i=document.querySelector("#mKuzich"),o=document.querySelector("#mKuzichInfo"),a=document.querySelector("#mKuzichRole"),s=document.querySelector("#iZhuk"),u=document.querySelector("#iZhukInfo"),c=document.querySelector("#iZhukRole"),l=document.querySelector("#oHlushenkova"),f=document.querySelector("#oHlushenkovaInfo"),d=document.querySelector("#oHlushenkovaRole"),h=document.querySelector("#vDianov"),p=document.querySelector("#vDianovInfo"),v=document.querySelector("#vDianovRole"),m=document.querySelector("#nKukharenko"),g=document.querySelector("#nKukharenkoInfo"),y=document.querySelector("#nKukharenkoRole"),b=document.querySelector("#vHorin"),k=document.querySelector("#vHorinInfo"),w=document.querySelector("#vHorinRole"),x=document.querySelector("#mChecheneva"),_=document.querySelector("#mChechenevaInfo"),E=document.querySelector("#mChechenevaRole"),I=document.querySelector("#oZnak"),S=document.querySelector("#oZnakInfo"),T=document.querySelector("#oZnakRole"),O=document.querySelector("#yZakrevskaya"),C=document.querySelector("#yZakrevskayaInfo"),R=document.querySelector("#yZakrevskayaRole");function A(){n.textContent="Наша команда",i.textContent="Михайло Кузіч",o.textContent="Реєстрація/автентифікація, моди входу та реєстрації, меню користувача, розділ бібліотеки, вибірка жанрів API",a.textContent="Лідер команди",s.textContent="Ірина Жук",c.textContent="SCRUM  майстер",u.textContent="Адаптивна верстка хедера для головної/моя бібліотека сторінок. Запит для пошуку фільмів на головній сторінці. Створення заглушки",l.textContent="Олеся Глушенкова",f.textContent="Макет шаблону картки з фільмом. Стилі для тексту футера картки (назва, жанри та рік випуску)",d.textContent="Розробник",h.textContent="Віталій Діанов",p.textContent="Модальне вікно для картки фільму. Реалізація БД через локальне сховище. Логіка додавання в БД. Темна тема сайту",v.textContent="Розробник",m.textContent="Неджат Кухаренко",g.textContent='Пагінація сторінок "ДОМАШНЯ" та "МОЯ БІБЛІОТЕКА". Рендер частини фільмів на сторінках',y.textContent="Розробник",b.textContent="Володимир Горін",k.textContent="Розмітка популярних фільмів із селектором часового вікна та двомовною підтримкою. Кнопка ↑ ",w.textContent="Розробник",x.textContent="Марина Чеченєва",_.textContent="Прелоадер проекту, лоадери: реєстрації та входу в модальні вікна, під час пошуку",E.textContent="Розробник",I.textContent="Орест Знак",S.textContent="Реалізована двомовна версія EN/UK. Переклад маркування та повідомлення про помилку",T.textContent="Розробник",O.textContent="Іванна Гуменюк",C.textContent=" Адаптивна верстка футера. Модалка з інформацією про нашу команду. Анімація, оформлюючі ефекти модалок. Основи СЕО",R.textContent="Розробник"}function L(){n.textContent="Our Team",i.textContent="Mykhailo Kuzich",o.textContent="Registration/authentication, login and signup modals, user menu, library section, api genres fetching",a.textContent="Team Lead",s.textContent="Iryna Zhuk",c.textContent="Scrum - Maste",u.textContent="Adaptive header layout for main and my library pages. Realized the query for a film search on the home page",l.textContent="Olesia Hlushenkova",f.textContent="One movie card template layout. Designed styles for the card footer text (movie titles, genres, and year of release)",d.textContent="Developer",h.textContent="Vitaliy Dianov",p.textContent="Modal window for a movie card.DB implementation through localStor.The logic of adding to the DB.Dark theme",v.textContent="Developer",m.textContent="Nedzhat Kukharenko",g.textContent="Home page and library page pagination. Drawing the appropriate part of the movies to each page",y.textContent="Developer",b.textContent="Volodymyr Horin",k.textContent='Trending movies markup, with time window selector and bilingual support. "Scroll to top button"',w.textContent="Developer",x.textContent="Maryna Checheneva",_.textContent=" Preloader for the project, loaders for registration and login modal windows, loader while searching movies",E.textContent="Developer",I.textContent="Orest Znak",S.textContent="Switch for languages EN and UK. Translation of the error message under the input on page. Translation of markings",T.textContent="Developer",O.textContent="Yana Zakrevskaya",C.textContent="Adaptive footer layout. Footer modal layout with information about our team. Animation and some effects",R.textContent="Developer"}})),o.register("1Gwk9",(function(e,t){var r=o("hGhfO");o("3SEMc");var n=o("ewipB"),i=o("jSiUv"),a=o("gXYlT"),s=null,u=(0,n.n)();(0,n.v)(u,(function(e){e&&(s=e.uid)})),document.querySelector(".random-finder__btn").addEventListener("click",(function(){var e=Math.round(100*Math.random())||1,t=localStorage.getItem("localLang");(0,a.fetchTrendingMovies)("day",e,t).then((function(e){var t=e.data,r=Math.round(20*Math.random())||1;!function(e){document.body.classList.add("modal-open"),d.addEventListener("click",p),document.addEventListener("keydown",v),l.addEventListener("click",m),l.classList.remove("is-hidden");var t=Number(e.id),r={};h(e);var o=document.querySelector(".modal-buttons");s&&(JSON.parse(localStorage.getItem(s))||(b(g(o)),localStorage.setItem(s,JSON.stringify(r))));function a(r){var i=r.target.dataset.action;(0,n.v)(u,(function(r){if(!r)return f(s);y(e,i),k(t)}))}function f(e){if(!e)return c.checked?(0,i.notificationLaunch)("Будь ласка, зареєструйтеся або увійдіть для користування бібліотекою"):(0,i.notificationLaunch)("Please register or login to use the library")}function y(e,t){if((r=JSON.parse(localStorage.getItem(s)))[t].some((function(t){return t.id===e.id})))return r[t]=w(r,e.id,t),void localStorage.setItem(s,JSON.stringify(r));r[t].push(e),localStorage.setItem(s,JSON.stringify(r))}function b(e){e.map((function(e){r[e.dataset.action]=[]}))}function k(e){(0,n.v)(u,(function(t){if(t){s=t.uid;var r=JSON.parse(localStorage.getItem(s));g(o).map((function(t){var n=t.dataset.action,i=!0,o=!1,a=void 0;if(0!==(r=JSON.parse(localStorage.getItem(s)))[n].length)try{for(var u,l=r[n][Symbol.iterator]();!(i=(u=l.next()).done);i=!0){if(u.value.id===e)return void(c.checked?(t.textContent="Видалити з ".concat(t.dataset.lang),t.classList.replace("modal-button","modal-button--active")):(t.textContent="Remove from ".concat(n),t.classList.replace("modal-button","modal-button--active")));c.checked?(t.textContent="Додати до ".concat(t.dataset.lang),t.classList.replace("modal-button--active","modal-button")):(t.textContent="Add to ".concat(n),t.classList.replace("modal-button--active","modal-button"))}}catch(e){o=!0,a=e}finally{try{i||null==l.return||l.return()}finally{if(o)throw a}}else c.checked?(t.textContent="Додати до ".concat(t.dataset.lang),t.classList.replace("modal-button--active","modal-button")):(t.textContent="Add to ".concat(n),t.classList.replace("modal-button--active","modal-button"))}))}}))}function w(e,t,r){return e[r].filter((function(e){return e.id!==t}))}o.addEventListener("click",a),k(t)}(t.results[r])})).catch((function(e){(0,i.notificationLaunch)(e.message)}))}));var c=document.querySelector("#checkbox"),l=document.querySelector("[data-film-modal]"),f=document.querySelector(".modal-card"),d=document.querySelector(".modal-close");function h(e){return f.insertAdjacentHTML("beforeend",(0,r.createMarkupModal)(e))}function p(){document.body.classList.remove("modal-open"),d.removeEventListener("click",p),document.removeEventListener("keydown",v),l.removeEventListener("click",m),l.classList.add("is-hidden"),f.lastChild.remove()}function v(e){"Escape"===e.key&&p()}function m(e){e.target.classList.contains("backdrop")&&p()}function g(e){return Array.from(e.children)}document.querySelector(".list-films").addEventListener("click",(function(e){if(!e.target.closest("li"))return;document.body.classList.add("modal-open");var t={};d.addEventListener("click",p),document.addEventListener("keydown",v),l.addEventListener("click",m),l.classList.remove("is-hidden");var r=Number(e.target.closest("li").dataset.id),o=JSON.parse(localStorage.getItem("downloadedMovies"));!function(){if(document.querySelector(".btn-container")){var e=JSON.parse(localStorage.getItem("".concat(s)));o=document.querySelector(".library-active-btn[data-watched-btn]")?e.watched:e.queue}}();var a=o.find((function(e){return e.id===r}));h(a);var f=document.querySelector(".modal-buttons");s&&(JSON.parse(localStorage.getItem(s))||(g(f).map((function(e){t[e.dataset.action]=[]})),localStorage.setItem(s,JSON.stringify(t))));function y(e){(0,n.v)(u,(function(t){if(t){s=t.uid;var r=JSON.parse(localStorage.getItem(s));g(f).map((function(t){var n=t.dataset.action,i=!0,o=!1,a=void 0;if(0!==(r=JSON.parse(localStorage.getItem(s)))[n].length)try{for(var u,l=r[n][Symbol.iterator]();!(i=(u=l.next()).done);i=!0){if(u.value.id===e)return void(c.checked?(t.textContent="Видалити з ".concat(t.dataset.lang),t.classList.replace("modal-button","modal-button--active")):(t.textContent="Remove from ".concat(n),t.classList.replace("modal-button","modal-button--active")));c.checked?(t.textContent="Додати до ".concat(t.dataset.lang),t.classList.replace("modal-button--active","modal-button")):(t.textContent="Add to ".concat(n),t.classList.replace("modal-button--active","modal-button"))}}catch(e){o=!0,a=e}finally{try{i||null==l.return||l.return()}finally{if(o)throw a}}else c.checked?(t.textContent="Додати до ".concat(t.dataset.lang),t.classList.replace("modal-button--active","modal-button")):(t.textContent="Add to ".concat(n),t.classList.replace("modal-button--active","modal-button"))}))}}))}f.addEventListener("click",(function(e){var o=e.target.dataset.action;(0,n.v)(u,(function(e){if(!e)return function(e){if(!e)return c.checked?(0,i.notificationLaunch)("Будь ласка, зареєструйтеся або увійдіть для користування бібліотекою"):(0,i.notificationLaunch)("Please register or login to use the library")}(s);!function(e,r){if((t=JSON.parse(localStorage.getItem(s)))[r].some((function(t){return t.id===e.id})))return t[r]=function(e,t,r){return e[r].filter((function(e){return e.id!==t}))}(t,e.id,r),void localStorage.setItem(s,JSON.stringify(t));t[r].push(e),localStorage.setItem(s,JSON.stringify(t))}(a,o),y(r)}))})),y(r)}))})),o.register("hGhfO",(function(t,r){e(t.exports,"createMarkupModal",(function(){return a}));var n=o("hsNhQ"),i=document.querySelector("#checkbox");function a(e){var t=e.original_title,r=e.title,o=e.vote_average,a=e.vote_count,s=e.popularity,u=e.overview,c=e.poster_path,l=e.genre_ids;return i.checked?'<section class="modal-content">\n    <div class="modal-thumb">\n      <img\n        class="modal-thumb__img"\n        src="https://image.tmdb.org/t/p/original/'.concat(c,'"\n        alt="').concat(r,'"\n      />\n    </div>\n    <div class="modal-description">\n      <h2 class="modal-description__title">').concat(r,'</h2>\n      <table class="modal-description__info-block">\n        <tbody>\n          <tr>\n            <td class="info-block__keys">Голос /К-сть голосів</td>\n            <td class="info-block__values">\n              <span class="info-block__values--orange">').concat(o.toFixed(1),'</span> /\n              <span class="info-block__values--gray">').concat(a,'</span>\n            </td>\n          </tr>\n          <tr>\n            <td class="info-block__keys">Популярність</td>\n            <td class="info-block__values">').concat(s.toFixed(1),'</td>\n          </tr>\n          <tr>\n            <td class="info-block__keys">Оригінальна назва</td>\n            <td class="info-block__values--uppercase">').concat(t,'</td>\n          </tr>\n          <tr>\n            <td class="info-block__keys">Жанри</td>\n            <td class="info-block__values">').concat((0,n.moviesGenresConvertation)(l).join(", "),'</td>\n          </tr>\n        </tbody>\n      </table>\n      <p class="modal-description__about-title">Опис</p>\n      <p class="modal-description__about">\n        ').concat(u,'\n      </p>\n      <div class="modal-buttons">\n        <button class="modal-button" data-lang="переглянутих" data-action="watched" >Додати до  переглянутих</button>\n        <button class="modal-button" data-lang="черги" data-action="queue" >Додати до черги</button>\n      </div>\n    </div>\n  </section>'):'<section class="modal-content">\n    <div class="modal-thumb">\n      <img\n        class="modal-thumb__img"\n        src="https://image.tmdb.org/t/p/original/'.concat(c,'"\n        alt="').concat(r,'"\n      />\n    </div>\n    <div class="modal-description">\n      <h2 class="modal-description__title">').concat(r,'</h2>\n      <table class="modal-description__info-block">\n        <tbody>\n          <tr>\n            <td class="info-block__keys">Vote / Votes</td>\n            <td class="info-block__values">\n              <span class="info-block__values--orange">').concat(o.toFixed(1),'</span> /\n              <span class="info-block__values--gray">').concat(a,'</span>\n            </td>\n          </tr>\n          <tr>\n            <td class="info-block__keys">Popularity</td>\n            <td class="info-block__values">').concat(s.toFixed(1),'</td>\n          </tr>\n          <tr>\n            <td class="info-block__keys">Original title</td>\n            <td class="info-block__values--uppercase">').concat(t,'</td>\n          </tr>\n          <tr>\n            <td class="info-block__keys">Genres</td>\n            <td class="info-block__values">').concat((0,n.moviesGenresConvertation)(l).join(", "),'</td>\n          </tr>\n        </tbody>\n      </table>\n      <p class="modal-description__about-title">about</p>\n      <p class="modal-description__about">\n        ').concat(u,'\n      </p>\n      <div class="modal-buttons">\n        <button class="modal-button" data-action="watched" >Add to watched</button>\n        <button class="modal-button" data-action="queue" >Add to queue</button> \x3c!--  --\x3e\n      </div>\n    </div>\n  </section>')}})),o.register("2Z7mb",(function(e,t){var r=document.querySelector("html"),n=document.querySelector(".theme-toggler");"dark"===localStorage.getItem("theme")?(n.classList.add("dark"),r.classList.add("dark")):(n.classList.remove("dark"),r.classList.remove("dark")),n.addEventListener("click",(function(){"dark"===localStorage.getItem("theme")?(localStorage.removeItem("theme"),n.classList.remove("dark"),r.classList.remove("dark")):(localStorage.setItem("theme","dark"),n.classList.add("dark"),r.classList.add("dark"))}))}))}();
//# sourceMappingURL=index.fa4aedf9.js.map
