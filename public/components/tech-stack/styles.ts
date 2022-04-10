import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    padding-top: 12rem;
    position: relative;
    overflow: hidden;

    #icons-container {
        width: 25rem;
        height: 28.43rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        margin: 0 auto;
        margin-top: 4.8rem;

        .icon-row {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-evenly;
        }


        .icon {
            filter: grayscale(100%);
            -webkit-filter: grayscale(90%);
            transition: all .3s ease;
        }

        .left {
            :hover {
                transform: rotateZ(-10deg) scale(1.03);
                filter: grayscale(0%);
            }
        }

        .middle {
            :hover {
                transform: scale(1.03);
                filter: grayscale(0%);
            }
        }

        .right {
            :hover {
                transform: rotateZ(10deg) scale(1.03);
                filter: grayscale(0%);
            }
        }
    }

    .ball {
        background-color: #AB35AD;
        width: 100px;
        height: 100px;
        border-radius: 100%;
        position: absolute;
        z-index: -1;
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
`

export const Title = styled.h2`
    margin: 0 auto;
    max-width: 15rem;
    font-size: 2.25rem;
    color: #DADADA;
    font-weight: 700;
    line-height: 2.625rem;
    text-align: center;
    text-shadow: 1px 2px 1px rgba(0, 0, 0, 0.25);
    font-family: 'Roboto', sans-serif;
    transition: all .3s ease-in-out;
    user-select: none;
    -webkit-user-select: none;

    :hover {
        letter-spacing: .1rem;
        transform: scale(1.2);
        color: #AB35AD;

        span {
            color: #DADADA;
        }
    }

    span {
        color: #AB35AD;
        transition: color .3s ease-in-out;
    }
`
