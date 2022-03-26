"use strict";var _react=_interopRequireDefault(require("react"));Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0,exports.useReducerEvents=useReducerEvents,exports.useStateEvents=useStateEvents;function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}/* Usage

// hooks
import {useStateEvents, useReducerEvents} from 'hooks/'

function Demo() {

  const [state, dispatch] = useReducerEvents(reducer, initialState)
  const [test, setTest] = useStateEvents(false)

  React.useEffect(() => {

    document.addEventListener('demo_key', (e) => {
      console.log(e.detail)
      dispatch({...})
      // or setTest(true)
    })

  }, [])

  return (<div />)

}

*/function useStateEvents(a){const[b,c]=_react.default.useState(a),d=_react.default.useRef(b);return _react.default.useEffect(()=>{d.current=b},[b]),[b,c,d]}function useReducerEvents(a,b){const[c,d]=_react.default.useReducer(a,b),e=_react.default.useRef(c);return _react.default.useEffect(()=>{e.current=c},[c]),[c,d,e]}var _default=void 0;exports.default=void 0;