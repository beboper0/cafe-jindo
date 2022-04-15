/*! For license information please see index.js.LICENSE.txt */
!function(){var e={"./node_modules/lazysizes/lazysizes.js":function(e){!function(t,o){var n=function(e,t,o){"use strict";var n,i;if(function(){var t,o={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",fastLoadedClass:"ls-is-cached",iframeLoadMode:0,srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0,ricTimeout:0,throttleDelay:125};for(t in i=e.lazySizesConfig||e.lazysizesConfig||{},o)t in i||(i[t]=o[t])}(),!t||!t.getElementsByClassName)return{init:function(){},cfg:i,noSupport:!0};var s,r,a,l,d,u,c,f,m,h,v,g,b,p,y,_,j,z,w,C,A,E,T,x,S,O,L,N,R,M,W,k,P,I,H,B,F,$,D,q,G,U,Q,Y,J=t.documentElement,K=e.HTMLPictureElement,V="addEventListener",X=e.addEventListener.bind(e),Z=e.setTimeout,ee=e.requestAnimationFrame||Z,te=e.requestIdleCallback,oe=/^picture$/i,ne=["load","error","lazyincluded","_lazyloaded"],ie={},se=Array.prototype.forEach,re=function(e,t){return ie[t]||(ie[t]=new RegExp("(\\s|^)"+t+"(\\s|$)")),ie[t].test(e.getAttribute("class")||"")&&ie[t]},ae=function(e,t){re(e,t)||e.setAttribute("class",(e.getAttribute("class")||"").trim()+" "+t)},le=function(e,t){var o;(o=re(e,t))&&e.setAttribute("class",(e.getAttribute("class")||"").replace(o," "))},de=function(e,t,o){var n=o?V:"removeEventListener";o&&de(e,t),ne.forEach((function(o){e[n](o,t)}))},ue=function(e,o,i,s,r){var a=t.createEvent("Event");return i||(i={}),i.instance=n,a.initEvent(o,!s,!r),a.detail=i,e.dispatchEvent(a),a},ce=function(t,o){var n;!K&&(n=e.picturefill||i.pf)?(o&&o.src&&!t.getAttribute("srcset")&&t.setAttribute("srcset",o.src),n({reevaluate:!0,elements:[t]})):o&&o.src&&(t.src=o.src)},fe=function(e,t){return(getComputedStyle(e,null)||{})[t]},me=function(e,t,o){for(o=o||e.offsetWidth;o<i.minSize&&t&&!e._lazysizesWidth;)o=t.offsetWidth,t=t.parentNode;return o},he=(G=[],U=q=[],Y=function(e,o){$&&!o?e.apply(this,arguments):(U.push(e),D||(D=!0,(t.hidden?Z:ee)(Q)))},Y._lsFlush=Q=function(){var e=U;for(U=q.length?G:q,$=!0,D=!1;e.length;)e.shift()();$=!1},Y),ve=function(e,t){return t?function(){he(e)}:function(){var t=this,o=arguments;he((function(){e.apply(t,o)}))}},ge=function(e){var t,n,i=function(){t=null,e()},s=function(){var e=o.now()-n;e<99?Z(s,99-e):(te||i)(i)};return function(){n=o.now(),t||(t=Z(s,99))}},be=(j=/^img$/i,z=/^iframe$/i,w="onscroll"in e&&!/(gle|ing)bot/.test(navigator.userAgent),0,C=0,A=0,E=-1,T=function(e){A--,(!e||A<0||!e.target)&&(A=0)},x=function(e){return null==_&&(_="hidden"==fe(t.body,"visibility")),_||!("hidden"==fe(e.parentNode,"visibility")&&"hidden"==fe(e,"visibility"))},S=function(e,o){var n,i=e,s=x(e);for(g-=o,y+=o,b-=o,p+=o;s&&(i=i.offsetParent)&&i!=t.body&&i!=J;)(s=(fe(i,"opacity")||1)>0)&&"visible"!=fe(i,"overflow")&&(n=i.getBoundingClientRect(),s=p>n.left&&b<n.right&&y>n.top-1&&g<n.bottom+1);return s},L=function(e){var t,n=0,s=i.throttleDelay,r=i.ricTimeout,a=function(){t=!1,n=o.now(),e()},l=te&&r>49?function(){te(a,{timeout:r}),r!==i.ricTimeout&&(r=i.ricTimeout)}:ve((function(){Z(a)}),!0);return function(e){var i;(e=!0===e)&&(r=33),t||(t=!0,(i=s-(o.now()-n))<0&&(i=0),e||i<9?l():Z(l,i))}}(O=function(){var e,o,s,r,a,l,c,m,j,z,T,O,L=n.elements;if((f=i.loadMode)&&A<8&&(e=L.length)){for(o=0,E++;o<e;o++)if(L[o]&&!L[o]._lazyRace)if(!w||n.prematureUnveil&&n.prematureUnveil(L[o]))I(L[o]);else if((m=L[o].getAttribute("data-expand"))&&(l=1*m)||(l=C),z||(z=!i.expand||i.expand<1?J.clientHeight>500&&J.clientWidth>500?500:370:i.expand,n._defEx=z,T=z*i.expFactor,O=i.hFac,_=null,C<T&&A<1&&E>2&&f>2&&!t.hidden?(C=T,E=0):C=f>1&&E>1&&A<6?z:0),j!==l&&(h=innerWidth+l*O,v=innerHeight+l,c=-1*l,j=l),s=L[o].getBoundingClientRect(),(y=s.bottom)>=c&&(g=s.top)<=v&&(p=s.right)>=c*O&&(b=s.left)<=h&&(y||p||b||g)&&(i.loadHidden||x(L[o]))&&(u&&A<3&&!m&&(f<3||E<4)||S(L[o],l))){if(I(L[o]),a=!0,A>9)break}else!a&&u&&!r&&A<4&&E<4&&f>2&&(d[0]||i.preloadAfterLoad)&&(d[0]||!m&&(y||p||b||g||"auto"!=L[o].getAttribute(i.sizesAttr)))&&(r=d[0]||L[o]);r&&!a&&I(r)}}),R=ve(N=function(e){var t=e.target;t._lazyCache?delete t._lazyCache:(T(e),ae(t,i.loadedClass),le(t,i.loadingClass),de(t,M),ue(t,"lazyloaded"))}),M=function(e){R({target:e.target})},W=function(e,t){var o=e.getAttribute("data-load-mode")||i.iframeLoadMode;0==o?e.contentWindow.location.replace(t):1==o&&(e.src=t)},k=function(e){var t,o=e.getAttribute(i.srcsetAttr);(t=i.customMedia[e.getAttribute("data-media")||e.getAttribute("media")])&&e.setAttribute("media",t),o&&e.setAttribute("srcset",o)},P=ve((function(e,t,o,n,s){var r,a,l,d,u,f;(u=ue(e,"lazybeforeunveil",t)).defaultPrevented||(n&&(o?ae(e,i.autosizesClass):e.setAttribute("sizes",n)),a=e.getAttribute(i.srcsetAttr),r=e.getAttribute(i.srcAttr),s&&(d=(l=e.parentNode)&&oe.test(l.nodeName||"")),f=t.firesLoad||"src"in e&&(a||r||d),u={target:e},ae(e,i.loadingClass),f&&(clearTimeout(c),c=Z(T,2500),de(e,M,!0)),d&&se.call(l.getElementsByTagName("source"),k),a?e.setAttribute("srcset",a):r&&!d&&(z.test(e.nodeName)?W(e,r):e.src=r),s&&(a||d)&&ce(e,{src:r})),e._lazyRace&&delete e._lazyRace,le(e,i.lazyClass),he((function(){var t=e.complete&&e.naturalWidth>1;f&&!t||(t&&ae(e,i.fastLoadedClass),N(u),e._lazyCache=!0,Z((function(){"_lazyCache"in e&&delete e._lazyCache}),9)),"lazy"==e.loading&&A--}),!0)})),I=function(e){if(!e._lazyRace){var t,o=j.test(e.nodeName),n=o&&(e.getAttribute(i.sizesAttr)||e.getAttribute("sizes")),s="auto"==n;(!s&&u||!o||!e.getAttribute("src")&&!e.srcset||e.complete||re(e,i.errorClass)||!re(e,i.lazyClass))&&(t=ue(e,"lazyunveilread").detail,s&&pe.updateElem(e,!0,e.offsetWidth),e._lazyRace=!0,A++,P(e,t,s,n,o))}},H=ge((function(){i.loadMode=3,L()})),F=function(){u||(o.now()-m<999?Z(F,999):(u=!0,i.loadMode=3,L(),X("scroll",B,!0)))},{_:function(){m=o.now(),n.elements=t.getElementsByClassName(i.lazyClass),d=t.getElementsByClassName(i.lazyClass+" "+i.preloadClass),X("scroll",L,!0),X("resize",L,!0),X("pageshow",(function(e){if(e.persisted){var o=t.querySelectorAll("."+i.loadingClass);o.length&&o.forEach&&ee((function(){o.forEach((function(e){e.complete&&I(e)}))}))}})),e.MutationObserver?new MutationObserver(L).observe(J,{childList:!0,subtree:!0,attributes:!0}):(J.addEventListener("DOMNodeInserted",L,!0),J.addEventListener("DOMAttrModified",L,!0),setInterval(L,999)),X("hashchange",L,!0),["focus","mouseover","click","load","transitionend","animationend"].forEach((function(e){t.addEventListener(e,L,!0)})),/d$|^c/.test(t.readyState)?F():(X("load",F),t.addEventListener("DOMContentLoaded",L),Z(F,2e4)),n.elements.length?(O(),he._lsFlush()):L()},checkElems:L,unveil:I,_aLSL:B=function(){3==i.loadMode&&(i.loadMode=2),H()}}),pe=(r=ve((function(e,t,o,n){var i,s,r;if(e._lazysizesWidth=n,n+="px",e.setAttribute("sizes",n),oe.test(t.nodeName||""))for(s=0,r=(i=t.getElementsByTagName("source")).length;s<r;s++)i[s].setAttribute("sizes",n);o.detail.dataAttr||ce(e,o.detail)})),a=function(e,t,o){var n,i=e.parentNode;i&&(o=me(e,i,o),(n=ue(e,"lazybeforesizes",{width:o,dataAttr:!!t})).defaultPrevented||(o=n.detail.width)&&o!==e._lazysizesWidth&&r(e,i,n,o))},{_:function(){s=t.getElementsByClassName(i.autosizesClass),X("resize",l)},checkElems:l=ge((function(){var e,t=s.length;if(t)for(e=0;e<t;e++)a(s[e])})),updateElem:a}),ye=function(){!ye.i&&t.getElementsByClassName&&(ye.i=!0,pe._(),be._())};return Z((function(){i.init&&ye()})),n={cfg:i,autoSizer:pe,loader:be,init:ye,uP:ce,aC:ae,rC:le,hC:re,fire:ue,gW:me,rAF:he}}(t,t.document,Date);t.lazySizes=n,e.exports&&(e.exports=n)}("undefined"!=typeof window?window:{})},"./node_modules/lodash/_Symbol.js":function(e,t,o){var n=o("./node_modules/lodash/_root.js").Symbol;e.exports=n},"./node_modules/lodash/_baseGetTag.js":function(e,t,o){var n=o("./node_modules/lodash/_Symbol.js"),i=o("./node_modules/lodash/_getRawTag.js"),s=o("./node_modules/lodash/_objectToString.js"),r=n?n.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":r&&r in Object(e)?i(e):s(e)}},"./node_modules/lodash/_baseTrim.js":function(e,t,o){var n=o("./node_modules/lodash/_trimmedEndIndex.js"),i=/^\s+/;e.exports=function(e){return e?e.slice(0,n(e)+1).replace(i,""):e}},"./node_modules/lodash/_freeGlobal.js":function(e,t,o){var n="object"==typeof o.g&&o.g&&o.g.Object===Object&&o.g;e.exports=n},"./node_modules/lodash/_getRawTag.js":function(e,t,o){var n=o("./node_modules/lodash/_Symbol.js"),i=Object.prototype,s=i.hasOwnProperty,r=i.toString,a=n?n.toStringTag:void 0;e.exports=function(e){var t=s.call(e,a),o=e[a];try{e[a]=void 0;var n=!0}catch(e){}var i=r.call(e);return n&&(t?e[a]=o:delete e[a]),i}},"./node_modules/lodash/_objectToString.js":function(e){var t=Object.prototype.toString;e.exports=function(e){return t.call(e)}},"./node_modules/lodash/_root.js":function(e,t,o){var n=o("./node_modules/lodash/_freeGlobal.js"),i="object"==typeof self&&self&&self.Object===Object&&self,s=n||i||Function("return this")();e.exports=s},"./node_modules/lodash/_trimmedEndIndex.js":function(e){var t=/\s/;e.exports=function(e){for(var o=e.length;o--&&t.test(e.charAt(o)););return o}},"./node_modules/lodash/debounce.js":function(e,t,o){var n=o("./node_modules/lodash/isObject.js"),i=o("./node_modules/lodash/now.js"),s=o("./node_modules/lodash/toNumber.js"),r=Math.max,a=Math.min;e.exports=function(e,t,o){var l,d,u,c,f,m,h=0,v=!1,g=!1,b=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function p(t){var o=l,n=d;return l=d=void 0,h=t,c=e.apply(n,o)}function y(e){return h=e,f=setTimeout(j,t),v?p(e):c}function _(e){var o=e-m;return void 0===m||o>=t||o<0||g&&e-h>=u}function j(){var e=i();if(_(e))return z(e);f=setTimeout(j,function(e){var o=t-(e-m);return g?a(o,u-(e-h)):o}(e))}function z(e){return f=void 0,b&&l?p(e):(l=d=void 0,c)}function w(){var e=i(),o=_(e);if(l=arguments,d=this,m=e,o){if(void 0===f)return y(m);if(g)return clearTimeout(f),f=setTimeout(j,t),p(m)}return void 0===f&&(f=setTimeout(j,t)),c}return t=s(t)||0,n(o)&&(v=!!o.leading,u=(g="maxWait"in o)?r(s(o.maxWait)||0,t):u,b="trailing"in o?!!o.trailing:b),w.cancel=function(){void 0!==f&&clearTimeout(f),h=0,l=m=d=f=void 0},w.flush=function(){return void 0===f?c:z(i())},w}},"./node_modules/lodash/isObject.js":function(e){e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},"./node_modules/lodash/isObjectLike.js":function(e){e.exports=function(e){return null!=e&&"object"==typeof e}},"./node_modules/lodash/isSymbol.js":function(e,t,o){var n=o("./node_modules/lodash/_baseGetTag.js"),i=o("./node_modules/lodash/isObjectLike.js");e.exports=function(e){return"symbol"==typeof e||i(e)&&"[object Symbol]"==n(e)}},"./node_modules/lodash/now.js":function(e,t,o){var n=o("./node_modules/lodash/_root.js");e.exports=function(){return n.Date.now()}},"./node_modules/lodash/throttle.js":function(e,t,o){var n=o("./node_modules/lodash/debounce.js"),i=o("./node_modules/lodash/isObject.js");e.exports=function(e,t,o){var s=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return i(o)&&(s="leading"in o?!!o.leading:s,r="trailing"in o?!!o.trailing:r),n(e,t,{leading:s,maxWait:t,trailing:r})}},"./node_modules/lodash/toNumber.js":function(e,t,o){var n=o("./node_modules/lodash/_baseTrim.js"),i=o("./node_modules/lodash/isObject.js"),s=o("./node_modules/lodash/isSymbol.js"),r=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,l=/^0o[0-7]+$/i,d=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(s(e))return NaN;if(i(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=i(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=n(e);var o=a.test(e);return o||l.test(e)?d(e.slice(2),o?2:8):r.test(e)?NaN:+e}},"./src/style.css":function(e,t,o){"use strict";o.r(t)},"./src/scripts/modules/RevealOnScroll.js":function(e,t,o){"use strict";o.r(t);var n=o("./node_modules/lodash/throttle.js"),i=o.n(n),s=o("./node_modules/lodash/debounce.js"),r=o.n(s);t.default=class{constructor(e,t){this.thresholdPercent=t,this.itemsToReveal=e,this.browserHeight=window.innerHeight,this.hideInitially(),this.scrollThrottle=i()(this.calcCaller,200).bind(this),this.events()}events(){window.addEventListener("scroll",this.scrollThrottle),window.addEventListener("resize",r()((()=>{console.log("Resize just ran"),this.browserHeight=window.innerHeight}),333))}calcCaller(){console.log("Scroll function ran"),this.itemsToReveal.forEach((e=>{0==e.isRevealed&&this.calculateIfScrolledTo(e)}))}calculateIfScrolledTo(e){window.scrollY+this.browserHeight>e.offsetTop&&(console.log("Element was calculated"),e.getBoundingClientRect().top/this.browserHeight*100<this.thresholdPercent&&(e.classList.add("conceal-item--is-visible"),e.isRevealed=!0,e.isLastItem&&window.removeEventListener("scroll",this.scrollThrottle)))}hideInitially(){this.itemsToReveal.forEach((e=>{e.classList.add("conceal-item"),e.isRevealed=!1})),this.itemsToReveal[this.itemsToReveal.length-1].isLastItem=!0}}},"./src/scripts/modules/navigation.js":function(e,t,o){"use strict";o.r(t),o("./src/scripts/modules/RevealOnScroll.js");var n=jQuery.noConflict(),i=n(window);t.default=function(){if(n("body").hasClass("dropdown-mobile")){var e=n(".menu-content").clone();n("#mobile-dropdown nav").append(n(e)),n(".mobile-menu").on("click",(function(){return n("#mobile-dropdown").slideToggle(500),n(this).toggleClass("opened"),n(".mobile-menu > .hamburger").toggleClass("is-active"),!1}));var t=function(e){n("#mobile-dropdown").slideUp(200),n(".mobile-menu").removeClass("opened"),n(".mobile-menu > .hamburger").removeClass("is-active")},o=n(".mobile-menu > .hamburger"),s=!1;o.on("click",(function(){s=!s,o.attr("aria-expanded",s)})),n(document).on("click",(function(){t()})).on("click","#mobile-dropdown",(function(e){e.stopPropagation()})),i.resize((function(){i.width()>=960&&t()})),n('#mobile-dropdown li a[href*="#"]:not([href="#"])').on("click",(function(){t()}))}}}},t={};function o(n){var i=t[n];if(void 0!==i)return i.exports;var s=t[n]={exports:{}};return e[n](s,s.exports,o),s.exports}o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,{a:t}),t},o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};!function(){"use strict";o.r(n),o("./src/style.css"),o("./node_modules/lazysizes/lazysizes.js");var e=o("./src/scripts/modules/navigation.js"),t=o("./src/scripts/modules/RevealOnScroll.js");new e.default,new t.default(document.querySelectorAll(".marked-for-reveal"),75)}()}();
//# sourceMappingURL=index.js.map