/*! For license information please see mainbutton.js.LICENSE.txt */
(()=>{"use strict";var e={"./node_modules/@wordpress/icons/build-module/library/link.js":(e,t,r)=>{r.r(t),r.d(t,{default:()=>i});var n=r("@wordpress/element"),o=r("@wordpress/primitives");const i=(0,n.createElement)(o.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,n.createElement)(o.Path,{d:"M15.6 7.2H14v1.5h1.6c2 0 3.7 1.7 3.7 3.7s-1.7 3.7-3.7 3.7H14v1.5h1.6c2.8 0 5.2-2.3 5.2-5.2 0-2.9-2.3-5.2-5.2-5.2zM4.7 12.4c0-2 1.7-3.7 3.7-3.7H10V7.2H8.4c-2.9 0-5.2 2.3-5.2 5.2 0 2.9 2.3 5.2 5.2 5.2H10v-1.5H8.4c-2 0-3.7-1.7-3.7-3.7zm4.6.9h5.3v-1.5H9.3v1.5z"}))},"@wordpress/block-editor":e=>{e.exports=window.wp.blockEditor},"@wordpress/blocks":e=>{e.exports=window.wp.blocks},"@wordpress/components":e=>{e.exports=window.wp.components},"@wordpress/element":e=>{e.exports=window.wp.element},"@wordpress/primitives":e=>{e.exports=window.wp.primitives}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,r),i.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};(()=>{r.r(n);var e=r("./node_modules/@wordpress/icons/build-module/library/link.js"),t=r("@wordpress/components"),o=r("@wordpress/block-editor"),i=(r("@wordpress/blocks"),r("@wordpress/element"));function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}wp.blocks.registerBlockType("cafeblocktheme/mainbutton",{title:"Main Button",category:"design",attributes:{text:{type:"string"},size:{type:"string",default:"large"},linkObject:{type:"object",default:{url:""}},colorName:{type:"string",default:"blue"}},edit:function(r){var n,a,s=(n=(0,i.useState)(!1),a=2,function(e){if(Array.isArray(e))return e}(n)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i,l,a=[],s=!0,c=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;s=!1}else for(;!(s=(n=i.call(r)).done)&&(a.push(n.value),a.length!==t);s=!0);}catch(e){c=!0,o=e}finally{try{if(!s&&null!=r.return&&(l=r.return(),Object(l)!==l))return}finally{if(c)throw o}}return a}}(n,a)||function(e,t){if(e){if("string"==typeof e)return l(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?l(e,t):void 0}}(n,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),c=s[0],u=s[1];return React.createElement(React.Fragment,null,React.createElement(o.BlockControls,null,React.createElement(t.ToolbarGroup,null,React.createElement(t.ToolbarButton,{onClick:function(){u((function(e){return!e}))},icon:e.default})),React.createElement(t.ToolbarGroup,null,React.createElement(t.ToolbarButton,{isPressed:"large"===r.attributes.size,onClick:function(){return r.setAttributes({size:"large"})}},"Large"),React.createElement(t.ToolbarButton,{isPressed:"medium"===r.attributes.size,onClick:function(){return r.setAttributes({size:"medium"})}},"Medium"),React.createElement(t.ToolbarButton,{isPressed:"small"===r.attributes.size,onClick:function(){return r.setAttributes({size:"small"})}},"Small"))),React.createElement(o.RichText,{allowedFormats:[],tagName:"a",className:"btn btn--".concat(r.attributes.size),value:r.attributes.text,onChange:function(e){r.setAttributes({text:e})}}),c&&React.createElement(t.Popover,{position:"middle center",onFocusOutside:function(){return u(!1)}},React.createElement(o.__experimentalLinkControl,{settings:[],value:r.attributes.linkObject,onChange:function(e){r.setAttributes({linkObject:e})}}),React.createElement(t.Button,{variant:"primary",onClick:function(){return u(!1)},style:{display:"block",width:"100%"}},"Confirm Link")))},save:function(e){return React.createElement("a",{href:e.attributes.linkObject.url,className:"btn btn--".concat(e.attributes.size),value:e.attributes.text},e.attributes.text)}})})()})();
//# sourceMappingURL=mainbutton.js.map