import styled from "styled-components";


export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    position: relative;
    overflow: hidden;
    background-color: #AF5CBC;
    display: flex;
    font-family: 'Roboto', sans-serif;
    text-shadow: 2px 2px 1px rgba(0, 0, 0, 0.5);
    padding: 20px 0px;

    .content {
        position: absolute;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        width: 100%;
        height: 100%;
        z-index: 4;

        h2 {
            font-size:3rem;
            line-height: 3.5rem;
            text-align: right;
            color: #DDDDDD;
            margin-bottom: 1.875rem;
            transition: all .2s ease-in-out;
            user-select: none;
            -webkit-user-select: none;

            span {
                color: #303030;
                transition: all .2s ease-in-out;
            }

            :hover {
                transform: scale(1.1);
                letter-spacing: .1rem;

                span {
                    color: #DDDDDD;
                }
            }
        }
    }

    .profilePhoto {
        width: 13.875rem;
        height: 13.438rem;
        z-index: 4;
        transition: all .2s ease;
        border-radius: 50%;

        :hover {
            transform: scale(1.1);
        }
    }

    .content-text {
        width: 55rem;
        height: 14rem;
        font-weight: 400;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;

        background-color: rgba(0, 0, 0, 0.5);
        border: 0.5px solid #DADADADA;
        border-radius: 15px;
        transition: all .2s ease;

        span {
            font-size: 1.8rem;
        }

        p {
            max-width: 53rem;
            max-height: 13.188rem;
            color: #f2f2f2;
            font-size: 1.3rem;
            line-height: 24px;
        }

        :hover {
            background-color: rgba(0, 0, 0, 0.8);
        }
    }

    .ball {
        background-color: #303030;
        width: 100px;
        height: 100px;
        border-radius: 100%;
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
