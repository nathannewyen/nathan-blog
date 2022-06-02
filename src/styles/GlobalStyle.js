import { createGlobalStyle } from "styled-components";
import fonts from "./fonts";

const GlobalStyle = createGlobalStyle`
    ${fonts}

    html {
        box-sizing: border-box;
        width: 100%;
        scroll-behavior: smooth;
      }

    *,
    *:before,
    *:after {
        box-sizing: inherit;
    }
`;

export default GlobalStyle;
