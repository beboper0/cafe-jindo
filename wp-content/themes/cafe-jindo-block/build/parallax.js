/*! For license information please see parallax.js.LICENSE.txt */
(()=>{"use strict";var e={"@wordpress/block-editor":e=>{e.exports=window.wp.blockEditor}},t={};function r(a){var n=t[a];if(void 0!==n)return n.exports;var l=t[a]={exports:{}};return e[a](l,l.exports,r),l.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var a in t)r.o(t,a)&&!r.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var a={};(()=>{r.r(a);var e=r("@wordpress/block-editor");wp.blocks.registerBlockType("cafeblocktheme/parallax",{title:"Parallax Container",category:"design",supports:{align:["full"]},attributes:{align:{type:"string",default:"full"}},edit:function(){return React.createElement(React.Fragment,null,React.createElement("div",{className:"parallax-container"},React.createElement("main",{id:"primary",className:"site-main"},React.createElement(e.InnerBlocks,null))))},save:function(){return React.createElement(e.InnerBlocks.Content,null)}})})()})();
//# sourceMappingURL=parallax.js.map