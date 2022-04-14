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
        background-color: #303030;
        scroll-behavior: smooth;

        ::-webkit-scrollbar {
            background: #303030;
            border-radius: 100% !important;
            width: 10px;
        }

        ::-webkit-scrollbar-thumb {
            background: #AF5CBC;
            border-radius: 15px;
        }
    }

    body { 
        overflow: hidden;
    }

`;

export default GlobalStyle;
