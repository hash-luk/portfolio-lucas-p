import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 5.125rem;
    font-family: 'Roboto', sans-serif;
    position: relative;

    .content {
        display:flex;
        align-items: center;
        justify-content: center;
        width: 53.125rem;
        height: 90%;
        margin: 20px auto;
    }

    .instagram {

        :hover {
            .icon {
                opacity: 1;
                color: #e1306c;
            }

            p {
                color: #e1306c;
            }
        }
    }

    .email {
        :hover {
            .icon {
                opacity: 1;
                color: #AF5CBC;
            }

            p {
                color: #AF5CBC;
            }
        }
    }


    .linkedin {
        :hover {
            .icon {
                opacity: 1;
                color: #00a0dc;
            }

            p {
                color: #00a0dc;
            }
        }
    }

    .github {
        :hover {
            .icon {
                opacity: 1;
                color: #6e5494;
            }

            p {
                color: #6e5494;
            }
        }
    }

    @media screen and (max-width: 600px) {
        height: 10rem;
        width: 100vw;
        margin-bottom: 10px;

        .content {
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
            height: 100%;
            width: 100%;
            margin: 0 auto;
        }
    }
`

export const Contact = styled(motion.div)`
    display:flex;
        align-items: center;
        justify-content: space-evenly;
        width: 10.563rem;
        height: 1.25rem;
        cursor: pointer;
        text-decoration: none;

        p {
            color: #AFAFAF;
            transition: all .5s ease-in-out;

        }

        .icon {
            opacity: 0;
            transition: all .5s ease-in-out;

        }
`

export const CopiedEmail = styled(motion.div)`
    width: 150px;
    height: 50px;
    background-color: #88C425;
    position: absolute;
    bottom: 10px;
    left: 12px;
    font-family: 'Roboto',sans-serif;
    font-weight: 400;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFF;
    border-radius:15px;
    box-shadow: 1px 2px 1px rgba(0,0,0,0.5);
    opacity: 0;
    transition: all .5s ease-in-out;
`   