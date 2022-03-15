import './App.css';
import axios from 'axios';
import React from 'react';

function App() {
  const [appName, setAppName] = React.useState(null);
  // DB has a plain ol js object named "BareBones" with an id of 1
  function getAppName() { axios.get('/api/pojso/1').then(res => setAppName((res.data))) }
  getAppName()
  return (
    <div className="App">
      <header className="App-header">
        <p>
          {appName}
        </p>
      </header>
    </div>
  );
}

export default App;
