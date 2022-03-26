"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _react=_interopRequireDefault(require("react")),_reactDeviceDetect=require("react-device-detect");function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}/* Usage
https://www.npmjs.com/package/react-device-detect

// hooks
import {useDevice} from 'hooks/'

function demo() {
	const device = useDevice();

	return (
		<div>
			{device.isMobile && 'isMobile'}
			<br />
			{device.isDesktop && 'isDesktop'}
		</div>
	)
}

*/ // libs
// import * as detect from 'react-device-detect';
function getDevice(){return{BrowserView:_reactDeviceDetect.BrowserView,MobileView:_reactDeviceDetect.MobileView,isBrowser:_reactDeviceDetect.isBrowser,isMobile:_reactDeviceDetect.isMobile}}var _default=getDevice;exports.default=_default;