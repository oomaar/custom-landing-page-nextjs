import styled, { createGlobalStyle } from 'styled-components';

export const transition = `all 0.5s ease-in`;

export const xlScreen = `1300px`;
export const lgScreen = `1024px`;
export const mdScreen = `900px`;
export const smScreen = `600px`;

export const theme = {
  colors: {
    firstColor: `#a1958d`,
    altColor: `#ff0059`,
    textColor: `#fff`,
    textColorAlt: `#000`,
    bodyColor: `#eeefea`
  },
  fontSize: {
    bigFont: `clamp(1.3rem, 3vw, 3rem)`,
    mediumFont: `clamp(1.3rem, 3vw, 2rem)`,
    logoFont: `1.7rem`,
    cardFont: `1.3rem`,
    buttonFont: `1.2rem`,
  }
};

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    background-color: ${({ theme }) => theme.colors.bodyColor};
  }

  h1,h2,h3,h4,h5,h6,p {
    margin: 0;
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }

  button {
    border: 0;
    outline: 0;
    cursor: pointer;
  }

  ul {
    padding: 0;
    margin: 0;
  }

  li {
    list-style: none;
  }
`;

export const Button = styled.button`
  padding: 0.5rem 1.9rem;
  margin: 0 1.5rem;
  text-transform: uppercase;
  color: #fff;
  border-radius: 2rem;
  background: ${({ contact, theme }) => contact ? theme.colors.altColor : `transparent`};
  border: 1px solid ${({ contact }) => contact ? `transparent` : `#fff`};
  font-size: ${({ theme }) => theme.fontSize.buttonFont};

  @media screen and (max-width: ${mdScreen}) {
    margin: 0.5rem 0;
    width: 15rem;
  }
`;

export const SectionTitle = styled.h1`
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.fontSize.bigFont};
  color: ${({ theme }) => theme.colors.altColor};
`;