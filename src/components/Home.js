import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function Home(){
  const [appName, setAppName] = useState('');

  useEffect(() => {
    getAppName()
  }, []);

  // DB has a plain ol js object named "BareBones" with an id of 1
  function getAppName() {
    axios.get('/api/pojso/1')
      .then(res => setAppName((res.data)))
      .catch(err => console.error(err));
  }

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
