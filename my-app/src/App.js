import React, { useState } from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import Display from './components/Display';
import styled from 'styled-components';

function App() {
  const [strikes, setStrikes] = useState(0);
  const [balls, setBalls] = useState(0);

  const strike = () => {
    if (strikes === 2) {
      setStrikes(0);
      setBalls(0);
    } else {
      setStrikes(strikes + 1);
    }
  };
  const ball = () => {
    if (balls === 3) {
      setBalls(0);
      setStrikes(0);
    } else {
      setBalls(balls + 1);
    }
  };
  const foul = () => {
    if (strikes === 2) {
      setStrikes(2);
    } else {
      setStrikes(strikes + 1);
    }
  };
  const hit = () => {
    setStrikes(0);
    setBalls(0);
  };
  return (
    <div className='container'>
      <PlayBall> Let's Play Ball!</PlayBall>
      <Dashboard ball={ball} strike={strike} foul={foul} hit={hit} />
      <Count>
        <Display strikes={strikes} balls={balls} />
      </Count>
    </div>
  );
}
export default App;

//styled componentts:

const PlayBall = styled.h1`
  color: navy;
  font-size: 4rem;
  text-align: center;
  font-family: 'Shadows Into Light', cursive;
`;

const Count = styled.h3`
  font-size: 2rem;
  text-align: center;
  font-family: 'Shadows Into Light', cursive;
`;
