import { createGlobalStyle } from 'styled-components';

export const theme = {
    colors: {

    },
    fontSize: {

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
  }

  ul {
    padding: 0;
    margin: 0;
  }

  li {
    list-style: none;
  }
`;