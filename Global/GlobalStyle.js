import { createGlobalStyle } from 'styled-components';

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
    bigFont: `clamp(1.7rem, 3vw, 3rem)`,
    mediumFont: `clamp(1.5rem, 3vw, 2rem)`,
    logoFont: `1.7rem`,
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