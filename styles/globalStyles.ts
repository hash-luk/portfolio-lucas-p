import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 16px;
        overflow-x: hidden !important;
        background-color: ${props => props.theme.colors.background};
        scroll-behavior: smooth;
        max-width: 100vw;
        font-size: 62.5%;
    }

    body { 
        max-width: 100vw;
        overflow: hidden;
        background-color: ${props => props.theme.colors.background};
    }

    main {
        width: 100%;
        max-width: 1220px;
        margin: 0 auto;
    }
`;

export default GlobalStyle;
