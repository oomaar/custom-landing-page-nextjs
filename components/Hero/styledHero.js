import styled from 'styled-components';
import { mdScreen, smScreen } from '../../Global/GlobalStyle';

export const Header = styled.header`
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.75)),
  url("/hero-bg.jpg")
  center center / cover no-repeat;
  height: 80vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.textColor};

  @media screen and (max-width: ${mdScreen}) {
    height: 90vh;
  }
`;

export const Feature = styled.div`
  width: 750px;
  text-align: center;

  @media screen and (max-width: 750px) {
    width: 100%;
  }
`;

export const Heading = styled.h1`
  text-transform: uppercase;
  position: relative;
  margin: 8rem 0 0 0;
  font-size: ${({ theme }) => theme.fontSize.bigFont};

  ::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 11rem;
    height: 0.25rem;
    border-radius: 1rem;
    background: ${({ theme }) => theme.colors.firstColor};
  }
`;

export const SubHeading = styled.p`
  margin: 2rem 0 3rem;
  font-size: ${({ theme }) => theme.fontSize.mediumFont};

  @media screen and (max-width: ${smScreen}) {
    padding: 0 0.3rem;
  }
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
`;

export const Button = styled.button`
  padding: 0.5rem 1.9rem;
  margin: 0 1.5rem;
  text-transform: uppercase;
  color: #fff;
  border-radius: 2rem;
  background: ${({ contact, theme }) => contact ? theme.colors.firstColor : `transparent`};
  border: 1px solid ${({ contact }) => contact ? `transparent` : `#fff`};
  font-size: ${({ theme }) => theme.fontSize.buttonFont};

  @media screen and (max-width: ${mdScreen}) {
    margin: 0.5rem 0;
    width: 15rem;
  }
`;