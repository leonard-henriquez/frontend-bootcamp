!function(n){var t={};function e(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return n[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}e.m=n,e.c=t,e.d=function(n,t,o){e.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:o})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,t){if(1&t&&(n=e(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var o=Object.create(null);if(e.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var r in n)e.d(o,r,function(t){return n[t]}.bind(null,r));return o},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="",e(e.s=125)}({125:function(n,t,e){"use strict";e.r(t);var o,r=(o=function(n,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var e in t)t.hasOwnProperty(e)&&(n[e]=t[e])})(n,t)},function(n,t){function e(){this.constructor=n}o(n,t),n.prototype=null===t?Object.create(t):(e.prototype=t.prototype,new e)}),l=function(){return function(){}}();(function(n){function t(){return null!==n&&n.apply(this,arguments)||this}r(t,n)})(l),function(n){function t(){return null!==n&&n.apply(this,arguments)||this}r(t,n)}(l);new(function(){return function(n,t){this.make=n,this.model=t}}())("Honda","Accord");var u={hello:"world"},c=function(){return function(){this.hello="world"}}();console.log(5),console.log(5),console.log(5),console.log(u),console.log(10),console.log(5),console.log(5),console.log(u),console.log(10),console.log(true),console.log((new c).hello),console.log((new c).hello);var i=function(){function n(){this.data=[]}return n.prototype.push=function(n){this.data.push(n)},n.prototype.pop=function(){return this.data.pop()},n}();new i,new i;var a=function(n,t,e,o){return new(e||(e=Promise))(function(r,l){function u(n){try{i(o.next(n))}catch(n){l(n)}}function c(n){try{i(o.throw(n))}catch(n){l(n)}}function i(n){n.done?r(n.value):new e(function(t){t(n.value)}).then(u,c)}i((o=o.apply(n,t||[])).next())})},f=function(n,t){var e,o,r,l,u={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return l={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(l[Symbol.iterator]=function(){return this}),l;function c(l){return function(c){return function(l){if(e)throw new TypeError("Generator is already executing.");for(;u;)try{if(e=1,o&&(r=2&l[0]?o.return:l[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,l[1])).done)return r;switch(o=0,r&&(l=[2&l[0],r.value]),l[0]){case 0:case 1:r=l;break;case 4:return u.label++,{value:l[1],done:!1};case 5:u.label++,o=l[1],l=[0];continue;case 7:l=u.ops.pop(),u.trys.pop();continue;default:if(!(r=(r=u.trys).length>0&&r[r.length-1])&&(6===l[0]||2===l[0])){u=0;continue}if(3===l[0]&&(!r||l[1]>r[0]&&l[1]<r[3])){u.label=l[1];break}if(6===l[0]&&u.label<r[1]){u.label=r[1],r=l;break}if(r&&u.label<r[2]){u.label=r[2],u.ops.push(l);break}r[2]&&u.ops.pop(),u.trys.pop();continue}l=t.call(n,u)}catch(n){l=[6,n],o=0}finally{e=r=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,c])}}};(function(){return a(this,void 0,void 0,function(){return f(this,function(n){switch(n.label){case 0:return[4,fetch("http://localhost:3000/hello")];case 1:return[4,n.sent().text()];case 2:return[2,n.sent()]}})})})().then(function(n){console.log("hello "+n)});var s=function(){return(s=Object.assign||function(n){for(var t,e=1,o=arguments.length;e<o;e++)for(var r in t=arguments[e])Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}).apply(this,arguments)},p=[1,2,3,4],h=p[0],y=p[1],d=p.slice(2);console.log(h,y,d);var b=[1,2];b=b.concat([3,4]),console.log(b);s({},{x:1,y:2},{z:3}),s({},{x:1},{y:2}).x}});
//# sourceMappingURL=demo.js.map