import React from 'react';
import styled from 'styled-components';
import Loader from 'react-loader-spinner';

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 3rem;
`;

export default function Loading() {
  return (
    <Container>
      <Loader
        type="BallTriangle"
        color="yellow"
        height={400}
        width={400}
        timeout={5000} // 5 secs
      />
    </Container>
  );
}
