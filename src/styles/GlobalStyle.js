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
        margin: 0;
        padding: 0;
    }

    body {
        margin: 0;
        width: 100%;
        min-height: 100%;
        overflow-x: hidden;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        background-color: var(--color-navy);
        font-family: var(--font-sans);
        line-height: 1.3;
    }

    *,
    *:before,
    *:after {
        box-sizing: inherit;
    }

    ul {
        margin: 0;
        padding: 0;
    }

    a {
        display: inline-block;
        text-decoration: none;
        text-decoration-skip-ink: auto;
        color: inherit;
        position: relative;
    }
`;

export default GlobalStyle;
