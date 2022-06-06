import React from 'react';
import './App.css';

import Photo from './component/profile/Photo'
import FullName from './component/profile/FullName'
import Address from './component/profile/Address';

function App() {
  return (
    <div className='App'>
      <h2>Hello world</h2>
        <Photo/>
        <FullName/>
        <Address/>
    </div>
  );
}

export default App;
