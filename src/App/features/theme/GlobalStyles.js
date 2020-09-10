import { createGlobalStyle } from "styled-components"
export const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  *, ::after, ::before {
    box-sizing: inherit;
  }
  body {
    background: ${({ theme }) => theme.colors.background};
    font-family: "Roboto Condensed", sans-serif;
    transition: all 0.3s linear;
    margin: 10px;

    @media (max-width: ${({ theme }) => theme.breakpoints.phone}) {
        font-size: 15px;
    }
  }
  `