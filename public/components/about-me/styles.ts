import styled from "styled-components";


export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    position: relative;
    overflow: hidden;
    

    .shape {
        position: relative;
        z-index: 3;
        bottom: 0;
        width: 100%;
        height: 100%;
        background-color: #AF5CBC;
    }

    .profilePhoto {
        position: absolute;
        top: 22rem;
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
        width: 500px;
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        right: 45rem;
        top: 20rem;
        user-select: none;
        -webkit-user-select: none;

        h2 {
            font-size:3rem;
            line-height: 3.5rem;
            color: #DDDDDD;
            text-align: center;
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

    .ball {
        background-color: #303030;
        width: 100px;
        height: 100px;
        border-radius: 100%;
        position: absolute;
        z-index: 3;
        overflow: hidden !important;
        animation: scaleAnimation 3s infinite;


        @keyframes scaleAnimation {
            0% {
                transform: scale(1);
            }
            50% {
                transform: scale(1.1);
            }
            100% {
                transform: scale(1);
            }
        }
    }
`;
