/*! For license information please see components-Card-Card-stories.dd4ac080.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[518],{"./node_modules/@babel/runtime/helpers/esm/objectSpread2.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return _objectSpread2}});var esm_typeof=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/typeof.js");function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==(0,esm_typeof.Z)(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==(0,esm_typeof.Z)(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===(0,esm_typeof.Z)(key)?key:String(key)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread2(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){var obj,key,value;obj=e,key=r,value=t[r],(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}},"./node_modules/@babel/runtime/helpers/esm/typeof.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}__webpack_require__.d(__webpack_exports__,{Z:function(){return _typeof}})},"./src/components/Card/Card.stories.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{PrimaryCard:function(){return PrimaryCard},SecondaryCard:function(){return SecondaryCard},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return Card_stories}});var _PrimaryCard$paramete,_PrimaryCard$paramete2,_PrimaryCard$paramete3,_SecondaryCard$parame,_SecondaryCard$parame2,_SecondaryCard$parame3,objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Card=function Card(_ref){var title=_ref.title,bgColor=_ref.bgColor,padding=_ref.padding;return(0,jsx_runtime.jsx)("div",{style:{backgroundColor:bgColor,padding:padding},children:title})};try{Card.displayName="Card",Card.__docgenInfo={description:"",displayName:"Card",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},bgColor:{defaultValue:null,description:"",name:"bgColor",required:!0,type:{name:"string"}},padding:{defaultValue:null,description:"",name:"padding",required:!1,type:{name:"enum",value:[{value:'"10px"'},{value:'"20px"'},{value:'"30px"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Card/Card.tsx#Card"]={docgenInfo:Card.__docgenInfo,name:"Card",path:"src/components/Card/Card.tsx#Card"})}catch(__react_docgen_typescript_loader_error){}var Card_stories={title:"Card",component:Card,parameters:{layout:"centered",backgrounds:{values:[{name:"green",value:"green"}]}},tags:["autodocs"],argTypes:{bgColor:{control:"color",description:"Background color of the card"}}},PrimaryCard={args:{bgColor:"#f00",title:"Card for user"}},SecondaryCard={args:{bgColor:"#00f",title:"Card for second user"}};PrimaryCard.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},PrimaryCard.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_PrimaryCard$paramete=PrimaryCard.parameters)||void 0===_PrimaryCard$paramete?void 0:_PrimaryCard$paramete.docs),{},{source:(0,objectSpread2.Z)({originalSource:"{\n  args: {\n    bgColor: '#f00',\n    title: 'Card for user'\n  }\n}"},null===(_PrimaryCard$paramete2=PrimaryCard.parameters)||void 0===_PrimaryCard$paramete2||null===(_PrimaryCard$paramete3=_PrimaryCard$paramete2.docs)||void 0===_PrimaryCard$paramete3?void 0:_PrimaryCard$paramete3.source)})}),SecondaryCard.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},SecondaryCard.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_SecondaryCard$parame=SecondaryCard.parameters)||void 0===_SecondaryCard$parame?void 0:_SecondaryCard$parame.docs),{},{source:(0,objectSpread2.Z)({originalSource:"{\n  args: {\n    bgColor: '#00f',\n    title: 'Card for second user'\n  }\n}"},null===(_SecondaryCard$parame2=SecondaryCard.parameters)||void 0===_SecondaryCard$parame2||null===(_SecondaryCard$parame3=_SecondaryCard$parame2.docs)||void 0===_SecondaryCard$parame3?void 0:_SecondaryCard$parame3.source)})});var __namedExportsOrder=["PrimaryCard","SecondaryCard"]},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":function(__unused_webpack_module,exports,__webpack_require__){var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":function(module,__unused_webpack_exports,__webpack_require__){module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);