(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>c});var r=t(81),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([n.id,"* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: 'Ubuntu', sans-serif;\n}\n\nbody {\n    background-color: #F2F2F2;\n}\n\nheader {\n    height: 80px;\n    display: flex;\n    align-items: center;\n    border-bottom: 1px solid #868686;\n    background-color: #F2F2F2;\n}\n\nnav {\n    margin: 0 auto;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\nnav div {\n    margin-right: 150px;\n}\n\nnav div h4{\n    font-weight: 300;\n    color:#373737;\n    cursor: pointer;\n}\n\nnav div h4:hover {\n    color: #868686;\n}\n\nnav div:last-of-type {\n    margin-right: 0;\n}\n\n.container {\n    margin: 0 auto;\n    max-width: 1000px;\n    display: flex;\n    height: 85vh;\n}\n\n.title-container {\n    padding: 30px;\n    width: 50%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n}\n\n.title-container h1 {\n    font-size: 3rem;\n    font-weight: 300;\n    color: #373737;\n    margin-bottom: 30px;\n} \n\n.title-container h3 {\n    font-size: 1.2rem;\n    font-weight: 300;\n    line-height: 30px;\n    color: #A6A6A6;\n}\n\n.image-container-cta {\n    height: 500px;\n    background-color: #FFF;\n    border-radius: 10px;\n    box-shadow: 0px 10px 10px #B2B2B2;\n    width: 100%;\n    cursor: pointer;\n}\n\n.image-menu-container {\n    padding: 30px;\n    width: 50%;\n    display: flex;\n    align-items: center;\n}\n\n.background-image {\n    display: block;\n    margin: 0 auto;\n    height: 100%;\n}\n\nfooter {\n    text-align: center;\n}\n\nfooter h4 {\n    font-weight: 300;\n    height: 50px;\n    border-top: 1px solid #868686;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: #F2F2F2;\n}\n",""]);const c=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],c=0;c<n.length;c++){var s=n[c],d=r.base?s[0]+r.base:s[0],l=a[d]||0,u="".concat(d," ").concat(l);a[d]=l+1;var p=t(u),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var h=o(f,r);r.byIndex=c,e.splice(c,0,{identifier:u,updater:h,references:1})}i.push(u)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var s=r(n,o),d=0;d<a.length;d++){var l=t(a[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=s}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");r.length&&(n=r[r.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),(()=>{var n=t(379),e=t.n(n),r=t(795),o=t.n(r),a=t(569),i=t.n(a),c=t(565),s=t.n(c),d=t(216),l=t.n(d),u=t(589),p=t.n(u),f=t(426),h={};h.styleTagTransform=p(),h.setAttributes=s(),h.insert=i().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=l(),e()(f.Z,h),f.Z&&f.Z.locals&&f.Z.locals;const m=t.p+"6ed9e08897a06a19cef2.png",g=t.p+"82f5dcbc6dce42bae08e.png";document.querySelector("body").style.cssText=`background-image: url("${g}");\nbackground-size: 100%`,function(){const n=document.createElement("div");n.classList.add("container");const e=document.createElement("div");e.classList.add("title-container"),e.innerHTML='<h1 class="title">C\'è pasta per tutti</h1><h3>We have been serving traditional recipes, made with local ingredients, since 1939</h3>';const t=document.createElement("div");t.classList.add("image-menu-container");const r=document.createElement("div");r.classList.add("image-container-cta");const o=new Image;o.src=m,o.classList.add("background-image"),r.append(o),t.append(r),document.getElementById("content").append(n),n.append(e),e.after(t)}()})()})();