import React from 'react';
import styled from 'styled-components';

export default function Display(props) {
  const Container = styled.div``;
  return (
    <Container>
      <Strikes> Strikes: {props.strikes} </Strikes>
      <Balls> Balls : {props.balls}</Balls>
    </Container>
  );
}
// styled components:
const Strikes = styled.h2`
  color: red;
`;

const Balls = styled.h2`
  color: blue;
`;
