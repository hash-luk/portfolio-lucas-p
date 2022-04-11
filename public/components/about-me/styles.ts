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
        top: 21rem;
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
        width: 700px;
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        right: 30rem;
        top: 18rem;
        user-select: none;
        -webkit-user-select: none;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        text-shadow: 2px 2px 1px rgba(0, 0, 0, 0.5);

        h2 {
            font-size:3rem;
            line-height: 3.5rem;
            text-align: right;
            color: #DDDDDD;
            margin-bottom: 1.875rem;
        }

        p {
            width: 510px;
            height: 228px;
            color: #f2f2f2;
            font-size: 1.375rem;
            text-align: right;
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
