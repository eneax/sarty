import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'Open Sans Condensed', sans-serif;
    padding: 2rem 4rem;
  }

  a {
    text-decoration: none;
    color: black;
  }
`;

export default GlobalStyle;
