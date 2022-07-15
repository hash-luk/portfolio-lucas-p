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
        max-width: 100vw;

        ::-webkit-scrollbar {
            width: 10px;
        }

        ::-webkit-scrollbar-thumb {
            background: #AF5CBC;
            border-radius: 15px;
        }

        ::-webkit-scrollbar-track {
            background-color: #303030;
        }

        ::-webkit-scrollbar-button:single-button {
            background-color: #303030;
            display: block;
            border-style: solid;
            height: 10px;
            width: 16px;
        }

        ::-webkit-scrollbar-button:single-button:vertical:decrement {
            border-width: 0 8px 8px 8px;
            border-color: transparent transparent #AF5CBC transparent;
        }

        ::-webkit-scrollbar-button:single-button:vertical:decrement:hover {
            border-color: transparent transparent #fff transparent;
        }

        ::-webkit-scrollbar-button:single-button:vertical:increment {
            border-width: 8px 8px 0 10px;
            border-color: #AF5CBC transparent transparent transparent;
        }

        ::-webkit-scrollbar-button:vertical:single-button:increment:hover {
            border-color: #fff transparent transparent transparent;
        }

    }

    body { 
        max-width: 100vw;
        overflow: hidden;
    }
`;

export default GlobalStyle;
