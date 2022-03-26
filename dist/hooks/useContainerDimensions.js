"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _react=_interopRequireDefault(require("react")),_resizeObserver=_interopRequireDefault(require("@react-hook/resize-observer"));function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}/* Usage

// hooks
import {useContainerDimensions} from 'hooks/'

const MyComponent = () => {
  const componentRef = React.useRef(null);
  const { width, height, scrollTop, scrollLeft } = useContainerDimensions(componentRef);

  return (
    <div ref={componentRef}>
      <p>width: {width}px</p>
      <p>height: {height}px</p>
      <p>scrollTop: {scrollTop}px</p>
      <p>scrollLeft: {scrollLeft}px</p>
    <div/>
  )
}

*/ // libs
const useContainerDimensions=a=>{const b=()=>{if(!a.current)return c;const{offsetWidth:b,offsetHeight:d,scrollTop:e,scrollLeft:f,scrollWidth:g,scrollHeight:h}=a.current;return{width:b,height:d,scrollTop:e,scrollLeft:f,scrollWidth:g-b,scrollHeight:h-d}},[c,d]=_react.default.useState({width:0,height:0,scrollTop:0,scrollLeft:0}),e=()=>d(b());return _react.default.useLayoutEffect(()=>{e()},[a.current]),(0,_resizeObserver.default)(a.current,()=>{e()}),_react.default.useEffect(()=>(d(b()),a.current?.addEventListener("scroll",e),window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e),a.current?.removeEventListener("scroll",e)}),[a.current]),c};var _default=useContainerDimensions;exports.default=_default;