import { createGlobalStyle } from "styled-components"
export const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  *, ::after, ::before {
    box-sizing: inherit;
  }
  body {
    background: ${({ theme }) => theme.background};
    font-family: "Roboto Condensed", sans-serif;
    transition: all 0.3s linear;
  }
  `