"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _react=_interopRequireDefault(require("react")),_useSound=_interopRequireDefault(require("use-sound"));function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}/* Usage

// material
import Button from '@mui/material/Button';

// hooks
import {useSound} from 'hooks/'

function Demo() {
  const sound = useSound('http://.../sound.mp3');

  return (
    <div>
      <Button onClick={() => sound.play()}>
        Play sound
      </Button>
    </div>
  );
}
*/ // libs
// https://www.npmjs.com/package/use-sound
// Collections
// https://www.zedge.net/find/ringtones/notification%20sounds
function useSound(a){const[b,c]=_react.default.useState(.99),[d,e]=(0,_useSound.default)(a,{playbackRate:b,// `interrupt` ensures that if the sound starts again before it's
// ended, it will truncate it. Otherwise, the sound can overlap.
interrupt:!0}),{stop:f,pause:g,duration:h,sound:i}=e;return{play:()=>{// setPlaybackRate(playbackRate + .1);
// Not playing without any click by document
d()},stop:f,pause:g,duration:h,sound:i}}var _default=useSound;exports.default=_default;