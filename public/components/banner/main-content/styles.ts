import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .nameDisplay {
        font-family: 'Inter',sans-serif;
        font-size: 2.5rem;
        font-weight: 100;
        z-index: 6;
        color: #DDDDDD;
        user-select: none;
        transition: all .2s ease;
        
        span {
            color: #AF5CBC;
            font-weight: 500;
        }

        :hover {
            transform: scale(1.05);
        }
    }


    #icon {
        z-index: 6;
        position: absolute;
        bottom: 0.75rem;
        cursor: pointer;
        width: 60px;
        height: 60px;
        filter: drop-shadow(0px 3px 5px rgba(0, 0, 0, 0.3));
        transition: all .2s ease-in-out;
        
        animation: jumpingIcon 2s infinite;

        :hover {
            color: #AF5CBC;
        }
    }

    @keyframes jumpingIcon {
        0% {
            transform: translateY(0) ;
        }
        50% {
            transform: translateY(-10px) ;
        }
        100% {
            transform: translateY(0) ;
        }
    }
`;


export const Filter = styled.div`
    width: 100vw;
    height: 100%;
    background-color: rgba(20,20,20,0.5);
    position: absolute;
    z-index: 3;
    overflow-x: hidden !important;
    user-select: none;

    @media screen and (max-width: 768px) {
        height: 100vh;
    }
`

export const linkIcon = styled(motion.a)`
    width:60px;
    height: 60px;

`