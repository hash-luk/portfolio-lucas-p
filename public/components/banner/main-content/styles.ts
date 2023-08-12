import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    gap: 32px;
    position: relative;

    .nameDisplay {
        transition: all .2s ease;
        width: 50%;
    }
`;


export const OffDiv = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    position: absolute;
    right: 0;
    top: 0;
`

export const H1 = styled(motion.h1)`
    font-size: 5rem;
    color: ${props => props.theme.colors.white};

    b {
        color: ${props => props.theme.colors.cyan100} !important;
    }
`;

export const p = styled(motion.p)`
    font-size: 3rem;
    color: ${props => props.theme.colors.white};
`

export const TypeWritterDiv = styled(motion.div)`
    width: 100%;
    height: fit-content;
    padding-top: 16px;

    span {
        font-size: 2.5rem;
        color: ${props => props.theme.colors.baseGrayText};
    }
`;

export const MoreAnchor = styled.a`
    width: 170px;
    height: 50px;
    padding: 8px 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    font-size: 1.5rem;
    font-weight: 600;
    border-radius: 8px;
    background-color: ${props => props.theme.colors.cyan100};
    text-decoration: none;
    color: ${props => props.theme.colors.white};
    left: 0;
    transition: all ease-in .2s;

    :visited {
        color: initial;
    }

    :hover {
        width: 190px;
    }
`;