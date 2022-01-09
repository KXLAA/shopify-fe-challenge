import React from 'react';
import styled from 'styled-components';
import device from './MediaQueries';
import Link from 'next/link';

const Container = styled.div`
  padding: 1.5rem;
  background-color: #161616;
  border-radius: 0.5rem;
  text-align: center;

  p {
    font-size: 5rem;
    @media ${device.laptopS} {
      font-size: 3rem;
    }

    @media ${device.mobile} {
      font-size: 1.5rem;
    }
  }

  a {
    &:hover {
      color: yellow;
      text-decoration: underline;
    }
  }
`;

type ErrorProps = {
  message?: string;
  line01: string;
  line02: string;
};

function ErrorEmpty({ message, line01, line02 }: ErrorProps) {
  return (
    <Container>
      <>
        <p>
          {line01} {message}
          {` `}
        </p>
        <p>
          <Link href="/">{line02}</Link>
        </p>
      </>
    </Container>
  );
}

export default ErrorEmpty;
