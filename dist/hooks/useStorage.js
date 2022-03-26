"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;/*
Usage:

// hooks
import {useStorage} from 'hooks/'

const STORAGE_KEY = 'DEMO_KEY'

function Demo() {
  const storage = useStorage()
  const [data, setData] = React.useState({name: ''})

  React.useEffect(() => {

    const stored_data = storage.getItem(STORAGE_KEY, 'local')
    if(typeof stored_data === 'object') {
      setData(stored_data)
    }

  }, [])

  const handleChange = (key) => (event) => {
    const value = event.target.value

    setData(c => {
      const newData = {...c, [key]: value}
      storage.setItem(STORAGE_KEY, newData, 'local')
      return newData;
    })
  }

  return (
    <TextField
      value={data.name}
      onChange={handleChange('name')}
      label="Name"
      type="text"
      fullWidth
    />
  );
};

*/ // type StorageType = 'session' | 'local';
// type UseStorageReturnValue = {
//   getItem: (key: string, type?: StorageType) => string;
//   setItem: (key: string, value: string, type?: StorageType) => boolean;
//   removeItem: (key: string, type?: StorageType) => void;
// };
const useStorage=()=>{const a=a=>`${a??"session"}Storage`,b="undefined"!=typeof window;return{getItem:(c,d)=>{let e=window[a(d)][c];// If value is object
try{e=JSON.parse(e)}catch(a){}return b?e:""},setItem:(c,d,e)=>{if(b){// If value is object
if("object"==typeof d)try{d=JSON.stringify(d)}catch(a){console.error("Can't serialize data",a)}return window[a(e)].setItem(c,d),!0}return!1},removeItem:(b,c)=>{window[a(c)].removeItem(b)}}};var _default=useStorage;exports.default=_default;