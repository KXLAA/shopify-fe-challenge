import styled from 'styled-components';
import React from 'react';
import device from './MediaQueries';

const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  padding: 1.5rem;
  background-color: #161616;
  border-radius: 0.5rem;

  @media ${device.laptopS} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${device.tablet} {
    grid-template-columns: repeat(1, 1fr);
  }

  @media ${device.mobile} {
    padding: 0rem;
    background: none;
  }
`;

function Grid({ children }: React.PropsWithChildren<Record<never, any>>) {
  return <Container>{children}</Container>;
}

export default Grid;
