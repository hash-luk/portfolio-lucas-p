import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
`

export const Title = styled.h2`
    width: 100%;
    font-size: 3rem;
    color: ${props => props.theme.colors.white};
    font-weight: 700;
    text-align: left;
`

export const CardsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: center;
    gap: 16px;
`;

export const TechCard = styled(motion.div)`
    width: 200px;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    background-color: ${props => props.theme.colors.black100};
    border: 1px solid ${props => props.theme.colors.baseGrayText};
    transition: all .2s ease-in;
    position: relative;

    .tech-icon {
        position: absolute;
        margin: 0 auto;
        transition: all ease-in .2s;
    }

    span {
        opacity: 0;
        margin: 0 auto;
        bottom: 20px;
        position: absolute;
        font-size: 1.7rem;
        color: ${props => props.theme.colors.baseGrayText};
        transition: all .2s ease-in-out;
    }

    :hover {
        border: 1px solid ${props => props.theme.colors.primaryBlue};

        .tech-icon {
            transform: translateY(-20%);
        }

        span {
            opacity: 1;
            bottom: 45px;
            color: ${props => props.theme.colors.white};
        }
    }
`
