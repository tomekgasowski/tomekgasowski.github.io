!function(n){var t={};function e(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=n,e.c=t,e.d=function(n,t,r){e.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:r})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,t){if(1&t&&(n=e(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var o in n)e.d(r,o,function(t){return n[t]}.bind(null,o));return r},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="",e(e.s=0)}([function(n,t,e){"use strict";e.r(t);e(1);function r(n,t){var e;if("undefined"==typeof Symbol||null==n[Symbol.iterator]){if(Array.isArray(n)||(e=function(n,t){if(!n)return;if("string"==typeof n)return o(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);"Object"===e&&n.constructor&&(e=n.constructor.name);if("Map"===e||"Set"===e)return Array.from(n);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return o(n,t)}(n))||t&&n&&"number"==typeof n.length){e&&(n=e);var r=0,c=function(){};return{s:c,n:function(){return r>=n.length?{done:!0}:{done:!1,value:n[r++]}},e:function(n){throw n},f:c}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,l=!0,a=!1;return{s:function(){e=n[Symbol.iterator]()},n:function(){var n=e.next();return l=n.done,n},e:function(n){a=!0,i=n},f:function(){try{l||null==e.return||e.return()}finally{if(a)throw i}}}}function o(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}var c=document.querySelector(".my-projects__grid--js");fetch("https://api.github.com/users/tomekgasowski/repos").then((function(n){return n.json()})).then((function(n){var t,e=r(n);try{for(e.s();!(t=e.n()).done;){var o=t.value,i=o.name,l=o.description,a=o.html_url,u=o.homepage;l&&(console.log("".concat(i,", ").concat(l,", ").concat(a,", ").concat(u)),c.innerHTML+='<div class="project__container">\n            <div class="project__top-border">\n              <div class="project__dot"></div>\n              <div class="project__dot"></div>\n              <div class="project__dot"></div>\n            </div>\n\n            <article class="project">\n            <svg class="project__icon" width="24" height="24" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">\n            <path d="M10.9906 0.787476C5.19453 0.785133 0.5 5.47732 0.5 11.2687C0.5 15.8484 3.43672 19.7414 7.52656 21.1711C8.07734 21.3094 7.99297 20.9179 7.99297 20.6508V18.8344C4.8125 19.207 4.68359 17.1023 4.47031 16.7508C4.03906 16.0148 3.01953 15.8273 3.32422 15.4758C4.04844 15.1031 4.78672 15.5695 5.64219 16.8328C6.26094 17.7492 7.46797 17.5945 8.07969 17.4422C8.21328 16.8914 8.49922 16.3992 8.89297 16.0172C5.59766 15.4265 4.22422 13.4156 4.22422 11.025C4.22422 9.86482 4.60625 8.79841 5.35625 7.93826C4.87812 6.52029 5.40078 5.30623 5.47109 5.12576C6.83281 5.00388 8.24844 6.10076 8.35859 6.18748C9.13203 5.97888 10.0156 5.86873 11.0047 5.86873C11.9984 5.86873 12.8844 5.98357 13.6648 6.19451C13.9297 5.99295 15.2422 5.05076 16.5078 5.1656C16.5758 5.34607 17.0867 6.53201 16.6367 7.93123C17.3961 8.79373 17.7828 9.86951 17.7828 11.032C17.7828 13.4273 16.4 15.4406 13.0953 16.0219C13.3784 16.3002 13.6031 16.6322 13.7564 16.9984C13.9098 17.3646 13.9886 17.7577 13.9883 18.1547V20.7914C14.007 21.0023 13.9883 21.2109 14.3398 21.2109C18.4906 19.8117 21.4789 15.8906 21.4789 11.2711C21.4789 5.47732 16.782 0.787476 10.9906 0.787476Z" fill="white"/>\n            </svg>\n            \n              <div class="project__grid">\n                <p class="left-column">project:</p>\n                <p class="project__name project__name--js right-column">\n                  '.concat(i,'\n                </p>\n\n                <p class="left-column">description:</p>\n                <p\n                  class="right-column project__description project__description--js"\n                >\n                ').concat(l,'\n                </p>\n                <p class="left-column">demo:</p>\n                <p class="right-column">\n                  &lt <a href="').concat(u,'" class="project__link">see here</a> &gt\n                </p>\n\n                <p class="left-column">github:</p>\n                <p class="right-column">\n                  &lt <a href="').concat(a,'" class="project__link">source code</a> &gt\n                </p>\n              </div>\n            </article>\n          </div>'))}}catch(n){e.e(n)}finally{e.f()}})).catch((function(n){console.log("error")}))},function(n,t,e){}]);