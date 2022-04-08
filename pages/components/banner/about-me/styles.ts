import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    position: absolute;
    background-color: #303030;

    .shape {
        position: relative;
        z-index: 3;
        bottom: 0;
        width: 100%;
        height: 100%;
        background-color: purple;
        clip-path: polygon(0 15%, 100% 0, 77% 15%, 100% 22%, 100% 100%, 0 100%, 0% 80%, 0 35%);
    }

    .profilePhoto {
        position: absolute;
        top: 25rem;
        left: 40rem;
        width: 400px;
        height: 400px;
        z-index: 4;
        transition: all .2s ease;

        :hover {
            transform: scale(1.1);
        }
    }

    .content-text {
        position: absolute;
        z-index: 4;
        width: 400px;
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        right: 40rem;
        top: 25rem;

        h2 {
            font-size:3rem;
            line-height: 3.5rem;
            color: #DDDDDD;
            text-align: right;
            margin-bottom: 1.875rem;
        }

        p {
            width: 510px;
            height: 228px;
            color: #f2f2f2;
            font-size: 1.375rem;
            text-align: center;
        }
    }
`;
