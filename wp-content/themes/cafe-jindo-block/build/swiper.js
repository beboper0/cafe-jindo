/*! For license information please see swiper.js.LICENSE.txt */
(()=>{"use strict";var e={"@wordpress/block-editor":e=>{e.exports=window.wp.blockEditor}},t={};function r(o){var l=t[o];if(void 0!==l)return l.exports;var a=t[o]={exports:{}};return e[o](a,a.exports,r),a.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o={};(()=>{r.r(o);var e=r("@wordpress/block-editor");wp.blocks.registerBlockType("cafeblocktheme/swiper",{title:"Swiper",category:"design",supports:{align:["full"]},attributes:{align:{type:"string",default:"full"}},edit:function(){return React.createElement(React.Fragment,null,React.createElement("div",{className:"swiper-container"},React.createElement("div",{className:"swiper-wrapper"},React.createElement(e.InnerBlocks,{allowedBlocks:["cafeblocktheme/slide"],template:[["cafeblocktheme/slide",{}],["cafeblocktheme/slide",{}]]}))))},save:function(){return React.createElement(e.InnerBlocks.Content,null)}})})()})();
//# sourceMappingURL=swiper.js.map