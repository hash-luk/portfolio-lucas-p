import styled from "styled-components";

export const BacktoTop = styled.div`
    width: 3.5rem;
    height: 3.5rem;
    position: fixed;
    z-index: 999;
    left: 4rem;
    bottom: 4rem;
    text-align: center;
    background-color: ${props => props.theme.colors.white};
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all .3s ease-in-out;

    :hover {
        transform: scale(1.05);
    }

    #icon {
        transition: all .2s ease;
        cursor: pointer;
        color: ${props => props.theme.colors.background};
    }

    @media screen and (max-width: 600px) {
        #icon {
            width: 40px;
            height: 40px;
        }
    }
`