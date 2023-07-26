import styled from "styled-components";

export const BacktoTop = styled.a`
    width: 4rem;
    height: 4rem;
    position: fixed;
    z-index: 999;
    left: 3.125rem;
    bottom: 3.125rem;
    text-align: center;

    #icon {
        filter: drop-shadow(0px 3px 5px rgba(0, 0, 0, 0.3));
        transition: all .2s ease;
        cursor: pointer;

        :hover {
            color: #00DFFC;
        }
    }

    @media screen and (max-width: 600px) {
        #icon {
            width: 40px;
            height: 40px;
        }
    }
`