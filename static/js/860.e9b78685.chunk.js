/*! For license information please see 860.e9b78685.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunktweets_app=self.webpackChunktweets_app||[]).push([[860],{860:function(t,e,r){r.r(e),r.d(e,{default:function(){return P}});var n=r(439),o=r(791),a=r(142);function i(t,e,r){return(e=(0,a.Z)(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}var u=r(2);function l(){l=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(J){s=function(t,e,r){return t[e]=r}}function f(t,e,r,o){var a=e&&e.prototype instanceof d?e:d,i=Object.create(a.prototype),c=new Z(o||[]);return n(i,"_invoke",{value:b(t,r,c)}),i}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(J){return{type:"throw",arg:J}}}t.wrap=f;var p={};function d(){}function v(){}function y(){}var g={};s(g,a,(function(){return this}));var m=Object.getPrototypeOf,w=m&&m(m(N([])));w&&w!==e&&r.call(w,a)&&(g=w);var x=y.prototype=d.prototype=Object.create(g);function j(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function L(t,e){function o(n,a,i,c){var l=h(t[n],t,a);if("throw"!==l.type){var s=l.arg,f=s.value;return f&&"object"==(0,u.Z)(f)&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){o("next",t,i,c)}),(function(t){o("throw",t,i,c)})):e.resolve(f).then((function(t){s.value=t,i(s)}),(function(t){return o("throw",t,i,c)}))}c(l.arg)}var a;n(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return a=a?a.then(n,n):n()}})}function b(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return O()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=S(i,r);if(c){if(c===p)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=h(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===p)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function S(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,S(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),p;var o=h(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,p;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,p):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function A(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function C(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function Z(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(A,this),this.reset(!0)}function N(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:O}}function O(){return{value:void 0,done:!0}}return v.prototype=y,n(x,"constructor",{value:y,configurable:!0}),n(y,"constructor",{value:v,configurable:!0}),v.displayName=s(y,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,s(t,c,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},j(L.prototype),s(L.prototype,i,(function(){return this})),t.AsyncIterator=L,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new L(f(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},j(x),s(x,c,"Generator"),s(x,a,(function(){return this})),s(x,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=N,Z.prototype={constructor:Z,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(C),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,p):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),C(r),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;C(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:N(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),p}},t}var s=r(433);function f(t,e,r,n,o,a,i){try{var c=t[a](i),u=c.value}catch(l){return void r(l)}c.done?e(u):Promise.resolve(u).then(n,o)}var h=r(703),p="Card_container__v992u",d="Card_wrapper__apz5t",v="Card_btn__2Xj3g",y="Card_btnColor__TTs6+",g="Card_textCount__+jEZD",m="Card_line__e9z7g",w="Card_circle__LJVpk",x="Card_ellipse__Rnm+e",j="Card_avatar__ZrEbt",L="Card_bgImg__yFwSd",b="Card_logo__xQKpv",S=r(184),A=function(t){var e=t.id,r=t.tweets,a=t.avatar,i=void 0===a?"data:image/png;base64,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":a,c=(0,o.useState)(100500),u=(0,n.Z)(c,2),l=u[0],s=u[1],f=(0,o.useState)(!1),A=(0,n.Z)(f,2),C=A[0],Z=A[1];(0,o.useEffect)((function(){var t=localStorage.getItem("tweets");if(t){var r=JSON.parse(t).find((function(t){return t.id===e}));r&&(Z(r.followings),s(r.followers))}}),[e]),(0,o.useEffect)((function(){var t=localStorage.getItem("tweets"),n=t?JSON.parse(t):[],o=n.findIndex((function(t){return t.id===e})),a={id:e,tweets:r,avatar:i,followers:l,followings:C};-1!==o?n[o]=a:n.push(a),localStorage.setItem("tweets",JSON.stringify(n))}),[e,r,i,l,C]);return(0,S.jsxs)("li",{className:p,children:[(0,S.jsx)("img",{className:b,src:h.Z,alt:"logo",width:76,height:22}),(0,S.jsx)("div",{className:L}),(0,S.jsxs)("div",{className:m,children:[(0,S.jsx)("div",{className:w}),(0,S.jsx)("div",{className:x}),(0,S.jsx)("img",{className:j,src:i,alt:"avatar",width:64,height:64})]}),(0,S.jsxs)("div",{className:d,children:[(0,S.jsx)("p",{className:g,children:"".concat(r," Tweets")}),(0,S.jsx)("p",{className:g,children:"".concat(l.toLocaleString("en-EN")," Followers")}),(0,S.jsx)("button",{className:"".concat(v," ").concat(C?y:""),onClick:function(){Z(!C),s(C?l-1:l+1)},children:C?"Following":"Follow"})]})]})},C=r(778),Z="CardList_cardList__QdYv5",N="CardList_container__nv1+l",O="CardList_loadMore__fCc43",J=function(t){var e=t.filteredCards,r=(0,o.useState)([]),a=(0,n.Z)(r,2),u=a[0],h=a[1],p=(0,o.useState)(""),d=(0,n.Z)(p,2),v=d[0],y=d[1],g=(0,o.useState)(!0),m=(0,n.Z)(g,2),w=m[0],x=m[1],j=(0,o.useState)(1),L=(0,n.Z)(j,2),b=L[0],J=L[1],T=(0,o.useState)(3),P=(0,n.Z)(T,2),R=P[0],X=P[1],k=(0,o.useState)(!0),E=(0,n.Z)(k,2),H=E[0],z=E[1];(0,o.useEffect)((function(){var t=function(){var t,e=(t=l().mark((function t(){var e,r;return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat("https://63caa4aa4f53a0042027c558.mockapi.io/tweets","?page=").concat(b,"&limit=").concat(R));case 3:return e=t.sent,t.next=6,e.json();case 6:r=t.sent,h((function(t){return[].concat((0,s.Z)(t),(0,s.Z)(r))})),r.length<R&&z(!1),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),y(t.t0.message);case 14:x(!1);case 15:case"end":return t.stop()}}),t,null,[[0,11]])})),function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function i(t){f(a,n,o,i,c,"next",t)}function c(t){f(a,n,o,i,c,"throw",t)}i(void 0)}))});return function(){return e.apply(this,arguments)}}();t()}),[b,R]);return v?(0,S.jsxs)("p",{children:["Error: ",v]}):(console.log("filteredCards->",e),(0,S.jsxs)("main",{children:[(0,S.jsx)("ul",{className:Z,children:w?(0,S.jsx)(C.Z,{}):u.map((function(t){return(0,S.jsx)(A,function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(Object(r),!0).forEach((function(e){i(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({},t),t.id)}))}),(0,S.jsxs)("div",{className:N,children:[!w&&H&&(0,S.jsx)("button",{className:O,onClick:function(){J((function(t){return t+1})),X(6)},children:"Load More"}),!w&&!H&&(0,S.jsx)("p",{className:O,children:"There are no more cards"})]})]}))},T="TweetsPage_container__WE9Zo",P=function(){var t=(0,o.useState)("showAll"),e=(0,n.Z)(t,2),r=e[0],a=e[1],i=localStorage.getItem("tweets"),c=(i?JSON.parse(i):[]).filter((function(t){return"showAll"===r||("follow"===r?!t.followings:"followings"===r&&t.followings)}));return(0,S.jsx)("div",{className:T,children:(0,S.jsx)(J,{filter:r,onFilterChange:function(t){a(t.target.value)},filteredCards:c})})}}}]);
//# sourceMappingURL=860.e9b78685.chunk.js.map