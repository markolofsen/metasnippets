"use strict";var _react=_interopRequireDefault(require("react"));Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}/*
Usage:

// hooks
import {useUnload} from 'hooks/'


const MyComponent = () => {
  useUnload(e => {
    e.preventDefault();
    e.returnValue = '';
  });

  return (
    <div>
      Some content
    </div>
  );
};

*/const useUnload=a=>{const b=_react.default.useRef(a);// init with fn, so that type checkers won't assume that current might be undefined
_react.default.useEffect(()=>{b.current=a},[a]);const c=(...a)=>b.current?.(...a);_react.default.useEffect(()=>()=>{d.deactivate()},[]);const d=new class{constructor(){}activate(){window.addEventListener("beforeunload",c)}deactivate(){window.removeEventListener("beforeunload",c)}};return d};var _default=useUnload;exports.default=_default;