"use strict";var _react=_interopRequireDefault(require("react"));Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}/* Usage

// hooks
import {useWindowSize} from 'hooks/'

function App() {
	const windowSize = useWindowSize();

	return (
		<div>
			{windowSize.width}px / {windowSize.height}px
		</div>
	);
}
*/ // Hook
function useWindowSize(){// Initialize state with undefined width/height so server and client renders match
// Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
const[a,b]=_react.default.useState({width:void 0,height:void 0});_react.default.useEffect(()=>{// Handler to call on window resize
function a(){b({width:window.innerWidth,height:window.innerHeight});// Set for css
const a=document.documentElement;a.style.setProperty("--window-width",window.innerWidth+"px"),a.style.setProperty("--window-height",window.innerHeight+"px")}// Add event listener
// Remove event listener on cleanup
return window.addEventListener("resize",a),a(),()=>window.removeEventListener("resize",a)},[]);// Empty array ensures that effect is only run on mount
const{width:c,height:d}=a;return{width:c,height:d}}var _default=useWindowSize;exports.default=_default;