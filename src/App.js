import React from 'react';

import lib from './lib/';
import './App.css';



function App() {

  console.dir(lib)

  return (
    <div>
      <pre>
        {JSON.stringify(lib, null, 4)}
      </pre>
    </div>
  )
}
export default App
