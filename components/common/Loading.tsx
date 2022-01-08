import React from 'react';
import BallTriangle from 'react-loader-spinner';
import styled from 'styled-components';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 3rem;
`;

export default function Loading() {
  return (
    <Container>
      <BallTriangle
        type="BallTriangle"
        height="100"
        width="100"
        color="yellow"
        arialLabel="loading-indicator"
      />
    </Container>
  );
}
