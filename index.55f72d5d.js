!function(n){var t={};function e(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=n,e.c=t,e.d=function(n,t,r){e.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:r})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,t){if(1&t&&(n=e(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var o in n)e.d(r,o,function(t){return n[t]}.bind(null,o));return r},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="",e(e.s=0)}([function(n,t,e){"use strict";e.r(t);e(1);function r(n,t){var e;if("undefined"==typeof Symbol||null==n[Symbol.iterator]){if(Array.isArray(n)||(e=function(n,t){if(!n)return;if("string"==typeof n)return o(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);"Object"===e&&n.constructor&&(e=n.constructor.name);if("Map"===e||"Set"===e)return Array.from(n);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return o(n,t)}(n))||t&&n&&"number"==typeof n.length){e&&(n=e);var r=0,c=function(){};return{s:c,n:function(){return r>=n.length?{done:!0}:{done:!1,value:n[r++]}},e:function(n){throw n},f:c}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,l=!1;return{s:function(){e=n[Symbol.iterator]()},n:function(){var n=e.next();return a=n.done,n},e:function(n){l=!0,i=n},f:function(){try{a||null==e.return||e.return()}finally{if(l)throw i}}}}function o(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}var c=document.querySelector(".my-projects__grid--js");fetch("https://api.github.com/users/tomekgasowski/repos").then((function(n){return n.json()})).then((function(n){var t,e=r(n);try{for(e.s();!(t=e.n()).done;){var o=t.value,i=o.name,a=o.description,l=o.html_url,u=o.homepage;a&&(console.log("".concat(i,", ").concat(a,", ").concat(l,", ").concat(u)),c.innerHTML+='<div class="project__container">\n            <div class="project__top-border">\n              <div class="project__dot"></div>\n              <div class="project__dot"></div>\n              <div class="project__dot"></div>\n            </div>\n\n            <article class="project">\n              <img\n                src="../assets/img/github.svg"\n                alt="github icon"\n                class="project__icon"\n              />\n              <div class="project__grid">\n                <p class="left-column">project:</p>\n                <p class="project__name project__name--js right-column">\n                  '.concat(i,'\n                </p>\n\n                <p class="left-column">description:</p>\n                <p\n                  class="right-column project__description project__description--js"\n                >\n                ').concat(a,'\n                </p>\n                <p class="left-column">demo:</p>\n                <p class="right-column">\n                  &lt <a href="').concat(u,'" class="project__link">see here</a> &gt\n                </p>\n\n                <p class="left-column">github:</p>\n                <p class="right-column">\n                  &lt <a href="').concat(l,'" class="project__link">source code</a> &gt\n                </p>\n              </div>\n            </article>\n          </div>'))}}catch(n){e.e(n)}finally{e.f()}}))},function(n,t,e){}]);