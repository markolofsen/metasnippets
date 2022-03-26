"use strict";var _lodash=_interopRequireDefault(require("lodash"));Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}// libs
const ArrayClass=new class{split(a,b=2){return _lodash.default.chunk(a,Math.round(a.length/b))}uniqPlainArray(a){a=a.filter(a=>a);const b=new Map(a.map(a=>[a.toLowerCase(),a])),c=[...b.values()];// console.warn('res',res);
return c;// return [];
}};var _default=ArrayClass;exports.default=_default;