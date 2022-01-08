import React from 'react';
import styled from 'styled-components';
import device from './MediaQueries';

const Container = styled.footer`
  margin-top: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
  padding: 1rem;
  font-size: 1.5rem;
  text-align: center;

  @media ${device.mobile} {
    font-size: 1rem;
  }

  a {
    transition: all 0.3s ease;
    cursor: pointer;
    color: yellow;
    text-decoration: underline;
    &:hover {
      color: #414141;
    }
  }
`;

const Footer = () => {
  return (
    <Container>
      <p>
        Shopify Front End Developer Intern Challenge, Summer 2022
        {` `}
      </p>

      <p>
        Crafted by{` `}
        <a href="https://www.kxlaa.com/" target="_blank" rel="noreferrer">
          Kola
        </a>
      </p>
    </Container>
  );
};

export default Footer;
