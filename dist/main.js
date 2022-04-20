(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>c});var a=t(81),i=t.n(a),o=t(645),r=t.n(o)()(i());r.push([n.id,"* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: 'Ubuntu', sans-serif;\n}\n\nbody {\n    background-color: #000;\n}\n\n.image-background {\n    padding: 0 30px;\n}\n\nheader {\n    height: 80px;\n    display: flex;\n    align-items: center;\n    border-bottom: 1px solid #868686;\n    background-color: rgba(0, 0, 0, 0.5)\n}\n\nnav {\n    margin: 0 auto;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\nnav div {\n    margin-right: 150px;\n}\n\nnav div h4{\n    font-weight: 300;\n    color:#EDEDED;\n    cursor: pointer;\n}\n\nnav div h4:hover {\n    transition: ease-in-out 0.2s;\n    color: #868686;\n}\n\nnav div:last-of-type {\n    margin-right: 0;\n}\n\n.active {\n    border-bottom: 1px solid #EDEDED;\n}\n\n.active:hover {\n    transition: ease-in-out 0.2s;\n    border-bottom: 1px solid #868686;\n}\n\n.container {\n    margin: 0 auto;\n    max-width: 1000px;\n    display: flex;\n    height: 85vh;\n}\n\n.logo-home {\n    width: 50%;\n    margin: 0 auto;\n}\n\n.container-menu {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.container-contact {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.title-container {\n    padding: 30px;\n    width: 50%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n}\n\n.title-menu {\n    margin-top: 50px;\n    text-align: center;\n    margin-bottom: 50px;\n}\n\n.title-contact {\n    margin-top: 50px;\n    text-align: center;\n    margin-bottom: 50px;\n}\n\n.title-container h1 {\n    font-size: 3rem;\n    font-weight: 300;\n    color: #EDEDED;    \n    margin-bottom: 30px;\n} \n\n.title-container h3 {\n    font-size: 1.2rem;\n    font-weight: 300;\n    line-height: 30px;\n    color: #A6A6A6;\n}\n\n.image-container-cta {\n    max-height: 500px;\n    width: 100%;\n    border-radius: 10px;\n}\n\n.image-container-cta img {\n    width: 100%;\n}\n\n.image-menu-container {\n    padding: 30px;\n    width: 50%;\n    display: flex;\n    align-items: center;\n}\n\n.background-image {\n    position: relative;\n    bottom: 0;\n    display: block;\n    margin: 0 auto;\n    height: 100%;\n    border-radius: 10px;\n    transition: ease-in-out 0.2s;\n}\n\n.background-image:hover {\n    bottom: 5px;\n    transition: ease-in-out 0.2s;\n}\n\n.menu-container {\n    display: grid;\n    gap: 30px;\n    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n    margin-bottom: 50px;\n}\n\n.menu-element-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 30px;\n    background-color: rgba(0, 0, 0, 0.7);\n    border-radius: 10px;\n}\n\n.menu-image {\n    display: block;\n    border-radius: 10px;\n    width: 100%;\n    margin-bottom: 20px;\n}\n\n.element-description {\n    color: #EDEDED;\n    font-weight: 300;\n    text-align: center;\n}\n\n.contact-container {\n    width: 100%;\n    max-width: 800px;\n    background-color: rgba(0, 0, 0, 0.7);\n    border-radius: 10px;\n    padding: 30px;\n    margin-bottom: 30px;\n}\n\n.contact-map-image-container {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n}\n\n.telephone-container {\n    display: flex;\n    color: #EDEDED;\n    margin: 0 0 20px 30px;\n}\n\n.telephone-container i {\n    margin-right: 20px;\n}\n\n.adress-container {\n    display: flex;\n    color: #EDEDED;\n    margin: 0 0 20px 30px;\n} \n\n.adress-container i {\n    margin-right: 20px;\n}\n\n.contact-map-image-container img {\n    width: 100%;\n}\n\nfooter {\n    text-align: center;\n    background-color: rgba(0, 0, 0, 0.5)\n}\n\nfooter h4 {\n    font-weight: 300;\n    height: 50px;\n    border-top: 1px solid #868686;\n    color: #EDEDED;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n\n@media screen and (max-width: 710px){\n    .menu-container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n    }\n\n    .container {\n        flex-direction: column;\n        height: auto;\n    }\n\n    .title-container {\n        width: 100%;\n        text-align: center;\n        margin-top: 50px;\n    }\n\n    .image-menu-container {\n        width: 100%;\n        height: auto;\n    }\n\n    .image-container-cta {\n        width: 100%; \n        height: auto;\n    }\n\n    .background-image {\n        width: 100%;\n        height: auto;\n    }\n\n\n\n    .menu-element-container {\n        max-width: 400px;\n    }\n\n    nav {\n        width: 100%;\n        display: flex;\n        justify-content: space-around;\n        align-items: center;\n    }\n\n    nav div {\n        margin-right: 0;\n    }\n}\n",""]);const c=r},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",a=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),a&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),a&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,a,i,o){"string"==typeof n&&(n=[[null,n,void 0]]);var r={};if(a)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(r[s]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);a&&r[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),i&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=i):l[4]="".concat(i)),e.push(l))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,a=0;a<e.length;a++)if(e[a].identifier===n){t=a;break}return t}function a(n,a){for(var o={},r=[],c=0;c<n.length;c++){var s=n[c],d=a.base?s[0]+a.base:s[0],l=o[d]||0,p="".concat(d," ").concat(l);o[d]=l+1;var m=t(p),u={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==m)e[m].references++,e[m].updater(u);else{var g=i(u,a);a.byIndex=c,e.splice(c,0,{identifier:p,updater:g,references:1})}r.push(p)}return r}function i(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,i){var o=a(n=n||[],i=i||{});return function(n){n=n||[];for(var r=0;r<o.length;r++){var c=t(o[r]);e[c].references--}for(var s=a(n,i),d=0;d<o.length;d++){var l=t(o[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}o=s}}},569:n=>{var e={};n.exports=function(n,t){var a=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var a="";t.supports&&(a+="@supports (".concat(t.supports,") {")),t.media&&(a+="@media ".concat(t.media," {"));var i=void 0!==t.layer;i&&(a+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),a+=t.css,i&&(a+="}"),t.media&&(a+="}"),t.supports&&(a+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(a,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(a){var i=e[a];if(void 0!==i)return i.exports;var o=e[a]={id:a,exports:{}};return n[a](o,o.exports,t),o.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var a in e)t.o(e,a)&&!t.o(n,a)&&Object.defineProperty(n,a,{enumerable:!0,get:e[a]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var a=e.getElementsByTagName("script");a.length&&(n=a[a.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),(()=>{var n=t(379),e=t.n(n),a=t(795),i=t.n(a),o=t(569),r=t.n(o),c=t(565),s=t.n(c),d=t(216),l=t.n(d),p=t(589),m=t.n(p),u=t(426),g={};g.styleTagTransform=m(),g.setAttributes=s(),g.insert=r().bind(null,"head"),g.domAPI=i(),g.insertStyleElement=l(),e()(u.Z,g),u.Z&&u.Z.locals&&u.Z.locals;const f=t.p+"b9069b8b37731a1928c9.svg",h=t.p+"2ea7014ecc1d7dc732eb.png";function v(){document.querySelectorAll(".tab-navigation").forEach((n=>{n.firstChild.classList.contains("Home")?n.firstChild.classList.add("active"):n.firstChild.classList.contains("active")&&n.firstChild.classList.remove("active")}));const n=new Image;n.src=f,n.classList.add("logo-home");const e=document.createElement("div");e.classList.add("container");const t=document.createElement("div");t.classList.add("title-container"),t.innerHTML='<h1 class="title">C\'è pasta per tutti</h1><h3>We have been serving traditional recipes, made with local ingredients, since 1939.</h3>',t.prepend(n);const a=document.createElement("div");a.classList.add("image-menu-container");const i=document.createElement("div");i.classList.add("image-container-cta");const o=new Image;o.src=h,o.classList.add("background-image"),i.append(o),a.append(i),document.getElementById("content").append(e),e.append(t),t.after(a)}const x=t.p+"96badfa6f355522620d2.png",b=t.p+"2c46d2daf899129d7828.png",y=t.p+"97b79b20939cc99efd09.png",w=t.p+"ffff7ef7310bc60d2eb1.png",E=t.p+"879e9319ba3f85490902.png",L=t.p+"1a0ce8f1ba1b099c83ca.png",C=t.p+"e71908e20cc70a4c6182.png",k=t.p+"f1eb36beb25a4eebd8e9.png";function D(){document.querySelectorAll(".tab-navigation").forEach((n=>{n.firstChild.classList.contains("Menu")?n.firstChild.classList.add("active"):n.firstChild.classList.contains("active")&&n.firstChild.classList.remove("active")}));const n=document.createElement("div");n.classList.add("container-menu");const e=document.createElement("div");e.classList.add("title-container"),e.classList.add("title-menu"),e.innerHTML="<h1>Menu</h1><h3>Choose the tradition.</h3>";const t=document.createElement("div");t.classList.add("menu-container");const a=new Image;a.src=x;const i=new Image;i.src=b;const o=new Image;o.src=y;const r=new Image;r.src=w;const c=new Image;c.src=E;const s=new Image;s.src=L;const d=new Image;d.src=C;const l=new Image;l.src=k;const p=[a,i,o,r,c,s,d,l],m=["Excellent pasta made with a mix of fine cheeses from the area.","Potato dumplings made the same day they are served.","Pasta made with fresh ingredients and excellent fish.","Rustic pasta of ancient traditions, for those who want to rediscover past flavors.","Rich and tasty pasta, for those who want to indulge themselves.","Vegan pasta, made with organic and local ingredients.","Tagliatelle topped with a meat and tomato sauce, one of the most popular recipes.","tagliatelle with rustic sauce, an excellent variant for those who like a more consistent pasta."];for(let n=0;n<8;n++){const e=document.createElement("div");e.classList.add("menu-element-container");const a=p[n];a.classList.add("menu-image");const i=document.createElement("p");i.classList.add("element-description"),i.textContent=m[n],t.append(e),e.append(a),a.after(i)}document.getElementById("content").append(n),n.append(e),e.after(t)}const I=t.p+"d7a2a61b70ffcf895974.png",T=t.p+"d2514714f26ffb8bb924.png",M=t.p+"999465a2849f9a32a016.png";document.querySelector(".image-background").style.cssText=`background-image: url("${T}");\nbackground-size: 100%;\nbackground-attachment: fixed;\nbackground-repeat: no-repeat;`;const S=document.createElement("link");S.type="image/x-icon",S.rel="icon",S.href=M,document.head.appendChild(S),v();const A=document.getElementById("content");document.querySelector("nav").addEventListener("click",(n=>{n.target.classList.contains("Home")?(A.innerHTML="",v()):n.target.classList.contains("Menu")?(A.innerHTML="",D()):n.target.classList.contains("Contact")&&(A.innerHTML="",function(){document.querySelectorAll(".tab-navigation").forEach((n=>{n.firstChild.classList.contains("Contact")?n.firstChild.classList.add("active"):n.firstChild.classList.contains("active")&&n.firstChild.classList.remove("active")}));const n=document.createElement("div");n.classList.add("container-contact");const e=document.createElement("div");e.classList.add("title-container"),e.classList.add("title-contact"),e.innerHTML="<h1>Contact</h1><h3>Come visit us.</h3>";const t=document.createElement("div");t.classList.add("contact-container");const a=document.createElement("div");a.classList.add("telephone-container"),a.innerHTML='<i class="fa-solid fa-phone"></i><h4>0554 998743</h4>';const i=document.createElement("div");i.classList.add("adress-container"),i.innerHTML='<i class="fa-solid fa-location-dot"></i><h4>Via Ignazio Persico, 19 - 13, Rome.</h4>';const o=document.createElement("div");o.classList.add("contact-map-image-container");const r=new Image;r.src=I,r.classList.add("position-image"),o.append(r),t.append(a),a.after(i),i.after(o),e.after(t),document.getElementById("content").append(n),n.append(e),e.after(t)}())})),document.querySelector(".image-menu-container").addEventListener("click",(()=>{D()}))})()})();