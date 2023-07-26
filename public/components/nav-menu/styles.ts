import styled from "styled-components";
import { motion } from 'framer-motion';

export const Container = styled.div`
    width: 9.875rem;
    height: 10.938rem;
    position: absolute;
    z-index: 999999;
    margin-left: 0.75rem;

    .responsive-menu {
        width: 32px;
        height: 32px;
        margin-top: 12px;
        display: none;

        #icon {
            width: 100%;
            height: 100%;
        }
    }

    .content {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: left;
        justify-content: space-evenly;
        padding-left: 2px;
        transition: all .3s ease;
        transform: translateX(-300px);

        a {
            padding-left: 5px;
            text-decoration: none;
            color: ${props => props.theme.colors.white};
            font-family: 'Roboto', sans-serif;
            font-weight: 300;
            text-shadow: 2px 2px 1px rgba(0, 0, 0, 0.5);
            transition: all .2s ease;
            border-left: 1px solid #fff;

            :hover {
                border-left: 3px solid #00DFFC;
                color: ${props => props.theme.colors.white};
                transform: translateX(10px);
                font-weight: 500;
            }
        }

    }

    .closed {
        transform: translateX(-300px);
    }



    @media screen and (max-width: 600px) {
        .responsive-menu {
            display: block;
        }

        .content {
            transform: translateX(-300px);
        }
    }

    .open {
        transform: translateX(0px);
    }
`

export const a = styled(motion.a)`
        padding-left: 5px;
        text-decoration: none;
        color: #fff;
        font-family: 'Roboto', sans-serif;
        font-weight: 300;
        text-shadow: 2px 2px 1px rgba(0, 0, 0, 0.5);
        transition: all .2s ease;
        border-left: 1px solid #fff;

        :hover {
            border-left: 3px solid #AF5CBC;
            color: #AF5CBC;
            transform: translateX(10px);
            font-weight: 500;
        }
`