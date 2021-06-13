import React from 'react';
import './App.css';

import "antd/dist/antd.css"
import Reginstration from './component/Reginstration';
import HomeScreen from './component/HomeScreen';

function App() {
  return (
    <div
    style={{
      display:"flex",
      alignItems:'center',
      flexWrap:'wrap',
      flexDirection:'column'
    }}
    >
      <div>Hello</div>

      <Reginstration />
<br/>
<br/>
<br/>
      <HomeScreen />
    </div>
  );
}

export default App;
