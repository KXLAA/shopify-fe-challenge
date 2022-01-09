import React from 'react';
import styled from 'styled-components';
import device from './MediaQueries';

const LayoutStyled = styled.div`
  max-width: 1940px;
  margin: 0 auto;
  padding: 4rem;

  @media ${device.laptop} {
    padding-left: 2rem;
    padding-right: 2rem;
  }

  @media ${device.tablet} {
    padding-left: 3rem;
    padding-right: 3rem;
  }

  @media ${device.mobile} {
    padding: 2rem 1rem;
  }
`;

function Layout({ children }: React.PropsWithChildren<Record<never, any>>) {
  return <LayoutStyled>{children}</LayoutStyled>;
}

export default Layout;
