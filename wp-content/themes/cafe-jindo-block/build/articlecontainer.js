/*! For license information please see articlecontainer.js.LICENSE.txt */
(()=>{"use strict";var e={"@wordpress/block-editor":e=>{e.exports=window.wp.blockEditor}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,r),a.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};(()=>{r.r(n);var e=r("@wordpress/block-editor");wp.blocks.registerBlockType("cafeblocktheme/articlecontainer",{title:"Article Page Container",category:"design",supports:{align:["full"]},attributes:{align:{type:"string",default:"full"}},edit:function(){return React.createElement(React.Fragment,null,React.createElement("div",{className:"article-content"},React.createElement("div",{className:"container"},React.createElement(e.InnerBlocks,null))))},save:function(){return React.createElement(e.InnerBlocks.Content,null)}})})()})();
//# sourceMappingURL=articlecontainer.js.map