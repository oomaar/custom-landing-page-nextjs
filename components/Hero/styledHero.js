import styled from 'styled-components';
import { lgScreen, mdScreen, smScreen } from '../../Global/GlobalStyle';

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
  width: 1020px;
  text-align: center;

  @media screen and (max-width: ${lgScreen}) {
    width: 100%;
  }
`;

export const Heading = styled.p`
  font-weight: 500;
  text-transform: uppercase;
  margin: 8rem 0 0 0;
  color: ${({ theme }) => theme.colors.altColor};
  font-size: ${({ theme }) => theme.fontSize.mediumFont};
`;

export const SubHeading = styled.h1`
  margin: 2rem 0 3rem;
  padding-bottom: 1.5rem;
  position: relative;
  font-size: ${({ theme }) => theme.fontSize.bigFont};

  ::after {
    content: "";
    position: absolute;
    bottom: -20px;
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 11rem;
    height: 0.25rem;
    border-radius: 1rem;
    background: ${({ theme }) => theme.colors.altColor};
  }

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