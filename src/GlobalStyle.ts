import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  body {
    font-family: 'Roboto', sans-serif;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
    font-variation-settings: 'wdth' 100;
    background: #f9fafb;
    max-width: 100vw;
    max-height: 100vh;
  }
`;

export default GlobalStyle;
