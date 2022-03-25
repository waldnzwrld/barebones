import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useState, useEffect } from 'react';

const AppContainer = styled.div`
  text-align: center;
`;

const Header = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`

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
    <AppContainer>
      <Header>
        <p>
          {appName}
        </p>
      </Header>
    </AppContainer>
  );
}
