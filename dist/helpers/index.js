"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _CustomClass=_interopRequireDefault(require("./CustomClass")),_ArrayClass=_interopRequireDefault(require("./ArrayClass"));function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}/* Usage

// hooks
import {useHelpers} from 'hooks/'

function demo() {
  const helpers = useHelpers();

  return (
    helpers.format.formatMoney(10000, '$')
    helpers.format.formatNumber({
      value: 33,
      decimal: 2,
      addon: '',
      separator: ',',
    })
  )
}


*/ // hooks
// import { default as format } from './FormatClass';
var _default={// format,
custom:_CustomClass.default,array:_ArrayClass.default};exports.default=_default;