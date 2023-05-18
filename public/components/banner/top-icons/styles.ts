import styled from "styled-components";
import { motion } from "framer-motion";


export const Container = styled.div`
    width: 100vw;
    height: 2.375rem;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 64px;
    position: absolute;
    z-index: 4;
    margin-top: 12px;
    motion
    #icon {
        cursor: pointer;
        filter: drop-shadow(2px 2px 3px rgba(0, 0, 0, 0.25));
        transition: all .2s ease-in-out;


        :hover {
            transform: scale(1.1);
        }
    }

    .github-icon {
        :hover {
            color: #343838;
        }
    }

    .instagram-icon {
        :hover {
            color: #e1306c;
        }
    }

    .linkedin-icon {
        :hover {
            color: #00a0dc;
        }
    }

    @media screen and (max-width: 600px) {
        justify-content: flex-end;
        padding-right: 15px;
    }
`;

export const Icon = styled(motion.div)`
    width: 28px;
    height: 28px;
`