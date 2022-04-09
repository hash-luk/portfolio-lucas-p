import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    position: relative;

    .shape {
        position: relative;
        z-index: 3;
        bottom: 0;
        width: 100%;
        height: 100%;
        background-color: purple;
        clip-path: polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 25% 50%, 0% 0%);
    }

    .profilePhoto {
        position: absolute;
        top: 25rem;
        left: 45rem;
        width: 310px;
        height: 300px;
        z-index: 4;
        transition: all .2s ease;
        border-radius: 50%;

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
        right: 45rem;
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
