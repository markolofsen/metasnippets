/*
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

*/
import React from 'react';

const useUnload = fn => {
  const cb = React.useRef(fn); // init with fn, so that type checkers won't assume that current might be undefined

  React.useEffect(() => {
    cb.current = fn;
  }, [fn]);

  const onUnload = (...args) => cb.current?.(...args);

  React.useEffect(() => {

    return () => {
      cls.deactivate()
    };

  }, []);

  const cls = new class {
    constructor() { }

    activate() {
      window.addEventListener("beforeunload", onUnload);
    }
    deactivate() {
      window.removeEventListener("beforeunload", onUnload)
    }
  }

  return cls
};

export default useUnload
