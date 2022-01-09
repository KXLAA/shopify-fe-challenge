import styled from 'styled-components';
import device from './MediaQueries';

export const CardContainer = styled.div`
  background-color: #121212;
  border-radius: 0.5rem;
  padding: 1.5rem;
  -webkit-box-shadow: 3px 4px 15px -8px rgba(0, 0, 0, 0.71);
  box-shadow: 1px 4px 5px -8px rgba(0, 0, 0, 0.71);
  transition: all 0.3s ease;

  &:hover {
    transform: translateX(0rem) translateY(-0.3125rem);
  }

  @media ${device.mobile} {
    background-color: #161616;
    padding: 1rem;
  }

  img {
    width: 100%;
    height: 25rem;
    border-radius: 0.5rem;
    padding-bottom: 1.5rem;
  }

  h2 {
    font-size: 1.3rem;
    padding-bottom: 1rem;
    margin-bottom: 1rem;
    border-bottom: solid 1px;
    transition: all 0.3s ease;

    &:hover {
      color: yellow;
    }
  }

  p {
    padding-bottom: 1.5rem;
    font-size: 0.9375rem;
  }
`;

type ButtonProps = {
  bg?: string;
  color?: string;
};

export const Button = styled.button<ButtonProps>`
  width: 100%;
  border: none;
  outline: none;
  background: ${(props) => props.bg || `#202020`};
  padding: 0.5rem;
  border-radius: 0.25rem;
  font-weight: 700;
  color: ${(props) => props.color || `#e5e5e5`};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: yellow;
    color: #202020;
    transform: translateX(0rem) translateY(-0.125rem);
  }
  &:active:not(:disabled) {
    transform: translateX(0rem) translateY(0.125rem);
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
