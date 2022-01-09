/* eslint-disable react/jsx-curly-brace-presence */
import React from 'react';
import styled from 'styled-components';
import device from 'components/common/MediaQueries';

const HeaderStyled = styled.header`
  text-align: center;
  margin-bottom: 1.5rem;

  @media ${device.mobile} {
    margin-bottom: 0rem;
  }
`;

const Logo = styled.h1`
  font-size: 7rem;
  border-radius: 8px;
  background-color: #161616;
  padding: 2rem;
  margin-bottom: 1.5rem;

  @media ${device.laptopS} {
    font-size: 5rem;
  }

  @media ${device.tablet} {
    font-size: 3.5rem;
  }

  @media ${device.mobile} {
    font-size: 2rem;
    padding: 1rem;
    margin-bottom: 1rem;
  }

  @media ${device.mobileS} {
    font-size: 1.8rem;
  }
`;

export const Nav = styled.nav`
  display: flex;
  gap: 2rem;
  margin-bottom: 1.5rem;

  @media ${device.mobile} {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const HeaderLinks = styled.a`
  width: 100%;
  display: block;
  cursor: pointer;
  padding: 0 2rem;
  font-weight: bold;
  font-size: 5rem;
  border-radius: 8px;
  background-color: #161616;
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    background: yellow;
    color: #202020;
    transform: translateX(0rem) translateY(-0.125rem);
  }
  &:active:not(:disabled) {
    transform: translateX(0rem) translateY(0.125rem);
  }

  @media ${device.laptop} {
    font-size: 3.5rem;
  }

  @media ${device.laptopS} {
    font-size: 2.5rem;
  }

  @media ${device.tablet} {
    font-size: 2rem;
    padding: 0.25rem;
  }

  @media ${device.mobile} {
    font-size: 1.5rem;
  }
`;

type HeaderProps = {
  title: string;
};

function Header({ title }: HeaderProps) {
  return (
    <HeaderStyled>
      <Logo> {title}</Logo>
    </HeaderStyled>
  );
}

export default Header;
