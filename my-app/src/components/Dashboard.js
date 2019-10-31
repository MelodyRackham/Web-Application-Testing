import React from 'react';
import styled from 'styled-components';

export default function Dashboard(props) {
  return (
    <Buttons>
      <Button className='button' onClick={props.hit}>
        Hit
      </Button>
      <Button className='button' onClick={props.strike}>
        Strike
      </Button>
      <Button className='button' onClick={props.ball}>
        Ball
      </Button>
      <Button className='button' onClick={props.foul}>
        Foul
      </Button>
    </Buttons>
  );
}

// styled components:

const Button = styled.button`
        height: 2.5rem; 
        font-size: 1.8rem;
        border-radius: 100px;       
        width: 15%
        background-color: white;
        color: navy;
        height: 2.5rem;
        font-family: 'Shadows Into Light', cursive;
        margin: 1rem 1rem;


        
    `;
const Buttons = styled.div`
  border-radius: 100px;
  width: 90%;
  margin-left: 5%;
  background-color: navy;
  display: flex;
  justify-content: space-around;
`;
