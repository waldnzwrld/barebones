import './App.css';
import axios from 'axios';
import React from 'react';


function App() {
  const [appName, setAppName] = React.useState(null);
  function getAppName() { axios.get('/appname').then(res => setAppName((res.data))) }
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
