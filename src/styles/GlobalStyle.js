import { createGlobalStyle } from "styled-components";
import fonts from "./fonts";
import variables from "./variables";

const GlobalStyle = createGlobalStyle`
    ${fonts}
    ${variables}
    
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
